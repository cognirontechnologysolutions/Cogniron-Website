"use client";

import { create } from 'zustand';

/**
 * Global Loading State Store
 * 
 * A simple zustand store to manage global loading state across the application.
 * Use this to show/hide the global loading overlay during page transitions,
 * data fetching, or any async operations.
 * 
 * @example
 * ```tsx
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

interface GlobalLoadingState {
  isLoading: boolean;
  loadingCount: number;
  startLoading: () => void;
  stopLoading: () => void;
  setLoading: (loading: boolean) => void;
}

export const useGlobalLoading = create<GlobalLoadingState>((set) => ({
  isLoading: false,
  loadingCount: 0,
  
  /**
   * Start showing the global loading overlay
   * Uses a counter to handle multiple simultaneous loading operations
   */
  startLoading: () => set((state) => ({
    loadingCount: state.loadingCount + 1,
    isLoading: true,
  })),
  
  /**
   * Stop showing the global loading overlay
   * Only hides when all loading operations are complete
   */
  stopLoading: () => set((state) => {
    const newCount = Math.max(0, state.loadingCount - 1);
    return {
      loadingCount: newCount,
      isLoading: newCount > 0,
    };
  }),
  
  /**
   * Directly set the loading state (use with caution)
   */
  setLoading: (loading: boolean) => set({
    isLoading: loading,
    loadingCount: loading ? 1 : 0,
  }),
}));
