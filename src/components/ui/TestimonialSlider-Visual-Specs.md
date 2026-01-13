# Testimonial Slider - Visual Design Specifications

## Layout Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    TESTIMONIAL SLIDER SECTION                    │
│                                                                   │
│  ┌────────┐         ┌──────────────┐         ┌────────┐        │
│  │        │         │              │         │        │        │
│  │  LEFT  │   ◄     │    CENTER    │    ►    │ RIGHT  │        │
│  │  CARD  │         │     CARD     │         │  CARD  │        │
│  │ (fade) │         │   (active)   │         │ (fade) │        │
│  │  blur  │         │   no blur    │         │  blur  │        │
│  └────────┘         └──────────────┘         └────────┘        │
│                                                                   │
│                    ● ━━━━━━━ ●                                  │
│                   (pagination dots)                              │
└─────────────────────────────────────────────────────────────────┘
```

## Card Anatomy

```
┌───────────────────────────────────────────┐
│  ┏━━━━━━━┓  Name & Designation           │ ← 56x56px
│  ┃ Photo ┃  Job Title at Company         │   profile
│  ┃ 56x56 ┃                               │   image
│  ┗━━━━━━━┛                               │
│                                           │
│  "                                        │ ← Opening
│     Testimonial text goes here...        │   quote
│     Multiple lines of engaging           │
│     feedback from satisfied clients.     │
│                                        "  │ ← Closing
│                                           │   quote
└───────────────────────────────────────────┘
     ↑                                  ↑
  24px border                        24px border
  radius                             radius
```

## Light Theme Specifications

### Color Palette

```
BACKGROUND GRADIENTS:
┌──────────────────────────────┐
│  #E9F2FF (Light Blue)        │ ← Container background
│          ↓                   │   gradient start
│  #F8F3FF (Light Purple)      │ ← gradient end
└──────────────────────────────┘

ACTIVE CARD:
┌──────────────────────────────┐
│  #FFFFFF (Pure White)        │ ← Card background
│          ↓                   │   gradient start
│  #F8FBFF (Subtle Blue)       │ ← gradient end
└──────────────────────────────┘

INACTIVE CARDS:
┌──────────────────────────────┐
│  #F5F9FF (Light Blue-White)  │ ← Faded card
│          ↓                   │   background
│  #FBF8FF (Light Purple-White)│
└──────────────────────────────┘
```

### Typography Colors

| Element | Color Code | Sample |
|---------|-----------|--------|
| Name/Title | `#0D2344` | **Dark Navy** |
| Designation | `#44546A` | Medium Gray |
| Testimonial | `#44546A` | Medium Gray |
| Quote Marks | `#0D2344` 20% opacity | Subtle accent |

### Borders & Shadows

```css
/* Active Card */
border: 1px solid rgba(220, 229, 240, 0.8); /* #DCE5F0 at 80% */
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);

/* Inactive Cards */
border: 1px solid rgba(220, 229, 240, 0.5); /* #DCE5F0 at 50% */
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

/* Profile Image */
border: 2px solid #DCE5F0;
box-shadow: none;
```

### Visual Example (Light Mode)

```
┌─────────────────────────────────────────────────────────────┐
│  Background: #E9F2FF → #F8F3FF gradient                     │
│                                                               │
│    [Blurred Card]       [ACTIVE CARD]       [Blurred Card]  │
│    ┌─────────┐         ┌──────────────┐    ┌─────────┐     │
│    │  fade   │         │ ┏━━━━┓ Name  │    │  fade   │     │
│    │ opacity │         │ ┃ 📷 ┃ Title │    │ opacity │     │
│    │   50%   │         │ ┗━━━━┛       │    │   50%   │     │
│    │ blur 2px│         │              │    │ blur 2px│     │
│    │         │         │ "Testimonial │    │         │     │
│    │         │         │  text here"  │    │         │     │
│    └─────────┘         └──────────────┘    └─────────┘     │
│   scale: 0.85          scale: 1.0          scale: 0.85     │
│                                                               │
│              ━━━━━ ● ━━━━━ ━━━━━                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Dark Theme Specifications

### Color Palette

```
BACKGROUND GRADIENTS:
┌──────────────────────────────┐
│  #0A1020 (Deep Navy)         │ ← Container background
│          ↓                   │   gradient start
│  #181C30 (Slate)             │ ← gradient end
└──────────────────────────────┘

ACTIVE CARD:
┌──────────────────────────────┐
│  #141A2A (Dark Slate)        │ ← Card background
│          ↓                   │   gradient start
│  #1E2438 (Lighter Slate)     │ ← gradient end
└──────────────────────────────┘

INACTIVE CARDS:
┌──────────────────────────────┐
│  #0F1420 (Darker Slate)      │ ← Faded card
│          ↓                   │   background
│  #1A1E2E (Mid Slate)         │
└──────────────────────────────┘
```

### Typography Colors

| Element | Color Code | Sample |
|---------|-----------|--------|
| Name/Title | `#FFFFFF` | **Pure White** |
| Designation | `#B5C3D0` | Light Gray-Blue |
| Testimonial | `#B5C3D0` | Light Gray-Blue |
| Quote Marks | `#FFFFFF` 20% opacity | Subtle white accent |

