---
name: page-structure
description: >-
  Use this skill to reference the page structure, component hierarchy,
  and section layout for all Arbachin e-commerce pages (Home, Category,
  Product Details).
---

# Arbachin Page Structure

## Shared Components

### Announcement Bar
- Full-width gold background
- Scrolling text: "Free Shipping on Orders Over ৳5,000 | Handcrafted with Love"
- Height: 36px

### Header / Navigation
- Sticky top, z-index: 1000
- Desktop: Logo center, nav left (Home, Sarees, Three Piece), nav right (Search, Wishlist, Cart)
- Mobile: Hamburger left, Logo center, Cart right
- Transparent on hero → white bg on scroll (class: `.scrolled`)

### Footer
- 4 columns: About, Quick Links, Customer Care, Newsletter
- Bottom bar: Copyright + Payment icons
- Background: var(--bg-dark)

---

## Page 1: Home (`index.html`)

```
├── Announcement Bar
├── Header (transparent over hero)
├── Hero Section (100vh, ken-burns bg)
│   ├── Subtitle (Inter, uppercase, spaced)
│   ├── Title (Playfair, large)
│   └── CTA Button (gold border)
├── Category Showcase (2-column grid)
│   ├── Sarees (large image + overlay text)
│   └── Three Piece (large image + overlay text)
├── Featured Products (heading + 4-col grid)
│   └── Product Cards × 6
├── Brand Story (image left, text right)
│   ├── Heading
│   ├── Paragraph
│   └── "Learn More" link
├── Testimonials (carousel)
├── Newsletter Section (centered form)
└── Footer
```

## Page 2: Category (`category.html`)

```
├── Announcement Bar
├── Header (solid white)
├── Breadcrumb (Home > Category Name)
├── Category Hero (40vh, overlay text)
├── Filter + Product Section
│   ├── Sidebar Filters (left, 280px)
│   │   ├── Category filter
│   │   ├── Price range
│   │   ├── Fabric filter
│   │   └── Color filter
│   └── Products Area (right)
│       ├── Toolbar (result count + sort dropdown)
│       ├── Product Grid (3-col)
│       │   └── Product Cards
│       └── Pagination
└── Footer
```

## Page 3: Product Details (`product.html`)

```
├── Announcement Bar
├── Header (solid white)
├── Breadcrumb (Home > Category > Product Name)
├── Product Section (2-column)
│   ├── Image Gallery (left, 55%)
│   │   ├── Main Image (large, zoomable)
│   │   └── Thumbnail Row (4 images)
│   └── Product Info (right, 45%)
│       ├── Product Name (Playfair)
│       ├── Price (current + original + discount badge)
│       ├── Short Description
│       ├── Color Selector (swatches)
│       ├── Size Info
│       ├── Quantity Selector
│       ├── Add to Cart Button (full-width, gold)
│       ├── Buy Now Button (outline)
│       └── Accordions
│           ├── Product Details
│           ├── Shipping Info
│           └── Care Instructions
├── Related Products Section
│   └── Product Cards × 4
└── Footer
```

## Responsive Breakpoints
```css
/* Mobile */    @media (max-width: 576px)
/* Tablet */    @media (min-width: 577px) and (max-width: 992px)
/* Desktop */   @media (min-width: 993px)
/* Wide */      @media (min-width: 1200px)
```

## File Dependencies
```
index.html    → style.css, script.js
category.html → style.css, script.js
product.html  → style.css, script.js
```
