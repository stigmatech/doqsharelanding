import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for individuals and small teams',
    features: [
      '50 documents',
      '1 user',
      'Basic analytics',
      'Email notifications',
      'Password protection'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline' as const,
    popular: false
  },
  {
    name: 'Pro',
    price: '$26',
    period: '/month',
    description: 'Best for growing businesses',
    features: [
      '100 documents',
      '1 user',
      'Advanced analytics',
      'Custom branding',
      '1-year analytics retention'
    ],
    buttonText: 'Choose Pro',
    buttonVariant: 'default' as const,
    popular: true
  },
  {
    name: 'Business',
    price: '$64',
    period: '/month',
    description: 'For teams that need more',
    features: [
      '1000 documents',
      '3 users',
      'Custom domain',
      'Advanced security',
      '2-year analytics retention'
    ],
    buttonText: 'Choose Business',
    buttonVariant: 'outline' as const,
    popular: false
  },
  {
    name: 'Data Rooms',
    price: '$107',
    period: '/month',
    description: 'Enterprise-grade data rooms',
    features: [
      'Unlimited documents',
      '3 users',
      'Full white-labeling',
      'SSO integration',
      'Enterprise support'
    ],
    buttonText: 'Create Data Rooms',
    buttonVariant: 'outline' as const,
    popular: false
  }
]

export default function PricingPlansShort() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose the perfect plan for your team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include core security features 
            with no hidden fees or setup costs.
          </p>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
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
                </div>
                <CardDescription className="mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <Link href="#getstarted">
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
            All plans include unlimited visitors and core security features
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
