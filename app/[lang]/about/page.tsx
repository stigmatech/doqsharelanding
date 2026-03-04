import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Shield, Zap } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface AboutPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  
  return generateSEOMetadata({
    title: dictionary.about_page?.hero?.title || "About DoQshare - Our Mission and Team",
    description: dictionary.about_page?.hero?.description || "Discover the DoQshare team and our mission: revolutionizing secure document sharing. 41,000+ companies trust us with their most sensitive documents.",
    keywords: [
      "about DoQshare",
      "DoQshare team",
      "DoQshare mission",
      "DoQshare history",
      "DoQshare founders",
      "DoQshare company",
      "DoQshare values",
      "DoQshare culture"
    ],
    canonical: `/${lang}/about`,
    ogImage: "/images/og-about.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": dictionary.about_page?.hero?.title || "About DoQshare",
      "description": dictionary.about_page?.hero?.description || "About DoQshare and our team",
      "mainEntity": {
        "@type": "Organization",
        "name": "DoQshare",
        "description": "Secure document sharing platform",
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "founder": [
          {
            "@type": "Person",
            "name": dictionary.about_page?.team?.john_doe?.name || "John Doe",
            "jobTitle": dictionary.about_page?.team?.john_doe?.role || "CEO & Founder"
          },
          {
            "@type": "Person", 
            "name": dictionary.about_page?.team?.jane_smith?.name || "Jane Smith",
            "jobTitle": dictionary.about_page?.team?.jane_smith?.role || "CTO & Co-Founder"
          }
        ]
      }
    }
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const about = dictionary.about_page;
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{about.hero.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {about.hero.description}
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">{about.mission.title}</h2>
          <p className="text-lg text-muted-foreground mb-4">
            {about.mission.paragraph1}
          </p>
          <p className="text-lg text-muted-foreground">
            {about.mission.paragraph2}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">{about.numbers.title}</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>{about.numbers.companies}</span>
              <span className="font-bold">41,000+</span>
            </div>
            <div className="flex justify-between">
              <span>{about.numbers.documents}</span>
              <span className="font-bold">215,000+</span>
            </div>
            <div className="flex justify-between">
              <span>{about.numbers.links_viewed}</span>
              <span className="font-bold">1,200,000+</span>
            </div>
            <div className="flex justify-between">
              <span>{about.numbers.countries}</span>
              <span className="font-bold">150+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">{about.values.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>{about.values.security_first.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {about.values.security_first.description}
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>{about.values.user_centric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {about.values.user_centric.description}
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>{about.values.transparency.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {about.values.transparency.description}
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>{about.values.innovation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {about.values.innovation.description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">{about.team.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">JD</span>
              </div>
              <CardTitle>{about.team.john_doe.name}</CardTitle>
              <CardDescription>{about.team.john_doe.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {about.team.john_doe.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">JS</span>
              </div>
              <CardTitle>{about.team.jane_smith.name}</CardTitle>
              <CardDescription>{about.team.jane_smith.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {about.team.jane_smith.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">MJ</span>
              </div>
              <CardTitle>{about.team.mike_johnson.name}</CardTitle>
              <CardDescription>{about.team.mike_johnson.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {about.team.mike_johnson.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{about.cta.title}</h2>
        <p className="text-muted-foreground mb-6">
          {about.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="https://dashboard.doqshare.com">{about.cta.start_free}</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={`/${lang}/contact`}>{about.cta.contact_sales}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
