/**
 * SEO Schema Generation Library
 * Systemic JSON-LD schema injection for LearnEnglish.Life
 * 
 * Every page automatically gets: Organization + WebSite + BreadcrumbList
 * Content pages additionally get: Article, Review, FAQPage, or HowTo via props
 */

export const SITE_URL = 'https://learnenglish.life';
export const SITE_NAME = 'LearnEnglish.Life';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleSchemaData {
  headline: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  author?: string;
}

export interface ReviewSchemaData {
  name: string;
  description: string;
  rating: number;
  bestRating?: number;
  worstRating?: number;
  reviewCount?: number;
  price?: string;
  priceCurrency?: string;
  applicationCategory?: string;
  publishedTime?: string;
  image?: string;
}

export interface FAQSchemaData {
  faqs: Array<{ question: string; answer: string }>;
}

export interface ComparisonSchemaData {
  headline: string;
  description: string;
  platformA: { name: string; rating: number; price: string };
  platformB: { name: string; rating: number; price: string };
  publishedTime?: string;
}

/**
 * Build BreadcrumbList schema from URL pathname
 * Automatically determines breadcrumb items from the URL path segments
 */
export function buildBreadcrumbSchema(pathname: string): object {
  const segments = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
  
  const labelMap: Record<string, string> = {
    'reviews': 'Reviews',
    'compare': 'Comparisons',
    'blog': 'Blog',
    'guides': 'Study Guides',
    'resources': 'Resources',
    'games': 'Games',
    'tools': 'Tools',
    'study': 'Study',
    'study-guide': 'Study Guides',
    'go': 'Visit Platform',
    'grammar': 'Grammar Games',
    'vocabulary': 'Vocabulary Games',
  };

  const items: BreadcrumbItem[] = [
    { name: 'Home', url: SITE_URL }
  ];

  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    currentPath += '/' + segments[i];
    const slug = segments[i];
    
    // Last segment: use the page title if provided, otherwise format the slug
    const isLast = i === segments.length - 1;
    const name = labelMap[slug] || formatSlugAsTitle(slug);
    
    items.push({
      name,
      url: `${SITE_URL}${currentPath}/`
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

/**
 * Build Organization schema (global, appears on every page)
 */
export function buildOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SITE_NAME,
    'url': SITE_URL,
    'logo': {
      '@type': 'ImageObject',
      'url': `${SITE_URL}/favicon.svg`
    },
    'sameAs': [
      'https://www.facebook.com/profile.php?id=61574447922784',
      'https://www.instagram.com/learnenglish.life'
    ]
  };
}

/**
 * Build WebSite schema with search action (global, appears on every page)
 */
export function buildWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_NAME,
    'url': SITE_URL,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${SITE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Build Article schema
 */
export function buildArticleSchema(data: ArticleSchemaData, pathname: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': data.headline,
    'description': data.description,
    'image': data.image ? `${SITE_URL}${data.image}` : `${SITE_URL}/og-default.png`,
    'datePublished': data.publishedTime || new Date().toISOString(),
    'dateModified': data.modifiedTime || data.publishedTime || new Date().toISOString(),
    'author': {
      '@type': 'Organization',
      'name': data.author || SITE_NAME
    },
    'publisher': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/favicon.svg`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${pathname}`
    }
  };
}

/**
 * Build Review schema
 */
export function buildReviewSchema(data: ReviewSchemaData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'SoftwareApplication',
      'name': data.name,
      'applicationCategory': data.applicationCategory || 'EducationApplication',
      ...(data.price && {
        'offers': {
          '@type': 'Offer',
          'price': data.price.replace(/[^0-9.]/g, ''),
          'priceCurrency': data.priceCurrency || 'USD'
        }
      })
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': String(data.rating),
      'bestRating': String(data.bestRating || 10),
      'worstRating': String(data.worstRating || 1)
    },
    ...(data.reviewCount && {
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': String(data.rating),
        'bestRating': String(data.bestRating || 10),
        'worstRating': String(data.worstRating || 1),
        'reviewCount': String(data.reviewCount)
      }
    }),
    'author': {
      '@type': 'Organization',
      'name': SITE_NAME
    },
    'datePublished': data.publishedTime || new Date().toISOString()
  };
}

/**
 * Build FAQPage schema
 */
export function buildFAQSchema(data: FAQSchemaData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': data.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

/**
 * Format a URL slug into a readable title
 * e.g. "italki-vs-preply" -> "iTalki vs Preply"
 *      "best-english-apps" -> "Best English Apps"
 */
function formatSlugAsTitle(slug: string): string {
  // Handle "vs" comparisons
  if (slug.includes('-vs-')) {
    return slug
      .split('-vs-')
      .map(part => capitalizeBrandName(part.replace(/-/g, ' ')))
      .join(' vs ');
  }
  
  // Handle known brand names with special casing
  return capitalizeBrandName(slug.replace(/-/g, ' '));
}

function capitalizeBrandName(name: string): string {
  const brandCasing: Record<string, string> = {
    'italki': 'iTalki',
    'preply': 'Preply',
    'cambly': 'Cambly',
    'babbel': 'Babbel',
    'duolingo': 'Duolingo',
    'rosetta stone': 'Rosetta Stone',
    'rosetta': 'Rosetta',
    'lingoda': 'Lingoda',
    'busuu': 'Busuu',
    'memrise': 'Memrise',
    'mondly': 'Mondly',
    'elsa speak': 'ELSA Speak',
    'elsa': 'ELSA',
    'verbling': 'Verbling',
    'pimsleur': 'Pimsleur',
    'rocket languages': 'Rocket Languages',
    'see guru': 'See Guru',
    'magoosh': 'Magoosh',
    'bestmytest': 'BestMyTest',
    'ieltsliz': 'IELTSLiz',
    'e2language': 'E2Language',
    'british council': 'British Council',
    'toefl': 'TOEFL',
    'ielts': 'IELTS',
  };

  const lower = name.toLowerCase().trim();
  if (brandCasing[lower]) return brandCasing[lower];

  // Default title case
  return name.replace(/\b\w/g, c => c.toUpperCase());
}

// Legacy compatibility: keep the old function signature
export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateSchemaMarkup(data: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Review' | 'FAQPage' | 'HowTo';
  data: Record<string, unknown>;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': data.type,
    ...data.data,
  });
}

export const defaultSEO: SEOProps = {
  title: 'LearnEnglish.Life, Your Trusted English Learning Resource',
  description: 'Comprehensive reviews, comparisons, and resources to help you master English. Find the best tutoring platforms, courses, and learning tools.',
  type: 'website',
};

export function buildTitle(template: string, siteName: string = 'LearnEnglish.Life'): string {
  return `${template} | ${siteName}`;
}

export function buildCanonicalUrl(path: string, baseUrl: string = 'https://learnenglish.life'): string {
  return `${baseUrl}${path}`;
}
