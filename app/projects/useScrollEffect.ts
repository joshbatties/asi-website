'use client';

import { useEffect } from 'react';

/**
 * Custom hook to handle smooth scrolling for project navigation
 * This replaces the jQuery scrolly functionality from the original site
 */
export const useScrollEffect = () => {
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Only process clicks on elements with the 'scrolly' class
      if (target.classList.contains('scrolly') && target.tagName === 'A') {
        e.preventDefault();
        
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetElement = document.querySelector(href) as HTMLElement;
          if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // Add event listener for clicks
    document.addEventListener('click', handleAnchorClick);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};

export default useScrollEffect; 