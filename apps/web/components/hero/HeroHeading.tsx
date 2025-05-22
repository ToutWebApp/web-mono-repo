"use client";

import type React from "react";

interface HeroHeadingProps {
  children: React.ReactNode;
}

const HeroHeading: React.FC<HeroHeadingProps> = ({ children }) => {
  return (
    <h1 className='text-4xl md:text-6xl lg:text-7xl text-ipsum my-4 md:mb-6 animate-fade-in'>
      {children}
    </h1>
  );
};

export default HeroHeading;
