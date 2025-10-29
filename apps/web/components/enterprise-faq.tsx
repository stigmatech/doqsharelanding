import { Card } from '@workspace/ui/components/card'
import { ChevronDown } from 'lucide-react'

export default function EnterpriseFAQ() {
  const faqs = [
    {
      question: "What is DoqShare Enterprise?",
      answer: "DoqShare Enterprise is our advanced solution designed for large organizations that need enhanced security, compliance, and administrative controls. It includes features like SSO integration, advanced analytics, white-labeling, and dedicated support."
    },
    {
      question: "How is Enterprise different from the cloud version?",
      answer: "Enterprise includes advanced features like SSO integration, custom branding, priority support, dedicated account management, and enhanced security controls. It also offers self-hosted deployment options for organizations that need complete control over their data and infrastructure."
    },
    {
      question: "Can we customize the security settings?",
      answer: "Yes, Enterprise customers have access to advanced security configurations including custom password policies, IP restrictions, session management, and audit logging. Self-hosted customers have complete control over all security settings."
    },
    {
      question: "Do you offer deployment support?",
      answer: "Yes, we provide comprehensive deployment support for both cloud and self-hosted Enterprise customers. This includes migration assistance, configuration guidance, and training for your team."
    },
    {
      question: "What kind of support is included?",
      answer: "Enterprise customers receive priority support with dedicated account managers, 24/7 phone support, and faster response times. Self-hosted customers also get deployment support and ongoing maintenance assistance."
    },
    {
      question: "Can we get a custom SLA?",
      answer: "Yes, we offer custom Service Level Agreements for Enterprise customers based on your specific requirements. This includes uptime guarantees, response times, and performance metrics tailored to your needs."
    }
  ]

  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Enterprise
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
