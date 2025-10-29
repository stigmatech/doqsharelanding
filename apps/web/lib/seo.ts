import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
  structuredData?: any
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/og-image.jpg',
  noIndex = false,
  structuredData: _structuredData
}: SEOConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com'
  const fullTitle = title.includes('DoqShare') ? title : `${title} | DoqShare`
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'DoqShare Team' }],
    creator: 'DoqShare',
    publisher: 'DoqShare',
    category: 'Technology',
    classification: 'Business Software',
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
      type: 'website',
      locale: 'en_US',
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      title: fullTitle,
      description,
      siteName: 'DoqShare',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@doqshare',
      site: '@doqshare',
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    other: {
      'application-name': 'DoqShare',
      'apple-mobile-web-app-title': 'DoqShare',
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
  title: 'DoqShare - Secure Document Sharing with Advanced Analytics',
  description: 'Modern secure document sharing platform with advanced analytics. Data rooms, document protection, GDPR/HIPAA compliance. Secure alternative for businesses.',
  keywords: [
    'secure document sharing',
    'data room',
    'document security',
    'document analytics',
    'GDPR compliance',
    'HIPAA compliant',
    'secure sharing',
    'document management',
    'secure collaboration',
    'document protection'
  ],
  ogImage: '/images/og-image.jpg',
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DoqShare',
  description: 'Secure document sharing platform with advanced analytics',
  url: 'https://doqshare.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free plan available'
  },
  creator: {
    '@type': 'Organization',
    name: 'DoqShare',
    url: 'https://doqshare.com'
  }
}
