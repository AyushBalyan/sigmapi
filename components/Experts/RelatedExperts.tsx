"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Expert {
  id: string;
  image: string;
  alt: string;
}

interface RelatedExpertsProps {
  experts: Expert[];
}

export default function RelatedExperts({ experts }: RelatedExpertsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {experts.map((expert) => (
        <Link 
          key={expert.id}
          href={`/experts/${expert.id}`}
          className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative aspect-square">
            <Image
              src={expert.image}
              alt={expert.alt}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}