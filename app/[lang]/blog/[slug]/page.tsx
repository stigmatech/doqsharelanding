import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-content";
// Markdown loader disabled - using only hardcoded posts
// import { getRelatedPosts } from "@/lib/blog-loader";
import { generateMetadata as generateSEOMetadata, generateBlogPostingSchema } from "@/lib/seo";
import { BlogShareButtons } from "@/components/blog-share-buttons";
import { ScrollAnimation } from "@/components/scroll-animation";
import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary";
import { type Locale } from "../../../../i18n-config";

interface BlogPostPageProps {
  params: Promise<{ lang: Locale; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ['en', 'fr'];
  return locales.flatMap((lang) => {
    const posts = getAllBlogPosts(lang);
    return posts.map((post) => ({
      lang,
      slug: post.slug,
    }));
  });
}

// Helper function to convert date string to ISO 8601 format
function convertDateToISO(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // If date parsing fails, try to parse common formats
      // Format: "December 20, 2024" or "20 December 2024"
      const parsed = Date.parse(dateString);
      if (!isNaN(parsed)) {
        return new Date(parsed).toISOString();
      }
      // Fallback to current date
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

// Helper function to convert readTime to ISO 8601 duration
function convertReadTimeToDuration(readTime: string): string {
  // Extract number from strings like "15 min read" or "5 min"
  const match = readTime.match(/(\d+)\s*min/);
  if (match) {
    const minutes = parseInt(match[1], 10);
    return `PT${minutes}M`; // ISO 8601 duration format
  }
  return "PT5M"; // Default to 5 minutes
}

// Helper function to estimate word count from content
function estimateWordCount(content: string): number {
  // Remove markdown syntax and count words
  const text = content
    .replace(/[#*`\[\]()]/g, ' ') // Remove markdown characters
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug, lang);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com';
  const canonical = `/${lang}/blog/${slug}`;
  const datePublished = convertDateToISO(post.date);
  const wordCount = estimateWordCount(post.content);
  const timeRequired = convertReadTimeToDuration(post.readTime);

  return generateSEOMetadata({
    title: `${post.title} | DoQshare Blog`,
    description: post.excerpt,
    keywords: [
      ...(post.tags || []),
      post.category,
      "document security",
      "secure sharing",
      "DoQshare"
    ],
    canonical,
    ogImage: post.image,
    structuredData: generateBlogPostingSchema({
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished,
      dateModified: datePublished, // Can be updated later if needed
      author: post.author,
      url: canonical,
      articleSection: post.category,
      keywords: post.tags,
      wordCount,
      timeRequired,
      inLanguage: lang,
      publisher: {
        name: 'DoQshare',
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
      },
    }),
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = await params;
  const dictionary = await getDictionary(lang);
  const blogPost = dictionary.blog_post_page;

  const post = getBlogPostBySlug(slug, lang);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post, same language)
  const relatedPosts = getAllBlogPosts(lang)
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Get previous and next posts (same language)
  const allPosts = getAllBlogPosts(lang);
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      {/* Back to Blog Link */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href={`/${lang}/blog`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {blogPost.back_to_blog}
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                {post.category}
              </span>
              {post.tags && post.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium border border-border">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{blogPost.author_by} {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Featured Image */}
        {post.image && (
          <ScrollAnimation>
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <div className="relative aspect-[21/9] bg-gradient-to-br from-muted to-muted/50">
                {post.image.startsWith('http') ? (
                  <Image
                    src={post.image}
                    alt={dictionary.common?.alt_texts?.blog_post_image ? `${dictionary.common.alt_texts.blog_post_image}: ${post.title}` : post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                    quality={90}
                  />
                ) : post.image.startsWith('/') ? (
                  <Image
                    src={post.image}
                    alt={dictionary.common?.alt_texts?.blog_post_image ? `${dictionary.common.alt_texts.blog_post_image}: ${post.title}` : post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <span className="text-6xl opacity-50">📄</span>
                  </div>
                )}
                {/* Gradient overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollAnimation>
        )}

        {/* Article Content - Matching Introduction Style */}
        <ScrollAnimation delay={0.1}>
          <article className="max-w-4xl mx-auto mb-16">
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-xl md:prose-h1:text-2xl lg:prose-h1:text-3xl prose-h1:mb-5 prose-h1:leading-tight
                prose-h2:text-lg md:prose-h2:text-xl lg:prose-h2:text-2xl prose-h2:mb-4 prose-h2:leading-tight
                prose-h3:text-base md:prose-h3:text-lg lg:prose-h3:text-xl prose-h3:mb-3 prose-h3:leading-tight
                prose-p:text-base md:prose-p:text-lg prose-p:text-muted-foreground prose-p:mb-6 prose-p:leading-relaxed prose-p:font-light
                prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                prose-strong:font-semibold
                prose-em:italic
                prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
                prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
                prose-li:mb-2
                prose-code:text-sm prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
                prose-img:rounded-lg prose-img:shadow-lg
                prose-table:w-full prose-table:border-collapse
                prose-th:border prose-th:border-border prose-th:p-2 prose-th:bg-muted prose-th:font-semibold
                prose-td:border prose-td:border-border prose-td:p-2"
              dangerouslySetInnerHTML={{
                __html: post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.trim() === "") return "";

                  // Headers
                  if (paragraph.startsWith("# ")) {
                    return `<h1 class="text-xl md:text-2xl lg:text-3xl font-bold mb-5 leading-tight tracking-tight">${paragraph.replace(/^# /, "")}</h1>`;
                  }
                  if (paragraph.startsWith("## ")) {
                    return `<h2 class="text-lg md:text-xl lg:text-2xl font-bold mb-4 leading-tight tracking-tight">${paragraph.replace(/^## /, "")}</h2>`;
                  }
                  if (paragraph.startsWith("### ")) {
                    return `<h3 class="text-base md:text-lg lg:text-xl font-bold mb-3 leading-tight tracking-tight">${paragraph.replace(/^### /, "")}</h3>`;
                  }

                  // Regular paragraphs
                  const formattedParagraph = paragraph
                    .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold'>$1</strong>")
                    .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>")
                    .replace(
                      /\[([^\]]+)\]\(([^)]+)\)/g,
                      '<a href="$2" class="text-primary font-medium no-underline hover:underline transition-all">$1</a>',
                    );

                  return `<p class="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed font-light">${formattedParagraph}</p>`;
                }).join("")
              }}
            />
          </article>
        </ScrollAnimation>

        {/* Tags and Share */}
        <div className="pt-8 border-t border-border space-y-6">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground mr-2">{blogPost.tags_label}</span>
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium border border-border hover:bg-muted/80 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Buttons */}
          <BlogShareButtons title={post.title} slug={post.slug} excerpt={post.excerpt} />
        </div>
      </article>

      {/* Previous/Next Navigation */}
      <ScrollAnimation delay={0.15}>
        <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousPost && (
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    {blogPost.previous_article}
                  </div>
                  <Link href={`/${lang}/blog/${previousPost.slug}`} className="block">
                    <h3 className="font-bold mb-2 line-clamp-2 text-lg group-hover:text-primary transition-colors">
                      {previousPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {previousPost.excerpt}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            )}
            {nextPost && (
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group md:ml-auto">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide justify-end">
                    {blogPost.next_article}
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <Link href={`/${lang}/blog/${nextPost.slug}`} className="block text-right">
                    <h3 className="font-bold mb-2 line-clamp-2 text-lg group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {nextPost.excerpt}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </ScrollAnimation>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <ScrollAnimation delay={0.2}>
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-10 text-center">{blogPost.related_articles}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group">
                  <div className="relative bg-muted h-48 overflow-hidden">
                    {relatedPost.image && relatedPost.image.startsWith('http') ? (
                      <Image
                        src={relatedPost.image}
                        alt={dictionary.common?.alt_texts?.blog_post_image ? `${dictionary.common.alt_texts.blog_post_image}: ${relatedPost.title}` : relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <span className="text-4xl opacity-50">📰</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-semibold backdrop-blur-sm">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 line-clamp-2 text-lg group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full group-hover:border-primary group-hover:text-primary">
                      <Link href={`/${lang}/blog/${relatedPost.slug}`}>
                        {blogPost.read_more}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      )}

      {/* CTA Section */}
      <ScrollAnimation delay={0.25}>
        <div className="max-w-4xl mx-auto mt-20">
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-10 md:p-12 text-center border-2 border-primary/20 shadow-xl overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt={dictionary.common?.alt_texts?.secure_document_sharing || "Secure document sharing"}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {blogPost.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {blogPost.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="shadow-lg">
                  <Link href="https://dashboard.doqshare.com">
                    {blogPost.cta.get_started}
                  </Link>
                </Button>
                <BookDemoButton size="lg" variant="outline" className="shadow-lg" />
              </div>
            </div>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  );
}

