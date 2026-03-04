"use client";

import { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'
import { formatPrice } from '@/lib/pricing'

interface PricingPlansShortProps {
  dictionary: {
    pricing_plans_short: {
      title: string;
      description: string;
      monthly: string;
      annually: string;
      save_up_to: string;
      most_popular: string;
      best_offer: string;
      buttons: {
        pro_monthly: string;
        business_monthly: string;
        data_rooms_monthly: string;
        data_rooms_plus_monthly: string;
        pro_yearly: string;
        business_yearly: string;
        data_rooms_yearly: string;
        data_rooms_plus_yearly: string;
      };
      additional_info: string;
      enterprise_cta: string;
      sales_cta: string;
    };
    pricing1: {
      period_monthly: string;
      period_yearly: string;
    };
    pricing2: {
      features: { [key: string]: string };
      description: {
        pro: string;
        business: string;
        enterprise: string;
        datarooms: string;
      }
    };
  };
  lang?: string;
}

export default function PricingPlansShort({ dictionary, lang = "en" }: PricingPlansShortProps) {
  const [isYearly, setIsYearly] = useState(false)
  const ps = dictionary.pricing_plans_short;
  const p1 = dictionary.pricing1;
  const p2 = dictionary.pricing2;

  const plans = useMemo(() => {
    if (isYearly) {
      return [
        {
          name: 'DoQshare Pro',
          price: formatPrice(19, lang),
          period: p1.period_monthly,
          yearlyPrice: formatPrice(228, lang),
          yearlyPeriod: p1.period_yearly,
          description: p2.description.pro,
          features: [
            p2.features.one_user,
            p2.features.three_hundred_docs,
            p2.features.unlimited_links,
            p2.features.folder_organization,
            p2.features.large_file_uploads,
            p2.features.video_analytics,
            p2.features.visitors_analytics,
            p2.features.more_file_types_pro,
            p2.features.remove_branding,
            p2.features.custom_branding,
            p2.features.analytics_retention_1y
          ],
          buttonText: ps.buttons.pro_yearly,
          buttonVariant: 'default' as const,
          popular: false,
          bestOffer: false
        },
        {
          name: 'DoQshare Business',
          price: formatPrice(51, lang),
          period: p1.period_monthly,
          yearlyPrice: formatPrice(612, lang),
          yearlyPeriod: p1.period_yearly,
          description: p2.description.business,
          features: [
            p2.features.three_users,
            p2.features.unlimited_light_datarooms,
            p2.features.thousand_docs_per_dataroom,
            p2.features.custom_domain_docs,
            p2.features.unlimited_folder_levels,
            p2.features.multi_file_sharing,
            p2.features.social_media_cards,
            p2.features.screenshot_protection,
            p2.features.email_verification,
            p2.features.allow_block_list,
            p2.features.dataroom_branding,
            p2.features.webhooks,
            p2.features.more_file_types_business,
            p2.features.analytics_retention_2y
          ],
          buttonText: ps.buttons.business_yearly,
          buttonVariant: 'default' as const,
          popular: true,
          bestOffer: false
        },
        {
          name: 'Data Rooms',
          price: formatPrice(129, lang),
          period: p1.period_monthly,
          yearlyPrice: formatPrice(1548, lang),
          yearlyPeriod: p1.period_yearly,
          description: p2.description.datarooms,
          features: [
            p2.features.three_users,
            p2.features.unlimited_datarooms,
            p2.features.unlimited_documents,
            p2.features.custom_domain_datarooms,
            p2.features.datarooms_analytics,
            p2.features.nda_agreements,
            p2.features.dynamic_watermark,
            p2.features.granular_permissions,
            p2.features.audit_trail,
            p2.features.priority_support,
            p2.features.custom_onboarding,
            p2.features.analytics_retention_2y
          ],
          buttonText: ps.buttons.data_rooms_yearly,
          buttonVariant: 'default' as const,
          popular: false,
          bestOffer: false
        },
        {
          name: 'Data Rooms Plus',
          price: formatPrice(227, lang),
          period: p1.period_monthly,
          yearlyPrice: formatPrice(2724, lang),
          yearlyPeriod: p1.period_yearly,
          description: p2.description.enterprise,
          features: [
            p2.features.five_users,
            p2.features.unlimited_encrypted_storage,
            p2.features.no_file_size_limit,
            p2.features.unlimited_custom_domains_datarooms,
            p2.features.qa_module,
            p2.features.file_requests_permissions,
            p2.features.automatic_file_indexing,
            p2.features.assign_users_particular_dataroom,
            p2.features.dataroom_update_notifications,
            p2.features.dedicated_manager,
            p2.features.white_labeling_addon,
            p2.features.analytics_retention_3y
          ],
          buttonText: ps.buttons.data_rooms_plus_yearly,
          buttonVariant: 'default' as const,
          popular: false,
          bestOffer: true
        }
      ]
    } else {
      return [
        {
          name: 'DoQshare Pro',
          price: formatPrice(29, lang),
          period: p1.period_monthly,
          description: p2.description.pro,
          features: [
            p2.features.one_user,
            p2.features.three_hundred_docs,
            p2.features.unlimited_links,
            p2.features.folder_organization,
            p2.features.large_file_uploads,
            p2.features.video_analytics,
            p2.features.visitors_analytics,
            p2.features.more_file_types_pro,
            p2.features.remove_branding,
            p2.features.custom_branding,
            p2.features.analytics_retention_1y
          ],
          buttonText: ps.buttons.pro_monthly,
          buttonVariant: 'default' as const,
          popular: false,
          bestOffer: false
        },
        {
          name: 'DoQshare Business',
          price: formatPrice(79, lang),
          period: p1.period_monthly,
          description: p2.description.business,
          features: [
            p2.features.three_users,
            p2.features.unlimited_light_datarooms,
            p2.features.thousand_docs_per_dataroom,
            p2.features.custom_domain_docs,
            p2.features.unlimited_folder_levels,
            p2.features.multi_file_sharing,
            p2.features.social_media_cards,
            p2.features.screenshot_protection,
            p2.features.email_verification,
            p2.features.allow_block_list,
            p2.features.dataroom_branding,
            p2.features.webhooks,
            p2.features.more_file_types_business,
            p2.features.analytics_retention_2y
          ],
          buttonText: ps.buttons.business_monthly,
          buttonVariant: 'default' as const,
          popular: true,
          bestOffer: false
        },
        {
          name: 'Data Rooms',
          price: formatPrice(199, lang),
          period: p1.period_monthly,
          description: p2.description.datarooms,
          features: [
            p2.features.three_users,
            p2.features.unlimited_datarooms,
            p2.features.unlimited_documents,
            p2.features.custom_domain_datarooms,
            p2.features.datarooms_analytics,
            p2.features.nda_agreements,
            p2.features.dynamic_watermark,
            p2.features.granular_permissions,
            p2.features.audit_trail,
            p2.features.priority_support,
            p2.features.custom_onboarding,
            p2.features.analytics_retention_2y
          ],
          buttonText: ps.buttons.data_rooms_monthly,
          buttonVariant: 'default' as const,
          popular: false,
          bestOffer: false
        },
        {
          name: 'Data Rooms Plus',
          price: formatPrice(349, lang),
          period: p1.period_monthly,
          description: p2.description.enterprise,
          features: [
            p2.features.five_users,
            p2.features.unlimited_encrypted_storage,
            p2.features.no_file_size_limit,
            p2.features.unlimited_custom_domains_datarooms,
            p2.features.qa_module,
            p2.features.file_requests_permissions,
            p2.features.automatic_file_indexing,
            p2.features.assign_users_particular_dataroom,
            p2.features.dataroom_update_notifications,
            p2.features.dedicated_manager,
            p2.features.white_labeling_addon,
            p2.features.analytics_retention_3y
          ],
          buttonText: ps.buttons.data_rooms_plus_monthly,
          buttonVariant: 'default' as const,
          popular: false,
          bestOffer: true
        }
      ]
    }
  }, [isYearly, lang, ps, p1, p2]);

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {ps.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {ps.description}
          </p>

          {/* Toggle Monthly/Yearly */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {ps.monthly}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="switch"
              aria-checked={isYearly}
              aria-label="Toggle monthly or yearly pricing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {ps.annually} <span className="text-xs text-muted-foreground">({ps.save_up_to})</span>
            </span>
          </div>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''} ${plan.bestOffer ? 'border-blue-600 shadow-xl' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    {ps.most_popular}
                  </Badge>
                </div>
              )}
              {plan.bestOffer && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 text-white">
                    {ps.best_offer}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                  {isYearly && 'yearlyPrice' in plan && plan.yearlyPrice && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {plan.yearlyPrice}{'yearlyPeriod' in plan ? plan.yearlyPeriod : ''}
                    </div>
                  )}
                </div>
                <CardDescription className="mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col grow">
                <ul className="space-y-3 mb-6 grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full mt-auto ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : ''} ${plan.bestOffer ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  size="lg"
                  asChild
                >
                  <Link href="https://dashboard.doqshare.com">
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            {ps.additional_info}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/enterprise`}>{ps.enterprise_cta}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/${lang}/contact`}>{ps.sales_cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

