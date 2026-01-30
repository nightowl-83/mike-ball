
# Intelligence Over Inventory - Slide-Based Navigation Redesign

## Overview
Transform the Intelligence Over Inventory project page from a traditional scroll-based layout to a modern slide-based presentation format with a persistent left-side navigation column. Each section becomes a full-viewport "slide" that users can navigate via clicks or scrolling.

---

## Visual Concept

```text
+------------------+----------------------------------------+
|                  |                                        |
|   01 Overview    |                                        |
|   02 Challenge   |          CURRENT SECTION               |
|  [03 Solution]   |          FULL VIEWPORT                 |
|   04 Impact      |          CONTENT                       |
|   05 Strategy    |                                        |
|   06 Gallery     |                                        |
|   07 Vision      |                                        |
|                  |                                        |
+------------------+----------------------------------------+
     Left Nav                    Main Content
     (Fixed)                   (Snap Scrolling)
```

---

## Key Features

### 1. Left-Side Vertical Navigation
- **Fixed position** on desktop (sticky on left edge)
- Lists all major sections with their numbers
- **Active state highlighting** for current section
- **Clickable** to jump to any section
- Subtle hover states matching existing design system
- Collapses to bottom indicator on mobile

### 2. Full-Viewport Sections
- Each section fills `100vh` (full viewport height)
- Content vertically centered within each section
- Uses CSS `scroll-snap-type: y mandatory` for crisp transitions
- Each section has `scroll-snap-align: start`

### 3. Scroll Behavior
- Native scroll still works (users can scroll freely)
- Snap points create satisfying "click" into each section
- Smooth scroll for navigation clicks

### 4. Section Tracking
- Uses Intersection Observer to track active section
- Updates left nav highlight as user scrolls
- Replaces existing `StickyNavHeader` and `ProjectSectionNav` components

---

## Implementation Details

### New Component: `SlideNav.tsx`

```text
src/components/SlideNav.tsx
```

**Purpose:** Reusable left-side navigation component for slide-based project pages

**Props Interface:**
- `sections`: Array of section data (id, label, number, ref)
- `currentIndex`: Currently active section index
- `onNavigate`: Callback when user clicks a nav item
- `className`: Optional additional styling

**Structure:**
- Fixed left positioning: `fixed left-0 top-0 h-screen`
- Width: `w-16 md:w-64` (icons only on small screens, full labels on desktop)
- Background: `bg-background/80 backdrop-blur-lg`
- Border: `border-r border-border`
- Z-index: `z-40`

**Navigation Items:**
- Number badge: `text-xs text-muted-foreground`
- Label: `text-sm font-medium`
- Active state: `text-primary bg-primary/10`
- Hover state: `hover:bg-accent/50`

### Modified: `IntelligenceOverInventoryProject.tsx`

**Layout Changes:**

1. **Root Container:**
```tsx
<div className="flex">
  <SlideNav sections={sections} currentIndex={currentSectionIndex} onNavigate={scrollToSection} />
  <main className="flex-1 ml-16 md:ml-64 h-screen overflow-y-auto snap-y snap-mandatory">
    {/* Sections */}
  </main>
</div>
```

2. **Each Section:**
```tsx
<section 
  ref={sectionRef} 
  className="h-screen snap-start flex items-center justify-center overflow-hidden"
>
  <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
    {/* Section content */}
  </div>
</section>
```

3. **Remove existing navigation components:**
- Remove `StickyNavHeader` import and usage
- Remove `ProjectSectionNav` import and usage
- Simplify section tracking with direct scroll container ref

### New Hook: `useSlideNavigation.ts`

```text
src/hooks/useSlideNavigation.ts
```

**Purpose:** Manages scroll-snap navigation state for slide-based pages

**Features:**
- Tracks current section via Intersection Observer on scroll container
- Provides `scrollToSection(index)` function
- Returns `currentSectionIndex` state
- Handles keyboard navigation (up/down arrows)

**Interface:**
```tsx
interface UseSlideNavigationReturn {
  currentSectionIndex: number;
  scrollToSection: (index: number) => void;
  containerRef: RefObject<HTMLDivElement>;
}
```

---

## Section-Specific Adjustments

### Hero Section
- Remove two-column split (not needed for slide format)
- Center content with max-width constraint
- Hero image moves below text or becomes background element
- Back button remains in top-left corner

### The Challenge (/01)
- Condense to fit single viewport
- Problem bullets become a focused list
- Visual placeholder on right (or below on mobile)

### The Insight Engine (/02)
- Flow steps arranged horizontally on desktop
- Steps stack vertically on mobile
- Background treatment remains

### Dual-Interface Impact (/03)
- Tabs remain functional
- Tab content condensed to fit viewport
- Image placeholders sized appropriately

### Strategy & Influence (/04)
- 3 cards arranged in row
- Cards scale down slightly to fit viewport
- On mobile: vertical stack with scroll-snap within section (optional)

### Design Details (/05)
- 2x2 grid condensed
- Images smaller but still visible
- Captions beneath

### The AI Evolution (/06)
- Centered text block
- Plenty of whitespace
- Acts as a visual breath before navigation

### Next Project (/07)
- Simple navigation CTA
- Minimal layout

---

## Mobile Considerations

### Navigation
- Left nav becomes bottom navigation bar or hidden with a toggle
- Alternative: Small floating indicator showing "3/7" with tap to open full nav
- Use drawer pattern from existing `sheet.tsx` component

### Section Height
- May use `min-h-screen` instead of fixed `h-screen` on mobile
- Allow natural content overflow with snap alignment

### Layout
```text
Mobile: Bottom nav indicator + tap to expand
Tablet: Narrow left rail with icons only
Desktop: Full left nav with labels
```

---

## CSS Updates

Add to `src/index.css`:

```css
@layer components {
  /* Slide-based scroll container */
  .slide-container {
    @apply h-screen overflow-y-auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
  
  .slide-section {
    @apply h-screen snap-start;
    scroll-snap-align: start;
  }
}
```

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/SlideNav.tsx` | Create | Left-side vertical navigation component |
| `src/hooks/useSlideNavigation.ts` | Create | Hook for slide navigation state |
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Modify | Refactor to slide-based layout |
| `src/index.css` | Modify | Add scroll-snap utility classes |

---

## Technical Considerations

### Performance
- Each section is rendered but off-screen sections are not visually processed
- Images should use `loading="lazy"` (already in place)
- Intersection Observer is performant for tracking

### Accessibility
- Keyboard navigation: Arrow keys move between sections
- Focus management: Ensure focusable elements are reachable
- Screen reader: Use `aria-current` on active nav item
- Reduced motion: Respect `prefers-reduced-motion` for scroll behavior

### Browser Support
- `scroll-snap-type` is well-supported in modern browsers
- Fallback: Regular scrolling works fine without snap

---

## Reusability

This pattern can be extracted for future project pages:

1. **SlideNav component** - Plug into any page with sections array
2. **useSlideNavigation hook** - Handles all navigation logic
3. **CSS utilities** - `.slide-container` and `.slide-section` classes
4. **Layout wrapper** - Could become a `SlideProjectLayout` component

To create another slide-based project page:
1. Import `SlideNav` and `useSlideNavigation`
2. Define sections array with refs
3. Wrap content in slide container with nav
4. Apply `.slide-section` to each section

---

## Summary

This redesign transforms the Intelligence Over Inventory page into a modern, presentation-style experience while maintaining full design system compliance. The implementation creates reusable components (`SlideNav`, `useSlideNavigation`) that can be applied to future project pages, establishing a distinct template variant for slide-based case studies.
