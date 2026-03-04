"use client";

import { Badge } from "@/components/ui/badge";

interface Feature5DataRoomProps {
  dictionary: {
    feature5_data_room: {
      badge: string;
      title: string;
      description: string;
      features: {
        unlimited_data_rooms: { title: string; description: string };
        advanced_analytics: { title: string; description: string };
        dynamic_watermarking: { title: string; description: string };
        granular_permissions: { title: string; description: string };
        custom_branding: { title: string; description: string };
        nda_agreements: { title: string; description: string };
        unlimited_storage: { title: string; description: string };
        complete_audit_trail: { title: string; description: string };
        email_verification: { title: string; description: string };
        drag_drop_upload: { title: string; description: string };
        link_controls: { title: string; description: string };
        qa_module: { title: string; description: string };
      };
    };
  };
}

export const Feature5DataRoom = ({ dictionary }: Feature5DataRoomProps) => {
  const features = [
    dictionary.feature5_data_room.features.unlimited_data_rooms,
    dictionary.feature5_data_room.features.advanced_analytics,
    dictionary.feature5_data_room.features.dynamic_watermarking,
    dictionary.feature5_data_room.features.granular_permissions,
    dictionary.feature5_data_room.features.custom_branding,
    dictionary.feature5_data_room.features.nda_agreements,
    dictionary.feature5_data_room.features.unlimited_storage,
    dictionary.feature5_data_room.features.complete_audit_trail,
    dictionary.feature5_data_room.features.email_verification,
    dictionary.feature5_data_room.features.drag_drop_upload,
    dictionary.feature5_data_room.features.link_controls,
    dictionary.feature5_data_room.features.qa_module,
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{dictionary.feature5_data_room.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                {dictionary.feature5_data_room.title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {dictionary.feature5_data_room.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
