import Image from "next/image";

export default function MobileSection() {
  return (
    <section className='relative z-30 h-full flex items-center justify-center px-6 md:px-16'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl'>
        {/* Left side - Mobile with Text */}
        <div className='flex-1 flex flex-col md:flex-row items-center gap-8 animate-fade-in-left'>
          <div className='space-y-1 text-center md:text-left'>
            <h3 className='text-base font-bold text-black'>
              Seamless Collaboration in Real Time
            </h3>
            <p className='text-sm text-gray-600 leading-relaxed max-w-sm'>
              You will receive your work, and <br /> ask for edits, if needed,
              easily <br />
              and seamlessly!
            </p>
          </div>
          <div className='relative'>
            <Image
              src='/mobile-two.svg'
              alt='Seamless Collaboration'
              width={250}
              height={500}
              className='drop-shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>

        {/* Right side - Empty space to balance layout */}
        <div className='flex-1'></div>
      </div>
    </section>
  );
}
