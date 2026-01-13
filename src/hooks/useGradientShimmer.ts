import { useEffect } from 'react';

/**
 * Custom hook to add shimmer animation to gradient text elements when they scroll into view
 * Automatically detects all elements with .gradient-text and .gradient-text-brand classes and animates them on scroll reveal
 */
export const useGradientShimmer = () => {
  useEffect(() => {
    // Find all gradient text elements (both standard and brand variants)
    const gradientElements = document.querySelectorAll('.gradient-text, .gradient-text-brand');
    
    if (gradientElements.length === 0) return;

    // Intersection Observer options
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of element is visible
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add shimmer animation class when element enters viewport
          entry.target.classList.add('animate-shimmer');
          
          // Remove the class after animation completes (1200ms) to allow re-triggering
          setTimeout(() => {
            entry.target.classList.remove('animate-shimmer');
          }, 1200);
          
          // Stop observing this element after first animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all gradient text elements
    gradientElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);
};