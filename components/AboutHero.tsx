'use client';

import React from 'react';

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export default function AboutHero({ title, subtitle }: AboutHeroProps) {
  return (
    <div className="relative w-full h-[30vh] md:h-[40vh]">

      
      {/* Dark overlay with blue tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-blue-900/20"></div>
      
      {/* Blue glow/outline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
} 