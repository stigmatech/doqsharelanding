"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowUpRight, CirclePlay, Shield, CheckCircle, DollarSign } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";

interface HeroPricingProps {
  dictionary: {
    hero_pricing: {
      badge: string;
      title: string;
      description: string;
      feature_no_setup: string;
      feature_cancel: string;
      feature_free_trial: string;
      cta_primary: string;
      cta_secondary: string;
    };
  };
  lang: string;
}

export default function HeroPricing({ dictionary, lang }: HeroPricingProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-8 lg:py-10">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href={`/${lang}/security`}>
            {dictionary.hero_pricing.badge} <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          {dictionary.hero_pricing.title}
        </h1>
        <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
          {dictionary.hero_pricing.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span>{dictionary.hero_pricing.feature_no_setup}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>{dictionary.hero_pricing.feature_cancel}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>{dictionary.hero_pricing.feature_free_trial}</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="https://dashboard.doqshare.com">
              {dictionary.hero_pricing.cta_primary} <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <BookDemoButton
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="mr-2 h-5 w-5" /> {dictionary.hero_pricing.cta_secondary}
          </BookDemoButton>
        </div>
      </div>
    </div>
  );
}
