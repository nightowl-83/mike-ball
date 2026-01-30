

# Challenge Section - Stepped Conversation Redesign

## Overview
Transform the Challenge section (/01) from the current card-based layout into an interactive, scroll-driven conversation where paragraphs progressively highlight as the user advances through the content. Each problem statement will transition from muted to highlighted (white/bold) based on scroll position within the section.

---

## Visual Behavior

```text
State 1 (Initial):               State 2 (Progress):              State 3 (Further):
┌────────────────────────┐       ┌────────────────────────┐       ┌────────────────────────┐
│ The Challenge     /01  │       │ The Challenge     /01  │       │ The Challenge     /01  │
│                        │       │                        │       │                        │
│ ▪ [HIGHLIGHTED]        │       │   (dimmed)             │       │   (dimmed)             │
│   Commodity data...    │       │   Commodity data...    │       │   Commodity data...    │
│                        │       │                        │       │                        │
│   (dimmed)             │       │ ▪ [HIGHLIGHTED]        │       │   (dimmed)             │
│   Blind engagement...  │       │   Blind engagement...  │       │   Blind engagement...  │
│                        │       │                        │       │                        │
│   (dimmed)             │       │   (dimmed)             │       │ ▪ [HIGHLIGHTED]        │
│   Generic metrics...   │       │   Generic metrics...   │       │   Generic metrics...   │
│                        │       │                        │       │                        │
│   (dimmed)             │       │   (dimmed)             │       │   (dimmed)             │
│   Mental model...      │       │   Mental model...      │       │   Mental model...      │
└────────────────────────┘       └────────────────────────┘       └────────────────────────┘
```

---

## Content Structure

Replace the current card-based problem blocks with flowing conversation paragraphs:

| Index | Short Title | Full Paragraph |
|-------|-------------|----------------|
| 0 | Opening | "The rural land marketplace was drowning in commodity data. Every competitor had access to the same 3rd-party feeds, creating a race to the bottom." |
| 1 | Commodity Listings | "Identical listings populated every platform. No single marketplace could claim unique inventory—buyers saw the same properties everywhere they looked." |
| 2 | Blind Engagement | "We had no insight into what buyers actually wanted. Engagement data existed, but it was siloed and surface-level—clicks without context." |
| 3 | Generic Metrics | "Sellers received vanity metrics that looked good but told them nothing actionable. Views and saves, but no understanding of buyer intent or fit." |
| 4 | Mental Model Gap | "Search filters were built from listing data, not buyer behavior. The experience forced users to think in database terms rather than natural land-buying language." |

---

## Technical Implementation

### 1. New Hook: `useInSectionProgress`

Create a lightweight hook that tracks scroll progress within a single section slide for child paragraph highlighting.

**File:** `src/hooks/useInSectionProgress.ts`

**Purpose:** Track which paragraph is "active" based on scroll position within a slide container

**Logic:**
- Uses `requestAnimationFrame` for smooth performance
- Calculates progress based on scroll position within the section
- Returns `activeParagraphIndex` (0-4 based on progress)
- Updates on wheel/scroll events within the section

### 2. Challenge Section Refactor

**Changes to `IntelligenceOverInventoryProject.tsx`:**

1. **Remove two-column layout** - Use full-width for conversation flow
2. **Replace card blocks** with styled paragraphs
3. **Add scroll-progress-based highlighting**
4. **Each paragraph starts muted, becomes white when active**

### 3. Paragraph Styling

**Inactive State:**
```css
text-muted-foreground
font-normal
opacity-60
transition-all duration-500
```

**Active State:**
```css
text-foreground (white)
font-semibold
opacity-100
```

**Transition:** Smooth 500ms transition for color, weight, and opacity

---

## Component Structure

```tsx
// Challenge conversation data
const challengePoints = [
  {
    text: "The rural land marketplace was drowning in commodity data. Every competitor had access to the same 3rd-party feeds, creating a race to the bottom."
  },
  {
    text: "Identical listings populated every platform. No single marketplace could claim unique inventory—buyers saw the same properties everywhere they looked."
  },
  {
    text: "We had no insight into what buyers actually wanted. Engagement data existed, but it was siloed and surface-level—clicks without context."
  },
  {
    text: "Sellers received vanity metrics that looked good but told them nothing actionable. Views and saves, but no understanding of buyer intent or fit."
  },
  {
    text: "Search filters were built from listing data, not buyer behavior. The experience forced users to think in database terms rather than natural land-buying language."
  }
];
```

```tsx
{/* Challenge Section - Stepped Conversation */}
<section className="slide-section flex items-center">
  <div className="w-full px-4 md:px-8 lg:px-12">
    {/* Section Header */}
    <div className="flex items-start justify-between mb-12">
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
        The Challenge
      </h2>
      <span className="text-6xl md:text-8xl font-bold font-mono opacity-20">
        /01
      </span>
    </div>
    
    {/* Conversation Flow */}
    <div className="max-w-4xl space-y-8">
      {challengePoints.map((point, index) => (
        <p
          key={index}
          className={cn(
            "text-xl md:text-2xl lg:text-3xl leading-relaxed transition-all duration-500",
            activePointIndex === index
              ? "text-foreground font-semibold opacity-100"
              : "text-muted-foreground font-normal opacity-50"
          )}
        >
          {point.text}
        </p>
      ))}
    </div>
  </div>
</section>
```

---

## Interaction Mechanism

### Option A: Wheel-Based Progress (Recommended)

Since the page uses scroll-snap, implement a sub-scroll progress tracker within each section:

1. When section is visible, capture wheel events
2. Track cumulative delta to advance through paragraphs
3. Each "scroll unit" advances the active paragraph
4. When reaching the last paragraph, next scroll advances to next section

### Option B: Auto-Progress on Section Enter

Simpler approach:
1. When section scrolls into view, start from first paragraph highlighted
2. Auto-advance every 2 seconds OR
3. Use small scroll gestures to advance

---

## Implementation Approach

For this slide-based layout, I recommend using a **state-based approach** where:

1. The Challenge section maintains its own `activePointIndex` state
2. Wheel events within the section increment/decrement this index
3. Once the last point is reached, the next scroll advances to the next slide
4. This creates a "sub-scroll" interaction within the snap section

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Refactor Challenge section to stepped conversation with wheel-based paragraph progression |

---

## Typography Increase

As noted in the memory, all font sizes increased by 1 unit:
- Paragraphs: `text-xl md:text-2xl lg:text-3xl` (up from current sizes)
- Section header: `text-5xl md:text-7xl lg:text-8xl` (up from current)
- Section number: `text-6xl md:text-8xl` (up from current)

---

## Accessibility Considerations

- Keyboard users can navigate with arrow keys (up/down to change paragraphs)
- Focus states remain visible
- Color contrast maintained between muted and highlighted states
- Respects `prefers-reduced-motion` - instant transitions if enabled

