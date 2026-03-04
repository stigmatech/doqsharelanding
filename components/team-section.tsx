"use client";

import Image from "next/image";

const clients = [
  {
    name: "Liam Brown",
    role: "Founder & CEO",
    company: "TechStart Inc.",
    avatar: "https://avatar.vercel.sh/liam",
    testimonial: "DoQshare transformed how we share documents with investors. The analytics are incredible.",
  },
  {
    name: "Elijah Jones",
    role: "Co-Founder & CTO",
    company: "Innovate Labs",
    avatar: "https://avatar.vercel.sh/elijah",
    testimonial: "The security features give us complete confidence when handling sensitive documents.",
  },
  {
    name: "Isabella Garcia",
    role: "VP of Sales",
    company: "Growth Partners",
    avatar: "https://avatar.vercel.sh/isabella",
    testimonial: "Page-by-page analytics help us understand exactly how our proposals are being reviewed.",
  },
  {
    name: "Henry Lee",
    role: "Managing Partner",
    company: "Venture Capital Group",
    avatar: "https://avatar.vercel.sh/henry",
    testimonial: "Best document sharing platform we've used. The custom domain feature is a game-changer.",
  },
  {
    name: "Ava Williams",
    role: "Head of Operations",
    company: "ScaleUp Solutions",
    avatar: "https://avatar.vercel.sh/ava",
    testimonial: "Seamless integration with our workflow. The team loves how easy it is to use.",
  },
  {
    name: "Olivia Miller",
    role: "Founder",
    company: "StartupHub",
    avatar: "https://avatar.vercel.sh/olivia",
    testimonial: "DoQshare helped us close our Series A faster with better investor engagement tracking.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-muted/30 px-6 dark:bg-gray-950">
          Clients
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Here's what they have to say about us</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-muted-foreground">
              Trusted by startups, enterprises, and investors worldwide. See how DoQshare is helping
              businesses share documents securely and track engagement like never before.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div key={index} className="group overflow-hidden">
                <div className="relative h-96 w-full overflow-hidden rounded-md transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl">
                  <Image
                    className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                    src={client.avatar}
                    alt={`${client.name} - ${client.role} at ${client.company}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {client.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex flex-col gap-2">
                    <span className="inline-block translate-y-6 text-sm text-muted-foreground opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {client.role} at {client.company}
                    </span>
                    <p className="inline-block translate-y-8 text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 italic">
                      "{client.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

