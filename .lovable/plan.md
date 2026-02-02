

# Intelligence Over Inventory - Multi-Section Update

## Overview
This plan covers four key updates to the Intelligence Over Inventory project page:
1. Redesign section /03 to a 2-column, 4-card grid layout with a new image
2. Replace "Signal and Noise" terminology with clearer alternatives
3. Update section /05 with new strategy content in an alternating image/text layout
4. Limit the dual-mode toggle to only section /04 and auto-revert theme when leaving

---

## Change Summary

| Area | Change |
|------|--------|
| Section /03 | Convert from stacked full-width to 2-column grid with 4 card slots |
| New asset | Copy `Trendi-4.png` to `src/assets/trendi-advanced.png` |
| Terminology | Replace "From Noise to Signal" and related phrasing |
| Section /05 | New 2-item content with alternating image/text layout |
| Toggle logic | Show only on /04, auto-reset to dark mode when leaving |

---

## 1. Section /03 Layout Redesign

### Current State
Three images stacked vertically in a scrollable container at 16:9 aspect ratio.

### New Layout
A 2-column grid with 4 card slots, each card featuring an image at the top and a caption/description below.

```text
┌─────────────────────────────────────────────────────────────┐
│  The Lead Intelligence Tool                          /03   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────┐    ┌──────────────────────┐      │
│  │                      │    │                      │      │
│  │   Card 1 Image       │    │   Card 2 Image       │      │
│  │   (trendi-upload)    │    │   (trendi-keywords)  │      │
│  │                      │    │                      │      │
│  ├──────────────────────┤    ├──────────────────────┤      │
│  │   Caption text       │    │   Caption text       │      │
│  └──────────────────────┘    └──────────────────────┘      │
│                                                             │
│  ┌──────────────────────┐    ┌──────────────────────┐      │
│  │                      │    │                      │      │
│  │   Card 3 Image       │    │   Card 4 Image       │      │
│  │   (trendi-regions)   │    │   (trendi-advanced)  │      │
│  │                      │    │                      │      │
│  ├──────────────────────┤    ├──────────────────────┤      │
│  │   Caption text       │    │   Caption text       │      │
│  └──────────────────────┘    └──────────────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Card Structure
Each card uses a 4:3 aspect ratio image with a subtle border and rounded corners, plus a text caption below.

---

## 2. Terminology Updates

Replace "Signal and Noise" terminology throughout to reduce buzzword usage:

| Location | Current Text | New Text |
|----------|--------------|----------|
| Section /03 title | "From Noise to Signal" | "The Lead Intelligence Tool" |
| Section /03 subtitle | "The parsing tool transforms unstructured lead messages into structured intent data..." | "The parsing tool extracts buyer intent from unstructured lead data, enabling smarter filters and actionable seller insights." |
| Section /02 description | "transforms buyer engagement signals into actionable product features" | "transforms raw buyer interactions into actionable product features" |
| Hero description | "proprietary buyer intent signals" | "proprietary buyer intent data" |
| Gaming News Site (separate project) | Keep "Signal, Not Noise" - this is a different project's tagline |

---

## 3. Section /05 Content Update

### New Content Data

**Item 01: Challenging the "More is Better" Fallacy**
- Text: We pushed back against the assumption that simply increasing lead volume was our primary goal. We realized that if we didn't address the content of those leads, we were just creating more work for sellers without necessarily increasing their success rate. I used the lead parsing data to prove that there was a gap between what buyers were asking and what sellers were providing. I shifted the conversation from "How do we get more clicks?" to "How do we help sellers answer these common questions upfront?"

**Item 02: Data-Informed Coaching (The Marketing Hub)**
- Text: By shifting our mindset from delivering more leads to delivering quality leads, we challenged how we present data to our users. Instead of a passive listing form, the Hub became a coaching tool. We implemented the "Popular Features" section and the Property Completeness Score. We used the parser's findings to tell sellers exactly what they were missing. "Water and Electricity are often asked about by buyers. Properties that include this see an average of 5x more leads."

### Alternating Layout Structure

```text
┌─────────────────────────────────────────────────────────────┐
│  Strategy & Influence                                /05   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ITEM 01                                                    │
│  ┌────────────────────────┐   ┌─────────────────────────┐  │
│  │                        │   │  /01                    │  │
│  │                        │   │  Challenging the        │  │
│  │   VISUAL/IMAGE         │   │  "More is Better"       │  │
│  │   (placeholder or      │   │  Fallacy                │  │
│  │   suggest asset)       │   │                         │  │
│  │                        │   │  [narrative text...]    │  │
│  └────────────────────────┘   └─────────────────────────┘  │
│                                                             │
│  ITEM 02 (reversed)                                         │
│  ┌─────────────────────────┐   ┌────────────────────────┐  │
│  │  /02                    │   │                        │  │
│  │  Data-Informed          │   │                        │  │
│  │  Coaching               │   │   VISUAL/IMAGE         │  │
│  │  (The Marketing Hub)    │   │                        │  │
│  │                         │   │                        │  │
│  │  [narrative text...]    │   │                        │  │
│  └─────────────────────────┘   └────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Visual Suggestions for /05

