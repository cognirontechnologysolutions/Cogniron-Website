# Snow Ball Loading Spinner - Documentation

## Overview

The Snow Ball Loading Spinner is a theme-aware loading indicator featuring a snow ball that orbits around a circular track with a smooth gradient trail. The gradient automatically adapts to light and dark themes using Cogniron's brand colors.

**Reference:** https://21st.dev/kedhar/snow-ball-loading-spinner/default

## Features

- ✅ Smooth circular orbit animation with arc path
- ✅ Theme-aware gradient trail (light/dark modes)
- ✅ Snow ball texture with 3D shadows and effects
- ✅ Cogniron brand gradient colors
- ✅ Optimized for 60fps performance
- ✅ Fully responsive and scalable
- ✅ Accessible with ARIA attributes

## Basic Usage

### Simple Loading Indicator

```tsx
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";

function MyComponent() {
  return (
    <div className="flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
```

### Conditional Loading

```tsx
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <YourContent />
      )}
    </div>
  );
}
```

## Global Page Loading

### Setup (Already Configured in App.tsx)

The app already uses the LoadingSpinner for page transitions via React's `Suspense` fallback.

### Manual Global Loading Control

For async operations, data fetching, or custom loading states:

```tsx
import { useGlobalLoading } from "@/hooks/use-global-loading";

function DataFetchingComponent() {
  const { startLoading, stopLoading, isLoading } = useGlobalLoading();

  const fetchData = async () => {
    startLoading();
    try {
      const data = await api.fetchSomething();
      // Process data...
    } catch (error) {
      console.error(error);
    } finally {
      stopLoading();
    }
  };

  return (
    <button onClick={fetchData} disabled={isLoading}>
      Load Data
    </button>
  );
}
```

### Multiple Simultaneous Operations

The loading system uses a counter, so multiple operations can run simultaneously:

```tsx
const handleMultipleOperations = async () => {
  // Each call increments the counter
  startLoading(); // counter: 1
  startLoading(); // counter: 2
  
  await Promise.all([
    operation1(),
    operation2(),
  ]);
  
  stopLoading(); // counter: 1 (still loading)
  stopLoading(); // counter: 0 (loading stops)
};
```

## Customization

### Theme Colors

The gradient colors are defined in `/styles/globals.css`:

```css
/* Light Mode */
:root {
  --loader-gradient-start: #04d4f4; /* Cyan */
  --loader-gradient-mid: #0d6cfd;   /* Blue */
  --loader-gradient-end: #8a5bff;   /* Purple */
}

/* Dark Mode */
.dark {
  --loader-gradient-start: #00a8d1; /* Deeper Cyan */
  --loader-gradient-mid: #0056c9;   /* Deeper Blue */
  --loader-gradient-end: #7443ec;   /* Deeper Purple */
}
```

### Animation Speed

Modify the animation duration in `/styles/globals.css`:

```css
.pl__ball {
  animation: ball 1.6s linear infinite; /* Change 1.6s to your preferred speed */
}

.pl__gradient-track {
  animation: gradientTrail 1.6s linear infinite; /* Keep in sync with ball */
}
```

### Size

Change the loader size by modifying the `.pl` class:

```css
.pl {
  width: 8rem;  /* Default: 8rem (128px) */
  height: 8rem;
}
```

Or use Tailwind classes:

```tsx
<div className="scale-75"> {/* 75% size */}
  <LoadingSpinner />
</div>
```

## Integration with Next.js App Router

If migrating to Next.js App Router in the future:

### app/loading.tsx

```tsx
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 dark:bg-slate-950/70 backdrop-blur-sm">
      <LoadingSpinner />
    </div>
  );
}
```

### With Suspense Boundaries

```tsx
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <LoadingSpinner />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AsyncComponent />
    </Suspense>
  );
}
```

## Technical Details

### Animation Architecture

1. **Ball Motion**: The snow ball follows a circular path using `rotate()` and `translateY()` transforms
2. **Gradient Trail**: A conic gradient rotates in sync with the ball, creating a trailing effect
3. **Masking**: The gradient is masked to show only the ring/track area (not the center)
4. **Texture Animation**: Internal textures rotate independently for added realism

### Performance Optimizations

- Uses `transform` and `opacity` for GPU-accelerated animations
- Minimal DOM elements (7 total)
- No heavy box-shadows beyond the reference
- `will-change` implicit via animations
- Runs at 60fps on modern devices

### Accessibility

- Uses proper ARIA attributes (`aria-live`, `aria-busy`, `role="status"`)
- Includes screen reader text ("Loading, please wait...")
- Respects `prefers-reduced-motion` (could be added if needed)

## File Structure

```
/components/ui/
  ├── snow-ball-loading-spinner.tsx       # Main component
  ├── global-loading-overlay.tsx          # Full-screen overlay wrapper
  └── snow-ball-loading-spinner.md        # This documentation

/components/providers/
  └── global-loading-provider.tsx         # Context provider + overlay

/hooks/
  └── use-global-loading.tsx              # Loading state hook

/styles/
  └── globals.css                         # All loader animations & styles
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (requires polyfills for CSS variables)

## Troubleshooting

### Loader not visible
- Check if the loader has sufficient contrast with the background
- Ensure CSS variables are defined in `globals.css`
- Verify theme provider is wrapping the component

### Animation stuttering
- Check for heavy JavaScript operations blocking the main thread
- Reduce concurrent animations on the page
- Ensure parent containers don't have `will-change: transform` conflicts

### Gradient not changing with theme
- Verify `.dark` class is applied to root element
- Check ThemeProvider implementation
- Ensure CSS variable fallbacks are present

## Credits

Original design reference: https://21st.dev/kedhar/snow-ball-loading-spinner/default  
Enhanced with Cogniron branding and theme awareness.
