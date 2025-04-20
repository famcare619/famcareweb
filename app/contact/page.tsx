"use client";

import React, { useState } from "react";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import NavbarDemo from "@/components/resizable-navbar-demo";
import { FooterDemo } from "@/components/footer-demo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'General Inquiry'
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <NavbarDemo />
      
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#0e6a7d] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0e6a7d]">Call Us</h3>
            <p className="text-gray-700 mb-2">Main Office</p>
            <p className="text-gray-900 font-medium">+91 77366 01619</p>
           
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#0e6a7d] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0e6a7d]">Email Us</h3>
            <p className="text-gray-700 mb-2">General Inquiries</p>
            <p className="text-gray-900 font-medium">famcare619@gmail.com</p>
          
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#0e6a7d] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0e6a7d]">Visit Us</h3>
            <p className="text-gray-700 mb-2">Main Clinic</p>
            <p className="text-gray-900 font-medium">Famcare Health Speciality<br />Opposite Zahi Tyre,Palakkad Kozhikkode Highway , Ayikkarappadi</p>
            <p className="text-gray-600 mt-2">Monday - Sunday: 8:30am - 10:00pm<br /></p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#0e6a7d]">Send Us a Message</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. A member of our team will get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 bg-[#0e6a7d] text-white rounded-lg hover:bg-[#0a5667] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e6a7d] focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e6a7d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e6a7d] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e6a7d] focus:border-transparent"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Appointment Request">Appointment Request</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Medical Records">Medical Records</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e6a7d] focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-[#0e6a7d] text-white font-medium rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#0a5667]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#0e6a7d]">Our Location</h2>
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* Google Maps Embed would go here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125253.8488151951!2d75.81513103040552!3d11.174099104333736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65149f7ce2b41%3A0x1df673d3421b77ec!2sFamcare%20Health%20Speciality!5e0!3m2!1sen!2sin!4v1745042230706!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Famcare Location Map"
              />
            </div>
           
          </div>
        </div>
      </main>
      <FooterDemo />
    </div>
  );
} 