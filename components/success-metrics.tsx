"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";
import { TrendingUp, Users, FileText, Clock, Award, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "45,000+",
    label: "Companies Trust DoQshare",
    description: "Growing community of businesses",
  },
  {
    icon: FileText,
    value: "250,000+",
    label: "Documents Secured",
    description: "Protected and tracked daily",
  },
  {
    icon: Users,
    value: "1.35M+",
    label: "Links Viewed",
    description: "Active document engagement",
  },
  {
    icon: Clock,
    value: "40%",
    label: "Faster Deal Closes",
    description: "Average improvement",
  },
  {
    icon: Award,
    value: "100%",
    label: "Compliance Rate",
    description: "GDPR, HIPAA, SOC2 ready",
  },
  {
    icon: Zap,
    value: "5 days",
    label: "Average Setup Time",
    description: "From signup to production",
  },
];

export const SuccessMetrics = () => {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real metrics from companies using DoQshare to transform their document sharing and close more deals
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl md:text-4xl font-bold mb-2">
                          {metric.value}
                        </div>
                        <div className="text-lg font-semibold mb-1">
                          {metric.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.description}
                        </div>
                      </div>
                    </div>
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

