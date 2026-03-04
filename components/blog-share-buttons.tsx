"use client";

import { Button } from "@/components/ui/button";
import { Share2, Twitter, Linkedin, Facebook, Link2, Copy, Check } from "lucide-react";
import { useState } from "react";

interface BlogShareButtonsProps {
  title: string;
  slug: string;
  excerpt?: string;
  dictionary?: {
    common?: {
      share?: string;
      copied?: string;
      copy_link?: string;
    };
  };
}

export function BlogShareButtons({ title, slug, excerpt, dictionary }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://doqshare.com";
  const url = `${baseUrl}/blog/${slug}`;
  const shareText = excerpt || title;
  
  const shareLabel = dictionary?.common?.share || "Share:";
  const copiedLabel = dictionary?.common?.copied || "Copied!";
  const copyLinkLabel = dictionary?.common?.copy_link || "Copy Link";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy link", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const handleShare = async (platform: "twitter" | "linkedin" | "facebook") => {
    const shareUrl = shareLinks[platform];
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-6 border-t">
      <span className="text-sm font-medium text-muted-foreground">{shareLabel}</span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("twitter")}
          aria-label={`${shareLabel} Twitter`}
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("linkedin")}
          aria-label={`${shareLabel} LinkedIn`}
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("facebook")}
          aria-label={`${shareLabel} Facebook`}
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          aria-label={copyLinkLabel}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              {copiedLabel}
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4 mr-2" />
              {copyLinkLabel}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

