"use client";

import { useState, useMemo } from "react";
import { Check, MoveRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatPrice } from "@/lib/pricing";

interface Pricing1Props {
  dictionary?: {
    pricing1: {
      badge: string;
      title: string;
      description: string;
      monthly: string;
      annually: string;
      period_monthly: string;
      period_yearly: string;
      save_up_to: string;
      most_popular: string;
      best_offer: string;
      plans: {
        pro: any;
        business: any;
        data_rooms: any;
        data_rooms_plus: any;
      };
    };
    common?: {
      toggle_pricing?: string;
    };
  };
  lang?: string;
}

export const Pricing1 = ({ dictionary, lang = "en" }: Pricing1Props) => {
  // Safe access with fallback values
  const pricing1 = dictionary?.pricing1;

  if (!pricing1) {
    // Return a minimal fallback UI if dictionary is not provided
    return (
      <div className="w-full py-8 lg:py-10">
        <div className="container mx-auto">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <p className="text-muted-foreground">Pricing information loading...</p>
          </div>
        </div>
      </div>
    );
  }
  const [isYearly, setIsYearly] = useState(false);

  const plansMonthly = useMemo(() => [
    {
      name: pricing1.plans.pro.name,
      price: formatPrice(29, lang),
      period: pricing1.period_monthly,
      yearlyPrice: undefined,
      yearlyPeriod: undefined,
      description: pricing1.plans.pro.description,
      features: [
        {
          title: pricing1.plans.pro.features.documents.title,
          description: pricing1.plans.pro.features.documents.description,
        },
        {
          title: pricing1.plans.pro.features.analytics.title,
          description: pricing1.plans.pro.features.analytics.description,
        },
        {
          title: pricing1.plans.pro.features.branding.title,
          description: pricing1.plans.pro.features.branding.description,
        },
      ],
      buttonText: pricing1.plans.pro.button,
      buttonVariant: "outline" as const,
      popular: false,
      bestOffer: false,
    },
    {
      name: pricing1.plans.business.name,
      price: formatPrice(79, lang),
      period: pricing1.period_monthly,
      yearlyPrice: undefined,
      yearlyPeriod: undefined,
      description: pricing1.plans.business.description,
      features: [
        {
          title: pricing1.plans.business.features.data_rooms.title,
          description: pricing1.plans.business.features.data_rooms.description,
        },
        {
          title: pricing1.plans.business.features.domain.title,
          description: pricing1.plans.business.features.domain.description,
        },
        {
          title: pricing1.plans.business.features.screenshot.title,
          description: pricing1.plans.business.features.screenshot.description,
        },
      ],
      buttonText: pricing1.plans.business.button,
      buttonVariant: "default" as const,
      popular: true,
      bestOffer: false,
    },
    {
      name: pricing1.plans.data_rooms.name,
      price: formatPrice(199, lang),
      period: pricing1.period_monthly,
      yearlyPrice: undefined,
      yearlyPeriod: undefined,
      description: pricing1.plans.data_rooms.description,
      features: [
        {
          title: pricing1.plans.data_rooms.features.unlimited.title,
          description: pricing1.plans.data_rooms.features.unlimited.description,
        },
        {
          title: pricing1.plans.data_rooms.features.watermarking.title,
          description: pricing1.plans.data_rooms.features.watermarking.description,
        },
        {
          title: pricing1.plans.data_rooms.features.permissions.title,
          description: pricing1.plans.data_rooms.features.permissions.description,
        },
      ],
      buttonText: pricing1.plans.data_rooms.button,
      buttonVariant: "outline" as const,
      popular: false,
      bestOffer: false,
    },
    {
      name: pricing1.plans.data_rooms_plus.name,
      price: formatPrice(349, lang),
      period: pricing1.period_monthly,
      yearlyPrice: undefined,
      yearlyPeriod: undefined,
      description: pricing1.plans.data_rooms_plus.description,
      features: [
        {
          title: pricing1.plans.data_rooms_plus.features.unlimited.title,
          description: pricing1.plans.data_rooms_plus.features.unlimited.description,
        },
        {
          title: pricing1.plans.data_rooms_plus.features.support.title,
          description: pricing1.plans.data_rooms_plus.features.support.description,
        },
        {
          title: pricing1.plans.data_rooms_plus.features.white_label.title,
          description: pricing1.plans.data_rooms_plus.features.white_label.description,
        },
      ],
      buttonText: pricing1.plans.data_rooms_plus.button,
      buttonVariant: "outline" as const,
      popular: false,
      bestOffer: true,
    },
  ], [pricing1]);

  const plansYearly = useMemo(() => [
    {
      name: pricing1.plans.pro.name,
      price: formatPrice(19, lang),
      period: pricing1.period_monthly,
      yearlyPrice: formatPrice(228, lang),
      yearlyPeriod: pricing1.period_yearly,
      description: pricing1.plans.pro.description,
      features: [
        {
          title: pricing1.plans.pro.features.documents.title,
          description: pricing1.plans.pro.features.documents.description,
        },
        {
          title: pricing1.plans.pro.features.analytics.title,
          description: pricing1.plans.pro.features.analytics.description,
        },
        {
          title: pricing1.plans.pro.features.branding.title,
          description: pricing1.plans.pro.features.branding.description,
        },
      ],
      buttonText: pricing1.plans.pro.button,
      buttonVariant: "outline" as const,
      popular: false,
      bestOffer: false,
    },
    {
      name: pricing1.plans.business.name,
      price: formatPrice(51, lang),
      period: pricing1.period_monthly,
      yearlyPrice: formatPrice(612, lang),
      yearlyPeriod: pricing1.period_yearly,
      description: pricing1.plans.business.description,
      features: [
        {
          title: pricing1.plans.business.features.data_rooms.title,
          description: pricing1.plans.business.features.data_rooms.description,
        },
        {
          title: pricing1.plans.business.features.domain.title,
          description: pricing1.plans.business.features.domain.description,
        },
        {
          title: pricing1.plans.business.features.screenshot.title,
          description: pricing1.plans.business.features.screenshot.description,
        },
      ],
      buttonText: pricing1.plans.business.button,
      buttonVariant: "default" as const,
      popular: true,
      bestOffer: false,
    },
    {
      name: pricing1.plans.data_rooms.name,
      price: formatPrice(129, lang),
      period: pricing1.period_monthly,
      yearlyPrice: formatPrice(1548, lang),
      yearlyPeriod: pricing1.period_yearly,
      description: pricing1.plans.data_rooms.description,
      features: [
        {
          title: pricing1.plans.data_rooms.features.unlimited.title,
          description: pricing1.plans.data_rooms.features.unlimited.description,
        },
        {
          title: pricing1.plans.data_rooms.features.watermarking.title,
          description: pricing1.plans.data_rooms.features.watermarking.description,
        },
        {
          title: pricing1.plans.data_rooms.features.permissions.title,
          description: pricing1.plans.data_rooms.features.permissions.description,
        },
      ],
      buttonText: pricing1.plans.data_rooms.button,
      buttonVariant: "outline" as const,
      popular: false,
      bestOffer: false,
    },
    {
      name: pricing1.plans.data_rooms_plus.name,
      price: formatPrice(227, lang),
      period: pricing1.period_monthly,
      yearlyPrice: formatPrice(2724, lang),
      yearlyPeriod: pricing1.period_yearly,
      description: pricing1.plans.data_rooms_plus.description,
      features: [
        {
          title: pricing1.plans.data_rooms_plus.features.unlimited.title,
          description: pricing1.plans.data_rooms_plus.features.unlimited.description,
        },
        {
          title: pricing1.plans.data_rooms_plus.features.support.title,
          description: pricing1.plans.data_rooms_plus.features.support.description,
        },
        {
          title: pricing1.plans.data_rooms_plus.features.white_label.title,
          description: pricing1.plans.data_rooms_plus.features.white_label.description,
        },
      ],
      buttonText: pricing1.plans.data_rooms_plus.button,
      buttonVariant: "outline" as const,
      popular: false,
      bestOffer: true,
    },
  ], [pricing1]);

  const plans = isYearly ? plansYearly : plansMonthly;

  return (
    <div className="w-full py-8 lg:py-10">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>{pricing1.badge}</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold">
              {pricing1.title}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              {pricing1.description}
            </p>
          </div>

          {/* Toggle Monthly/Yearly */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {pricing1.monthly}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="switch"
              aria-checked={isYearly}
              aria-label={dictionary?.common?.toggle_pricing || "Toggle monthly or yearly pricing"}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {pricing1.annually} <span className="text-xs text-muted-foreground">({pricing1.save_up_to})</span>
            </span>
          </div>

          <div className="grid pt-12 text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`w-full rounded-md relative ${plan.popular ? "border-primary shadow-lg" : ""
                  } ${plan.bestOffer ? "border-blue-600 shadow-xl" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-orange-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      {pricing1.most_popular}
                    </Badge>
                  </div>
                )}
                {plan.bestOffer && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-blue-600 text-white">
                      {pricing1.best_offer}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                      {plan.name}
                    </span>
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <div>
                      <p className="flex flex-row items-center gap-2 text-xl">
                        <span className="text-4xl">{plan.price}</span>
                        <span className="text-sm text-muted-foreground">
                          {plan.period}
                        </span>
                      </p>
                      {isYearly && plan.yearlyPrice && (
                        <div className="text-sm text-muted-foreground mt-1">
                          {plan.yearlyPrice}
                          {plan.yearlyPeriod}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-4 justify-start">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-primary shrink-0" />
                          <div className="flex flex-col">
                            <p>{feature.title}</p>
                            <p className="text-muted-foreground text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant={plan.buttonVariant}
                      className={`gap-4 w-full ${plan.popular ? "bg-orange-500 hover:bg-orange-600 text-white hover:text-white" : ""
                        } ${plan.bestOffer ? "bg-blue-600 hover:bg-blue-700 text-white hover:text-white" : ""
                        }`}
                      asChild
                    >
                      <Link
                        href={`/${lang}/pricing`}
                      >
                        {plan.buttonText}{" "}
                        <MoveRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
