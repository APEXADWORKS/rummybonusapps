import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';

export interface RenderResult {
  html: string;
  headTags: string;
}

export function render(url: string): RenderResult {
  const helmetContext: Record<string, any> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  let headTags = '';
  const helmet = helmetContext.helmet;
  if (helmet) {
    headTags = [
      helmet.title?.toString() || '',
      helmet.meta?.toString() || '',
      helmet.link?.toString() || '',
      helmet.script?.toString() || '',
    ]
      .filter(Boolean)
      .join('\n');
  }

  return { html, headTags };
}
