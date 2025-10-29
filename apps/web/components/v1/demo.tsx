"use client";

import { CrowdCanvas, Skiper39 } from "@/components/v1/skiper39";

// Using the complete component (exactly like Skiper UI demo)
const DemoSkiper39 = () => {
  return <Skiper39 />;
};

// Using just the crowd canvas (exactly like Skiper UI demo)
const CustomCrowd = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas srcs={["/images/peeps/all-peeps.png"]} rows={15} cols={7} />
    </div>
  );
};

// Demo page showing both examples
const Skiper39Demo = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Skiper39 Demo</h1>
        
        <div className="space-y-16">
          {/* Complete component demo */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Complete Component</h2>
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg border">
              <Skiper39 />
            </div>
          </div>
          
          {/* Custom canvas demo */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Custom Canvas</h2>
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg border">
              <CustomCrowd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DemoSkiper39, CustomCrowd, Skiper39Demo };
