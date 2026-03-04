"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin
} from "lucide-react";

interface ModernFooterProps {
  dictionary: {
    footer: {
      description: string;
      sections: {
        product: string;
        solutions_for: string;
        support: string;
        resources: string;
        legal: string;
      };
      links: {
        data_room: string;
        enterprise: string;
        page_by_page_analytics: string;
        features: string;
        how_it_works: string;
        startups: string;
        freelancers: string;
        education: string;
        legal_data_room: string;
        real_estate_data_room: string;
        help_center: string;
        contact: string;
        security: string;
        blog: string;
        pricing: string;
        privacy: string;
        terms: string;
        cookies: string;
      };
      copyright: string;
    };
  };
  lang: string;
}

export default function ModernFooter({ dictionary, lang }: ModernFooterProps) {
  const getLink = (path: string) => path.startsWith("http") ? path : `/${lang}${path}`;

  const footerLinks = {
    product: [
      { name: dictionary.footer.links.data_room, href: "/data-room" },
      { name: dictionary.footer.links.enterprise, href: "/enterprise" },
      { name: dictionary.footer.links.page_by_page_analytics, href: "/analytics" },
      { name: dictionary.footer.links.features, href: "/features" },
      { name: dictionary.footer.links.how_it_works, href: "/how-it-works" },
    ],
    company: [
      { name: dictionary.footer.links.startups, href: "/startups" },
      { name: dictionary.footer.links.enterprise, href: "/enterprise" },
      { name: dictionary.footer.links.freelancers, href: "/freelance" },
      { name: dictionary.footer.links.education, href: "/education" },
      { name: dictionary.footer.links.legal_data_room, href: "/legal-data-room" },
      { name: dictionary.footer.links.real_estate_data_room, href: "/real-estate-data-room" },
    ],
    support: [
      { name: dictionary.footer.links.help_center, href: "/help" },
      { name: dictionary.footer.links.contact, href: "/contact" },
      { name: dictionary.footer.links.security, href: "/security" },
    ],
    resources: [
      { name: dictionary.footer.links.blog, href: "/blog" },
      { name: dictionary.footer.links.help_center, href: "/help" },
      { name: dictionary.footer.links.pricing, href: "/pricing" },
    ],
    legal: [
      { name: dictionary.footer.links.privacy, href: "/privacy" },
      { name: dictionary.footer.links.terms, href: "/terms" },
      { name: dictionary.footer.links.cookies, href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/doqshare", icon: Facebook },
    { name: "Twitter", href: "https://x.com/DoQshare", icon: Twitter },
    { name: "Instagram", href: "https://www.instagram.com/doqshare/", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/doqshare0/", icon: Linkedin },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">DoQshare</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {dictionary.footer.description}
            </p>
          </div> 

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">{dictionary.footer.sections.product}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={getLink(link.href)}
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
            <h4 className="font-semibold mb-4">{dictionary.footer.sections.solutions_for}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={getLink(link.href)}
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
            <h4 className="font-semibold mb-4">{dictionary.footer.sections.support}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={getLink(link.href)}
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
            <h4 className="font-semibold mb-4">{dictionary.footer.sections.resources}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={getLink(link.href)}
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
            <h4 className="font-semibold mb-4">{dictionary.footer.sections.legal}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={getLink(link.href)}
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
            {dictionary.footer.copyright}
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
