"use client";

import type React from "react";

const CenterLogo: React.FC = () => {
  return (
    <div className='center-logo'>
      <div className='relative'>
        <h2 className='text-8xl md:text-9xl font-bold font-serif'>
          <span className='text-black'>IPS</span>
          <span className='text-ipsum-orange'>U</span>
          <span className='text-black'>M</span>
          <span className='absolute -top-4 right-0 w-6 h-6 rounded-full bg-ipsum-teal' />
        </h2>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ipsum-orange px-4 py-2 rounded text-white whitespace-nowrap'>
          How can we help your business
        </div>
      </div>
    </div>
  );
};

export default CenterLogo;
