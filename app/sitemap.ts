import { MetadataRoute } from 'next'

const locales = ['en', 'fr'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensure baseUrl has no trailing spaces and ends without slash
  let baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com').trim()
  // Remove trailing slash if present
  baseUrl = baseUrl.replace(/\/$/, '')
  
  const now = new Date()
  
  // Calculate last modified dates (more realistic)
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  
  // Helper function to generate URLs for all locales
  const generateUrls = (
    path: string,
    lastModified: Date,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: number
  ) => {
    return locales.map(locale => {
      // Ensure no spaces in URL construction
      const cleanPath = path.trim()
      // Build URL without any spaces
      const url = cleanPath 
        ? `${baseUrl}/${locale}${cleanPath}`.replace(/\s+/g, '')
        : `${baseUrl}/${locale}`.replace(/\s+/g, '')
      
      return {
        url: url,
        lastModified,
        changeFrequency,
        priority,
      }
    })
  }
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Homepage - Highest priority
  sitemapEntries.push(...generateUrls('', now, 'daily', 1.0))
  
  // Main product pages - High priority
  sitemapEntries.push(...generateUrls('/pricing', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/features', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/data-room', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/enterprise', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/startups', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/freelance', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/education', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/legal-data-room', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/real-estate-data-room', lastWeek, 'weekly', 0.9))
  sitemapEntries.push(...generateUrls('/startup', lastWeek, 'weekly', 0.9))
  
  // Secondary pages
  sitemapEntries.push(...generateUrls('/how-it-works', lastMonth, 'monthly', 0.8))
  sitemapEntries.push(...generateUrls('/analytics', lastWeek, 'weekly', 0.8))
  sitemapEntries.push(...generateUrls('/help', lastWeek, 'weekly', 0.8))
  sitemapEntries.push(...generateUrls('/docs', lastWeek, 'weekly', 0.8))
  sitemapEntries.push(...generateUrls('/integrations', lastWeek, 'weekly', 0.8))
  sitemapEntries.push(...generateUrls('/case-studies', lastWeek, 'weekly', 0.8))
  
  // Security and compliance pages
  sitemapEntries.push(...generateUrls('/security', lastMonth, 'monthly', 0.8))
  sitemapEntries.push(...generateUrls('/privacy', lastMonth, 'monthly', 0.7))
  sitemapEntries.push(...generateUrls('/terms', lastMonth, 'monthly', 0.7))
  sitemapEntries.push(...generateUrls('/cookies', lastMonth, 'monthly', 0.6))
  
  // Information pages
  sitemapEntries.push(...generateUrls('/about', lastMonth, 'monthly', 0.7))
  sitemapEntries.push(...generateUrls('/contact', lastMonth, 'monthly', 0.7))
  
  // Blog - Lower priority but still important
  sitemapEntries.push(...generateUrls('/blog', lastWeek, 'weekly', 0.6))
  
  return sitemapEntries
}
