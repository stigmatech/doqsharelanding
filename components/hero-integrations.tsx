"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowUpRight, Plug, CheckCircle, Code, Webhook } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";

export const HeroIntegrations = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-6 py-8 lg:py-10">
    <BackgroundPattern />

    <div className="relative z-10 text-center max-w-4xl">
      <Badge
        variant="secondary"
        className="rounded-full py-1 border-border"
        asChild
      >
        <Link href="/docs">
          API & Webhooks Available <ArrowUpRight className="ml-1 size-4" />
        </Link>
      </Badge>
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
        Integrate with your favorite tools
      </h1>
      <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
        Connect DoQshare with the tools you already use. Seamlessly share documents, track engagement, and collaborate with your team across platforms.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Plug className="h-4 w-4 text-primary" />
          <span>Native Integrations</span>
        </div>
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-primary" />
          <span>REST API</span>
        </div>
        <div className="flex items-center gap-2">
          <Webhook className="h-4 w-4 text-primary" />
          <span>Webhooks</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-primary" />
          <span>14-Day Free Trial</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="rounded-full text-base" asChild>
          <Link href="https://dashboard.doqshare.com">
            Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
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

