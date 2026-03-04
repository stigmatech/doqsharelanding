"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Rss, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog-content";
import { BlogSearchFilter } from "@/components/blog-search-filter";
import { BlogPagination } from "@/components/blog-pagination";
import { ScrollAnimation } from "@/components/scroll-animation";
import Image from "next/image";
import { BlogNewsletterForm } from "@/components/blog-newsletter-form";
import { type Locale } from "@/i18n-config";

const POSTS_PER_PAGE = 9;

interface BlogPageClientProps {
  initialPosts: BlogPost[];
  featuredPost: BlogPost | undefined;
  dictionary: {
    blog_page: {
      title: string;
      description: string;
      rss: string;
      featured_article: string;
      read_article: string;
      read_more: string;
      no_articles: string;
      clear_filters: string;
      stay_updated: {
        title: string;
        description: string;
        privacy: string;
      };
    };
    blog_post_page: {
      author_by: string;
    };
    common?: {
      subscribe_rss?: string;
      alt_texts?: {
        blog_post_image?: string;
      };
    };
    forms?: {
      newsletter_form?: {
        email_placeholder?: string;
        button_text?: string;
        submitting?: string;
        success_title?: string;
        success_description?: string;
      };
    };
  };
  lang: Locale;
}

export default function BlogPageClient({ initialPosts, featuredPost, dictionary, lang }: BlogPageClientProps) {
  // Use initialPosts directly, no need to call getAllBlogPosts again
  const allPosts = initialPosts;
  const blog = dictionary.blog_page;

  // Get unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set(
      allPosts
        .map((post) => post.category?.trim())
        .filter((cat): cat is string => Boolean(cat))
    );
    return Array.from(cats).sort();
  }, [allPosts]);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    allPosts.forEach((post) => {
      post.tags?.forEach((tag) => {
        if (tag?.trim()) {
          allTags.add(tag.trim());
        }
      });
    });
    return Array.from(allTags).sort();
  }, [allPosts]);

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);
  const [currentPage, setCurrentPage] = useState(1);

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredPosts.length]);

  // Exclude featured post from regular posts if it's in the current page
  const regularPosts = paginatedPosts.filter(
    (post) => !post.featured || post.slug !== featuredPost?.slug
  );

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/${lang}/blog/rss.xml`} aria-label={dictionary.common?.subscribe_rss || "Subscribe to RSS feed"}>
                <Rss className="h-4 w-4 mr-2" />
                {blog.rss}
              </Link>
            </Button>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {blog.description}
          </p>
        </div>
      </ScrollAnimation>

      {/* Search and Filters */}
      <ScrollAnimation delay={0.1}>
        <BlogSearchFilter
          posts={allPosts}
          onFilteredPostsChange={setFilteredPosts}
          categories={categories}
          tags={tags}
        />
      </ScrollAnimation>

      {/* Featured Post */}
      {featuredPost && currentPage === 1 && (
        <ScrollAnimation delay={0.2}>
          <div className="mb-12">
            <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Tag className="h-3 w-3" />
                    {blog.featured_article}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{dictionary.blog_post_page.author_by} {featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.displayDate || featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                    {featuredPost.tags && featuredPost.tags.length > 0 && (
                      <div className="flex items-center gap-2">
                        {featuredPost.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-muted px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button size="lg" asChild>
                    <Link href={`/${lang}/blog/${featuredPost.slug}`}>
                      {blog.read_article}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative bg-muted min-h-[300px] lg:min-h-full">
                  {featuredPost.image && featuredPost.image.startsWith('http') ? (
                    <Image
                      src={featuredPost.image}
                      alt={dictionary.common?.alt_texts?.blog_post_image ? `${dictionary.common.alt_texts.blog_post_image}: ${featuredPost.title}` : featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">📄</div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </ScrollAnimation>
      )}

      {/* Blog Posts Grid */}
      {regularPosts.length > 0 ? (
        <ScrollAnimation delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative bg-muted h-48">
                  {post.image && post.image.startsWith('http') ? (
                    <Image
                      src={post.image}
                      alt={dictionary.common?.alt_texts?.blog_post_image ? `${dictionary.common.alt_texts.blog_post_image}: ${post.title}` : post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl">📰</div>
                    </div>
                  )}
                </div>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 mb-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{dictionary.blog_post_page.author_by} {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.displayDate || post.date}</span>
                    </div>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-muted text-muted-foreground px-2 py-0.5 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/${lang}/blog/${post.slug}`}>
                      {blog.read_more}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">{blog.no_articles}</p>
          <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
            {blog.clear_filters}
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          postsPerPage={POSTS_PER_PAGE}
          totalPosts={filteredPosts.length}
        />
      )}

      {/* Newsletter Signup */}
      <ScrollAnimation delay={0.4}>
        <div className="mt-16">
          <Card className="bg-muted/50 border-2 p-8 lg:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{blog.stay_updated.title}</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {blog.stay_updated.description}
              </p>
              <BlogNewsletterForm dictionary={dictionary} />
              <p className="text-xs text-muted-foreground mt-4">
                {blog.stay_updated.privacy}
              </p>
            </div>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  );
}
