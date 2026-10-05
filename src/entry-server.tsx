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
  const title = titleMatch ? titleMatch[1] : undefined;

  // Extract canonical <link rel="canonical" href="..." />
  const canonicalMatch = rawHtml.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*\/?>/i)
    || rawHtml.match(/<link\s+[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*\/?>/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : undefined;

  // Extract meta tags
  const metaTagMatches = rawHtml.match(/<meta\s+[^>]*\/?>/gi) || [];

  // Extract schema JSON-LD
  const jsonLdMatch = rawHtml.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  const jsonLd = jsonLdMatch ? jsonLdMatch[0] : undefined;

  // Clean hoisted meta/title tags from body html
  let cleanHtml = rawHtml
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/gi, '')
    .replace(/<link\s+[^>]*href=["'][^"']*["'][^>]*rel=["']canonical["'][^>]*\/?>/gi, '')
    .replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/gi, '');

  // Extract description if present
  const descMatch = rawHtml.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*\/?>/i);
  const description = descMatch ? descMatch[1] : undefined;

  const headTags = [
    title ? `<title>${title}</title>` : '',
    canonical ? `<link rel="canonical" href="${canonical}" />` : '',
    ...metaTagMatches,
    jsonLd || ''
  ].filter(Boolean).join('\n    ');

  return {
    html: cleanHtml,
    headTags,
    title,
    canonical,
    description,
    metaTags: metaTagMatches,
    jsonLd
  };
}
