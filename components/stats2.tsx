"use client";

import { Shield, CheckCircle, Lock, FileCheck, Globe, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Stats2Props {
  dictionary: {
    stats2: {
      badge: string;
      title: string;
      description: string;
      standards: {
        soc2: { name: string; description: string };
        hipaa: { name: string; description: string };
        gdpr: { name: string; description: string };
        ccpa: { name: string; description: string };
        pipeda: { name: string; description: string };
        loi25: { name: string; description: string };
      };
    };
  };
}

export const Stats2 = ({ dictionary }: Stats2Props) => {
  const complianceStandards = [
    {
      name: dictionary.stats2.standards.soc2.name,
      description: dictionary.stats2.standards.soc2.description,
      icon: Shield,
    },
    {
      name: dictionary.stats2.standards.hipaa.name,
      description: dictionary.stats2.standards.hipaa.description,
      icon: CheckCircle,
    },
    {
      name: dictionary.stats2.standards.gdpr.name,
      description: dictionary.stats2.standards.gdpr.description,
      icon: Lock,
    },
    {
      name: dictionary.stats2.standards.ccpa.name,
      description: dictionary.stats2.standards.ccpa.description,
      icon: FileCheck,
    },
    {
      name: dictionary.stats2.standards.pipeda.name,
      description: dictionary.stats2.standards.pipeda.description,
      icon: Globe,
    },
    {
      name: dictionary.stats2.standards.loi25.name,
      description: dictionary.stats2.standards.loi25.description,
      icon: Building2,
    }
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{dictionary.stats2.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-bold text-left">
                {dictionary.stats2.title}
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                {dictionary.stats2.description}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
              {complianceStandards.map((standard, index) => {
                const Icon = standard.icon;
                return (
                  <div key={index} className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                    <Icon className="w-4 h-4 mb-4 text-primary" />
                    <h3 className="text-lg font-semibold tracking-tighter max-w-xl text-left mb-2">
                      {standard.name}
                    </h3>
                    <p className="text-sm leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                      {standard.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
