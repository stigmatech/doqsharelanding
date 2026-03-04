"use client";

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight, Shield } from 'lucide-react'
import { getCalApi } from "@calcom/embed-react";

interface EnterpriseHeroSectionProps {
    dictionary?: {
        common?: {
            schedule_enterprise_demo?: string;
            schedule_enterprise_demo_button?: string;
        };
    };
}

export default function EnterpriseHeroSection({ dictionary }: EnterpriseHeroSectionProps = {}) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "doqshare" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <main className="overflow-x-hidden">
            <section>
                <div className="py-12 md:pb-8 lg:pb-12 lg:pt-16">
                    <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-4 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl">Enterprise Document Sharing Infrastructure</h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg">Deploy DoQshare on your own infrastructure with advanced security, analytics, white-labelling and complete control for large organizations.</p>

                            {/* Compliance badges */}
                            <div className="flex flex-wrap gap-4 mt-8 mb-8">
                                <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm">
                                    <Shield className="h-4 w-4 text-primary" />
                                    SOC2 Compliant
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm">
                                    <Shield className="h-4 w-4 text-primary" />
                                    HIPAA Compliant
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm">
                                    <Shield className="h-4 w-4 text-primary" />
                                    GDPR & CCPA Compliant
                                </div>
                            </div>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base"
                                    data-cal-namespace="doqshare"
                                    data-cal-link="stigmatech/doqshare"
                                    data-cal-config='{"layout":"month_view"}'
                                    aria-label={dictionary?.common?.schedule_enterprise_demo || "Schedule an enterprise demo with DoQshare"}>
                                    <span className="text-nowrap">{dictionary?.common?.schedule_enterprise_demo_button || "Schedule Enterprise Demo"}</span>
                                    <ChevronRight className="ml-1" />
                                </Button>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                    <Link href="/contact">
                                        <span className="text-nowrap">Contact Enterprise Sales</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
                        <video
                            autoPlay
                            loop
                            className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"></video>
                    </div>
                </div>
            </section>
            <section className="bg-background pb-0">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm">Trusted by leading enterprises</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">NVIDIA</span>
                                </div>

                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">COLUMN</span>
                                </div>

                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">GitHub</span>
                                </div>

                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">NIKE</span>
                                </div>

                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">LEMONSQUEEZY</span>
                                </div>

                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">LARAVEL</span>
                                </div>

                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">LILLY</span>
                                </div>

                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold text-foreground/50">OpenAI</span>
                                </div>
                            </InfiniteSlider>

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