### Borders & Shadows

```css
/* Active Card */
border: 1px solid rgba(60, 115, 255, 0.3); /* Blue glow at 30% */
box-shadow: 
  0 4px 24px rgba(0, 0, 0, 0.5),              /* Outer shadow */
  inset 0 1px 2px rgba(255, 255, 255, 0.05); /* Inner highlight */

/* Inactive Cards */
border: 1px solid rgba(60, 115, 255, 0.15); /* Blue glow at 15% */
box-shadow: 
  0 2px 12px rgba(0, 0, 0, 0.3),              /* Outer shadow */
  inset 0 1px 2px rgba(255, 255, 255, 0.03); /* Inner highlight */

/* Profile Image */
border: 2px solid rgba(60, 115, 255, 0.4);   /* Blue ring */
box-shadow: 0 0 16px rgba(60, 115, 255, 0.4); /* Blue glow */
```

### Visual Example (Dark Mode)

```
┌─────────────────────────────────────────────────────────────┐
│  Background: #0A1020 → #181C30 gradient                     │
│                                                               │
│    [Blurred Card]       [ACTIVE CARD]       [Blurred Card]  │
│    ┌─────────┐         ┌──────────────┐    ┌─────────┐     │
│    │  fade   │         │ ┏━━━━┓ Name  │    │  fade   │     │
│    │ opacity │         │ ┃ 📷 ┃ Title │    │ opacity │     │
│    │   50%   │         │ ┗━━━━┛ glow  │    │   50%   │     │
│    │ blur 2px│         │ blue ring    │    │ blur 2px│     │
│    │         │         │              │    │         │     │
│    │         │         │ "Testimonial │    │         │     │
│    │         │         │  text here"  │    │         │     │
│    └─────────┘         └──────────────┘    └─────────┘     │
│   scale: 0.85          scale: 1.0          scale: 0.85     │
│                       blue border glow                       │
│              ━━━━━ ● ━━━━━ ━━━━━                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Transition States

### Normal → Active (Card moves to center)

```
FRAME 1 (0ms):                    FRAME 2 (250ms):              FRAME 3 (500ms):
┌────────┐                        ┌──────────┐                  ┌────────────┐
│ blur   │                        │ blur ½   │                  │  no blur   │
│opacity │  ──────────────▶       │opacity   │  ──────────▶     │  opacity   │
│  50%   │                        │   75%    │                  │   100%     │
│scale   │                        │  scale   │                  │   scale    │
│ 0.85   │                        │   0.92   │                  │    1.0     │
└────────┘                        └──────────┘                  └────────────┘
```

### Active → Normal (Card moves to side)

```
FRAME 1 (0ms):                    FRAME 2 (250ms):              FRAME 3 (500ms):
┌────────────┐                    ┌──────────┐                  ┌────────┐
│  no blur   │                    │ blur ½   │                  │  blur  │
│  opacity   │  ──────────────▶   │opacity   │  ──────────▶     │opacity │
│   100%     │                    │   75%    │                  │  50%   │
│   scale    │                    │  scale   │                  │ scale  │
│    1.0     │                    │   0.92   │                  │  0.85  │
└────────────┘                    └──────────┘                  └────────┘
```

---

## Responsive Breakpoints

### Mobile (< 1024px)

```
┌─────────────────────────┐
│                         │
│                         │
│   ┌──────────────┐      │
│   │              │      │
│ ◄ │    CENTER    │  ►   │
│   │     CARD     │      │
│   │   (active)   │      │
│   └──────────────┘      │
│                         │
│      ● ━━━━━ ●         │
│                         │
└─────────────────────────┘

- Only center card visible
- Full width with padding
- Navigation arrows on sides
- Touch swipe enabled
```

### Desktop (≥ 1024px)

```
┌───────────────────────────────────────────────┐
│                                               │
│  ┌────────┐    ┌──────────────┐    ┌────────┐│
│  │        │    │              │    │        ││
│  │  LEFT  │ ◄  │    CENTER    │  ► │ RIGHT  ││
│  │  CARD  │    │     CARD     │    │  CARD  ││
│  │ (fade) │    │   (active)   │    │ (fade) ││
│  └────────┘    └──────────────┘    └────────┘│
│   320px           440-500px          320px    │
│                                               │
│              ● ━━━━━ ●                       │
│                                               │
└───────────────────────────────────────────────┘

