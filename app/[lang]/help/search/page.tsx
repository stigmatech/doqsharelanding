import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { searchArticles } from "@/lib/help-content";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { HelpSearch } from "@/components/help-search";
import ScrollTracking from "@/components/analytics/scroll-tracking";
import TimeTracking from "@/components/analytics/time-tracking";
import { getDictionary } from "../../../../get-dictionary";
import { type Locale } from "../../../../i18n-config";

interface SearchPageProps {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ params }: SearchPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  
  const searchTitle = lang === 'fr'
    ? "Rechercher des Articles d'Aide - Centre d'Aide DoQshare"
    : "Search Help Articles - DoQshare Help Center";
  const searchDescription = lang === 'fr'
    ? "Recherchez dans les articles d'aide et la documentation DoQshare."
    : "Search through DoQshare help articles and documentation.";

  return generateSEOMetadata({
    title: `${searchTitle} - DoQshare`,
    description: searchDescription,
    canonical: `/${lang}/help/search`,
  });
}

export default async function SearchPage({
  params,
  searchParams,
}: SearchPageProps) {
  const { lang } = await params;
  const { q } = await searchParams;
  const query = q || "";
  const results = query ? searchArticles(query) : [];

  return (
    <div>
      <ScrollTracking />
      <TimeTracking pageName="help-search" />

      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/help" className="hover:text-foreground">
            Help Center
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Search</span>
        </nav>

        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Search Help Articles</h1>
          <div className="max-w-2xl">
            <HelpSearch />
          </div>
        </div>

        {/* Search Results */}
        {query ? (
          <>
            <div className="mb-6">
              <p className="text-muted-foreground">
                {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
              </p>
            </div>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((article) => (
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
                          <CardDescription className="line-clamp-3">
                            {article.description}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="h-4 w-4" />
                          <span>Read article</span>
                          <ArrowRight className="h-4 w-4 ml-auto" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No results found for "{query}"
                </p>
                <p className="text-sm text-muted-foreground">
                  Try different keywords or <Link href="/contact" className="text-primary hover:underline">contact support</Link>
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Enter a search query above to find help articles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

