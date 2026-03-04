"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsProps {
  dictionary?: {
    testimonials_component: {
      title: string;
      description: string;
      at: string;
      list: {
        id: number;
        name: string;
        designation: string;
        company: string;
        testimonial: string;
        avatar: string;
      }[];
    };
  };
}

const defaultTestimonials = [
  {
    id: 1,
    name: "Martin Patz",
    designation: "Founder & CEO",
    company: "Differential Bio",
    testimonial:
      "We closed our Series A faster thanks to DoQshare. Seeing which investors spent time on specific slides helped us prioritize follow-ups.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
  },
  {
    id: 2,
    name: "Kim Grey",
    designation: "Head of Investor Relations",
    company: "Fabric VC",
    testimonial:
      "GDPR and SOC2 compliance out of the box. Our legal team approved DoQshare in days, not weeks. Game changer for us.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
  },
  {
    id: 3,
    name: "Alex Chen",
    designation: "Managing Partner",
    company: "Unify Ventures",
    testimonial:
      "The dynamic watermarking feature prevents leaks. We know exactly who shared documents externally. Complete control.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
  },
  {
    id: 4,
    name: "Sarah Martinez",
    designation: "Founder",
    company: "Townhall Network",
    testimonial:
      "Page-by-page analytics revealed which sections resonated most. We redesigned our pitch deck based on real data, not guesses.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
  },
  {
    id: 5,
    name: "David Kim",
    designation: "VP of Sales",
    company: "Enterprise Solutions",
    testimonial:
      "Custom domain and white-labeling made DoQshare feel native to our brand. Clients never know they're using a third-party tool.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
  },
  {
    id: 6,
    name: "Emma Wilson",
    designation: "Legal Counsel",
    company: "M&A Partners",
    testimonial:
      "Our data room handled 200+ documents across 15 parties. Zero security incidents. The audit trail saved us during negotiations.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
  },
  {
    id: 7,
    name: "James Taylor",
    designation: "CFO",
    company: "TechScale Inc",
    testimonial:
      "Revoking access instantly when deals fall through is crucial. DoQshare gives us that control. No more waiting for support tickets.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
  },
  {
    id: 8,
    name: "Rachel Green",
    designation: "Investment Director",
    company: "Capital Ventures",
    testimonial:
      "The Q&A module streamlined our due diligence process. All questions and answers in one place, with full audit history.",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
  },
];

const Testimonials = ({ dictionary }: TestimonialsProps) => {
  // Safe access with fallback values
  const testimonialsComponent = dictionary?.testimonials_component;
  const title = testimonialsComponent?.title || "Trusted by thousands of businesses worldwide";
  const description = testimonialsComponent?.description || "Real stories from companies using DoQshare to secure documents, track engagement, and close more deals";
  const at = testimonialsComponent?.at || "at";
  const testimonials = testimonialsComponent?.list || defaultTestimonials;

  return (
    <div className="w-full py-8 lg:py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center tracking-tighter px-6 text-pretty">
          {title}
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-12 relative">
          <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
          <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
          <div className="group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)] flex-row">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
                >
                  <TestimonialList at={at} testimonials={testimonials} />
                </div>
              ))}
          </div>
          <div className="group flex overflow-hidden p-2 mt-0 [--duration:20s] [--gap:1rem] [gap:var(--gap)] flex-row">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row group-hover:[animation-play-state:paused]"
                >
                  <TestimonialList at={at} testimonials={testimonials} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialList = ({ at, testimonials }: { at: string; testimonials: any[] }) =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-muted/50 rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.designation} {at} {testimonial.company}</p>
          </div>
        </div>
      </div>
      <p className="mt-5 text-[17px] line-clamp-2">{testimonial.testimonial}</p>
    </div>
  ));

export default Testimonials;
