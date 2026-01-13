import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  const { theme } = useTheme();
  
  return (
    <section
      className="relative py-20"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))'
          : 'linear-gradient(180deg, rgba(226, 242, 255, 0.5) 0%, #E2F2FF 15%, #E2F2FF 85%, rgba(226, 242, 255, 0.5) 100%)',
        boxShadow: theme === 'dark'
          ? 'none'
          : 'inset 0 1px 0 rgba(37, 99, 235, 0.08), inset 0 -1px 0 rgba(37, 99, 235, 0.08)',
      }}
    >
      {/* Subtle grid overlay for light theme */}
      {theme === 'light' && (
        <div 
          className="absolute inset-0 neural-pattern"
          style={{
            opacity: 0.04
          }}
        ></div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative inline-block mb-3">
                <div className="text-5xl md:text-6xl gradient-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}{stat.suffix}
                </div>
                <div
                  className="absolute -inset-4 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                  }}
                ></div>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}