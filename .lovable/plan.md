
## Gaming News Site Project - Comprehensive Updates

### Overview

This plan implements multiple refinements across the Personas, Design System, and Onboarding sections based on user feedback and uploaded reference images.

---

### 1. Add "Happy Path" Wireframe Section After Personas

**File:** `src/pages/projects/GamingNewsSiteProject.tsx`

**Location:** After the Persona Cards section (after line 1207), before the Design Section

**Implementation:**
- Copy `happy-path-grn.png` to `src/assets/`
- Add a new subsection with:
  - Full-width image display
  - Small caption describing the wireframing process

```text
Structure:
[Persona Cards Section]
 |
 v
[NEW: Happy Path Wireframe Subsection]
  - Container with reduced top padding
  - Image: Full width, rounded corners
  - Caption: "Early wireframe mapping the happy path user flow from discovery to engagement"
 |
 v
[Design Section /03]
```

---

### 2. V2 (Compact) Persona Card Layout Changes

**File:** `src/components/GamePersonaCard.tsx` (lines 248-367 - compact variant)

**Current Layout:**
```text
[Header: Name | Level]
[Avatar Column] [2x2 Grid: Attributes | Skill Radar]
                        [Objectives | Quote]
```

**New Layout:**
```text
[Header: Name | Level]
[Avatar Column] [Objectives + Quote stacked] [Full-Height Skill Radar]
```

**Specific Changes:**

a) **Column Structure:** Change from 2-column (1/3 + 2/3) to 3-column layout
   - Left: Avatar (1/4 width)
   - Middle: Objectives + Quote stacked vertically (1/4 width)
   - Right: Skill Radar spanning full height (2/4 width)

b) **Age & Player Type:** Increase font sizes and ensure they always sit at the bottom of the image container using absolute positioning with `bottom-0`

c) **Avatar Overflow Fix:** Use `object-cover object-top` and ensure the gradient overlay and badges use `absolute bottom-2` positioning to prevent cutoff on different viewports

---

### 3. Design System Section - Complete Restructure

**File:** `src/pages/projects/GamingNewsSiteProject.tsx` (lines 1256-1363)

**New Layout: 3 Stacked Full-Width Rows**

```text
ROW 1: Typography (2-column)
  - Left: "Typography" header + "Inter" font display + "Font Family" label
  - Right: All type styles (H1, H2, H3, H4, Subtitle, Body, Caption, Small)

ROW 2: Colors (full-width)
  - Move the existing 4x3 color grid here
  - Span full container width

ROW 3: Icons (full-width)
  - Remove the section subtitle
  - Remove labels from all icons
  - Change hover from filled icon to 10% Slate background on container
  - Add more icons to fill the container (need ~12 more)
```

**Remove:**
- UI Components section entirely
- `DesignSystemUIComponents` import and usage

---

### 4. Design System Icons Updates

**File:** `src/components/DesignSystemIcons.tsx`

**Changes:**

a) **Remove Labels:** Delete the `<span>` element showing icon name below each icon

b) **Remove Subtitle:** Delete the `<p>` description element

c) **Change Hover Effect:** Instead of outlined-to-filled transition, use:
   - Default: Normal icon with muted color
   - Hover: Background changes to `bg-[#8899A6]/10` (10% Slate)

d) **Add More Icons:** Expand from 36 to ~48 icons to fill container:
   - Add: `Zap, Wifi, WifiOff, Lock, Unlock, Sun, Moon, Volume2, VolumeX, Maximize, Minimize, RotateCw`

---

### 5. Onboarding Section Updates

**Files:** 
- `src/pages/projects/GamingNewsSiteProject.tsx` (lines 1406-1449)
- `src/components/OnboardingCallout.tsx`

**Changes:**

a) **Replace Title Image:** 
   - Copy `Onboard-Title-Cut.png` to `src/assets/onboard-title-cut.png`
   - Update import and usage in the intro `OnboardingCallout`

b) **Add Border Divider:** 
   - Add `border-b border-border/50` to the intro `OnboardingCallout` container
   - This visually separates the title row from subsequent onboarding steps

c) **Update OnboardingCallout Component:**
   - Accept optional `showDivider` prop
   - When true, render a bottom border on the callout container

