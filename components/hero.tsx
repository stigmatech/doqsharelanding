"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowUpRight, CirclePlay, Shield, CheckCircle } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";

interface HeroProps {
  dictionary: {
    hero: {
      badge: string;
      title: string;
      description: string;
      feature_zero_knowledge: string;
      feature_free_trial: string;
      feature_no_cc: string;
      cta_primary: string;
      cta_secondary: string;
    };
  };
  lang: string;
}

export default function Hero({ dictionary, lang }: HeroProps) {
  return (
    <div className="min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl w-full">
        <Badge
          variant="secondary"
          className="rounded-full py-1.5 px-3 border-border text-xs sm:text-sm"
          asChild
        >
          <Link href={`/${lang}/security`} className="touch-manipulation min-h-[32px] inline-flex items-center">
            {dictionary.hero.badge} <ArrowUpRight className="ml-1 size-3 sm:size-4" />
          </Link>
        </Badge>
        <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[1.2] font-semibold tracking-tighter px-2 sm:px-0">
          {dictionary.hero.title}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
          {dictionary.hero.description}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground px-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
            <span>{dictionary.hero.feature_zero_knowledge}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
            <span>{dictionary.hero.feature_free_trial}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
            <span>{dictionary.hero.feature_no_cc}</span>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          <Button size="lg" className="rounded-full text-sm sm:text-base min-h-[48px] sm:min-h-[44px] w-full sm:w-auto touch-manipulation" asChild>
            <Link href="https://dashboard.doqshare.com">
              {dictionary.hero.cta_primary} <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
          <BookDemoButton
            variant="outline"
            size="lg"
            className="rounded-full text-sm sm:text-base shadow-none min-h-[48px] sm:min-h-[44px] w-full sm:w-auto touch-manipulation"
          >
            <CirclePlay className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> {dictionary.hero.cta_secondary}
          </BookDemoButton>
        </div>
      </div>
    </div>
  );
}
