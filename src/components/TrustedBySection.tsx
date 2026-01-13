import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface TrustedByLogo {
  name: string;
  width?: number;
  height?: number;
}

interface TrustedBySectionProps {
  title?: string;
  subtitle?: string;
  logos?: TrustedByLogo[];
  className?: string;
}

export function TrustedBySection({ 
  title = "Trusted by Industry Leaders",
  subtitle = "Powering quality assurance for innovative companies worldwide",
  logos,
  className = ""
}: TrustedBySectionProps) {
  const { theme } = useTheme();
  
  // Default partner logos - represented as text badges for now
  const defaultLogos: TrustedByLogo[] = logos || [
    { name: "TechCorp", width: 140, height: 48 },
    { name: "Innovation Labs", width: 160, height: 48 },
    { name: "Digital Systems", width: 150, height: 48 },
    { name: "Cloud Solutions", width: 155, height: 48 },
    { name: "Data Dynamics", width: 145, height: 48 },
    { name: "AI Ventures", width: 135, height: 48 },
  ];

  return (
    <section 
      className={`py-20 ${className}`}
      style={{
        background: theme === 'light' 
          ? 'linear-gradient(140deg, #F6FAFF 0%, #EAF5FF 100%)' 
          : 'var(--bg-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h2 
              className="text-3xl lg:text-4xl mb-2"
              style={{ 
                color: theme === 'light' ? 'var(--heading-secondary)' : 'var(--text-primary)',
              }}
            >
              {title}
            </h2>
            {/* Premium accent bar */}
            {theme === 'light' && (
              <div 
                className="h-1 mx-auto rounded-full"
                style={{
                  width: '60px',
                  background: 'linear-gradient(90deg, var(--accent-aqua) 0%, var(--accent-cyan) 100%)',
                  opacity: 0.6,
                }}
              />
            )}
          </div>
          {subtitle && (
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {defaultLogos.map((logo, index) => (
            <div
              key={index}
              className="logo-card group"
              style={{
                background: theme === 'light' 
                  ? 'rgba(255, 255, 255, 0.6)' 
                  : 'var(--bg-card)',
                border: theme === 'light' 
                  ? '1px solid rgba(0, 84, 166, 0.08)' 
                  : '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '32px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: theme === 'light' ? 'blur(10px)' : 'none',
                boxShadow: theme === 'light' 
                  ? '0 4px 16px rgba(0, 55, 106, 0.06)' 
                  : 'var(--shadow-sm)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                if (theme === 'light') {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 55, 106, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 84, 166, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (theme === 'light') {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 55, 106, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(0, 84, 166, 0.08)';
                }
              }}
            >
              {/* Logo placeholder - using text for now */}
              <div 
                className="text-center"
                style={{
                  color: theme === 'light' ? 'var(--text-secondary)' : 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: 500,
                  opacity: theme === 'light' ? 0.7 : 0.8,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        {theme === 'light' && (
          <div className="text-center mt-12">
            <p 
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              Join 500+ companies delivering exceptional quality
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
