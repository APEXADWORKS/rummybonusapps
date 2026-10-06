import fs from "fs";
import path from "path";
import { getAllApps, readLocalStore } from "../db.js";

const BASE_URL = "https://www.rummybonusapps.com";

interface SitemapUrl {
  loc: string;
  priority: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastmod?: string;
}

export async function generateSitemapXml(): Promise<string> {
  const currentDate = new Date().toISOString().split("T")[0];

  // 1. Core static, categories, login hubs, and SEO blog URLs
  const staticUrls: SitemapUrl[] = [
    {
      loc: `${BASE_URL}/`,
      priority: "1.0",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/all-rummy-apps`,
      priority: "0.95",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/rummy-51-bonus`,
      priority: "0.95",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/colour-trading-games`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },

    // Colour Game Login Hubs & Aliases
    {
      loc: `${BASE_URL}/91-club-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/91-club`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/91club`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/91-clubs`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/tiranga-game-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/tiranga-game`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/82-lottery-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/82-lottery`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/goa-game-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/goa-game`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/veer-game-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/veer-game`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/ok-win-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/ok-win`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/maan-win-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/maan-win`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/diu-win-login`,
      priority: "0.9",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/du-win-login`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/diu-win`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/du-win`,
      priority: "0.85",
      changefreq: "daily",
      lastmod: currentDate,
    },

    // Campaign & Special Landing Pages
    {
      loc: `${BASE_URL}/apex1`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/apex2`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/apex3`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/apex4`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/apex5`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/uttam1`,
      priority: "0.8",
      changefreq: "daily",
      lastmod: currentDate,
    },

    // SEO Strategy Blog Guides
    {
      loc: `${BASE_URL}/rummyblog1`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/rummyblog2`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/rummyblog3`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/rummyblog4`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/rummyblog5`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/rummyblog6`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

    // Policy & Legal Pages
    {
      loc: `${BASE_URL}/about-us`,
      priority: "0.5",
      changefreq: "monthly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/contact-us`,
      priority: "0.5",
      changefreq: "monthly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/privacy-policy`,
      priority: "0.5",
      changefreq: "monthly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/disclaimer`,
      priority: "0.5",
      changefreq: "monthly",
      lastmod: currentDate,
    },
    {
      loc: `${BASE_URL}/terms-and-conditions`,
      priority: "0.5",
      changefreq: "monthly",
      lastmod: currentDate,
    },
  ];

  // 2. Fetch all apps dynamically from MongoDB or apps-store.json local fallback
  let apps: any[] = [];
  try {
    const res = await getAllApps({ limit: 1000 });
    if (res && Array.isArray(res.apps) && res.apps.length > 0) {
      apps = res.apps;
    }
  } catch (err) {
    console.warn("[Sitemap] getAllApps notice:", err);
  }

  // Ensure fallback reads from apps-store.json directly
  if (!apps || apps.length === 0) {
    try {
      apps = readLocalStore();
    } catch {
      try {
        const storePath = path.resolve(process.cwd(), "server/data/apps-store.json");
        if (fs.existsSync(storePath)) {
          apps = JSON.parse(fs.readFileSync(storePath, "utf-8"));
        }
      } catch (e) {
        console.warn("[Sitemap] File fallback error:", e);
      }
    }
  }

  const appUrls: SitemapUrl[] = (apps || []).map((app) => {
    let appPath = `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`;
    if (app.id === "91-club") appPath = "/91-club-login";
    else if (app.id === "veer-game") appPath = "/veer-game-login";
    else if (app.id === "82-lottery") appPath = "/82-lottery-login";
    else if (app.id === "maan-win") appPath = "/maan-win-login";
    else if (app.id === "ok-win") appPath = "/ok-win-login";
    else if (app.id === "diu-win" || app.id === "du-win") appPath = "/diu-win-login";
    else if (app.id === "tiranga-game") appPath = "/tiranga-game-login";
    else if (app.id === "goa-game") appPath = "/goa-game-login";
    else if (app.id === "rummy-apple") appPath = "/uttam1";

    const lastModDate = app.updatedAt
      ? new Date(app.updatedAt).toISOString().split("T")[0]
      : currentDate;

    return {
      loc: `${BASE_URL}${appPath}`,
      priority: app.isTrending ? "0.85" : "0.8",
      changefreq: app.isTrending ? "daily" : "weekly",
      lastmod: lastModDate,
    };
  });

  // Combine and deduplicate by loc
  const allUrlsMap = new Map<string, SitemapUrl>();
  for (const item of [...staticUrls, ...appUrls]) {
    allUrlsMap.set(item.loc, item);
  }

  const uniqueUrls = Array.from(allUrlsMap.values());

  // Build clean, standard XML string with <loc>, <priority>, <changefreq>, <lastmod>
  const xmlItems = uniqueUrls
    .map(
      (item) => `  <url>
    <loc>${escapeXml(item.loc)}</loc>
    <priority>${item.priority}</priority>
    <changefreq>${item.changefreq}</changefreq>
    <lastmod>${item.lastmod || currentDate}</lastmod>
  </url>`
    )
    .join("\n");

  const fullXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  // Also sync public/sitemap.xml and dist/sitemap.xml files on disk
  try {
    const publicSitemapPath = path.resolve(process.cwd(), "public/sitemap.xml");
    fs.writeFileSync(publicSitemapPath, fullXml, "utf-8");
  } catch {}
  try {
    const distSitemapPath = path.resolve(process.cwd(), "dist/sitemap.xml");
    if (fs.existsSync(path.dirname(distSitemapPath))) {
      fs.writeFileSync(distSitemapPath, fullXml, "utf-8");
    }
  } catch {}

  return fullXml;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
