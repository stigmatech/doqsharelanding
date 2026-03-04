import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, HelpCircle, Mail } from "lucide-react";
import Link from "next/link";
import {
  helpCategories,
  helpArticles,
  getFeaturedArticles,
  getRecentArticles,
} from "@/lib/help-content";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { HelpSearch } from "@/components/help-search";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface HelpPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: HelpPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "DoQshare Help Center - Documentation & Support",
    description: "Find answers to your questions about DoQshare. Browse help articles, guides, and tutorials on document sharing, analytics, data rooms, and more.",
    keywords: [
      "DoQshare help",
      "DoQshare documentation",
      "help center",
      "support",
      "user guide",
      "tutorials",
      "FAQ",
      "documentation"
    ],
    canonical: `/${lang}/help`,
    ogImage: "/images/og-help.jpg",
  });
}

export default async function HelpPage({ params }: HelpPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const help = dictionary.help_page;
  
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles(12);
  const featuredCategories = helpCategories.filter(cat => cat.featured);

  return (
    <div>
      <ScrollTracking />
      <TimeTracking pageName="help" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{help.hero.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {help.hero.description}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <HelpSearch />
            <p className="text-sm text-muted-foreground mt-4">
              {help.hero.no_answer} <Link href={`/${lang}/contact`} className="text-primary hover:underline">{help.hero.contact_email}</Link>
            </p>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{help.featured_categories}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => {
              const categoryArticles = helpArticles.filter(
                article => article.categorySlug === category.slug
              );
              return (
                <Link
                  key={category.slug}
                  href={`/help/category/${category.slug}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      {category.description && (
                        <CardDescription>{category.description}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {categoryArticles.length} {help.articles_count}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{help.featured_articles}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/help/${article.categorySlug}/${article.slug}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      {article.description && (
                        <CardDescription className="line-clamp-2">
                          {article.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{help.all_categories}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {helpCategories.map((category) => {
              const categoryArticles = helpArticles.filter(
                article => article.categorySlug === category.slug
              );
              return (
                <Link
                  key={category.slug}
                  href={`/help/category/${category.slug}`}
                  className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{category.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {categoryArticles.length}
                    </span>
                  </div>
                  {category.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{help.recent_articles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/help/${article.categorySlug}/${article.slug}`}
                className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
              >
                <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm group-hover:text-primary line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {article.category}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{help.contact_support.title}</h2>
          <p className="text-muted-foreground mb-6">
            {help.contact_support.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={`/${lang}/contact`}>
                <Mail className="mr-2 h-5 w-5" />
                {help.contact_support.contact_button}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:support@doqshare.com">
                {help.contact_support.email_button}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

