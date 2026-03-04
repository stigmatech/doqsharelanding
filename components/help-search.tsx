"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { searchArticles, type HelpArticle } from "@/lib/help-content";

export function HelpSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    return searchArticles(query).slice(0, 5);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      const firstResult = results[0];
      router.push(`/help/${firstResult.categorySlug}/${firstResult.slug}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles and guides..."
            className="pl-10 h-12 text-base"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => {
              // Delay to allow click on results
              setTimeout(() => setIsOpen(false), 200);
            }}
          />
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((article) => (
                <Link
                  key={article.id}
                  href={`/help/${article.categorySlug}/${article.slug}`}
                  className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sm">{article.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      {article.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {article.description}
                        </p>
                      )}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </div>
                </Link>
              ))}
              {results.length >= 5 && (
                <div className="p-3 text-center border-t">
                  <Link
                    href={`/help/search?q=${encodeURIComponent(query)}`}
                    className="text-sm text-primary hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    View all results
                  </Link>
                </div>
              )}
            </div>
          ) : query.length >= 2 ? (
            <div className="p-6 text-center text-muted-foreground">
              <p>No results found for "{query}"</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

