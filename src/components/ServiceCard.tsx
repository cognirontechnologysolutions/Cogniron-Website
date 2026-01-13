import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  link: string;
  features?: string[];
}

export function ServiceCard({ title, description, icon: Icon, gradient, link, features }: ServiceCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine gradient colors based on card type
  const isBlueCard = gradient.includes('blue') && gradient.includes('cyan');
  const isPurpleCard = gradient.includes('purple') || gradient.includes('pink');

  return (
    <Link
      to={link}
      className="group relative flex flex-col rounded-2xl transition-all duration-300 ease-out"
      style={{
        padding: '2rem',
        minHeight: '100%',
        overflow: 'visible',
        transform: `scale(${isHovered ? 1.02 : 1})`,
        transformOrigin: 'center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassy Card Surface with Inner Gradient */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.85) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      {/* Inner Border - Subtle Clarity */}
      <div
        className="absolute inset-[0.5px] rounded-2xl pointer-events-none"
        style={{
          border: theme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.05)'
            : '1px solid rgba(255, 255, 255, 0.6)',
        }}
      />

      {/* Outer Gradient Rim Light (Dual Border Effect) */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
        style={{
          background: theme === 'dark'
            ? isBlueCard
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(6, 182, 212, 0.25))'
              : 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.25))'
            : isBlueCard
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(6, 182, 212, 0.18))'
              : 'linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(236, 72, 153, 0.18))',
          opacity: isHovered ? 1 : 0.5,
          padding: '1.5px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Premium Shadow with Lift Effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
        style={{
          boxShadow: theme === 'dark'
            ? isHovered
              ? '0 24px 48px rgba(0, 0, 0, 0.4), 0 12px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              : '0 12px 32px rgba(0, 0, 0, 0.3), 0 6px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.03)'
            : isHovered
              ? '0 24px 48px rgba(0, 84, 166, 0.12), 0 12px 24px rgba(59, 130, 246, 0.08), 0 0 0 1px rgba(59, 130, 246, 0.1)'
              : '0 12px 32px rgba(0, 84, 166, 0.08), 0 6px 16px rgba(59, 130, 246, 0.06), 0 0 0 1px rgba(59, 130, 246, 0.05)',
          transform: `translateY(${isHovered ? '-2px' : '0'})`,
        }}
      />

      {/* Top Edge Inner Glow (appears on hover) */}
      <div
        className="absolute top-0 left-0 right-0 h-20 rounded-t-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: theme === 'dark'
            ? isBlueCard
              ? 'linear-gradient(180deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(168, 85, 247, 0.15) 0%, transparent 100%)'
            : isBlueCard
              ? 'linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(168, 85, 247, 0.1) 0%, transparent 100%)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Icon Badge with Halo Glow */}
      <div className="relative mb-6 z-10" style={{ minHeight: '64px' }}>
        {/* Large Halo Glow behind Icon - REMOVED as per cleanup request */}
        
        {/* Icon Badge */}
        <div 
          className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center transition-all duration-500 ease-out`}
          style={{
            boxShadow: theme === 'dark'
              ? `0 12px 32px ${isBlueCard ? 'rgba(59, 130, 246, 0.5)' : 'rgba(168, 85, 247, 0.5)'}, 0 6px 16px ${isBlueCard ? 'rgba(6, 182, 212, 0.4)' : 'rgba(236, 72, 153, 0.4)'}`
              : `0 12px 32px ${isBlueCard ? 'rgba(59, 130, 246, 0.35)' : 'rgba(168, 85, 247, 0.35)'}, 0 6px 16px ${isBlueCard ? 'rgba(6, 182, 212, 0.25)' : 'rgba(236, 72, 153, 0.25)'}`,
            transform: `scale(${isHovered ? 1.08 : 1})`,
            animation: isHovered ? 'iconFloat 2.5s ease-in-out infinite' : 'none',
          }}
        >
          {/* Gradient rotation shimmer effect on hover */}
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500`}
            style={{
              opacity: isHovered ? 0.4 : 0,
              transform: 'rotate(15deg)',
            }}
          />
          <Icon className="w-8 h-8 text-white relative z-10" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col flex-1 z-10">
        {/* Title with Brand Accent */}
        <h3 
          className="text-3xl mb-3 transition-colors duration-200" 
          style={{ 
            fontWeight: 600,
          }}
        >
          {/* Split title to apply gradient only to prefix (QA/CRM) */}
          {title === 'QA Services' ? (
            <>
              <span
                className="gradient-text"
                style={{
                  backgroundImage: theme === 'dark'
                    ? 'linear-gradient(135deg, #00A8B7 0%, #00C2C7 50%, #9333EA 100%)'
                    : 'linear-gradient(135deg, #0054A6 0%, #00A8B7 50%, #9333EA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                QA
              </span>
              <span
                style={{
                  color: isHovered
                    ? (theme === 'dark' ? '#60A5FA' : '#0054A6')
                    : (theme === 'dark' ? '#3B82F6' : '#0054A6'),
                }}
              >
                {' '}Services
              </span>
            </>
          ) : title === 'CRM Services' ? (
            <>
              <span
                className="gradient-text"
                style={{
                  backgroundImage: theme === 'dark'
                    ? 'linear-gradient(135deg, #00A8B7 0%, #00C2C7 50%, #9333EA 100%)'
                    : 'linear-gradient(135deg, #0054A6 0%, #00A8B7 50%, #9333EA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CRM
              </span>
              <span
                style={{
                  color: isHovered
                    ? (theme === 'dark' ? '#60A5FA' : '#0054A6')
                    : (theme === 'dark' ? '#3B82F6' : '#0054A6'),
                }}
              >
                {' '}Services
              </span>
            </>
          ) : (
            <span
              style={{
                color: isHovered
                  ? (theme === 'dark' ? '#60A5FA' : '#0054A6')
                  : (theme === 'dark' ? '#3B82F6' : '#0054A6'),
              }}
            >
              {title}
            </span>
          )}
        </h3>
        
        {/* Description */}
        <p 
          className="mb-6" 
          style={{ 
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
          }}
        >
          {description}
        </p>

        {/* Features List with Glowing Bullets */}
        {features && features.length > 0 && (
          <ul className="space-y-3 mb-6 flex-1">
            {features.slice(0, 3).map((feature, index) => (
              <li 
                key={index} 
                className="text-sm flex items-center transition-all duration-300 ease-out" 
                style={{ 
                  color: 'var(--text-secondary)',
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 transition-all duration-300"
                  style={{ 
                    backgroundColor: isBlueCard 
                      ? (theme === 'dark' ? '#3B82F6' : '#0EA5E9')
                      : (theme === 'dark' ? '#A855F7' : '#9333EA'),
                    boxShadow: isHovered
                      ? (isBlueCard
                          ? (theme === 'dark' ? '0 0 14px rgba(59, 130, 246, 0.9), 0 0 6px rgba(59, 130, 246, 0.6)' : '0 0 12px rgba(14, 165, 233, 0.7), 0 0 5px rgba(14, 165, 233, 0.4)')
                          : (theme === 'dark' ? '0 0 14px rgba(168, 85, 247, 0.9), 0 0 6px rgba(168, 85, 247, 0.6)' : '0 0 12px rgba(147, 51, 234, 0.7), 0 0 5px rgba(147, 51, 234, 0.4)'))
                      : (isBlueCard
                          ? (theme === 'dark' ? '0 0 8px rgba(59, 130, 246, 0.7)' : '0 0 6px rgba(14, 165, 233, 0.5)')
                          : (theme === 'dark' ? '0 0 8px rgba(168, 85, 247, 0.7)' : '0 0 6px rgba(147, 51, 234, 0.5)')),
                    transform: isHovered ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link with Enhanced Hover */}
        <div 
          className="inline-flex items-center mt-auto pt-2 transition-all duration-300 ease-out" 
          style={{ 
            color: 'var(--accent-primary)',
            fontWeight: 500,
            gap: '0.5rem',
            position: 'relative',
          }}
        >
          {/* Background highlight on hover */}
          <div
            className="absolute inset-0 rounded-lg transition-all duration-300"
            style={{
              background: theme === 'dark'
                ? 'rgba(59, 130, 246, 0.12)'
                : 'rgba(59, 130, 246, 0.06)',
              opacity: isHovered ? 1 : 0,
              transform: `scaleX(${isHovered ? 1 : 0.85})`,
              padding: '0.5rem',
              margin: '-0.5rem',
            }}
          />
          
          <span 
            className="relative transition-all duration-200"
            style={{
              textDecorationLine: isHovered ? 'underline' : 'none',
              textDecorationColor: 'var(--accent-primary)',
              textUnderlineOffset: '4px',
              textDecorationThickness: '1px',
            }}
          >
            Learn more
          </span>
          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300 relative" 
            style={{
              transform: `translateX(${isHovered ? 4 : 0}px)`,
            }}
          />
        </div>
      </div>

      {/* Neural Pattern Background (subtle on hover) */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300 rounded-2xl overflow-hidden neural-pattern pointer-events-none"
        style={{
          opacity: isHovered ? 0.04 : 0,
        }}
      />

      {/* Animation Keyframes */}
      <style>{`
        @keyframes iconFloat {
          0%, 100% {
            transform: scale(1.08) translateY(0px);
          }
          50% {
            transform: scale(1.08) translateY(-3px);
          }
        }
      `}</style>
    </Link>
  );
}