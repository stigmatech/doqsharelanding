import { Card } from '@workspace/ui/components/card'
import { Input } from '@workspace/ui/components/input'
import { Textarea } from '@workspace/ui/components/textarea'
import { Button } from '@workspace/ui/components/button'
import { Label } from '@workspace/ui/components/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Contact DoqShare</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">General Inquiries</h2>
                            <Link
                                href="mailto:hello@doqshare.com"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                hello@doqshare.com
                            </Link>
                            <p className="mt-3 text-sm">(450) 111-2233</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Enterprise Sales</h3>
                            <Link
                                href="mailto:sales@doqshare.com"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                sales@doqshare.com
                            </Link>
                            <p className="mt-3 text-sm">(450) 111-2233</p>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form
                    action=""
                    className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold">Get in touch with DoqShare</h3>
                        <p className="mt-4 text-sm">Contact our team to learn more about our secure document sharing platform and how it can benefit your business.</p>

                        <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="space-y-2">
                                    Full name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="space-y-2">
                                    Work Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="country"
                                    className="space-y-2">
                                    Country/Region
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Canada</SelectItem>
                                        <SelectItem value="2">United States</SelectItem>
                                        <SelectItem value="3">France</SelectItem>
                                        <SelectItem value="4">United Kingdom</SelectItem>
                                        <SelectItem value="5">Germany</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="website"
                                    className="space-y-2">
                                    Company Website
                                </Label>
                                <Input
                                    type="url"
                                    id="website"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="job"
                                    className="space-y-2">
                                    Job function
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a job function" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Startup/Entrepreneur</SelectItem>
                                        <SelectItem value="2">Real Estate</SelectItem>
                                        <SelectItem value="3">Legal</SelectItem>
                                        <SelectItem value="4">Healthcare</SelectItem>
                                        <SelectItem value="5">Finance</SelectItem>
                                        <SelectItem value="6">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="msg"
                                    className="space-y-2">
                                    Message
                                </Label>
                                <Textarea
                                    id="msg"
                                    rows={3}
                                />
                            </div>
                            <Button>Submit</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
