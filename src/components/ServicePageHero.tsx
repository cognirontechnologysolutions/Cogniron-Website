import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight } from 'lucide-react';

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  badge?: string;
}

export function ServicePageHero({ title, subtitle, description, icon: Icon, gradient, badge }: ServicePageHeroProps) {
  const { theme } = useTheme();
  
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #F0F9FF 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10 neural-pattern"></div>
        {/* Gradient Orb */}
        <div
          className={`absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br ${gradient} rounded-full blur-3xl`}
          style={{ opacity: theme === 'dark' ? 0.2 : 0.15 }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 text-center">
        {/* Badge with Moving Border */}
        {badge && (
          <div className="mb-6">
            <Tag size="sm" variant="default">{badge}</Tag>
          </div>
        )}

        {/* Icon */}
        <div
          className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8 shadow-2xl`}
          style={{ boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)' }}
        >
          <Icon className="w-10 h-10 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 tracking-tight" style={{ fontWeight: 600 }}>
          {title === 'CRM' ? (
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
              {title}
            </span>
          ) : (
            <span style={{ color: 'var(--text-primary)' }}>{title}</span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl gradient-text mb-[26px] mt-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[4px] pl-[0px]">
   -       {subtitle}
        </p>

        {/* Description */}
        <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
              border: `1px solid var(--border-color)`,
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            View Case Studies <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}