import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconHeartbeat,
  IconMicroscope,
  IconEmergencyBed,
  IconSpray,
  IconEye,
  IconPills,
  IconHomeHeart,
} from "@tabler/icons-react";
import Image from "next/image";
import TracingBeamDemo from "./tracing-beam-demo";
import AppleCardsCarouselDemo from "./apple-cards-carousel-demo";
import AnimatedTestimonialsDemo from "./animated-testimonials-demo";

export default function BentoGridDemo() {
  return (
    <div className="space-y-8 md:space-y-12">
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      <div className="mt-6 md:mt-12">
        <AppleCardsCarouselDemo />
      </div>

      <div className="mt-4 md:mt-12">
        <AnimatedTestimonialsDemo />
      </div>

      <div className="mt-6 md:mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Our Healthcare Services</h2>
        <TracingBeamDemo />
      </div>
    </div>
  );
}

const items = [
  {
    title: "Emergency Department",
    description: "care for critical and urgent medical conditions with rapid response teams.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[6rem] bg-gradient-to-br from-red-50 to-red-100 rounded-xl overflow-hidden">
        <Image
          src="/img/emergeny.png"
          alt="Emergency Department"
          width={120}
          height={120}
          className="object-contain h-24"
        />
      </div>
    ),
    icon: <IconEmergencyBed className="h-5 w-5 text-[#0e6a7d]" />,
  },
  {
    title: "Laboratory",
    description: "Comprehensive diagnostic testing with state-of-the-art equipment and expert analysis.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[6rem] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
        <Image
          src="/img/lab.png"
          alt="Laboratory"
          width={120}
          height={120}
          className="object-contain h-24"
        />
      </div>
    ),
    icon: <IconMicroscope className="h-5 w-5 text-[#0e6a7d]" />,
  },
  {
    title: "ECG",
    description: "Advanced cardiac monitoring and diagnostics for heart health assessment.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[6rem] bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl overflow-hidden">
        <Image
          src="/img/ecg.png"
          alt="ECG"
          width={120}
          height={120}
          className="object-contain h-24"
        />
      </div>
    ),
    icon: <IconHeartbeat className="h-5 w-5 text-[#0e6a7d]" />,
  },
  {
    title: "Nebulization",
    description: "Effective respiratory treatments for asthma, COPD, and other breathing conditions.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[6rem] bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden">
        <Image
          src="/img/nebulizer.png"
          alt="Nebulization"
          width={120}
          height={120}
          className="object-contain h-24"
        />
      </div>
    ),
    icon: <IconSpray className="h-5 w-5 text-[#0e6a7d]" />,
  },
  {
    title: "Observation",
    description: "Continuous monitoring and care for patients requiring extended medical attention.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[6rem] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl overflow-hidden">
        <Image
          src="/img/observation.png"
          alt="Observation"
          width={120}
          height={120}
          className="object-contain h-24"
        />
      </div>
    ),
    icon: <IconEye className="h-5 w-5 text-[#0e6a7d]" />,
  },
  {
    title: "Hyper Pharmacy",
    description: "Comprehensive medication services with expert pharmacists and wide product selection.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[6rem] bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl overflow-hidden">
        <Image
          src="/img/pharmacy.png"
          alt="Hyper Pharmacy"
          width={120}
          height={120}
          className="object-contain h-24"
        />
      </div>
    ),
    icon: <IconPills className="h-5 w-5 text-[#0e6a7d]" />,
  },
  {
    title: "Famcare@Home",
    description: "Professional healthcare services delivered in the comfort of your home.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[6rem] bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl overflow-hidden">
        <Image
          src="/img/home.png"
          alt="Famcare@Home"
          width={120}
          height={120}
          className="object-contain h-24"
        />
      </div>
    ),
    icon: <IconHomeHeart className="h-5 w-5 text-[#0e6a7d]" />,
  },
]; 