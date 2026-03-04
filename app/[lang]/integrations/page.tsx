import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowRight, Code, Webhook, Book, Terminal } from "lucide-react";
import { HeroIntegrations } from "@/components/hero-integrations";
import LogoCloud from "@/components/logo-cloud";
import IntegrationsList from "@/components/integrations-list";
import { FAQ1Integrations } from "@/components/faq1-integrations";
import { ScrollAnimation } from "@/components/scroll-animation";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface IntegrationsPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: IntegrationsPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "DoQshare Integrations - Connect with Your Favorite Tools",
    description: "Integrate DoQshare with Notion, Slack, Zapier, and more. Build custom integrations with our REST API and webhooks. Connect your workflow seamlessly.",
    keywords: [
      "DoQshare integrations",
      "document sharing integrations",
      "Notion integration",
      "Slack integration",
      "Zapier integration",
      "REST API",
      "webhooks",
      "API integration",
      "custom integrations",
      "developer tools",
      "workflow automation",
      "document management API"
    ],
    canonical: `/${lang}/integrations`,
    ogImage: "/images/og-integrations.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare Integrations",
      "description": "Connect DoQshare with your favorite tools and build custom integrations",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "featureList": [
        "Notion integration",
        "Slack integration",
        "Zapier integration",
        "REST API",
        "Webhooks",
        "Custom integrations",
        "Developer SDKs"
      ]
    }
  });
}

export default async function IntegrationsPage({ params }: IntegrationsPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const integrations = dictionary.integrations_page;
  return (
    <div>
      {/* Hero Section */}
      <HeroIntegrations />

      {/* Logo Cloud Section */}
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>

      {/* Integrations List Section */}
      <ScrollAnimation delay={0.1}>
        <IntegrationsList />
      </ScrollAnimation>

      {/* API & Webhooks Section */}
      <ScrollAnimation delay={0.2}>
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {integrations.custom_integrations.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {integrations.custom_integrations.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* API Card */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{integrations.rest_api.title}</CardTitle>
                    </div>
                    <CardDescription>
                      {integrations.rest_api.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.rest_api.features.document_management}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.rest_api.features.analytics}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.rest_api.features.user_management}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.rest_api.features.sdks}
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/${lang}/docs#endpoints`}>
                        {integrations.rest_api.button}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Webhooks Card */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Webhook className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{integrations.webhooks.title}</CardTitle>
                    </div>
                    <CardDescription>
                      {integrations.webhooks.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.webhooks.features.view_events}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.webhooks.features.download_notifications}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.webhooks.features.access_events}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {integrations.webhooks.features.secure_delivery}
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/${lang}/docs#webhooks`}>
                        {integrations.webhooks.button}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Integration Guides Section */}
      <ScrollAnimation delay={0.1}>
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {integrations.integration_guides.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {integrations.integration_guides.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Book className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>{integrations.integration_guides.notion.title}</CardTitle>
                  <CardDescription>
                    {integrations.integration_guides.notion.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/${lang}/help/integrations/notion`}>
                      {integrations.integration_guides.view_guide}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Book className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>{integrations.integration_guides.slack.title}</CardTitle>
                  <CardDescription>
                    {integrations.integration_guides.slack.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/${lang}/help/integrations/slack`}>
                      {integrations.integration_guides.view_guide}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Book className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>{integrations.integration_guides.zapier.title}</CardTitle>
                  <CardDescription>
                    {integrations.integration_guides.zapier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/${lang}/help/integrations/zapier`}>
                      {integrations.integration_guides.view_guide}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href={`/${lang}/help`}>
                  {integrations.integration_guides.view_all}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation delay={0.1}>
        <FAQ1Integrations />
      </ScrollAnimation>

      {/* Final CTA Section */}
      <ScrollAnimation delay={0.2}>
        <div className="container mx-auto px-4 py-16">
          <div className="bg-muted/50 rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{integrations.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {integrations.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://dashboard.doqshare.com">
                  {integrations.cta.get_started}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <BookDemoButton size="lg" variant="outline">
                {integrations.cta.schedule_demo}
              </BookDemoButton>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {integrations.cta.help_text} <Link href={`/${lang}/docs`} className="text-primary hover:underline">{integrations.cta.api_docs}</Link> {integrations.cta.or} <Link href={`/${lang}/contact`} className="text-primary hover:underline">{integrations.cta.contact_us}</Link>.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

