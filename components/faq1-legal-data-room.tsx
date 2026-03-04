import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What is a Legal Data Room?",
    answer: "A Legal Data Room is a secure online repository where law firms can store, organize, and share sensitive legal documents with clients, opposing counsel, and other parties. It provides a centralized platform for managing case documents, contracts, and other legal materials with enterprise-grade security and access controls."
  },
  {
    question: "How can a Legal Data Room help my firm?",
    answer: "A Legal Data Room helps your firm by providing a secure, professional platform for sharing legal documents with clients. It enhances client communication, improves document organization, tracks client engagement, and ensures compliance with legal document security requirements. It also saves time by eliminating the need for email attachments and physical document sharing."
  },
  {
    question: "How do I create a Legal Data Room?",
    answer: "Creating a Legal Data Room is simple. Sign up for a DoQshare account, navigate to the Data Rooms section, and click 'Create New Data Room'. You can then upload your legal documents, organize them into folders, set access permissions, and customize the branding to match your firm's identity. The entire process takes just a few minutes."
  },
  {
    question: "What documents can I store in a Legal Data Room?",
    answer: "You can store any type of legal document in a Legal Data Room, including contracts, case files, court documents, client communications, discovery materials, settlement agreements, and more. The platform supports all common document formats including PDF, Word, Excel, and images. All documents are encrypted and stored securely."
  },
  {
    question: "How secure is the Legal Data Room?",
    answer: "DoQshare's Legal Data Room uses enterprise-grade security measures including AES-256 encryption, secure access controls, audit trails, and compliance with GDPR, HIPAA, and SOC 2 standards. Documents are encrypted both in transit and at rest, and you have complete control over who can access which documents. We also offer features like password protection, expiration dates, and dynamic watermarking."
  },
  {
    question: "What is the pricing for legal data rooms?",
    answer: "DoQshare offers flexible pricing plans for legal data rooms, starting with a free plan that includes basic features. Business and Enterprise plans provide advanced features like custom branding, unlimited documents, priority support, and enhanced security. All plans include a 14-day free trial, and you can upgrade or downgrade at any time."
  },
  {
    question: "How does document tracking work in a Legal Data Room?",
    answer: "Document tracking in a Legal Data Room provides detailed analytics on how clients interact with your documents. You can see which documents were viewed, when they were accessed, how long clients spent on each page, and whether documents were downloaded. This helps you understand client engagement and improve your communication strategy."
  },
  {
    question: "Can I customize my Legal Data Room?",
    answer: "Yes! DoQshare allows you to customize your Legal Data Room with your firm's branding, including custom logos, colors, and domain names. Business and Enterprise plans include white-labeling options so your clients see your firm's branding, not DoQshare's. This creates a professional, seamless experience for your clients."
  },
  {
    question: "Can I integrate the Legal Data Room with other legal software?",
    answer: "DoQshare offers API access and webhooks for integrating with other legal software and case management systems. This allows you to automate document sharing, sync data between systems, and streamline your workflow. Contact our support team to learn more about integration options."
  },
  {
    question: "What kind of support is available for Legal Data Room users?",
    answer: "DoQshare provides comprehensive support for Legal Data Room users, including email support for all plans, priority 24/7 support for Business and Enterprise customers, dedicated account managers for Enterprise clients, and a comprehensive Help Center with guides and tutorials. We're committed to helping your firm succeed with secure document sharing."
  }
];

export const FAQ1LegalDataRoom = () => (
  <div className="w-full py-8 lg:py-10">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Badge variant="secondary" className="mb-4">
            FAQ Legal Data Room
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-6">
            Everything you need to know about Legal Data Rooms and how they can help your law firm.
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">
              <PhoneCall className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);

