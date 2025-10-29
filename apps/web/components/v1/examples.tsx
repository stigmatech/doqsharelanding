"use client";

import { CrowdCanvas, Skiper39 } from "@/components/v1/skiper39";

// Exemple 1: Utilisation basique du composant complet
export const BasicSkiper39 = () => {
  return <Skiper39 />;
};

// Exemple 2: Canvas personnalisé avec dimensions par défaut
export const CustomCrowdDefault = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas srcs={["/images/peeps/all-peeps.svg"]} />
    </div>
  );
};

// Exemple 3: Canvas personnalisé avec dimensions spécifiques
export const CustomCrowdSpecific = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas 
        srcs={["/images/peeps/all-peeps.svg"]} 
        rows={7} 
        cols={7} 
      />
    </div>
  );
};

// Exemple 4: Canvas avec plus de personnages
export const LargeCrowd = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas 
        srcs={["/images/peeps/all-peeps.svg"]} 
        rows={15} 
        cols={7} 
      />
    </div>
  );
};

// Exemple 5: Canvas avec moins de personnages
export const SmallCrowd = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas 
        srcs={["/images/peeps/all-peeps.svg"]} 
        rows={5} 
        cols={5} 
      />
    </div>
  );
};

// Exemple 6: Canvas dans un conteneur avec styles
export const StyledCrowd = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg border bg-gray-100">
      <CrowdCanvas 
        srcs={["/images/peeps/all-peeps.svg"]} 
        rows={7} 
        cols={7} 
      />
    </div>
  );
};

// Exemple 7: Canvas avec titre personnalisé
export const CrowdWithTitle = () => {
  return (
    <div className="relative h-full w-full bg-white text-black">
      <div className="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
        <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
          Animation de Foule
        </span>
      </div>
      <div className="absolute bottom-0 h-full w-screen">
        <CrowdCanvas srcs={["/images/peeps/all-peeps.svg"]} rows={7} cols={7} />
      </div>
    </div>
  );
};

// Exemple 8: Canvas avec sprite sheet différent
export const DifferentSprite = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas 
        srcs={["/images/peeps/other-sprites.png"]} 
        rows={10} 
        cols={10} 
      />
    </div>
  );
};
