"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Building2,
  GraduationCap,
  Briefcase,
  Heart,
  Scale,
  Home,
  TrendingUp,
  Code,
} from "lucide-react";

const industries = [
  {
    name: "Startups & Venture Capital",
    icon: TrendingUp,
    description: "Fundraising, pitch decks, investor relations, and portfolio management",
    caseStudies: 12,
    color: "text-blue-600",
  },
  {
    name: "Legal",
    icon: Scale,
    description: "M&A transactions, due diligence, legal document sharing, and compliance",
    caseStudies: 8,
    color: "text-purple-600",
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Property documentation, investment data rooms, and client sharing",
    caseStudies: 6,
    color: "text-green-600",
  },
  {
    name: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant document sharing, patient records, and research data",
    caseStudies: 5,
    color: "text-red-600",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Course materials, research papers, and academic collaboration",
    caseStudies: 4,
    color: "text-orange-600",
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "Corporate document management, secure collaboration, and compliance",
    caseStudies: 15,
    color: "text-indigo-600",
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    description: "Client proposals, contracts, and secure document delivery",
    caseStudies: 10,
    color: "text-teal-600",
  },
  {
    name: "Technology",
    icon: Code,
    description: "Technical documentation, API specs, and developer resources",
    caseStudies: 7,
    color: "text-cyan-600",
  },
];

export const IndustriesSection = () => {
  return (
    <div className="w-full py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DoQshare serves companies across diverse industries, each with unique document sharing and security needs
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-primary/10 ${industry.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{industry.name}</CardTitle>
                    </div>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">
                      {industry.caseStudies} case studies
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

