

## Gaming News Site - Multi-Section Updates

### Overview

This plan addresses six key updates across multiple sections of the Gaming News Site project page:

1. **Persona Card V2 (Compact)**: Increase font sizes for objectives and quotes, fix mobile/tablet layout
2. **Design System Typography**: Center H1-Small items on desktop, increase inverse container height on mobile/tablet
3. **Key Features Section**: Add subheaders for each feature, add "Daily Brief Mode" slide
4. **Parallax Section**: Move before Design section, add zoom effect to images

---

### 1. Persona Card V2 (Compact) - Font Size & Mobile Layout

**File:** `src/components/GamePersonaCard.tsx` (lines 248-343)

**Current Issues:**
- Objectives use `text-xs` (too small)
- Quote uses `text-xs` (too small)
- Mobile/tablet layout has content cut off after the avatar due to `max-h-[50vh]` constraint

**Changes:**

**A. Increase Font Sizes:**
- Objectives text: `text-xs` to `text-sm`
- Quote text: `text-xs` to `text-sm`
- Section headers remain at `text-xs` for hierarchy

**B. Fix Mobile/Tablet Layout:**
- Remove `max-h-[50vh]` constraint that causes content cutoff
- Change layout from 3-column to stacked on mobile/tablet:
  - Mobile: Single column (avatar, then objectives/quote, then radar)
  - Tablet (md): 2-column (avatar left, content right)
  - Desktop (lg): Current 3-column layout
- Allow content to flow naturally without height constraints

**Updated Structure:**
```tsx
{/* Remove max-h-[50vh] */}
<div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
  
  {/* Main Content - Responsive Layout */}
  <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-3 p-3">
    {/* Avatar - Full width on mobile, half on tablet, 25% on desktop */}
    <div className="w-full md:col-span-1 lg:w-1/4 flex-shrink-0">
      ...
    </div>

    {/* Objectives + Quote - Stack on mobile, side on tablet, 25% on desktop */}
    <div className="w-full md:col-span-1 lg:w-1/4 flex flex-col gap-3">
      <div className="...">
        <h4 className="text-xs ...">Objectives</h4>
        <div className="flex items-start gap-1.5 text-sm"> {/* Changed from text-xs */}
          ...
        </div>
      </div>
      <div className="...">
        <p className="text-sm text-muted-foreground italic ..."> {/* Changed from text-xs */}
          "{quote}"
        </p>
      </div>
    </div>

    {/* Skill Radar - Full width on mobile/tablet, 50% on desktop */}
    <div className="w-full lg:w-1/2 p-3 ...">
      ...
    </div>
  </div>
</div>
```

---

### 2. Design System Typography Section

**File:** `src/pages/projects/GamingNewsSiteProject.tsx` (lines 1290-1348)

**Changes:**

**A. Desktop - Center H1-Small Items:**
The right column contains typography samples (H1, H2, H3, H4, Subtitle, Body, Caption, Small). Center these items vertically within their container using `items-center` and `justify-center`.

**B. Mobile/Tablet - Increase Typography Inverse Container Height:**
Add responsive min-height to the left "Inter" display column:
- Current: Uses same height for all breakpoints
- New: `min-h-[300px] md:min-h-[400px] lg:min-h-auto` (taller on mobile/tablet)

**Updated Structure:**
```tsx
{/* Row 1: Typography - 2 Column */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 min-h-[500px]">
  {/* Left: Font Display - Increased height on mobile/tablet */}
  <div className="h-full min-h-[300px] md:min-h-[350px] lg:min-h-0 rounded-lg p-6 md:p-8 flex flex-col bg-[#fbfcfe]">
    ...
  </div>
  
  {/* Right: Type Styles - Center items on desktop */}
  <div className="h-full bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col">
    <div className="flex-1 grid grid-cols-2 gap-6 md:gap-8 items-center justify-center">
      {/* First Column - Centered */}
      <div className="space-y-3 md:space-y-4 flex flex-col items-center lg:items-center">
        <div className="text-center lg:text-center">
          <p className="text-3xl md:text-4xl font-semibold">H1</p>
          <p className="text-sm text-muted-foreground">32px Semi Bold</p>
        </div>
        ...
      </div>
      
      {/* Second Column - Centered */}
      <div className="space-y-3 md:space-y-4 flex flex-col items-center lg:items-center">
        ...
      </div>
    </div>
  </div>
</div>
```

---

### 3. Key Features Section - Add Subheaders + Daily Brief Slide

**File:** `src/pages/projects/GamingNewsSiteProject.tsx` (lines 1472-1485)

**Current Structure:**
Each story item only has `text`, `image`, and `imageAlt`.

**Changes:**

