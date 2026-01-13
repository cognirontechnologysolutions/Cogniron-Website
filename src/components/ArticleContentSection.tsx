import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ArticleContentSectionProps {
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'alternate';
  maxWidth?: 'narrow' | 'medium' | 'wide';
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

export function ArticleContentSection({ 
  title, 
  children, 
  variant = 'default',
  maxWidth = 'medium',
  icon: Icon
}: ArticleContentSectionProps) {
  const { theme } = useTheme();
  
  const widthClasses = {
    narrow: 'max-w-3xl',
    medium: 'max-w-4xl',
    wide: 'max-w-6xl'
  };
  
  const background = variant === 'alternate'
    ? (theme === 'dark' 
        ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' 
        : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)')
    : 'var(--bg-primary)';

  return (
    <section className="relative py-8" style={{ background }}>
      <div className={`${widthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-12`}>
        {title && (
          <div className="flex items-center gap-4 mb-6">
            {Icon && (
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
            )}
            <h2 className="text-3xl" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h2>
          </div>
        )}
        <div className="prose prose-lg" style={{ color: 'var(--text-secondary)' }}>
          {children}
        </div>
      </div>
    </section>
  );
}

interface KeyHighlightsProps {
  title?: string;
  highlights: string[];
  icon?: ReactNode;
}

export function KeyHighlights({ title = 'Key Highlights', highlights, icon }: KeyHighlightsProps) {
  const { theme } = useTheme();
  
  return (
    <div className="mb-6">
      <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      <div className="space-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3">
            {icon ? (
              <div className="flex-shrink-0 mt-1">
                {icon}
              </div>
            ) : (
              <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            )}
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface MetadataCardProps {
  items: Array<{
    label: string;
    value: string;
    icon?: ReactNode;
  }>;
}

export function MetadataCard({ items }: MetadataCardProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-2 text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
            {item.icon && item.icon}
            <span>{item.label}</span>
          </div>
          <p style={{ color: 'var(--text-primary)' }}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

interface CalloutBoxProps {
  type: string;
  title?: string;
  content?: string;
  children?: ReactNode;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  variant?: 'info' | 'tip' | 'warning' | 'success' | 'insight';
}

export function CalloutBox({ type, title, content, children, icon: Icon, variant = 'info' }: CalloutBoxProps) {
  const { theme } = useTheme();
  
  const variantStyles = {
    info: {
      gradient: theme === 'dark' 
        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
      border: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
      iconBg: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    },
    tip: {
      gradient: theme === 'dark'
        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))'
        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(52, 211, 153, 0.05))',
      border: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
      iconBg: 'linear-gradient(135deg, #10B981, #34D399)',
    },
    warning: {
      gradient: theme === 'dark'
        ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1))'
        : 'linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(251, 191, 36, 0.05))',
      border: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)',
      iconBg: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    },
    success: {
      gradient: theme === 'dark'
        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))'
        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(52, 211, 153, 0.05))',
      border: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
      iconBg: 'linear-gradient(135deg, #10B981, #34D399)',
    },
    insight: {
      gradient: theme === 'dark' 
        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
      border: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
      iconBg: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    },
  };
  
  const styles = variantStyles[variant];
  
  return (
    <div 
      className="backdrop-blur-sm rounded-2xl p-8" 
      style={{ 
        background: styles.gradient, 
        border: `2px solid ${styles.border}` 
      }}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="flex-shrink-0">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center" 
              style={{ background: styles.iconBg }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        )}
        <div className="flex-1">
          <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'var(--text-secondary)' }}>
            {type}
          </div>
          {title && (
            <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h3>
          )}
          {content && (
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {content}
            </p>
          )}
          {children && !content && (
            <div className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface StepsSectionProps {
  title: string;
  description?: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export function StepsSection({ title, description, steps }: StepsSectionProps) {
  const { theme } = useTheme();
  
  return (
    <div>
      <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>{title}</h2>
      {description && (
        <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>{description}</p>
      )}
      
      <div className="grid gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex gap-4 backdrop-blur-sm rounded-xl p-6" 
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-color)' 
            }}
          >
            <div className="flex-shrink-0">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
              >
                <span className="text-white">{index + 1}</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}