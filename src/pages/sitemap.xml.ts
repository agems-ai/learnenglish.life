import type { APIRoute } from 'astro';

const SITE_URL = 'https://learnenglish.life';

// All pages that should be in the sitemap
const staticPages = [
  // Main pages
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/affiliate-disclosure', priority: '0.3', changefreq: 'yearly' },

  // Reviews listing + individual reviews
  { url: '/reviews', priority: '0.9', changefreq: 'weekly' },
  { url: '/reviews/italki', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/preply', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/cambly', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/babbel', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/duolingo', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/rosetta-stone', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/see-guru', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/lingoda', priority: '0.8', changefreq: 'monthly' },
  { url: '/reviews/verbling', priority: '0.8', changefreq: 'monthly' },

  // Comparison listing + pages
  { url: '/compare', priority: '0.9', changefreq: 'weekly' },
  { url: '/compare/italki-vs-preply', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/cambly-vs-italki', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/cambly-vs-preply', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/preply-vs-cambly', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/preply-vs-italki', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/italki-vs-busuu', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/see-guru-vs-italki', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/see-guru-vs-preply', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/see-guru-vs-cambly', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/see-guru-vs-lingoda', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/see-guru-vs-verbling', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/lingoda-vs-italki', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/cambly-vs-see-guru', priority: '0.8', changefreq: 'monthly' },

  // Guides listing + pages
  { url: '/guides', priority: '0.9', changefreq: 'weekly' },
  { url: '/guides/best-english-tutors-for-beginners', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/best-english-tutors-for-business', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/best-english-apps-for-beginners', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/best-english-apps-for-kids', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/best-english-tutors-ielts-preparation', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/cheapest-1-on-1-english-lessons-online', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/how-much-does-italki-cost', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/common-english-mistakes', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/english-grammar-basics', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/english-tutors-business-professionals', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/free-trial-english-lessons-no-credit-card', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/free-vs-paid-english-learning', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/how-to-choose-english-tutor', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/how-to-practice-speaking-alone', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/online-english-tutors-cost-2026', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/best-english-tutoring-platforms-2026', priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/best-english-learning-apps', priority: '0.8', changefreq: 'monthly' },

  // Blog listing
  { url: '/blog', priority: '0.9', changefreq: 'weekly' },

  // Tools
  { url: '/tools', priority: '0.7', changefreq: 'monthly' },
];

function generateXML(pages: typeof staticPages): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = pages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

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
