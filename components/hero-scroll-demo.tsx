"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[120px] md:pb-[180px] pt-10 -mt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome to <br />
              <span className="text-4xl md:text-[4rem] text-[#0e6a7d] font-bold mt-1 leading-none">
                Famcare Health Speciality
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image 
            src="/heroimage.webp" 
            alt="Family Care Made Simple" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </ContainerScroll>
    </div>
  );
} 