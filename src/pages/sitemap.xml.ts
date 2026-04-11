import type { APIRoute } from 'astro';

const SITE_URL = 'https://learnenglish.life';

// Auto-generate sitemap from filesystem.
// Every .astro page in src/pages (excluding redirects, 404, dynamic api routes,
// and the sitemap files themselves) is included so new content shows up
// without manual edits.

// Glob runs at build time. Astro recognises this pattern and inlines the file list.
const allPages = import.meta.glob('/src/pages/**/*.astro', { eager: false });

const EXCLUDE_PATTERNS = [
  /\/404\.astro$/,
  /\/sitemap[^/]*\.xml\.ts$/,
  /\/go\/[^/]+\.astro$/,        // affiliate redirect interstitials
  /\[.+\]/,                       // dynamic routes (none currently, future-proofing)
];

// Manual priority/changefreq overrides for special pages.
// Anything not listed defaults to weekly/0.7 , section indexes get 0.9.
const OVERRIDES: Record<string, { priority: string; changefreq: string }> = {
  '': { priority: '1.0', changefreq: 'daily' },
  '/reviews': { priority: '0.9', changefreq: 'weekly' },
  '/compare': { priority: '0.9', changefreq: 'weekly' },
  '/guides': { priority: '0.9', changefreq: 'weekly' },
  '/blog': { priority: '0.9', changefreq: 'daily' },
  '/resources': { priority: '0.9', changefreq: 'weekly' },
  '/tools': { priority: '0.8', changefreq: 'weekly' },
  '/games': { priority: '0.7', changefreq: 'monthly' },
  '/about': { priority: '0.6', changefreq: 'monthly' },
  '/contact': { priority: '0.4', changefreq: 'monthly' },
  '/advertise': { priority: '0.4', changefreq: 'monthly' },
  '/privacy': { priority: '0.3', changefreq: 'yearly' },
  '/privacy-policy': { priority: '0.3', changefreq: 'yearly' },
  '/terms': { priority: '0.3', changefreq: 'yearly' },
  '/cookies': { priority: '0.3', changefreq: 'yearly' },
  '/cookie-policy': { priority: '0.3', changefreq: 'yearly' },
  '/affiliate-disclosure': { priority: '0.3', changefreq: 'yearly' },
};

function pathToUrl(path: string): string | null {
  // path looks like "/src/pages/compare/foo.astro" or "/src/pages/index.astro"
  for (const re of EXCLUDE_PATTERNS) if (re.test(path)) return null;
  let url = path
    .replace(/^\/src\/pages/, '')
    .replace(/\.astro$/, '')
    .replace(/\/index$/, '');
  if (url === '') return '';
  return url;
}

function defaultPriority(url: string): { priority: string; changefreq: string } {
  if (OVERRIDES[url]) return OVERRIDES[url];
  // Section detail pages: blog posts, reviews, comparisons, guides
  if (
    url.startsWith('/blog/') ||
    url.startsWith('/reviews/') ||
    url.startsWith('/compare/') ||
    url.startsWith('/guides/') ||
    url.startsWith('/resources/') ||
    url.startsWith('/study-guide/')
  ) {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  if (url.startsWith('/tools/') || url.startsWith('/games/')) {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  return { priority: '0.6', changefreq: 'monthly' };
}

function generateXML(): string {
  const today = new Date().toISOString().split('T')[0];

  const urls = Object.keys(allPages)
    .map(pathToUrl)
    .filter((u): u is string => u !== null)
    // dedupe and sort for stable output
    .filter((u, i, arr) => arr.indexOf(u) === i)
    .sort()
    .map((url) => {
      const { priority, changefreq } = defaultPriority(url);
      return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const GET: APIRoute = () => {
  return new Response(generateXML(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
