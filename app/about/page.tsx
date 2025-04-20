"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { FooterDemo } from "@/components/footer-demo";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <NavbarDemo />
      
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-8">About Famcare</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0e6a7d]">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Famcare, our mission is to provide exceptional healthcare services that prioritize patient comfort, dignity, and well-being. We are committed to delivering comprehensive medical care with compassion and respect for every individual.
            </p>
            <p className="text-gray-700">
              We strive to be the most trusted healthcare provider in our community, combining advanced medical technology with a personal touch to ensure the best possible outcomes for our patients.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/logo.png"
              alt="Famcare Healthcare Facility"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#0e6a7d]">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-[#0e6a7d]">Excellence</h3>
              <p className="text-gray-700">We are committed to delivering the highest standard of care in everything we do, constantly striving to improve our services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-[#0e6a7d]">Compassion</h3>
              <p className="text-gray-700">We treat every patient with empathy, respect, and dignity, understanding that healthcare is about people, not just procedures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-[#0e6a7d]">Innovation</h3>
              <p className="text-gray-700">We embrace the latest medical technologies and techniques to provide the most effective and efficient care possible.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#0e6a7d]">Our Team</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Our dedicated team of healthcare professionals brings years of experience and expertise to provide you with the best possible care. From our doctors and nurses to our administrative staff, everyone at Famcare is committed to your health and wellbeing.
          </p>
        
        </div>
        
        <div className="bg-[#0e6a7d] text-white p-10 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to experience the Famcare difference?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Schedule an appointment today and discover why so many patients trust us with their healthcare needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-white text-[#0e6a7d] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <FooterDemo />
    </div>
  );
}