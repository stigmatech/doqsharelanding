import React from 'react'
import { Button } from '@workspace/ui/components/button'
import { Shield, BarChart3, CheckCircle, Lock, Globe, Users } from 'lucide-react'
import Link from 'next/link'

const tableData = [
    // Document Analytics and Tracking
    {
        feature: 'Unlimited views recorded',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Time spent on each page',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Real time feedback',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Document versioning tracking',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Viewer location tracking',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Exclude internal visits',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Unlimited view history',
        free: 'up to 20 last views',
        pro: 'up to 1000 last views',
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Analytics retention',
        free: '30-day analytics retention',
        pro: '1-year analytics retention',
        business: '2-year analytics retention',
        dataRooms: '2-year analytics retention',
    },
    // Link Settings
    {
        feature: 'Capturing email to view',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Receive email notifications',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Password protection',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Expiration date',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Allow/block document downloading',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Email verification',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Allow/block specified users',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Screenshot protection',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Dynamic watermark',
        free: false,
        pro: false,
        business: false,
        dataRooms: true,
    },
    {
        feature: 'User groups permissions',
        free: false,
        pro: false,
        business: false,
        dataRooms: true,
    },
    // Data Rooms and Documents
    {
        feature: 'Unlimited documents',
        free: '50 documents',
        pro: '300 documents',
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Unlimited folders',
        free: 'on first level',
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Unlimited data rooms',
        free: false,
        pro: false,
        business: 'Unlimited light datarooms',
        dataRooms: true,
    },
    {
        feature: 'Custom domain',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Bulk upload',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Unlimited users',
        free: '1 user',
        pro: '1 users',
        business: '3 users',
        dataRooms: '3 users',
    },
    {
        feature: 'Self-hosted option',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
    },
    // Custom Branding
    {
        feature: 'Remove DoqShare branding',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Custom logo',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Custom favicon',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Custom colors',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Custom social media cards',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Custom domain for documents',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Feedback question on document',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Custom data room banners',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Custom domain for data rooms',
        free: false,
        pro: false,
        business: false,
        dataRooms: true,
    },
    {
        feature: 'Full white-labeling',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
    },
    {
        feature: 'Single Sign-On (SSO)',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
    },
    // Other Features
    {
        feature: 'Notion documents',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Reactions',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Forms',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Communication module',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
    },
    // Support
    {
        feature: 'Documentation',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Email support',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
    },
    {
        feature: 'Migration from other document platform',
        free: false,
        pro: '48h support',
        business: '24h support',
        dataRooms: 'Support with self-hosting',
    },
    {
        feature: 'Custom features support',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
    },
]

const sections = [
    { title: 'Document Analytics and Tracking', icon: BarChart3, start: 0, end: 8 },
    { title: 'Link Settings', icon: Lock, start: 8, end: 17 },
    { title: 'Data Rooms and Documents', icon: Globe, start: 17, end: 24 },
    { title: 'Custom Branding', icon: Shield, start: 24, end: 35 },
    { title: 'Other Features', icon: Users, start: 35, end: 39 },
    { title: 'Support', icon: Users, start: 39, end: 43 },
]

export default function PricingComparator() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Compare features</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        See exactly what's included in each plan. All plans include core security features with no hidden fees.
                    </p>
                </div>
                
                <div className="w-full overflow-auto lg:overflow-visible">
                    <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
                        <thead className="bg-background sticky top-0">
                            <tr className="*:py-4 *:text-left *:font-medium">
                                <th className="lg:w-2/5"></th>
                                <th className="space-y-3">
                                    <span className="block text-lg font-semibold">Free</span>
                                    <div className="text-2xl font-bold">$0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="#">Start sharing</Link>
                                    </Button>
                                </th>
                                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                                    <span className="block text-lg font-semibold">Pro</span>
                                    <div className="text-2xl font-bold">$26<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    <Button
                                        asChild
                                        size="sm">
                                        <Link href="#">Choose Pro</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block text-lg font-semibold">Business</span>
                                    <div className="text-2xl font-bold">$64<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="#">Choose Business</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block text-lg font-semibold">Data Rooms</span>
                                    <div className="text-2xl font-bold">$107<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="#">Create Data Rooms</Link>
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-caption text-sm">
                            {sections.map((section, sectionIndex) => (
                                <React.Fragment key={sectionIndex}>
                                    <tr className="*:py-3">
                                        <td className="flex items-center gap-2 font-medium">
                                            <section.icon className="size-4" />
                                            <span>{section.title}</span>
                                        </td>
                                        <td></td>
                                        <td className="bg-muted border-none px-4"></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    {tableData.slice(section.start, section.end).map((row, index) => (
                                        <tr
                                            key={index}
                                            className="*:border-b *:py-3">
                                            <td className="text-muted-foreground">{row.feature}</td>
                                            <td>
                                                {row.free === true ? (
                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                ) : row.free === false ? (
                                                    <span className="text-muted-foreground">—</span>
                                                ) : (
                                                    <span className="text-sm">{row.free}</span>
                                                )}
                                            </td>
                                            <td className="bg-muted border-none px-4">
                                                <div className="-mb-3 border-b py-3">
                                                    {row.pro === true ? (
                                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                                    ) : row.pro === false ? (
                                                        <span className="text-muted-foreground">—</span>
                                                    ) : (
                                                        <span className="text-sm">{row.pro}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                {row.business === true ? (
                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                ) : row.business === false ? (
                                                    <span className="text-muted-foreground">—</span>
                                                ) : (
                                                    <span className="text-sm">{row.business}</span>
                                                )}
                                            </td>
                                            <td>
                                                {row.dataRooms === true ? (
                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                ) : row.dataRooms === false ? (
                                                    <span className="text-muted-foreground">—</span>
                                                ) : (
                                                    <span className="text-sm">{row.dataRooms}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                            <tr className="*:py-6">
                                <td></td>
                                <td></td>
                                <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}