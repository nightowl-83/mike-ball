

# Persistent Dual-Mode Toggle with Light Theme for Marketplace

## Overview
Implement a persistent toggle between Marketing Hub and Marketplace modes that affects sections /04 through /07. When Marketplace is selected, the page will switch to a light theme to visually distinguish the buyer-facing experience from the seller-facing Marketing Hub.

---

## Changes Summary

| Change | Description |
|--------|-------------|
| Toggle padding | Add `py-12` (increased from `py-6`) to render toggle higher on desktop |
| Marketplace content | Add two new narrative sections: "The 'Invisibility' Problem" and "Intent-Based Navigation" |
| Rename toggle | Change "Market Place" to "Marketplace" |
| Persistent toggle | Lift state to parent component so toggle affects sections /04–/07 |
| Light mode for Marketplace | Apply `theme-light` class to main content when Marketplace is selected |

---

## Visual Concept

```text
Marketing Hub (Default - Dark Mode):
┌──────────────────────────────────────────────────────┐
│  ████████████████████████████████████████████████  │ <- Dark background
│                                                      │
│  [Content specific to seller experience]             │
│                                                      │
│         [ Marketing Hub ]  [ Marketplace ]           │ <- Toggle higher
└──────────────────────────────────────────────────────┘

Marketplace (Light Mode):
┌──────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │ <- Light background
│                                                      │
│  [Content specific to buyer experience]              │
│                                                      │
│         [ Marketing Hub ]  [ Marketplace ]           │
└──────────────────────────────────────────────────────┘
```

---

## Detailed Changes

### 1. Increase Toggle Bottom Padding
Change the floating toggle container from `py-6` to `py-12` to position it higher on desktop screens:

```tsx
// Before
<div className="absolute bottom-0 left-0 right-0 flex justify-center py-6 ...">

// After  
<div className="absolute bottom-0 left-0 right-0 flex justify-center py-12 ...">
```

### 2. Rename Toggle Label
Change "Market Place" to "Marketplace":

```tsx
// Before
>Market Place</button>

// After
>Marketplace</button>
```

### 3. Add Marketplace Content for Section /04
Add two narrative carousel slides for the Marketplace tab:

**Slide 1: The "Invisibility" Problem**
> Quote: "Turning 'Dark Data' into Searchable Value."
> 
> Narrative: In a market flooded with identical 3rd-party listings, our users were struggling to find land that met basic survivability needs—water, power, and road access. This data existed in the leads, but was invisible on the page.

**Slide 2: Intent-Based Navigation**
> Quote: "We didn't design filters; we designed answers."
> 
> Narrative: Using the lead parser, I prioritized a 'Utility First' navigation. We elevated the attributes that our users were most vocal about in their inquiries, drastically reducing the 'pogo-sticking' behavior between the search page and listing details.

### 4. Lift Toggle State to Parent Component
Move the `activeTab` state from `ImpactSection04` up to `IntelligenceOverInventoryProject`:

```tsx
// In IntelligenceOverInventoryProject.tsx
const [activeDataMode, setActiveDataMode] = useState<'marketing-hub' | 'marketplace'>('marketing-hub');
```

Pass this state down to all sections that need it:
- Section /04 (Impact)
- Section /05 (Strategy)
- Section /06 (Gallery)
- Section /07 (Vision)

### 5. Create Fixed Floating Toggle Component
Extract the toggle into a fixed-position component that persists across sections:

```tsx
// New component or inline in parent
<div className={cn(
  "fixed bottom-0 left-16 md:left-56 lg:left-64 right-0",
  "flex justify-center py-12",
  "animate-in slide-in-from-bottom-4 duration-500",
  "z-50"
)}>
  <div className="bg-background/50 backdrop-blur-md rounded-full p-1.5 flex gap-1 border border-border">
    <button ... >Marketing Hub</button>
    <button ... >Marketplace</button>
  </div>
</div>
```

