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
    question: "What is a Real Estate Data Room?",
    answer: "A Real Estate Data Room is a secure virtual repository where realtors, property managers, and real estate professionals can store, organize, and share property documents, offers, contracts, and other real estate-related materials. It provides a centralized platform for managing property information with enterprise-grade security and access controls."
  },
  {
    question: "How does a data room help in real estate transactions?",
    answer: "A data room helps in real estate transactions by providing a secure platform for sharing property documents with buyers, sellers, investors, and other parties. It streamlines the due diligence process, enables efficient document sharing, tracks engagement, captures leads, and ensures all parties have secure access to the necessary property information. This speeds up transactions and improves communication."
  },
  {
    question: "How can I create a Real Estate Data Room?",
    answer: "Creating a Real Estate Data Room is simple. Sign up for a DoQshare account, navigate to the Data Rooms section, and click 'Create New Data Room'. You can then upload your property documents, organize them into folders (by property, transaction type, etc.), set access permissions, and customize the branding to match your real estate agency. The entire process takes just a few minutes."
  },
  {
    question: "What types of documents should I include in my Data Room?",
    answer: "You should include all relevant property documents such as property listings, floor plans, inspection reports, title documents, survey reports, financial statements, lease agreements, property photos, videos, environmental reports, zoning documents, and any other materials relevant to the property or transaction. The data room supports all common document formats including PDF, images, and spreadsheets."
  },
  {
    question: "What features help to set up a Virtual Data Room?",
    answer: "Key features that help set up a Virtual Data Room include: document organization and folder structure, secure access controls and permissions, custom branding and domain, page-by-page analytics to track engagement, email capture for lead generation, password protection and expiration dates, audit trails for compliance, and integration capabilities with other real estate software. DoQshare provides all these features in an easy-to-use platform."
  },
  {
    question: "How much does it cost to use a Real Estate Data Room?",
    answer: "DoQshare offers flexible pricing plans for Real Estate Data Rooms, starting with a free plan that includes basic features. Business and Enterprise plans provide advanced features like custom branding, unlimited documents, priority support, enhanced analytics, and lead capture capabilities. All plans include a 14-day free trial, and you can upgrade or downgrade at any time based on your needs."
  }
];

export const FAQ1RealEstateDataRoom = () => (
  <div className="w-full py-8 lg:py-10">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Badge variant="secondary" className="mb-4">
            FAQ Real Estate Data Room
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-6">
            Everything you need to know about Real Estate Data Rooms and how they can help your real estate business.
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

