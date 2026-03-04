import { Badge } from "@/components/ui/badge";

interface Feature5StartupProps {
  dictionary: {
    startup_page: {
      features_section: {
        badge: string;
        title: string;
        description: string;
        list: Array<{
          title: string;
          description: string;
        }>;
      };
    };
  };
}

export const Feature5Startup = ({ dictionary }: Feature5StartupProps) => {
  const { features_section } = dictionary.startup_page;

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{features_section.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                {features_section.title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {features_section.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features_section.list.map((feature, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="bg-muted rounded-md aspect-video mb-2"></div>
                <h3 className="text-xl tracking-tight font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

