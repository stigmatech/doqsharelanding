export default function StatsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Trusted by industry leaders worldwide</h2>
                    <p>
                        Our priority is your document security. <span className="font-medium">Absolute control over your data</span> — for your deal success.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>DoqShare supports a complete ecosystem — from products to APIs and platforms helping businesses innovate in their deal processes</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">99.9%</div>
                                <p>Uptime</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">24/7</div>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>DoqShare has transformed how we handle sensitive documents. The security features give us complete confidence, while the analytics help us understand engagement like never before. It's exactly what we needed for our business.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Sarah Chen, VP of Operations</cite>
                                <div className="text-sm text-muted-foreground">Fortune 500 Company</div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
