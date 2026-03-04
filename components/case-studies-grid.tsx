"use client";

import { ScrollAnimation } from "@/components/scroll-animation";
import { CaseStudyCard } from "./case-study-card";

const caseStudies = [
  {
    id: "differential-bio",
    company: "Differential Bio",
    industry: "Biotech",
    author: {
      name: "Martin Patz",
      role: "Founder & CEO",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    },
    challenge: "Needed to track investor engagement during Series A fundraising to prioritize follow-ups and close deals faster.",
    solution: "Used DoQshare's page-by-page analytics to see which investors spent time on specific slides, enabling data-driven follow-up strategies.",
    results: [
      {
        metric: "Faster Close",
        value: "40%",
        description: "Reduced fundraising timeline",
      },
      {
        metric: "Engagement",
        value: "85%",
        description: "Investor document views",
      },
    ],
    testimonial: "We closed our Series A faster thanks to DoQshare. Seeing which investors spent time on specific slides helped us prioritize follow-ups.",
    featured: true,
  },
  {
    id: "fabric-vc",
    company: "Fabric VC",
    industry: "Venture Capital",
    author: {
      name: "Kim Grey",
      role: "Head of Investor Relations",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    },
    challenge: "Required GDPR and SOC2 compliance for portfolio company data rooms while maintaining ease of use.",
    solution: "Deployed DoQshare's compliant data rooms with custom domains, ensuring legal approval in days instead of weeks.",
    results: [
      {
        metric: "Approval Time",
        value: "5 days",
        description: "Legal team approval",
      },
      {
        metric: "Compliance",
        value: "100%",
        description: "GDPR & SOC2 ready",
      },
    ],
    testimonial: "GDPR and SOC2 compliance out of the box. Our legal team approved DoQshare in days, not weeks. Game changer for us.",
    featured: true,
  },
  {
    id: "unify-ventures",
    company: "Unify Ventures",
    industry: "Venture Capital",
    author: {
      name: "Alex Chen",
      role: "Managing Partner",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
    },
    challenge: "Preventing document leaks and tracking unauthorized sharing of sensitive investment materials.",
    solution: "Implemented dynamic watermarking and granular access controls to identify any document sharing and maintain complete control.",
    results: [
      {
        metric: "Security",
        value: "0 leaks",
        description: "Document breaches",
      },
      {
        metric: "Control",
        value: "100%",
        description: "Access visibility",
      },
    ],
    testimonial: "The dynamic watermarking feature prevents leaks. We know exactly who shared documents externally. Complete control.",
    featured: false,
  },
  {
    id: "townhall-network",
    company: "Townhall Network",
    industry: "Web3",
    author: {
      name: "Sarah Martinez",
      role: "Founder",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
    },
    challenge: "Needed insights into which sections of pitch decks resonated most with investors to improve fundraising materials.",
    solution: "Leveraged page-by-page analytics to identify high-engagement sections and redesigned pitch deck based on real data.",
    results: [
      {
        metric: "Engagement",
        value: "3x",
        description: "Time on key slides",
      },
      {
        metric: "Improvement",
        value: "60%",
        description: "Deck effectiveness",
      },
    ],
    testimonial: "Page-by-page analytics revealed which sections resonated most. We redesigned our pitch deck based on real data, not guesses.",
    featured: false,
  },
  {
    id: "enterprise-solutions",
    company: "Enterprise Solutions",
    industry: "Enterprise Software",
    author: {
      name: "David Kim",
      role: "VP of Sales",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    },
    challenge: "Required white-label document sharing solution that felt native to their brand for client-facing materials.",
    solution: "Deployed DoQshare with custom domain and white-labeling, making it feel like a native part of their platform.",
    results: [
      {
        metric: "Branding",
        value: "100%",
        description: "White-label coverage",
      },
      {
        metric: "Adoption",
        value: "90%",
        description: "Client satisfaction",
      },
    ],
    testimonial: "Custom domain and white-labeling made DoQshare feel native to our brand. Clients never know they're using a third-party tool.",
    featured: false,
  },
  {
    id: "yuno",
    company: "Yuno",
    industry: "SaaS",
    author: {
      name: "Emma Wilson",
      role: "Head of Sales",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    },
    challenge: "Scaling document sharing across 30+ sales team members while maintaining security and tracking engagement.",
    solution: "Standardized on DoQshare for all sales proposals, enabling team-wide sharing with consistent analytics and security.",
    results: [
      {
        metric: "Scale",
        value: "30+",
        description: "Sales team members",
      },
      {
        metric: "Efficiency",
        value: "50%",
        description: "Time saved",
      },
    ],
    testimonial: "DoQshare scaled seamlessly with our team. The analytics help us understand which proposals resonate and close more deals.",
    featured: false,
  },
];

export const CaseStudiesGrid = () => {
  const featuredStudies = caseStudies.filter(cs => cs.featured);
  const otherStudies = caseStudies.filter(cs => !cs.featured);

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how leading companies achieve remarkable results with DoQshare
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Case Studies */}
        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </ScrollAnimation>

        {/* Other Case Studies */}
        <ScrollAnimation delay={0.2}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6 text-center">
              More Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

