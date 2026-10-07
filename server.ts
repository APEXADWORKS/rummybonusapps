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

  // Pure Raw XML Sitemap Generator for Google Search Console
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const xml = await generateSitemapXml();
      res.setHeader("Content-Type", "text/xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=300, s-maxage=600");
      res.status(200).send(xml);
    } catch (err) {
      console.error("Error generating dynamic sitemap:", err);
      res.status(500).setHeader("Content-Type", "text/plain; charset=utf-8").send("Error generating dynamic sitemap");
    }
  });

  // Human-friendly HTML Sitemap viewer for users
  app.get("/sitemap-html", async (req, res) => {
    try {
      const xml = await generateSitemapXml();
      const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>HTML Sitemap | Rummy Bonus Apps</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: system-ui, sans-serif; background: #090d16; color: #e2e8f0; padding: 24px; margin: 0; }
    .box { max-width: 900px; margin: 0 auto; background: #121929; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; }
    h1 { color: #ffd700; margin-top: 0; }
    a { color: #38bdf8; text-decoration: none; }
    a:hover { text-decoration: underline; }
    ul { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 8px; }
    li { background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 6px; font-size: 13px; word-break: break-all; }
  </style>
</head>
<body>
  <div class="box">
    <h1>All Indexed URLs (${urls.length})</h1>
    <p>Raw XML format for Google Search Console is available at <a href="/sitemap.xml">/sitemap.xml</a>.</p>
    <ul>
      ${urls.map((u) => `<li><a href="${u}" target="_blank">${u.replace("https://www.rummybonusapps.com", "") || "/"}</a></li>`).join("")}
    </ul>
  </div>
</body>
</html>`;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(html);
    } catch {
      res.redirect("/sitemap.xml");
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
      server: { 
        middlewareMode: true,
        hmr: false,
      },
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

      const { html: appHtml, headTags, title } = render(url) as any;

      let fullHtml = template;

      // 1. Ensure the TOP <title> tag dynamically updates with the exact page item name
      // (e.g., Jungle Haan APK Download - Get ₹51 Bonus | RBA) instead of generic site titles.
      if (title) {
        const cleanTitle = String(title).replace(/<[^>]*>/g, '').trim();
        const finalTitle = cleanTitle.length > 60 ? cleanTitle.slice(0, 60).trim() : cleanTitle;
        if (/<title[^>]*>[\s\S]*?<\/title>/i.test(fullHtml)) {
          fullHtml = fullHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title data-rh="true">${finalTitle}</title>`);
        } else {
          fullHtml = fullHtml.replace("<head>", `<head>\n    <title data-rh="true">${finalTitle}</title>`);
        }
      }

      // 2. Remove default static tags with data-rh="true" from template so they don't duplicate
      if (headTags) {
        fullHtml = fullHtml.replace(/<meta\s+[^>]*data-rh=["']true["'][^>]*\/?>\s*/gi, "");
        fullHtml = fullHtml.replace(/<link\s+[^>]*data-rh=["']true["'][^>]*\/?>\s*/gi, "");
      }

      // 3. Completely remove any accidental <meta name="title"> tags
      fullHtml = fullHtml.replace(/<meta\s+[^>]*name=["']title["'][^>]*\/?>\s*/gi, "");

      // 4. Inject dynamic head tags cleanly right before </head>
      if (headTags) {
        fullHtml = fullHtml.replace("</head>", `    ${headTags}\n  </head>`);
      }

      // 5. Inject clean body html inside #root (which is guaranteed to have NO meta or title tags)
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
