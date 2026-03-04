"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, TrendingUp, Clock, Users, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  featured?: boolean;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {caseStudy.logo ? (
              <Avatar className="h-12 w-12">
                <AvatarImage src={caseStudy.logo} alt={caseStudy.company} />
                <AvatarFallback>{caseStudy.company[0]}</AvatarFallback>
              </Avatar>
            ) : (
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{caseStudy.company[0]}</span>
              </div>
            )}
            <div>
              <CardTitle className="text-xl">{caseStudy.company}</CardTitle>
              <Badge variant="outline" className="mt-1">
                {caseStudy.industry}
              </Badge>
            </div>
          </div>
          {caseStudy.featured && (
            <Badge variant="default" className="bg-primary">
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="text-base">
          <strong>Challenge:</strong> {caseStudy.challenge}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Solution:</strong> {caseStudy.solution}
          </p>
        </div>

        {/* Results Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-lg font-bold">{result.value}</span>
              </div>
              <p className="text-xs text-muted-foreground">{result.metric}</p>
              <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-primary/5 rounded-lg p-4 mb-4 flex-1">
          <p className="text-sm italic mb-3">"{caseStudy.testimonial}"</p>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={caseStudy.author.avatar} alt={caseStudy.author.name} />
              <AvatarFallback>{caseStudy.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{caseStudy.author.name}</p>
              <p className="text-xs text-muted-foreground">{caseStudy.author.role}</p>
            </div>
          </div>
        </div>

        <Link
          href={`/case-studies/${caseStudy.id}`}
          className="text-sm text-primary hover:underline flex items-center gap-1 mt-auto"
        >
          Read full case study <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

