"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "./snow-ball-loading-spinner";

/**
 * Global Page Loading Overlay Component
 * 
 * A full-screen overlay with the snow-ball loading spinner that displays
 * during page transitions or data loading. Features smooth fade-in/out
 * transitions and theme-aware backdrop blur.
 * 
 * @component
 * @example
 * ```tsx
 * import GlobalLoadingOverlay from "@/components/ui/global-loading-overlay";
 * 
 * function App() {
 *   const [isLoading, setIsLoading] = useState(false);
 *   
 *   return (
 *     <>
 *       <GlobalLoadingOverlay isLoading={isLoading} />
 *       <YourContent />
 *     </>
 *   );
 * }
 * ```
 */

interface GlobalLoadingOverlayProps {
  /** Controls whether the loading overlay is visible */
  isLoading: boolean;
  /** Optional delay before showing the overlay (in ms) to avoid flashing on quick loads */
  delay?: number;
}

export default function GlobalLoadingOverlay({ 
  isLoading, 
  delay = 200 
}: GlobalLoadingOverlayProps) {
  const [shouldShow, setShouldShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      // Delay showing the overlay to avoid flashing on quick loads
      timer = setTimeout(() => {
        setShouldShow(true);
        // Trigger fade-in after a brief moment for smooth transition
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, delay);
    } else {
      // Fade out immediately when loading completes
      setIsVisible(false);
      // Remove from DOM after fade-out transition completes
      timer = setTimeout(() => {
        setShouldShow(false);
      }, 300); // Match transition duration
    }

    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  if (!shouldShow) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999] 
        flex items-center justify-center
        bg-white/60 dark:bg-slate-950/70
        backdrop-blur-sm
        transition-opacity duration-300 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        // Ensure overlay covers everything including any fixed elements
        isolation: 'isolate',
      }}
      aria-live="polite"
      aria-busy={isLoading}
      role="status"
    >
      {/* Loading spinner with subtle container */}
      <div className="relative">
        <LoadingSpinner />
        
        {/* Optional: Screen reader text */}
        <span className="sr-only">
          Loading, please wait...
        </span>
      </div>
    </div>
  );
}
