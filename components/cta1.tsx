import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTA1Props {
  dictionary: {
    cta1: {
      badge: string;
      title: string;
      description: string;
      button_call: string;
      button_signup: string;
    };
  };
  lang: string;
}

export const CTA1 = ({ dictionary, lang }: CTA1Props) => (
  <div className="w-full py-12 lg:py-16">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>{dictionary.cta1.badge}</Badge>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold">
              {dictionary.cta1.title}
            </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            {dictionary.cta1.description}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline" asChild>
            <Link href={`/${lang}/contact`}>
              {dictionary.cta1.button_call} <PhoneCall className="w-4 h-4" />
            </Link>
          </Button>
          <Button className="gap-4" asChild>
            <Link href="https://dashboard.doqshare.com">
              {dictionary.cta1.button_signup} <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
