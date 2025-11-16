import { Metadata } from "next";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import PricingHeroSection from "@/components/pricing-hero-section";
import PricingPlansShort from "@/components/pricing-plans-short";
import TestimonialsSection from "@/components/testimonials-section";
import PricingComparator from "@/components/pricing-comparator";
import EnterpriseFAQ from "@/components/enterprise-faq";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";

export const metadata: Metadata = generateSEOMetadata({
  title: "DoqShare Pricing - Transparent Plans for Secure Data Rooms",
  description: "Discover our transparent pricing for secure document sharing. Free, professional and enterprise plans with advanced analytics, GDPR/HIPAA/SOC2 compliance. 14-day free trial, no commitment.",
  keywords: [
    "document sharing pricing",
    "data room pricing",
    "document security cost",
    "DoqShare plans",
    "enterprise pricing",
    "free trial",
    "document subscription",
    "analytics pricing",
    "data room cost",
    "due diligence pricing",
    "compliance pricing",
    "watermarking cost",
    "secure subscription",
    "audit trail pricing",
    "access control cost"
  ],
  canonical: "/pricing",
  ogImage: "/images/og-pricing.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DoqShare",
    "description": "Secure document sharing platform with advanced analytics",
    "brand": {
      "@type": "Brand",
      "name": "DoqShare"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free plan with basic features",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      {
        "@type": "Offer", 
        "name": "DoQshare Pro",
        "price": "29",
        "priceCurrency": "USD",
        "description": "Professional plan with advanced analytics and custom branding",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      {
        "@type": "Offer",
        "name": "DoQshare Business",
        "price": "79",
        "priceCurrency": "USD", 
        "description": "Business plan with unlimited light data rooms and advanced security",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      {
        "@type": "Offer",
        "name": "Data Rooms",
        "price": "199",
        "priceCurrency": "USD", 
        "description": "Data Rooms plan with unlimited data rooms and enterprise features",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      {
        "@type": "Offer",
        "name": "Data Rooms Plus",
        "price": "349",
        "priceCurrency": "USD", 
        "description": "Premium data rooms plan with unlimited storage and dedicated support",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }
});

export default function PricingPage() {
  return (
    <div>
      <ScrollTracking />
      <TimeTracking pageName="pricing" />
      {/* Pricing Hero Section */}
      <PricingHeroSection />

      {/* Pricing Plans Section */}
      <PricingPlansShort />

      {/* Pricing Comparison Table */}
      <PricingComparator />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <EnterpriseFAQ />

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to choose your plan?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with our free plan and upgrade as you grow. All plans include core features with no hidden fees.
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
        </div>
      </div>
    </div>
  );
}