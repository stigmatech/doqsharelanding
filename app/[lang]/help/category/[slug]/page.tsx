import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  helpCategories,
  getArticlesByCategory,
  getCategoryBySlug,
} from "@/lib/help-content";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";

export async function generateStaticParams() {
  return helpCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return {};
  }

  return generateSEOMetadata({
    title: `${category.name} - DoQshare Help Center`,
    description: category.description || `Help articles about ${category.name}`,
    canonical: `/help/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const articles = getArticlesByCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div>
      <ScrollTracking />
      <TimeTracking pageName={`help-category-${slug}`} />

      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/help" className="hover:text-foreground">
            Help Center
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          {category.description && (
            <p className="text-lg text-muted-foreground max-w-3xl">
              {category.description}
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-4">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        {/* Articles List */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/help/${article.categorySlug}/${article.slug}`}
                className="block"
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    {article.description && (
                      <CardDescription className="line-clamp-3">
                        {article.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>Read article</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found in this category.</p>
          </div>
        )}

        {/* Back to Help Center */}
        <div className="mt-12">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Help Center
          </Link>
        </div>
      </div>
    </div>
  );
}

