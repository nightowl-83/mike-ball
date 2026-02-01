

# Light Mode Fix & Section /02 Layout Toggle

## Overview
Fix the light mode background so dark text displays properly when Marketplace mode is active, and add a vertical single-column layout option for section /02 with a toggle to compare layouts.

---

## Changes Summary

| Change | Description |
|--------|-------------|
| Fix light mode background | Ensure `bg-background` is explicitly applied to themed container so white/light background cascades properly |
| Add vertical layout for /02 | Create single-column vertical card layout for the Insight Engine section |
| Add layout toggle | Add toggle to switch between horizontal staggered and vertical single-column layouts |

---

## Part 1: Light Mode Background Fix

### Issue
The `theme-light` class is applied to `<main>`, but the background might not be visually updating because:
1. Child sections have their own `bg-card/30` overrides
2. The `bg-background` class isn't explicitly forcing the theme variable

### Solution
Add explicit `bg-background` to the main container and ensure section backgrounds also use theme-aware colors:

```tsx
// In IntelligenceOverInventoryProject.tsx line 184-188
<main
  ref={containerRef}
  className={cn(
    "flex-1 ml-16 md:ml-56 lg:ml-64 slide-container transition-colors duration-500",
    "bg-background", // Explicitly apply background
    activeDataMode === 'marketplace' && "theme-light"
  )}
>
```

Also ensure sections with `bg-card/30` transition properly by using theme-aware opacity.

---

## Part 2: Section /02 Vertical Layout

### Current Layout
- Desktop: Horizontal flow with staggered cards (above/below line)
- Mobile/Tablet: Already vertical

### New Vertical Layout (Single Column)
All 5 cards stacked vertically in a single column with a connecting dashed line on the left side:

```text
+-------------------------------------------+
|  ● ----  [Lead Data Card]                 |
|  |                                        |
|  ● ----  [Keyword Parser Card]            |
|  |                                        |
|  ● ----  [Intent Mapping Card]            |
|  |                                        |
|  ● ----  [UI Filters Card]                |
|  |                                        |
|  ● ----  [Seller Training Card]           |
+-------------------------------------------+
```

### Layout Toggle Component
Add a small toggle in the section header area:

```text
+------------------------------------------------------------+
|  The Insight Engine                                   /02  |
|  [Description text...]                                     |
|                                                            |
|  Layout:  [Horizontal] [Vertical]                          |
+------------------------------------------------------------+
```

Toggle styling:
- Small pill buttons similar to the existing pattern toggle from before
- Position: Below description, above card content
- Use `ToggleGroup` component for consistency

---

## Technical Implementation

### State for Layout Toggle
```tsx
// In IntelligenceOverInventoryProject.tsx
const [section02Layout, setSection02Layout] = useState<'horizontal' | 'vertical'>('horizontal');
```

### Toggle UI Component
```tsx
<div className="flex items-center gap-2 mb-8">
  <span className="text-sm text-muted-foreground">Layout:</span>
  <div className="flex gap-1 p-1 bg-muted/50 rounded-lg">
    <button
      onClick={() => setSection02Layout('horizontal')}
      className={cn(
        "px-3 py-1.5 rounded-md text-xs font-medium transition-all",
        section02Layout === 'horizontal'
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      Horizontal
    </button>
    <button
      onClick={() => setSection02Layout('vertical')}
      className={cn(
        "px-3 py-1.5 rounded-md text-xs font-medium transition-all",
        section02Layout === 'vertical'
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      Vertical
    </button>
  </div>
</div>
```

### Vertical Layout Structure
```tsx
{section02Layout === 'vertical' && (
  <div className="relative pl-8 max-w-2xl mx-auto">
    {/* Vertical dashed line */}
    <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-border" />
    
    <div className="space-y-6">
      {flowSteps.map((step, index) => (
        <div key={step.label} className="relative flex items-start gap-6">
          {/* Node on the line */}
          <div className="absolute left-[-20px] top-6 w-3 h-3 rounded-full bg-primary" />
          {/* Horizontal connector */}
          <div className="absolute left-[-8px] top-[26px] w-4 border-t-2 border-dashed border-border" />
          
          {/* Card - Full width in column */}
          <div className="bg-card border border-border rounded-xl p-6 flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
              <step.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-base text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
```

### Conditional Rendering
```tsx
{/* Horizontal Layout - Desktop Only */}
{section02Layout === 'horizontal' && (
  <div className="relative hidden lg:flex ...">
    {/* Existing horizontal staggered layout */}
  </div>
)}

{/* Vertical Layout */}
{section02Layout === 'vertical' && (
  <div className="relative pl-8 max-w-2xl mx-auto">
    {/* New vertical single-column layout */}
  </div>
)}

{/* Mobile/Tablet fallback - show only when horizontal on desktop */}
{section02Layout === 'horizontal' && (
  <div className="lg:hidden relative pl-8">
    {/* Existing mobile vertical layout */}
  </div>
)}
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Verify theme-light background value (already correct at `0 0% 98%`) |
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Add `bg-background` to main, add layout state, add toggle UI, add vertical layout component |

---

## Visual Comparison

### Horizontal Layout (Current Default)
```text
    [Card 1]           [Card 3]           [Card 5]
        ●                  ●                  ●
----●-------●-------●-------●-------●-------●----
              ●                  ●
          [Card 2]           [Card 4]
```

### Vertical Layout (New Option)
```text
  ●───[ Lead Data                        📊 ]
  │   Capture buyer inquiries...
  │
  ●───[ Keyword Parser                   🔍 ]
  │   Extract intent keywords...
  │
  ●───[ Intent Mapping                   🎯 ]
  │   Map keywords to filter...
  │
  ●───[ UI Filters                       📈 ]
  │   Surface as advanced search...
  │
  ●───[ Seller Training                  👥 ]
      Provide data for what buyers...
```

