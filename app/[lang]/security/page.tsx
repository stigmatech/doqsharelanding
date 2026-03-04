import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight, Shield, Lock, CheckCircle, Key, FileX, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSecurity from "@/components/hero-security";
import LogoCloud from "@/components/logo-cloud";
import { Feature5Security } from "@/components/feature5-security";
import TestimonialsSection from "@/components/testimonials-section";
import { FAQ1Security } from "@/components/faq1-security";
import { generateMetadata as generateSEOMetadata, generateReviewsSchema } from "@/lib/seo";
import { reviewsData, aggregateRating } from "@/lib/reviews-data";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";
import { RelatedPages } from "@/components/related-pages";

interface SecurityPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: SecurityPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const securityPage = dictionary.security_page;

  return generateSEOMetadata({
    title: `${securityPage.metadata.title} - DoQshare`,
    description: securityPage.metadata.description,
    keywords: securityPage.metadata.keywords,
    canonical: `/${lang}/security`,
    ogImage: "/images/og-security.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": securityPage.metadata.title,
      "description": securityPage.metadata.description,
      "mainEntity": {
        "@type": "Organization",
        "name": "DoQshare",
        "security": [
          "AES-256 Encryption",
          "SOC2 Compliance",
          "HIPAA Compliance",
          "GDPR Compliance",
          "CCPA Compliance",
          "Zero-Knowledge Architecture",
          "Enterprise-Grade Infrastructure"
        ]
      }
    }
  });
}

export default async function SecurityPage({ params }: SecurityPageProps) {
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
      <TimeTracking pageName="security" />

      {/* Hero Security Section */}
      <HeroSecurity dictionary={dictionary} lang={lang} />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Feature5 Security Section */}
      <ScrollAnimation delay={0.1}>
        <Feature5Security dictionary={dictionary} />
      </ScrollAnimation>

      {/* Zero-Knowledge Architecture Section */}
      <ScrollAnimation delay={0.2}>
        <div className="w-full py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{dictionary.security_page.zero_knowledge.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3 mb-4">
                    <FileX className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {dictionary.security_page.zero_knowledge.we_cannot_access_title}
                      </h4>
                      <p className="text-muted-foreground">
                        {dictionary.security_page.zero_knowledge.we_cannot_access_description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">{dictionary.security_page.zero_knowledge.client_side_title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {dictionary.security_page.zero_knowledge.client_side_description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">{dictionary.security_page.zero_knowledge.no_superadmin_title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {dictionary.security_page.zero_knowledge.no_superadmin_description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">{dictionary.security_page.zero_knowledge.privacy_by_design_title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {dictionary.security_page.zero_knowledge.privacy_by_design_description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{dictionary.security_page.zero_knowledge.what_this_means}</strong> {dictionary.security_page.zero_knowledge.what_this_means_description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollAnimation>

      {/* Compliance Section */}
      <ScrollAnimation delay={0.1}>
        <div className="w-full py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{dictionary.security_page.compliance.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {dictionary.security_page.compliance.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>{dictionary.security_page.compliance.soc2.title}</CardTitle>
                  <CardDescription>
                    {dictionary.security_page.compliance.soc2.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.security_page.compliance.soc2.content}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>{dictionary.security_page.compliance.gdpr.title}</CardTitle>
                  <CardDescription>
                    {dictionary.security_page.compliance.gdpr.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.security_page.compliance.gdpr.content}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle>{dictionary.security_page.compliance.hipaa.title}</CardTitle>
                  <CardDescription>
                    {dictionary.security_page.compliance.hipaa.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.security_page.compliance.hipaa.content}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>{dictionary.security_page.compliance.ccpa.title}</CardTitle>
                  <CardDescription>
                    {dictionary.security_page.compliance.ccpa.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.security_page.compliance.ccpa.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Customer Testimonials */}
      <ScrollAnimation delay={0.2}>
        <TestimonialsSection dictionary={dictionary} />
      </ScrollAnimation>

      {/* FAQ1 Security Section */}
      <ScrollAnimation delay={0.1}>
        <FAQ1Security dictionary={dictionary} />
      </ScrollAnimation>

      {/* Related Pages Section */}
      <ScrollAnimation delay={0.15}>
        <RelatedPages
          title={dictionary.common?.related_pages?.title || "Related Pages"}
          description={dictionary.common?.related_pages?.description}
          lang={lang}
          pages={[
            {
              title: dictionary.navigation?.enterprise || "Enterprise",
              description: dictionary.enterprise_page?.metadata?.description || "Enterprise solutions with dedicated support and custom features",
              href: "/enterprise"
            },
            {
              title: dictionary.navigation?.data_room || "Data Room",
              description: dictionary.data_room_page?.metadata?.description || "Create secure virtual data rooms for M&A and fundraising",
              href: "/data-room"
            },
            {
              title: dictionary.navigation?.features || "Features",
              description: dictionary.features_page?.metadata?.description || "Discover all the powerful features DoQshare offers",
              href: "/features"
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
              title: dictionary.navigation?.analytics || "Analytics",
              description: dictionary.analytics_page?.metadata?.description || "Get detailed insights into how your documents are being viewed",
              href: "/analytics"
            }
          ]}
        />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.2}>
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{dictionary.security_page.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {dictionary.security_page.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://dashboard.doqshare.com">
                  {dictionary.security_page.cta.primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <BookDemoButton size="lg" variant="outline">
                {dictionary.security_page.cta.secondary}
              </BookDemoButton>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {dictionary.security_page.cta.footer}
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
