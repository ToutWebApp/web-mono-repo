import type React from "react";
import HeroHeading from "./hero/HeroHeading";
import CenterLogo from "./hero/CenterLogo";
import ServicePill from "./hero/ServicePill";

const Hero: React.FC = () => {
  return (
    <section className='relative min-h-screen flex flex-col justify-center pt-16'>
      <div className='container px-4 mx-auto mt-16'>
        <div className='max-w-4xl mb-28'>
          <HeroHeading>
            Compromise
            <br />
            No More!
          </HeroHeading>
        </div>

        <div className='relative h-[400px] md:h-[500px] mb-16 animate-fade-in'>
          {/* Logo in center */}
          <CenterLogo />

          {/* Service pills */}
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
        <div className='flex flex-col md:flex-row items-start justify-between'>
          <div className='flex items-center justify-center mb-8 md:mb-0'>
            <div className='h-16 w-16 rounded-full bg-ipsum-teal flex items-center justify-center text-white'>
              <span className='text-sm'>Services</span>
            </div>
          </div>

          <div className='max-w-xl'>
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
