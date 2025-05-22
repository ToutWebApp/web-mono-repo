import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
    </div>
  );
}
