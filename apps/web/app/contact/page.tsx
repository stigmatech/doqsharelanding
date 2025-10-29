import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ContactSection from "@/components/contact";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact DoqShare - Support and Sales",
  description: "Contact the DoqShare team for technical support, enterprise sales or any questions. 24/7 support, free demonstrations and personalized assistance.",
  keywords: [
    "contact DoqShare",
    "technical support",
    "enterprise sales",
    "free demonstration",
    "personalized assistance",
    "24/7 support",
    "DoqShare help",
    "support team"
  ],
  canonical: "/contact",
  ogImage: "/images/og-contact.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DoqShare",
    "description": "Contact page for support and sales",
    "mainEntity": {
      "@type": "Organization",
      "name": "DoqShare",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "email": "hello@doqshare.com"
        }
      ]
    }
  }
});

export default function ContactPage() {
  return <ContactSection />;
}
