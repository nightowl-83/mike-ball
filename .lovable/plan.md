

# Section /04 Carousel Layout Redesign

## Overview
Redesign the "Dual-Interface Impact" section to use a cleaner carousel layout with a floating tab toggle, based on the provided reference image.

---

## Changes Summary

| Change | Description |
|--------|-------------|
| Add subtitle | "How the data affected the buyer & seller experience" below main title |
| Carousel controls | Move slide title + controls to a single full-width row above content |
| Add divider | Thin horizontal separator between controls row and content |
| Floating toggle | Tab switcher floats at bottom with blur/dark background |
| Remove patterns | Delete Pills, Spotlight, Stacked patterns and pattern selector |

---

## Visual Layout

```text
+----------------------------------------------------------+
|  Dual-Interface Impact                              /04  |
|  How the data affected the buyer & seller experience     |
+----------------------------------------------------------+
|  The Seller's 'Aha' Moment                   1 of 3  < > |
+----------------------------------------------------------+  <- thin divider
|                                                          |
|  +-------------+    +--------------------------------+   |
|  | Quote block |    |                                |   |
|  | Narrative   |    |        Image Placeholder       |   |
|  |             |    |                                |   |
|  +-------------+    +--------------------------------+   |
|                                                          |
+----------------------------------------------------------+
                                                          
+----------------------------------------------------------+
|  [██ Marketing Hub ██]  [ Market Place ]                 |  <- floating bar
+----------------------------------------------------------+
```

---

## Detailed Changes

### 1. Add Subtitle
- Text: "How the data affected the buyer & seller experience"
- Position: Below main title, before carousel controls
- Styling: `text-lg md:text-xl text-muted-foreground`

### 2. Carousel Control Row
Replace the current carousel pattern with a new layout:

```text
Left side:           Right side:
[Slide Title]        [1 of 3]  [<]  [>]
```

- **Full width row** spanning the content container
- **Left**: Slide title (e.g., "The Seller's 'Aha' Moment")
- **Right**: Slide count "1 of 3" + arrow buttons
- Layout: `flex justify-between items-center`

### 3. Divider Element
- Add `<Separator />` component between controls row and content
- Styling: thin 1px line with `border-border` color
- Spacing: `my-6` for breathing room

### 4. Content Area (Below Divider)
- Keep the 1/3 text + 2/3 image split (`lg:grid-cols-3`)
- Remove the slide title from the text column (it's now in the control row)
- Content shows quote + narrative only

### 5. Floating Tab Toggle
Transform the Marketing Hub / Market Place tabs into a floating element:

**Container styling:**
- `fixed bottom-0` (or `absolute` within section)
- Full width minus page left navigation
- Dark background with 50% opacity: `bg-background/50`
- Backdrop blur: `backdrop-blur-md`
- Smooth slide-up animation on section entry

**Toggle pills styling:**
- Full pill shape: `rounded-full` instead of rounded corners
- Active: `bg-primary text-primary-foreground`
- Inactive: `bg-transparent text-muted-foreground`
- Container: centered within the floating bar

**Animation:**
- Enter: `translate-y-0 opacity-100`
- Exit: `translate-y-full opacity-0`
- Transition: `transition-all duration-500`

### 6. Remove Pattern Selector & Other Patterns
- Delete: `PillsPattern`, `SpotlightPattern`, `StackedPattern` components
- Delete: `activePattern` state and `PatternType` type
- Delete: ToggleGroup pattern selector UI
- Keep only the carousel logic (refactored into the main component)

---

## Technical Implementation

### State Changes
```tsx
// Remove
const [activePattern, setActivePattern] = useState<PatternType>('pills');

// Keep
const [activeBlock, setActiveBlock] = useState(0);
const [activeTab, setActiveTab] = useState<'marketing-hub' | 'marketing-site'>('marketing-hub');
```

### Control Row Component
```tsx
<div className="flex justify-between items-center">
  {/* Left: Slide Title */}
  <h3 className="text-lg md:text-xl font-semibold text-foreground">
    {hubBlocks[activeBlock].title}
  </h3>
  
  {/* Right: Count + Arrows */}
  <div className="flex items-center gap-3">
    <span className="text-sm text-muted-foreground">
      {activeBlock + 1} of {hubBlocks.length}
    </span>
    <Button variant="outline" size="icon" onClick={goPrev}>
      <ChevronLeft className="w-4 h-4" />
    </Button>
    <Button variant="outline" size="icon" onClick={goNext}>
      <ChevronRight className="w-4 h-4" />
    </Button>
  </div>
</div>
```

### Floating Toggle Bar
```tsx
<div className="absolute bottom-0 left-0 right-0 flex justify-center py-6">
  <div className="bg-background/50 backdrop-blur-md rounded-full p-1.5 flex gap-1">
    <button
      onClick={() => setActiveTab('marketing-hub')}
      className={cn(
        "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
        activeTab === 'marketing-hub'
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      Marketing Hub
    </button>
    <button
      onClick={() => setActiveTab('marketing-site')}
      className={cn(
        "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
        activeTab === 'marketing-site'
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      Market Place
    </button>
  </div>
</div>
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/ImpactSection04.tsx` | Complete rewrite - remove 3 patterns, simplify to carousel only, add floating toggle |

---

## Code Reduction
- Before: ~437 lines with 4 pattern components
- After: ~180 lines with clean carousel-only implementation
- Removed: Pills, Spotlight, Stacked patterns and pattern selector

