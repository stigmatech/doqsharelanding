"use client";

import { Check, X, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DataRoomComparisonTableProps {
  dictionary: {
    data_room_comparison: {
      badge: string;
      title: string;
      description: string;
      features: string;
      starting_price: string;
      doqshare: { name: string; description: string; button: string };
      sharepoint: { name: string; description: string; button: string };
      docsend: { name: string; description: string; button: string };
      ideals: { name: string; description: string; button: string };
      features_list: {
        page_by_page_analytics: string;
        dynamic_watermarking: string;
        unlimited_data_rooms: string;
        custom_domain: string;
        granular_permissions: string;
        advanced_analytics: string;
        nda_agreements: string;
        qa_module: string;
        email_verification: string;
        complete_audit_trail: string;
        screenshot_protection: string;
        compliance: string;
      };
      pricing: {
        doqshare: string;
        sharepoint: string;
        docsend: string;
        ideals: string;
      };
    };
  };
}

export const DataRoomComparisonTable = ({ dictionary }: DataRoomComparisonTableProps) => {
  const comparisonData = [
    {
      feature: dictionary.data_room_comparison.features_list.page_by_page_analytics,
      doqshare: true,
      sharepoint: false,
      docsend: false,
      ideals: false,
    },
    {
      feature: dictionary.data_room_comparison.features_list.dynamic_watermarking,
      doqshare: true,
      sharepoint: false,
      docsend: true,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.unlimited_data_rooms,
      doqshare: true,
      sharepoint: false,
      docsend: false,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.custom_domain,
      doqshare: true,
      sharepoint: true,
      docsend: true,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.granular_permissions,
      doqshare: true,
      sharepoint: true,
      docsend: false,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.advanced_analytics,
      doqshare: true,
      sharepoint: false,
      docsend: true,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.nda_agreements,
      doqshare: true,
      sharepoint: false,
      docsend: true,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.qa_module,
      doqshare: true,
      sharepoint: false,
      docsend: false,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.email_verification,
      doqshare: true,
      sharepoint: true,
      docsend: true,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.complete_audit_trail,
      doqshare: true,
      sharepoint: true,
      docsend: true,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.screenshot_protection,
      doqshare: true,
      sharepoint: false,
      docsend: false,
      ideals: true,
    },
    {
      feature: dictionary.data_room_comparison.features_list.compliance,
      doqshare: true,
      sharepoint: true,
      docsend: true,
      ideals: true,
    },
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>{dictionary.data_room_comparison.badge}</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold">
              {dictionary.data_room_comparison.title}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              {dictionary.data_room_comparison.description}
            </p>
          </div>
          <div className="w-full overflow-x-auto mt-12">
            <div className="min-w-full inline-block">
              <div className="grid text-left w-full grid-cols-5 divide-x border-t border-b">
                {/* Header Row */}
                <div className="px-4 lg:px-6 col-span-1 py-6 border-b">
                  <p className="text-lg font-bold">{dictionary.data_room_comparison.features}</p>
                </div>
                <div className="px-4 py-4 md:px-6 md:py-6 gap-2 flex flex-col border-b">
                  <p className="text-xl font-bold">{dictionary.data_room_comparison.doqshare.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.data_room_comparison.doqshare.description}
                  </p>
                  <Button size="sm" className="gap-2 mt-4" asChild>
                    <Link href="https://dashboard.doqshare.com">
                      {dictionary.data_room_comparison.doqshare.button} <MoveRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="px-4 py-4 md:px-6 md:py-6 gap-2 flex flex-col border-b">
                  <p className="text-xl font-bold">{dictionary.data_room_comparison.sharepoint.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.data_room_comparison.sharepoint.description}
                  </p>
                  <Button size="sm" variant="outline" className="gap-2 mt-4" disabled>
                    {dictionary.data_room_comparison.sharepoint.button}
                  </Button>
                </div>
                <div className="px-4 py-4 md:px-6 md:py-6 gap-2 flex flex-col border-b">
                  <p className="text-xl font-bold">{dictionary.data_room_comparison.docsend.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.data_room_comparison.docsend.description}
                  </p>
                  <Button size="sm" variant="outline" className="gap-2 mt-4" disabled>
                    {dictionary.data_room_comparison.docsend.button}
                  </Button>
                </div>
                <div className="px-4 py-4 md:px-6 md:py-6 gap-2 flex flex-col border-b">
                  <p className="text-xl font-bold">{dictionary.data_room_comparison.ideals.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {dictionary.data_room_comparison.ideals.description}
                  </p>
                  <Button size="sm" variant="outline" className="gap-2 mt-4" disabled>
                    {dictionary.data_room_comparison.ideals.button}
                  </Button>
                </div>

                {/* Feature Rows */}
                {comparisonData.map((item, index) => (
                  <div key={index} className="contents">
                    <div className="px-4 lg:px-6 col-span-1 py-4 border-b">
                      <p className="text-sm font-medium">{item.feature}</p>
                    </div>
                    <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                      {item.doqshare ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                      {item.sharepoint ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                      {item.docsend ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                      {item.ideals ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                ))}

                {/* Pricing Row */}
                <div className="px-4 lg:px-6 col-span-1 py-4 border-b">
                  <p className="text-sm font-medium">{dictionary.data_room_comparison.starting_price}</p>
                </div>
                <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                  <p className="text-sm text-muted-foreground">{dictionary.data_room_comparison.pricing.doqshare}</p>
                </div>
                <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                  <p className="text-sm text-muted-foreground">{dictionary.data_room_comparison.pricing.sharepoint}</p>
                </div>
                <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                  <p className="text-sm text-muted-foreground">{dictionary.data_room_comparison.pricing.docsend}</p>
                </div>
                <div className="px-4 py-4 md:px-6 flex justify-center border-b">
                  <p className="text-sm text-muted-foreground">{dictionary.data_room_comparison.pricing.ideals}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
