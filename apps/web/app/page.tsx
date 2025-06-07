import React from "react";
import Hero from "../components/home/hero/Hero";
import LaptopSection from "../components/home/hero/LaptopSection";
import MobileSection from "../components/home/hero/MobileSection";
import { WhoWeAreSection } from "../components/home/WhoWeAreSection";
import { StepsSection } from "../components/home/StepsSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
import { TryTout } from "../components/home/TryToutSection";

export default function HomePage() {
  return (
    <div className='overflow-hidden relative'>
      <div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative'>
        {/* Decorative Background */}
        <div
          className="absolute w-full top-[50vh] h-[200vh] bg-[url('/test.svg')] bg-no-repeat bg-center bg-cover"
          style={{ pointerEvents: "none", zIndex: 10 }}
        />

        {/* Hero Section */}
        <section className='relative isolate h-screen snap-start z-30'>
          <Hero />
        </section>

        {/* Laptop Section */}
        <section className='hidden md:block relative isolate h-screen snap-start z-30'>
          <LaptopSection />
        </section>

        {/* Mobile Section */}
        <section className='hidden md:block relative isolate h-screen snap-start z-30'>
          <MobileSection />
        </section>

        {/* Who We Are */}
        <section className='relative isolate min-h-screen snap-start z-20'>
          <WhoWeAreSection />
        </section>

        {/* Steps */}
        <section className='relative isolate min-h-screen snap-start z-20'>
          <StepsSection />
        </section>

        {/* Why Choose Us */}
        <section className='relative isolate min-h-screen snap-start z-20'>
          <WhyChooseUsSection />
        </section>

        {/* Try Tout */}
        <section className='relative isolate min-h-screen snap-start z-20'>
          <TryTout />
        </section>
      </div>
    </div>
  );
}
