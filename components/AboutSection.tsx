'use client';

import React, { useEffect, useRef } from 'react';

interface AboutSectionProps {
  id: string;
  title: string;
  content: string;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

export default function AboutSection({
  id,
  title,
  content,
  align = 'left',
  className = '',
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply appropriate animation based on alignment
            if (align === 'right') {
              entry.target.classList.add('animate-slideInLeft');
            } else {
              entry.target.classList.add('animate-slideInRight');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [align]);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-12 md:py-16 px-4 md:px-8 ${className}`}
    >
      <div className={`container mx-auto max-w-5xl ${
        align === 'center' ? 'text-center' : 
        align === 'right' ? 'ml-auto text-right' : ''
      }`}>
        {align === 'right' ? (
          <div className="border-r-4 border-blue-500 pr-6 ml-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
            <p className="text-lg leading-relaxed text-blue-100/90">
              {content}
            </p>
          </div>
        ) : (
          <div className="border-l-4 border-blue-500 pl-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
            <p className="text-lg leading-relaxed text-blue-100/90">
              {content}
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 