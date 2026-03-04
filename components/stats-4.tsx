import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, FileText, TrendingUp, Clock, Globe } from "lucide-react";

export default function StatsSection() {
    const stats = [
        {
            icon: Users,
            value: "10K+",
            label: "Active Users",
            description: "Trusted by businesses worldwide",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-900/30"
        },
        {
            icon: FileText,
            value: "1M+",
            label: "Documents Shared",
            description: "Secure document sharing",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-900/30"
        },
        {
            icon: TrendingUp,
            value: "99.9%",
            label: "Uptime",
            description: "Reliable infrastructure",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-900/30"
        },
        {
            icon: Clock,
            value: "24/7",
            label: "Support",
            description: "Always available",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-900/30"
        },
        {
            icon: Globe,
            value: "50+",
            label: "Countries",
            description: "Global presence",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-900/30"
        },
        {
            icon: Shield,
            value: "100%",
            label: "Compliant",
            description: "GDPR, HIPAA, SOC2",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-900/30"
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl space-y-8 px-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold lg:text-5xl">Trusted by industry leaders worldwide</h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our priority is your document security. <span className="font-medium text-foreground">Absolute control over your data</span> — for your deal success.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                                <CardContent className="pt-4 pb-4">
                                    <div className={`inline-flex rounded-full ${stat.bgColor} p-2 mb-3`}>
                                        <Icon className={`h-5 w-5 ${stat.color}`} />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold mb-1 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="font-semibold text-xs md:text-sm mb-1">{stat.label}</div>
                                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:gap-16 mt-8">
                    <div>
                        <p className="text-base md:text-lg">DoQshare supports a complete ecosystem — from products to APIs and platforms helping businesses innovate in their deal processes</p>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 border-primary pl-4 md:pl-6">
                            <p className="text-base md:text-lg italic mb-3">"DoQshare has transformed how we handle sensitive documents. The security features give us complete confidence, while the analytics help us understand engagement like never before. It's exactly what we needed for our business."</p>
                            <div className="space-y-1">
                                <cite className="block font-semibold not-italic text-sm md:text-base">Sarah Chen, VP of Operations</cite>
                                <div className="text-xs md:text-sm text-muted-foreground">Fortune 500 Company</div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
