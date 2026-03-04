"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  amount?: number;
}

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  amount = 0.3,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Use lower threshold on mobile for better visibility
  const viewAmount = isMobile ? Math.min(amount, 0.1) : amount;
  const isInView = useInView(ref, { once: true, amount: viewAmount });

  const variants = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  const variant = variants[direction];

  // On mobile, show content immediately if not in view yet (fallback)
  const shouldShow = isInView || (isMobile && !isInView);
  
  return (
    <motion.div
      ref={ref}
      initial={isMobile ? variant.animate : variant.initial}
      animate={shouldShow ? variant.animate : variant.initial}
      transition={{
        duration: isMobile && !isInView ? 0 : duration,
        delay: isMobile && !isInView ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // Custom easing for smooth animation
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerAnimationProps {
  children: ReactNode[];
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  amount?: number;
}

export function StaggerAnimation({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  amount = 0.2,
}: StaggerAnimationProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Use lower threshold on mobile for better visibility
  const viewAmount = isMobile ? Math.min(amount, 0.1) : amount;
  const isInView = useInView(ref, { once: true, amount: viewAmount });

  const variants = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  const variant = variants[direction];

  // On mobile, show content immediately if not in view yet (fallback)
  const shouldShow = isInView || (isMobile && !isInView);
  
  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={isMobile ? variant.animate : variant.initial}
          animate={shouldShow ? variant.animate : variant.initial}
          transition={{
            duration: isMobile && !isInView ? 0 : 0.6,
            delay: isMobile && !isInView ? 0 : delay + index * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

