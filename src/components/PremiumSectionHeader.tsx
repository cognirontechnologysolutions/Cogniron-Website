import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface PremiumSectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  accentPosition?: 'left' | 'center';
  showAccent?: boolean;
  className?: string;
}

export function PremiumSectionHeader({ 
  title,
  subtitle,
  align = 'center',
  accentPosition = 'center',
  showAccent = true,
  className = ""
}: PremiumSectionHeaderProps) {
  const { theme } = useTheme();
  
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const accentAlignClass = accentPosition === 'center' ? 'mx-auto' : 'mr-auto';
  
  return (
    <div className={`${alignClass} ${className}`}>
      {/* Main Title */}
      <h2 
        className="text-4xl lg:text-5xl mb-4"
        style={{
          color: theme === 'light' ? 'var(--heading-primary)' : 'var(--text-primary)',
          marginTop: '3.5rem',
          marginBottom: '1.5rem',
        }}
      >
        {title}
      </h2>
      
      {/* Premium Accent Bar - Light Mode Only */}
      {showAccent && theme === 'light' && (
        <div className="mb-6">
          <div 
            className={`h-1 rounded-full ${accentAlignClass}`}
            style={{
              width: '80px',
              background: 'linear-gradient(90deg, var(--accent-aqua) 0%, var(--accent-cyan) 100%)',
              opacity: 0.6,
            }}
          />
        </div>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        <p 
          className={`text-lg lg:text-xl max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
          style={{ 
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
