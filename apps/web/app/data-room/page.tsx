import { Metadata } from "next";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import DataRoomHeroSection from "@/components/data-room-hero-section";
import DocShareFeatures from "@/components/docshare-features";
import TestimonialsSection from "@/components/testimonials-section";
import DataRoomComparison from "@/components/data-room-comparison";
import EnterpriseFAQ from "@/components/enterprise-faq";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "DoqShare Data Room - Secure Virtual Data Room for Due Diligence",
  description: "Create your secure virtual data room with DoqShare. Due diligence, fundraising, M&A, investment rounds. Advanced analytics, granular access control, GDPR/HIPAA/SOC2 compliance. Modern alternative to traditional data rooms.",
  keywords: [
    "virtual data room",
    "data room",
    "due diligence",
    "fundraising",
    "M&A",
    "merger acquisition",
    "investment rounds",
    "investors",
    "secure data room",
    "data room compliance",
    "VDR",
    "investor relations",
    "document management",
    "secure sharing",
    "deal room",
    "transaction room",
    "audit trail",
    "watermarking",
    "access control"
  ],
  canonical: "/data-room",
  ogImage: "/images/og-data-room.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DoqShare Data Room",
    "description": "Secure virtual data room platform for due diligence and fundraising",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Secure virtual data room",
      "Automated due diligence",
      "Fundraising and investment rounds",
      "Advanced analytics",
      "Granular access control",
      "GDPR/HIPAA/SOC2 compliance",
      "Dynamic watermarking",
      "Complete audit trail",
      "Screenshot protection",
      "Secure API"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "7-day free trial"
    }
  }
});

export default function DataRoomPage() {
  return (
    <div>
      {/* Data Room Hero Section */}
      <DataRoomHeroSection />

      {/* Data Room Features Section */}
      <DocShareFeatures />

      {/* Data Room Comparison Table */}
      <DataRoomComparison />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <EnterpriseFAQ />

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create your secure data room?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start building your data room today with advanced security and analytics features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Create Data Room
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}