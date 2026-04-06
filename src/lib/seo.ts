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
  title: 'LearnEnglish.Life — Your Trusted English Learning Resource',
  description: 'Comprehensive reviews, comparisons, and resources to help you master English. Find the best tutoring platforms, courses, and learning tools.',
  type: 'website',
};

export function buildTitle(template: string, siteName: string = 'LearnEnglish.Life'): string {
  return `${template} | ${siteName}`;
}

export function buildCanonicalUrl(path: string, baseUrl: string = 'https://learnenglish.life'): string {
  return `${baseUrl}${path}`;
}
