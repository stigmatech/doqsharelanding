import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight } from "lucide-react";
import HeroAnalytics from "@/components/hero-analytics";
import LogoCloud from "@/components/logo-cloud";
import { Feature5Analytics } from "@/components/feature5-analytics";
import TestimonialsSection from "@/components/testimonials-section";
import { FAQ1Analytics } from "@/components/faq1-analytics";
import { Blog1DataRoom } from "@/components/blog1-data-room";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { RelatedPages } from "@/components/related-pages";

interface AnalyticsPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: AnalyticsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const analyticsPage = dictionary.analytics_page;

  return generateSEOMetadata({
    title: `${analyticsPage.metadata.title} - DoQshare`,
    description: analyticsPage.metadata.description,
    keywords: analyticsPage.metadata.keywords,
    canonical: `/${lang}/analytics`,
    ogImage: "/images/og-analytics.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare Analytics",
      "description": analyticsPage.metadata.description,
      "applicationCategory": "AnalyticsApplication",
      "operatingSystem": "Web",
      "featureList": [
        "Page-by-page analytics",
        "Time tracking",
        "Viewer insights",
        "Geographic data",
        "Device information",
        "Real-time updates",
        "Export capabilities",
        "Session tracking"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Available on all plans"
      }
    }
  });
}

export default async function AnalyticsPage({ params }: AnalyticsPageProps) {
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
      <TimeTracking pageName="analytics" />

      {/* Hero Analytics Section */}
      <HeroAnalytics dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Feature5 Analytics Section */}
      <ScrollAnimation delay={0.1}>
        <Feature5Analytics dictionary={dictionary} />
      </ScrollAnimation>

      {/* Customer Testimonials */}
      <ScrollAnimation delay={0.2}>
        <TestimonialsSection dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 Analytics Section */}
      <ScrollAnimation delay={0.1}>
        <FAQ1Analytics dictionary={dictionary} />
      </ScrollAnimation>

      {/* Blog1 Section */}
      <ScrollAnimation delay={0.2}>
        <Blog1DataRoom dictionary={dictionary} lang={lang} />
      </ScrollAnimation>

      {/* Related Pages Section */}
      <ScrollAnimation delay={0.15}>
        <RelatedPages
          title={dictionary.common?.related_pages?.title || "Related Pages"}
          description={dictionary.common?.related_pages?.description}
          lang={lang}
          pages={[
            {
              title: dictionary.navigation?.data_room || "Data Room",
              description: dictionary.data_room_page?.metadata?.description || "Create secure virtual data rooms for M&A, fundraising, and due diligence",
              href: "/data-room"
            },
            {
              title: dictionary.navigation?.features || "Features",
              description: dictionary.features_page?.metadata?.description || "Discover all the powerful features DoQshare offers",
              href: "/features"
            },
            {
              title: dictionary.navigation?.security || "Security",
              description: dictionary.security_page?.metadata?.description || "Learn about our enterprise-grade security and compliance",
              href: "/security"
            },
            {
              title: dictionary.navigation?.how_it_works || "How It Works",
              description: dictionary.how_it_works_page?.metadata?.description || "Learn how to get started with DoQshare in 3 simple steps",
              href: "/how-it-works"
            },
            {
              title: dictionary.navigation?.pricing || "Pricing",
              description: dictionary.pricing_page?.metadata?.description || "Choose the perfect plan for your needs",
              href: "/pricing"
            },
            {
              title: dictionary.navigation?.enterprise || "Enterprise",
              description: dictionary.enterprise_page?.metadata?.description || "Enterprise solutions with dedicated support and custom features",
              href: "/enterprise"
            }
          ]}
        />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.1}>
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-10 md:p-12 text-center border-2 border-primary/20 shadow-xl overflow-hidden relative max-w-4xl mx-auto">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt={dictionary.common?.alt_texts?.analytics_dashboard || "Analytics dashboard"}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {dictionary.analytics_page.cta_title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {dictionary.analytics_page.cta_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg" asChild>
                  <a href="https://dashboard.doqshare.com">
                    {dictionary.analytics_page.cta_primary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <BookDemoButton size="lg" variant="outline" className="shadow-lg" dictionary={dictionary} />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {dictionary.analytics_page.cta_footer}
              </p>
            </div>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  );
}
