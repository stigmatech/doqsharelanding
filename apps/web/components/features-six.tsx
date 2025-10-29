import { Card } from '@workspace/ui/components/card'
import { Upload, Shield, BarChart3, Users } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">How DoqShare Works</h2>
                        <p className="text-muted-foreground mt-4 text-lg">Discover the simple steps to securely share your documents and track their engagement.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card
                            className="overflow-hidden p-6">
                            <Upload className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">1. Upload Your Documents</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Easily upload your PDF, Word, Excel and other format documents securely.</p>

                            <UploadIllustration />
                        </Card>

                        <Card
                            className="group overflow-hidden px-6 pt-6">
                            <Shield className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">2. Share Securely</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Configure access permissions, passwords and expiration dates for your documents.</p>

                            <SecurityIllustration />
                        </Card>
                        <Card
                            className="group overflow-hidden px-6 pt-6">
                            <BarChart3 className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">3. Track Engagement</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Analyze who viewed your documents, when and for how long, with detailed reports.</p>

                            <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                                <AnalyticsIllustration />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

const UploadIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-9 aspect-video p-4">
            <div className="relative h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div>
                <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold">Document Upload</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-muted-foreground">PDF, Word, Excel</span>
            </div>
            <div className="mb-2 flex -space-x-1.5">
                <div className="flex -space-x-1.5">
                    {[
                        { type: 'PDF', color: 'bg-red-500' },
                        { type: 'DOC', color: 'bg-blue-500' },
                        { type: 'XLS', color: 'bg-green-500' },
                    ].map((file, index) => (
                        <div
                            key={index}
                            className={`${file.color} size-7 rounded-md border p-0.5 shadow shadow-zinc-950/5 flex items-center justify-center`}>
                            <span className="text-white text-xs font-bold">{file.type}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-muted-foreground text-sm font-medium">Supported formats</div>
        </Card>
    )
}

const SecurityIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative mt-6">
            <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
                <div className="mb-3 flex items-center gap-2">
                    <Shield className="text-primary size-5" />
                    <span className="text-muted-foreground text-sm font-medium">Security</span>
                    <span className="text-green-500 text-xs">✓</span>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="bg-foreground/10 h-2 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
                </div>

                <div className="ml-8 mt-3 flex gap-2">
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Password</div>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Expiration</div>
                </div>
            </Card>
            <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
                <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
                    <Shield className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
                </div>
            </Card>
        </div>
    )
}

const AnalyticsIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0">
            <div className="w-fit">
                <BarChart3 className="size-3.5 fill-blue-300 stroke-blue-300" />
                <p className="mt-2 line-clamp-2 text-sm">Detailed engagement reports</p>
            </div>
            <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-muted-foreground text-sm">Real-time analytics</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Views: 1.2k</div>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Time: 3.5min</div>
                    </div>

                    <div className="flex items-center gap-1">
                        <Users className="size-4" />
                        <span className="text-xs">24 users</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
