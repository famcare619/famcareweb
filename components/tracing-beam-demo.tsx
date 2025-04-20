"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {famcareContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-[#0e6a7d] text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl font-semibold mb-4">
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  height="300"
                  width="600"
                  className="rounded-lg mb-4 object-cover h-40"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const famcareContent = [
  {
    title: "State-of-the-Art Treatment Facilities",
    description: (
      <>
        <p>
          Famcare provides world-class healthcare facilities with cutting-edge technology and experienced professionals. Our specialized treatment centers ensure patient comfort, privacy, and the highest standards of care, creating an optimal healing environment for recovery.
        </p>
      </>
    ),
    badge: "Facilities",
    image: "/tracking beam1.jpg",
  },
  {
    title: "Hyper Pharmacy: Medication Solutions",
    description: (
      <>
        <p>
          Our Hyper Pharmacy offers comprehensive pharmaceutical care with a wide selection of medications and medical supplies. Experienced pharmacists provide medication counseling, while our services include competitive pricing, home delivery, and a digital prescription system for convenient refills.
        </p>
      </>
    ),
    badge: "Pharmacy",
    image: "/tracking beam2.jpeg",
  },
  {
    title: "Advanced ECG & Laboratory Services",
    description: (
      <>
        <p>
          Famcare's diagnostic services feature state-of-the-art ECG monitoring and comprehensive laboratory testing. Our ECG services detect heart irregularities with immediate results, while our laboratory offers everything from routine blood work to specialized analyses with quick turnaround times for faster treatment initiation.
        </p>
      </>
    ),
    badge: "Diagnostics",
    image: "/tracking beam3.jpg",
  },
]; 