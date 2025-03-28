import React from 'react';
import Link from 'next/link';
import CachedS3Image from '@/components/global/CachedS3Image';

export default function SeekersHero() {
  return (
    <section className="relative w-full h-screen max-h-[570px] flex items-center mb-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <CachedS3Image
          src="/Seekers/Seekers-Hero.png"
          alt="Seekers collaborating in a meeting"
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
            Lorem ipsum dolor sit
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link 
              href="/join-as-seeker" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200"
            >
              JOIN AS SEEKER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}