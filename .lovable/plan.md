
# Intelligence Over Inventory - Comprehensive Updates

## Overview
This plan implements significant updates across multiple sections of the project page, including new navigation controls, keyboard bindings, a new "Idea" slide, visual line refinements, and layout restructuring for sections /03, /04, and /05.

---

## Section-by-Section Changes

### Section /01 - The Challenge

**Changes:**
1. **Add navigation arrows** - Place left/right arrow buttons in the bottom-right corner of the screen to advance through text transitions
2. **Update keyboard bindings** in `useSlideNavigation.ts`:
   - `Left/Right arrows` → Advance carousel/text items within current section
   - `Up/Down arrows` → Navigate between sections

**Arrow Button Placement:**
```text
┌─────────────────────────────────────────┐
│                                         │
│  The Challenge                    /01   │
│                                         │
│  [Text content...]                      │
│                                         │
│  ○ ○ ● ○ ○                              │
│                                         │
│                            [←]  [→]     │ ← Bottom-right arrows
└─────────────────────────────────────────┘
```

---

### NEW Section - "The Idea" (Insert between /01 and /02)

**Position:** New slide inserted after "The Challenge" (/01) and before "The Solution" (/02)

**Content Structure:**
- Initial state shows full narrative text
- As user advances (via arrows or keyboard), all text fades except:
  - The client quote (highlighted)
  - The final "we might have another avenue..." phrase

**Text Content:**
```text
A casual feature request conversation with an Account Manager gave us an idea...

"One of my accounts called in asking if we could add to display 'Owner Financing' when 
available. He said '[HIGHLIGHT] I sent multiple inquiries to of the sellers on your 
site and he never responded [/HIGHLIGHT]'"

...even though we have limited direct contact with users, we might have another avenue...
```

**Animation States:**

| State | Visible Text | Faded Text |
|-------|-------------|------------|
| State 1 (Initial) | All text visible | None |
| State 2 (Advanced) | Quote + "we might have another avenue..." | Intro and context text |

**Visual Treatment:**
- Quote highlighted with `bg-primary/10` background and `border-l-4 border-primary`
- Final phrase stays at full opacity while surrounding text fades to `opacity-20`

---

### Section /02 - The Insight Engine

**Current Issue:** Connector line doesn't align with dots/horizontal lines

**Solution:** Replace current line implementation with a single full-height gradient line

**Gradient Line Specification:**
```text
From top to bottom:
  background → outline → primary → outline → background
  (fade in)     (transition)  (solid)   (transition)  (fade out)
```

**Implementation:**
- Single absolute-positioned line running full viewport height
- Line appears **behind** cards (z-index: 0, cards: z-index: 10)
- CSS gradient: `linear-gradient(to bottom, var(--background), var(--border), var(--primary), var(--border), var(--background))`
- Line positioned at horizontal center of the node circles

**Visual Diagram:**
```text
     ↓ Fade from background color
     │
     │ ← Transition to outline
     ●───[ Card 1 ]
     │ ← Solid primary color
     ●───[ Card 2 ]
     │
     ●───[ Card 3 ]
     │
     ●───[ Card 4 ]
     │ ← Transition to outline
     │
     ↓ Fade to background color
```

---

### Section /03 - The Lead Intelligence Tool

**Changes:**
1. **Add subheader text:** "I wanted a simple tool that would parse leads for key words and see what our users were asking about"
2. **New overlapping image carousel layout:**

**Layout Pattern (alternates per slide):**

```text
Slide 1 (Odd):                    Slide 2 (Even):
┌───────────────┬───────────────┐ ┌───────────────┬───────────────┐
│               │               │ │               │               │
│  ┌─────┐      │   Caption 1   │ │   Caption 2   │      ┌─────┐  │
│  │Img 1│──┐   │               │ │               │   ┌──│Img 2│  │
│  └─────┘  │   │   Caption 2   │ │   Caption 1   │   │  └─────┘  │
│       ┌───┴─┐ │               │ │               │ ┌─┴───┐       │
│       │Img 2│ │               │ │               │ │Img 1│       │
│       └─────┘ │               │ │               │ └─────┘       │
└───────────────┴───────────────┘ └───────────────┴───────────────┘
    Images Left     Text Right       Text Left     Images Right
```

