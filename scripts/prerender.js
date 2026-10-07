import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function runPrerender() {
  const startTime = Date.now();
  console.log('🚀 [SSG] Starting Static Site Generation for all pages...');

  const templatePath = path.resolve(rootDir, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found! Run "vite build" first.');
  }
  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  const serverEntryPath = path.resolve(rootDir, 'dist-ssr/entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error('dist-ssr/entry-server.js not found! Run "vite build --ssr" first.');
  }

  const { render, RUMMY_APPS } = await import(pathToFileURL(serverEntryPath).href);

  // 1. Core routes
  const routes = [
    '/',
    '/all-rummy-apps',
    '/rummy-51-bonus',
    '/91-club-login',
    '/91-club',
    '/91club',
    '/91-clubs',
    '/veer-game-login',
    '/veer-game',
    '/82-lottery-login',
    '/82-lottery',
    '/maan-win-login',
    '/maan-win',
    '/ok-win-login',
    '/ok-win',
    '/du-win-login',
    '/du-win',
    '/tiranga-game-login',
    '/tiranga-game',
    '/goa-game-login',
    '/goa-game',
    '/apex1',
    '/apex2',
    '/apex3',
    '/apex4',
    '/apex5',
    '/uttam1',
    '/rummyblog1',
    '/rummyblog2',
    '/rummyblog3',
    '/rummyblog4',
    '/rummyblog5',
    '/rummyblog6',
  ];

  // 2. All 83+ Rummy App detail routes (supporting id slug, raw slug, and lowercase slug)
  if (Array.isArray(RUMMY_APPS)) {
    for (const app of RUMMY_APPS) {
      if (app.id === 'rummy-apple') {
        continue; // maps to /uttam1
      }
      const rawSlug = `/${encodeURIComponent(app.name.replace(/\s+/g, '-'))}`;
      const idSlug = `/${app.id}`;
      const lowerSlug = `/${app.name.toLowerCase().replace(/\s+/g, '-')}`;
      for (const s of [rawSlug, idSlug, lowerSlug]) {
        if (!routes.includes(s)) {
          routes.push(s);
        }
      }
    }
  }

  // 3. Dynamic apexdin routes (1001 to 1100)
  for (let i = 1001; i <= 1100; i++) {
    routes.push(`/apexdin${i}`);
  }

  console.log(`📄 [SSG] Found ${routes.length} total pages to pre-render into static HTML.`);

  let generatedCount = 0;

  for (const route of routes) {
    try {
      const { html, title, canonical, description, metaTags, jsonLd } = render(route);

      let pageHtml = baseTemplate;

      // Replace or inject specific title
      if (title) {
        pageHtml = pageHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title data-rh="true">${title}</title>`);
      }

      // Replace or inject specific canonical URL
      if (canonical) {
        pageHtml = pageHtml.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/i, `<link rel="canonical" href="${canonical}" data-rh="true" />`);
      } else if (route !== '/') {
        const fallbackCanonical = `https://www.rummybonusapps.com${route.toLowerCase()}`;
        pageHtml = pageHtml.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/i, `<link rel="canonical" href="${fallbackCanonical}" data-rh="true" />`);
      }

      // Replace or inject specific meta description
      if (description) {
        pageHtml = pageHtml.replace(/<meta\s+[^>]*name=["']description["'][^>]*\/?>/i, `<meta name="description" content="${description}" />`);
      }

      // Inject custom meta tags (OpenGraph, etc.) & JSON-LD schema
      const extraHead = [];
      if (metaTags && metaTags.length > 0) {
        for (const meta of metaTags) {
          // Check if this property or name is already in template; if so, replace it
          const propMatch = meta.match(/property=["']([^"']*)["']/i) || meta.match(/name=["']([^"']*)["']/i);
          if (propMatch) {
            const attr = propMatch[1];
            const regex = new RegExp(`<meta\\s+[^>]*(?:property|name)=["']${attr}["'][^>]*\\/?>`, 'i');
            if (regex.test(pageHtml)) {
              pageHtml = pageHtml.replace(regex, meta);
              continue;
            }
          }
          extraHead.push(meta);
        }
      }

      if (jsonLd) {
        extraHead.push(jsonLd);
      }

      if (extraHead.length > 0) {
        pageHtml = pageHtml.replace('</head>', `    ${extraHead.join('\n    ')}\n  </head>`);
      }

      // Inject SSR pre-rendered markup
      if (pageHtml.includes('<!--ssr-outlet-->')) {
        pageHtml = pageHtml.replace('<!--ssr-outlet-->', () => html);
      } else if (pageHtml.includes('<div id="root"></div>')) {
        pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
      }

      // Determine destination file paths
      if (route === '/') {
        fs.writeFileSync(path.resolve(rootDir, 'dist/index.html'), pageHtml, 'utf-8');
      } else {
        // Strip leading slash
        const relativePath = decodeURIComponent(route.replace(/^\//, ''));
        const dirPath = path.resolve(rootDir, 'dist', relativePath);
        fs.mkdirSync(dirPath, { recursive: true });
        
        // 1. Directory index.html (standard for /route/)
        fs.writeFileSync(path.resolve(dirPath, 'index.html'), pageHtml, 'utf-8');
        
        // 2. Direct clean HTML file (standard for /route)
        fs.writeFileSync(path.resolve(rootDir, 'dist', `${relativePath}.html`), pageHtml, 'utf-8');
      }

      generatedCount++;
    } catch (err) {
      console.error(`⚠️ [SSG] Error pre-rendering route "${route}":`, err);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✅ [SSG] Successfully pre-rendered ${generatedCount} static HTML pages in ${duration}s!`);
}

runPrerender().catch((err) => {
  console.error('❌ [SSG] Fatal error during pre-rendering:', err);
  process.exit(1);
});
