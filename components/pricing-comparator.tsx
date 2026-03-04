"use client";

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Shield, BarChart3, CheckCircle, Lock, Globe, Users, Star } from 'lucide-react'
import Link from 'next/link'
import { formatPrice } from '@/lib/pricing'

interface PricingComparatorProps {
    dictionary: {
        pricing_comparator: {
            title: string;
            description: string;
            monthly: string;
            annually: string;
            save_up_to: string;
            columns: {
                free: string;
                pro: string;
                business: string;
                data_rooms: string;
                data_rooms_plus: string;
            };
            buttons: {
                start_sharing: string;
                choose_pro: string;
                choose_business: string;
                create_data_rooms: string;
                create_data_rooms_plus: string;
            };
            sections: {
                analytics: string;
                links: string;
                data_rooms: string;
                branding: string;
                other: string;
                support: string;
            };
            inline_values: {
                unlimited_custom_domains_datarooms_plus: string;
                white_labeling_addon: string;
                file_requests_permissions: string;
                qa_module_custom_permissions: string;
                support_48h: string;
                support_24h: string;
                support_self_hosting: string;
                dedicated_account_manager: string;
                up_to_20_views: string;
                up_to_1000_views: string;
                retention_30_days: string;
                retention_1_year: string;
                retention_2_years: string;
                retention_3_years: string;
                documents_50: string;
                documents_300: string;
                unlimited_encrypted_storage: string;
                folders_first_level: string;
                unlimited_light_datarooms: string;
                automatic_file_indexing: string;
                users_1: string;
                users_3: string;
                users_5: string;
            };
        };
        pricing1: {
            period_monthly: string;
            period_yearly: string;
        };
        pricing2: {
            features: { [key: string]: string };
        };
    };
    lang?: string;
}

