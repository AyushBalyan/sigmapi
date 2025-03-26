"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample expert data - in a real application, this would come from an API or database
const experts = [
  { id: 1, image: '/Experts/expert1.png', alt: 'Expert profile 1' },
  { id: 2, image: '/Experts/expert2.png', alt: 'Expert profile 2' },
  { id: 3, image: '/Experts/expert3.png', alt: 'Expert profile 3' },
  { id: 4, image: '/Experts/expert4.png', alt: 'Expert profile 4' },
  { id: 5, image: '/Experts/expert5.png', alt: 'Expert profile 5' },
  { id: 6, image: '/Experts/expert6.png', alt: 'Expert profile 6' },
  { id: 7, image: '/Experts/expert7.png', alt: 'Expert profile 7' },
  { id: 8, image: '/Experts/expert8.png', alt: 'Expert profile 8' },
  { id: 9, image: '/Experts/expert9.png', alt: 'Expert profile 9' },
  { id: 10, image: '/Experts/expert10.png', alt: 'Expert profile 10' },
  // Add more experts for the expanded view
  { id: 11, image: '/Experts/expert1.png', alt: 'Expert profile 11' },
  { id: 12, image: '/Experts/expert2.png', alt: 'Expert profile 12' },
  { id: 13, image: '/Experts/expert3.png', alt: 'Expert profile 13' },
  { id: 14, image: '/Experts/expert4.png', alt: 'Expert profile 14' },
  { id: 15, image: '/Experts/expert5.png', alt: 'Expert profile 15' },
  { id: 16, image: '/Experts/expert6.png', alt: 'Expert profile 16' },
  { id: 17, image: '/Experts/expert7.png', alt: 'Expert profile 17' },
  { id: 18, image: '/Experts/expert8.png', alt: 'Expert profile 18' },
  { id: 19, image: '/Experts/expert9.png', alt: 'Expert profile 19' },
  { id: 20, image: '/Experts/expert10.png', alt: 'Expert profile 20' },
  { id: 21, image: '/Experts/expert1.png', alt: 'Expert profile 21' },
  { id: 22, image: '/Experts/expert2.png', alt: 'Expert profile 22' },
  { id: 23, image: '/Experts/expert3.png', alt: 'Expert profile 23' },
  { id: 24, image: '/Experts/expert4.png', alt: 'Expert profile 24' },
  { id: 25, image: '/Experts/expert5.png', alt: 'Expert profile 25' },
];

export default function ExpertList() {
  const [showAllExperts, setShowAllExperts] = useState(false);
  
  // Initially show only the first 10 experts, or all if showAllExperts is true
  const visibleExperts = showAllExperts ? experts : experts.slice(0, 10);

  return (
    <section className="w-full py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everyone is here
          </h2>
          <p className="text-gray-600 mx-auto max-w-2xl">
            Nulla quis lorem ut libero malesuada feugiat ipsum dolor sit
          </p>
        </div>

        {/* Expert Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {visibleExperts.map((expert) => (
            <div 
              key={expert.id} 
              className="overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            >
              <Link href={`/experts/${expert.id}`}>
                <div className="relative h-0 pb-[100%]"> {/* Aspect ratio 1:1 */}
                  <Image
                    src={expert.image}
                    alt={expert.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* "See All Experts" button - only visible when not showing all experts */}
        {!showAllExperts && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllExperts(true)}
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition duration-200"
            >
              SEE ALL EXPERTS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}