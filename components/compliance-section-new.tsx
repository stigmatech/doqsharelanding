"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, CheckCircle } from 'lucide-react'
import TrackedSection from "@/components/analytics/tracked-section";

const complianceStandards = [
  {
    name: "SOC 2",
    description: "Service Organization Control compliance with commitment to full security and data protection.",
    icon: Shield,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
  },
  {
    name: "HIPAA",
    description: "Healthcare industry specific compliance with full data protection and privacy monitoring.",
    icon: CheckCircle,
    image: "/images/HIPAA_Compliant_Gray_100kb.png"
  },
  {
    name: "GDPR",
    description: "Full compliance with European General Data Protection Regulation requirements.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
  },
  {
    name: "CCPA",
    description: "California Consumer Privacy Act compliance for data protection and privacy rights.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg"
  },
  {
    name: "PIPEDA",
    description: "Personal Information Protection and Electronic Documents Act compliance for Canadian privacy.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
  },
  {
    name: "Loi 25",
    description: "Quebec's Law 25 compliance for modern privacy and data protection requirements.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
  }
];

const ComplianceCard = ({ name, description, icon: Icon, image }: { 
  name: string; 
  description: string; 
  icon?: React.ComponentType<{ className?: string }>; 
  image?: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="h-12 w-12 object-contain dark:invert opacity-80"
          />
        ) : Icon ? (
          <Icon className="h-12 w-12 text-primary" />
        ) : null}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default function ComplianceSectionNew() {
  return (
    <TrackedSection sectionName="compliance">
      <section className="bg-muted/30 dark:bg-background py-24 md:py-32">
        <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
            <div className="space-y-6">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                Security as DNA for compliance
              </h2>
              <p className="text-muted-foreground">
                Our priority is your document security. We know that the key to deal success is absolute control over your data. 
                Stay compliant with privacy and healthcare regulations across multiple jurisdictions. Our zero-knowledge architecture 
                ensures we cannot access your documents - your data remains yours, always.
              </p>
              <Button
                variant="outline"
                size="sm"
                asChild>
                <Link href="/security">Learn More</Link>
              </Button>
            </div>

            <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
              <div className="bg-background flex aspect-square items-center justify-center border rounded-lg">
                <Shield className="size-9 text-primary" />
              </div>
              <blockquote>
                <p className="text-sm text-muted-foreground">
                  "DoQshare's compliance features give us confidence when handling sensitive deal documents. 
                  The multi-regulation support is exactly what we need."
                </p>
                <div className="mt-2 flex gap-2 text-sm">
                  <cite className="font-medium">Alex Chen</cite>
                  <p className="text-muted-foreground">Managing Partner, Unify Ventures</p>
                </div>
              </blockquote>
            </div>
          </div>

          <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
            <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
              <div className="grid grid-cols-2 gap-2">
                {complianceStandards.map((standard, index) => (
                  <ComplianceCard
                    key={index}
                    name={standard.name}
                    description={standard.description}
                    icon={standard.icon}
                    image={standard.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </TrackedSection>
  )
}

