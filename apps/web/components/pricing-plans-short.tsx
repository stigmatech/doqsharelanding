"use client";

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const plansMonthly = [
  {
    name: 'DoQshare Pro',
    price: '$29',
    period: '/month',
    yearlyPrice: undefined,
    yearlyPeriod: undefined,
    description: 'Everything in Free, plus:',
    features: [
      '1 user',
      '300 documents',
      'Unlimited links',
      'Folder organization',
      'Large file uploads',
      'Video sharing and analytics',
      'Visitors analytics',
      'More file types: ppt, docx, excel',
      'Remove DoQshare branding',
      'Custom branding',
      '1-year analytics retention'
    ],
    buttonText: 'Upgrade to Pro Monthly',
    buttonVariant: 'default' as const,
    popular: false,
    bestOffer: false
  },
  {
    name: 'DoQshare Business',
    price: '$79',
    period: '/month',
    yearlyPrice: undefined,
    yearlyPeriod: undefined,
    description: 'Everything in Pro, plus:',
    features: [
      '3 users',
      'Unlimited light data rooms',
      '1000 documents per data room',
      'Custom domain for documents',
      'Unlimited folder levels',
      'Multi-file sharing',
      'Custom social media cards',
      'Screenshot protection',
      'Require email verification',
      'Allow/Block list',
      'Dataroom branding',
      'Webhooks',
      'More file types: dwg, kml, zip',
      '2-year analytics retention'
    ],
    buttonText: 'Upgrade to Business Monthly',
    buttonVariant: 'default' as const,
    popular: true,
    bestOffer: false
  },
  {
    name: 'Data Rooms',
    price: '$199',
    period: '/month',
    yearlyPrice: undefined,
    yearlyPeriod: undefined,
    description: 'Everything in Business, plus:',
    features: [
      '3 users',
      'Unlimited data rooms',
      'Unlimited documents',
      'Custom domain for data rooms',
      'Data rooms analytics',
      'NDA agreements',
      'Dynamic watermark',
      'Granular user/group permissions',
      'Audit log for viewers',
      '24h priority support',
      'Custom onboarding',
      '2-year analytics retention'
    ],
    buttonText: 'Upgrade to Data Rooms Monthly',
    buttonVariant: 'default' as const,
    popular: false,
    bestOffer: false
  },
  {
    name: 'Data Rooms Plus',
    price: '$349',
    period: '/month',
    yearlyPrice: undefined,
    yearlyPeriod: undefined,
    description: 'Everything in Data Rooms, plus:',
    features: [
      '5 users',
      'Unlimited encrypted storage',
      'No file size limit',
      'Unlimited custom domains for data rooms',
      'Q&A module with custom permissions',
      'File requests with permissions',
      'Automatic file indexing',
      'Assign users to particular data room',
      'Dataroom update notifications',
      'Dedicated account manager',
      'Add-on: Full white-labeling',
      '3-year analytics retention'
    ],
    buttonText: 'Upgrade Data Rooms Plus Monthly',
    buttonVariant: 'default' as const,
    popular: false,
    bestOffer: true
  }
]

const plansYearly = [
  {
    name: 'DoQshare Pro',
    price: '$19',
    period: '/month',
    yearlyPrice: '$228',
    yearlyPeriod: '/year',
    description: 'Everything in Free, plus:',
    features: [
      '1 user',
      '300 documents',
      'Unlimited links',
      'Folder organization',
      'Large file uploads',
      'Video sharing and analytics',
      'Visitors analytics',
      'More file types: ppt, docx, excel',
      'Remove DoQshare branding',
      'Custom branding',
      '1-year analytics retention'
    ],
    buttonText: 'Upgrade to Pro Yearly',
    buttonVariant: 'default' as const,
    popular: false,
    bestOffer: false
  },
  {
    name: 'DoQshare Business',
    price: '$51',
    period: '/month',
    yearlyPrice: '$612',
    yearlyPeriod: '/year',
    description: 'Everything in Pro, plus:',
    features: [
      '3 users',
      'Unlimited light data rooms',
      '1000 documents per data room',
      'Custom domain for documents',
      'Unlimited folder levels',
      'Multi-file sharing',
      'Custom social media cards',
      'Screenshot protection',
      'Require email verification',
      'Allow/Block list',
      'Dataroom branding',
      'Webhooks',
      'More file types: dwg, kml, zip',
      '2-year analytics retention'
    ],
    buttonText: 'Upgrade to Business Yearly',
    buttonVariant: 'default' as const,
    popular: true,
    bestOffer: false
  },
  {
    name: 'Data Rooms',
    price: '$129',
    period: '/month',
    yearlyPrice: '$1548',
    yearlyPeriod: '/year',
    description: 'Everything in Business, plus:',
    features: [
      '3 users',
      'Unlimited data rooms',
      'Unlimited documents',
      'Custom domain for data rooms',
      'Data rooms analytics',
      'NDA agreements',
      'Dynamic watermark',
      'Granular user/group permissions',
      'Audit log for viewers',
      '24h priority support',
      'Custom onboarding',
      '2-year analytics retention'
    ],
    buttonText: 'Upgrade to Data Rooms Yearly',
    buttonVariant: 'default' as const,
    popular: false,
    bestOffer: false
  },
  {
    name: 'Data Rooms Plus',
    price: '$227',
    period: '/month',
    yearlyPrice: '$2724',
    yearlyPeriod: '/year',
    description: 'Everything in Data Rooms, plus:',
    features: [
      '5 users',
      'Unlimited encrypted storage',
      'No file size limit',
      'Unlimited custom domains for data rooms',
      'Q&A module with custom permissions',
      'File requests with permissions',
      'Automatic file indexing',
      'Assign users to particular data room',
      'Dataroom update notifications',
      'Dedicated account manager',
      'Add-on: Full white-labeling',
      '3-year analytics retention'
    ],
    buttonText: 'Upgrade Data Rooms Plus Yearly',
    buttonVariant: 'default' as const,
    popular: false,
    bestOffer: true
  }
]

export default function PricingPlansShort() {
  const [isYearly, setIsYearly] = useState(false)
  const plans = isYearly ? plansYearly : plansMonthly

  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose the perfect plan for your team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include core security features 
            with no hidden fees or setup costs.
          </p>
          
          {/* Toggle Monthly/Yearly */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="switch"
              aria-checked={isYearly}
              aria-label="Toggle monthly or yearly pricing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annually <span className="text-xs text-muted-foreground">(Save up to 35%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''} ${plan.bestOffer ? 'border-blue-600 shadow-xl' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              {plan.bestOffer && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 text-white">
                    Best offer
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
                  {isYearly && plan.yearlyPrice && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {plan.yearlyPrice}{plan.yearlyPeriod}
                    </div>
                  )}
                </div>
                <CardDescription className="mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
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
            All plans include unlimited viewers and page by page document analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/enterprise">View Enterprise Plans</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
