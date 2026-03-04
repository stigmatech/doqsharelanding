"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Globe, 
  Clock, 
  Users, 
  Monitor,
  Zap
} from "lucide-react";

interface Feature5AnalyticsProps {
  dictionary: {
    feature5_analytics: {
      badge: string;
      title: string;
      description: string;
      features: {
        page_analytics: { title: string; description: string; details: string[] };
        time_tracking: { title: string; description: string; details: string[] };
        viewer_insights: { title: string; description: string; details: string[] };
        geographic_data: { title: string; description: string; details: string[] };
        device_information: { title: string; description: string; details: string[] };
        real_time_updates: { title: string; description: string; details: string[] };
      };
    };
  };
}

export const Feature5Analytics = ({ dictionary }: Feature5AnalyticsProps) => {
  const analyticsFeatures = [
    {
      icon: BarChart3,
      ...dictionary.feature5_analytics.features.page_analytics,
    },
    {
      icon: Clock,
      ...dictionary.feature5_analytics.features.time_tracking,
    },
    {
      icon: Users,
      ...dictionary.feature5_analytics.features.viewer_insights,
    },
    {
      icon: Globe,
      ...dictionary.feature5_analytics.features.geographic_data,
    },
    {
      icon: Monitor,
      ...dictionary.feature5_analytics.features.device_information,
    },
    {
      icon: Zap,
      ...dictionary.feature5_analytics.features.real_time_updates,
    },
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{dictionary.feature5_analytics.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                {dictionary.feature5_analytics.title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {dictionary.feature5_analytics.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
