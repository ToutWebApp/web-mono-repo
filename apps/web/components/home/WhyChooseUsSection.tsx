import { FC } from "react";
import Image from "next/image";
import { AlertTriangle, CheckCircle } from "lucide-react";

export const WhyChooseUsSection: FC = () => {
  return (
    <section className='relative min-h-screen bg-white px-6 md:px-20 py-24 text-[#1F1F1F] flex items-center justify-center'>
      <div className='w-full max-w-7xl space-y-16'>
        {/* Header */}
        <div className='text-center'>
          <h3 className='text-base font-semibold text-[#3B3B3B]'>
            Why should you choose Tout!?
          </h3>
          <p className='text-2xl md:text-[28px] font-light mt-3 leading-snug'>
            Professional Services Often Come with a Trade-off...{" "}
            <span className='text-[#F85757] font-semibold'>NO MORE!</span>
          </p>
        </div>

        {/* Main Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-center'>
          {/* Left - Problems */}
          <div className='space-y-12'>
            <div>
              <h4 className='text-md font-bold mb-2'>Agencies</h4>
              <ul className='text-sm space-y-2 text-gray-700'>
                <li className='flex items-center gap-2'>
                  <AlertTriangle className='' /> Expensive
                </li>
                <li className='flex items-center gap-2'>
                  <AlertTriangle className='' /> Rigid Process
                </li>
                <li className='flex items-center gap-2'>
                  <AlertTriangle className='' /> Slow Communication
                </li>
              </ul>
            </div>

            <div>
              <h4 className='text-md font-bold mb-2'>Freelancers</h4>
              <ul className='text-sm space-y-2 text-gray-700'>
                <li className='flex items-center gap-2'>
                  <AlertTriangle className='' /> Unreliable Delivery
                </li>
                <li className='flex items-center gap-2'>
                  <AlertTriangle className='' /> Lack of Accountability
                </li>
                <li className='flex items-center gap-2'>
                  <AlertTriangle className='' /> Lack of Consistency
                </li>
              </ul>
            </div>
          </div>

          {/* Center - SVG Blob Images from Figma */}
          <div className='flex flex-col items-center justify-center relative space-y-8'>
            <div className='flex items-center justify-center gap-6'>
              <Image
                src='/high-quality.svg'
                alt='High Quality'
                width={130}
                height={130}
                className='object-contain'
              />
              <Image
                src='/dont-compromise.svg'
                alt="Don't Compromise"
                width={220}
                height={180}
                className='object-contain'
              />
            </div>
            <Image
              src='/fast-affordable.svg'
              alt='Fast and Affordable'
              width={130}
              height={130}
              className='object-contain'
            />
          </div>

          {/* Right - Benefits */}
          <div className='space-y-6'>
            <p className='text-base text-gray-700 leading-relaxed'>
              With Tout: High-Quality Work, Fast Delivery, Affordable Price — No
              Tradeoffs.
            </p>
            <ul className='space-y-3 text-sm text-gray-700'>
              <li className='flex items-center gap-2'>
                <CheckCircle className='' /> Top-Notch Quality
              </li>
              <li className='flex items-center gap-2'>
                <CheckCircle className='' /> No Rigid Processes
              </li>
              <li className='flex items-center gap-2'>
                <CheckCircle className='' /> Cost-Effective
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
