import { getAllApps } from "../db.js";

const BASE_URL = "https://www.rummybonusapps.com";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

export async function generateSitemapXml(): Promise<string> {
  const currentDate = new Date().toISOString().split("T")[0];

  // 1. Core static and category pages
  const staticUrls: SitemapUrl[] = [
    {
      loc: `${BASE_URL}/`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "1.0",
    },
    {
      loc: `${BASE_URL}/colour-trading-games`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/91-club-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/veer-game-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/82-lottery-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/maan-win-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/ok-win-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/diu-win-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/tiranga-game-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/goa-game-login`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.9",
    },
    {
      loc: `${BASE_URL}/uttam1`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "0.8",
    },
    {
      loc: `${BASE_URL}/about-us`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.5",
    },
    {
      loc: `${BASE_URL}/contact-us`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.5",
    },
    {
      loc: `${BASE_URL}/privacy-policy`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.5",
    },
    {
      loc: `${BASE_URL}/disclaimer`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.5",
    },
    {
      loc: `${BASE_URL}/terms-and-conditions`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.5",
    },
  ];

  // 2. Fetch all apps dynamically from MongoDB / Database
  const { apps } = await getAllApps({ limit: 1000 });

  const appUrls: SitemapUrl[] = apps.map((app) => {
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
      lastmod: lastModDate,
      changefreq: app.isTrending ? "daily" : "weekly",
      priority: app.isTrending ? "0.85" : "0.7",
    };
  });

  // Combine and deduplicate by loc
  const allUrlsMap = new Map<string, SitemapUrl>();
  for (const item of [...staticUrls, ...appUrls]) {
    allUrlsMap.set(item.loc, item);
  }

  const uniqueUrls = Array.from(allUrlsMap.values());

  // Build clean XML string
  const xmlItems = uniqueUrls
    .map(
      (item) => `  <url>
    <loc>${escapeXml(item.loc)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;
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
