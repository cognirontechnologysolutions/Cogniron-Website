import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export type TagSize = 'sm' | 'md' | 'lg';
export type TagVariant = 'default' | 'primary' | 'secondary' | 'accent';
export type TagState = 'default' | 'selected' | 'disabled';

interface TagProps {
  children: ReactNode;
  icon?: LucideIcon;
  size?: TagSize;
  variant?: TagVariant;
  state?: TagState;
  className?: string;
  onClick?: () => void;
}

export function Tag({ 
  children, 
  icon: Icon, 
  size = 'md', 
  variant = 'default',
  state = 'default',
  className = '',
  onClick 
}: TagProps) {
  const { theme } = useTheme();

  // Size configurations
  const sizeConfig = {
    sm: {
      wrapper: 'text-xs',
      padding: 'px-3 py-1',
      iconSize: 'w-3 h-3',
      gap: 'gap-1.5',
    },
    md: {
      wrapper: 'text-sm',
      padding: 'px-4 py-2',
      iconSize: 'w-4 h-4',
      gap: 'gap-2',
    },
    lg: {
      wrapper: 'text-base',
      padding: 'px-5 py-2.5',
      iconSize: 'w-5 h-5',
      gap: 'gap-2.5',
    },
  };

  // Variant color configurations
  const getVariantColors = () => {
    const isDark = theme === 'dark';
    
    switch (variant) {
      case 'primary':
        return {
          text: isDark ? '#FFFFFF' : '#0054A6',
          fill: isDark ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.08)',
        };
      case 'secondary':
        return {
          text: isDark ? '#06B6D4' : '#0EA5E9',
          fill: isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.08)',
        };
      case 'accent':
        return {
          text: isDark ? '#A855F7' : '#7C3AED',
          fill: isDark ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.08)',
        };
      default:
        return {
          text: isDark ? '#FFFFFF' : '#1E40AF',
          fill: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        };
    }
  };

  const colors = getVariantColors();
  const config = sizeConfig[size];

  // State-based opacity
  const getOpacity = () => {
    if (state === 'disabled') return 0.5;
    if (state === 'selected') return 1;
    return 1;
  };

  const isClickable = onClick && state !== 'disabled';

  return (
    <div
      className={`tag-moving-border inline-flex ${className}`}
      style={{
        position: 'relative',
        padding: '2px',
        borderRadius: '9999px',
        background: theme === 'dark'
          ? 'conic-gradient(from var(--tag-angle), #00A8B7 0%, #00C2C7 25%, #DDEBFA 50%, #00A8B7 75%, #00A8B7 100%)'
          : 'conic-gradient(from var(--tag-angle), #0054A6 0%, #00A8B7 25%, #00C2C7 50%, #0054A6 75%, #0054A6 100%)',
        animation: 'tagBorderRotate 4s linear infinite',
        opacity: getOpacity(),
        cursor: isClickable ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
      }}
      onClick={isClickable ? onClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {/* Inner content with static fill */}
      <div
        className={`relative inline-flex items-center ${config.gap} ${config.padding} rounded-full ${config.wrapper}`}
        style={{
          backgroundColor: colors.fill,
          backdropFilter: 'blur(8px)',
          color: colors.text,
        }}
      >
        {Icon && (
          <Icon 
            className={config.iconSize}
            style={{ color: colors.text }} 
          />
        )}
        <span>{children}</span>
      </div>

      {/* Animation styles */}
      <style>{`
        @property --tag-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes tagBorderRotate {
          0% {
            --tag-angle: 0deg;
          }
          100% {
            --tag-angle: 360deg;
          }
        }

        .tag-moving-border {
          --tag-angle: 0deg;
        }

        .tag-moving-border:hover {
          filter: drop-shadow(0 0 8px ${theme === 'dark' ? 'rgba(0, 194, 199, 0.4)' : 'rgba(0, 84, 166, 0.3)'});
        }

        .tag-moving-border:active {
          transform: scale(0.98);
        }

        @media (prefers-reduced-motion: reduce) {
          .tag-moving-border {
            animation: none !important;
          }
          
          .tag-moving-border {
            background: ${theme === 'dark' 
              ? 'linear-gradient(90deg, #00A8B7, #00C2C7, #DDEBFA)' 
              : 'linear-gradient(90deg, #0054A6, #00A8B7, #00C2C7)'} !important;
          }
        }
      `}</style>
    </div>
  );
}

// Convenience export for common tag types
export const SectionTag = ({ text, icon }: { text: string; icon?: LucideIcon }) => (
  <Tag icon={icon} size="md" variant="default">{text}</Tag>
);

export const ServiceBadge = ({ text }: { text: string }) => (
  <Tag size="sm" variant="primary">{text}</Tag>
);

export const StatusTag = ({ text, selected = false }: { text: string; selected?: boolean }) => (
  <Tag size="sm" variant="accent" state={selected ? 'selected' : 'default'}>{text}</Tag>
);
