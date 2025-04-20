"use client";

import { Github, Twitter, Instagram, Facebook } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import Image from "next/image"

export function FooterDemo() {
  return (
    <div className="w-full">
      <Footer
        logo={
          <Image
            src="/logo.png"
            alt="Famcare logo"
            width={150}
            height={60}
            className="h-auto"
          />
        }
        brandName=""
        socialLinks={[
         
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://instagram.com/famcarehealthspeciality",
            label: "Instagram",
          },
          {
            icon: <Facebook className="h-5 w-5" />,
            href: "https://facebook.com",
            label: "Facebook",
          },
         
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
         
         
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          
        ]} 
        copyright={{
          text: "© 2025 Famcare Health Speciality",
          license: "All rights reserved",
        }}
      />
    </div>
  )
} 