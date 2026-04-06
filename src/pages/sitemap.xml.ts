import type { APIRoute } from 'astro';

const SITE_URL = 'https://learnenglish.life';

// Static pages that should always be in the sitemap
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews', priority: '0.9', changefreq: 'weekly' },
  { url: '/reviews/italki', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.9', changefreq: 'weekly' },
  { url: '/guides', priority: '0.9', changefreq: 'weekly' },
  { url: '/tools', priority: '0.8', changefreq: 'monthly' },
];

function generateXML(pages: typeof staticPages): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const GET: APIRoute = () => {
  const xml = generateXML(staticPages);
  
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
