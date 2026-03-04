"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowUpRight, TrendingUp, Users, Award } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";

export const HeroCaseStudies = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-6 py-8 lg:py-10">
    <BackgroundPattern />

    <div className="relative z-10 text-center max-w-4xl">
      <Badge
        variant="secondary"
        className="rounded-full py-1 border-border"
        asChild
      >
        <Link href="/features">
          Real Customer Success Stories <ArrowUpRight className="ml-1 size-4" />
        </Link>
      </Badge>
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
        Success stories from real customers
      </h1>
      <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
        Discover how companies across industries use DoQshare to secure documents, track engagement, close deals faster, and achieve remarkable results.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span>Proven Results</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <span>Trusted by 45,000+ Companies</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-primary" />
          <span>Industry Leaders</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="rounded-full text-base" asChild>
          <Link href="https://dashboard.doqshare.com">
            Start Your Success Story <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <BookDemoButton
          variant="outline"
          size="lg"
          className="rounded-full text-base shadow-none"
        >
          Schedule Demo
        </BookDemoButton>
      </div>
    </div>
  </div>
);

