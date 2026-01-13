import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        backgroundColor: 'var(--toggle-bg)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--toggle-border)',
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon
          className="w-5 h-5 transition-all duration-300"
          style={{ color: '#2563EB' }}
          strokeWidth={2}
        />
      ) : (
        <Sun
          className="w-5 h-5 transition-all duration-300"
          style={{ color: '#FFA500' }}
          strokeWidth={2}
        />
      )}
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-10 transition-opacity duration-200"
        style={{ backgroundColor: 'var(--text-primary)' }}
      />
    </button>
  );
}
