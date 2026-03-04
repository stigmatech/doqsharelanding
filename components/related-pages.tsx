"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface RelatedPagesProps {
  title: string;
  description?: string;
  pages: RelatedPage[];
  lang: string;
  className?: string;
}

export function RelatedPages({ title, description, pages, lang, className }: RelatedPagesProps) {
  return (
    <ScrollAnimation>
      <section className={`container mx-auto px-4 py-12 lg:py-16 ${className || ""}`}>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pages.map((page, index) => {
            const isExternal = page.href.startsWith("http");
            const href = isExternal ? page.href : `/${lang}${page.href}`;
            
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    {page.icon && (
                      <div className="text-primary">{page.icon}</div>
                    )}
                    {isExternal ? (
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    ) : (
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {page.description}
                  </p>
                  <Link
                    href={href}
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {isExternal ? "Visit" : "Learn more"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </ScrollAnimation>
  );
}

