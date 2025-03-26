import React from 'react';
import Link from 'next/link';

export default function BecomeExpertBanner() {
  return (
    <div className='max-w-7xl mx-auto'>
    <div className="bg-blue-50 rounded-xl p-8 md:p-12 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Become an Expert
          </h2>
          <p className="text-gray-600 mb-8">
            If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness.
          </p>
          <Link 
            href="/experts/apply"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
          >
            SUBMIT YOUR DETAILS
          </Link>
        </div>
        
        <div className="bg-gray-200 h-72 rounded-lg hidden lg:block">
          {/* Placeholder for image or additional content */}
        </div>
      </div>
    </div>
    </div>
  );
}