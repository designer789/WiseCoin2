'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

// Create a function that initializes Lenis
export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Get all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event to all anchor links for smooth scrolling
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          lenis.scrollTo(targetElement, { 
            offset: -80, // Adjust this offset based on your header height
          });
        }
      }
    });
  });

  // Connect lenis to RAF (request animation frame)
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

// React hook to use Lenis in components
export const useLenis = () => {
  useEffect(() => {
    const lenis = initLenis();
    
    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);
}; 