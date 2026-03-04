import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight, TrendingUp, Shield, CheckCircle } from "lucide-react";
import HeroDataRoom from "@/components/hero-data-room";
import LogoCloud from "@/components/logo-cloud";
import { Feature5DataRoom } from "@/components/feature5-data-room";
import { DataRoomComparisonTable } from "@/components/data-room-comparison-table";
import TestimonialsSection from "@/components/testimonials-section";
import { FAQ1DataRoom } from "@/components/faq1-data-room";
import { Blog1DataRoom } from "@/components/blog1-data-room";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export async function generateMetadata({ params }: StartupsPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "DoQshare for Startups - Pitch Deck Sharing & Investor Tracking Platform",
    description: "Share your pitch deck securely with investors and track engagement in real-time. See who viewed your deck, which slides they spent time on, and optimize your fundraising strategy. Trusted by thousands of founders.",
    keywords: [
      "pitch deck sharing",
      "investor tracking",
      "fundraising analytics",
      "startup fundraising",
      "pitch deck analytics",
      "investor relations",
      "secure pitch deck",
      "fundraising tools",
      "startup data room",
      "investor engagement",
      "pitch deck security",
      "fundraising metrics",
      "startup investors",
      "pitch deck tracking",
      "fundraising platform",
      "investor updates",
      "startup pitch",
      "venture capital",
      "seed round",
      "series A fundraising",
      "board management",
      "investor relations software"
    ],
    canonical: `/${lang}/startups`,
    ogImage: "/images/og-startups.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare for Startups",
      "description": "Secure pitch deck sharing and investor tracking platform for startups and fundraising",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "featureList": [
        "Pitch deck analytics",
        "Investor tracking",
        "Secure document sharing",
        "Dynamic watermarking",
        "Real-time notifications",
        "Custom branding",
        "Fundraising data room",
        "NDA protection",
        "Screenshot protection",
        "Page-by-page tracking",
        "Board management",
        "Investor relations"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free plan available, 14-day free trial"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups"
      }
    }
  });
}

interface StartupsPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function StartupsPage({ params }: StartupsPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const startups = dictionary.startups_page;
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
      <TimeTracking pageName="startups" />

      {/* Hero Section - Adapted for Startups */}
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 lg:py-16">
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            {dictionary.hero_startup.title}
          </h1>
          <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
            {dictionary.hero_startup.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>{dictionary.hero_startup.feature_track}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>{dictionary.hero_startup.feature_private}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>{dictionary.hero_startup.feature_free}</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <a href="https://dashboard.doqshare.com">
                {dictionary.hero_startup.cta_primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <BookDemoButton
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {startups.hero_footer}
          </p>
        </div>
      </div>

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Track Your Fundraising Progress Section */}
      <ScrollAnimation delay={0.1}>
        <div className="w-full py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {startups.track_fundraising.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {startups.track_fundraising.description}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{startups.track_fundraising.feature1.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {startups.track_fundraising.feature1.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{startups.track_fundraising.feature2.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {startups.track_fundraising.feature2.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{startups.track_fundraising.feature3.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {startups.track_fundraising.feature3.description}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button size="lg" asChild>
                  <a href="https://dashboard.doqshare.com">
                    {startups.track_fundraising.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{startups.analytics.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-semibold">{startups.analytics.series_a}</p>
                        <p className="text-sm text-muted-foreground">12 {startups.analytics.views} • 8 {startups.analytics.investors}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">85%</p>
                        <p className="text-xs text-muted-foreground">{startups.analytics.avg_completion}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-semibold">{startups.analytics.product_demo}</p>
                        <p className="text-sm text-muted-foreground">5 {startups.analytics.views} • 3 {startups.analytics.investors}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">72%</p>
                        <p className="text-xs text-muted-foreground">{startups.analytics.avg_completion}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{startups.analytics.recent_activity}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{startups.analytics.activity1}</span>
                      <span className="text-muted-foreground ml-auto">2 {startups.analytics.min_ago}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{startups.analytics.activity2}</span>
                      <span className="text-muted-foreground ml-auto">15 {startups.analytics.min_ago}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>{startups.analytics.activity3}</span>
                      <span className="text-muted-foreground ml-auto">1 {startups.analytics.hour_ago}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>

      {/* Feature5DataRoom Section */}
      <ScrollAnimation delay={0.2}>
        <Feature5DataRoom dictionary={dictionary} />
      </ScrollAnimation>

      {/* Data Room Comparison Table */}
      <ScrollAnimation delay={0.1}>
        <DataRoomComparisonTable dictionary={dictionary} />
      </ScrollAnimation>

      {/* Customer Testimonials */}
      <ScrollAnimation delay={0.2}>
        <TestimonialsSection dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 Data Room Section */}
      <ScrollAnimation delay={0.1}>
        <FAQ1DataRoom dictionary={dictionary} />
      </ScrollAnimation>

      {/* Blog1 Data Room Section */}
      <ScrollAnimation delay={0.2}>
        <Blog1DataRoom dictionary={dictionary} lang={lang} />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.1}>
        <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{startups.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {startups.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://dashboard.doqshare.com">
                {startups.cta.upload_pitch_deck}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <BookDemoButton size="lg" variant="outline" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {startups.cta.footer}
          </p>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}

