import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: 'Unlimited Data Rooms',
    doqshare: true,
    docsend: false,
    sharepoint: false,
    ideals: false
  },
  {
    feature: 'Advanced Analytics',
    doqshare: true,
    docsend: true,
    sharepoint: false,
    ideals: true
  },
  {
    feature: 'Real-time Tracking',
    doqshare: true,
    docsend: true,
    sharepoint: false,
    ideals: true
  },
  {
    feature: 'Document Watermarking',
    doqshare: true,
    docsend: false,
    sharepoint: false,
    ideals: true
  },
  {
    feature: 'Screenshot Protection',
    doqshare: true,
    docsend: false,
    sharepoint: false,
    ideals: true
  },
  {
    feature: 'NDA Management',
    doqshare: true,
    docsend: false,
    sharepoint: false,
    ideals: true
  },
  {
    feature: 'Custom Branding',
    doqshare: true,
    docsend: true,
    sharepoint: false,
    ideals: true
  },
  {
    feature: 'SSO Integration',
    doqshare: true,
    docsend: false,
    sharepoint: true,
    ideals: true
  },
  {
    feature: 'API Access',
    doqshare: true,
    docsend: true,
    sharepoint: true,
    ideals: true
  },
  {
    feature: 'Self-hosted Option',
    doqshare: true,
    docsend: false,
    sharepoint: true,
    ideals: false
  },
  {
    feature: 'Mobile App',
    doqshare: true,
    docsend: true,
    sharepoint: true,
    ideals: true
  },
  {
    feature: '24/7 Support',
    doqshare: true,
    docsend: true,
    sharepoint: true,
    ideals: true
  }
]

export default function DataRoomComparison() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Data Room Platform Comparison</h2>
          <p className="text-xl text-muted-foreground">
            See how DoQshare compares to other data room solutions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold">Features</th>
                <th className="text-center p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg">DoQshare</span>
                    <Badge className="mt-2">Best Value</Badge>
                  </div>
                </th>
                <th className="text-center p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg">DocSend</span>
                    <span className="text-sm text-muted-foreground">$99/month</span>
                  </div>
                </th>
                <th className="text-center p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg">SharePoint</span>
                    <span className="text-sm text-muted-foreground">$5/user/month</span>
                  </div>
                </th>
                <th className="text-center p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg">iDeals</span>
                    <span className="text-sm text-muted-foreground">$200/month</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4 text-center">
                    {item.doqshare ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.docsend ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.sharepoint ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.ideals ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose DoQshare for Data Rooms?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bank-level encryption, watermarking, and screenshot protection to keep your sensitive documents secure.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track document engagement, time spent, and viewer behavior with detailed analytics and reporting.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Easy Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create and manage data rooms in minutes with our intuitive interface and powerful collaboration tools.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
