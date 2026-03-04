"use client";

import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          <span>Start your free trial today</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to transform your document sharing?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of businesses that trust DoQshare for secure document sharing, 
          advanced analytics, and enterprise-grade security. Start your 14-day free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            asChild 
            size="lg" 
            className="h-14 px-8 text-lg group"
            aria-label="Start free trial of DoQshare"
          >
            <Link href="https://dashboard.doqshare.com">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <BookDemoButton 
            variant="outline" 
            size="lg"
            className="h-14 px-8 text-lg"
          />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

