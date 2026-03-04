"use client";

import React from "react";
import TestimonialsComponent from "@/components/testimonials-component";
import type { TestimonialItem } from "@/components/testimonials-component";

interface TestimonialsSectionProps {
  dictionary: {
    testimonials_component: {
      title_security?: string;
      description_security?: string;
    };
    testimonials: TestimonialItem[];
  };
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: 'Martin Patz',
    role: 'Founder & CEO',
    company: 'Differential Bio',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 5,
    content: "DoQshare's tracking features were instrumental in our fundraising success. We could see exactly which investors were engaging with our pitch deck, allowing us to focus on the most interested prospects. This saved us countless hours and helped us close our Series A faster."
  },
  {
    name: 'Kim Grey',
    role: 'Head of Investor Relations',
    company: 'Fabric VC',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 5,
    content: "The security and analytics features are unmatched. We switched from our previous solution and haven't looked back. The custom domain feature gives us a professional edge, and our investors appreciate the seamless experience."
  },
  {
    name: 'Alex Chen',
    role: 'Managing Partner',
    company: 'Unify Ventures',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto',
    rating: 5,
    content: "Our transition to DoQshare was seamless. The page-by-page analytics help us understand how startups present their materials, and the security features give us confidence when handling sensitive deal documents."
  },
  {
    name: 'Sarah Martinez',
    role: 'Founder',
    company: 'Townhall Network',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto',
    rating: 5,
    content: "DoQshare solved a major pain point for us. The team actually listens to user feedback and builds features we need. The real-time tracking and security features are exactly what we needed for our B2B sales process."
  }
];

const TestimonialsSection = ({ dictionary }: TestimonialsSectionProps) => {
  const displayTestimonials = dictionary.testimonials || defaultTestimonials;
  return <TestimonialsComponent testimonials={displayTestimonials} dictionary={dictionary} />;
};

export default TestimonialsSection;
