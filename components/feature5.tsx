"use client";

import { Badge } from "@/components/ui/badge";
import { StaggerAnimation } from "@/components/scroll-animation";

interface Feature5Props {
  dictionary: {
    feature5: {
      badge: string;
      title: string;
      description: string;
      features: {
        data_rooms: {
          title: string;
          description: string;
        };
        analytics: {
          title: string;
          description: string;
        };
        watermarking: {
          title: string;
          description: string;
        };
        access_control: {
          title: string;
          description: string;
        };
        audit_trail: {
          title: string;
          description: string;
        };
        enterprise_security: {
          title: string;
          description: string;
        };
      };
    };
  };
}

export const Feature5 = ({ dictionary }: Feature5Props) => {
  const features = [
    {
      title: dictionary.feature5.features.data_rooms.title,
      description: dictionary.feature5.features.data_rooms.description,
      image: "/images/peeps/Bust/peep-1.svg",
    },
    {
      title: dictionary.feature5.features.analytics.title,
      description: dictionary.feature5.features.analytics.description,
      image: "/images/peeps/Bust/peep-2.svg",
    },
    {
      title: dictionary.feature5.features.watermarking.title,
      description: dictionary.feature5.features.watermarking.description,
      image: "/images/peeps/Bust/peep-3.svg",
    },
    {
      title: dictionary.feature5.features.access_control.title,
      description: dictionary.feature5.features.access_control.description,
      image: "/images/peeps/Bust/peep-4.svg",
    },
    {
      title: dictionary.feature5.features.audit_trail.title,
      description: dictionary.feature5.features.audit_trail.description,
      image: "/images/peeps/Bust/peep-5.svg",
    },
    {
      title: dictionary.feature5.features.enterprise_security.title,
      description: dictionary.feature5.features.enterprise_security.description,
      image: "/images/peeps/Bust/peep-6.svg",
    },
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{dictionary.feature5.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                {dictionary.feature5.title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {dictionary.feature5.description}
              </p>
            </div>
          </div>
          <StaggerAnimation
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
            direction="up"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="bg-muted rounded-md mb-1 relative overflow-hidden flex items-center justify-start p-3 h-24">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-contain h-full w-auto"
                  />
                </div>
                <h3 className="text-xl tracking-tight font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </StaggerAnimation>
        </div>
      </div>
    </div>
  );
};