Since visuals are required for each item, here are practical options using existing patterns:

| Item | Suggested Visual Approach |
|------|---------------------------|
| 01 - Challenging Assumptions | Reuse `trendi-keywords.png` or create a simplified data comparison graphic showing the gap between buyer questions and seller content |
| 02 - Data-Informed Coaching | Reuse `mh-completeness-cards.png` to show the Property Completeness Score in action |

The alternating layout mirrors patterns used in other project pages (like the Marketing Hub callouts) for consistency.

---

## 4. Toggle Visibility and Theme Reset Logic

### Current Behavior
- Toggle visible on sections /04 through /07 (indices 4-7)
- Light mode persists across all sections once activated

### New Behavior
- Toggle visible **only** on section /04 (index 4)
- When user scrolls away from /04 while `marketplace` mode is active, automatically reset to `marketing-hub` (dark mode)

### Implementation Logic

```tsx
// Change toggle visibility check
const showDualModeToggle = currentSectionIndex === 4; // Only section /04

// Add effect to reset mode when leaving /04
useEffect(() => {
  if (currentSectionIndex !== 4 && activeDataMode === 'marketplace') {
    setActiveDataMode('marketing-hub');
  }
}, [currentSectionIndex, activeDataMode]);
```

This ensures users don't get stuck in light mode when navigating to other sections, and the toggle is contextually relevant only to the Impact section where the dual-perspective content lives.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/assets/trendi-advanced.png` | Copy from `user-uploads://Trendi-4.png` |
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | All changes below |

### Specific Changes in Main File

1. **Add import** for new image: `import trendiAdvanced from "@/assets/trendi-advanced.png";`

2. **Update section /03 card data** - New array with 4 items:
   - Upload & Configure (trendiUpload)
   - Keyword Analysis (trendiKeywords)
   - Distribution Insights (trendiRegions)
   - Advanced Trend Analysis (trendiAdvanced)

3. **Update section /03 layout** - Convert from stacked to 2x2 grid with card styling

4. **Replace terminology** in 4 locations (title, subtitle, /02 description, hero)

5. **Replace strategyPillars data** - New 2-item array with full narrative content

6. **Update section /05 layout** - Convert from 3-column card grid to alternating 2-column rows

7. **Update toggle logic** - Change visibility condition and add reset effect

---

## Technical Details

### Section /03 Card Component Structure

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {parsingCards.map((card, index) => (
    <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={card.image} 
          alt={card.title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1">{card.title}</h3>
        <p className="text-sm text-muted-foreground">{card.caption}</p>
      </div>
    </div>
  ))}
</div>
```

### Section /05 Alternating Row Structure

```tsx
<div className="space-y-12">
  {strategyItems.map((item, index) => (
    <div 
      key={item.number}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
        index % 2 === 1 && "lg:flex-row-reverse"
      )}
    >
      {/* Image side */}
      <div className={cn(
        "aspect-video bg-muted/30 border border-border rounded-xl overflow-hidden",
        index % 2 === 1 && "lg:order-2"
      )}>
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-muted-foreground">Visual placeholder</p>
          </div>
        )}
      </div>
      
      {/* Text side */}
      <div className={cn("space-y-4", index % 2 === 1 && "lg:order-1")}>
        <span className="text-4xl font-bold font-mono text-primary/30">/{item.number}</span>
        <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  ))}
</div>
```

