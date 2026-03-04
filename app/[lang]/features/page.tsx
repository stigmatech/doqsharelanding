import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight } from "lucide-react";
import { Hero2 } from "@/components/hero2";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { FAQ1Features } from "@/components/faq1-features";
import { ScrollAnimation } from "@/components/scroll-animation";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";
import { RelatedPages } from "@/components/related-pages";

interface FeaturesPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: FeaturesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const featuresPage = dictionary.features_page;

  return generateSEOMetadata({
    title: `${featuresPage.metadata.title} - DoQshare`,
    description: featuresPage.metadata.description,
    keywords: featuresPage.metadata.keywords,
    canonical: `/${lang}/features`,
    ogImage: "/images/og-features.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare",
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
}

export default async function FeaturesPage({ params }: FeaturesPageProps) {
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
      <TimeTracking pageName="features" />

      {/* Hero2 Section */}
      <Hero2 dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Features Section */}
      <ScrollAnimation delay={0.1}>
        <Features dictionary={dictionary} />
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation delay={0.2}>
        <Testimonials dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 Features Section */}
      <ScrollAnimation delay={0.1}>
        <FAQ1Features dictionary={dictionary} />
      </ScrollAnimation>

      {/* Related Pages Section */}
      <ScrollAnimation delay={0.15}>
        <RelatedPages
          title={dictionary.common?.related_pages?.title || "Related Pages"}
          description={dictionary.common?.related_pages?.description}
          lang={lang}
          pages={[
            {
              title: dictionary.navigation?.pricing || "Pricing",
              description: dictionary.pricing_page?.metadata?.description || "Choose the perfect plan for your needs",
              href: "/pricing"
            },
            {
              title: dictionary.navigation?.how_it_works || "How It Works",
              description: dictionary.how_it_works_page?.metadata?.description || "Learn how to get started with DoQshare in 3 simple steps",
              href: "/how-it-works"
            },
            {
              title: dictionary.navigation?.analytics || "Analytics",
              description: dictionary.analytics_page?.metadata?.description || "Get detailed insights into how your documents are being viewed",
              href: "/analytics"
            },
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
              title: dictionary.navigation?.enterprise || "Enterprise",
              description: dictionary.enterprise_page?.metadata?.description || "Enterprise solutions with dedicated support",
              href: "/enterprise"
            }
          ]}
        />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.2}>
        <div className="container mx-auto px-4 py-16">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{dictionary.features_page.cta_title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {dictionary.features_page.cta_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://dashboard.doqshare.com">
                  {dictionary.features_page.cta_primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <BookDemoButton size="lg" variant="outline">
                {dictionary.features_page.cta_secondary}
              </BookDemoButton>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {dictionary.features_page.cta_footer}
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
