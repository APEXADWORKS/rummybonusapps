import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { pathToFileURL } from "url";
import { createServer as createViteServer, ViteDevServer } from "vite";
import { initDatabase } from "./server/db.js";
import { apiRouter } from "./server/routes/api.js";
import { generateSitemapXml } from "./server/services/sitemapService.js";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === "production";

  // Initialize MongoDB / Database service
  await initDatabase();

  // Middleware for parsing requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // REST API router for managing 80+ apps and database health
  app.use("/api", apiRouter);

  // Dynamic XML Sitemap Generator
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const xml = await generateSitemapXml();
      res.type("application/xml");
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=300, s-maxage=600");
      res.status(200).send(xml);
    } catch (err) {
      console.error("Error generating dynamic sitemap:", err);
      res.status(500).type("text/plain").send("Error generating dynamic sitemap");
    }
  });

  // Dynamic robots.txt pointing to the dynamic sitemap
  app.get("/robots.txt", (req, res) => {
    res.header("Content-Type", "text/plain; charset=utf-8");
    res.send(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin-login
Disallow: /admin

Sitemap: https://www.rummybonusapps.com/sitemap.xml
`);
  });

  // Telegram webhook receiver page /tg_webhook (supporting POST)
  app.post("/tg_webhook", async (req, res) => {
    try {
      const data = req.body;
      console.log("Received Webhook Payload:", JSON.stringify(data));

      if (data && data.chat_join_request) {
        const join_req = data.chat_join_request;
        const user_id = join_req.from?.id;
        const first_name = join_req.from?.first_name || 'Telegram User';

        if (user_id) {
          // Meta Configuration
          const pixel_id = "2098601020718503";
          const access_token = "EAAN1toqIhT4BRrLJJ9WTiFbbXGtONDZBEIUguy3s7ZBfeZBHuTJpXU3fIoah2EF6OcRRk5PGrAEsuQtZAw7cWjOGwE50bGk0Kd2jPJuZAnlcGHJL5Knzp2BY9RFOjvDj3GRGwDK83sZAwiCfRruHl2ZAgt5U3VNOfX5GY4SKkEc96DRb7IzIDGSR8jbAZAjyf2OWVQZDZD";
          const event_source_url = "https://www.rummybonusapps.com/";

          // Hashing function for security
          const fn_hash = crypto
            .createHash('sha256')
            .update(first_name.toLowerCase().trim())
            .digest('hex');
          const ex_hash = crypto
            .createHash('sha256')
            .update(String(user_id).toLowerCase().trim())
            .digest('hex');

          // Payload for Meta CAPI
          const payload = {
            data: [{
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: event_source_url,
              user_data: {
                fn: [fn_hash],
                external_id: [ex_hash],
                client_ip_address: req.ip || "103.211.218.4",
                client_user_agent: req.headers['user-agent'] || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
              },
              custom_data: {
                content_name: "Telegram Real Join",
                content_category: "AI Studio Webhook Live"
              }
            }],
            access_token: access_token
          };

          // Send direct to Meta CAPI
          const url = `https://graph.facebook.com/v17.0/${pixel_id}/events`;
          
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          const resText = await response.text();
          console.log("Sent Meta CAPI Event status:", response.status, resText);
        }
      }

      res.status(200).send("OK");
    } catch (error) {
      console.error("Error in /tg_webhook handler:", error);
      res.status(500).send("Internal Error");
    }
  });

  // Support GET request for the tg_webhook link as well (returns OK as requested by raw PHP echo)
  app.get("/tg_webhook", (req, res) => {
    res.status(200).send("OK");
  });

  let vite: ViteDevServer | undefined;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    const distClient = fs.existsSync(path.resolve(process.cwd(), "dist/client"))
      ? path.resolve(process.cwd(), "dist/client")
      : path.resolve(process.cwd(), "dist");
    app.use(express.static(distClient, { index: false }));
  }

  // Server-Side Rendering (SSR) handler for all incoming page requests
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;

    // Ignore direct requests for static asset files with extensions (e.g. .png, .css, .js)
    if (url.includes(".") && !url.endsWith(".html")) {
      return next();
    }

    try {
      let template: string;
      let render: (url: string) => { html: string; headTags: string };

      if (!isProd && vite) {
        const rawTemplate = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, rawTemplate);
        const serverModule = await vite.ssrLoadModule("/src/entry-server.tsx");
        render = serverModule.render;
      } else {
        const templatePath = fs.existsSync(path.resolve(process.cwd(), "dist/index.html"))
          ? path.resolve(process.cwd(), "dist/index.html")
          : path.resolve(process.cwd(), "dist/client/index.html");
        template = fs.readFileSync(templatePath, "utf-8");
        const serverEntryPath = path.resolve(process.cwd(), "dist/server/entry-server.js");
        if (fs.existsSync(serverEntryPath)) {
          const serverEntry = await import(pathToFileURL(serverEntryPath).href);
          render = serverEntry.render;
        } else {
          render = () => ({ html: "", headTags: "" });
        }
      }

      const { html: appHtml, headTags } = render(url);

      let fullHtml = template;
      if (headTags) {
        fullHtml = fullHtml.replace("</head>", `${headTags}\n</head>`);
      }

      if (fullHtml.includes("<!--ssr-outlet-->")) {
        fullHtml = fullHtml.replace("<!--ssr-outlet-->", () => appHtml);
      } else if (fullHtml.includes('<div id="root"></div>')) {
        fullHtml = fullHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
      }

      res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).end(fullHtml);
    } catch (err: any) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(err);
      }
      console.error("SSR rendering error for URL:", url, err);

      // Safe fallback to client-rendered HTML shell
      try {
        const fallbackPath = isProd
          ? (fs.existsSync(path.resolve(process.cwd(), "dist/index.html"))
              ? path.resolve(process.cwd(), "dist/index.html")
              : path.resolve(process.cwd(), "dist/client/index.html"))
          : path.resolve(process.cwd(), "index.html");
        let fallbackHtml = fs.readFileSync(fallbackPath, "utf-8");
        if (!isProd && vite) {
          fallbackHtml = await vite.transformIndexHtml(url, fallbackHtml);
        }
        res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).end(fallbackHtml);
      } catch (fallbackErr) {
        next(err);
      }
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
