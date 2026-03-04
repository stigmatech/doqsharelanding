import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroStartup from "@/components/hero-startup";
import LogoCloud from "@/components/logo-cloud";
import { Feature5Startup } from "@/components/feature5-startup";
import TestimonialsSection from "@/components/testimonials-section";
import { FAQ1Startup } from "@/components/faq1-startup";
import { Blog1Startup } from "@/components/blog1-startup";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export async function generateMetadata({ params }: StartupPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const startupPage = dictionary.startup_page;

  return generateSEOMetadata({
    title: `${startupPage.metadata.title} - DoQshare`,
    description: startupPage.metadata.description,
    keywords: startupPage.metadata.keywords,
    canonical: `/${lang}/startup`,
    ogImage: "/images/og-startup.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare for Startups",
      "description": startupPage.metadata.description,
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
        "Page-by-page tracking"
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

interface StartupPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function StartupPage({ params }: StartupPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const startup = dictionary.startup_page;

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
      <TimeTracking pageName="startup" />

      {/* Hero Startup Section */}
      <HeroStartup dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <LogoCloud dictionary={dictionary} />

      {/* Track Your Fundraising Progress Section */}
      <div className="w-full py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-5xl tracking-tighter font-bold">
                {startup.track_fundraising.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {startup.track_fundraising.description}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{startup.track_fundraising.feature1.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {startup.track_fundraising.feature1.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{startup.track_fundraising.feature2.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {startup.track_fundraising.feature2.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{startup.track_fundraising.feature3.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {startup.track_fundraising.feature3.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button size="lg" asChild>
                  <a href="https://dashboard.doqshare.com">
                    {startup.track_fundraising.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{startup.analytics.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg border">
                      <div>
                        <p className="font-semibold">{startup.analytics.series_a}</p>
                        <p className="text-sm text-muted-foreground">12 {startup.analytics.views} • 8 {startup.analytics.investors}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">85%</p>
                        <p className="text-xs text-muted-foreground">{startup.analytics.avg_completion}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg border">
                      <div>
                        <p className="font-semibold">{startup.analytics.product_demo}</p>
                        <p className="text-sm text-muted-foreground">5 {startup.analytics.views} • 3 {startup.analytics.investors}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">72%</p>
                        <p className="text-xs text-muted-foreground">{startup.analytics.avg_completion}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{startup.analytics.recent_activity}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{startup.analytics.activity1}</span>
                      <span className="text-muted-foreground ml-auto">2 {startup.analytics.min_ago}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{startup.analytics.activity2}</span>
                      <span className="text-muted-foreground ml-auto">15 {startup.analytics.min_ago}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>{startup.analytics.activity3}</span>
                      <span className="text-muted-foreground ml-auto">1 {startup.analytics.hour_ago}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature5Startup Section */}
      <Feature5Startup dictionary={dictionary} />

      {/* Customer Testimonials */}
      <TestimonialsSection dictionary={dictionary} />

      {/* FAQ1 Startup Section */}
      <FAQ1Startup dictionary={dictionary} />

      {/* Blog1 Startup Section */}
      <Blog1Startup dictionary={dictionary} lang={lang} />

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{startup.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {startup.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://dashboard.doqshare.com">
                {startup.cta.upload_pitch_deck}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`/${lang}/contact`}>
                {startup.cta.book_demo}
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {startup.cta.footer}
          </p>
        </div>
      </div>
    </div>
  );
}

