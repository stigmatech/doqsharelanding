"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Lock, 
  Shield, 
  Users, 
  FileCheck, 
  Server, 
  CheckCircle
} from "lucide-react";

interface Feature5SecurityProps {
  dictionary: {
    feature5_security: {
      badge: string;
      title: string;
      description: string;
      features: {
        hosting: { title: string; description: string; details: string[] };
        encryption: { title: string; description: string; details: string[] };
        monitoring: { title: string; description: string; details: string[] };
        permissions: { title: string; description: string; details: string[] };
        audit: { title: string; description: string; details: string[] };
        infrastructure: { title: string; description: string; details: string[] };
      };
    };
  };
}

export const Feature5Security = ({ dictionary }: Feature5SecurityProps) => {
  const securityFeatures = [
    {
      icon: Globe,
      title: dictionary.feature5_security.features.hosting.title,
      description: dictionary.feature5_security.features.hosting.description,
      details: dictionary.feature5_security.features.hosting.details,
    },
    {
      icon: Lock,
      title: dictionary.feature5_security.features.encryption.title,
      description: dictionary.feature5_security.features.encryption.description,
      details: dictionary.feature5_security.features.encryption.details,
    },
    {
      icon: Shield,
      title: dictionary.feature5_security.features.monitoring.title,
      description: dictionary.feature5_security.features.monitoring.description,
      details: dictionary.feature5_security.features.monitoring.details,
    },
    {
      icon: Users,
      title: dictionary.feature5_security.features.permissions.title,
      description: dictionary.feature5_security.features.permissions.description,
      details: dictionary.feature5_security.features.permissions.details,
    },
    {
      icon: FileCheck,
      title: dictionary.feature5_security.features.audit.title,
      description: dictionary.feature5_security.features.audit.description,
      details: dictionary.feature5_security.features.audit.details,
    },
    {
      icon: Server,
      title: dictionary.feature5_security.features.infrastructure.title,
      description: dictionary.feature5_security.features.infrastructure.description,
      details: dictionary.feature5_security.features.infrastructure.details,
    },
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{dictionary.feature5_security.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                {dictionary.feature5_security.title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {dictionary.feature5_security.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
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
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
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
