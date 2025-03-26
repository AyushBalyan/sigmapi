"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CachedS3Image from '../global/CachedS3Image';

// Sample blog data - in a real application, this would come from an API or database
const blogs = [
  {
    id: 1,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog1.png",
    alt: "Person working on laptop",
    slug: "artistic-growth-1"
  },
  {
    id: 2,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog2.png",
    alt: "Person in red suit",
    slug: "artistic-growth-2"
  },
  {
    id: 3,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog3.png",
    alt: "Person with curly hair and glasses",
    slug: "artistic-growth-3"
  },
  {
    id: 4,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog4.png",
    alt: "Business person on escalator",
    slug: "artistic-growth-4"
  },
  {
    id: 5,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog5.png",
    alt: "Person typing on laptop",
    slug: "artistic-growth-5"
  },
  {
    id: 6,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog6.png",
    alt: "Tech visualization",
    slug: "artistic-growth-6"
  },
  {
    id: 7,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog7.png",
    alt: "Code on screen",
    slug: "artistic-growth-7"
  },
  {
    id: 8,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog8.png",
    alt: "Smiling person",
    slug: "artistic-growth-8"
  },
  {
    id: 9,
    title: "Artistic growth is, more than it is anything else",
    excerpt: "If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness....",
    image: "/Experts/blog9.png",
    alt: "Analytics charts",
    slug: "artistic-growth-9"
  },
];

export default function ExpertBlogs() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Latest Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog) => (
            <Link 
              href={`/blogs/${blog.slug}`} 
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={blog.image}
                  alt={blog.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}