---

### Technical Implementation Details

#### File Changes Summary

| File | Action |
|------|--------|
| `src/assets/happy-path-grn.png` | Copy from user upload |
| `src/assets/onboard-title-cut.png` | Copy from user upload |
| `src/pages/projects/GamingNewsSiteProject.tsx` | Add wireframe section, restructure Design System layout, update onboarding image |
| `src/components/GamePersonaCard.tsx` | Restructure V2 compact layout |
| `src/components/DesignSystemIcons.tsx` | Remove labels, change hover, add icons |
| `src/components/OnboardingCallout.tsx` | Add divider prop |

#### Design System New Layout Code Structure

```tsx
{/* Design System Section */}
<section className="relative py-12 md:py-24 bg-background">
  <div className="container mx-auto max-w-[1440px]">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">Design System</h2>
    
    {/* Row 1: Typography - 2 Column */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Left: Font Display */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Typography</h3>
        <h1 className="text-6xl font-bold">Inter</h1>
        <p className="text-muted-foreground">Font Family</p>
      </div>
      {/* Right: Type Styles */}
      <div className="bg-card border border-border rounded-lg p-6">
        {/* All H1-Small type samples */}
      </div>
    </div>
    
    {/* Row 2: Colors - Full Width */}
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      {/* 4x3 Color Grid */}
    </div>
    
    {/* Row 3: Icons - Full Width */}
    <DesignSystemIcons />
  </div>
</section>
```

#### V2 Card New Layout Code Structure

```tsx
<div className="flex flex-col lg:flex-row gap-3 p-3">
  {/* Left: Avatar (25%) */}
  <div className="lg:w-1/4 flex-shrink-0">
    <div className="relative aspect-square rounded-lg overflow-hidden">
      <img className="w-full h-full object-cover object-top" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      {/* Age/Type badges - absolute bottom positioning */}
      <div className="absolute bottom-2 left-2 right-2">
        <span className="text-sm font-semibold">{age} years old</span>
        <span className="text-sm">{playerType}</span>
      </div>
    </div>
  </div>

  {/* Middle: Objectives + Quote stacked (25%) */}
  <div className="lg:w-1/4 flex flex-col gap-3">
    <div className="flex-1 p-3 rounded-lg bg-muted/30">
      <h4>Objectives</h4>
      {/* Goals list */}
    </div>
    <div className="p-3 rounded-lg bg-muted/30">
      <p>"{quote}"</p>
    </div>
  </div>

  {/* Right: Full-Height Skill Radar (50%) */}
  <div className="lg:w-1/2 p-3 rounded-lg bg-muted/30">
    <h4>Skill Radar</h4>
    <div className="h-[180px]">
      <ResponsiveContainer>
        <RadarChart />
      </ResponsiveContainer>
    </div>
  </div>
</div>
```

#### Icon Hover State Change

```tsx
// Before (filled on hover)
<div className="group ... hover:border-primary/50 hover:bg-primary/5">
  <Icon className="group-hover:opacity-0" strokeWidth={1.5} />
  <Icon className="opacity-0 group-hover:opacity-100" fill="currentColor" />
</div>

// After (Slate background on hover)
<div className="group p-3 rounded-lg hover:bg-[#8899A6]/10 transition-all">
  <Icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground" strokeWidth={1.5} />
</div>
```

---

### Assets to Copy

1. **Happy Path Wireframe:** `user-uploads://happy-path-grn.png` -> `src/assets/happy-path-grn.png`
2. **Onboarding Title Cut:** `user-uploads://Onboard-Title-Cut.png` -> `src/assets/onboard-title-cut.png`

---

### Execution Order

1. Copy image assets to `src/assets/`
2. Update `DesignSystemIcons.tsx` (remove labels, change hover, add icons)
3. Update `OnboardingCallout.tsx` (add divider prop)
4. Update `GamePersonaCard.tsx` (restructure V2 compact layout)
5. Update `GamingNewsSiteProject.tsx`:
   - Add wireframe section after personas
   - Restructure Design System to 3 stacked rows
   - Remove UI Components section and import
   - Update onboarding title image and add divider
