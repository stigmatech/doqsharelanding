import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getArticleBySlug,
  getArticlesByCategory,
  getCategoryBySlug,
  helpArticles,
  type HelpArticle,
} from "@/lib/help-content";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../../../get-dictionary";
import { type Locale } from "../../../../../i18n-config";

export async function generateStaticParams() {
  // Generate all article paths from help-content.ts
  return helpArticles.map((article) => ({
    category: article.categorySlug,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; category: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, category, slug } = await params;
  const article = getArticleBySlug(slug, category);
  if (!article) {
    return {};
  }

  return generateSEOMetadata({
    title: `${article.title} - DoQshare Help Center`,
    description: article.description || article.title,
    canonical: `/${lang}/help/${category}/${slug}`,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: Locale; category: string; slug: string }>;
}) {
  const { lang, category, slug } = await params;
  const dictionary = await getDictionary(lang);
  const helpArticle = dictionary.help_article_page;
  
  const article = getArticleBySlug(slug, category);
  const categoryObj = getCategoryBySlug(category);
  const relatedArticles = getArticlesByCategory(category)
    .filter(a => a.id !== article?.id)
    .slice(0, 3);

  if (!article || !categoryObj) {
    notFound();
  }

  // Calculate reading time (average 200 words per minute)
  const wordCount = article.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div>
      <ScrollTracking />
      <TimeTracking pageName={`help-article-${slug}`} />

      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href={`/${lang}/help`} className="hover:text-foreground">
            {helpArticle.help_center}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/${lang}/help/category/${category}`}
            className="hover:text-foreground"
          >
            {categoryObj.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{categoryObj.name}</Badge>
            {article.featured && (
              <Badge variant="default">{helpArticle.featured}</Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          {article.description && (
            <p className="text-lg text-muted-foreground mb-6">{article.description}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{helpArticle.updated} {new Date(article.updatedAt).toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readingTime} {helpArticle.min_read}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="markdown-content">
            {article.content.split('\n').map((line, index) => {
              // Simple markdown rendering - in production, use a proper markdown library
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.substring(4)}</h3>;
              }
              if (line.startsWith('- ') || line.startsWith('1. ')) {
                return <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              // Handle links
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              let processedLine = line;
              const links: Array<{ text: string; url: string; index: number }> = [];
              let match;
              while ((match = linkRegex.exec(line)) !== null) {
                links.push({
                  text: match[1],
                  url: match[2],
                  index: match.index,
                });
              }
              
              if (links.length > 0) {
                let parts: React.ReactNode[] = [];
                let lastIndex = 0;
                links.forEach((link, linkIndex) => {
                  if (link.index > lastIndex) {
                    parts.push(processedLine.substring(lastIndex, link.index));
                  }
                  parts.push(
                    <Link
                      key={linkIndex}
                      href={link.url}
                      className="text-primary hover:underline"
                    >
                      {link.text}
                    </Link>
                  );
                  lastIndex = link.index + match![0].length;
                });
                if (lastIndex < processedLine.length) {
                  parts.push(processedLine.substring(lastIndex));
                }
                return <p key={index} className="mb-4 leading-relaxed">{parts}</p>;
              }
              
              return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
            })}
          </div>
        </article>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t mb-12">
          <Link
            href={`/${lang}/help/category/${category}`}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {helpArticle.back_to_category} {categoryObj.name}
          </Link>
          <Link
            href={`/${lang}/help`}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            {helpArticle.help_center}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-6">{helpArticle.related_articles}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/${lang}/help/${relatedArticle.categorySlug}/${relatedArticle.slug}`}
                  className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  {relatedArticle.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedArticle.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Contact Support CTA */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">
            {helpArticle.was_helpful}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/contact`}>
                {helpArticle.contact_support}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:support@doqshare.com">
                support@doqshare.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

