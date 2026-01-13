import React, { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`min-h-screen ${className}`} style={{ backgroundColor: 'var(--bg-primary)' }}>
      {children}
    </div>
  );
}
