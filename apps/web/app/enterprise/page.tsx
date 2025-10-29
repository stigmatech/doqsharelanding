import { Metadata } from "next";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import EnterpriseHeroSection from "@/components/enterprise-hero-section";
import DocShareFeatures from "@/components/docshare-features";
import TestimonialsSection from "@/components/testimonials-section";
import EnterpriseComparison from "@/components/enterprise-comparison";
import EnterpriseFAQ from "@/components/enterprise-faq";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";

export const metadata: Metadata = generateSEOMetadata({
  title: "DoqShare Enterprise Solutions - Advanced Security and Complete Compliance",
  description: "DoqShare solutions for large enterprises: military-grade security, GDPR/HIPAA/SOC2 compliance, SSO, advanced integrations, dedicated 24/7 support. On-premise, private cloud or hybrid deployment. 99.9% SLA.",
  keywords: [
    "enterprise solutions",
    "enterprise security",
    "GDPR compliance enterprise",
    "HIPAA enterprise",
    "SOC2 enterprise",
    "SSO enterprise",
    "enterprise integrations",
    "dedicated support",
    "on-premise deployment",
    "private cloud",
    "enterprise document security",
    "enterprise SLA",
    "24/7 support",
    "military-grade security",
    "white label",
    "enterprise API",
    "enterprise audit",
    "enterprise compliance",
    "document governance",
    "cloud security"
  ],
  canonical: "/enterprise",
  ogImage: "/images/og-enterprise.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DoqShare Enterprise",
    "description": "Secure document sharing solutions for large enterprises",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "name": "Enterprise Plan",
      "price": "Contact us",
      "priceCurrency": "USD",
      "description": "Custom solution for enterprises"
    },
    "featureList": [
      "Military-grade security",
      "GDPR/HIPAA/SOC2 compliance",
      "SSO and advanced integrations",
      "Dedicated 24/7 support",
      "On-premise deployment",
      "Private cloud",
      "White label",
      "Enterprise API",
      "Audit and governance",
      "99.9% SLA"
    ],
    "areaServed": "Worldwide",
    "serviceType": "Document Security Solutions"
  }
});

export default function EnterprisePage() {
  return (
    <div>
      <ScrollTracking />
      <TimeTracking pageName="enterprise" />
      {/* Enterprise Hero Section */}
      <EnterpriseHeroSection />

      {/* Enterprise Features Section */}
      <DocShareFeatures />

      {/* Features Comparison Table */}
      <EnterpriseComparison />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <EnterpriseFAQ />

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to deploy DoqShare in your organization?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our enterprise team to discuss your specific requirements and get a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Deploy in your organization
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