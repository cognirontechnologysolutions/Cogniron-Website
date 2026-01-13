# Testimonial Slider Component - Documentation

## Overview

A carousel-style testimonial slider with three cards featuring a center-focused layout, depth effects through blur and fade, smooth transitions, and complete theme-aware styling for both light and dark modes.

## Features

- ✅ Three-card carousel layout with depth effect
- ✅ Center card highlighted and larger (scale: 1.0)
- ✅ Side cards faded and blurred (scale: 0.85, opacity: 0.5, blur: 2px)
- ✅ Circular profile images (56x56px)
- ✅ Theme-aware styling (light and dark modes)
- ✅ Auto-play with customizable delay (default: 7 seconds)
- ✅ Pause on hover
- ✅ Navigation arrows
- ✅ Pagination dots with active indicator
- ✅ Smooth transitions (500ms duration)
- ✅ Responsive design (mobile-first)
- ✅ Accessible (ARIA labels, keyboard support)

## Demo

Access the live demo at: `/demo/testimonial-slider`

## Installation & Usage

### Basic Implementation

```tsx
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';

function YourPage() {
  return (
    <section>
      <TestimonialSlider />
    </section>
  );
}
```

### Custom Testimonials

```tsx
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';

function CustomExample() {
  const testimonials = [
    {
      name: 'Lisa Anderson',
      designation: 'CEO at Global Technology Enterprise',
      image: 'https://example.com/profile1.jpg',
      text: 'Innovation meets reliability in quality assurance...'
    },
    {
      name: 'Director of Product',
      designation: 'Director of Product at Leading SaaS Enterprise',
      image: 'https://example.com/profile2.jpg',
      text: 'Their AI-assisted QE model scaled with our growth...'
    },
    {
      name: 'Michael Chen',
      designation: 'CTO at High-Growth Digital Platform',
      image: 'https://example.com/profile3.jpg',
      text: 'Predictive quality assurance that delivers real results...'
    },
  ];

  return (
    <TestimonialSlider 
      testimonials={testimonials}
      autoPlayDelay={5000} // 5 seconds
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `testimonials` | `Testimonial[]` | Default set | Array of testimonial objects |
| `autoPlayDelay` | `number` | `7000` | Auto-play delay in milliseconds |

### Testimonial Object Structure

```typescript
interface Testimonial {
  name: string;           // Person's name
  designation: string;    // Job title and company
  text: string;          // Testimonial quote
  image: string;         // Profile image URL
}
```

## Design Specifications

### Layout

- **Three-card carousel:**
  - Left card: Scale 0.85, opacity 0.5, blur 2px
  - Center card: Scale 1.0, opacity 1.0, no blur (active/highlighted)
  - Right card: Scale 0.85, opacity 0.5, blur 2px
  
- **Card dimensions:**
  - Center card: 440px–500px width (responsive)
  - Side cards: 320px width (hidden on mobile)
  - Min height: 360px (inactive), 380px (active)
  - Border radius: 24px
  
- **Profile image:**
  - Size: 56x56px (circular)
  - Position: Top-left of card content
  - Border: 2px solid (theme-aware)

- **Content spacing:**
  - Padding: 2rem (32px)
  - Gap between image and text: 1rem (16px)
  - Gap between cards: 1.5rem–2rem

### Light Theme Styling

#### Colors

```css
/* Background Gradient */
background: linear-gradient(135deg, #E9F2FF 0%, #F8F3FF 100%);

/* Active Card */
background: linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%);
border: 1px solid rgba(220, 229, 240, 0.8);
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);

