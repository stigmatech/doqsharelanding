"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowUpRight, CirclePlay, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";

interface HeroStartupProps {
  dictionary: {
    hero_startup: {
      badge: string;
      title: string;
      description: string;
      feature_track: string;
      feature_private: string;
      feature_free: string;
      cta_primary: string;
      cta_secondary: string;
    };
  };
  lang: string;
}

export default function HeroStartup({ dictionary, lang }: HeroStartupProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 lg:py-16">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href={`/${lang}/security`}>
            {dictionary.hero_startup.badge} <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          {dictionary.hero_startup.title}
        </h1>
        <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
          {dictionary.hero_startup.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>{dictionary.hero_startup.feature_track}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>{dictionary.hero_startup.feature_private}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>{dictionary.hero_startup.feature_free}</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="https://dashboard.doqshare.com">
              {dictionary.hero_startup.cta_primary} <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <BookDemoButton
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="mr-2 h-5 w-5" /> {dictionary.hero_startup.cta_secondary}
          </BookDemoButton>
        </div>
      </div>
    </div>
  );
}
