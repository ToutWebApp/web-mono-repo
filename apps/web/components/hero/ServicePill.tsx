"use client";

import type React from "react";

interface ServicePillProps {
  text: string;
  position: string;
  delay: string;
}

const ServicePill: React.FC<ServicePillProps> = ({ text, position, delay }) => {
  return (
    <div
      className={`service-pill ${position} animate-slide-in`}
      style={{ animationDelay: delay }}
    >
      {text}
    </div>
  );
};

export default ServicePill;
