'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-black text-white border-t border-gray-800">
      {/* Blue glowing line at top of footer */}
      <div className="w-full h-1 bg-blue-500 shadow-[0_0_20px_8px_rgba(59,130,246,0.9)] relative">
        <div className="absolute inset-0 bg-blue-400 opacity-50 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:px-8 lg:px-16">
          {/* Contact Information */}
          <div className="flex flex-col mb-6 md:mb-0 order-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <Link href="mailto:info@acesteel.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                info@acesteel.com
              </Link>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <Link href="tel:1234567890" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                (123) 456-7890
              </Link>
            </div>
          </div>
          
          {/* Logo - middle on mobile, right on desktop */}
          <div className="mb-6 md:mb-0 order-2 md:order-3">
            <Image
              src="/images/logo-solid-white.png"
              alt="ASI Steel Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          
          {/* Copyright - bottom on mobile, middle on desktop */}
          <div className="text-center mb-0 order-3 md:order-2">
            <p className="text-gray-500 text-xs">© {currentYear} Ace Steel Innovations. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 