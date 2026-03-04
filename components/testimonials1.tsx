"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



interface Testimonials1Props {
  dictionary: {
    testimonials1: {
      title: string;
      list: {
        title: string;
        content: string;
        author: string;
        avatar: string;
      }[];
    };
    common: {
      by: string;
    };
  };
}

export const Testimonials1 = ({ dictionary }: Testimonials1Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const testimonials = dictionary.testimonials1.list;

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-bold text-left">
            {dictionary.testimonials1.title}
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">{dictionary.common.by}</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
