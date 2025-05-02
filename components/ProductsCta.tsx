'use client';

import React from 'react';
import Link from 'next/link';

export default function ProductsCta() {
  return (
    <section className="w-full py-16 md:py-24 relative">
      {/* Blue glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black/40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Custom Steel Solutions?
          </h2>
          
          <p className="text-lg text-blue-100/90 mb-10 max-w-2xl mx-auto">
            Contact our expert team today to discuss your specific requirements. 
            We offer competitive pricing, fast turnaround times, and exceptional quality.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
            <Link 
              href="/contact" 
              className=""
            >
              Request a Quote
            </Link>
            </button>
            <button
              type="button"
                            className="border border-gray-500 text-gray-400 bg-transparent rounded-md py-3 px-8
                      transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                      hover:border-blue-300 hover:text-blue-200 backdrop-blur-sm"
            >
            <Link 
              href="/services" 
              className=""
            >
              Explore Our Services
            </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 