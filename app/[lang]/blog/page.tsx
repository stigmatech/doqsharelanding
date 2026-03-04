import { getAllBlogPosts, getFeaturedBlogPosts } from "@/lib/blog-content";
import BlogPageClient from "@/components/blog-page-client";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface BlogPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // This runs on the server
  const allPosts = getAllBlogPosts(lang);
  const featuredPost = getFeaturedBlogPosts(lang)[0];

  return <BlogPageClient initialPosts={allPosts} featuredPost={featuredPost} dictionary={dictionary} lang={lang} />;
}
