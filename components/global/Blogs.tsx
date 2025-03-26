"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CachedS3Image from '../global/CachedS3Image';

export default function Blogs() {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  
  const blogs = [
    {
      id: 1,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog1.png",
      alt: "Person working on laptop"
    },
    {
      id: 2,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog2.png",
      alt: "Person in red suit"
    },
    {
      id: 3,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog3.png",
      alt: "Person with curly hair and glasses"
    },
    {
      id: 4,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog4.png",
      alt: "Business person on escalator"
    },
    {
      id: 5,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog5.png",
      alt: "Person typing on laptop"
    },
    {
      id: 6,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog6.png",
      alt: "Tech visualization"
    },
    {
      id: 7,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog7.png",
      alt: "Code on screen"
    },
    {
      id: 8,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog8.png",
      alt: "Smiling person"
    },
    {
      id: 9,
      title: "Artistic growth is, more than it is anything else",
      summary: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
      image: "/Home/blog9.png",
      alt: "Analytics charts"
    }
  ];

  // Initially show only the first 3 blogs, or all if showAllBlogs is true
  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 3);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blogs Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Latest Blogs
          </h2>
          {!showAllBlogs && (
            <button 
              onClick={() => setShowAllBlogs(true)}
              className="text-gray-600 hover:text-gray-900 font-medium border border-gray-300 rounded-full py-2 px-6"
            >
              SEE MORE &gt;
            </button>
          )}
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {visibleBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}