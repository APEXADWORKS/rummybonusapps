import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import appsDataList from '../data/appsData.json';

export interface AppSEOData {
  id: string;
  name: string;
  title: string;
  description: string;
  keywords: string;
  bonus: string;
  minCashout: string;
  rating: string;
  downloads: string;
  logo: string;
}

export interface SEOHeadProps {
  /**
   * Either pass an app slug id (e.g. "jungle-haan", "91-club")
   * or a full or partial AppSEOData object.
   */
  app?: string | Partial<AppSEOData>;
  /**
   * Optional custom canonical URL (defaults to https://www.rummybonusapps.com/[app-id])
   */
  canonicalUrl?: string;
  /**
   * Optional custom site name (defaults to 'RummyBonusApps.com')
   */
  siteName?: string;
  /**
   * Optional override for meta robots (defaults to 'index, follow')
   */
  robots?: string;
}

const DEFAULT_BASE_URL = 'https://www.rummybonusapps.com';

const DEFAULT_APP_DATA: AppSEOData = {
  id: 'all-rummy-apps',
  name: 'All Rummy Apps',
  title: 'All Rummy App List 51 Bonus 2026: Download New Rummy APK',
  description: 'Download latest Rummy Bonus apps with ₹51 & ₹41 signup bonus. Instant UPI withdrawal, 100% verified APK download links, and 24/7 safe real cash games.',
  keywords: 'all rummy app list, rummy bonus 51, new rummy app today, teen patti bonus app, rummy apk download, yono rummy app, instant withdrawal rummy',
  bonus: 'Rs.51',
  minCashout: '₹100',
  rating: '4.8',
  downloads: '500K+',
  logo: '/images/all_rummy_1to1_logo_1779225745385.png',
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  app,
  canonicalUrl,
  siteName = 'RummyBonusApps.com',
  robots = 'index, follow',
}) => {
  // Resolve App SEO Data from appsData.json master list or direct prop
  const appData: AppSEOData = useMemo(() => {
    if (!app) {
      return DEFAULT_APP_DATA;
    }

    if (typeof app === 'string') {
      const slug = app.toLowerCase().trim();
      const matched = (appsDataList as AppSEOData[]).find(
        (item) => item.id.toLowerCase() === slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
      );

      if (matched) return matched;

      // Dynamic fallback for string slug
      const formattedName = slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

      return {
        id: slug,
        name: formattedName,
        title: `${formattedName} APK Download: Get Rs.51 Free Bonus 2026`,
        description: `Download ${formattedName} APK with instant Rs.51 signup bonus. 100% verified safe download link, fast ₹100 UPI cashout, and 24/7 support in 2026.`,
        keywords: `${slug} apk, ${slug} download, ${slug} rummy bonus, ${slug} login, all rummy app 2026`,
        bonus: 'Rs.51',
        minCashout: '₹100',
        rating: '4.8',
        downloads: '100K+',
        logo: '/images/all_rummy_1to1_logo_1779225745385.png',
      };
    }

    // Object passed: merge with defaults
    return {
      id: app.id || DEFAULT_APP_DATA.id,
      name: app.name || DEFAULT_APP_DATA.name,
      title: app.title || `${app.name || 'Rummy'} APK Download: Get ${app.bonus || 'Rs.51'} Bonus 2026`,
      description:
        app.description ||
        `Download ${app.name || 'Rummy'} APK with instant ${app.bonus || 'Rs.51'} signup bonus. 100% verified download link, fast ${app.minCashout || '₹100'} UPI cashout.`,
      keywords:
        app.keywords ||
        `${app.name?.toLowerCase()} apk, ${app.name?.toLowerCase()} download, ${app.name?.toLowerCase()} bonus, all rummy app 2026`,
      bonus: app.bonus || DEFAULT_APP_DATA.bonus,
      minCashout: app.minCashout || DEFAULT_APP_DATA.minCashout,
      rating: app.rating || DEFAULT_APP_DATA.rating,
      downloads: app.downloads || DEFAULT_APP_DATA.downloads,
      logo: app.logo || DEFAULT_APP_DATA.logo,
    };
  }, [app]);

  // Compute absolute URLs for canonical, og:url, og:image
  const fullUrl = useMemo(() => {
    if (canonicalUrl) return canonicalUrl;
    if (appData.id === 'all-rummy-apps') return `${DEFAULT_BASE_URL}/`;
    return `${DEFAULT_BASE_URL}/${appData.id}`;
  }, [canonicalUrl, appData.id]);

  const absoluteLogoUrl = useMemo(() => {
    if (!appData.logo) return `${DEFAULT_BASE_URL}/images/all_rummy_1to1_logo_1779225745385.png`;
    if (appData.logo.startsWith('http://') || appData.logo.startsWith('https://')) {
      return appData.logo;
    }
    return `${DEFAULT_BASE_URL}${appData.logo.startsWith('/') ? '' : '/'}${appData.logo}`;
  }, [appData.logo]);

  // JSON-LD Schema Markup (SoftwareApplication / GameApplication)
  const jsonLdSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': ['SoftwareApplication', 'GameApplication'],
      name: appData.name,
      headline: appData.title,
      description: appData.description,
      applicationCategory: 'GameApplication',
      operatingSystem: 'ANDROID, IOS',
      url: fullUrl,
      image: absoluteLogoUrl,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: appData.rating,
        bestRating: '5',
        worstRating: '1',
        ratingCount: '12500',
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: DEFAULT_BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${DEFAULT_BASE_URL}/images/all_rummy_1to1_logo_1779225745385.png`,
        },
      },
      featureList: [
        `Signup Bonus: ${appData.bonus}`,
        `Minimum Cashout: ${appData.minCashout}`,
        'Instant UPI & Bank Cashout',
        '100% Verified Safe APK Download',
      ],
    };
  }, [appData, fullUrl, absoluteLogoUrl, siteName]);

  return (
    <Helmet>
      {/* 1. Primary HTML Meta Tags */}
      <title>{appData.title}</title>
      <meta name="title" content={appData.title} />
      <meta name="description" content={appData.description} />
      <meta name="keywords" content={appData.keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={siteName} />
      <link rel="canonical" href={fullUrl} />

      {/* 2. Open Graph / Facebook & Telegram Social Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={appData.title} />
      <meta property="og:description" content={appData.description} />
      <meta property="og:image" content={absoluteLogoUrl} />
      <meta property="og:image:alt" content={`${appData.name} APK Download & Bonus`} />

      {/* 3. Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={appData.title} />
      <meta name="twitter:description" content={appData.description} />
      <meta name="twitter:image" content={absoluteLogoUrl} />
      <meta name="twitter:image:alt" content={`${appData.name} APK Logo`} />

      {/* 4. JSON-LD Schema Markup (SoftwareApplication / GameApplication) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
