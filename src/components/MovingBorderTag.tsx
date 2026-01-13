import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface MovingBorderTagProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
}

export function MovingBorderTag({ children, className = '', accentColor }: MovingBorderTagProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`moving-border-wrapper inline-flex ${className}`}
      style={{
        position: 'relative',
        padding: '2px',
        borderRadius: '9999px',
        background: theme === 'dark'
          ? 'conic-gradient(from var(--angle), #00A8B7 0%, #00C2C7 25%, #DDEBFA 50%, #00A8B7 75%, #00A8B7 100%)'
          : 'conic-gradient(from var(--angle), #0054A6 0%, #00A8B7 25%, #00C2C7 50%, #0054A6 75%, #0054A6 100%)',
        animation: 'rotate 4s linear infinite',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Inner content container with static fill */}
      <div
        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full"
        style={{
          backgroundColor: theme === 'dark'
            ? accentColor
              ? `${accentColor}15`
              : 'rgba(15, 23, 42, 0.95)'
            : accentColor
              ? `${accentColor}08`
              : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {children}
      </div>

      {/* Hover glow effect - only on border */}
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes rotate {
          0% {
            --angle: 0deg;
          }
          100% {
            --angle: 360deg;
          }
        }

        .moving-border-wrapper {
          --angle: 0deg;
        }

        .moving-border-wrapper:hover {
          filter: drop-shadow(0 0 8px ${theme === 'dark' ? 'rgba(0, 194, 199, 0.4)' : 'rgba(0, 84, 166, 0.3)'});
        }

        .moving-border-wrapper:hover::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          background: ${theme === 'dark'
            ? 'conic-gradient(from var(--angle), transparent 0%, rgba(0, 194, 199, 0.15) 50%, transparent 100%)'
            : 'conic-gradient(from var(--angle), transparent 0%, rgba(0, 84, 166, 0.12) 50%, transparent 100%)'};
          animation: rotate 4s linear infinite;
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
