import { Card } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { CheckCircle, X } from 'lucide-react'

export default function EnterpriseComparison() {
  const features = [
    {
      name: "Secure document sharing",
      description: "Share documents securely with granular permissions",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Unlimited viewers",
      description: "Share your data rooms with unlimited viewers",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Unlimited folders",
      description: "Organize documents in unlimited folder structures",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Multi-level data rooms",
      description: "Create nested data rooms with different access levels",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Unlimited data storage",
      description: "Upload and share unlimited files",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Unlimited data rooms",
      description: "Create as many data rooms as needed",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "User groups",
      description: "Organize users into groups for easier management",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "White-labeling",
      description: "Use your own domain and create full customization",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Analytics overview & export",
      description: "Detailed analytics with export capabilities",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "SSO integration",
      description: "Single sign-on integration with your existing systems",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Ability to add on features",
      description: "Ability to add on features like AI, watermarking, and more",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Full control over data",
      description: "Complete control over your data and infrastructure",
      enterprise: false,
      selfHosted: true
    },
    {
      name: "Self-hosted deployment",
      description: "Deploy on your own infrastructure",
      enterprise: false,
      selfHosted: true
    },
    {
      name: "Docker compatibility",
      description: "Easy deployment with Docker containers",
      enterprise: false,
      selfHosted: true
    },
    {
      name: "License to source code",
      description: "License to source code for internal customization",
      enterprise: false,
      selfHosted: true
    },
    {
      name: "On-premises installation support",
      description: "On-premises installation support",
      enterprise: false,
      selfHosted: true
    },
    {
      name: "Custom SLA",
      description: "Tailored service level agreements",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Priority support",
      description: "24/7 priority support with dedicated account manager, and phone support",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Internal use only",
      description: "Internal use only",
      enterprise: true,
      selfHosted: true
    },
    {
      name: "Admin users included in price",
      description: "Ability to add on unlimited team members",
      enterprise: "5 admin users",
      selfHosted: "5 admin users"
    }
  ]

  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Select best enterprise option for your organization
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise plans and features
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6 font-semibold">Feature</th>
                <th className="text-center py-4 px-6 font-semibold">Enterprise DoqShare</th>
                <th className="text-center py-4 px-6 font-semibold">Enterprise Self-Hosted</th>
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
          <Card className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Enterprise DoqShare</h3>
            <div className="text-4xl font-bold mb-4">
              Custom pricing
              <span className="text-lg text-muted-foreground font-normal">based on your needs</span>
            </div>
            <div className="text-sm text-muted-foreground mb-6">from $900/month</div>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div>• Cloud-hosted solution</div>
              <div>• Full feature access</div>
              <div>• Priority support</div>
              <div>• Custom integrations</div>
            </div>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </Card>
          <Card className="p-8 text-center border-primary">
            <h3 className="text-2xl font-bold mb-4">Enterprise Self-Hosted</h3>
            <div className="text-4xl font-bold mb-4">
              Custom pricing
              <span className="text-lg text-muted-foreground font-normal">based on your needs</span>
            </div>
            <div className="text-sm text-muted-foreground mb-6">from $2000/month</div>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div>• On-premises deployment</div>
              <div>• Full source code access</div>
              <div>• Complete data control</div>
              <div>• Custom SLA</div>
            </div>
            <Button className="w-full">Contact Sales</Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
