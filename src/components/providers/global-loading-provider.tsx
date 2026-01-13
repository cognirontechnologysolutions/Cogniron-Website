"use client";

import { ReactNode } from "react";
import { GlobalLoadingProvider as LoadingContextProvider, useGlobalLoading } from "@/hooks/use-global-loading";
import GlobalLoadingOverlay from "@/components/ui/global-loading-overlay";

/**
 * Internal component that renders the overlay
 * Must be inside the context provider
 */
function LoadingOverlayRenderer() {
  const { isLoading } = useGlobalLoading();
  return <GlobalLoadingOverlay isLoading={isLoading} />;
}

/**
 * Global Loading Provider with Overlay
 * 
 * Wraps your application with the global loading context and automatically
 * renders the loading overlay when loading state is active.
 * 
 * Place this at the root of your application, typically in your main layout.
 * 
 * @component
 * @example
 * ```tsx
 * // In your root layout (e.g., app/layout.tsx):
 * import { GlobalLoadingProvider } from "@/components/providers/global-loading-provider";
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <GlobalLoadingProvider>
 *           {children}
 *         </GlobalLoadingProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */

interface GlobalLoadingProviderProps {
  children: ReactNode;
}

export function GlobalLoadingProvider({ children }: GlobalLoadingProviderProps) {
  return (
    <LoadingContextProvider>
      {children}
      <LoadingOverlayRenderer />
    </LoadingContextProvider>
  );
}
