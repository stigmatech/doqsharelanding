"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

interface OpenPeepsAnimationProps {
  peepCount?: number;
}

const OpenPeepsAnimation = ({ peepCount = 10 }: OpenPeepsAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationIdRef = useRef<number | null>(null);
  const lastRenderTimeRef = useRef<number>(0);
  const targetFPS = 30;
  const frameInterval = 1000 / targetFPS;
  
  // Refs pour stocker les données d'animation
  const stageRef = useRef({ width: 0, height: 0 });
  const allPeepsRef = useRef<any[]>([]);
  const availablePeepsRef = useRef<any[]>([]);
  const crowdRef = useRef<any[]>([]);

  // Intersection Observer pour pauser l'animation quand hors de vue
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isVisible || !isAnimating) {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const now = performance.now();
      if (now - lastRenderTimeRef.current < frameInterval) {
        animationIdRef.current = requestAnimationFrame(render);
        return;
      }
      
      lastRenderTimeRef.current = now;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);

      // Rendu des personnages
      crowdRef.current.forEach((peep) => {
        if (peep && peep.render) {
          peep.render(ctx);
        }
      });

      ctx.restore();
      
      animationIdRef.current = requestAnimationFrame(render);
    };

    animationIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };
  }, [isVisible, isAnimating, frameInterval]);

  // Initialisation de l'animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // UTILS
    const randomRange = (min: number, max: number) =>
      min + Math.random() * (max - min);

    // TYPES
    type Peep = {
      image: HTMLImageElement;
      x: number;
      y: number;
      anchorY: number;
      scaleX: number;
      width: number;
      height: number;
      walk: any;
      render: (ctx: CanvasRenderingContext2D) => void;
    };

    // FACTORY FUNCTIONS
    const createPeep = (image: HTMLImageElement): Peep => {
      const peep: Peep = {
        image,
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        width: 132,
        height: 264,
        walk: null,
        render: (ctx: CanvasRenderingContext2D) => {
          ctx.save();
          ctx.translate(peep.x, peep.y);
          ctx.scale(peep.scaleX, 1);
          ctx.drawImage(peep.image, 0, 0, peep.width, peep.height);
          ctx.restore();
        },
      };
      return peep;
    };

    // TWEEN FACTORIES
    const resetPeep = ({ stage, peep }: { stage: any; peep: any }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 10 - 40 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX: number;
      let endX: number;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }: { peep: any; props: any }) => {
      const { startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);
      tl.to(peep, { duration: yDuration, repeat: xDuration / yDuration, yoyo: true, y: startY - 5 }, 0);

      return tl;
    };

    const walks = [normalWalk];

    const createPeeps = () => {
      const peepNumbers = Array.from({ length: peepCount }, (_, i) => i + 1);
      
      peepNumbers.forEach((num) => {
        const img = new Image();
        img.onload = () => {
          const peep = createPeep(img);
          allPeepsRef.current.push(peep);
          availablePeepsRef.current.push(peep);
          
          if (allPeepsRef.current.length === peepNumbers.length) {
            initCrowd();
          }
        };
        img.src = `/images/peeps/Bust/peep-${num}.svg`;
      });
    };

    const initCrowd = () => {
      const maxPeeps = Math.min(peepCount, availablePeepsRef.current.length);
      for (let i = 0; i < maxPeeps; i++) {
        addPeepToCrowd().walk.progress(Math.random());
      }
    };

    const addPeepToCrowd = () => {
      if (availablePeepsRef.current.length === 0) return null;
      
      const randomIndex = Math.floor(Math.random() * availablePeepsRef.current.length);
      const peep = availablePeepsRef.current.splice(randomIndex, 1)[0];
      
      const walk = walks[Math.floor(Math.random() * walks.length)]?.({
        peep,
        props: resetPeep({ peep, stage: stageRef.current }),
      })?.eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        if (availablePeepsRef.current.length > 0) {
          addPeepToCrowd();
        }
      });

      peep.walk = walk;
      crowdRef.current.push(peep);
      crowdRef.current.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => {
      const index = crowdRef.current.indexOf(peep);
      if (index > -1) {
        crowdRef.current.splice(index, 1);
      }
      availablePeepsRef.current.push(peep);
    };

    const resize = () => {
      stageRef.current.width = canvas.clientWidth;
      stageRef.current.height = canvas.clientHeight;
      canvas.width = stageRef.current.width * devicePixelRatio;
      canvas.height = stageRef.current.height * devicePixelRatio;

      crowdRef.current.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });

      crowdRef.current.length = 0;
      availablePeepsRef.current.length = 0;
      availablePeepsRef.current.push(...allPeepsRef.current);

      initCrowd();
    };

    const init = () => {
      createPeeps();
      resize();
      setIsAnimating(true);
    };

    init();

    const handleResize = () => resize();
    const throttledResize = throttle(handleResize, 100);
    window.addEventListener("resize", throttledResize);

    return () => {
      window.removeEventListener("resize", throttledResize);
      crowdRef.current.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });
    };
  }, [peepCount]);

  // Fonction throttle pour optimiser les événements de resize
  function throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  return (
    <canvas ref={canvasRef} className="absolute bottom-0 h-[90vh] w-full" />
  );
};

const OpenPeepsHero = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-blue-50 to-white text-black">
      <div className="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
        <span className="relative max-w-[20ch] text-2xl font-bold uppercase leading-tight opacity-80 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
          DoqShare Community
        </span>
      </div>
      <div className="absolute bottom-0 h-full w-screen">
        <OpenPeepsAnimation peepCount={20} />
      </div>
    </div>
  );
};

export { OpenPeepsAnimation, OpenPeepsHero };