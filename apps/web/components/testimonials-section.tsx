"use client";

import React from "react";
import TestimonialsComponent from "@/components/testimonials-component";
import type { TestimonialItem } from "@/components/testimonials-component";

const testimonials: TestimonialItem[] = [
  {
    name: 'Martin Patz',
    role: 'Founder',
    company: 'Differential Bio',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 5,
    content: "I simply love this product. DoqShare's tracking features were instrumental in our fundraising success."
  },
  {
    name: 'Kim Grey',
    role: 'Investor Relations',
    company: 'Fabric VC',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 5,
    content: "Love that DoqShare is so secure! Very glad we switched and using it for our data rooms with custom domains."
  },
  {
    name: 'Alex Chen',
    role: 'Partner',
    company: 'Unify Ventures',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto',
    rating: 5,
    content: "Our transition to DoqShare was smooth. We love the product and data rooms with custom domains."
  },
  {
    name: 'Jaski',
    role: 'Founder',
    company: 'Townhall Network',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto',
    rating: 5,
    content: "DoqShare team listens to their users and builds what they need. Thanks for solving a big pain point."
  }
];

const TestimonialsSection = () => {
  return <TestimonialsComponent testimonials={testimonials} />;
};

export default TestimonialsSection;
