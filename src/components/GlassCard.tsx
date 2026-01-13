import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function GlassCard({ 
  children, 
  className = "",
  hover = true,
  padding = 'lg'
}: GlassCardProps) {
  const { theme } = useTheme();
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div
      className={`glass-card ${paddingClasses[padding]} ${className}`}
      style={{
        background: theme === 'light' 
          ? 'rgba(255, 255, 255, 0.7)' 
          : 'var(--bg-card)',
        border: theme === 'light' 
          ? '1px solid rgba(0, 84, 166, 0.08)' 
          : '1px solid var(--border-color)',
        borderRadius: '24px',
        backdropFilter: theme === 'light' ? 'blur(12px)' : 'none',
        boxShadow: theme === 'light' 
          ? '0 4px 20px rgba(0, 55, 106, 0.08)' 
          : 'var(--shadow-md)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        if (hover && theme === 'light') {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 55, 106, 0.12)';
          e.currentTarget.style.borderColor = 'rgba(0, 84, 166, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover && theme === 'light') {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 55, 106, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(0, 84, 166, 0.08)';
        }
      }}
    >
      {children}
    </div>
  );
}
