"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StaggerAnimation, ScrollAnimation } from "@/components/scroll-animation";
import {
  BarChart3,
  Shield,
  Lock,
  Eye,
  FileCheck,
  Zap,
  Monitor,
  FileText,
  Bot,
  Globe,
  Key,
  Bell,
} from "lucide-react";

interface FeaturesProps {
  dictionary: {
    features_component: {
      title: string;
      description: string;
      features: {
        analytics: { title: string; description: string };
        security: { title: string; description: string };
        access_control: { title: string; description: string };
        watermarking: { title: string; description: string };
        audit_trail: { title: string; description: string };
        data_rooms: { title: string; description: string };
        screenshot_protection: { title: string; description: string };
        nda: { title: string; description: string };
        ai_assistant: { title: string; description: string };
        custom_domain: { title: string; description: string };
        password_protection: { title: string; description: string };
        notifications: { title: string; description: string };
      };
    };
  };
}

const Features = ({ dictionary }: FeaturesProps) => {
  const features = [
    {
      icon: BarChart3,
      title: dictionary.features_component.features.analytics.title,
      description: dictionary.features_component.features.analytics.description,
    },
    {
      icon: Shield,
      title: dictionary.features_component.features.security.title,
      description: dictionary.features_component.features.security.description,
    },
    {
      icon: Lock,
      title: dictionary.features_component.features.access_control.title,
      description: dictionary.features_component.features.access_control.description,
    },
    {
      icon: Eye,
      title: dictionary.features_component.features.watermarking.title,
      description: dictionary.features_component.features.watermarking.description,
    },
    {
      icon: FileCheck,
      title: dictionary.features_component.features.audit_trail.title,
      description: dictionary.features_component.features.audit_trail.description,
    },
    {
      icon: Zap,
      title: dictionary.features_component.features.data_rooms.title,
      description: dictionary.features_component.features.data_rooms.description,
    },
    {
      icon: Monitor,
      title: dictionary.features_component.features.screenshot_protection.title,
      description: dictionary.features_component.features.screenshot_protection.description,
    },
    {
      icon: FileText,
      title: dictionary.features_component.features.nda.title,
      description: dictionary.features_component.features.nda.description,
    },
    {
      icon: Bot,
      title: dictionary.features_component.features.ai_assistant.title,
      description: dictionary.features_component.features.ai_assistant.description,
    },
    {
      icon: Globe,
      title: dictionary.features_component.features.custom_domain.title,
      description: dictionary.features_component.features.custom_domain.description,
    },
    {
      icon: Key,
      title: dictionary.features_component.features.password_protection.title,
      description: dictionary.features_component.features.password_protection.description,
    },
    {
      icon: Bell,
      title: dictionary.features_component.features.notifications.title,
      description: dictionary.features_component.features.notifications.description,
    },
  ];

  return (
    <div className="w-full py-8 lg:py-10">
      <div className="container mx-auto px-6">
        <ScrollAnimation direction="fade" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter sm:max-w-xl text-pretty">
            {dictionary.features_component.title}
          </h2>
          <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
            {dictionary.features_component.description}
          </p>
        </ScrollAnimation>
        <StaggerAnimation
          className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8"
          staggerDelay={0.05}
          direction="up"
        >
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
            >
              <CardHeader>
                <feature.icon />
                <h4 className="mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
              </CardContent>
            </Card>
          ))}
        </StaggerAnimation>
      </div>
    </div>
  );
};

export default Features;
