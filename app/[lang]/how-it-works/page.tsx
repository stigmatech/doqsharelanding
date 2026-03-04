import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight } from "lucide-react";
import HeroHowItWorks from "@/components/hero-how-it-works";
import LogoCloud from "@/components/logo-cloud";
import HowItWorksSteps from "@/components/how-it-works-steps";
import { Feature5HowItWorks } from "@/components/feature5-how-it-works";
import TestimonialsSection from "@/components/testimonials-section";
import { FAQ1HowItWorks } from "@/components/faq1-how-it-works";
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

interface HowItWorksPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: HowItWorksPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const howItWorksPage = dictionary.how_it_works_page;

  return generateSEOMetadata({
    title: `${howItWorksPage.metadata.title} - DoQshare`,
    description: howItWorksPage.metadata.description,
    keywords: howItWorksPage.metadata.keywords,
    canonical: `/${lang}/how-it-works`,
    ogImage: "/images/og-how-it-works.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to use DoQshare",
      "description": "Step-by-step guide to using DoQshare for secure document sharing",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Upload your documents",
          "text": "Upload your documents securely to DoQshare platform. Support for PDFs, Word docs, PowerPoint presentations, and more. Drag and drop or select from your computer.",
          "image": "https://doqshare.com/images/upload-step.jpg"
        },
        {
          "@type": "HowToStep", 
          "name": "Share securely",
          "text": "Create secure links with custom permissions, passwords, and expiration dates. Control who can access your documents and for how long.",
          "image": "https://doqshare.com/images/share-step.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Track engagement",
          "text": "Monitor real-time analytics and document engagement. See page-by-page analytics, download tracking, and engagement metrics to optimize your document strategy.",
          "image": "https://doqshare.com/images/track-step.jpg"
        }
      ]
    }
  });
}

export default async function HowItWorksPage({ params }: HowItWorksPageProps) {
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
      <TimeTracking pageName="how-it-works" />

      {/* Hero How It Works Section */}
      <HeroHowItWorks dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* How It Works Steps Section */}
      <ScrollAnimation delay={0.1}>
        <HowItWorksSteps dictionary={dictionary} />
      </ScrollAnimation>

      {/* Feature5 How It Works Section */}
      <ScrollAnimation delay={0.2}>
        <Feature5HowItWorks dictionary={dictionary} />
      </ScrollAnimation>

      {/* Customer Testimonials */}
      <ScrollAnimation delay={0.1}>
        <TestimonialsSection dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 How It Works Section */}
      <ScrollAnimation delay={0.2}>
        <FAQ1HowItWorks dictionary={dictionary} />
      </ScrollAnimation>

      {/* Blog1 Section */}
      <ScrollAnimation delay={0.1}>
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
              title: dictionary.navigation?.pricing || "Pricing",
              description: dictionary.pricing_page?.metadata?.description || "Choose the perfect plan for your needs",
              href: "/pricing"
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
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-10 md:p-12 text-center border-2 border-primary/20 shadow-xl overflow-hidden relative max-w-4xl mx-auto">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt={dictionary.common?.alt_texts?.how_it_works || "How it works"}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {dictionary.how_it_works_page.cta_title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {dictionary.how_it_works_page.cta_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg" asChild>
                  <a href="https://dashboard.doqshare.com">
                    {dictionary.how_it_works_page.cta_primary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <BookDemoButton size="lg" variant="outline" className="shadow-lg" dictionary={dictionary} />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {dictionary.how_it_works_page.cta_footer}
              </p>
            </div>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  );
}
