import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const { theme } = useTheme();
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(features.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  // Scroll animation observer
  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }, index * 100); // Stagger animation
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [features.length]);

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]}`} style={{ gap: '2rem' }}>
      {features.map((feature, index) => {
        const content = (
          <>
            {/* Icon Container */}
            <div
              className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                  : 'linear-gradient(135deg, rgba(0, 84, 166, 0.1), rgba(0, 194, 199, 0.1))',
                border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 84, 166, 0.2)'}`,
                boxShadow: theme === 'light' 
                  ? '0 4px 12px rgba(0, 84, 166, 0.08)' 
                  : 'none',
              }}
            >
              {/* Icon Glow Effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))'
                    : 'linear-gradient(135deg, rgba(0, 84, 166, 0.2), rgba(0, 194, 199, 0.2))',
                }}
              ></div>
              <feature.icon 
                className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform duration-300" 
                style={{ color: 'var(--accent-primary)' }} 
              />
            </div>

            {/* Content */}
            <h3 
              className="text-lg mb-3" 
              style={{ 
                color: 'var(--text-primary)',
                fontWeight: '600',
                lineHeight: '1.4',
              }}
            >
              {feature.title}
            </h3>
            <p 
              style={{ 
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                lineHeight: '1.7',
              }}
            >
              {feature.description}
            </p>

            {/* Hover Border Accent */}
            <div
              className="absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                border: `2px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 84, 166, 0.15)'}`,
              }}
            ></div>

            {/* Hover Background Glow */}
            <div
              className="absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.03), rgba(6, 182, 212, 0.03))'
                  : 'linear-gradient(135deg, rgba(0, 84, 166, 0.02), rgba(0, 194, 199, 0.02))',
              }}
            ></div>
          </>
        );

        const baseClasses = `group relative backdrop-blur-sm rounded-2xl transition-all duration-500 ${
          visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`;
        
        const baseStyles = {
          padding: '2rem',
          backgroundColor: theme === 'dark' ? 'var(--bg-card)' : '#FFFFFF',
          border: `1px solid ${theme === 'dark' ? 'var(--border-color)' : 'rgba(0, 84, 166, 0.08)'}`,
          boxShadow: theme === 'dark' 
            ? 'var(--shadow-sm)' 
            : '0 2px 8px rgba(0, 55, 106, 0.04)',
        };

        const hoverStyles = {
          boxShadow: theme === 'dark'
            ? '0 12px 32px rgba(0, 0, 0, 0.3)'
            : '0 12px 32px rgba(0, 84, 166, 0.12)',
          transform: 'translateY(-4px)',
        };

        if (feature.link) {
          return (
            <Link
              key={index}
              to={feature.link}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${baseClasses} block hover:shadow-xl`}
              style={baseStyles}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hoverStyles);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, baseStyles);
              }}
            >
              {content}
            </Link>
          );
        }

        return (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`${baseClasses} hover:shadow-xl`}
            style={baseStyles}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, hoverStyles);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, baseStyles);
            }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
