import NavbarDemo from "@/components/resizable-navbar-demo";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import ThreeDMarqueeDemo from "@/components/3d-marquee-demo";
import { FooterDemo } from "@/components/footer-demo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="-mt-[px]">
        <NavbarDemo />
        <HeroScrollDemo />
        <ThreeDMarqueeDemo />
        <FooterDemo />
      </div>
    </div>
  );
}
