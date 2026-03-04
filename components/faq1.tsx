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

interface FAQ1Props {
  dictionary: {
    faq1: {
      badge: string;
      title: string;
      description: string;
      button: string;
      faqs: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
}

export const FAQ1 = ({ dictionary }: FAQ1Props) => {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{dictionary.faq1.badge}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bold">
                  {dictionary.faq1.title}
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  {dictionary.faq1.description}
                </p>
              </div>
              <div className="">
                <BookDemoButton className="gap-4" variant="outline">
                  <PhoneCall className="w-4 h-4" /> {dictionary.faq1.button}
                </BookDemoButton>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {dictionary.faq1.faqs.map((faq, index) => (
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
};
