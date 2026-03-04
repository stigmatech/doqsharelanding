import { Card } from '@/components/ui/card'
import { Rocket, Scale, TrendingUp, HeartPulse, DollarSign, Briefcase, FileText, Shield, BarChart3, Users, Lock, CheckCircle } from 'lucide-react'

const StartupIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-9 aspect-video p-4">
            <div className="mb-0.5 text-sm font-semibold">Series A Pitch Deck</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-muted-foreground">3 investors viewed</span>
                <BarChart3 className="text-primary size-4" />
            </div>
            <div className="space-y-2">
                <div className="bg-foreground/10 h-2 rounded-full"></div>
                <div className="bg-foreground/10 h-2 w-4/5 rounded-full"></div>
                <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <FileText className="text-primary size-4" />
                <span className="text-muted-foreground text-sm font-medium">Engagement: 87%</span>
            </div>
        </Card>
    )
}

const LegalIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative mt-6">
            <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
                <div className="mb-3 flex items-center gap-2">
                    <Shield className="text-primary size-5" />
                    <span className="text-muted-foreground text-sm font-medium">GDPR Compliant</span>
                </div>
                <div className="space-y-2">
                    <div className="bg-foreground/10 h-2 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
                </div>
                <CheckCircle className="ml-8 mt-3 size-5 text-green-600" />
            </Card>
            <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
                <Lock className="text-primary m-auto size-6" />
            </Card>
        </div>
    )
}

const MALIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0">
            <div className="w-fit">
                <TrendingUp className="size-3.5 text-primary" />
                <p className="mt-2 line-clamp-2 text-sm font-semibold">Due Diligence Data Room</p>
            </div>
            <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-muted-foreground text-sm">127 documents shared</div>
                <div className="flex items-center gap-2">
                    <Users className="text-primary size-4" />
                    <span className="text-muted-foreground text-xs">12 active viewers</span>
                </div>
            </div>
        </Card>
    )
}

const HealthcareIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-9 aspect-video p-4">
            <div className="mb-0.5 text-sm font-semibold">Patient Records</div>
            <div className="mb-4 flex gap-2 text-sm">
                <Shield className="text-primary size-4" />
                <span className="text-muted-foreground">HIPAA Protected</span>
            </div>
            <div className="space-y-2">
                <div className="bg-foreground/10 h-2 rounded-full"></div>
                <div className="bg-foreground/10 h-2 w-4/5 rounded-full"></div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <Lock className="text-primary size-4" />
                <span className="text-muted-foreground text-sm font-medium">Encrypted & Secure</span>
            </div>
        </Card>
    )
}

const FinanceIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative mt-6">
            <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
                <div className="mb-3 flex items-center gap-2">
                    <DollarSign className="text-primary size-5" />
                    <span className="text-muted-foreground text-sm font-medium">Financial Report</span>
                </div>
                <div className="space-y-2">
                    <div className="bg-foreground/10 h-2 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
                </div>
                <BarChart3 className="ml-8 mt-3 size-5 text-primary" />
            </Card>
            <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
                <Shield className="text-primary m-auto size-6" />
            </Card>
        </div>
    )
}

const ConsultingIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0">
            <div className="w-fit">
                <Briefcase className="size-3.5 text-primary" />
                <p className="mt-2 line-clamp-2 text-sm font-semibold">Client Proposal</p>
            </div>
            <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-muted-foreground text-sm">Analytics Dashboard</div>
                <div className="flex items-center gap-2">
                    <BarChart3 className="text-primary size-4" />
                    <span className="text-muted-foreground text-xs">Page views tracked</span>
                </div>
            </div>
        </Card>
    )
}

const sectors = [
  {
    icon: Rocket,
    title: "Startups & Fundraising",
    description: "Close deals faster with investor engagement tracking. See which investors are most interested in your pitch deck and focus your efforts on the right prospects.",
    illustration: <StartupIllustration />
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Meet GDPR, HIPAA, and SOC2 requirements effortlessly. Complete audit trails, document retention policies, and zero-knowledge architecture.",
    illustration: <LegalIllustration />
  },
  {
    icon: TrendingUp,
    title: "M&A & Due Diligence",
    description: "Streamline M&A transactions with secure virtual data rooms. Organize documents, control access levels, and track engagement throughout the due diligence process.",
    illustration: <MALIllustration />
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    description: "Protect patient data with HIPAA-compliant document sharing. Share medical records, research documents, and clinical data securely.",
    illustration: <HealthcareIllustration />
  },
  {
    icon: DollarSign,
    title: "Finance & Banking",
    description: "Secure financial document sharing for banking, investment, and accounting firms. Share sensitive financial reports with enterprise-grade security.",
    illustration: <FinanceIllustration />
  },
  {
    icon: Briefcase,
    title: "Consulting & Professional Services",
    description: "Deliver client proposals, reports, and strategic documents securely. Track engagement to understand which sections resonate most with clients.",
    illustration: <ConsultingIllustration />
  },
]

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">Built to cover your needs</h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl">
                            From startups raising funds to healthcare providers protecting patient data, 
                            DoQshare adapts to your unique requirements across all industries.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {sectors.map((sector, index) => {
                            const Icon = sector.icon;
                            return (
                                <Card
                                    key={index}
                                    className="group overflow-hidden p-6">
                                    <Icon className="text-primary size-5" />
                                    <h3 className="text-foreground mt-5 text-lg font-semibold">{sector.title}</h3>
                                    <p className="text-muted-foreground mt-3 text-balance">{sector.description}</p>
                                    {sector.illustration}
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
