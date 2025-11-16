"use client";

import React, { useState } from 'react'
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
        dataRoomsPlus: true,
    },
    {
        feature: 'Time spent on each page',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Real time feedback',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Document versioning tracking',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Viewer location tracking',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Exclude internal visits',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Unlimited view history',
        free: 'up to 20 last views',
        pro: 'up to 1000 last views',
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Analytics retention',
        free: '30-day analytics retention',
        pro: '1-year analytics retention',
        business: '2-year analytics retention',
        dataRooms: '2-year analytics retention',
        dataRoomsPlus: '3-year analytics retention',
    },
    // Link Settings
    {
        feature: 'Capturing email to view',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Receive email notifications',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Password protection',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Expiration date',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Allow/block document downloading',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Email verification',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Allow/block specified users',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Screenshot protection',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Dynamic watermark',
        free: false,
        pro: false,
        business: false,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'User groups permissions',
        free: false,
        pro: false,
        business: false,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    // Data Rooms and Documents
    {
        feature: 'Unlimited documents',
        free: '50 documents',
        pro: '300 documents',
        business: true,
        dataRooms: true,
        dataRoomsPlus: 'Unlimited encrypted storage',
    },
    {
        feature: 'Unlimited folders',
        free: 'on first level',
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Unlimited data rooms',
        free: false,
        pro: false,
        business: 'Unlimited light datarooms',
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom domain',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Bulk upload',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: 'Automatic file indexing',
    },
    {
        feature: 'Unlimited users',
        free: '1 user',
        pro: '1 users',
        business: '3 users',
        dataRooms: '3 users',
        dataRoomsPlus: '5 users',
    },
    {
        feature: 'Self-hosted option',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
        dataRoomsPlus: 'Enterprise',
    },
    // Custom Branding
    {
        feature: 'Remove DoqShare branding',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom logo',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom favicon',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom colors',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom social media cards',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom domain for documents',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Feedback question on document',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom data room banners',
        free: false,
        pro: false,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Custom domain for data rooms',
        free: false,
        pro: false,
        business: false,
        dataRooms: true,
        dataRoomsPlus: 'Unlimited custom domains for data rooms',
    },
    {
        feature: 'Full white-labeling',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
        dataRoomsPlus: 'Add-on: Full white-labeling',
    },
    {
        feature: 'Single Sign-On (SSO)',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
        dataRoomsPlus: 'Enterprise',
    },
    // Other Features
    {
        feature: 'Notion documents',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Reactions',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Forms',
        free: false,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: 'File requests with permissions',
    },
    {
        feature: 'Communication module',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
        dataRoomsPlus: 'Q&A module with custom permissions',
    },
    // Support
    {
        feature: 'Documentation',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Email support',
        free: true,
        pro: true,
        business: true,
        dataRooms: true,
        dataRoomsPlus: true,
    },
    {
        feature: 'Migration from other document platform',
        free: false,
        pro: '48h support',
        business: '24h support',
        dataRooms: 'Support with self-hosting',
        dataRoomsPlus: 'Dedicated account manager',
    },
    {
        feature: 'Custom features support',
        free: false,
        pro: false,
        business: false,
        dataRooms: 'Enterprise',
        dataRoomsPlus: 'Dedicated account manager',
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
    const [isYearly, setIsYearly] = useState(false)
    
    const pricing = {
        monthly: {
            pro: { price: '$29', name: 'DoQshare Pro', button: 'Choose Pro', yearlyPrice: undefined },
            business: { price: '$79', name: 'DoQshare Business', button: 'Choose Business', yearlyPrice: undefined },
            dataRooms: { price: '$199', name: 'Data Rooms', button: 'Create Data Rooms', yearlyPrice: undefined },
            dataRoomsPlus: { price: '$349', name: 'Data Rooms Plus', button: 'Create Data Rooms Plus', yearlyPrice: undefined }
        },
        yearly: {
            pro: { price: '$19', name: 'DoQshare Pro', button: 'Choose Pro', yearlyPrice: '$228/year' },
            business: { price: '$51', name: 'DoQshare Business', button: 'Choose Business', yearlyPrice: '$612/year' },
            dataRooms: { price: '$129', name: 'Data Rooms', button: 'Create Data Rooms', yearlyPrice: '$1548/year' },
            dataRoomsPlus: { price: '$227', name: 'Data Rooms Plus', button: 'Create Data Rooms Plus', yearlyPrice: '$2724/year' }
        }
    }
    
    const currentPricing = isYearly ? pricing.yearly : pricing.monthly
    
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Compare features</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        See exactly what's included in each plan. All plans include core security features with no hidden fees.
                    </p>
                    
                    {/* Toggle Monthly/Yearly */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            role="switch"
                            aria-checked={isYearly}
                            aria-label="Toggle monthly or yearly pricing"
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    isYearly ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Annually <span className="text-xs text-muted-foreground">(Save up to 35%)</span>
                        </span>
                    </div>
                </div>
                
                <div className="w-full overflow-auto lg:overflow-visible">
                    <table className="w-[250vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
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
                                        <Link href="https://dashboard.doqshare.com">Start sharing</Link>
                                    </Button>
                                </th>
                                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                                    <span className="block text-lg font-semibold">{currentPricing.pro.name}</span>
                                    <div className="text-2xl font-bold">{currentPricing.pro.price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    {isYearly && currentPricing.pro.yearlyPrice && (
                                        <div className="text-xs text-muted-foreground">{currentPricing.pro.yearlyPrice}</div>
                                    )}
                                    <Button
                                        asChild
                                        size="sm">
                                        <Link href="https://dashboard.doqshare.com">{currentPricing.pro.button}</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block text-lg font-semibold">{currentPricing.business.name}</span>
                                    <div className="text-2xl font-bold">{currentPricing.business.price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    {isYearly && currentPricing.business.yearlyPrice && (
                                        <div className="text-xs text-muted-foreground">{currentPricing.business.yearlyPrice}</div>
                                    )}
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="https://dashboard.doqshare.com">{currentPricing.business.button}</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block text-lg font-semibold">{currentPricing.dataRooms.name}</span>
                                    <div className="text-2xl font-bold">{currentPricing.dataRooms.price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    {isYearly && currentPricing.dataRooms.yearlyPrice && (
                                        <div className="text-xs text-muted-foreground">{currentPricing.dataRooms.yearlyPrice}</div>
                                    )}
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="https://dashboard.doqshare.com">{currentPricing.dataRooms.button}</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block text-lg font-semibold">{currentPricing.dataRoomsPlus.name}</span>
                                    <div className="text-2xl font-bold">{currentPricing.dataRoomsPlus.price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                                    {isYearly && currentPricing.dataRoomsPlus.yearlyPrice && (
                                        <div className="text-xs text-muted-foreground">{currentPricing.dataRoomsPlus.yearlyPrice}</div>
                                    )}
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="https://dashboard.doqshare.com">{currentPricing.dataRoomsPlus.button}</Link>
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
                                            <td>
                                                {row.dataRoomsPlus === true ? (
                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                ) : row.dataRoomsPlus === false ? (
                                                    <span className="text-muted-foreground">—</span>
                                                ) : row.dataRoomsPlus ? (
                                                    <span className="text-sm">{row.dataRoomsPlus}</span>
                                                ) : (
                                                    <span className="text-muted-foreground">—</span>
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
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}