**A. Update ScrollStorySection Component:**
Add optional `subheader` field to `StoryItem` interface and display it above the paragraph text.

**File:** `src/components/ScrollStorySection.tsx`

```tsx
export interface StoryItem {
  text: string;
  image: string;
  imageAlt: string;
  subheader?: string; // NEW: Feature name subheader
}
```

Update the text rendering to include subheader:
```tsx
<div className="...">
  {story.subheader && (
    <h3 className="text-lg md:text-xl font-bold text-primary mb-4">
      {story.subheader}
    </h3>
  )}
  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
    {words.map(...)}
  </p>
</div>
```

**B. Update Feature Stories Data:**
Add subheaders and new "Daily Brief Mode" slide:

```tsx
<ScrollStorySection 
  stories={[
    {
      subheader: "The Spoiler Curtain",
      text: "The Spoiler Curtain protects users from unwanted story reveals...",
      image: gnsCarouselSpoiler,
      imageAlt: "..."
    },
    {
      subheader: "The Caffeine Toggle",
      text: "The Caffeine Toggle enables second-screen support...",
      image: gnsCarouselCoffee,
      imageAlt: "..."
    },
    {
      subheader: "Progressive Drawers",
      text: "Progressive Drawers eliminate content bloat...",
      image: gnsCarouselDrawer,
      imageAlt: "..."
    },
    {
      subheader: "Daily Brief Mode",
      text: "Daily Brief Mode delivers a curated morning digest that surfaces the top 5 stories based on user preferences. Designed for commuters and time-conscious gamers, it's readable in under 5 minutes—giving you the signal without the noise.",
      image: gnsHomePhoneShowcase, // Use existing home showcase image
      imageAlt: "Daily Brief Mode showing curated morning digest"
    }
  ]}
  sectionTitle="Key Features" 
  sectionNumber="/04" 
  progressStyle="dots" 
/>
```

---

### 4. Move Parallax Section Before Design + Add Zoom Effect

**File:** `src/pages/projects/GamingNewsSiteProject.tsx`

**Changes:**

**A. Move Parallax Section:**
- Current location: After "Deliverables Box" section (line 1499)
- New location: After "Happy Path Wireframe" section (after line 1236), before "Design" section

This places the wireframe-to-HiDef transition right before the Design section, creating a logical flow: Discovery > Wireframes > Wireframe Transition > Design

**B. Add Zoom Effect:**
Apply a subtle scale transform that increases from 1.0 to 1.05 as scroll progresses:

```tsx
<section ref={wireframeTransitionRef} className="relative h-[200vh]">
  <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
    {/* Wireframe Layer - Zoom out as it fades */}
    <img 
      src={wireframeFlow} 
      alt="Wireframe designs showing user flow" 
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-100"
      style={{ 
        opacity: 1 - wireframeProgress,
        transform: `scale(${1 + (wireframeProgress * 0.08)})` // 1.0 -> 1.08
      }}
    />
    {/* HiDef Layer - Zoom in as it appears */}
    <img 
      src={uiHidef} 
      alt="High fidelity UI designs" 
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-100"
      style={{ 
        opacity: wireframeProgress,
        transform: `scale(${1.08 - (wireframeProgress * 0.08)})` // 1.08 -> 1.0
      }}
    />
    {/* Caption */}
    <div className="absolute bottom-12 left-0 right-0 text-center z-10">
      <p className="text-lg md:text-xl text-white/90 bg-background/70 backdrop-blur-sm inline-block px-8 py-4 rounded-full">
        Translating wireframes into high-fidelity UI
      </p>
    </div>
  </div>
</section>
```

The zoom effect creates visual depth:
- Wireframe starts at normal scale (1.0), zooms slightly out (1.08) as it fades
- HiDef starts zoomed in (1.08), settles to normal (1.0) as it appears

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/GamePersonaCard.tsx` | V2 variant: increase objective/quote font sizes, fix mobile/tablet layout |
| `src/components/ScrollStorySection.tsx` | Add optional `subheader` prop to StoryItem interface and render it |
| `src/pages/projects/GamingNewsSiteProject.tsx` | Typography centering, increased mobile height, move parallax section, add zoom effect, add subheaders to features, add Daily Brief slide |

---

### Technical Implementation Summary

**Execution Order:**
1. Update `GamePersonaCard.tsx` V2 variant with larger fonts and responsive layout
2. Update `ScrollStorySection.tsx` to support subheaders
3. Update `GamingNewsSiteProject.tsx`:
   - Center typography items and increase mobile inverse container height
   - Move parallax section before Design section
   - Add zoom effect to parallax images
   - Add subheaders to Key Features stories
   - Add "Daily Brief Mode" as 4th slide

