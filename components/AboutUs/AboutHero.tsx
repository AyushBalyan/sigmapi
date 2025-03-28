import React from 'react';
import CachedS3Image from '@/components/global/CachedS3Image';

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen max-h-[570px] flex items-center mb-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <CachedS3Image
          src="/AboutUs/about-hero.png"
          alt="Modern office building architecture"
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto md:mx-0 flex flex-col justify-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 text-center">
            Know More About Us
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure.
          </p>
        </div>
      </div>
    </section>
  );
}