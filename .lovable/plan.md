

# Animated Particle Background Implementation

## Overview
Integrate an animated particle background to the homepage that starts in a "floating" cloud state on the hero section and transitions to a "grid" state as the user scrolls down to the projects section.

---

## Component Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                     Index.tsx                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Fixed Background Layer (z-index: -10)                 │  │
│  │   └─ AnimatedBackground (state controlled)            │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Content Layer (z-index: auto)                         │  │
│  │   ├─ Hero (data-bg-state="floating")                  │  │
│  │   ├─ Skills                                           │  │
│  │   ├─ Projects (data-bg-state="grid")                  │  │
│  │   └─ ContactSection                                   │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Summary

| Step | Action |
|------|--------|
| 1 | Copy `animated-background.jsx` to `src/components/AnimatedBackground.tsx` and convert to TypeScript |
| 2 | Update Hero component to remove its own background and add `data-bg-state="floating"` attribute |
| 3 | Update Projects component to add `data-bg-state="grid"` attribute |
| 4 | Update Index.tsx to include the AnimatedBackground with IntersectionObserver-based state management |

---

## File Changes

### 1. New Component: `src/components/AnimatedBackground.tsx`

Convert the provided JSX component to TypeScript with the following adjustments:

- Add TypeScript type definitions for props and internal state
- Remove the built-in `bg-zinc-900` background (will use site's CSS variable background instead)
- Remove debug controls by default (`showControls={false}`)
- Ensure canvas renders with transparent background to blend with site theme

**Props interface:**
```tsx
interface AnimatedBackgroundProps {
  initialState?: 'floating' | 'vertices' | 'grid' | 'cube' | 'wave';
  enableScrollTrigger?: boolean;
  scrollThresholds?: {
    floating: number;
    vertices: number;
    grid: number;
    cube: number;
  };
  onStateChange?: (newState: string) => void;
  showControls?: boolean;
}
```

### 2. Update: `src/components/Hero.tsx`

**Changes:**
- Add `data-bg-state="floating"` attribute to the `<section>` element
- Remove the subtle texture overlay div (animated particles replace this)
- Keep the existing content structure unchanged
- The background will be handled by the parent-level AnimatedBackground

**Before/After visual:**
```text
BEFORE:                              AFTER:
┌──────────────────────┐             ┌──────────────────────┐
│ bg-background        │             │ transparent          │
│ + noise texture      │    →        │ (AnimatedBackground  │
│ overlay              │             │  shows through)      │
└──────────────────────┘             └──────────────────────┘
```

### 3. Update: `src/components/Projects.tsx`

**Changes:**
- Add `data-bg-state="grid"` attribute to the `<section id="work">` element

This single attribute addition enables the IntersectionObserver in Index.tsx to detect when this section enters the viewport and trigger the grid state.

### 4. Update: `src/pages/Index.tsx`

**Changes:**
- Import the new AnimatedBackground component
- Add state for tracking background mode: `const [bgState, setBgState] = useState<'floating' | 'grid'>('floating')`
- Add useEffect with IntersectionObserver to watch for `[data-bg-state]` sections
- Render AnimatedBackground as a fixed, full-screen layer behind all content

**New structure:**
```tsx
const Index = () => {
  const [bgState, setBgState] = useState<'floating' | 'grid'>('floating');

  // IntersectionObserver to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll('[data-bg-state]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newState = entry.target.getAttribute('data-bg-state');
            if (newState === 'floating' || newState === 'grid') {
              setBgState(newState);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed animated background */}
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground initialState={bgState} showControls={false} />
      </div>

      {/* Page content */}
      <div className="min-h-screen">
        <Hero />
        <Skills variant={skillVariant} />
        <Projects />
        <ContactSection />
      </div>
    </>
  );
};
```

---

## State Transition Flow

```text
User scrolls from top → bottom:

┌─────────────┐
│    HERO     │  → bgState = "floating"
│  (visible)  │     100 particles in soft cloud formation
└─────────────┘     Gentle floating animation
      ↓ scroll
┌─────────────┐
│   SKILLS    │  → bgState still "floating"
│  (visible)  │     (no data-bg-state attribute)
└─────────────┘
      ↓ scroll
┌─────────────┐
│  PROJECTS   │  → bgState = "grid"
│  (visible)  │     Particles transition to 12x8 grid
└─────────────┘     Connecting lines appear
      ↓ scroll
┌─────────────┐
│   CONTACT   │  → bgState stays "grid"
│  (visible)  │     (no data-bg-state attribute)
└─────────────┘
```

---

## Technical Details

### Particle Animation Details
- **Floating state**: 100 particles in Gaussian cloud distribution, gentle individual floating motion
- **Grid state**: 12 columns × 8 rows aligned grid, subtle connecting lines between adjacent particles
- **Transition**: 2.5s smooth easing (aligns with project's animation timing preferences)

### Canvas Rendering
- Full-screen canvas at fixed position behind all content
- Particles render as white dots with 0.6 base alpha
- Rare glow effects (5% of particles) for subtle visual interest
- Responsive to window resize

### Performance Considerations
- Canvas-based rendering for optimal 60fps performance
- Automatic cleanup of animation frames on unmount
- Passive scroll event listener for scroll-triggered changes

### Integration with Existing Styles
The component's container will use `bg-background` from the existing CSS variables, ensuring the dark theme is maintained. The particles render in white with transparency, which works well against the current `hsl(220 25% 8%)` background.

---

## Files Summary

| File | Action | Purpose |
|------|--------|---------|
| `src/components/AnimatedBackground.tsx` | Create | New canvas-based particle animation component |
| `src/components/Hero.tsx` | Modify | Add data attribute, remove texture overlay |
| `src/components/Projects.tsx` | Modify | Add data attribute for grid trigger |
| `src/pages/Index.tsx` | Modify | Add background state management and render AnimatedBackground |

