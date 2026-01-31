

# Insight Engine Section Redesign + New Parsing Tool Section

## Overview
This plan covers two major changes:
1. Redesign the "Insight Engine" section (/02) with a horizontal 5-card flow connected by a line
2. Add a new "Parsing Tool" section after /02 to showcase 3 images

---

## Part 1: Insight Engine Section Changes

### Current State
- 4 cards in a horizontal 2x2 / 4-column grid
- Title and description centered vertically in the viewport
- Cards: Lead Data, Keyword Parser, Intent Mapping, UI Filters

### Proposed Changes

**1. Move title to top of viewport**
- Position header near the top with `pt-12` padding
- Change from `flex items-center` to `flex flex-col pt-12`

**2. Replace card grid with horizontal 5-card flow**
- 5 cards displayed horizontally in a single row
- Cards connected by a horizontal line running through them
- Cards staggered vertically (alternating up/down) for visual interest

**3. Add 5th card: Seller Training**
- New card added at the end of the flow
- Content: "Provide data for what buyers are searching for"

### New Flow Steps Data

| Step | Label | Description | Icon |
|------|-------|-------------|------|
| 1 | Lead Data | Capture buyer inquiries and engagement signals | Database |
| 2 | Keyword Parser | Extract intent keywords from lead messages | Filter |
| 3 | Intent Mapping | Map keywords to filter categories | Target |
| 4 | UI Filters | Surface as advanced search options | BarChart3 |
| 5 | Seller Training | Provide data for what buyers are searching for | Users |

### Visual Layout (Desktop)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  The Insight Engine                                                    /02  │
│  Converting engagement signals into actionable intelligence...              │
│                                                                             │
│     ┌─────────┐           ┌─────────┐           ┌─────────┐                │
│     │  Lead   │           │ Intent  │           │ Seller  │                │
│     │  Data   │           │ Mapping │           │Training │                │
│     └────┬────┘           └────┬────┘           └────┬────┘                │
│          │                     │                     │                      │
│  ────────●─────────────────────●─────────────────────●─────────────────     │
│          │                     │                     │                      │
│     ┌────┴────┐           ┌────┴────┐                                      │
│     │Keyword  │           │   UI    │                                      │
│     │ Parser  │           │ Filters │                                      │
│     └─────────┘           └─────────┘                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Implementation Approach

**Structure:**
- Horizontal line running through the center of the section
- Cards positioned above and below the line, alternating
- Connection dots/nodes where cards meet the line
- Responsive: Stack to 2-3 columns on tablet, single column on mobile

**Styling:**
- Cards: `bg-card border border-border rounded-xl p-6`
- Horizontal line: `h-0.5 bg-border w-full absolute top-1/2`
- Connection nodes: `w-3 h-3 rounded-full bg-primary`
- Vertical connectors: `w-0.5 h-8 bg-border` from card to line

---

## Part 2: New Parsing Tool Section

### Section Details
- Position: After "Insight Engine" (/02), before "Dual-Interface Impact" (now /04)
- This becomes section /03
- All subsequent sections shift by +1

### Section Content

**Title:** "From Noise to Signal"

**Subtitle:** "The parsing tool transforms unstructured lead messages into structured intent data, enabling smarter filters and actionable seller insights."

**Layout:** 3-image horizontal gallery with placeholder images

```text
┌─────────────────────────────────────────────────────┐
│  From Noise to Signal                          /03  │
│  The parsing tool transforms unstructured...        │
│                                                     │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐        │
│  │ Image 1  │   │ Image 2  │   │ Image 3  │        │
│  │          │   │          │   │          │        │
│  └──────────┘   └──────────┘   └──────────┘        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Section Navigation Updates

| Index | Section ID | Section Number |
|-------|------------|----------------|
| 0 | hero | - |
| 1 | conflict | /01 |
| 2 | engine | /02 |
| 3 | parsing (NEW) | /03 |
| 4 | impact | /04 |
| 5 | strategy | /05 |
| 6 | gallery | /06 |
| 7 | vision | /07 |
| 8 | next-project | /08 |

---

## Technical Details

### Files to Modify
- `src/pages/projects/IntelligenceOverInventoryProject.tsx`

### Key Code Changes

1. **Update `sectionData` array** - Add new parsing section, update section numbers
2. **Update `flowSteps` array** - Add 5th "Seller Training" step with Users icon
3. **Refactor Insight Engine section** - Horizontal 5-card layout with connecting line and staggered positioning
4. **Add new Parsing Tool section** - 3-column image grid with placeholder images
5. **Update all section refs** - Add new ref, shift indices for sections after the new one

### Responsive Behavior
- **Desktop:** 5 cards horizontal with staggered vertical positions, connected by line
- **Tablet:** 3+2 layout or wrapped horizontal
- **Mobile:** Vertical stack with left-side line

