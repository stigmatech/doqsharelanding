"use client";

import { Badge } from "@/components/ui/badge";
import { Upload, Share2, BarChart3, Shield, Lock, Eye, FileText, Globe, Users, Zap, CheckCircle } from "lucide-react";

interface Feature5HowItWorksProps {
  dictionary: {
    feature5_how_it_works: {
      badge: string;
      title: string;
      description: string;
      features: {
        bulk_upload: { title: string; description: string };
        secure_links: { title: string; description: string };
        track_time: { title: string; description: string };
        data_room: { title: string; description: string };
        custom_domain: { title: string; description: string };
        access_control: { title: string; description: string };
        real_time: { title: string; description: string };
        brand_customization: { title: string; description: string };
        rich_analytics: { title: string; description: string };
        ai_powered: { title: string; description: string };
        self_host: { title: string; description: string };
        enterprise_security: { title: string; description: string };
      };
    };
  };
}

export const Feature5HowItWorks = ({ dictionary }: Feature5HowItWorksProps) => {
  const features = [
    {
      icon: Upload,
      title: dictionary.feature5_how_it_works.features.bulk_upload.title,
      description: dictionary.feature5_how_it_works.features.bulk_upload.description,
    },
    {
      icon: Share2,
      title: dictionary.feature5_how_it_works.features.secure_links.title,
      description: dictionary.feature5_how_it_works.features.secure_links.description,
    },
    {
      icon: BarChart3,
      title: dictionary.feature5_how_it_works.features.track_time.title,
      description: dictionary.feature5_how_it_works.features.track_time.description,
    },
    {
      icon: FileText,
      title: dictionary.feature5_how_it_works.features.data_room.title,
      description: dictionary.feature5_how_it_works.features.data_room.description,
    },
    {
      icon: Globe,
      title: dictionary.feature5_how_it_works.features.custom_domain.title,
      description: dictionary.feature5_how_it_works.features.custom_domain.description,
    },
    {
      icon: Shield,
      title: dictionary.feature5_how_it_works.features.access_control.title,
      description: dictionary.feature5_how_it_works.features.access_control.description,
    },
    {
      icon: Eye,
      title: dictionary.feature5_how_it_works.features.real_time.title,
      description: dictionary.feature5_how_it_works.features.real_time.description,
    },
    {
      icon: Lock,
      title: dictionary.feature5_how_it_works.features.brand_customization.title,
      description: dictionary.feature5_how_it_works.features.brand_customization.description,
    },
    {
      icon: BarChart3,
      title: dictionary.feature5_how_it_works.features.rich_analytics.title,
      description: dictionary.feature5_how_it_works.features.rich_analytics.description,
    },
    {
      icon: Zap,
      title: dictionary.feature5_how_it_works.features.ai_powered.title,
      description: dictionary.feature5_how_it_works.features.ai_powered.description,
    },
    {
      icon: Users,
      title: dictionary.feature5_how_it_works.features.self_host.title,
      description: dictionary.feature5_how_it_works.features.self_host.description,
    },
    {
      icon: CheckCircle,
      title: dictionary.feature5_how_it_works.features.enterprise_security.title,
      description: dictionary.feature5_how_it_works.features.enterprise_security.description,
    },
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{dictionary.feature5_how_it_works.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                {dictionary.feature5_how_it_works.title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {dictionary.feature5_how_it_works.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="bg-muted rounded-md aspect-video mb-2 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl tracking-tight font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
