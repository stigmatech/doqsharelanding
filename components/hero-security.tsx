"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { ArrowUpRight, CirclePlay, Shield, CheckCircle, Lock } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";

interface HeroSecurityProps {
  dictionary?: {
    hero_security?: {
      badges?: {
        soc2?: string;
        hipaa?: string;
        gdpr?: string;
        ccpa?: string;
      };
      title?: string;
      description?: string;
      feature_encryption?: string;
      feature_zero_knowledge?: string;
      feature_uptime?: string;
      cta_primary?: string;
      cta_secondary?: string;
      last_updated?: string;
    };
  };
  lang: string;
}

export default function HeroSecurity({ dictionary, lang }: HeroSecurityProps) {
  // Fallback values if dictionary is not provided
  const hero = dictionary?.hero_security || {
    badges: {
      soc2: "SOC2 Compliant",
      hipaa: "HIPAA Compliant",
      gdpr: "GDPR Compliant",
      ccpa: "CCPA Compliant"
    },
    title: "Enterprise-Grade Security",
    description: "DoQshare is committed to the security and privacy of our customers' data. We provide industry-leading security features to protect your sensitive documents and ensure compliance with global data protection regulations.",
    feature_encryption: "AES-256 Encryption",
    feature_zero_knowledge: "Zero-Knowledge Architecture",
    feature_uptime: "99.9% Uptime SLA",
    cta_primary: "Start for Free",
    cta_secondary: "Contact Security Team",
    last_updated: "Last updated:"
  };

  const currentDate = new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 lg:py-16">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="secondary" className="rounded-full py-1 border-border">
            {hero.badges?.soc2 || "SOC2 Compliant"}
          </Badge>
          <Badge variant="secondary" className="rounded-full py-1 border-border">
            {hero.badges?.hipaa || "HIPAA Compliant"}
          </Badge>
          <Badge variant="secondary" className="rounded-full py-1 border-border">
            {hero.badges?.gdpr || "GDPR Compliant"}
          </Badge>
          <Badge variant="secondary" className="rounded-full py-1 border-border">
            {hero.badges?.ccpa || "CCPA Compliant"}
          </Badge>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          {hero.title}
        </h1>
        <p className="mt-4 md:text-lg text-foreground/80 max-w-2xl mx-auto">
          {hero.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" />
            <span>{hero.feature_encryption}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>{hero.feature_zero_knowledge}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>{hero.feature_uptime}</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="https://dashboard.doqshare.com">
              {hero.cta_primary} <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <BookDemoButton
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="mr-2 h-5 w-5" /> {hero.cta_secondary}
          </BookDemoButton>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {hero.last_updated} {currentDate}
        </p>
      </div>
    </div>
  );
}
