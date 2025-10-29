import { Metadata } from "next"
import Hero from "@/components/hero"
import TestimonialsSection from "@/components/testimonials-section"
import ComplianceSection from "../components/compliance-section"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import ScrollTracking from "@/components/analytics/scroll-tracking"
import TimeTracking from "@/components/analytics/time-tracking"

export const metadata: Metadata = generateSEOMetadata({
  title: "DoqShare - Secure Document Sharing Platform with Advanced Analytics",
  description: "DoqShare revolutionizes secure document sharing with advanced analytics. Virtual data rooms, document protection, GDPR/HIPAA/SOC2 compliance. B2B solution for startups, enterprises and investors. 14-day free trial.",
  keywords: [
    "secure document sharing",
    "virtual data room",
    "document security",
    "document analytics",
    "GDPR compliance",
    "HIPAA compliant",
    "SOC2 compliant",
    "secure sharing",
    "document management",
    "secure collaboration",
    "document protection",
    "startup fundraising",
    "due diligence",
    "M&A",
    "fundraising",
    "investors",
    "dynamic watermarking",
    "access control",
    "audit trail",
    "B2B platform"
  ],
  canonical: "/",
  ogImage: "/images/og-homepage.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DoqShare",
    "description": "Secure document sharing platform with advanced analytics for businesses",
    "url": "https://doqshare.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "14-day free trial",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "DoqShare",
      "url": "https://doqshare.com"
    },
    "featureList": [
      "Secure document sharing",
      "Advanced analytics",
      "Virtual data rooms",
      "GDPR/HIPAA/SOC2 compliance",
      "Dynamic watermarking",
      "Granular access control",
      "Complete audit trail"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://doqshare.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
})

export default function Page() {
  return (
    <>
      <ScrollTracking />
      <TimeTracking pageName="home" />
      <Hero />
      <ComplianceSection />
      <TestimonialsSection />
    </>
  )
}
