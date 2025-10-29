"use client";

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { OpenPeepsHero } from "@/components/openpeeps-animation";
import LogoCloud from "@/components/logo-cloud";
import StatsSection from "@/components/stats-4";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"doqshare"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="flex flex-col gap-16 px-8 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link href="#">
          <Announcement>
            <AnnouncementTag>Latest</AnnouncementTag>
            <AnnouncementTitle>DoQShare revolutionizes document sharing</AnnouncementTitle>
          </Announcement>
        </Link>
        <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem]">
          Secure Document Sharing and Tracking for your business
        </h1>
        <p className="mt-0 mb-0 text-balance text-lg text-muted-foreground">
          Smart data rooms. Page by page document analytics. Your #1 alternative 
          for secure document sharing for your business.
        </p>
        <div className="flex items-center gap-2">
          <Button asChild aria-label="Start free trial of DoqShare">
            <Link href="#">Start for Free</Link>
          </Button>
          <Button 
            variant="outline" 
            aria-label="Schedule a demo with DoqShare"
            data-cal-namespace="doqshare"
            data-cal-link="stigmatech/doqshare"
            data-cal-config='{"layout":"month_view"}'
          >
            Ask for a Demo
          </Button>
        </div>
      </div>
    <LogoCloud />
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg border">
      <OpenPeepsHero />
    </div>
    
    {/* Section Features */}
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">For every sales and fundraising process</h2>
        <p className="text-lg text-muted-foreground">
          DoqShare secures your sensitive documents and optimizes your business processes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Real Estate</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Securely share property documents with clients. 
              Complete control over access and consultation tracking.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Startups</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Take control of your fundraising process. 
              Detailed analytics to optimize your investor presentations.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Spend time only on engaged prospects. 
              Track real-time engagement on your sales proposals.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Legal</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Secure document sharing for law firms. 
              Protect sensitive legal documents with advanced security features.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Healthcare</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              HIPAA-compliant document sharing for healthcare providers. 
              Ensure patient data security and regulatory compliance.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Finance</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Secure financial document sharing for banks and institutions. 
              Meet compliance requirements with enterprise-grade security.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
    
    {/* Section Stats */}
    <StatsSection />
  </div>
  );
};

export default Hero;
