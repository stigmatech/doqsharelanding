import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogPost } from './blog-content';

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

/**
 * Post-process HTML to improve links styling
 */
function processHtmlLinks(html: string): string {
  if (!html || html.trim().length === 0) {
    return html; // Return empty string if input is empty
  }

  // Add classes and attributes to links
  let processedHtml = html.replace(
    /<a\s+([^>]*href=["']([^"']+)["'][^>]*)>/gi,
    (match, attrs, href) => {
      const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
      const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      const hasClass = attrs && attrs.includes('class=');
      const className = hasClass
        ? attrs.replace(/class=["']([^"']+)["']/, `class="$1 text-primary font-medium no-underline hover:underline transition-all"`)
        : ' class="text-primary font-medium no-underline hover:underline transition-all"';
      return `<a ${hasClass ? attrs.replace(/class=["']([^"']+)["']/, className) : attrs + className}${target}>`;
    }
  );

  return processedHtml;
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

// Ensure the directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export interface BlogPostFrontmatter {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  lang?: string;
  category: string;
  readTime: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  htmlContent: string;
  lang: string;
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(name => name.endsWith('.md') && name !== 'README.md')
    .map(name => name.replace(/\.md$/, ''));
}

/**
 * Get a blog post by slug from markdown files
 */
export function getPostBySlug(slug: string): BlogPostWithContent | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as BlogPostFrontmatter;

    // Convert markdown to HTML and process links
    if (!content || content.trim().length === 0) {
      console.warn(`Post ${slug} has empty content`);
      return null;
    }

    let rawHtml: string;
    try {
      // marked.parse() can return a string or Promise, handle both
      const parsed = marked.parse(content);
      rawHtml = typeof parsed === 'string' ? parsed : String(parsed);

      if (!rawHtml || rawHtml.trim().length === 0) {
        console.error(`Post ${slug} generated empty HTML from content`);
        // Don't return null, let it use fallback in page
        rawHtml = '';
      }
    } catch (error) {
      console.error(`Error parsing markdown for post ${slug}:`, error);
      rawHtml = '';
    }

    const htmlContent = rawHtml ? processHtmlLinks(rawHtml) : '';

    return {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      content: content, // Keep raw markdown for editing
      htmlContent,
      author: frontmatter.author,
      date: frontmatter.date,
      lang: frontmatter.lang || 'en', // default to English for markdown posts
      category: frontmatter.category,
      readTime: frontmatter.readTime,
      image: frontmatter.image || '/images/blog/default.jpg',
      tags: frontmatter.tags || [],
      featured: frontmatter.featured || false,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts from markdown files
 */
export function getAllPosts(): BlogPostWithContent[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is BlogPostWithContent => post !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPostWithContent[] {
  return getAllPosts().filter(post => post.category === category);
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): BlogPostWithContent[] {
  return getAllPosts().filter(post => post.featured);
}

/**
 * Get related posts (same category, excluding current)
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostWithContent[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) {
    return [];
  }

  return getAllPosts()
    .filter(post =>
      post.slug !== currentSlug &&
      post.category === currentPost.category
    )
    .slice(0, limit);
}

