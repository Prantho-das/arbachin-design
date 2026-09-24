---
name: luxury-fashion-design
description: >-
  Use this skill when building luxury fashion e-commerce pages for Arbachin.
  Covers design system, color palette, typography, layout patterns, and
  component specifications inspired by Sabyasachi and Ritu Kumar aesthetics.
---

# Luxury Fashion Design System — Arbachin

## Design Philosophy
- **Sabyasachi-inspired**: Cinematic, editorial, full-bleed imagery, serif typography, muted warm tones, minimal UI chrome
- **Ritu Kumar-inspired**: Warm gold accents, elegant product grids, detailed product cards, breadcrumbs, sidebar filters

## Color Palette
```css
:root {
  /* Brand Colors — derived from Arbachin logo */
  --brand: #1a3c2a;             /* Deep forest green (logo primary) */
  --brand-light: #2a5e40;       /* Lighter green */
  --brand-dark: #0f2419;        /* Darker green */
  --brand-muted: rgba(26, 60, 42, 0.12);

  /* Accent — warm gold to complement the green */
  --accent: #c9a84c;            /* Rich gold */
  --accent-hover: #d4b86a;      /* Lighter gold hover */
  --accent-muted: rgba(201, 168, 76, 0.15);

  /* Backgrounds — warm cream from logo bg */
  --bg: #f0ebe1;                /* Warm cream (logo background) */
  --bg-light: #f7f4ee;          /* Lighter cream */
  --bg-white: #ffffff;
  --bg-card: #ffffff;
  --bg-dark: #0f1a14;           /* Dark green-black for footer */

  /* Text */
  --text-primary: #1a3c2a;      /* Brand green for headings */
  --text-body: #2d2d2d;         /* Near-black for body */
  --text-secondary: #6b6b6b;
  --text-light: #999999;
  --text-on-dark: #e8e0d5;

  /* Utility */
  --border: #d9d0c3;
  --border-light: #e8e0d5;
  --overlay: rgba(15, 36, 25, 0.6);
  --shadow-sm: 0 2px 8px rgba(26, 60, 42, 0.06);
  --shadow-md: 0 4px 20px rgba(26, 60, 42, 0.08);
  --shadow-lg: 0 8px 40px rgba(26, 60, 42, 0.12);
}
```

## Typography
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, sans-serif;
```

### Type Scale
| Element | Font | Size | Weight | Spacing |
|---------|------|------|--------|---------|
| Hero Title | Playfair | 64px / 4rem | 500 | 2px |
| Section Title | Playfair | 36px / 2.25rem | 500 | 1.5px |
| Product Name | Playfair | 20px / 1.25rem | 500 | 0.5px |
| Body | Inter | 15px / 0.9375rem | 400 | 0.3px |
| Caption | Inter | 13px / 0.8125rem | 400 | 0.5px |
| Button | Inter | 14px / 0.875rem | 500 | 2px |
| Nav Link | Inter | 13px / 0.8125rem | 500 | 2.5px |

## Layout Rules
1. **Max content width**: 1440px with 60px side padding
2. **Product grid**: 4 columns desktop, 3 tablet, 2 mobile
3. **Image aspect ratio**: 3:4 for product images
4. **Section spacing**: 100px between major sections
5. **Card gap**: 24px between product cards

## Component Patterns

### Navigation
- Fixed top, transparent on hero → solid on scroll
- Logo centered, nav links split left/right
- Hamburger on mobile with slide-in drawer
- Gold accent underline on active/hover links

### Product Card
- Image with overflow:hidden, scale(1.05) on hover with 0.6s ease
- Product name in Playfair Display
- Price with ৳ symbol
- Subtle border, no heavy shadows
- "Quick View" overlay on hover

### Hero Section
- Full-viewport height with ken-burns animation on background
- Centered text with letter-spacing
- CTA button with gold border, transparent bg

### Footer
- Dark background (#0d0d0d)
- Gold accent headings
- 4-column grid layout
- Social icons with hover gold effect

## Animation Guidelines
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--duration-fast: 0.2s;
--duration-normal: 0.4s;
--duration-slow: 0.8s;
```

- Image hover zoom: `transform: scale(1.05)` with 0.6s
- Fade-in on scroll: `opacity 0→1, translateY 30px→0` with 0.8s
- Button hover: background fill left→right with 0.3s
- Nav scroll: background opacity transition 0.3s
