import Image from "next/image";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className='relative z-30 h-full flex items-center justify-center px-6 md:px-16'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full'>
        {/* Left side - Main Hero Content */}
        <div className='flex-1 animate-fade-in-left'>
          <Image
            src='/logo-text.svg'
            alt='Hero Logo'
            width={400}
            height={200}
            className='rounded-2xl mb-6'
          />
          <h1 className='text-4xl md:text-5xl font-bold text-black mb-6 leading-tight'>
            A New Era for <br /> Professional Services
          </h1>
          <p className='text-lg text-gray-600 mb-8 max-w-md'>
            Get the full force, quality and reliability of an international
            agency at the price and speed of freelancers.
          </p>
          <Link href='/questionnaire'>
            <Button className='bg-[#FD7E14] hover:bg-orange-600 text-white px-6 py-3 transition-all duration-300 hover:scale-105'>
              View our Services
            </Button>
          </Link>
        </div>

        {/* Right side - Mobile with Text */}
        <div className='flex-1 flex flex-col md:flex-row gap-8 animate-fade-in-right self-start'>
          <div className='hidden md:block space-y-1 text-center md:text-left'>
            <h6 className='text-base font-bold mb-2 text-black'>
              Find and Select
            </h6>
            <p className='text-sm text-gray-600 leading-relaxed max-w-sm'>
              Surface our services and use <br /> filters to help you find and
              buy <br /> what you need.
            </p>
          </div>
          <div className='relative'>
            <Image
              src='/mobile-one.svg'
              alt='Find and Select'
              width={250}
              height={500}
              className='rounded-2xl transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
