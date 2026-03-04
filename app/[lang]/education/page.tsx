import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight, GraduationCap, Users, BookOpen, Shield } from "lucide-react";
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

export async function generateMetadata({ params }: EducationPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "DoQshare for Education - Secure Document Sharing for Schools and Universities",
    description: "Share course materials, research papers, and academic documents securely with students and faculty. Track engagement, protect sensitive information, and maintain academic integrity. Perfect for schools, universities, and educational institutions.",
    keywords: [
      "education document sharing",
      "school document sharing",
      "university document sharing",
      "academic document sharing",
      "secure document sharing education",
      "course materials sharing",
      "research paper sharing",
      "student document sharing",
      "faculty collaboration",
      "academic document management",
      "educational platform",
      "secure file sharing education",
      "document tracking education",
      "student portal",
      "academic collaboration",
      "educational technology",
      "secure collaboration education",
      "document protection education",
      "educational workflow",
      "academic integrity"
    ],
    canonical: `/${lang}/education`,
    ogImage: "/images/og-education.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare for Education",
      "description": "Secure document sharing platform for schools, universities, and educational institutions",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "featureList": [
        "Secure document sharing",
        "Student collaboration",
        "Document tracking",
        "Course materials sharing",
        "Research paper sharing",
        "Academic document management",
        "Student portal",
        "Faculty collaboration",
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
        "audienceType": "Educational Institution"
      }
    }
  });
}

interface EducationPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function EducationPage({ params }: EducationPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const education = dictionary.education_page;
  
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
      <TimeTracking pageName="education" />

      {/* Hero Section - Adapted for Education */}
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 lg:py-16">
        <BackgroundPattern />
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            {education.hero.title}
          </h1>
          <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
            {education.hero.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>{education.hero.features.secure_sharing}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>{education.hero.features.course_materials}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>{education.hero.features.student_collaboration}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>{education.hero.features.academic_integrity}</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <a href="https://dashboard.doqshare.com">
                {education.hero.cta_primary}
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

      {/* Secure Document Sharing Platform Section */}
      <ScrollAnimation delay={0.1}>
        <div className="w-full py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                {education.secure_platform.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {education.secure_platform.description}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{education.secure_platform.feature1.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {education.secure_platform.feature1.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{education.secure_platform.feature2.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {education.secure_platform.feature2.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{education.secure_platform.feature3.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {education.secure_platform.feature3.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button size="lg" asChild>
                  <a href="https://dashboard.doqshare.com">
                    {education.secure_platform.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{education.secure_platform.how_it_works.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {education.secure_platform.how_it_works.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{education.secure_platform.how_it_works.step1.title}</h4>
                        <p className="text-xs text-muted-foreground">{education.secure_platform.how_it_works.step1.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{education.secure_platform.how_it_works.step2.title}</h4>
                        <p className="text-xs text-muted-foreground">{education.secure_platform.how_it_works.step2.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{education.secure_platform.how_it_works.step3.title}</h4>
                        <p className="text-xs text-muted-foreground">{education.secure_platform.how_it_works.step3.description}</p>
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
        <div className="container mx-auto px-4 py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{education.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {education.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://dashboard.doqshare.com">
                {education.cta.start_now}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <BookDemoButton size="lg" variant="outline" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {education.cta.footer}
          </p>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}