**Overlapping Effect:**
- Two images with slight offset overlap
- Primary image: larger, positioned slightly back
- Secondary image: smaller, overlapping with offset shadow

---

### Section /04 - Dual-Interface Impact

**Changes:**
1. **Merge all slides into single continuous carousel** spanning both Marketing Hub and Marketplace content
2. **Auto-transition:** When user reaches the last Marketing Hub slide and advances, automatically:
   - Toggle to Marketplace mode
   - Advance to first Marketplace slide
3. **Reverse transition:** When on first Marketplace slide and going back:
   - Toggle to Marketing Hub mode
   - Go to last Marketing Hub slide

**Unified Carousel Sequence:**
```text
Slide 1: The Seller's 'Aha' Moment (Marketing Hub)
Slide 2: Gamifying Quality (Marketing Hub)
Slide 3: Closing the Loop (Marketing Hub)
 ───── Auto-toggle to Marketplace ─────
Slide 4: The 'Invisibility' Problem (Marketplace)
Slide 5: Intent-Based Navigation (Marketplace)
```

---

### Section /05 - Strategy & Influence

**New Layout:** Hero image left, supporting text right (similar to /03 pattern)

**Changes:**
1. Remove `/01` and `/02` numbering from items
2. Implement alternating layout carousel:
   - Odd slides: Large image left, text right
   - Even slides: Text left, large image right

**Layout Pattern:**
```text
Slide 1:                          Slide 2:
┌───────────────┬───────────────┐ ┌───────────────┬───────────────┐
│               │               │ │               │               │
│               │    Title      │ │    Title      │               │
│    [IMAGE]    │               │ │               │    [IMAGE]    │
│               │  Description  │ │  Description  │               │
│               │               │ │               │               │
└───────────────┴───────────────┘ └───────────────┴───────────────┘
```

---

## Updated Section Data Structure

**New navigation order (add "The Idea" section):**

| Index | ID | Label | Number |
|-------|-----|-------|--------|
| 0 | hero | Overview | - |
| 1 | conflict | The Challenge | /01 |
| 2 | **idea** | **The Idea** | **NEW** |
| 3 | engine | The Solution | /02 |
| 4 | parsing | Parsing Tool | /03 |
| 5 | impact | Impact | /04 |
| 6 | strategy | Strategy | /05 |
| 7 | gallery | Gallery | /06 |
| 8 | vision | Vision | /07 |
| 9 | next-project | Next Project | /08 |

---

## Technical Implementation Details

### Keyboard Navigation Update (`useSlideNavigation.ts`)

```text
Current:
  ArrowDown/ArrowRight → Next section
  ArrowUp/ArrowLeft → Previous section

New:
  ArrowUp/ArrowDown → Navigate between sections
  ArrowLeft/ArrowRight → Reserved for carousel/item navigation within sections
```

### Component Updates Required

| File | Changes |
|------|---------|
| `useSlideNavigation.ts` | Update keyboard bindings (Up/Down for sections) |
| `IntelligenceOverInventoryProject.tsx` | Add arrows to /01, new "Idea" section, update /02 line, restructure /03 & /05 layouts |
| `ImpactSection04.tsx` | Merge all slides into unified carousel with auto-toggle logic |

### CSS Gradient Line (/02)

```css
.gradient-connector {
  position: absolute;
  left: 0.75rem; /* 12px - center of node */
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    hsl(var(--background)) 0%,
    hsl(var(--border)) 10%,
    hsl(var(--primary)) 30%,
    hsl(var(--primary)) 70%,
    hsl(var(--border)) 90%,
    hsl(var(--background)) 100%
  );
  z-index: 0;
}
```

---

## Files to Modify

| File | Action | Summary |
|------|--------|---------|
| `src/hooks/useSlideNavigation.ts` | Modify | Change keyboard bindings: Up/Down for sections only |
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Modify | Add /01 arrows, new "Idea" section, /02 gradient line, /03 overlapping layout, /05 hero layout |
| `src/components/ImpactSection04.tsx` | Modify | Unified carousel with Marketing Hub → Marketplace auto-transition |
