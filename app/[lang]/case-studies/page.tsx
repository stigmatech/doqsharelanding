import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight } from "lucide-react";
import { HeroCaseStudies } from "@/components/hero-case-studies";
import LogoCloud from "@/components/logo-cloud";
import { CaseStudiesGrid } from "@/components/case-studies-grid";
import { IndustriesSection } from "@/components/industries-section";
import { SuccessMetrics } from "@/components/success-metrics";
import { Testimonials1 } from "@/components/testimonials1";
import { ScrollAnimation } from "@/components/scroll-animation";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import Link from "next/link";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface CaseStudiesPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: CaseStudiesPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "Case Studies - Real Customer Success Stories | DoQshare",
    description: "Discover how companies across industries use DoQshare to secure documents, track engagement, close deals faster, and achieve remarkable results. Real success stories with proven metrics.",
    keywords: [
      "DoQshare case studies",
      "customer success stories",
      "document sharing success",
      "fundraising case studies",
      "data room case studies",
      "document analytics success",
      "enterprise document sharing",
      "startup fundraising success",
      "M&A case studies",
      "investor relations success",
      "document security success",
      "compliance success stories"
    ],
    canonical: `/${lang}/case-studies`,
    ogImage: "/images/og-case-studies.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "DoQshare Case Studies",
      "description": "Real customer success stories and case studies",
      "url": "https://doqshare.com/case-studies"
    }
  });
}

export default async function CaseStudiesPage({ params }: CaseStudiesPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const caseStudies = dictionary.case_studies_page;
  
  return (
    <div>
      <ScrollTracking />
      <TimeTracking pageName="case-studies" />

      {/* Hero Section */}
      <HeroCaseStudies />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Success Metrics Section */}
      <ScrollAnimation delay={0.1}>
        <SuccessMetrics />
      </ScrollAnimation>

      {/* Case Studies Grid Section */}
      <ScrollAnimation delay={0.2}>
        <CaseStudiesGrid />
      </ScrollAnimation>

      {/* Industries Section */}
      <ScrollAnimation delay={0.1}>
        <IndustriesSection />
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation delay={0.2}>
        <Testimonials1 dictionary={dictionary} />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.1}>
        <div className="container mx-auto px-4 py-16">
          <div className="bg-muted/50 rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{caseStudies.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {caseStudies.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://dashboard.doqshare.com">
                  {caseStudies.cta.start_free_trial}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <BookDemoButton size="lg" variant="outline">
                {caseStudies.cta.schedule_demo}
              </BookDemoButton>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {caseStudies.cta.footer}
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

