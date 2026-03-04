import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-content";

interface Blog1Props {
  dictionary: {
    common: {
      latest_articles: string;
      view_all_articles: string;
    };
  };
  lang: string;
}

export const Blog1 = ({ dictionary, lang }: Blog1Props) => {
  // Récupérer les 4 derniers articles pour la langue actuelle
  const latestPosts = getAllBlogPosts(lang).slice(0, 4);

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold">
            {dictionary.common.latest_articles}
          </h4>
          <Button className="gap-4" asChild>
            <Link href={`/${lang}/blog`}>
              {dictionary.common.view_all_articles} <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/blog/${post.slug}`}
              className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group"
            >
              <div className="relative bg-muted rounded-md aspect-video mb-4 overflow-hidden">
                {post.image && post.image.startsWith('http') ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <span className="text-4xl opacity-50">📰</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl tracking-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-base line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
