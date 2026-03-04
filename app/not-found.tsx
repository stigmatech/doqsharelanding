import { Metadata } from "next"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import Error from "@/components/shadcn-studio/blocks/error-page-01/error-page-01"

export const metadata: Metadata = generateSEOMetadata({
  title: "Page Not Found - 404",
  description: "The page you are looking for does not exist or has been moved. Return to the homepage or explore our features.",
  keywords: ["404", "page not found", "error", "DoQshare"],
  canonical: "/404",
  noIndex: true,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - 404",
    "description": "The page you are looking for does not exist",
    "url": "https://doqshare.com/404",
    "mainEntity": {
      "@type": "Thing",
      "name": "Page Not Found"
    }
  }
})

export default function NotFound() {
  return <Error />
}
