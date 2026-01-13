import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export function CTASection({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Learn More',
  secondaryButtonLink = '/services',
}: CTASectionProps) {
  const { theme } = useTheme();
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Layer - Dark Theme: Radial gradient with aurora effect */}
      {theme === 'dark' && (
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59, 130, 246, 0.08) 0%, rgba(15, 23, 42, 0) 100%)',
          }}
        />
      )}
      
      {/* Background Layer - Light Theme: Subtle gradient wash */}
      {theme === 'light' && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(239, 246, 255, 0.6) 0%, rgba(219, 234, 254, 0.4) 50%, rgba(239, 246, 255, 0.6) 100%)',
          }}
        />
      )}
      
      {/* Accent gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(168, 85, 247, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, transparent 50%, rgba(168, 85, 247, 0.03) 100%)',
        }}
      ></div>
      
      {/* Neural pattern overlay */}
      <div className="absolute inset-0 opacity-30 neural-pattern"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            <span>{primaryButtonText}</span>
          </Link>
          <Link
            to={secondaryButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
              border: `1px solid var(--border-color)`,
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}