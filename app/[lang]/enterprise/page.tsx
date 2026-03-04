import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroEnterprise from "@/components/hero-enterprise";
import LogoCloud from "@/components/logo-cloud";
import DocShareFeatures from "@/components/docshare-features";
import Testimonials from "@/components/testimonials";
import EnterpriseComparison from "@/components/enterprise-comparison";
import EnterpriseFAQ from "@/components/enterprise-faq";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";
import { RelatedPages } from "@/components/related-pages";

export async function generateMetadata({ params }: EnterprisePageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const enterprisePage = dictionary.enterprise_page;

  return generateSEOMetadata({
    title: `${enterprisePage.metadata.title} - DoQshare`,
    description: enterprisePage.metadata.description,
    keywords: enterprisePage.metadata.keywords,
    canonical: `/${lang}/enterprise`,
    ogImage: "/images/og-enterprise.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": enterprisePage.metadata.title,
      "description": enterprisePage.metadata.description,
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
}

interface EnterprisePageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function EnterprisePage({ params }: EnterprisePageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const reviewsSchemas = generateReviewsSchema({
    reviews: reviewsData,
    aggregateRating,
  });

  return (
    <div>
      {reviewsSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <ScrollTracking />
      <TimeTracking pageName="enterprise" />

      {/* Hero Enterprise Section */}
      <HeroEnterprise dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Enterprise Features Section */}
      <ScrollAnimation delay={0.1}>
        <DocShareFeatures dictionary={dictionary} />
      </ScrollAnimation>

      {/* Features Comparison Table */}
      <ScrollAnimation delay={0.2}>
        <EnterpriseComparison dictionary={dictionary} lang={lang} />
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation delay={0.1}>
        <Testimonials dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation delay={0.2}>
        <EnterpriseFAQ dictionary={dictionary} />
      </ScrollAnimation>

      {/* Related Pages Section */}
      <ScrollAnimation delay={0.15}>
        <RelatedPages
          title={dictionary.common?.related_pages?.title || "Related Pages"}
          description={dictionary.common?.related_pages?.description}
          lang={lang}
          pages={[
            {
              title: dictionary.navigation?.security || "Security",
              description: dictionary.security_page?.metadata?.description || "Learn about our enterprise-grade security and compliance",
              href: "/security"
            },
            {
              title: dictionary.navigation?.data_room || "Data Room",
              description: dictionary.data_room_page?.metadata?.description || "Create secure virtual data rooms for M&A and fundraising",
              href: "/data-room"
            },
            {
              title: dictionary.navigation?.pricing || "Pricing",
              description: dictionary.pricing_page?.metadata?.description || "Choose the perfect plan for your needs",
              href: "/pricing"
            },
            {
              title: dictionary.navigation?.features || "Features",
              description: dictionary.features_page?.metadata?.description || "Discover all the powerful features DoQshare offers",
              href: "/features"
            },
            {
              title: dictionary.navigation?.analytics || "Analytics",
              description: dictionary.analytics_page?.metadata?.description || "Get detailed insights into how your documents are being viewed",
              href: "/analytics"
            },
            {
              title: dictionary.navigation?.how_it_works || "How It Works",
              description: dictionary.how_it_works_page?.metadata?.description || "Learn how to get started with DoQshare in 3 simple steps",
              href: "/how-it-works"
            }
          ]}
        />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.1}>
        <div className="container mx-auto px-4 py-16">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{dictionary.enterprise_page.cta_title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {dictionary.enterprise_page.cta_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                {dictionary.enterprise_page.cta_primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                {dictionary.enterprise_page.cta_secondary}
              </Button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}