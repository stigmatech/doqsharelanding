import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  noIndex?: boolean
  structuredData?: any
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  locale?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  noIndex = false,
  structuredData: _structuredData,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
}: SEOConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com'
  const fullTitle = title.includes('DoQshare') ? title : `${title} | DoQshare`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
  
  return {
    title: {
      default: fullTitle,
      template: '%s | DoQshare',
    },
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: author ? [{ name: author }] : [{ name: 'DoQshare Team' }],
    creator: 'DoQshare',
    publisher: 'DoQshare',
    category: 'Technology',
    classification: 'Business Software',
    metadataBase: new URL(baseUrl),
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType === 'product' ? 'website' : ogType,
      locale: locale,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      title: fullTitle,
      description,
      siteName: 'DoQshare',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullOgImage],
      creator: '@doqshare',
      site: '@doqshare',
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
      languages: (() => {
        // Generate hreflang tags dynamically based on canonical path
        const canonicalPath = canonical || '';
        const languages: Record<string, string> = {};
        
        // Extract the path without language prefix (canonical already includes lang like /en/pricing)
        let pathWithoutLang = canonicalPath.replace(/^\/(en|fr)/, '');
        if (!pathWithoutLang || pathWithoutLang === '') {
          pathWithoutLang = '/';
        }
        
        // Generate URLs for both languages
        if (pathWithoutLang === '/') {
          languages['en'] = `${baseUrl}/en`;
          languages['fr'] = `${baseUrl}/fr`;
        } else {
          languages['en'] = `${baseUrl}/en${pathWithoutLang}`;
          languages['fr'] = `${baseUrl}/fr${pathWithoutLang}`;
        }
        
        // Add x-default pointing to English version
        languages['x-default'] = languages['en'];
        
        return languages;
      })(),
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    other: {
      'application-name': 'DoQshare',
      'apple-mobile-web-app-title': 'DoQshare',
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#2563eb',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
    },
  }
}

export const defaultSEO = {
  title: 'DoQshare - Secure Document Sharing Platform with Advanced Analytics',
  description: 'DoQshare revolutionizes secure document sharing with advanced analytics. Virtual data rooms, document protection, GDPR/HIPAA/SOC2 compliance. B2B solution for startups, enterprises and investors. 14-day free trial.',
  keywords: [
    'secure document sharing',
    'virtual data room',
    'document security',
    'document analytics',
    'GDPR compliance',
    'HIPAA compliant',
    'SOC2 compliant',
    'secure sharing',
    'document management',
    'secure collaboration',
    'document protection',
    'startup fundraising',
    'due diligence',
    'M&A',
    'fundraising',
    'investors',
    'dynamic watermarking',
    'access control',
    'audit trail',
    'B2B platform',
    'DoQshare',
    'secure file sharing',
    'document tracking',
    'page-by-page analytics',
  ],
  ogImage: '/images/og-image.jpg',
}

// Organization Schema for better SEO
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DoQshare',
  url: 'https://doqshare.com',
  logo: 'https://doqshare.com/images/logo.png',
  description: 'Secure document sharing platform with advanced analytics for businesses',
  sameAs: [
    'https://twitter.com/doqshare',
    'https://www.linkedin.com/company/doqshare',
    'https://github.com/doqshare',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'support@doqshare.com',
    availableLanguage: ['English', 'French'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
    addressRegion: 'QC',
  },
}

// Software Application Schema
export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DoQshare',
  description: 'Secure document sharing platform with advanced analytics for businesses',
  url: 'https://doqshare.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    offerCount: '4',
    lowPrice: '0',
    highPrice: '99',
    priceCurrency: 'USD',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free Plan',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Free plan with basic features',
      },
      {
        '@type': 'Offer',
        name: 'Pro Plan',
        price: '29',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Pro plan with advanced features',
      },
      {
        '@type': 'Offer',
        name: 'Business Plan',
        price: '79',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Business plan for teams',
      },
      {
        '@type': 'Offer',
        name: 'Data Rooms Plan',
        price: '99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Data Rooms plan for enterprises',
      },
    ],
  },
  creator: {
    '@type': 'Organization',
    name: 'DoQshare',
    url: 'https://doqshare.com',
  },
  featureList: [
    'Secure document sharing',
    'Advanced analytics',
    'Virtual data rooms',
    'GDPR/HIPAA/SOC2 compliance',
    'Dynamic watermarking',
    'Granular access control',
    'Complete audit trail',
    'Page-by-page analytics',
    'Real-time tracking',
    'Password protection',
    'Expiration dates',
    'Download restrictions',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
}

