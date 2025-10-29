import { Metadata } from "next";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero-section";
import DocShareFeatures from "@/components/docshare-features";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "DoqShare Features - Advanced Analytics, Security and Complete Compliance",
  description: "Explore all DoqShare features: real-time analytics, enterprise-grade document security, GDPR/HIPAA/SOC2 compliance, virtual data rooms, dynamic watermarking, granular access control and complete audit trail.",
  keywords: [
    "DoqShare features",
    "document analytics",
    "document security",
    "GDPR compliance",
    "HIPAA compliant",
    "SOC2 compliant",
    "virtual data room",
    "document protection",
    "dynamic watermarking",
    "document tracking",
    "secure collaboration",
    "access control",
    "audit trail",
    "screenshot protection",
    "password protection",
    "automatic NDA",
    "AI document assistant",
    "notion sharing",
    "secure API",
    "integrations"
  ],
  canonical: "/features",
  ogImage: "/images/og-features.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DoqShare",
    "description": "Secure document sharing platform with advanced analytics",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Real-time advanced analytics",
      "Enterprise-grade document security",
      "GDPR/HIPAA/SOC2 compliance",
      "Virtual data rooms",
      "Document protection",
      "Dynamic watermarking",
      "Granular access control",
      "Complete audit trail",
      "Screenshot protection",
      "Password protection",
      "Automatic NDA",
      "AI document assistant",
      "Secure API",
      "Third-party integrations"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "14-day free trial"
    }
  }
});

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <DocShareFeatures />

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies who trust DoqShare with their most important documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}
