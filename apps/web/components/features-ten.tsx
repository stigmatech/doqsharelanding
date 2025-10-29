import { Card } from '@workspace/ui/components/card'
import { Shield, BarChart3, Users, Lock } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-3xl px-6">
                    <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
                        <span className="text-muted-foreground">Empowering teams with</span> secure document sharing
                    </h2>
                    <div className="mt-12 grid gap-12 sm:grid-cols-2">
                        <div className="col-span-full space-y-4">
                            <Card
                                className="overflow-hidden px-6 sm:col-span-2">
                                <div className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8">
                                    <AnalyticsIllustration />
                                </div>
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Real-time Analytics</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Track document engagement with detailed insights on who viewed, when, and for how long.</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-[1fr_auto] space-y-4">
                            <Card
                                className="p-6">
                                <UploadIllustration />
                            </Card>
                            <div>
                                <h3 className="text-foreground text-lg font-semibold">Easy Document Upload</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Upload PDF, Word, Excel and other formats with drag-and-drop simplicity.</p>
                            </div>
                        </div>

                        <div className="grid grid-rows-[1fr_auto] space-y-4">
                            <Card
                                className="overflow-hidden p-6">
                                <SecurityIllustration />
                            </Card>
                            <div>
                                <h3 className="text-foreground text-lg font-semibold">Advanced Security</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Protect your documents with passwords, expiration dates, and access controls.</p>
                            </div>
                        </div>
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
            className="p-4">
            <div className="relative h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div>
                <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold">Document Upload</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-muted-foreground">Drag & Drop</span>
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
            <div className="text-muted-foreground text-sm font-medium">Multiple formats</div>
        </Card>
    )
}

const SecurityIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative">
            <Card className="aspect-video w-4/5 translate-y-2 p-3">
                <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
                    <Shield className="text-primary size-6" />
                    <div className="flex items-center gap-1">
                        <span className="text-muted-foreground line-clamp-1 text-sm font-medium">Security</span>
                        <span className="text-green-500 text-xs">✓</span>
                    </div>
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
            <Card className="aspect-3/5 absolute right-0 top-4 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
                <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
                    <Lock className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
                </div>
            </Card>
        </div>
    )
}

const AnalyticsIllustration = () => {
    return (
        <Card
            aria-hidden
            className="p-4 transition-transform duration-200 group-hover:translate-y-0">
            <div className="max-w-3/4 ml-auto w-fit">
                <p className="border-foreground/5 bg-foreground/5 mb-2 rounded-l-2xl rounded-t-2xl rounded-br border p-4 text-sm">Document viewed by 24 users in the last hour</p>
                <span className="text-muted-foreground block text-right text-xs">Live</span>
            </div>
            <div className="w-fit">
                <BarChart3 className="size-3.5 fill-blue-300 stroke-blue-300" />
                <p className="mt-2 line-clamp-2 text-sm">Real-time engagement tracking and detailed analytics</p>
            </div>
            <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-muted-foreground text-sm">Analytics Dashboard</div>

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
