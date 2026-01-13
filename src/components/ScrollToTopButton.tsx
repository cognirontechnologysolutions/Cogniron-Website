import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ScrollToTopButton() {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate percentage scrolled (0 to 100)
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = totalScrollableHeight > 0 
        ? (scrollTop / totalScrollableHeight) * 100 
        : 0;
      
      setScrollProgress(Math.min(progress, 100));
      
      // Show button after scrolling 20-25% of viewport height
      const threshold = windowHeight * 0.22;
      setIsVisible(scrollTop > threshold);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add resize listener to recalculate on viewport changes
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  // Size constants
  const size = 52; // Desktop size
  const mobileSize = 46; // Mobile size
  const strokeWidth = 4; // Increased for better visibility
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll to top"
      tabIndex={0}
      className="scroll-to-top-button"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? `scale(${isHovered ? 1.05 : 1})` 
          : 'scale(0.8)',
        transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out, filter 200ms ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
        // Inner circle: Brand teal → deep blue gradient (matching primary CTAs)
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #1E40AF 0%, #0EA5E9 100%)' // Darker blue → cyan for dark theme
          : 'linear-gradient(135deg, #00A8B7 0%, #0054A6 100%)', // Teal → deep blue for light theme
        // Brand-consistent shadow
        boxShadow: theme === 'dark'
          ? '0 8px 24px rgba(14, 165, 233, 0.4), 0 4px 12px rgba(0, 0, 0, 0.4)'
          : '0 8px 24px rgba(0, 168, 183, 0.3), 0 4px 12px rgba(0, 55, 106, 0.2)',
        filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
      }}
    >
      {/* SVG Progress Ring */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)',
          pointerEvents: 'none',
        }}
        width={size}
        height={size}
      >
        {/* Track ring (background/unfilled) - Low-opacity brand color for subtle contrast */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={theme === 'dark' 
            ? 'rgba(148, 163, 184, 0.25)' // Slate-400 with low opacity for dark theme
            : 'rgba(0, 84, 166, 0.2)'} // Brand navy with low opacity for light theme
          strokeWidth={strokeWidth}
        />
        
        {/* Progress arc - Vivid brand gradient (teal → sky → purple) for high contrast */}
        <defs>
          <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {theme === 'dark' ? (
              <>
                {/* Dark theme: Lighter, more saturated for pop */}
                <stop offset="0%" stopColor="#06B6D4" /> {/* Bright cyan */}
                <stop offset="50%" stopColor="#38BDF8" /> {/* Sky blue */}
                <stop offset="100%" stopColor="#A78BFA" /> {/* Light purple */}
              </>
            ) : (
              <>
                {/* Light theme: Rich, saturated brand gradient */}
                <stop offset="0%" stopColor="#0EA5E9" /> {/* Sky blue */}
                <stop offset="50%" stopColor="#06B6D4" /> {/* Cyan */}
                <stop offset="100%" stopColor="#8B5CF6" /> {/* Violet */}
              </>
            )}
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#scrollProgressGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 150ms ease-out',
            opacity: theme === 'dark' ? 0.95 : 1, // Slightly reduced in dark for balance
          }}
        />
      </svg>

      {/* Up Arrow Icon - Brand foreground color (white on gradient backgrounds) */}
      <ChevronUp 
        className="scroll-top-icon"
        style={{
          width: '24px',
          height: '24px',
          color: '#FFFFFF',
          strokeWidth: 2.5,
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .scroll-to-top-button {
            width: ${mobileSize}px !important;
            height: ${mobileSize}px !important;
            bottom: 20px !important;
            right: 20px !important;
          }
          .scroll-to-top-button .scroll-top-icon {
            width: 22px !important;
            height: 22px !important;
          }
        }

        @media (max-width: 480px) {
          .scroll-to-top-button {
            bottom: 16px !important;
            right: 16px !important;
          }
        }

        .scroll-to-top-button:focus-visible {
          outline: 3px solid ${theme === 'dark' ? '#60A5FA' : '#0054A6'};
          outline-offset: 3px;
        }
      `}</style>
    </button>
  );
}