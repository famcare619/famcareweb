"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import BentoGridDemo from "@/components/bento-grid-demo";

export default function ThreeDMarqueeDemo() {
  // Create an array with repeated local images to have enough for the grid
  const localImages = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
  ];
  
  // Repeat the local images to create a larger array
  const images = Array(6).fill(localImages).flat();
  
  // Define the words for the typewriter effect
  const words = [
    {
      text: "Our",
    },
    {
      text: "Services",
      className: "text-[#0e6a7d]",
    }
  ];
  
  return (
    <div className="mx-auto -mt-64 mb-10 max-w-7xl">
      <div className="flex justify-center mb-8">
        <TypewriterEffectSmooth 
          words={words} 
          className="mb-0" 
          cursorClassName="bg-[#0e6a7d]"
        />
      </div>
      
      <div className="mb-16">
        <BentoGridDemo />
      </div>
      
      <div className="rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
} 