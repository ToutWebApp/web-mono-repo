import { FC } from "react";
import Image from "next/image";

export const TryTout: FC = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-[#0F0F0F] overflow-hidden px-6'>
      {/* Decorative SVGs */}
      <Image
        src='/try-tout-top.svg'
        alt='Decorative top lines'
        width={800}
        height={200}
        className='absolute top-0 left-0 z-0'
      />
      <Image
        src='/try-tout-bottom.svg'
        alt='Decorative bottom lines'
        width={800}
        height={200}
        className='absolute bottom-0 right-0 z-0'
      />

      {/* Centered Content */}
      <div className='z-10 text-center text-white'>
        <h1 className='text-4xl md:text-5xl font-semibold mb-3'>
          Try <span className='text-white'>TOUT!</span>
        </h1>
        <p className='text-sm md:text-base text-gray-300 mb-6'>
          Unlock Your Business Full Potential Today
        </p>
        <button className='bg-white text-black text-sm md:text-base px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition'>
          View our Services
        </button>
      </div>
    </section>
  );
};
