import type React from "react";
import HeroHeading from "./hero/HeroHeading";
import CenterLogo from "./hero/CenterLogo";
import ServicePill from "./hero/ServicePill";

const Hero: React.FC = () => {
  return (
    <section className='relative h-screen flex flex-col'>
      <div className='container px-4 mx-auto pt-12'>
        <HeroHeading>
          <span>Compromise</span>
          <br />
          <span className='mt-2 inline-block'>No More!</span>
        </HeroHeading>
      </div>

      <div className='flex-grow flex items-center justify-center'>
        <div className='relative h-[400px] md:h-[500px] w-full animate-fade-in'>
          <CenterLogo />
          <ServicePill
            text='Email Marketing & Automation'
            position='top-4 left-4 md:top-32 md:left-[25%]'
            delay='0.1s'
          />
          <ServicePill
            text='Market & Audience Research'
            position='top-14 right-24 md:top-[15%] md:right-[37%]'
            delay='0.2s'
          />
          <ServicePill
            text='Mobile-First Marketing Strategy'
            position='bottom-14 right-4 md:bottom-[30%] md:right-[25%]'
            delay='0.3s'
          />
          <ServicePill
            text='Apps & Websites UI/UX Design'
            position='top-24 right-4 md:top-[25%] md:right-[15%]'
            delay='0.4s'
          />
          <ServicePill
            text='Multi-Channel PR Campaigns'
            position='bottom-4 left-1/2 -translate-x-1/2 md:bottom-[20%] md:left-1/2 md:transform md:-translate-x-1/2'
            delay='0.5s'
          />
          <ServicePill
            text='VIP & Exclusive Event Planning'
            position='bottom-24 left-4 md:bottom-[40%] md:left-[15%]'
            delay='0.6s'
          />
        </div>
      </div>

      <div className='container px-4 mx-auto mt-8'>
        <a
          href='#services'
          className='fixed bottom-6 left-6 z-50 h-16 w-16 p-10 rounded-full bg-ipsum-teal flex flex-col items-center justify-center text-white shadow-lg hover:bg-ipsum-teal/80 transition-colors'
        >
          <span className='text-sm'>Services</span>
          <span className='text-sm'>↓</span>
        </a>

        <div className='flex justify-end'>
          <div className='max-w-xl text-right'>
            <p className='text-lg md:text-xl lg:text-2xl text-ipsum mb-6'>
              Get the quality and reliability of agencies at the price and speed
              of a freelancer for the services your business needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
