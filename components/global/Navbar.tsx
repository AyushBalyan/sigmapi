"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Navigation links data
const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/experts", label: "Experts" },
  { href: "/seekers", label: "Seekers" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-6 px-4 md:px-8 lg:px-12 xl:px-16 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and brand name */}
        <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/SigmapiLogo.svg" 
              alt="SigmaPi Logo" 
              width={60}
              height={60}
              priority
              className="w-[100px] h-[50px] object-contain md:w-[120px] md:h-[60px] lg:w-[160px] lg:h-[50px]"

            />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg 
            className="h-6 w-6 text-gray-700" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

              {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-2 border-t border-gray-200">
          <ul className="flex flex-col space-y-3 px-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-700 hover:text-gray-900 py-2 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}