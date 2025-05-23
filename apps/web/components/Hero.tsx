import type React from "react";
import HeroHeading from "./hero/HeroHeading";
import CenterLogo from "./hero/CenterLogo";
import ServicePill from "./hero/ServicePill";

const Hero: React.FC = () => {
  return (
    <section className='relative h-screen flex flex-col'>
      <div className='container px-4 mx-auto pt-12'>
        <HeroHeading>
          Compromise
          <br />
          No More!
        </HeroHeading>
      </div>

      <div className='flex-grow flex items-center justify-center'>
        <div className='relative h-[400px] md:h-[500px] w-full animate-fade-in'>
          <CenterLogo />
          <ServicePill
            text='Email Marketing & Automation'
            position='top-32 left-[20%]'
            delay='0.1s'
          />
          <ServicePill
            text='Market & Audience Research'
            position='top-[15%] right-[35%]'
            delay='0.2s'
          />
          <ServicePill
            text='Mobile-First Marketing Strategy'
            position='bottom-[30%] right-[20%]'
            delay='0.3s'
          />
          <ServicePill
            text='Apps & Websites UI/UX Design'
            position='top-[30%] right-[9%]'
            delay='0.4s'
          />
          <ServicePill
            text='Multi-Channel PR Campaigns'
            position='bottom-[15%] left-1/2 transform -translate-x-1/2'
            delay='0.5s'
          />
          <ServicePill
            text='VIP & Exclusive Event Planning'
            position='bottom-[40%] left-[10%]'
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