/* Inactive Cards */
background: linear-gradient(135deg, #F5F9FF 0%, #FBF8FF 100%);
border: 1px solid rgba(220, 229, 240, 0.5);
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

/* Typography */
Title Color: #0D2344 (Dark Navy)
Body Color: #44546A

/* Profile Image */
border: 2px solid #DCE5F0;
```

#### Visual Hierarchy

- **Contrast Ratio:** 7:1+ for text (WCAG AAA)
- **Font Weights:** 600 for names, 400 for body text
- **Line Height:** 1.7 for testimonial text

### Dark Theme Styling

#### Colors

```css
/* Background Gradient */
background: linear-gradient(135deg, #0A1020 0%, #181C30 100%);

/* Active Card */
background: linear-gradient(135deg, #141A2A 0%, #1E2438 100%);
border: 1px solid rgba(60, 115, 255, 0.3);
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5), 
            inset 0 1px 2px rgba(255, 255, 255, 0.05);

/* Inactive Cards */
background: linear-gradient(135deg, #0F1420 0%, #1A1E2E 100%);
border: 1px solid rgba(60, 115, 255, 0.15);
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3), 
            inset 0 1px 2px rgba(255, 255, 255, 0.03);

/* Typography */
Title Color: #FFFFFF
Body Color: #B5C3D0

/* Profile Image */
border: 2px solid rgba(60, 115, 255, 0.4);
box-shadow: 0 0 16px rgba(60, 115, 255, 0.4); /* Glow effect */
```

#### Depth Effects

- **Subtle inner shadows** for card depth
- **Outer glow** on profile images (#3C73FF, 40% opacity)
- **Border glow** on active card (blue accent)

## Animations & Transitions

### Transition Timing

```css
/* Card transitions */
transition: all 500ms ease-out;

/* Active state transitions */
transition: transform 500ms ease-out,
            opacity 500ms ease-out,
            filter 500ms ease-out;
```

### Scale Animation

When a card becomes active (center position):

1. **From side position:**
   - Scale: 0.85 → 1.0
   - Opacity: 0.5 → 1.0
   - Blur: 2px → 0px
   - Duration: 500ms

2. **To side position:**
   - Scale: 1.0 → 0.85
   - Opacity: 1.0 → 0.5
   - Blur: 0px → 2px
   - Duration: 500ms

### Transition States

During transition (`isTransitioning = true`):
- All cards slightly scale down (0.95)
- Opacity reduces temporarily (0.8)
- Side cards shift position slightly

## Responsive Design

### Breakpoints

```css
/* Mobile (< 1024px) */
- Show only center card
- Full width with padding
- Navigation arrows remain visible
- Side cards hidden (display: none)

/* Tablet & Desktop (≥ 1024px) */
- Show all three cards
- Center card: 440px–500px
- Side cards: 320px
- Gap: 1.5rem–2rem
```

### Mobile Optimizations

- Touch swipe support (future enhancement)
- Larger touch targets for arrows (48x48px)
- Simplified layout with single card view
- Optimized image loading (lazy loading)

## Accessibility

### ARIA Attributes

```html
<!-- Navigation buttons -->
<button aria-label="Previous testimonial">
<button aria-label="Next testimonial">

<!-- Pagination dots -->
<button 
  aria-label="Go to testimonial 1"
  aria-current="true"
>
```

### Keyboard Support

- **Left Arrow:** Previous testimonial
- **Right Arrow:** Next testimonial
- **Tab:** Navigate to controls
- **Space/Enter:** Activate buttons

### Screen Reader Support

- Proper semantic HTML (`<blockquote>` for testimonials)
- Alt text for profile images
- ARIA labels for all interactive elements
- Live regions for state changes (future enhancement)

## Performance Optimizations

### Image Loading

```tsx
<img 
  src={testimonial.image} 
  alt={testimonial.name}
  loading="lazy"  // Lazy load side cards
/>
```

### CSS Optimization

- GPU-accelerated transforms (scale, translateX)
- Minimal repaints (opacity, transform only)
- Will-change hints on animated elements
- Debounced transitions

### Animation Performance

- 60fps animations (no jank)
- Transform-based animations only
- No layout thrashing
- Optimized blur filter usage

## Customization

### Adjusting Auto-Play Speed

```tsx
<TestimonialSlider autoPlayDelay={10000} /> // 10 seconds
```

### Disabling Auto-Play

```tsx
// Modify in component:
const [isPaused, setIsPaused] = useState(true); // Always paused
```

### Custom Styling

You can extend the component by wrapping it:

```tsx
<div className="my-custom-wrapper">
  <TestimonialSlider />
</div>
```

### Theme Variables

The component automatically adapts to your theme context. Ensure your `ThemeProvider` is properly configured.

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (requires polyfills for CSS gradients and transforms)

## Troubleshooting

### Images not loading

- Verify image URLs are accessible
- Check CORS policies for external images
- Ensure image dimensions are appropriate (recommended: 200x200px minimum)

### Animations stuttering

- Reduce number of concurrent animations
- Check for heavy JavaScript on the page
- Ensure GPU acceleration is enabled
- Test on target devices

### Theme not switching

- Verify `ThemeProvider` is wrapping the component
- Check that theme context is properly configured
- Ensure CSS transitions are not disabled globally

### Cards not aligning properly

- Check parent container has adequate width
- Verify responsive breakpoints match your design
- Test on actual devices (not just browser resize)

## Examples in Production

### Homepage Integration

```tsx
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';

export function HomePage() {
  return (
    <div>
      {/* Other sections */}
      
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">What Our Clients Say</h2>
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Other sections */}
    </div>
  );
}
```

### With Custom Header

```tsx
<section>
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
    <p className="text-lg">Trusted by industry leaders worldwide</p>
  </div>
  <TestimonialSlider />
</section>
```

## File Structure

```
/components/ui/
  ├── TestimonialSlider.tsx       # Main component
  └── TestimonialSlider.md        # This documentation

/pages/
  └── TestimonialSliderDemo.tsx   # Demo page with examples

/contexts/
  └── ThemeContext.tsx            # Theme provider
```

## Future Enhancements

- [ ] Touch swipe support for mobile
- [ ] Keyboard arrow key navigation
- [ ] Animated entrance on scroll
- [ ] Video testimonials support
- [ ] Star rating display
- [ ] Company logo integration
- [ ] Export as image/PDF functionality
- [ ] Analytics tracking for engagement

## Credits

Design specifications provided by client requirements.  
Implementation follows modern React best practices and accessibility guidelines.

## License

Proprietary - Part of the Cogniron website project.
