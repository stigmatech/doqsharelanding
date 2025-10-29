import { Shield, FileText, Link, Palette, Upload, Users, Lock, BarChart3, Folder, Eye, Settings, CheckCircle, Archive } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">All essential data room features</h2>
                    <p>For secure document sharing</p>
                </div>

                <div className="relative mx-auto grid max-w-6xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FileText className="size-4" />
                            <h3 className="text-sm font-medium">Document Watermarking</h3>
                        </div>
                        <p className="text-sm">Dynamic watermarks with viewer details and custom text</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">NDA & Agreements</h3>
                        </div>
                        <p className="text-sm">Require viewers to accept NDAs before access</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Link className="size-4" />
                            <h3 className="text-sm font-medium">Link Controls</h3>
                        </div>
                        <p className="text-sm">Set expiry dates, password protection, and email verification</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Palette className="size-4" />
                            <h3 className="text-sm font-medium">Custom Branding</h3>
                        </div>
                        <p className="text-sm">White-label data rooms with logos and custom domains</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Upload className="size-4" />
                            <h3 className="text-sm font-medium">Drag & Drop Upload</h3>
                        </div>
                        <p className="text-sm">Easy document and folder uploads with bulk actions</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Team Management</h3>
                        </div>
                        <p className="text-sm">Collaborate with role-based team permissions</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Access Control</h3>
                        </div>
                        <p className="text-sm">Domain & email restrictions with allow/block lists</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-4" />
                            <h3 className="text-sm font-medium">Analytics Dashboard</h3>
                        </div>
                        <p className="text-sm">Track engagement with page-by-page analytics</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Document Security</h3>
                        </div>
                        <p className="text-sm">Military-grade encryption and secure storage</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Folder className="size-4" />
                            <h3 className="text-sm font-medium">Folder Management</h3>
                        </div>
                        <p className="text-sm">Organize documents with nested folders and bulk actions</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Team Collaboration</h3>
                        </div>
                        <p className="text-sm">Invite unlimited team members with custom roles</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Eye className="size-4" />
                            <h3 className="text-sm font-medium">Viewer Tracking</h3>
                        </div>
                        <p className="text-sm">See who views your documents and for how long</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings className="size-4" />
                            <h3 className="text-sm font-medium">Document Controls</h3>
                        </div>
                        <p className="text-sm">Version control and download restrictions</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="size-4" />
                            <h3 className="text-sm font-medium">Data Protection</h3>
                        </div>
                        <p className="text-sm">GDPR compliant with advanced security features</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Archive className="size-4" />
                            <h3 className="text-sm font-medium">Document Management</h3>
                        </div>
                        <p className="text-sm">Version history and document organization</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
