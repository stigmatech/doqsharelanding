"use client";

import Image from "next/image";
import { Zap, Cpu, Lock, Sparkles } from "lucide-react";

interface Feature3Props {
  dictionary: {
    feature3: {
      title: string;
      description: string;
      fast_title: string;
      fast_description: string;
      powerful_title: string;
      powerful_description: string;
      secure_title: string;
      secure_description: string;
      ai_powered_title: string;
      ai_powered_description: string;
    };
  };
}

export const Feature3 = ({ dictionary }: Feature3Props) => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            {dictionary.feature3.title}
          </h2>
          <p className="max-w-sm sm:ml-auto">
            {dictionary.feature3.description}
          </p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative">
            <div className="bg-linear-to-t z-10 from-background absolute inset-0 to-transparent"></div>
            <Image
              src="/images/dashboard-analytics.png"
              alt="DoQshare Dashboard - Document Analytics"
              fill
              className="absolute inset-0 z-10 object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">{dictionary.feature3.fast_title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {dictionary.feature3.fast_description}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">{dictionary.feature3.powerful_title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {dictionary.feature3.powerful_description}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">{dictionary.feature3.secure_title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {dictionary.feature3.secure_description}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">{dictionary.feature3.ai_powered_title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {dictionary.feature3.ai_powered_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
