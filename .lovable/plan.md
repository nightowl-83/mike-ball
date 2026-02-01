
# Section /04 Interactive Pattern Prototype

## Overview
Implement all four interaction patterns for the Marketing Hub content blocks in section /04, with a meta-toggle to switch between them so you can evaluate each approach in context.

---

## What You'll Get

A "Pattern Selector" dropdown at the top of section /04 that lets you switch between:

| Pattern | Description |
|---------|-------------|
| **Horizontal Pills** | Row of 3 pill buttons below title; click to switch content |
| **Card Carousel** | Left/right arrows to slide through content cards |
| **Auto-Spotlight** | Auto-advances every 6s with progress bar; click to pause |
| **Stacked Cards** | Overlapping cards that "pop" forward when clicked |

---

## Shared Changes (All Patterns)

### 1. Layout Update: 1/3 Split
```text
+--------+------------------------+
| 1/3    |          2/3           |
| Text   |    Image (viewport)    |
+--------+------------------------+
```
- Grid: `lg:grid-cols-3`
- Image column: `h-[calc(100vh-280px)]` for viewport-filling height

### 2. Spacing Increases (2x)
- Title to Pattern Selector: `mb-12` (was `mb-6`)
- Pattern Selector to Tabs: `mb-8`
- Tabs to Content: `mb-32` (was `mb-16`)

### 3. Tab Order Swap
- Default: `marketing-hub` (first)
- Order: Marketing Hub | Marketing Site

### 4. Narrative Content (Marketing Hub)
Replace bullet points with three narrative blocks:

**Block 1: The Seller's "Aha" Moment**
> "We shifted from asking for data to proving its ROI."

By surfacing buyer intent directly within the listing flow, we transformed a chore into a competitive advantage. We didn't just ask for utility info; we showed sellers that it was their fastest path to a 5x lead increase.

**Block 2: Gamifying Quality**
> "The Completeness Score became our invisible coach."

We used gamification to align seller behavior with search engine success. It provided a clear, actionable roadmap for sellers to improve their own visibility without needing a manual support touch-point.

**Block 3: Closing the Loop**
> "We built a self-correcting data flywheel."

This created a bridge between two platforms: buyer questions fueled seller prompts, which in turn unlocked the filters buyers needed. The system started learning and improving its own data density.

---

## Pattern Implementations

### Pattern 1: Horizontal Pill Tabs

```text
[ The Seller's "Aha" ]  [ Gamifying Quality ]  [ Closing the Loop ]
         ↓ active
+--------+------------------------+
| Quote  |                        |
| Para-  |        IMAGE 1         |
| graph  |                        |
+--------+------------------------+
```

- Horizontal row of pill-shaped buttons
- Active pill: `bg-primary text-primary-foreground`
- Inactive: `bg-muted/50 text-muted-foreground hover:bg-muted`
- Click to switch content and image instantly

### Pattern 2: Card Carousel with Arrows

```text
         ←  [ Content Card ]  →
+--------+------------------------+
| Quote  |                        |
| Para-  |        IMAGE           |
| graph  |                        |
+--------+------------------------+
    ●  ○  ○  (dot indicators)
```

- Left/right arrow buttons flanking the text column
- Dot indicators below showing position (1/3, 2/3, 3/3)
- Smooth slide transition between cards
- Image cross-fades on change

### Pattern 3: Auto-Rotating Spotlight

```text
[━━━━━━━━━━━━━━━━░░░░] 6s progress bar
+--------+------------------------+
| Quote  |                        |
| Para-  |        IMAGE           |
| graph  |                        |
+--------+------------------------+
```

- Auto-advances every 6 seconds
- Linear progress bar shows time remaining
- Click anywhere to pause/resume
- Pause icon appears on hover
- Image cross-fades smoothly

### Pattern 4: Stacked Cards

```text
     ┌─────────────┐
   ┌─┤  Card 3     │
 ┌─┤ └─────────────┘
 │ │   Card 2
 └─┴───────────────┘
   Card 1 (front)
```

Visual representation:
- Three cards visually "stacked" with offset shadows
- Active card: full opacity, translateY(0), scale(1)
- Behind cards: reduced opacity, translateY offset, scale(0.95/0.9)
- Click a back card to bring it forward
- Cards animate position swap with 500ms transition

---

## Technical Implementation

### New State Variables
```tsx
const [activePattern, setActivePattern] = useState<'pills' | 'carousel' | 'spotlight' | 'stacked'>('pills');
const [activeBlock, setActiveBlock] = useState(0);
const [isPaused, setIsPaused] = useState(false);
```

### Content Data Structure
```tsx
const hubBlocks = [
  {
    title: "The Seller's 'Aha' Moment",
    quote: "We shifted from asking for data to proving its ROI.",
    narrative: "By surfacing buyer intent directly within the listing flow...",
    image: popularFeaturesImage // placeholder until uploaded
  },
  {
    title: "Gamifying Quality",
    quote: "The Completeness Score became our invisible coach.",
    narrative: "We used gamification to align seller behavior...",
    image: completenessScoreImage // placeholder until uploaded
  },
  {
    title: "Closing the Loop",
    quote: "We built a self-correcting data flywheel.",
    narrative: "This created a bridge between two platforms...",
    image: flywheelImage // placeholder until uploaded
  }
];
```

### Pattern Selector Component
```tsx
<div className="flex items-center gap-4 mb-8">
  <span className="text-sm text-muted-foreground">Pattern:</span>
  <ToggleGroup type="single" value={activePattern} onValueChange={setActivePattern}>
    <ToggleGroupItem value="pills">Pills</ToggleGroupItem>
    <ToggleGroupItem value="carousel">Carousel</ToggleGroupItem>
    <ToggleGroupItem value="spotlight">Spotlight</ToggleGroupItem>
    <ToggleGroupItem value="stacked">Stacked</ToggleGroupItem>
  </ToggleGroup>
</div>
```

### Auto-Rotation Logic (Spotlight)
```tsx
useEffect(() => {
  if (activePattern !== 'spotlight' || isPaused) return;
  const timer = setInterval(() => {
    setActiveBlock((prev) => (prev + 1) % 3);
  }, 6000);
  return () => clearInterval(timer);
}, [activePattern, isPaused]);
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Section /04 rewrite (~100 lines) |

---

## Assets Needed

The three Marketing Hub images will use placeholders until you upload:
1. **Popular Features UI** - for Block 1
2. **Property Completeness Score** - for Block 2
3. **Flywheel Diagram** - for Block 3

---

## After Implementation

Once you test all four patterns:
1. Pick your favorite
2. Tell me which one to keep
3. I'll remove the pattern selector and finalize the chosen design
