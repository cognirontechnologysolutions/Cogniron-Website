"use client";

/**
 * Snow Ball Loading Spinner Component
 * 
 * A theme-aware loading spinner with a snow ball that orbits around a circular track
 * with a moving gradient trail. The gradient automatically adapts to light/dark themes.
 * 
 * @component
 * @example
 * ```tsx
 * import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";
 * 
 * function MyComponent() {
 *   return (
 *     <div className="flex items-center justify-center">
 *       <LoadingSpinner />
 *     </div>
 *   );
 * }
 * ```
 */
export default function LoadingSpinner() {
  return (
    <div className="pl">
      <div className="pl__outer-ring"></div>
      <div className="pl__inner-ring"></div>

      {/* Gradient trail container - styled in CSS */}
      <div className="pl__gradient-track"></div>

      <div className="pl__track-cover"></div>
      <div className="pl__ball">
        <div className="pl__ball-texture"></div>
        <div className="pl__ball-outer-shadow"></div>
        <div className="pl__ball-inner-shadow"></div>
        <div className="pl__ball-side-shadows"></div>
      </div>
    </div>
  );
}