The toggle only appears when the user is on sections /04–/07 (indices 4–7).

### 6. Apply Light Theme for Marketplace Mode
When `activeDataMode === 'marketplace'`, add `theme-light` class to the main content area:

```tsx
<main
  ref={containerRef}
  className={cn(
    "flex-1 ml-16 md:ml-56 lg:ml-64 slide-container",
    activeDataMode === 'marketplace' && "theme-light"
  )}
>
```

The existing `theme-light` class in `index.css` already defines all the inverted color values needed.

### 7. Update Sections /05–/07 for Dual Content

**Section /05 - Strategy & Influence:**
- Marketing Hub: Keep existing 3-pillar strategy cards
- Marketplace: Add buyer-focused strategy content (placeholder for now)

**Section /06 - Design Details (Gallery):**
- Marketing Hub: Seller-facing design details
- Marketplace: Buyer-facing filter/search UI designs

**Section /07 - Vision:**
- Marketing Hub: AI Evolution for sellers
- Marketplace: AI-powered search for buyers

---

## Technical Implementation

### Updated ImpactSection04 Props
```tsx
interface ImpactSection04Props {
  sectionRef: (el: HTMLElement | null) => void;
  activeTab: 'marketing-hub' | 'marketplace';
  onTabChange: (tab: 'marketing-hub' | 'marketplace') => void;
}
```

### Marketplace Content Data
```tsx
const marketplaceBlocks = [
  {
    title: "The 'Invisibility' Problem",
    quote: "Turning 'Dark Data' into Searchable Value.",
    narrative: "In a market flooded with identical 3rd-party listings, our users were struggling to find land that met basic survivability needs—water, power, and road access. This data existed in the leads, but was invisible on the page."
  },
  {
    title: "Intent-Based Navigation",
    quote: "We didn't design filters; we designed answers.",
    narrative: "Using the lead parser, I prioritized a 'Utility First' navigation. We elevated the attributes that our users were most vocal about in their inquiries, drastically reducing the 'pogo-sticking' behavior between the search page and listing details."
  }
];
```

### Toggle Visibility Logic
```tsx
// Only show toggle on sections 4-7
const showDualModeToggle = currentSectionIndex >= 4 && currentSectionIndex <= 7;

{showDualModeToggle && (
  <div className="fixed bottom-0 ...">
    {/* Toggle buttons */}
  </div>
)}
```

### Theme Transition
Add smooth transition for theme changes:
```tsx
<main
  className={cn(
    "... transition-colors duration-500",
    activeDataMode === 'marketplace' && "theme-light"
  )}
>
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/ImpactSection04.tsx` | Update props, add marketplace content blocks, remove internal toggle (moved to parent), adjust bottom padding |
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Add `activeDataMode` state, add fixed floating toggle, pass state to sections /04–/07, apply theme class |

---

## Section Content Structure

### Section /04 - Impact
| Mode | Content |
|------|---------|
| Marketing Hub | Seller's Aha Moment, Gamifying Quality, Closing the Loop |
| Marketplace | The Invisibility Problem, Intent-Based Navigation |

### Section /05 - Strategy (placeholder content for now)
| Mode | Content |
|------|---------|
| Marketing Hub | Existing 3-pillar strategy cards |
| Marketplace | Buyer-focused strategy pillars (TBD) |

### Section /06 - Gallery (placeholder content for now)
| Mode | Content |
|------|---------|
| Marketing Hub | Seller-facing design screenshots |
| Marketplace | Buyer-facing filter/search UI |

### Section /07 - Vision (placeholder content for now)
| Mode | Content |
|------|---------|
| Marketing Hub | AI Evolution for sellers |
| Marketplace | AI-powered search vision for buyers |

---

## Animation Details
- Toggle appears with `slide-in-from-bottom-4` animation
- Theme transition uses `transition-colors duration-500` for smooth light/dark swap
- Toggle only visible on sections /04–/07

