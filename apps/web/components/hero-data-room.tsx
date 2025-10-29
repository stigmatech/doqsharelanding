"use client";

import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { Shield, Lock, Globe, CheckCircle } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function HeroDataRoom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"doqshare"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
              Ready to create your data room?
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            Secure & Modern Virtual Data Room
          </h1>

          {/* Description */}
          <p className="mb-8 text-xl text-gray-600 lg:text-2xl">
            DoqShare Virtual Data Rooms offers a secure platform for your business's document sharing 
            and analytics with full white-labelling and self-hosting. Enhance your operational efficiency with tailored features.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Start 7-day free trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3"
              data-cal-namespace="doqshare"
              data-cal-link="stigmatech/doqshare"
              data-cal-config='{"layout":"month_view"}'
              aria-label="Schedule a demo with DoqShare">
              Book a Demo
            </Button>
          </div>

          {/* Compliance Badges */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Shield className="mr-2 h-4 w-4" />
              SOC2 Compliant
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Lock className="mr-2 h-4 w-4" />
              HIPAA Compliant
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Globe className="mr-2 h-4 w-4" />
              GDPR & CCPA Compliant
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <CheckCircle className="mr-2 h-4 w-4" />
              CCPA Compliant
            </Badge>
          </div>

          {/* Secondary CTA */}
        
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        
      </div>
    </section>
  );
}