export default function PricingComparator({ dictionary, lang = "en" }: PricingComparatorProps) {
    const [isYearly, setIsYearly] = useState(false)
    const pc = dictionary.pricing_comparator;
    const p1 = dictionary.pricing1;

    const tableData = useMemo(() => [
        // Document Analytics and Tracking
        {
            feature: dictionary.pricing2.features.unlimited_views,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.time_spent,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.real_time_feedback,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.versioning_tracking,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.location_tracking,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.exclude_internal,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.unlimited_view_history,
            free: pc.inline_values.up_to_20_views,
            pro: pc.inline_values.up_to_1000_views,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.analytics_retention,
            free: pc.inline_values.retention_30_days,
            pro: pc.inline_values.retention_1_year,
            business: pc.inline_values.retention_2_years,
            dataRooms: pc.inline_values.retention_2_years,
            dataRoomsPlus: pc.inline_values.retention_3_years,
        },
        // Link Settings
        {
            feature: dictionary.pricing2.features.capturing_email,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.email_notifications,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.password_protection,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.expiration_date,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.allow_downloading,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.email_verification,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.allow_specified_users,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.screenshot_protection,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.dynamic_watermark,
            free: false,
            pro: false,
            business: false,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.user_groups,
            free: false,
            pro: false,
            business: false,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        // Data Rooms and Documents
        {
            feature: dictionary.pricing2.features.unlimited_documents,
            free: pc.inline_values.documents_50,
            pro: pc.inline_values.documents_300,
            business: true,
            dataRooms: true,
            dataRoomsPlus: pc.inline_values.unlimited_encrypted_storage,
        },
        {
            feature: dictionary.pricing2.features.unlimited_folders,
            free: pc.inline_values.folders_first_level,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.unlimited_datarooms,
            free: false,
            pro: false,
            business: pc.inline_values.unlimited_light_datarooms,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.custom_domain,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.bulk_upload,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: pc.inline_values.automatic_file_indexing,
        },
        {
            feature: dictionary.pricing2.features.unlimited_users,
            free: pc.inline_values.users_1,
            pro: pc.inline_values.users_1,
            business: pc.inline_values.users_3,
            dataRooms: pc.inline_values.users_3,
            dataRoomsPlus: pc.inline_values.users_5,
        },
        {
            feature: dictionary.pricing2.features.self_hosted,
            free: false,
            pro: false,
            business: false,
            dataRooms: 'Enterprise',
            dataRoomsPlus: 'Enterprise',
        },
        // Custom Branding
        {
            feature: dictionary.pricing2.features.remove_branding,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.custom_logo,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.custom_favicon,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.custom_colors,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.social_media_cards,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.custom_domain_docs,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.feedback_question,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.dataroom_banners,
            free: false,
            pro: false,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.custom_domain_datarooms,
            free: false,
            pro: false,
            business: false,
            dataRooms: true,
            dataRoomsPlus: pc.inline_values.unlimited_custom_domains_datarooms_plus,
        },
        {
            feature: dictionary.pricing2.features.white_labeling,
            free: false,
            pro: false,
            business: false,
            dataRooms: 'Enterprise',
            dataRoomsPlus: pc.inline_values.white_labeling_addon,
        },
        {
            feature: dictionary.pricing2.features.sso,
            free: false,
            pro: false,
            business: false,
            dataRooms: 'Enterprise',
            dataRoomsPlus: 'Enterprise',
        },
        // Other Features
        {
            feature: dictionary.pricing2.features.notion_docs,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.reactions,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.forms,
            free: false,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: pc.inline_values.file_requests_permissions,
        },
        {
            feature: dictionary.pricing2.features.communication_module,
            free: false,
            pro: false,
            business: false,
            dataRooms: 'Enterprise',
            dataRoomsPlus: pc.inline_values.qa_module_custom_permissions,
        },
        // Support
        {
            feature: dictionary.pricing2.features.documentation,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.email_support,
            free: true,
            pro: true,
            business: true,
            dataRooms: true,
            dataRoomsPlus: true,
        },
        {
            feature: dictionary.pricing2.features.migration_support,
            free: false,
            pro: pc.inline_values.support_48h,
            business: pc.inline_values.support_24h,
            dataRooms: pc.inline_values.support_self_hosting,
            dataRoomsPlus: pc.inline_values.dedicated_account_manager,
        },
        {
            feature: dictionary.pricing2.features.custom_features,
            free: false,
            pro: false,
            business: false,
            dataRooms: 'Enterprise',
            dataRoomsPlus: pc.inline_values.dedicated_account_manager,
        },
    ], [dictionary, lang]);

    const sections = useMemo(() => [
        { title: pc.sections.analytics, icon: BarChart3, start: 0, end: 8 },
        { title: pc.sections.links, icon: Lock, start: 8, end: 17 },
        { title: pc.sections.data_rooms, icon: Globe, start: 17, end: 24 },
        { title: pc.sections.branding, icon: Shield, start: 24, end: 35 },
        { title: pc.sections.other, icon: Users, start: 35, end: 39 },
        { title: pc.sections.support, icon: Users, start: 39, end: 43 },
    ], [pc]);

    const pricing = useMemo(() => ({
        monthly: {
            pro: { price: formatPrice(29, lang), name: 'DoQshare Pro', button: pc.buttons.choose_pro, yearlyPrice: undefined },
            business: { price: formatPrice(79, lang), name: 'DoQshare Business', button: pc.buttons.choose_business, yearlyPrice: undefined },
            dataRooms: { price: formatPrice(199, lang), name: pc.columns.data_rooms, button: pc.buttons.create_data_rooms, yearlyPrice: undefined },
            dataRoomsPlus: { price: formatPrice(349, lang), name: pc.columns.data_rooms_plus, button: pc.buttons.create_data_rooms_plus, yearlyPrice: undefined }
        },
        yearly: {
            pro: { price: formatPrice(19, lang), name: 'DoQshare Pro', button: pc.buttons.choose_pro, yearlyPrice: `${formatPrice(228, lang)}${p1.period_yearly}` },
            business: { price: formatPrice(51, lang), name: 'DoQshare Business', button: pc.buttons.choose_business, yearlyPrice: `${formatPrice(612, lang)}${p1.period_yearly}` },
            dataRooms: { price: formatPrice(129, lang), name: pc.columns.data_rooms, button: pc.buttons.create_data_rooms, yearlyPrice: `${formatPrice(1548, lang)}${p1.period_yearly}` },
            dataRoomsPlus: { price: formatPrice(227, lang), name: pc.columns.data_rooms_plus, button: pc.buttons.create_data_rooms_plus, yearlyPrice: `${formatPrice(2724, lang)}${p1.period_yearly}` }
        }
    }), [lang, pc, p1]);

    const currentPricing = isYearly ? pricing.yearly : pricing.monthly

    return (
        <section className="py-12 lg:py-16 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl font-bold mb-4">{pc.title}</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        {pc.description}
                    </p>

                    {/* Toggle Monthly/Yearly */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {pc.monthly}
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            role="switch"
                            aria-checked={isYearly}
                            aria-label="Toggle monthly or yearly pricing"
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {pc.annually} <span className="text-xs text-muted-foreground">({pc.save_up_to})</span>
                        </span>
                    </div>
                </div>

                <div className="w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 bg-card rounded-lg shadow-sm border border-border">
                    <table className="w-full min-w-[800px] border-separate border-spacing-x-3 md:w-full">
                        <thead className="bg-muted/50 sticky top-0 z-10">
                            <tr className="*:py-4 *:text-left *:font-medium">
                                <th className="lg:w-2/5"></th>
                                <th className="space-y-3">
                                    <span className="block text-lg font-semibold">{pc.columns.free}</span>
                                    <div className="text-2xl font-bold">{formatPrice(0, lang)}<span className="text-sm font-normal text-muted-foreground">{p1.period_monthly}</span></div>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="https://dashboard.doqshare.com">{pc.buttons.start_sharing}</Link>
                                    </Button>
                                </th>
                                <th className="bg-muted rounded-t-lg space-y-3 px-4">
                                    <span className="block text-lg font-semibold">{currentPricing.pro.name}</span>
                                    <div className="text-2xl font-bold">{currentPricing.pro.price}<span className="text-sm font-normal text-muted-foreground">{p1.period_monthly}</span></div>
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
                                    <div className="text-2xl font-bold">{currentPricing.business.price}<span className="text-sm font-normal text-muted-foreground">{p1.period_monthly}</span></div>
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
                                    <div className="text-2xl font-bold">{currentPricing.dataRooms.price}<span className="text-sm font-normal text-muted-foreground">{p1.period_monthly}</span></div>
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
                                    <div className="text-2xl font-bold">{currentPricing.dataRoomsPlus.price}<span className="text-sm font-normal text-muted-foreground">{p1.period_monthly}</span></div>
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
                                <td className="bg-muted rounded-b-lg border-none px-4"></td>
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