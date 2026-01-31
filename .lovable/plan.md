
# Update Intelligence Over Inventory Project - Sections /02, /03, /04

## Overview
Three targeted updates to the IntelligenceOverInventoryProject.tsx file:
1. Redesign Insight Engine (/02) card layout to match the reference
2. Add actual parsing tool images to section /03
3. Restructure Impact section (/04) layout

---

## Part 1: Insight Engine Section (/02) - Card Layout Redesign

### Current Layout
- Cards have alternating offset pattern (even up, odd down)
- Vertical connectors with nodes extend from cards to horizontal line
- Icon at top left of each card

### New Layout (Based on Reference)

```text
                    ┌─────────────────────┐           ┌─────────────────────┐
                    │  Keyword Parser  ⊟  │           │    UI Filters    ⊟  │
                    │  Extract intent...  │           │  Surface as...      │
                    └──────────┬──────────┘           └──────────┬──────────┘
                               │                                  │
━━━━━━━━━━━━━━━━━━━━━●━━━━━━━━●━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━●━━━━━━━━━
                    │                                  │                           │
       ┌────────────┴─────────────┐        ┌──────────┴──────────┐    ┌──────────┴──────────┐
       │  Lead Data           ⊟  │        │  Intent Mapping  ⊟  │    │  Seller Training ⊟  │
       │  Capture buyer...       │        │  Map keywords...    │    │  Provide data...    │
       └─────────────────────────┘        └─────────────────────┘    └─────────────────────┘
```

### Key Changes
| Aspect | Current | New |
|--------|---------|-----|
| Card positions | Even=up, Odd=down | 0,2,4=below, 1,3=above |
| Icon position | Top left with circle bg | Top right, inline with title |
| Card content | Icon first, then title | Title left, icon right |
| Connector direction | Based on card position | Above cards: connector goes up; Below cards: connector goes down |

### Desktop Implementation
- Cards 1, 3, 5 (indices 0, 2, 4): Positioned BELOW the line
- Cards 2, 4 (indices 1, 3): Positioned ABOVE the line
- Horizontal line runs through the middle
- Each card connects via vertical line to a node on the horizontal line

### Tablet Layout Suggestion
- Maintain horizontal flow with 3+2 stacking if needed
- Reduce card widths proportionally
- Keep stagger pattern visible but with reduced offset
- Or: Single row with horizontal scroll

### Mobile Layout Suggestion
- Stack cards vertically in a timeline-style
- Vertical line runs down the left side
- Each card connects horizontally to the left line
- Nodes mark each connection point
- All cards aligned to the right of the line

---

## Part 2: Parsing Tool Section (/03) - Add Images

### Images to Add
Copy the 3 Trendi screenshots to src/assets:
- `trendi-upload.png` - The upload email data interface
- `trendi-overview.png` - The overview with keyword trends chart
- `trendi-keywords.png` - The keywords distribution view

### Gallery Layout
```text
┌─────────────────────────────────────────────────────────────────────────────────┐
│  From Noise to Signal                                                      /03 │
│  The parsing tool transforms unstructured...                                    │
│                                                                                 │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐          │
│  │   [trendi-       │    │   [trendi-       │    │   [trendi-       │          │
│  │    upload.png]   │    │    overview.png] │    │    keywords.png] │          │
│  └──────────────────┘    └──────────────────┘    └──────────────────┘          │
│   Upload & Configure      Keyword Analysis        Distribution Insights         │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Updated Captions
1. **Upload & Configure** - "Upload email data and configure the parsing engine for analysis."
2. **Keyword Analysis** - "Track keyword trends over time with interactive charts and filters."
3. **Distribution Insights** - "Visualize keyword distribution and identify top search terms."

---

## Part 3: Impact Section (/04) - Layout Restructure

### Current Layout
- Title and section number at top
- Tabs below with default value
- Content in a grid with text left, image right

### New Layout
```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                             pt-12│
│                          Dual-Interface Impact                                   │
│                                  /04                                             │
│                                                                                  │
│                     ┌─────────────┐  ┌─────────────┐                            │
│                     │ Marketing   │  │ Marketing   │                            │
│                     │ Site        │  │ Hub         │                            │
│                     └─────────────┘  └─────────────┘                            │
│                                                                                  │
│ ┌──────────────────────────────────────────────────────────────────────────────┐│
│ │                                                                              ││
│ │  ┌─────────────────────────────┐    ┌────────────────────────────────────┐  ││
│ │  │  Title                      │    │                                    │  ││
│ │  │  Description                │    │       [Image/Screenshot]           │  ││
│ │  │  • Feature 1                │    │                                    │  ││
│ │  │  • Feature 2                │    │                                    │  ││
│ │  │  • Feature 3                │    │                                    │  ││
│ │  └─────────────────────────────┘    └────────────────────────────────────┘  ││
│ │                                                                   flex-1     ││
│ └──────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Key Changes
| Aspect | Current | New |
|--------|---------|-----|
| Section layout | `flex items-center` | `flex flex-col pt-12` |
| Title position | Top left with number right | Centered at top of viewport |
| Section number | Right aligned, same row | Below title, centered |
| Tab position | Below title, left aligned | Centered below title |
| Content area | Grid with margins | `flex-1` to fill remaining height |

---

## Technical Implementation

### Files to Modify
- `src/pages/projects/IntelligenceOverInventoryProject.tsx`

### Assets to Copy
- `user-uploads://Screenshot_2026-01-31_at_11.06.42 AM.png` → `src/assets/trendi-upload.png`
- `user-uploads://Screenshot_2026-01-31_at_11.10.02 AM.png` → `src/assets/trendi-overview.png`
- `user-uploads://Screenshot_2026-01-31_at_11.10.21 AM.png` → `src/assets/trendi-keywords.png`

### Code Changes Summary

**Section /02 (Insight Engine):**
- Update stagger logic: `[1, 3].includes(index) ? "lg:-translate-y-24" : "lg:translate-y-24"`
- Restructure card content: title and icon in flex row, description below
- Adjust connector logic based on above/below positioning

**Section /03 (Parsing Tool):**
- Import the 3 Trendi images
- Replace placeholder divs with actual `<img>` tags
- Update captions to match image content

**Section /04 (Impact):**
- Change section class to `flex flex-col pt-12`
- Create centered header block with title, number, and tabs
- Wrap tab content in `flex-1` container to fill remaining viewport
- Center-align the header and tabs
