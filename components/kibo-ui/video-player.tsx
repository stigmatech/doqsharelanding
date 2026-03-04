"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const VideoPlayer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative aspect-video w-full overflow-hidden rounded-lg bg-black",
      className
    )}
    {...props}
  />
));
VideoPlayer.displayName = "VideoPlayer";

const VideoPlayerContent = React.forwardRef<
  HTMLVideoElement,
  React.VideoHTMLAttributes<HTMLVideoElement>
>(({ className, ...props }, ref) => (
  <video
    ref={ref}
    className={cn("h-full w-full object-cover", className)}
    {...props}
  />
));
VideoPlayerContent.displayName = "VideoPlayerContent";

const VideoPlayerControlBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100",
      className
    )}
    {...props}
  />
));
VideoPlayerControlBar.displayName = "VideoPlayerControlBar";

const VideoPlayerPlayButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    size="sm"
    variant="ghost"
    className={cn("h-8 w-8 p-0", className)}
    {...props}
  >
    ▶️
  </Button>
));
VideoPlayerPlayButton.displayName = "VideoPlayerPlayButton";

const VideoPlayerSeekBackwardButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    size="sm"
    variant="ghost"
    className={cn("h-8 w-8 p-0", className)}
    {...props}
  >
    ⏪
  </Button>
));
VideoPlayerSeekBackwardButton.displayName = "VideoPlayerSeekBackwardButton";

const VideoPlayerSeekForwardButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    size="sm"
    variant="ghost"
    className={cn("h-8 w-8 p-0", className)}
    {...props}
  >
    ⏩
  </Button>
));
VideoPlayerSeekForwardButton.displayName = "VideoPlayerSeekForwardButton";

const VideoPlayerTimeRange = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1", className)}
    {...props}
  >
    <Slider
      defaultValue={[0]}
      max={100}
      step={1}
      className="w-full"
    />
  </div>
));
VideoPlayerTimeRange.displayName = "VideoPlayerTimeRange";

const VideoPlayerTimeDisplay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    showDuration?: boolean;
  }
>(({ className, showDuration = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs text-white", className)}
    {...props}
  >
    0:00{showDuration && " / 0:00"}
  </div>
));
VideoPlayerTimeDisplay.displayName = "VideoPlayerTimeDisplay";

const VideoPlayerMuteButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    size="sm"
    variant="ghost"
    className={cn("h-8 w-8 p-0", className)}
    {...props}
  >
    🔊
  </Button>
));
VideoPlayerMuteButton.displayName = "VideoPlayerMuteButton";

const VideoPlayerVolumeRange = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-20", className)}
    {...props}
  >
    <Slider
      defaultValue={[100]}
      max={100}
      step={1}
      className="w-full"
    />
  </div>
));
VideoPlayerVolumeRange.displayName = "VideoPlayerVolumeRange";

export {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeRange,
  VideoPlayerTimeDisplay,
  VideoPlayerMuteButton,
  VideoPlayerVolumeRange,
};
