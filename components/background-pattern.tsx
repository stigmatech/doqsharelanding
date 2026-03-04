"use client";

import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export const BackgroundPattern = () => {
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === "light";

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] dark:bg-primary/20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-purple-500/10 rounded-full blur-[100px] dark:bg-purple-500/15"
        />
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "mask-[radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]",
          "dark:fill-slate-700/50"
        )}
      />
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color={isLightTheme ? "#000" : "#fff"}
        refresh
      />
    </>
  );
};
