import React from 'react';
import Image from 'next/image';

export default function WhatYouGet() {
  const benefits = [
    "Vivamus sed arcu, sed pharetra sed arcu, sed posuere tortor posuere tortor, sed posuere tortor.",
    "Vivamus sed arcu, sed pharetra sed arcu, sed posuere tortor posuere tortor, sed posuere tortor.",
    "Vivamus sed arcu, sed pharetra sed arcu, sed posuere tortor posuere tortor, sed posuere tortor.",
    "Vivamus sed arcu, sed pharetra sed arcu, sed posuere tortor posuere tortor, sed posuere tortor."
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/AboutUs/about-WhatYouGet.png"
                alt="Team collaboration"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
              What You Get
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-500 text-white">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}