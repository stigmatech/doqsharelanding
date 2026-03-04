"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookDemoButton } from '@/components/book-demo-button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

export default function HeroSection5() {

    return (
        <main className="overflow-x-hidden">
            <section>
                <div className="py-12 md:pb-8 lg:pb-12 lg:pt-16">
                    <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <div className="mb-8">
                                <Badge variant="secondary" className="mb-4">
                                    Unlimited visitors included in every plan
                                </Badge>
                            </div>
                            
                            <h1 className="mt-4 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl">
                                Find the plan that<br />
                                works for you
                            </h1>
                            
                            <p className="mt-8 max-w-2xl text-balance text-lg">
                                Trusted by top companies worldwide
                            </p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base">
                                    <Link href="https://dashboard.doqshare.com">
                                        <span className="text-nowrap">Start for Free</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>
                                <BookDemoButton
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                                >
                                    <span className="text-nowrap">Book a Demo</span>
                                </BookDemoButton>
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
        </main>
    )
}
