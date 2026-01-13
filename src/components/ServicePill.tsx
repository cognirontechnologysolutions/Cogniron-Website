import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

type ServiceType = 'xfirst' | 'ux-assurance' | 'cognitive-assurance';

interface ServicePillProps {
  type: ServiceType;
  children: React.ReactNode;
}

export function ServicePill({ type, children }: ServicePillProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Brand color configurations matching the reference designs
  const getStyleConfig = () => {
    switch (type) {
      case 'xfirst':
        // X-FIRST: Blue/teal gradient (similar to UX-assurance structure)
        return {
          // Gradient fill background (light semi-transparent)
          background: isDark
            ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))'
            : 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))',
          // Solid border color (thin, 1px)
          border: `1px solid ${isDark ? 'rgba(34, 211, 238, 0.3)' : 'rgba(34, 211, 238, 0.2)'}`,
          // Text color (high contrast)
          textColor: isDark ? '#22D3EE' : '#0891B2', // cyan-400 / cyan-600
        };
      
      case 'ux-assurance':
        // UX-Assurance: Purple/pink gradient (reference design)
        return {
          background: isDark
            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))'
            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
          border: `1px solid ${isDark ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)'}`,
          textColor: '#A855F7', // purple-500 - same for both themes
        };
      
      case 'cognitive-assurance':
        // Cognitive Assurance: Pink/purple AI gradient
        return {
          background: isDark
            ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
            : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
          border: `1px solid ${isDark ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'}`,
          textColor: '#EC4899', // pink-500
        };
    }
  };

  const styles = getStyleConfig();

  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
      style={{
        background: styles.background,
        border: styles.border,
      }}
    >
      <span style={{ color: styles.textColor }}>{children}</span>
    </div>
  );
}
