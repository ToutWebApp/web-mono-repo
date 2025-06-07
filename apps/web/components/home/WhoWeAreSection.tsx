import { FC } from "react";
import Image from "next/image";

export const WhoWeAreSection: FC = () => {
  return (
    <section className='relative min-h-screen bg-zinc-900 text-white px-6 md:px-12 overflow-hidden'>
      <div className='absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[400px] z-0'>
        <Image
          src='/whoweare.svg'
          alt='Decorative Shape'
          width={500}
          height={500}
          className='w-full h-auto'
          priority
        />
      </div>

      <div className='relative z-10 flex items-center justify-center min-h-screen'>
        <div className='relative max-w-4xl text-center space-y-6 px-4 py-6'>
          <h2 className='text-lg font-semibold tracking-wide'>Who We Are?</h2>
          <p className='text-xl md:text-2xl font-light text-zinc-200'>
            We’re an international agency of talents who are committed to
            providing the best quality professional services for small and
            medium business.
          </p>

          {/* Top-left corner border */}
          <div className='hidden md:block absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20 rounded-tl-lg' />

          {/* Bottom-right corner border */}
          <div className='hidden md:block absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20 rounded-br-lg' />
        </div>
      </div>
    </section>
  );
};
