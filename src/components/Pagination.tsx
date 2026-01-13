import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * Pagination Component
 * 
 * Brand-themed pagination with Previous/Next controls and page numbers.
 * Automatically handles truncation for large page counts.
 * 
 * Features:
 * - Light/Dark mode support
 * - Intelligent truncation (e.g., 1 2 3 … 10 or 1 … 4 5 6 … 12)
 * - Disabled states for first/last pages
 * - Accessible focus states
 * - Smooth hover transitions
 * 
 * @param currentPage - Current active page (1-indexed)
 * @param totalPages - Total number of pages
 * @param onPageChange - Callback when page changes
 * @param className - Optional additional classes
 */
export function Pagination({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) {
  const { theme } = useTheme();

  if (totalPages <= 1) {
    return null; // Hide pagination if only one page
  }

  /**
   * Generate array of page numbers with ellipsis for truncation
   * Logic:
   * - Always show first page, last page, current page
   * - Show 1 page on each side of current
   * - Use ellipsis (...) for gaps
   * 
   * Examples:
   * - 1 2 3 4 5 (no truncation for <= 7 pages)
   * - 1 2 3 … 10 (near start)
   * - 1 … 4 5 6 … 12 (in middle)
   * - 1 … 8 9 10 (near end)
   */
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const delta = 1; // Pages to show on each side of current page

    if (totalPages <= 7) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Always include first page
    pages.push(1);

    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push('...');
    }

    // Add pages around current page
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push('...');
    }

    // Always include last page
    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page);
    }
  };

  // Base styles for all buttons
  const baseButtonStyles: React.CSSProperties = {
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none',
  };

  // Navigation button (Previous/Next) styles
  const navButtonStyles = (disabled: boolean): React.CSSProperties => ({
    ...baseButtonStyles,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem', // Reduced from 0.5rem
    padding: '0.4rem 0.8rem', // Reduced from 0.5rem 1rem
    minHeight: '2.75rem', // Keep 44px for accessibility
    borderRadius: '0.6rem', // Reduced from 0.75rem (20% reduction)
    fontSize: '0.75rem', // Reduced from 0.875rem (14.3% reduction)
    fontWeight: '500',
    background: disabled
      ? theme === 'dark'
        ? 'rgba(255, 255, 255, 0.03)'
        : 'rgba(203, 213, 225, 0.3)'
      : theme === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : '#FFFFFF',
    border: `1px solid ${
      disabled
        ? theme === 'dark'
          ? 'rgba(148, 163, 184, 0.1)'
          : 'rgba(203, 213, 225, 0.5)'
        : theme === 'dark'
        ? 'rgba(148, 163, 184, 0.2)'
        : 'rgba(203, 213, 225, 1)'
    }`,
    color: disabled ? 'var(--text-muted)' : 'var(--text-primary)',
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  });

  // Page number pill styles
  const pageButtonStyles = (isActive: boolean): React.CSSProperties => ({
    ...baseButtonStyles,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '2.75rem', // Keep 44px minimum for accessibility
    minHeight: '2.75rem', // Keep 44px minimum for accessibility
    padding: '0.35rem', // Reduced from 0.5rem
    borderRadius: '0.6rem', // Reduced from 0.75rem (20% reduction)
    fontSize: '0.75rem', // Reduced from 0.875rem (14.3% reduction)
    fontWeight: '500',
    background: isActive
      ? 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)'
      : theme === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : '#FFFFFF',
    border: `1px solid ${
      isActive
        ? 'transparent'
        : theme === 'dark'
        ? 'rgba(148, 163, 184, 0.2)'
        : 'rgba(203, 213, 225, 1)'
    }`,
    color: isActive ? '#FFFFFF' : 'var(--text-primary)',
    // Active state: subtle inner shadow only, NO outer glow/shadow
    boxShadow: isActive
      ? 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
      : 'none',
    // Prevent pointer events on active button
    cursor: isActive ? 'default' : 'pointer',
  });

  // Ellipsis styles
  const ellipsisStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem', // Reduced from 2.5rem
    height: '2rem', // Reduced from 2.5rem
    fontSize: '0.75rem', // Reduced from 0.875rem
    color: 'var(--text-secondary)',
    cursor: 'default',
    userSelect: 'none',
  };

  return (
    <nav
      className={`flex items-center justify-end ${className}`}
      style={{ gap: '1rem' }} // Explicit 16px gap between Previous/PageNumbers/Next groups
      role="navigation"
      aria-label="Pagination Navigation"
    >
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        style={navButtonStyles(currentPage === 1)}
        className="pagination-nav-btn"
        aria-label="Previous page"
        onMouseEnter={(e) => {
          if (currentPage > 1) {
            e.currentTarget.style.borderColor = theme === 'dark'
              ? 'rgba(59, 130, 246, 0.5)'
              : 'rgba(37, 99, 235, 0.3)';
            e.currentTarget.style.background = theme === 'dark'
              ? 'rgba(59, 130, 246, 0.1)'
              : 'rgba(37, 99, 235, 0.05)';
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage > 1) {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.background = theme === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : '#FFFFFF';
          }
        }}
        onFocus={(e) => {
          if (currentPage > 1) {
            e.currentTarget.style.outline = theme === 'dark'
              ? '2px solid rgba(59, 130, 246, 0.6)'
              : '2px solid rgba(37, 99, 235, 0.5)';
            e.currentTarget.style.outlineOffset = '2px';
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center" style={{ gap: '0.75rem' }}> {/* Explicit 12px gap between page number buttons */}
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} style={ellipsisStyles} aria-hidden="true">
                …
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              style={pageButtonStyles(isActive)}
              className="pagination-page-btn"
              aria-label={`Page ${pageNum}`}
              aria-current={isActive ? 'page' : undefined}
              aria-disabled={isActive}
              disabled={isActive}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = theme === 'dark'
                    ? 'rgba(59, 130, 246, 0.5)'
                    : 'rgba(37, 99, 235, 0.3)';
                  e.currentTarget.style.background = theme === 'dark'
                    ? 'rgba(59, 130, 246, 0.1)'
                    : 'rgba(37, 99, 235, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = theme === 'dark'
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(203, 213, 225, 1)';
                  e.currentTarget.style.background = theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.05)'
                    : '#FFFFFF';
                }
              }}
              onFocus={(e) => {
                if (!isActive) {
                  e.currentTarget.style.outline = theme === 'dark'
                    ? '2px solid rgba(59, 130, 246, 0.6)'
                    : '2px solid rgba(37, 99, 235, 0.5)';
                  e.currentTarget.style.outlineOffset = '2px';
                }
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-disabled={currentPage === totalPages}
        style={navButtonStyles(currentPage === totalPages)}
        className="pagination-nav-btn"
        aria-label="Next page"
        onMouseEnter={(e) => {
          if (currentPage < totalPages) {
            e.currentTarget.style.borderColor = theme === 'dark'
              ? 'rgba(59, 130, 246, 0.5)'
              : 'rgba(37, 99, 235, 0.3)';
            e.currentTarget.style.background = theme === 'dark'
              ? 'rgba(59, 130, 246, 0.1)'
              : 'rgba(37, 99, 235, 0.05)';
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage < totalPages) {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.background = theme === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : '#FFFFFF';
          }
        }}
        onFocus={(e) => {
          if (currentPage < totalPages) {
            e.currentTarget.style.outline = theme === 'dark'
              ? '2px solid rgba(59, 130, 246, 0.6)'
              : '2px solid rgba(37, 99, 235, 0.5)';
            e.currentTarget.style.outlineOffset = '2px';
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}