

# Feature Ripples Section - Scroll-Driven Image Expansion

## Overview
Add a new subsection after /06 (Design Details) featuring a scroll-driven animation where an image starts cropped to a 1:1 square aspect ratio centered on screen, then smoothly expands to full viewport as the user scrolls.

---

## Changes Summary

| Change | Description |
|--------|-------------|
| Copy image | Copy user-uploaded image to `src/assets/feature-ripples.jpg` |
| Add new section | Insert "Feature Ripples" section between /06 and /07 |
| Update section count | Increase total sections from 9 to 10 |
| Update section data | Add new entry for "Feature Ripples" as /06.5 or renumber subsequent sections |
| Update section refs | Adjust all refs after /06 to account for new section |
| Implement scroll animation | Use scroll-based progress to animate container from 1:1 to full screen |

---

## Visual Behavior

```text
Initial State (top of section scroll):
┌──────────────────────────────────────────────────────┐
│                                                      │
│      Feature Ripples                          /06.5  │
│      how this data affects the rest of the app       │
│                                                      │
│              ┌────────────┐                          │
│              │            │                          │
│              │   1:1      │  <- Cropped square       │
│              │   Image    │     centered             │
│              │            │                          │
│              └────────────┘                          │
│                                                      │
└──────────────────────────────────────────────────────┘

Mid-scroll (expanding):
┌──────────────────────────────────────────────────────┐
│                                                      │
│         ┌──────────────────────┐                     │
│         │                      │                     │
│         │   Expanding...       │                     │
│         │                      │                     │
│         └──────────────────────┘                     │
│                                                      │
└──────────────────────────────────────────────────────┘

Fully scrolled (full viewport):
┌──────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FULL IMAGE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└──────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### 1. Update Section Data Array
Insert new section between Gallery and Vision:

```tsx
const sectionData = [
  { id: 'hero', label: 'Overview', number: '' },
  { id: 'conflict', label: 'The Challenge', number: '/01' },
  { id: 'engine', label: 'The Solution', number: '/02' },
  { id: 'parsing', label: 'Parsing Tool', number: '/03' },
  { id: 'impact', label: 'Impact', number: '/04' },
  { id: 'strategy', label: 'Strategy', number: '/05' },
  { id: 'gallery', label: 'Gallery', number: '/06' },
  { id: 'ripples', label: 'Ripples', number: '/06.5' },  // NEW
  { id: 'vision', label: 'Vision', number: '/07' },
  { id: 'next-project', label: 'Next Project', number: '/08' }
];
```

### 2. Update Section Count
Change from 9 to 10 sections in useSlideNavigation:

```tsx
const { currentSectionIndex, scrollToSection, containerRef, sectionRefs } = useSlideNavigation({
  sectionCount: 10,  // Updated from 9
  threshold: 0.5,
});
```

### 3. Scroll-Driven Animation Logic
Use a local scroll progress tracker within the section:

```tsx
// State for scroll progress (0 = square, 1 = full)
const [rippleProgress, setRippleProgress] = useState(0);
const rippleSectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleScroll = () => {
    if (!rippleSectionRef.current) return;
    const rect = rippleSectionRef.current.getBoundingClientRect();
    const sectionHeight = rippleSectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // Calculate progress based on how far into the section we've scrolled
    const scrolled = viewportHeight - rect.top;
    const totalScrollable = sectionHeight;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
    
    setRippleProgress(progress);
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 4. Dynamic Container Sizing
Interpolate between square (1:1) and full viewport based on scroll progress:

```tsx
// Calculate dimensions based on progress
const minSize = 'min(50vh, 50vw)';  // Square size
const maxWidth = '100%';
const maxHeight = '100vh';

// Use CSS custom properties for smooth interpolation
const containerStyle = {
  width: `calc(${minSize} + (100% - ${minSize}) * ${rippleProgress})`,
  height: `calc(${minSize} + (100vh - ${minSize}) * ${rippleProgress})`,
  transition: 'none',  // Scroll-driven, not transition-based
};
```

### 5. Section Structure

```tsx
{/* Feature Ripples Section - /06.5 */}
<section
  ref={(el) => { 
    (sectionRefs[7] as any).current = el;
    rippleSectionRef.current = el;
  }}
  className="min-h-[200vh] relative"  // Tall section for scroll distance
>
  {/* Sticky Container */}
  <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Header - Fades out as image expands */}
    <div 
      className="absolute top-12 left-0 right-0 px-4 md:px-8 lg:px-12 z-10 transition-opacity duration-300"
      style={{ opacity: 1 - rippleProgress }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Feature Ripples
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">
            how this data affects the rest of the app ecosystem
          </p>
        </div>
        <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
          /06.5
        </span>
      </div>
    </div>
    
    {/* Expanding Image Container */}
    <div 
      className="overflow-hidden rounded-xl transition-[border-radius] duration-100"
      style={{
        width: `calc(min(50vh, 50vw) + (100vw - min(50vh, 50vw)) * ${rippleProgress})`,
        height: `calc(min(50vh, 50vw) + (100vh - min(50vh, 50vw)) * ${rippleProgress})`,
        borderRadius: `${(1 - rippleProgress) * 16}px`,
      }}
    >
      <img 
        src={featureRipplesImage}
        alt="Feature ripples ecosystem diagram"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>
```

### 6. Update Subsequent Section Refs
Shift all refs after the new section:

| Section | Old Ref Index | New Ref Index |
|---------|---------------|---------------|
| Gallery | 6 | 6 (unchanged) |
| Ripples | - | 7 (NEW) |
| Vision | 7 | 8 |
| Next Project | 8 | 9 |

### 7. Update Dual-Mode Toggle Range
Adjust the visibility logic to include the new section:

```tsx
// Show toggle only on sections 4-8 (Impact, Strategy, Gallery, Ripples, Vision)
const showDualModeToggle = currentSectionIndex >= 4 && currentSectionIndex <= 8;
```

---

## Image Import
Add import for the copied image:

```tsx
import featureRipplesImage from "@/assets/feature-ripples.jpg";
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/assets/feature-ripples.jpg` | Copy from user-uploads://charlie_test.jpg |
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Add section data entry, update section count, add ripple section with scroll animation, update ref indices for /07 and /08 |

---

## Animation Details

| Property | Start (progress=0) | End (progress=1) |
|----------|-------------------|------------------|
| Width | min(50vh, 50vw) | 100vw |
| Height | min(50vh, 50vw) | 100vh |
| Border Radius | 16px | 0px |
| Title Opacity | 1 | 0 |

The section uses:
- `min-h-[200vh]` for scroll distance
- `sticky top-0 h-screen` for the image to remain centered while scrolling
- Direct style interpolation (no CSS transitions) for smooth scroll-driven animation

