import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight, Shield, FileText, Users, Clock } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { FAQ1Features } from "@/components/faq1-features";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export async function generateMetadata({ params }: FreelancePageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const freelancePage = dictionary.freelance_page;

  return generateSEOMetadata({
    title: `${freelancePage.metadata.title} - DoQshare`,
    description: freelancePage.metadata.description,
    keywords: freelancePage.metadata.keywords,
    canonical: `/${lang}/freelance`,
    ogImage: "/images/og-freelance.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": freelancePage.metadata.title,
      "description": freelancePage.metadata.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "featureList": [
        "Secure document sharing",
        "Client collaboration",
        "Document tracking",
        "Legal document protection",
        "Proposal sharing",
        "Contract management",
        "Client portal",
        "Professional branding",
        "Access control",
        "Audit trail"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free plan available, 14-day free trial"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Freelancers"
      }
    }
  });
}

interface FreelancePageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function FreelancePage({ params }: FreelancePageProps) {
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
      <TimeTracking pageName="freelance" />

      {/* Hero Section - Adapted for Freelancers */}
      <div className="min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <BackgroundPattern />
        <div className="relative z-10 text-center max-w-4xl w-full">
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[1.2] font-semibold tracking-tighter px-2 sm:px-0">
            {dictionary.hero_freelance.title}
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            {dictionary.hero_freelance.description}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground px-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>{dictionary.hero_freelance.feature_secure}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>{dictionary.hero_freelance.feature_legal}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>{dictionary.hero_freelance.feature_collaboration}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>{dictionary.hero_freelance.feature_track}</span>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
            <Button size="lg" className="rounded-full text-sm sm:text-base min-h-[48px] sm:min-h-[44px] w-full sm:w-auto touch-manipulation" asChild>
              <a href="https://dashboard.doqshare.com">
                {dictionary.hero_freelance.cta_primary}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <BookDemoButton
              variant="outline"
              size="lg"
              className="rounded-full text-sm sm:text-base shadow-none min-h-[48px] sm:min-h-[44px] w-full sm:w-auto touch-manipulation"
            />
          </div>
        </div>
      </div>

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud />
      </ScrollAnimation>

      {/* Benefits Section */}
      <ScrollAnimation delay={0.1}>
        <div className="w-full py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
                {dictionary.freelance_page.benefits.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                {dictionary.freelance_page.benefits.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex flex-col gap-3 p-5 sm:p-6 bg-background rounded-lg border shadow-sm">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{dictionary.freelance_page.benefits.features.professional_sharing.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dictionary.freelance_page.benefits.features.professional_sharing.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-background rounded-lg border shadow-sm">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="font-semibold text-lg">{dictionary.freelance_page.benefits.features.engagement_tracking.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {dictionary.freelance_page.benefits.features.engagement_tracking.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-background rounded-lg border shadow-sm">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="font-semibold text-lg">{dictionary.freelance_page.benefits.features.protect_work.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {dictionary.freelance_page.benefits.features.protect_work.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-background rounded-lg border shadow-sm">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="font-semibold text-lg">{dictionary.freelance_page.benefits.features.client_collaboration.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {dictionary.freelance_page.benefits.features.client_collaboration.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-background rounded-lg border shadow-sm">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="font-semibold text-lg">{dictionary.freelance_page.benefits.features.time_saving.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {dictionary.freelance_page.benefits.features.time_saving.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-background rounded-lg border shadow-sm">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="font-semibold text-lg">{dictionary.freelance_page.benefits.features.professional_branding.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {dictionary.freelance_page.benefits.features.professional_branding.description}
                </p>
              </div>
            </div>
            <div className="text-center px-2 sm:px-0">
              <Button size="lg" className="min-h-[48px] sm:min-h-[44px] w-full sm:w-auto touch-manipulation" asChild>
                <a href="https://dashboard.doqshare.com">
                  {dictionary.freelance_page.benefits.button}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>

      {/* How It Works Section */}
      <ScrollAnimation delay={0.2}>
        <div className="w-full py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
                {dictionary.freelance_page.how_it_works.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
                {dictionary.freelance_page.how_it_works.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center p-5 sm:p-6 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-primary font-semibold text-lg sm:text-xl">1</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{dictionary.freelance_page.how_it_works.steps.upload.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dictionary.freelance_page.how_it_works.steps.upload.description}
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-semibold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{dictionary.freelance_page.how_it_works.steps.share.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {dictionary.freelance_page.how_it_works.steps.share.description}
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-semibold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{dictionary.freelance_page.how_it_works.steps.track.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {dictionary.freelance_page.how_it_works.steps.track.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>

      {/* Features Section */}
      <ScrollAnimation delay={0.2}>
        <Features dictionary={dictionary} />
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation delay={0.1}>
        <Testimonials dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 Features Section */}
      <ScrollAnimation delay={0.2}>
        <FAQ1Features dictionary={dictionary} />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.1}>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-muted/50 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{dictionary.freelance_page.cta.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            {dictionary.freelance_page.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Button size="lg" className="min-h-[48px] sm:min-h-[44px] w-full sm:w-auto touch-manipulation" asChild>
              <a href="https://dashboard.doqshare.com">
                {dictionary.freelance_page.cta.button}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <BookDemoButton size="lg" variant="outline" className="min-h-[48px] sm:min-h-[44px] w-full sm:w-auto touch-manipulation" />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-4">
            {dictionary.freelance_page.cta.footer}
          </p>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}

