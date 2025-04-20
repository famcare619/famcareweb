"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Our Cardiology department provides comprehensive care for heart conditions with advanced diagnostic technologies and personalized treatment plans. Our experienced cardiologists are dedicated to heart health and prevention.",
      name: "Cardiology",
      designation: "Heart Care Specialists",
      src: "/img/dept/cardiology.png",
    },
    {
      quote:
        "The Neurology department offers specialized care for nervous system disorders. Our team uses state-of-the-art technology to diagnose and treat conditions affecting the brain, spinal cord, and nerves.",
      name: "Neurology",
      designation: "Brain and Nervous System Care",
      src: "/img/dept/neurology.png",
    },
    {
      quote:
        "Our Pediatrics department provides comprehensive healthcare for infants, children, and adolescents. We focus on preventive care, growth monitoring, and treatment of childhood illnesses in a child-friendly environment.",
      name: "Pediatrics",
      designation: "Child Healthcare Specialists",
      src: "/img/dept/pediatrics.png",
    },
    {
      quote:
        "The Orthopedics department specializes in the diagnosis and treatment of musculoskeletal conditions. Our orthopedic surgeons provide care for bone and joint injuries, arthritis, and other related disorders.",
      name: "Orthopedics",
      designation: "Bone and Joint Specialists",
      src: "/img/dept/orthopaedics.png",
    },
    {
      quote:
        "Our Dermatology department offers comprehensive care for skin, hair, and nail conditions. Our dermatologists provide treatments for everything from common skin problems to complex dermatological disorders.",
      name: "Dermatology",
      designation: "Skin Care Specialists",
      src: "/img/dept/dermatology.png",
    },
    {
      quote:
        "The Ophthalmology department provides complete eye care services, from routine exams to treatment of complex eye disorders. Our eye specialists use advanced technology for accurate diagnosis and treatment.",
      name: "Ophthalmology",
      designation: "Vision Care Specialists",
      src: "/img/dept/ophthalmology.png",
    },
    {
      quote:
        "Our Pulmonology department specializes in respiratory care with advanced diagnostic testing and treatments for conditions like asthma, COPD, and sleep disorders. We focus on improving breathing and quality of life.",
      name: "Pulmonology",
      designation: "Respiratory Care Specialists",
      src: "/img/dept/pulmonology.png",
    },
    {
      quote:
        "The General Medicine department provides primary healthcare services for adults. Our physicians diagnose and treat a wide range of health concerns with a focus on preventive care and chronic disease management.",
      name: "General Medicine",
      designation: "Primary Healthcare Providers",
      src: "/img/dept/general medicine.png",
    },
    {
      quote:
        "Our Emergency Medicine department delivers immediate care for acute illnesses and injuries. Our team is prepared 24/7 with rapid response capabilities to handle all medical emergencies efficiently.",
      name: "Emergency Medicine",
      designation: "Urgent Care Specialists",
      src: "/img/dept/emergency medicine.png",
    }
  ];
  
  return (
    <div className="w-full bg-gray-50 py-2 md:py-8 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-2 md:px-4">
        <h2 className="text-center text-xl md:text-3xl font-bold text-[#0e6a7d] mb-2 md:mb-6">
          Our Medical Departments
        </h2>
        <p className="text-center mx-auto max-w-3xl mb-2 md:mb-6 text-xs md:text-base text-gray-600 dark:text-gray-300">
          Famcare Health Speciality offers comprehensive medical care through our specialized departments.
        </p>
        <div className="department-images-container">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </div>
  );
}