"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How secure is DoQshare?",
    answer: "DoQshare uses bank-level AES-256 encryption for all documents. We're GDPR, HIPAA, and SOC2 compliant, ensuring your sensitive documents meet the highest security standards. All data is encrypted both in transit and at rest."
  },
  {
    question: "Can I track who viewed my documents?",
    answer: "Yes! DoQshare provides detailed analytics including who viewed your documents, which pages they spent time on, when they accessed them, and for how long. You get page-by-page insights to understand engagement patterns."
  },
  {
    question: "What file types are supported?",
    answer: "DoQshare supports PDFs, Word documents, PowerPoint presentations, Excel spreadsheets, images, and more. Files are automatically optimized for secure sharing while maintaining quality."
  },
  {
    question: "Can I revoke access to shared documents?",
    answer: "Absolutely. You can revoke access to any shared document instantly, set expiration dates, require passwords, and control download permissions. You maintain complete control over your documents at all times."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can start sharing and tracking documents immediately."
  },
  {
    question: "How does DoQshare compare to Docsend or SharePoint?",
    answer: "DoQshare offers better analytics than Docsend with page-by-page tracking, and is easier to use than SharePoint while maintaining enterprise-grade security. We combine the best of both worlds: powerful analytics and enterprise security."
  },
  {
    question: "Can I use my own domain?",
    answer: "Yes! Enterprise and Business plans include custom domain support, allowing you to share documents using your own branded domain for a professional appearance."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support for all plans, with priority 24/7 support and dedicated account managers for Enterprise customers. Our support team is available to help you get the most out of DoQshare."
  }
];

export default function HomeFAQ() {
  // Diviser les FAQs en deux colonnes
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midPoint);
  const rightColumn = faqs.slice(midPoint);

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about DoQshare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Colonne gauche */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {leftColumn.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-left-${index}`}
                className="border-2 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Colonne droite */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {rightColumn.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-right-${index}`}
                className="border-2 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="/contact" 
            className="text-primary hover:underline font-semibold"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}

