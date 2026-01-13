/**
 * @fileoverview SearchInput Component - Reusable search input with icon
 * @module components/SearchInput
 * 
 * A consistent search input component used across the site with proper
 * icon-text spacing to prevent overlap.
 */

import React from 'react';
import { Search } from 'lucide-react';

export interface SearchInputProps {
  /** Current search query value */
  value: string;
  /** Callback when search value changes */
  onChange: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

/**
 * SearchInput Component
 * 
 * Reusable search input with magnifying glass icon that maintains proper
 * spacing between icon and text in both light and dark themes.
 * 
 * Features:
 * - Icon positioned with proper spacing (never overlaps text)
 * - Responsive design that works on all screen sizes
 * - Theme-aware styling (light/dark mode support)
 * - Accessible with proper ARIA labels
 * 
 * @param {SearchInputProps} props - Component props
 * @returns {JSX.Element} Rendered search input
 */
export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  ariaLabel = 'Search',
}: SearchInputProps): JSX.Element {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Search Icon - positioned with proper padding */}
      <div 
        className="absolute left-4 flex items-center pointer-events-none"
        aria-hidden="true"
      >
        <Search 
          className="w-5 h-5" 
          style={{ color: 'var(--text-secondary)' }} 
        />
      </div>

      {/* Search Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        className="w-full py-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-0"
        style={{
          // Icon is 20px (w-5) + left-4 (16px) + gap (12px) = 48px minimum
          // Using 52px for extra comfortable spacing
          paddingLeft: '52px',
          paddingRight: '16px',
          backgroundColor: 'var(--input-bg)',
          border: '1px solid var(--input-border)',
          color: 'var(--text-primary)',
          // Focus ring color
          '--tw-ring-color': 'var(--accent-primary)',
        } as React.CSSProperties}
      />
    </div>
  );
}
