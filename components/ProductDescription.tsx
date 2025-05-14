'use client';

import React, { useEffect, useRef } from 'react';

interface ProductDescriptionProps {
  title: string;
  description: string;
  align?: 'left' | 'right';
  className?: string;
}

export default function ProductDescription({
  title,
  description,
  align = 'left',
  className = '',
}: ProductDescriptionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

    // Store ref value in a variable to avoid the exhaustive-deps warning
    const currentRef = sectionRef.current;
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [align]);

  return (
    <div 
      ref={sectionRef}
      className={`py-10 ${className}`}
    >
      <div className={`max-w-3xl mx-auto px-4 ${
        align === 'right' ? 'text-right ml-auto' : ''
      }`}>
        <div className={`
          ${align === 'right' 
            ? 'border-r-4 border-blue-500 pr-6' 
            : 'border-l-4 border-blue-500 pl-6'
          }
        `}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-base text-blue-100/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 