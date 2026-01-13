"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface Testimonial {
  name: string;
  designation: string;
  text: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
  autoPlayDelay?: number;
}

/**
 * Testimonial Slider Component
 * 
 * A carousel-style testimonial slider with three cards:
 * - Center card is highlighted and slightly larger
 * - Left and right cards are faded/blurred for depth effect
 * - Smooth transitions and animations
 * - Theme-aware styling for light and dark modes
 */
export function TestimonialSlider({ 
  testimonials: customTestimonials,
  autoPlayDelay = 7000 
}: TestimonialSliderProps) {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Default testimonials
  const defaultTestimonials: Testimonial[] = [
    {
      name: 'Lisa Anderson',
      designation: 'CEO at Global Technology Enterprise',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MzcxOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Innovation meets reliability in quality assurance. Their AI-first approach to testing has given us a competitive edge in delivering flawless customer experiences.',
    },
    {
      name: 'Director of Product',
      designation: 'Director of Product at Leading SaaS Enterprise',
      image: 'https://images.unsplash.com/photo-1758876021212-a87517fc8954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlciUyMHRlY2glMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzNzE5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: "Qualiron's AI-assisted QE model scaled with our growth. Their automation-first framework is now a core part of our delivery pipeline.",
    },
    {
      name: 'Michael Chen',
      designation: 'CTO at High-Growth Digital Platform',
      image: 'https://images.unsplash.com/photo-1649151139875-ae8ea07082e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwQ1RPJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MzcxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Predictive quality assurance that delivers real results. The cognitive testing capabilities have revolutionized how we approach software quality across our entire organization.',
    },
  ];

  const testimonials = customTestimonials || defaultTestimonials;

  // Get visible testimonials (left, center, right)
  const getVisibleTestimonials = () => {
    const leftIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    const centerIndex = activeIndex;
    const rightIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;

    return {
      left: testimonials[leftIndex],
      center: testimonials[centerIndex],
      right: testimonials[rightIndex],
    };
  };

  const visible = getVisibleTestimonials();

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || isTransitioning) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Light theme styles
  const lightStyles = {
    container: {
      background: 'linear-gradient(135deg, #E9F2FF 0%, #F8F3FF 100%)',
    },
    activeCard: {
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(220, 229, 240, 0.8)',
    },
    inactiveCard: {
      background: 'linear-gradient(135deg, #F5F9FF 0%, #FBF8FF 100%)',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(220, 229, 240, 0.5)',
    },
    titleColor: '#0D2344',
    bodyColor: '#44546A',
    imageBorder: '2px solid #DCE5F0',
  };

  // Dark theme styles
  const darkStyles = {
    container: {
      background: 'linear-gradient(135deg, #0A1020 0%, #181C30 100%)',
    },
    activeCard: {
      background: 'linear-gradient(135deg, #141A2A 0%, #1E2438 100%)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(60, 115, 255, 0.3)',
    },
    inactiveCard: {
      background: 'linear-gradient(135deg, #0F1420 0%, #1A1E2E 100%)',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(60, 115, 255, 0.15)',
    },
    titleColor: '#FFFFFF',
    bodyColor: '#B5C3D0',
    imageBorder: '2px solid rgba(60, 115, 255, 0.4)',
    imageGlow: '0 0 16px rgba(60, 115, 255, 0.4)',
  };

  const styles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <div
      className="relative py-20 px-4 overflow-hidden"
      style={styles.container}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Three-card carousel layout */}
        <div className="relative flex items-center justify-center gap-6 lg:gap-8">
          {/* Left Card - Faded/Blurred */}
          <div
            className="hidden lg:block w-80 transition-all duration-500 ease-out"
            style={{
              opacity: isTransitioning ? 0.3 : 0.5,
              transform: isTransitioning ? 'scale(0.8) translateX(20px)' : 'scale(0.85)',
              filter: 'blur(2px)',
            }}
          >
            <TestimonialCard
              testimonial={visible.left}
              isActive={false}
              styles={styles}
              theme={theme}
            />
          </div>

          {/* Center Card - Active/Highlighted */}
          <div
            className="w-full lg:w-[440px] xl:w-[500px] transition-all duration-500 ease-out"
            style={{
              transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
              opacity: isTransitioning ? 0.8 : 1,
            }}
          >
            <TestimonialCard
              testimonial={visible.center}
              isActive={true}
              styles={styles}
              theme={theme}
            />
          </div>

          {/* Right Card - Faded/Blurred */}
          <div
            className="hidden lg:block w-80 transition-all duration-500 ease-out"
            style={{
              opacity: isTransitioning ? 0.3 : 0.5,
              transform: isTransitioning ? 'scale(0.8) translateX(-20px)' : 'scale(0.85)',
              filter: 'blur(2px)',
            }}
          >
            <TestimonialCard
              testimonial={visible.right}
              isActive={false}
              styles={styles}
              theme={theme}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            style={{
              background: theme === 'dark' ? 'rgba(30, 36, 56, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              border: theme === 'dark' ? '1px solid rgba(60, 115, 255, 0.3)' : '1px solid rgba(220, 229, 240, 0.8)',
              boxShadow: theme === 'dark' ? '0 4px 12px rgba(0, 0, 0, 0.5)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
              cursor: isTransitioning ? 'not-allowed' : 'pointer',
              opacity: isTransitioning ? 0.5 : 1,
            }}
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme === 'dark' ? '#FFFFFF' : '#0D2344'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            style={{
              background: theme === 'dark' ? 'rgba(30, 36, 56, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              border: theme === 'dark' ? '1px solid rgba(60, 115, 255, 0.3)' : '1px solid rgba(220, 229, 240, 0.8)',
              boxShadow: theme === 'dark' ? '0 4px 12px rgba(0, 0, 0, 0.5)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
              cursor: isTransitioning ? 'not-allowed' : 'pointer',
              opacity: isTransitioning ? 0.5 : 1,
            }}
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme === 'dark' ? '#FFFFFF' : '#0D2344'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              disabled={isTransitioning}
              className="transition-all duration-300"
              style={{
                width: index === activeIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: index === activeIndex
                  ? theme === 'dark'
                    ? 'linear-gradient(90deg, #3C73FF, #06B6D4)'
                    : 'linear-gradient(90deg, #0D6CFD, #04D4F4)'
                  : theme === 'dark'
                    ? 'rgba(181, 195, 208, 0.3)'
                    : 'rgba(68, 84, 106, 0.3)',
                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                border: 'none',
              }}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Individual Testimonial Card Component
 */
interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  styles: any;
  theme: string;
}

function TestimonialCard({ testimonial, isActive, styles, theme }: TestimonialCardProps) {
  const cardStyle = isActive ? styles.activeCard : styles.inactiveCard;

  return (
    <div
      className="rounded-3xl p-8 transition-all duration-500 ease-out"
      style={{
        ...cardStyle,
        minHeight: isActive ? '380px' : '360px',
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      {/* Profile Image & Info */}
      <div className="flex items-start gap-4 mb-6">
        {/* Circular Profile Image - 56x56px */}
        <div
          className="rounded-full overflow-hidden flex-shrink-0"
          style={{
            width: '56px',
            height: '56px',
            border: styles.imageBorder,
            boxShadow: theme === 'dark' ? styles.imageGlow : 'none',
          }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Name & Designation */}
        <div className="flex-1">
          <h3
            className="text-lg font-semibold mb-1 transition-colors duration-300"
            style={{ color: styles.titleColor }}
          >
            {testimonial.name}
          </h3>
          <p
            className="text-sm transition-colors duration-300"
            style={{ color: styles.bodyColor }}
          >
            {testimonial.designation}
          </p>
        </div>
      </div>

      {/* Testimonial Text */}
      <blockquote className="relative">
        {/* Opening Quote */}
        <span
          className="absolute -top-2 -left-2 text-5xl leading-none opacity-20"
          style={{ color: styles.titleColor }}
        >
          &ldquo;
        </span>

        <p
          className="text-base leading-relaxed pl-6 transition-colors duration-300"
          style={{
            color: styles.bodyColor,
            lineHeight: '1.7',
          }}
        >
          {testimonial.text}
        </p>

        {/* Closing Quote */}
        <span
          className="absolute bottom-0 right-0 text-5xl leading-none opacity-20"
          style={{ color: styles.titleColor }}
        >
          &rdquo;
        </span>
      </blockquote>
    </div>
  );
}

export default TestimonialSlider;
