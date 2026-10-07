import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';

export { RUMMY_APPS } from './data';

export interface RenderResult {
  html: string;
  headTags: string;
  title?: string;
  canonical?: string;
  description?: string;
  metaTags: string[];
  jsonLd?: string;
}

export function render(url: string): RenderResult {
  const helmetContext: Record<string, any> = {};

  const rawHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  // Extract <title>
  const titleMatch = rawHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  let title = titleMatch ? titleMatch[1].trim() : undefined;
  if (title) {
    title = title.replace(/<[^>]*>/g, '').trim();
    if (title.length > 60) {
      title = title.slice(0, 60).trim();
    }
  }

  // Extract canonical <link rel="canonical" href="..." />
  const canonicalMatch = rawHtml.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*\/?>/i)
    || rawHtml.match(/<link\s+[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*\/?>/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : undefined;

  // Extract meta tags
  const metaTagMatches = rawHtml.match(/<meta\s+[^>]*\/?>/gi) || [];

  // Extract schema JSON-LD
  const jsonLdMatch = rawHtml.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  const jsonLd = jsonLdMatch ? jsonLdMatch[0] : undefined;

  // Clean hoisted meta/title/link/script tags from body html completely
  // This guarantees zero duplicate <meta> or <title> tags inside <div id="root"> or body
  const cleanHtml = rawHtml
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+[^>]*\/?>/gi, '')
    .replace(/<link\s+[^>]*\/?>/gi, '')
    .replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/gi, '');

  // Extract description if present
  const descMatch = rawHtml.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*\/?>/i);
  const description = descMatch ? descMatch[1] : undefined;

  // Ensure meta tags have data-rh="true" and omit any accidental meta name="title"
  const cleanMetaList = metaTagMatches
    .filter(m => !/name=["']title["']/i.test(m))
    .map(m => (m.includes('data-rh=') ? m : m.replace(/\/?>$/, ' data-rh="true" />')));

  const headTags = [
    canonical ? `<link rel="canonical" href="${canonical}" data-rh="true" />` : '',
    ...cleanMetaList,
    jsonLd || ''
  ].filter(Boolean).join('\n    ');

  return {
    html: cleanHtml,
    headTags,
    title,
    canonical,
    description,
    metaTags: cleanMetaList,
    jsonLd
  };
}