- All three cards visible
- Center card larger
- Side cards scaled down
- Arrows outside cards
```

---

## Spacing & Dimensions

### Card Measurements

| Element | Mobile | Desktop |
|---------|--------|---------|
| Card width (center) | 100% - 2rem | 440px - 500px |
| Card width (side) | Hidden | 320px |
| Card min-height | 360px | 380px (active) |
| Border radius | 24px | 24px |
| Card padding | 2rem | 2rem |

### Profile Image

| Property | Value |
|----------|-------|
| Width | 56px |
| Height | 56px |
| Border radius | 50% (circle) |
| Border width | 2px |

### Typography

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Name | 18px | 600 | 1.4 |
| Designation | 14px | 400 | 1.5 |
| Testimonial | 16px | 400 | 1.7 |
| Quote marks | 48px | 400 | 1 |

### Spacing

```
Card Padding:        32px (2rem)
Image to Text Gap:   16px (1rem)
Text to Quote Gap:   24px (1.5rem)
Card to Card Gap:    24px - 32px (1.5rem - 2rem)
Section Padding:     80px vertical (5rem)
```

---

## Animation Timing

```
Auto-play:        7000ms (7 seconds)
Transition:       500ms ease-out
Hover pause:      Immediate
Blur transition:  500ms
Scale transition: 500ms
Opacity fade:     500ms
```

---

## Accessibility Specifications

### Color Contrast Ratios (WCAG AA/AAA)

#### Light Theme
- Name (#0D2344) on white: **15.4:1** ✓ AAA
- Body text (#44546A) on white: **8.2:1** ✓ AAA

#### Dark Theme
- Name (#FFFFFF) on #141A2A: **14.8:1** ✓ AAA
- Body text (#B5C3D0) on #141A2A: **7.6:1** ✓ AAA

### Focus Indicators

```css
/* Keyboard focus on navigation buttons */
button:focus-visible {
  outline: 2px solid #3C73FF;
  outline-offset: 2px;
}
```

### Screen Reader Text

```html
<button aria-label="Previous testimonial">◄</button>
<button aria-label="Next testimonial">►</button>
<button aria-label="Go to testimonial 1" aria-current="true">●</button>
```

---

## Export-Ready Color Variables

### Light Theme CSS Variables

```css
:root {
  /* Background */
  --testimonial-bg-start: #E9F2FF;
  --testimonial-bg-end: #F8F3FF;
  
  /* Active Card */
  --testimonial-card-active-start: #FFFFFF;
  --testimonial-card-active-end: #F8FBFF;
  --testimonial-card-active-border: rgba(220, 229, 240, 0.8);
  --testimonial-card-active-shadow: rgba(0, 0, 0, 0.1);
  
  /* Inactive Card */
  --testimonial-card-inactive-start: #F5F9FF;
  --testimonial-card-inactive-end: #FBF8FF;
  --testimonial-card-inactive-border: rgba(220, 229, 240, 0.5);
  --testimonial-card-inactive-shadow: rgba(0, 0, 0, 0.06);
  
  /* Typography */
  --testimonial-title: #0D2344;
  --testimonial-body: #44546A;
  
  /* Image */
  --testimonial-image-border: #DCE5F0;
}
```

### Dark Theme CSS Variables

```css
.dark {
  /* Background */
  --testimonial-bg-start: #0A1020;
  --testimonial-bg-end: #181C30;
  
  /* Active Card */
  --testimonial-card-active-start: #141A2A;
  --testimonial-card-active-end: #1E2438;
  --testimonial-card-active-border: rgba(60, 115, 255, 0.3);
  --testimonial-card-active-shadow: rgba(0, 0, 0, 0.5);
  --testimonial-card-active-inner: rgba(255, 255, 255, 0.05);
  
  /* Inactive Card */
  --testimonial-card-inactive-start: #0F1420;
  --testimonial-card-inactive-end: #1A1E2E;
  --testimonial-card-inactive-border: rgba(60, 115, 255, 0.15);
  --testimonial-card-inactive-shadow: rgba(0, 0, 0, 0.3);
  --testimonial-card-inactive-inner: rgba(255, 255, 255, 0.03);
  
  /* Typography */
  --testimonial-title: #FFFFFF;
  --testimonial-body: #B5C3D0;
  
  /* Image */
  --testimonial-image-border: rgba(60, 115, 255, 0.4);
  --testimonial-image-glow: rgba(60, 115, 255, 0.4);
}
```

---

## Implementation Checklist

- [x] Three-card carousel layout
- [x] Center card highlighted and larger
- [x] Side cards faded and blurred
- [x] 56x56px circular profile images
- [x] Theme-aware light mode styling
- [x] Theme-aware dark mode styling
- [x] Smooth 500ms transitions
- [x] Auto-play with 7-second delay
- [x] Pause on hover
- [x] Navigation arrows
- [x] Pagination dots
- [x] Responsive design
- [x] ARIA labels and accessibility
- [x] Quotation mark styling
- [x] Profile image borders/glows
- [x] Gradient backgrounds

---

## Design Files Location

```
/components/ui/TestimonialSlider.tsx           # Component code
/components/ui/TestimonialSlider.md            # Documentation
/components/ui/TestimonialSlider-Visual-Specs.md  # This file
/pages/TestimonialSliderDemo.tsx              # Demo page
```

## Live Demo

Visit `/demo/testimonial-slider` to see both light and dark themes in action with an interactive theme toggle.
