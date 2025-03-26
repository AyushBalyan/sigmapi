import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DiscordCommunityBanner() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <div className="bg-blue-50 rounded-xl p-8 md:p-12 lg:p-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        Be part of our team!
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Join Sigma-Pi's Discord! Access abundant resources, engage with experts, and collaborate with peers in our vibrant learning community
      </p>
      <Link
        href="https://discord.gg/sigmapi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
      >
        <Image 
          src="/DiscordIcon.svg" 
          alt="Discord" 
          width={24} 
          height={24} 
          className="mr-2"
        />
        <span>DISCORD</span>
      </Link>
    </div>
    </div>
  );
}