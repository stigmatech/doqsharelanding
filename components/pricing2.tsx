"use client";

import React, { useState, useMemo } from "react";
import { Minus, MoveRight, PhoneCall, CheckCircle, BarChart3, Lock, Globe, Shield, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatPrice } from "@/lib/pricing";

interface Pricing2Props {
  dictionary: {
    pricing2: {
      badge: string;
      title: string;
      description: string;
      monthly: string;
      annually: string;
      period_monthly: string;
      period_yearly: string;
      save_up_to: string;
      features_label: string;
      plans: {
        free: { name: string; description: string; button: string };
        pro: { name: string; description: string; button: string };
        business: { name: string; description: string; button: string };
        data_rooms: { name: string; description: string; button: string };
        data_rooms_plus: { name: string; description: string; button: string };
      };
      sections: {
        document_analytics: string;
        link_settings: string;
        data_rooms_documents: string;
        custom_branding: string;
        other_features: string;
        support: string;
      };
      features: {
        [key: string]: string;
      };
      feature_values: {
        [key: string]: string;
      };
    };
    common?: {
      toggle_pricing?: string;
    };
  };
  lang?: string;
}

export const Pricing2 = ({ dictionary, lang = "en" }: Pricing2Props) => {
  const [isYearly, setIsYearly] = useState(false);
  const pricing2 = dictionary.pricing2;


  // Structure des données avec traductions
  const tableData = useMemo(() => [
    // Document Analytics and Tracking
    {
      feature: pricing2.features.unlimited_views,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.time_spent,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.real_time_feedback,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.versioning_tracking,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.location_tracking,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.exclude_internal,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.view_history,
      free: pricing2.feature_values.up_to_20_views,
      pro: pricing2.feature_values.up_to_1000_views,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.analytics_retention,
      free: pricing2.feature_values['30_day_retention'],
      pro: pricing2.feature_values['1_year_retention'],
      business: pricing2.feature_values['2_year_retention'],
      dataRooms: pricing2.feature_values['2_year_retention'],
      dataRoomsPlus: pricing2.feature_values['3_year_retention'],
    },
    // Link Settings
    {
      feature: pricing2.features.capture_email,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.email_notifications,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.password_protection,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.expiration_date,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.allow_block_download,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.email_verification,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.allow_block_users,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.screenshot_protection,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.dynamic_watermark,
      free: false,
      pro: false,
      business: false,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.user_groups,
      free: false,
      pro: false,
      business: false,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    // Data Rooms and Documents
    {
      feature: pricing2.features.unlimited_documents,
      free: pricing2.feature_values['50_documents'],
      pro: pricing2.feature_values['300_documents'],
      business: true,
      dataRooms: true,
      dataRoomsPlus: pricing2.feature_values.unlimited_encrypted,
    },
    {
      feature: pricing2.features.unlimited_folders,
      free: pricing2.feature_values.on_first_level,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.unlimited_data_rooms,
      free: false,
      pro: false,
      business: pricing2.feature_values.unlimited_light_datarooms,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_domain,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.bulk_upload,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: pricing2.feature_values.automatic_indexing,
    },
    {
      feature: pricing2.features.unlimited_users,
      free: pricing2.feature_values['1_user'],
      pro: pricing2.feature_values['1_user'],
      business: pricing2.feature_values['3_users'],
      dataRooms: pricing2.feature_values['3_users'],
      dataRoomsPlus: pricing2.feature_values['5_users'],
    },
    {
      feature: pricing2.features.self_hosted,
      free: false,
      pro: false,
      business: false,
      dataRooms: pricing2.feature_values.enterprise,
      dataRoomsPlus: pricing2.feature_values.enterprise,
    },
    // Custom Branding
    {
      feature: pricing2.features.remove_branding,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_logo,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_favicon,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_colors,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_social_cards,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_domain_documents,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.feedback_question,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_banners,
      free: false,
      pro: false,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.custom_domain_data_rooms,
      free: false,
      pro: false,
      business: false,
      dataRooms: true,
      dataRoomsPlus: pricing2.feature_values.unlimited_custom_domains,
    },
    {
      feature: pricing2.features.full_white_labeling,
      free: false,
      pro: false,
      business: false,
      dataRooms: pricing2.feature_values.enterprise,
      dataRoomsPlus: pricing2.feature_values.addon_white_labeling,
    },
    {
      feature: pricing2.features.sso,
      free: false,
      pro: false,
      business: false,
      dataRooms: pricing2.feature_values.enterprise,
      dataRoomsPlus: pricing2.feature_values.enterprise,
    },
    // Other Features
    {
      feature: pricing2.features.notion_documents,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.reactions,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.forms,
      free: false,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: pricing2.feature_values.file_requests,
    },
    {
      feature: pricing2.features.communication_module,
      free: false,
      pro: false,
      business: false,
      dataRooms: pricing2.feature_values.enterprise,
      dataRoomsPlus: pricing2.feature_values.qa_module,
    },
    // Support
    {
      feature: pricing2.features.documentation,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.email_support,
      free: true,
      pro: true,
      business: true,
      dataRooms: true,
      dataRoomsPlus: true,
    },
    {
      feature: pricing2.features.migration,
      free: false,
      pro: pricing2.feature_values['48h_support'],
      business: pricing2.feature_values['24h_support'],
      dataRooms: pricing2.feature_values.support_self_hosting,
      dataRoomsPlus: pricing2.feature_values.dedicated_manager,
    },
    {
      feature: pricing2.features.custom_features,
      free: false,
      pro: false,
      business: false,
      dataRooms: pricing2.feature_values.enterprise,
      dataRoomsPlus: pricing2.feature_values.dedicated_manager,
    },
  ], [pricing2]);

  const sections = useMemo(() => [
    { title: pricing2.sections.document_analytics, icon: BarChart3, start: 0, end: 8 },
    { title: pricing2.sections.link_settings, icon: Lock, start: 8, end: 17 },
    { title: pricing2.sections.data_rooms_documents, icon: Globe, start: 17, end: 24 },
    { title: pricing2.sections.custom_branding, icon: Shield, start: 24, end: 35 },
    { title: pricing2.sections.other_features, icon: Users, start: 35, end: 39 },
    { title: pricing2.sections.support, icon: Users, start: 39, end: 43 },
  ], [pricing2]);

  const pricing = {
    monthly: {
      free: { price: formatPrice(0, lang), name: pricing2.plans.free.name, button: pricing2.plans.free.button, yearlyPrice: undefined },
      pro: { price: formatPrice(29, lang), name: pricing2.plans.pro.name, button: pricing2.plans.pro.button, yearlyPrice: undefined },
      business: { price: formatPrice(79, lang), name: pricing2.plans.business.name, button: pricing2.plans.business.button, yearlyPrice: undefined },
      dataRooms: { price: formatPrice(199, lang), name: pricing2.plans.data_rooms.name, button: pricing2.plans.data_rooms.button, yearlyPrice: undefined },
      dataRoomsPlus: { price: formatPrice(349, lang), name: pricing2.plans.data_rooms_plus.name, button: pricing2.plans.data_rooms_plus.button, yearlyPrice: undefined },
    },
    yearly: {
      free: { price: formatPrice(0, lang), name: pricing2.plans.free.name, button: pricing2.plans.free.button, yearlyPrice: undefined },
      pro: { price: formatPrice(19, lang), name: pricing2.plans.pro.name, button: pricing2.plans.pro.button, yearlyPrice: `${formatPrice(228, lang)} ${pricing2.period_yearly}` },
      business: { price: formatPrice(51, lang), name: pricing2.plans.business.name, button: pricing2.plans.business.button, yearlyPrice: `${formatPrice(612, lang)} ${pricing2.period_yearly}` },
      dataRooms: { price: formatPrice(129, lang), name: pricing2.plans.data_rooms.name, button: pricing2.plans.data_rooms.button, yearlyPrice: `${formatPrice(1548, lang)} ${pricing2.period_yearly}` },
      dataRoomsPlus: { price: formatPrice(227, lang), name: pricing2.plans.data_rooms_plus.name, button: pricing2.plans.data_rooms_plus.button, yearlyPrice: `${formatPrice(2724, lang)} ${pricing2.period_yearly}` },
    },
  };

  const currentPricing = isYearly ? pricing.yearly : pricing.monthly;

  return (
    <div className="w-full py-8 lg:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>{pricing2.badge}</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold">
              {pricing2.title}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              {pricing2.description}
            </p>
          </div>

          {/* Toggle Monthly/Yearly */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {pricing2.monthly}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="switch"
              aria-checked={isYearly}
              aria-label={dictionary.common?.toggle_pricing || "Toggle monthly or yearly pricing"}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {pricing2.annually} <span className="text-xs text-muted-foreground">({pricing2.save_up_to})</span>
            </span>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mt-8">
            <div className="grid text-left w-full min-w-[800px] grid-cols-6 divide-x divide-border border-t border-b border-border pt-12 bg-card rounded-lg shadow-sm">
              {/* Header Row - Features Column */}
              <div className="px-3 lg:px-6 col-span-1 py-4 border-b">
                <b>{pricing2.features_label}</b>
              </div>
              {/* Header Row - Free Plan */}
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-b">
                <p className="text-2xl font-bold">{currentPricing.free.name}</p>
                <p className="text-sm text-muted-foreground">
                  {pricing2.plans.free.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                  <span className="text-4xl">{currentPricing.free.price}</span>
                  <span className="text-sm text-muted-foreground"> {pricing2.period_monthly}</span>
                </p>
                <Button variant="outline" className="gap-4 mt-4" asChild>
                  <Link href="https://dashboard.doqshare.com">
                    {currentPricing.free.button} <MoveRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              {/* Header Row - Pro Plan */}
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-b">
                <p className="text-2xl font-bold">{currentPricing.pro.name}</p>
                <p className="text-sm text-muted-foreground">
                  {pricing2.plans.pro.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                  <span className="text-4xl">{currentPricing.pro.price}</span>
                  <span className="text-sm text-muted-foreground"> {pricing2.period_monthly}</span>
                </p>
                {isYearly && currentPricing.pro.yearlyPrice && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {currentPricing.pro.yearlyPrice}
                  </div>
                )}
                <Button variant="outline" className="gap-4 mt-4" asChild>
                  <Link href="https://dashboard.doqshare.com">
                    {currentPricing.pro.button} <MoveRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              {/* Header Row - Business Plan */}
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-b">
                <p className="text-2xl font-bold">{currentPricing.business.name}</p>
                <p className="text-sm text-muted-foreground">
                  {pricing2.plans.business.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                  <span className="text-4xl">{currentPricing.business.price}</span>
                  <span className="text-sm text-muted-foreground"> {pricing2.period_monthly}</span>
                </p>
                {isYearly && currentPricing.business.yearlyPrice && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {currentPricing.business.yearlyPrice}
                  </div>
                )}
                <Button className="gap-4 mt-4" asChild>
                  <Link href="https://dashboard.doqshare.com">
                    {currentPricing.business.button} <MoveRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              {/* Header Row - Data Rooms Plan */}
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-b">
                <p className="text-2xl font-bold">{currentPricing.dataRooms.name}</p>
                <p className="text-sm text-muted-foreground">
                  {pricing2.plans.data_rooms.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                  <span className="text-4xl">{currentPricing.dataRooms.price}</span>
                  <span className="text-sm text-muted-foreground"> {pricing2.period_monthly}</span>
                </p>
                {isYearly && currentPricing.dataRooms.yearlyPrice && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {currentPricing.dataRooms.yearlyPrice}
                  </div>
                )}
                <Button variant="outline" className="gap-4 mt-4" asChild>
                  <Link href="https://dashboard.doqshare.com">
                    {currentPricing.dataRooms.button} <MoveRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              {/* Header Row - Data Rooms Plus Plan */}
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-b">
                <p className="text-2xl font-bold">{currentPricing.dataRoomsPlus.name}</p>
                <p className="text-sm text-muted-foreground">
                  {pricing2.plans.data_rooms_plus.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                  <span className="text-4xl">{currentPricing.dataRoomsPlus.price}</span>
                  <span className="text-sm text-muted-foreground"> {pricing2.period_monthly}</span>
                </p>
                {isYearly && currentPricing.dataRoomsPlus.yearlyPrice && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {currentPricing.dataRoomsPlus.yearlyPrice}
                  </div>
                )}
                <Button variant="outline" className="gap-4 mt-4" asChild>
                  <Link href={`/${lang}/contact`}>
                    {currentPricing.dataRoomsPlus.button} <PhoneCall className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Feature Rows with Sections */}
              {sections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  {/* Section Header */}
                  <div className="px-3 lg:px-6 col-span-1 py-3 border-b">
                    <div className="flex items-center gap-2 font-medium">
                      <section.icon className="size-4" />
                      <span>{section.title}</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 md:px-6 border-b"></div>
                  <div className="px-3 py-3 md:px-6 border-b"></div>
                  <div className="px-3 py-3 md:px-6 border-b"></div>
                  <div className="px-3 py-3 md:px-6 border-b"></div>
                  <div className="px-3 py-3 md:px-6 border-b"></div>

                  {/* Section Features */}
                  {tableData.slice(section.start, section.end).map((item, index) => (
                    <React.Fragment key={`${sectionIndex}-${index}`}>
                      <div className="px-3 lg:px-6 col-span-1 py-4 border-b">
                        <p className="text-muted-foreground text-sm">{item.feature}</p>
                      </div>
                      <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-b">
                        {item.free === true ? (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        ) : item.free === false ? (
                          <Minus className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <p className="text-muted-foreground text-sm">{item.free}</p>
                        )}
                      </div>
                      <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-b">
                        {item.pro === true ? (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        ) : item.pro === false ? (
                          <Minus className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <p className="text-muted-foreground text-sm">{item.pro}</p>
                        )}
                      </div>
                      <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-b">
                        {item.business === true ? (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        ) : item.business === false ? (
                          <Minus className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <p className="text-muted-foreground text-sm">{item.business}</p>
                        )}
                      </div>
                      <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-b">
                        {item.dataRooms === true ? (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        ) : item.dataRooms === false ? (
                          <Minus className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <p className="text-muted-foreground text-sm">{item.dataRooms}</p>
                        )}
                      </div>
                      <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-b">
                        {item.dataRoomsPlus === true ? (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        ) : item.dataRoomsPlus === false ? (
                          <Minus className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <p className="text-muted-foreground text-sm">{item.dataRoomsPlus}</p>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
