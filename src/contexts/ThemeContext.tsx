import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light'); // Default to light
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Remove no-transition class after mount to enable smooth transitions
    setMounted(true);
    document.documentElement.classList.remove('no-transition');
    
    // Check for saved theme preference - default to light if no preference saved
    const savedTheme = localStorage.getItem('cogniron-theme') as Theme;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Always default to light theme for first-time visitors
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('cogniron-theme', 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Update data-theme attribute and save to localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cogniron-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}