"use client";

const features = [
  {
    title: "Data Room",
    description: "Secure virtual data rooms for M&A, fundraising, and due diligence.",
  },
  {
    title: "Enterprise",
    description: "Enterprise-grade security with custom domains and white-labeling.",
  },
  {
    title: "Page by Page Analytics",
    description: "Track engagement at the page level to understand what resonates.",
  },
  {
    title: "Dynamic Watermarking",
    description: "Protect documents with dynamic, personalized watermarks.",
  },
  {
    title: "Screenshot Protection",
    description: "Prevent unauthorized screenshots and screen recording.",
  },
  {
    title: "Password Protection",
    description: "Add an extra layer of security with password-protected links.",
  },
  {
    title: "One-Click NDA",
    description: "Streamline NDA workflows with one-click document protection.",
  },
  {
    title: "AI Document Assistant",
    description: "Leverage AI to enhance document workflows and insights.",
  },
];

export default function BentoFeatures() {
  return (
    <div className="mx-auto px-4 py-12 lg:py-16">
      <h2
        id="benefits-title"
        className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 md:text-5xl"
      >
        What&rsquo;s in for you
      </h2>
      <dl className="mt-8 grid grid-cols-4 gap-x-10 gap-y-8 sm:mt-12 sm:gap-y-10">
        {features.map((feature, index) => (
          <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
            <dt className="relative font-semibold text-gray-900 dark:text-gray-50">
              {feature.title}
              <div className="absolute -left-2 top-1 h-4 w-0.5 rounded-full bg-blue-500"></div>
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
