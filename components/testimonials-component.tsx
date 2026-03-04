"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

interface TestimonialsComponentProps {
  testimonials: TestimonialItem[];
  dictionary?: {
    testimonials_component: {
      title_security?: string;
      description_security?: string;
    };
  };
}

const TestimonialsComponent = ({ testimonials, dictionary }: TestimonialsComponentProps) => {
  const title = dictionary?.testimonials_component?.title_security || "Trusted by companies worldwide";
  const description = dictionary?.testimonials_component?.description_security || "Join thousands of teams using DoQshare to secure documents, track engagement, and close more deals. See what our customers have to say.";
  
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-foreground mb-8 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4 pt-6 border-t">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
