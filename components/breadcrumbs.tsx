"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/seo";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  homeLabel?: string;
}

export default function Breadcrumbs({ items, className = "", homeLabel = "Home" }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com';
  const fullItems = [
    { name: homeLabel, url: baseUrl },
    ...items.map(item => ({
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(fullItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
      >
        <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
          {fullItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === 0 ? (
                <Link
                  href={item.url}
                  className="flex items-center hover:text-foreground transition-colors"
                  itemProp="item"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only" itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  {index === fullItems.length - 1 ? (
                    <span className="text-foreground font-medium" itemProp="name">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      className="hover:text-foreground transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.name}</span>
                    </Link>
                  )}
                </>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

