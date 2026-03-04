"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, X, Cloud, Server } from 'lucide-react'
import Link from 'next/link'

interface EnterpriseComparisonProps {
  dictionary: {
    enterprise_comparison: {
      title: string;
      description: string;
      table: {
        feature: string;
        enterprise_doqshare: string;
        enterprise_self_hosted: string;
      };
      features: {
        [key: string]: {
          name: string;
          description: string;
          value?: string;
        };
      };
      pricing: {
        enterprise_doqshare: {
          title: string;
          description: string;
          price: string;
          price_description: string;
          features: {
            [key: string]: {
              title: string;
              description: string;
            };
          };
          button: string;
        };
        enterprise_self_hosted: {
          title: string;
          description: string;
          badge: string;
          price: string;
          price_description: string;
          features: {
            [key: string]: {
              title: string;
              description: string;
            };
          };
          button: string;
        };
      };
    };
  };
  lang?: string;
}

export default function EnterpriseComparison({ dictionary, lang = "en" }: EnterpriseComparisonProps) {
  const comp = dictionary.enterprise_comparison;
  
  const features = [
    {
      name: comp.features.secure_sharing.name,
      description: comp.features.secure_sharing.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.unlimited_viewers.name,
      description: comp.features.unlimited_viewers.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.unlimited_folders.name,
      description: comp.features.unlimited_folders.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.multi_level_data_rooms.name,
      description: comp.features.multi_level_data_rooms.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.unlimited_storage.name,
      description: comp.features.unlimited_storage.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.unlimited_data_rooms.name,
      description: comp.features.unlimited_data_rooms.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.user_groups.name,
      description: comp.features.user_groups.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.white_labeling.name,
      description: comp.features.white_labeling.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.analytics_export.name,
      description: comp.features.analytics_export.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.sso_integration.name,
      description: comp.features.sso_integration.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.add_on_features.name,
      description: comp.features.add_on_features.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.full_data_control.name,
      description: comp.features.full_data_control.description,
      enterprise: false,
      selfHosted: true
    },
    {
      name: comp.features.self_hosted_deployment.name,
      description: comp.features.self_hosted_deployment.description,
      enterprise: false,
      selfHosted: true
    },
    {
      name: comp.features.docker_compatibility.name,
      description: comp.features.docker_compatibility.description,
      enterprise: false,
      selfHosted: true
    },
    {
      name: comp.features.source_code_license.name,
      description: comp.features.source_code_license.description,
      enterprise: false,
      selfHosted: true
    },
    {
      name: comp.features.on_premises_support.name,
      description: comp.features.on_premises_support.description,
      enterprise: false,
      selfHosted: true
    },
    {
      name: comp.features.custom_sla.name,
      description: comp.features.custom_sla.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.priority_support.name,
      description: comp.features.priority_support.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.internal_use_only.name,
      description: comp.features.internal_use_only.description,
      enterprise: true,
      selfHosted: true
    },
    {
      name: comp.features.admin_users.name,
      description: comp.features.admin_users.description,
      enterprise: comp.features.admin_users.value,
      selfHosted: comp.features.admin_users.value
    }
  ]

  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {comp.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {comp.description}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6 font-semibold">{comp.table.feature}</th>
                <th className="text-center py-4 px-6 font-semibold">{comp.table.enterprise_doqshare}</th>
                <th className="text-center py-4 px-6 font-semibold">{comp.table.enterprise_self_hosted}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium">{feature.name}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    {feature.enterprise === true ? (
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    ) : feature.enterprise === false ? (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    ) : (
                      <span className="text-sm">{feature.enterprise}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {feature.selfHosted === true ? (
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    ) : feature.selfHosted === false ? (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    ) : (
                      <span className="text-sm">{feature.selfHosted}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 text-center relative hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{comp.pricing.enterprise_doqshare.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">
              {comp.pricing.enterprise_doqshare.description}
            </p>
            <div className="mb-6">
              <div className="text-2xl font-semibold mb-2">{comp.pricing.enterprise_doqshare.price}</div>
              <p className="text-sm text-muted-foreground">
                {comp.pricing.enterprise_doqshare.price_description}
              </p>
            </div>
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_doqshare.features.cloud_hosted.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_doqshare.features.cloud_hosted.description}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_doqshare.features.full_features.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_doqshare.features.full_features.description}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_doqshare.features.priority_support.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_doqshare.features.priority_support.description}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_doqshare.features.custom_integrations.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_doqshare.features.custom_integrations.description}</div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full" size="lg" asChild>
              <Link href={`/${lang}/contact`}>
                {comp.pricing.enterprise_doqshare.button}
              </Link>
            </Button>
          </Card>
          <Card className="p-8 text-center border-primary relative hover:shadow-lg transition-shadow">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {comp.pricing.enterprise_self_hosted.badge}
              </Badge>
            </div>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{comp.pricing.enterprise_self_hosted.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">
              {comp.pricing.enterprise_self_hosted.description}
            </p>
            <div className="mb-6">
              <div className="text-2xl font-semibold mb-2">{comp.pricing.enterprise_self_hosted.price}</div>
              <p className="text-sm text-muted-foreground">
                {comp.pricing.enterprise_self_hosted.price_description}
              </p>
            </div>
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_self_hosted.features.on_premises.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_self_hosted.features.on_premises.description}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_self_hosted.features.source_code.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_self_hosted.features.source_code.description}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_self_hosted.features.data_control.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_self_hosted.features.data_control.description}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{comp.pricing.enterprise_self_hosted.features.custom_sla.title}</div>
                  <div className="text-xs text-muted-foreground">{comp.pricing.enterprise_self_hosted.features.custom_sla.description}</div>
                </div>
              </div>
            </div>
            <Button className="w-full" size="lg" asChild>
              <Link href={`/${lang}/contact`}>
                {comp.pricing.enterprise_self_hosted.button}
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
