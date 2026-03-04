"use client";

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { useForm } from '@/hooks/use-form'
import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

interface ContactSectionProps {
    dictionary: {
        contact_page: {
            title: string;
            general_inquiries: {
                title: string;
                email: string;
                phone: string;
            };
            enterprise_sales: {
                title: string;
                email: string;
                phone: string;
            };
            form: {
                title: string;
                description: string;
                full_name: string;
                work_email: string;
                country_region: string;
                select_country: string;
                company_website: string;
                job_function: string;
                select_job_function: string;
                message: string;
                submit: string;
                countries: {
                    canada: string;
                    united_states: string;
                    france: string;
                    united_kingdom: string;
                    germany: string;
                };
                job_functions: {
                    startup: string;
                    real_estate: string;
                    legal: string;
                    healthcare: string;
                    finance: string;
                    other: string;
                };
            };
            feedback?: {
                success_title: string;
                success_description: string;
                error_title: string;
                error_description: string;
            };
        };
    };
}

export default function ContactSection({ dictionary }: ContactSectionProps) {
    const contact = dictionary.contact_page;
    const successTitle = contact.feedback?.success_title || "Message envoyé !";
    const successDescription = contact.feedback?.success_description || "Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.";
    const errorTitle = contact.feedback?.error_title || "Erreur";
    const errorDescription = contact.feedback?.error_description || "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        website: '',
        job: '',
        message: ''
    });

    const { isSubmitting, isSuccess, error, submitForm } = useForm();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitForm('/api/contact', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSelectChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    if (isSuccess) {
        return (
            <section className="py-32">
                <div className="mx-auto max-w-4xl px-4 lg:px-0">
                    <Card className="mx-auto max-w-lg p-12 text-center">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-green-800">{successTitle}</h2>
                        <p className="mt-4 text-muted-foreground">{successDescription}</p>
                        <Button className="mt-8" onClick={() => window.location.reload()}>
                            {contact.form.submit}
                        </Button>
                    </Card>
                </div>
            </section>
        );
    }

    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">{contact.title}</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">{contact.general_inquiries.title}</h2>
                            <Link
                                href={`mailto:${contact.general_inquiries.email}`}
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                {contact.general_inquiries.email}
                            </Link>
                            <p className="mt-3 text-sm">{contact.general_inquiries.phone}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">{contact.enterprise_sales.title}</h3>
                            <Link
                                href={`mailto:${contact.enterprise_sales.email}`}
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                {contact.enterprise_sales.email}
                            </Link>
                            <p className="mt-3 text-sm">{contact.enterprise_sales.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form
                    onSubmit={handleSubmit}
                    className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold">{contact.form.title}</h3>
                        <p className="mt-4 text-sm">{contact.form.description}</p>

                        <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                            {error && (
                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span className="font-medium">{errorTitle}!</span> {error || errorDescription}
                                </div>
                            )}
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="space-y-2">
                                    {contact.form.full_name}
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="space-y-2">
                                    {contact.form.work_email}
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="country"
                                    className="space-y-2">
                                    {contact.form.country_region}
                                </Label>
                                <Select onValueChange={(v) => handleSelectChange('country', v)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={contact.form.select_country} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={contact.form.countries.canada}>{contact.form.countries.canada}</SelectItem>
                                        <SelectItem value={contact.form.countries.united_states}>{contact.form.countries.united_states}</SelectItem>
                                        <SelectItem value={contact.form.countries.france}>{contact.form.countries.france}</SelectItem>
                                        <SelectItem value={contact.form.countries.united_kingdom}>{contact.form.countries.united_kingdom}</SelectItem>
                                        <SelectItem value={contact.form.countries.germany}>{contact.form.countries.germany}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="website"
                                    className="space-y-2">
                                    {contact.form.company_website}
                                </Label>
                                <Input
                                    type="url"
                                    id="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="job"
                                    className="space-y-2">
                                    {contact.form.job_function}
                                </Label>
                                <Select onValueChange={(v) => handleSelectChange('job', v)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={contact.form.select_job_function} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={contact.form.job_functions.startup}>{contact.form.job_functions.startup}</SelectItem>
                                        <SelectItem value={contact.form.job_functions.real_estate}>{contact.form.job_functions.real_estate}</SelectItem>
                                        <SelectItem value={contact.form.job_functions.legal}>{contact.form.job_functions.legal}</SelectItem>
                                        <SelectItem value={contact.form.job_functions.healthcare}>{contact.form.job_functions.healthcare}</SelectItem>
                                        <SelectItem value={contact.form.job_functions.finance}>{contact.form.job_functions.finance}</SelectItem>
                                        <SelectItem value={contact.form.job_functions.other}>{contact.form.job_functions.other}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="message"
                                    className="space-y-2">
                                    {contact.form.message}
                                </Label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    required
                                />
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        {contact.form.submit}...
                                    </>
                                ) : (
                                    contact.form.submit
                                )}
                            </Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