// Breadcrumb Schema Helper
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// FAQ Schema Helper
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Article Schema Helper
export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher = 'DoQshare',
}: {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author?: string
  publisher?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image || 'https://doqshare.com/images/og-image.jpg',
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author || 'DoQshare Team',
    },
    publisher: {
      '@type': 'Organization',
      name: publisher,
      logo: {
        '@type': 'ImageObject',
        url: 'https://doqshare.com/images/logo.png',
      },
    },
  }
}

// Enhanced BlogPosting Schema with all recommended properties
export function generateBlogPostingSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  authorUrl,
  url,
  articleSection,
  keywords,
  wordCount,
  timeRequired,
  inLanguage = 'en',
  publisher = {
    name: 'DoQshare',
    url: 'https://doqshare.com',
    logo: 'https://doqshare.com/images/logo.png',
  },
}: {
  headline: string
  description: string
  image?: string | string[]
  datePublished: string
  dateModified?: string
  author?: string
  authorUrl?: string
  url: string
  articleSection?: string
  keywords?: string[]
  wordCount?: number
  timeRequired?: string
  inLanguage?: string
  publisher?: {
    name: string
    url: string
    logo: string
  }
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com'
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`
  const fullImage = image 
    ? (Array.isArray(image) ? image : [image]).map(img => 
        img.startsWith('http') ? img : `${baseUrl}${img}`
      )
    : [`${baseUrl}/images/og-image.jpg`]

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: fullImage.length === 1 ? fullImage[0] : fullImage,
    datePublished,
    dateModified: dateModified || datePublished,
    url: fullUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    author: {
      '@type': 'Person',
      name: author || 'DoQshare Team',
      ...(authorUrl && { url: authorUrl }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      url: publisher.url,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
        width: 512,
        height: 512,
      },
    },
    inLanguage,
    ...(articleSection && { articleSection }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(wordCount && { wordCount }),
    ...(timeRequired && {
      timeRequired: timeRequired, // ISO 8601 duration format (e.g., "PT15M" for 15 minutes)
    }),
    // PotentialAction for ReadAction (helps with rich snippets)
    potentialAction: {
      '@type': 'ReadAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: fullUrl,
      },
    },
  }

  return schema
}

// Review Schema Helper - Returns array of individual Review objects
export function generateReviewSchemas(reviews: Array<{
  author: string
  authorUrl?: string
  datePublished: string
  reviewBody: string
  reviewRating: {
    ratingValue: number
    bestRating?: number
    worstRating?: number
  }
  itemReviewed?: {
    '@type': string
    name: string
  }
}>) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: review.itemReviewed || {
      '@type': 'SoftwareApplication',
      name: 'DoQshare',
      applicationCategory: 'BusinessApplication',
    },
    author: {
      '@type': 'Person',
      name: review.author,
      ...(review.authorUrl && { url: review.authorUrl }),
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating.ratingValue,
      bestRating: review.reviewRating.bestRating || 5,
      worstRating: review.reviewRating.worstRating || 1,
    },
  }))
}

// Aggregate Rating Schema Helper (simplified for testimonials)
export function generateAggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'DoQshare',
    },
  }
}

// Combined Reviews and Aggregate Rating Schema
export function generateReviewsSchema({
  reviews,
  aggregateRating,
}: {
  reviews: Array<{
    author: string
    authorUrl?: string
    datePublished: string
    reviewBody: string
    reviewRating: {
      ratingValue: number
      bestRating?: number
      worstRating?: number
    }
  }>
  aggregateRating: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
}) {
  return [
    ...generateReviewSchemas(reviews),
    generateAggregateRatingSchema(aggregateRating),
  ]
}

// Default structured data combining Organization and SoftwareApplication
export const structuredData = [
  organizationSchema,
  softwareApplicationSchema,
]
