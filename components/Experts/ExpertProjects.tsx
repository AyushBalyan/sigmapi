"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThumbsUp } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ExpertProjectsProps {
  projects: Project[];
}

export default function ExpertProjects({ projects }: ExpertProjectsProps) {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <div key={project.id} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Project image */}
          <div className="md:col-span-1 bg-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Project info */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex items-center space-x-2">
              <Link 
                href={`/projects/${project.id}`}
                className="border border-gray-300 text-gray-600 px-5 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors"
              >
                SEE DETAILS
              </Link>
              <button 
                className="border border-gray-300 text-gray-600 p-2 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Like project"
              >
                <ThumbsUp size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}