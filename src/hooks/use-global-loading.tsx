"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

/**
 * Global Loading State Context
 * 
 * Provides global loading state management across the application.
 * Use this to show/hide the global loading overlay during page transitions,
 * data fetching, or any async operations.
 * 
 * @example
 * ```tsx
 * // In your root layout or App component:
 * import { GlobalLoadingProvider } from "@/hooks/use-global-loading";
 * 
 * function App() {
 *   return (
 *     <GlobalLoadingProvider>
 *       <YourApp />
 *     </GlobalLoadingProvider>
 *   );
 * }
 * 
 * // In any component:
 * import { useGlobalLoading } from "@/hooks/use-global-loading";
 * 
 * function MyComponent() {
 *   const { startLoading, stopLoading } = useGlobalLoading();
 *   
 *   const handleAction = async () => {
 *     startLoading();
 *     try {
 *       await fetchData();
 *     } finally {
 *       stopLoading();
 *     }
 *   };
 * }
 * ```
 */

interface GlobalLoadingContextType {
  isLoading: boolean;
  loadingCount: number;
  startLoading: () => void;
  stopLoading: () => void;
  setLoading: (loading: boolean) => void;
}

const GlobalLoadingContext = createContext<GlobalLoadingContextType | undefined>(undefined);

interface GlobalLoadingProviderProps {
  children: ReactNode;
}

export function GlobalLoadingProvider({ children }: GlobalLoadingProviderProps) {
  const [loadingCount, setLoadingCount] = useState(0);
  const isLoading = loadingCount > 0;

  /**
   * Start showing the global loading overlay
   * Uses a counter to handle multiple simultaneous loading operations
   */
  const startLoading = useCallback(() => {
    setLoadingCount((count) => count + 1);
  }, []);

  /**
   * Stop showing the global loading overlay
   * Only hides when all loading operations are complete
   */
  const stopLoading = useCallback(() => {
    setLoadingCount((count) => Math.max(0, count - 1));
  }, []);

  /**
   * Directly set the loading state (use with caution)
   */
  const setLoading = useCallback((loading: boolean) => {
    setLoadingCount(loading ? 1 : 0);
  }, []);

  return (
    <GlobalLoadingContext.Provider
      value={{
        isLoading,
        loadingCount,
        startLoading,
        stopLoading,
        setLoading,
      }}
    >
      {children}
    </GlobalLoadingContext.Provider>
  );
}

/**
 * Hook to access global loading state and controls
 * Must be used within GlobalLoadingProvider
 */
export function useGlobalLoading() {
  const context = useContext(GlobalLoadingContext);
  
  if (context === undefined) {
    throw new Error('useGlobalLoading must be used within GlobalLoadingProvider');
  }
  
  return context;
}
