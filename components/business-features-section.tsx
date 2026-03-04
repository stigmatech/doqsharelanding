"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Rocket, Scale, TrendingUp, HeartPulse, DollarSign, Briefcase } from "lucide-react";
import CardDecorator from "@/components/card-decorator";

const sectors = [
  {
    icon: Rocket,
    title: "Startups & Fundraising",
    description: "Close deals faster with investor engagement tracking. See which investors are most interested in your pitch deck and focus your efforts on the right prospects. Perfect for Series A, B, and beyond.",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Meet GDPR, HIPAA, and SOC2 requirements effortlessly. Complete audit trails, document retention policies, and zero-knowledge architecture ensure your legal documents remain confidential and compliant.",
  },
  {
    icon: TrendingUp,
    title: "M&A & Due Diligence",
    description: "Streamline M&A transactions with secure virtual data rooms. Organize documents, control access levels, and track engagement throughout the due diligence process. Close deals with confidence.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    description: "Protect patient data with HIPAA-compliant document sharing. Share medical records, research documents, and clinical data securely while maintaining complete audit trails and access controls.",
  },
  {
    icon: DollarSign,
    title: "Finance & Banking",
    description: "Secure financial document sharing for banking, investment, and accounting firms. Share sensitive financial reports, statements, and compliance documents with enterprise-grade security and analytics.",
  },
  {
    icon: Briefcase,
    title: "Consulting & Professional Services",
    description: "Deliver client proposals, reports, and strategic documents securely. Track engagement to understand which sections resonate most with clients and improve your service delivery.",
  },
];

export default function BusinessFeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4">
            From startups raising funds to healthcare providers protecting patient data, 
            DoQshare adapts to your unique requirements across all industries.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm grid-cols-1 gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 md:grid-cols-2 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Card key={index} className="group border-0 shadow-none bg-blue-50">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon className="size-6" aria-hidden />
                  </CardDecorator>
                  <h3 className="mt-6 font-medium">{sector.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className={index === 0 ? "text-sm" : "mt-3 text-sm"}>
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

