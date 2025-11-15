"use client";

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { Button } from "@workspace/ui/components/button";
import { CrowdCanvas, Skiper39 } from "@/components/v1/skiper39";
import LogoCloud from "@/components/logo-cloud";
import Link from "next/link";

const HeroSkiper39 = () => (
  <div className="flex flex-col gap-16 px-8 py-24 text-center">
    <div className="flex flex-col items-center justify-center gap-8">
      <Link href="#">
        <Announcement>
          <AnnouncementTag>Latest</AnnouncementTag>
          <AnnouncementTitle>Introducing blocks by Kibo UI</AnnouncementTitle>
        </Announcement>
      </Link>
      <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem]">
        The best way to build your website
      </h1>
      <p className="mt-0 mb-0 text-balance text-lg text-muted-foreground">
        Kibo UI blocks are a new way to build your website. They are a
        collection of pre-built components that you can use to build your
        website.
      </p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="https://dashboard.doqshare.com">Get started</Link>
        </Button>
        <Button asChild variant="outline">
          <Link className="no-underline" href="#">
            Learn more
          </Link>
        </Button>
      </div>
    </div>
    <LogoCloud />
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg border">
      <Skiper39 />
    </div>
  </div>
);

// Alternative: Using just the crowd canvas
const HeroCustomCrowd = () => (
  <div className="flex flex-col gap-16 px-8 py-24 text-center">
    <div className="flex flex-col items-center justify-center gap-8">
      <Link href="#">
        <Announcement>
          <AnnouncementTag>Latest</AnnouncementTag>
          <AnnouncementTitle>Introducing blocks by Kibo UI</AnnouncementTitle>
        </Announcement>
      </Link>
      <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem]">
        The best way to build your website
      </h1>
      <p className="mt-0 mb-0 text-balance text-lg text-muted-foreground">
        Kibo UI blocks are a new way to build your website. They are a
        collection of pre-built components that you can use to build your
        website.
      </p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="https://dashboard.doqshare.com">Get started</Link>
        </Button>
        <Button asChild variant="outline">
          <Link className="no-underline" href="#">
            Learn more
          </Link>
        </Button>
      </div>
    </div>
    <LogoCloud />
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg border">
      <CrowdCanvas srcs={["/images/peeps/all-peeps.svg"]} rows={7} cols={7} />
    </div>
  </div>
);

export { HeroSkiper39, HeroCustomCrowd };
