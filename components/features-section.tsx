import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, Globe, Play, Plus, Share, BarChart3 } from 'lucide-react'

const USER_AVATAR_1 = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const USER_AVATAR_2 = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const USER_AVATAR_3 = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const USER_AVATAR_4 = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto w-full max-w-2xl px-6 lg:px-0">
                    <div>
                        <h2 className="text-foreground text-balance text-center text-4xl font-semibold">Secure document sharing made simple</h2>
                    </div>
                    <div className="mt-8 space-y-8">
                        <div className="grid items-center gap-6 sm:grid-cols-5">
                            <Card
                                className="p-6 sm:col-span-2">
                                <UploadIllustration />
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Easy Document Upload</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Drag and drop your files or upload from your computer, Google Drive, or Dropbox with automatic optimization.</p>
                            </div>
                        </div>

                        <div className="grid items-center gap-6 sm:grid-cols-5">
                            <Card
                                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip">
                                <ShareIllustration />
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Secure Document Sharing</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Create secure links with custom permissions, passwords, and expiration dates for complete control.</p>
                            </div>
                        </div>

                        <div className="grid items-center gap-6 sm:grid-cols-5">
                            <Card
                                className="overflow-hidden px-6 sm:col-span-2">
                                <div className="mask-b-from-75% -mx-2 -mt-2 px-2 pt-6">
                                    <AnalyticsIllustration />
                                </div>
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Advanced Analytics</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Track engagement with detailed analytics on who viewed your documents, for how long, and which pages were most engaging.</p>
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
            className="aspect-video p-4">
            <div className="relative hidden h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-blue-700 bg-blue-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-blue-500/35">PDF</div>
                <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold">Document Upload</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-muted-foreground">Drag & Drop</span>
            </div>
            <div className="mb-2 flex -space-x-1.5">
                <div className="flex -space-x-1.5">
                    {[
                        { src: USER_AVATAR_1, alt: 'User 1' },
                        { src: USER_AVATAR_2, alt: 'User 2' },
                        { src: USER_AVATAR_3, alt: 'User 3' },
                        { src: USER_AVATAR_4, alt: 'User 4' },
                    ].map((avatar, index) => (
                        <div
                            key={index}
                            className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                            <img
                                className="aspect-square rounded-full object-cover"
                                src={avatar.src}
                                alt={avatar.alt}
                                height="460"
                                width="460"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-muted-foreground text-sm font-medium">Team Collaboration</div>
        </Card>
    )
}

const ShareIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative">
            <Card className="aspect-video w-4/5 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
                <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
                    <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                            className="aspect-square rounded-full object-cover"
                            src={USER_AVATAR_1}
                            alt="User 1"
                            height="460"
                            width="460"
                        />
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-muted-foreground line-clamp-1 text-sm font-medium">Secure Link</span>
                        <span className="text-muted-foreground/75 text-xs">2m</span>
                    </div>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="bg-foreground/10 h-2 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
                </div>

                <Share className="ml-8 mt-3 size-5" />
            </Card>
            <Card className="aspect-3/5 absolute right-0 top-4 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
                <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
                    <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
                </div>
            </Card>
        </div>
    )
}

const AnalyticsIllustration = () => {
    return (
        <Card
            aria-hidden
            className="aspect-video p-4 transition-transform duration-200 group-hover:translate-y-0">
            <div className="w-fit">
                <BarChart3 className="size-3.5 fill-purple-300 stroke-purple-300" />
                <p className="mt-2 line-clamp-2 text-sm">Track document engagement with detailed analytics and insights</p>
            </div>
            <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-muted-foreground text-sm">Analytics Dashboard</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none">
                            <Plus />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none">
                            <Globe />
                        </Button>
                    </div>

                    <Button
                        size="icon"
                        className="size-7 rounded-2xl bg-black">
                        <ArrowUp strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
