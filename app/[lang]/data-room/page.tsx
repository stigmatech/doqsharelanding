import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { RelatedPages } from "@/components/related-pages";
import HeroDataRoom from "@/components/hero-data-room";
import LogoCloud from "@/components/logo-cloud";
import { Feature5DataRoom } from "@/components/feature5-data-room";
import { DataRoomComparisonTable } from "@/components/data-room-comparison-table";
import TestimonialsSection from "@/components/testimonials-section";
import { FAQ1DataRoom } from "@/components/faq1-data-room";
import { Blog1DataRoom } from "@/components/blog1-data-room";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface DataRoomPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: DataRoomPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const dataRoomPage = dictionary.data_room_page;

  return generateSEOMetadata({
    title: `${dataRoomPage.metadata.title} - DoQshare`,
    description: dataRoomPage.metadata.description,
    keywords: dataRoomPage.metadata.keywords,
    canonical: `/${lang}/data-room`,
    ogImage: "/images/og-data-room.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare Data Room",
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
}

export default async function DataRoomPage({ params }: DataRoomPageProps) {
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
      {/* Data Room Hero Section
      <DataRoomHeroSection /> */}

      {/* Hero Data Room Section */}
      <HeroDataRoom dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Feature5DataRoom Section */}
      <ScrollAnimation delay={0.1}>
        <Feature5DataRoom dictionary={dictionary} />
      </ScrollAnimation>

      {/* Data Room Comparison Table */}
      <ScrollAnimation delay={0.2}>
        <DataRoomComparisonTable dictionary={dictionary} />
      </ScrollAnimation>

      {/* Customer Testimonials */}
      <ScrollAnimation delay={0.1}>
        <TestimonialsSection dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 Data Room Section */}
      <ScrollAnimation delay={0.2}>
        <FAQ1DataRoom dictionary={dictionary} />
      </ScrollAnimation>

             {/* Blog1 Data Room Section */}
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
              title: dictionary.navigation?.analytics || "Analytics",
              description: dictionary.analytics_page?.metadata?.description || "Get detailed insights into how your documents are being viewed and shared",
              href: "/analytics"
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
              title: dictionary.navigation?.enterprise || "Enterprise",
              description: dictionary.enterprise_page?.metadata?.description || "Enterprise solutions with dedicated support and custom features",
              href: "/enterprise"
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt={dictionary.common?.alt_texts?.virtual_data_room || "Virtual data room"}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {dictionary.data_room_page.cta_title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {dictionary.data_room_page.cta_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg">
                  {dictionary.data_room_page.cta_primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="shadow-lg">
                  {dictionary.data_room_page.cta_secondary}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  );
}