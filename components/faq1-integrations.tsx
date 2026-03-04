"use client";

import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookDemoButton } from "@/components/book-demo-button";
import Link from "next/link";

const faqs = [
  {
    question: "What integrations are available?",
    answer: "DoQshare offers native integrations with Notion, Slack, Zapier, GitHub, and more. We also provide a comprehensive REST API and webhooks for custom integrations. Check our integrations page for the complete list."
  },
  {
    question: "How do I set up an integration?",
    answer: "Each integration has a dedicated setup guide in our Help Center. Most integrations can be configured in minutes through our dashboard. For custom integrations, refer to our API documentation."
  },
  {
    question: "Can I build custom integrations?",
    answer: "Yes! DoQshare provides a full REST API and webhooks for building custom integrations. Our API documentation includes examples, SDKs, and detailed guides for JavaScript, Python, and PHP."
  },
  {
    question: "Are webhooks available?",
    answer: "Yes, webhooks are available for all plans. You can receive real-time notifications for events like document views, downloads, access changes, and more. Configure webhooks in your dashboard settings."
  },
  {
    question: "Is there a Zapier integration?",
    answer: "Yes! DoQshare integrates with Zapier, allowing you to connect with 5000+ apps. Automate workflows, sync data, and trigger actions based on document events."
  },
  {
    question: "Can I use my own domain for integrations?",
    answer: "Enterprise and Business plans include custom domain support. This allows you to use your own branded domain for all integrations and sharing links."
  },
  {
    question: "What programming languages are supported?",
    answer: "We provide official SDKs for JavaScript/TypeScript, Python, and PHP. Our REST API works with any language that can make HTTP requests. All SDKs are open source and available on GitHub."
  },
  {
    question: "How secure are integrations?",
    answer: "All integrations use secure authentication methods including API keys and OAuth 2.0. All data is encrypted in transit and at rest. We follow industry best practices for API security and compliance."
  }
];

export const FAQ1Integrations = () => (
  <div className="w-full py-12 lg:py-16">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bold">
                Frequently asked questions
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Everything you need to know about DoQshare integrations. Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
            </div>
            <div className="">
              <BookDemoButton className="gap-4" variant="outline">
                <PhoneCall className="w-4 h-4" /> Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

