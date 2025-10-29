"use client";

import Link from "next/link";
import { Separator } from "@workspace/ui/components/separator";
import NewsletterForm from "@/components/forms/newsletter-form";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Pricing", href: "/pricing" },
    { name: "Data Room", href: "/data-room" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Page by Page Analytics", href: "#" },
    { name: "Dynamic Watermarking", href: "#" },
    { name: "Screenshot Protection", href: "#" },
    { name: "Password Protection", href: "#" },
    { name: "One-Click NDA", href: "#" },
    { name: "AI Document Assistant", href: "#" },
    { name: "Notion Sharing", href: "#" },
    { name: "Secure File Sharing", href: "#" },
  ],
  company: [
    { name: "Startups", href: "#" },
    { name: "Fundraising", href: "#" },
    { name: "Document Tracking", href: "#" },
    { name: "Legal Document Sharing", href: "#" },
    { name: "Document Sharing", href: "#" },
    { name: "Investor Update Software", href: "#" },
    { name: "Pitch Deck Sharing", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "What is a Data Room?", href: "#" },
    { name: "What is a Deal Room?", href: "#" },
    { name: "Create Shareable Link", href: "#" },
    { name: "Link Permissions", href: "#" },
    { name: "Custom Domain", href: "#" },
    { name: "Document Versions", href: "#" },
    { name: "Track Time on Document", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "API Reference", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "License", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
];

export default function ModernFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay informed</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm 
              source="footer"
              placeholder="Your email address"
              buttonText="Subscribe"
            />
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">DoqShare</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The modern platform for sharing and collaborating on your documents securely and efficiently.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <Link 
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(450) 111-2233</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Laval, Québec</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions for</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 DoQshare. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
