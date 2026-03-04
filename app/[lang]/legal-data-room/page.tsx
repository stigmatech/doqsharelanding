import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight, Scale, Shield, FileText, BarChart3 } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { FAQ1LegalDataRoom } from "@/components/faq1-legal-data-room";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export async function generateMetadata({ params }: LegalDataRoomPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "Legal Data Room Software - Secure Document Sharing for Law Firms | DoQshare",
    description: "Create a secure legal data room for your law firm. Share sensitive legal documents, track client interactions, and enhance client communication with advanced analytics and enterprise-grade security.",
    keywords: [
      "legal data room",
      "law firm data room",
      "legal document sharing",
      "secure legal documents",
      "legal data room software",
      "law firm document management",
      "legal document tracking",
      "client communication",
      "legal document security",
      "law firm collaboration",
      "legal document analytics",
      "secure document sharing law",
      "legal data room platform",
      "law firm technology",
      "legal document management system",
      "client portal law firm",
      "legal document protection",
      "law firm data security",
      "legal document sharing platform",
      "secure legal collaboration"
    ],
    canonical: `/${lang}/legal-data-room`,
    ogImage: "/images/og-legal-data-room.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare Legal Data Room",
      "description": "Secure legal data room software for law firms and legal professionals",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "featureList": [
        "Secure legal document sharing",
        "Client communication enhancement",
        "Page-by-page analytics",
        "Custom link permissions",
        "Branded legal data room",
        "Document tracking",
        "Client interaction capture",
        "Enterprise-grade security",
        "Audit trail",
        "Access control"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free plan available, 14-day free trial"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Legal Professionals"
      }
    }
  });
}

interface LegalDataRoomPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function LegalDataRoomPage({ params }: LegalDataRoomPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const legal = dictionary.legal_data_room_page;
  
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
      <TimeTracking pageName="legal-data-room" />

      {/* Hero Section - Adapted for Legal Data Room */}
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 lg:py-16">
        <BackgroundPattern />
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            {legal.hero.title}
          </h1>
          <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
            {legal.hero.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-primary" />
              <span>{legal.hero.features.legal_sharing}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>{legal.hero.features.enterprise_security}</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>{legal.hero.features.advanced_analytics}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <span>{legal.hero.features.client_communication}</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <a href="https://dashboard.doqshare.com">
                {legal.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <BookDemoButton
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Branded Legal Data Room Section */}
      <ScrollAnimation delay={0.1}>
        <div className="w-full py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                {legal.branded_data_room.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {legal.branded_data_room.description}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{legal.branded_data_room.feature1.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {legal.branded_data_room.feature1.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{legal.branded_data_room.feature2.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {legal.branded_data_room.feature2.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{legal.branded_data_room.feature3.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {legal.branded_data_room.feature3.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button size="lg" asChild>
                  <a href="https://dashboard.doqshare.com">
                    {legal.branded_data_room.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{legal.branded_data_room.features_title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {legal.branded_data_room.features_description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Scale className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{legal.branded_data_room.feature_item1.title}</h4>
                        <p className="text-xs text-muted-foreground">{legal.branded_data_room.feature_item1.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{legal.branded_data_room.feature_item2.title}</h4>
                        <p className="text-xs text-muted-foreground">{legal.branded_data_room.feature_item2.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{legal.branded_data_room.feature_item3.title}</h4>
                        <p className="text-xs text-muted-foreground">{legal.branded_data_room.feature_item3.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>

      {/* Legal Data Room with Advanced Analytics Section */}
      <ScrollAnimation delay={0.2}>
        <div className="w-full py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-8 border shadow-sm order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{legal.advanced_analytics.analytics_title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {legal.advanced_analytics.analytics_description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{legal.advanced_analytics.step1.title}</h4>
                        <p className="text-xs text-muted-foreground">{legal.advanced_analytics.step1.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{legal.advanced_analytics.step2.title}</h4>
                        <p className="text-xs text-muted-foreground">{legal.advanced_analytics.step2.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{legal.advanced_analytics.step3.title}</h4>
                        <p className="text-xs text-muted-foreground">{legal.advanced_analytics.step3.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold">
                {legal.advanced_analytics.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {legal.advanced_analytics.description}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{legal.advanced_analytics.feature1.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {legal.advanced_analytics.feature1.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{legal.advanced_analytics.feature2.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {legal.advanced_analytics.feature2.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{legal.advanced_analytics.feature3.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {legal.advanced_analytics.feature3.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button size="lg" asChild>
                  <a href="https://dashboard.doqshare.com">
                    {legal.advanced_analytics.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>

      {/* Features Section */}
      <ScrollAnimation delay={0.1}>
        <Features dictionary={dictionary} />
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation delay={0.2}>
        <Testimonials dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation delay={0.1}>
        <FAQ1LegalDataRoom />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.2}>
        <div className="container mx-auto px-4 py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{legal.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {legal.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://dashboard.doqshare.com">
                {legal.cta.start_now}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <BookDemoButton size="lg" variant="outline" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {legal.cta.footer}
          </p>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}

