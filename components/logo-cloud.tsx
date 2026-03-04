"use client";

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import LogoImage from '@/components/ui/logo-image'

interface LogoCloudProps {
    dictionary?: {
        logo_cloud: {
            text: string;
        };
    };
}

export default function LogoCloud({ dictionary }: LogoCloudProps) {
    const text = dictionary?.logo_cloud?.text || "Powering the best teams";

    return (
        <section className="bg-background overflow-hidden py-8 lg:py-10">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">{text}</p>
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

                        <div className="bg-gradient-to-r from-background to-transparent absolute inset-y-0 left-0 w-32 z-10"></div>
                        <div className="bg-gradient-to-l from-background to-transparent absolute inset-y-0 right-0 w-32 z-10"></div>
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
    )
}
