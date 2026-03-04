import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroPricing from "@/components/hero-pricing";
import LogoCloud from "@/components/logo-cloud";
import { Pricing1 } from "@/components/pricing1";
import Testimonials from "@/components/testimonials";
import { Pricing2 } from "@/components/pricing2";
import { FAQ1Pricing } from "@/components/faq1-pricing";
import { ScrollAnimation } from "@/components/scroll-animation";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";
import { RelatedPages } from "@/components/related-pages";

interface PricingPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: PricingPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const pricingPage = dictionary.pricing_page;

  return generateSEOMetadata({
    title: `${pricingPage.metadata.title} - DoQshare`,
    description: pricingPage.metadata.description,
    keywords: pricingPage.metadata.keywords,
    canonical: `/${lang}/pricing`,
    ogImage: "/images/og-pricing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "DoQshare",
      "description": pricingPage.metadata.description,
      "brand": {
        "@type": "Brand",
        "name": "DoQshare"
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
          "name": "Pro",
          "price": "29",
          "priceCurrency": "USD",
          "description": "Professional plan with advanced analytics and custom branding",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        },
        {
          "@type": "Offer",
          "name": "Business",
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
}

export default async function PricingPage({ params }: PricingPageProps) {
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
      <TimeTracking pageName="pricing" />
      {/* Hero Pricing Section */}
      <HeroPricing dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Pricing1 Section */}
      <ScrollAnimation delay={0.1}>
        <Pricing1 dictionary={dictionary} lang={lang} />
      </ScrollAnimation>

      {/* Pricing2 Section */}
      <ScrollAnimation delay={0.2} amount={0.1}>
        <Pricing2 dictionary={dictionary} lang={lang} />
      </ScrollAnimation>



      {/* Testimonials Marquee Section */}
      <ScrollAnimation delay={0.1}>
        <Testimonials dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 Pricing Section */}
      <ScrollAnimation delay={0.2}>
        <FAQ1Pricing dictionary={dictionary} />
      </ScrollAnimation>

      {/* Related Pages Section */}
      <ScrollAnimation delay={0.15}>
        <RelatedPages
          title={dictionary.common?.related_pages?.title || "Related Pages"}
          description={dictionary.common?.related_pages?.description}
          lang={lang}
          pages={[
            {
              title: dictionary.navigation?.features || "Features",
              description: dictionary.features_page?.metadata?.description || "Discover all the powerful features DoQshare offers",
              href: "/features"
            },
            {
              title: dictionary.navigation?.how_it_works || "How It Works",
              description: dictionary.how_it_works_page?.metadata?.description || "Learn how to get started with DoQshare in 3 simple steps",
              href: "/how-it-works"
            },
            {
              title: dictionary.navigation?.enterprise || "Enterprise",
              description: dictionary.enterprise_page?.metadata?.description || "Enterprise solutions with dedicated support and custom features",
              href: "/enterprise"
            },
            {
              title: dictionary.navigation?.data_room || "Data Room",
              description: dictionary.data_room_page?.metadata?.description || "Create secure virtual data rooms for M&A and fundraising",
              href: "/data-room"
            },
            {
              title: dictionary.navigation?.security || "Security",
              description: dictionary.security_page?.metadata?.description || "Learn about our enterprise-grade security and compliance",
              href: "/security"
            },
            {
              title: dictionary.navigation?.analytics || "Analytics",
              description: dictionary.analytics_page?.metadata?.description || "Get detailed insights into how your documents are being viewed",
              href: "/analytics"
            }
          ]}
        />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.1}>
        <div className="container mx-auto px-4 py-8 lg:py-10">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{dictionary.pricing_page.cta_title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {dictionary.pricing_page.cta_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                {dictionary.pricing_page.cta_primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                {dictionary.pricing_page.cta_secondary}
              </Button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}