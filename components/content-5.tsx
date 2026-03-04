import { Shield, BarChart3, Users, Zap } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">DoQshare brings together secure document sharing, analytics and collaboration.</h2>
                    <p>DoQshare is evolving to be more than just document sharing. It supports an entire ecosystem — from secure data rooms to analytics and platforms helping businesses and teams collaborate effectively.</p>
                </div>
                <img className="rounded-(--radius) grayscale" src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="team collaboration" height="" width="" loading="lazy" />

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Fast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Lightning-fast document upload and sharing with optimized performance.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-4" />
                            <h3 className="text-sm font-medium">Analytics</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Detailed insights into document engagement and viewer behavior.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Secure</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Enterprise-grade security with encryption and access controls.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Collaborative</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Team collaboration with role-based permissions and real-time updates.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
