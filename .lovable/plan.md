
# Intelligence Over Inventory - New Project Case Study Page

## Overview
Create a new project case study page titled "Intelligence Over Inventory" that follows the established design patterns, typography, color system, and spacing conventions from existing project pages (Rural Land Marketplace, Marketing Hub, Gaming News Site). The implementation will be designed for reusability as a template for future projects.

---

## Page Structure

The page follows the standard project page sequence established in the architecture:

1. **Narrative Hero** (Two-column split)
2. **Strategic Conflict Section** (Two-column problem/visual)
3. **The Insight Engine** (Full-width technical innovation)
4. **Dual-Interface Impact** (Tabbed comparison)
5. **Strategy & Influence Grid** (Bento/card grid)
6. **Design Detail Gallery** (Image grid with captions)
7. **Future Vision Footer** (Centered text block)
8. **Next Project Navigation**

---

## Detailed Section Specifications

### 1. Narrative Hero Section
- **Layout:** Two-column split (following `RuralLandMarketplaceProject.tsx` hero pattern)
- **Left Column:**
  - Category pill badge (`bg-primary/10 text-primary`)
  - H1: "Intelligence Over Inventory" 
  - H2/Subhead: "Transforming Commodity Data into First-Party Insights"
  - Role/Timeline/Year metadata grid
  - Tags row using existing pill styling
- **Right Column:** Hero image placeholder (responsive `object-contain`)
- **Impact Metrics:** Flex-row of badge/pill components below the description
  - Example: "+45% Lead Quality" | "3x Seller Engagement" | "First-Party Data"

### 2. Strategic Conflict Section
- **Layout:** Standard two-column section with section number (`/01`)
- **Left Column - Problem Block:**
  - Section title: "The Challenge"
  - Description text explaining 3rd-party feed limitations
  - Bullet list with primary-colored dots (existing pattern)
  - Highlighted callout box (`bg-card/50 border-primary/20`)
- **Right Column:**
  - Placeholder image container for "Market Saturation" visual
  - Caption using `text-sm text-muted-foreground`

### 3. The Insight Engine (Technical Innovation)
- **Layout:** Full-width section with `bg-card/30` background
- **Section Number:** `/02`
- **Structure:**
  - Section header with title left, number right
  - Step-based flow visualization:
    - Horizontal flow on desktop, vertical on mobile
    - Each step: Icon + Label + Description
    - Steps: Lead Data → Keyword Parser → Intent Mapping → UI Filters
  - Visual connection lines between steps
- **Pattern:** Uses existing process step styling from Design Process sections

### 4. Dual-Interface Impact (Side-by-Side)
- **Layout:** Full-width section with tabbed interface
- **Section Number:** `/03`
- **Implementation:** Uses existing `Tabs` component from `@radix-ui/react-tabs`
- **Two Tabs:**
  1. **Marketing Site Tab:** Advanced filters driven by buyer intent
     - Description text
     - Feature highlights
     - Placeholder image
  2. **Marketing Hub Tab:** Performance Coach dashboard with ROI nudges
     - Description text
     - Seller-focused metrics
     - Placeholder image
- **Styling:** Tabs follow existing `TabsList`, `TabsTrigger`, `TabsContent` patterns

### 5. Strategy & Influence Grid
- **Layout:** Bento grid or 3-column card layout
- **Section Number:** `/04`
- **Three Cards/Pillars:**
  1. "Challenging Research Assumptions"
  2. "Data-Informed Execution"  
  3. "Business Value Alignment"
- **Card Structure:** (following existing card patterns)
  - Number indicator (01, 02, 03)
  - Title (H3)
  - Description paragraph
  - Optional icon or visual element
- **Styling:** `bg-card rounded-2xl p-8 shadow-sm`

### 6. Design Detail Gallery
- **Layout:** Responsive grid (2 columns on desktop, 1 on mobile)
- **Section Number:** `/05`
- **Image Cards:**
  - Rounded container with image
  - Caption below using `text-sm text-muted-foreground`
  - Caption explains specific design decisions (typography, component logic)
- **Pattern:** Follows the showcase grid pattern from existing projects

### 7. Future Vision Footer
- **Layout:** Centered text block
- **Title:** "The AI Evolution"
- **Content:** Simple paragraph about next steps
- **Styling:** 
  - `text-center` container
  - Max-width constraint
  - `py-10 md:py-24` spacing

### 8. Next Project Navigation
- **Layout:** Standard next project pattern (from existing projects)
- **Structure:**
  - "Next Project" label
  - Project title
  - Brief description
  - "View Project" button with arrow

---

## Technical Specifications

### File Structure
```
src/pages/projects/IntelligenceOverInventoryProject.tsx
```

### Required Imports
```tsx
import { ArrowLeft, ArrowRight, Database, Filter, BarChart3, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { StickyNavHeader } from "@/components/StickyNavHeader";
import ProjectSectionNav from "@/components/ProjectSectionNav";
```

### Routing Update
Add to `src/App.tsx`:
```tsx
import IntelligenceOverInventoryProject from "./pages/projects/IntelligenceOverInventoryProject";

// In Routes:
<Route path="/projects/intelligence-over-inventory" element={<IntelligenceOverInventoryProject />} />
```

### Data Entry
Add to `src/data/projectsData.ts`:
```tsx
{
  id: "intelligence-over-inventory",
  title: "Intelligence Over Inventory",
  description: "Transforming commodity data into first-party insights with advanced filtering and seller performance coaching.",
  category: "Product Strategy",
  image: "", // Placeholder
  route: "/projects/intelligence-over-inventory",
  tags: ["Product Strategy", "Data Systems", "UX Design"],
  layoutVariant: "hero-accent",
  company: "CoStar Group"
}
```

### Section Navigation Setup
```tsx
const sections = [
  { id: 'hero', section: 'Overview', subsection: '', number: '', ref: heroRef },
  { id: 'conflict', section: 'Challenge', subsection: '', number: '/01', ref: conflictRef },
  { id: 'engine', section: 'Solution', subsection: '', number: '/02', ref: engineRef },
  { id: 'impact', section: 'Impact', subsection: '', number: '/03', ref: impactRef },
  { id: 'strategy', section: 'Strategy', subsection: '', number: '/04', ref: strategyRef },
  { id: 'gallery', section: 'Gallery', subsection: '', number: '/05', ref: galleryRef },
  { id: 'vision', section: 'Vision', subsection: '', number: '', ref: visionRef },
  { id: 'next-project', section: 'Next Project', subsection: '', number: '', ref: nextProjectRef }
];
```

---

## Design System Compliance

### Spacing
- **Container:** `container mx-auto max-w-[1440px]`
- **Section Padding:** `py-10 md:py-24`
- **Mobile Horizontal Padding:** 24px (via container)
- **Grid Gaps:** `gap-4 md:gap-16`

### Typography
- **H1:** `text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold`
- **H2:** `text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold`
- **Body:** `text-base md:text-lg text-muted-foreground`
- **Section Numbers:** `text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20`

### Colors
- **Primary accents:** `text-primary`, `bg-primary/10`
- **Backgrounds:** `bg-background`, `bg-card/30`, `bg-card`
- **Borders:** `border-border`, `border-primary/20`
- **Text:** `text-foreground`, `text-muted-foreground`

### Interactive States
- **Buttons:** Using existing `Button` component variants
- **Tabs:** Standard Radix tab styling from `tabs.tsx`
- **Hover:** `hover:bg-accent`, transitions

---

## Template Reusability Notes

For future projects, the following patterns can be replicated:

1. **Copy the entire file structure** and replace content
2. **Section refs and navigation** - Update section names in the `sections` array
3. **Hero metadata** - Swap title, description, role, timeline, tags
4. **Tabbed sections** - Reuse the Tabs pattern for any A/B comparison
5. **Card grids** - Adjust grid columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
6. **Flow diagrams** - Modify step data arrays for different processes
7. **Image placeholders** - Replace src attributes as assets become available

The page structure is modular - sections can be added, removed, or reordered by adjusting the JSX order and `sections` array.

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/projects/IntelligenceOverInventoryProject.tsx` | Create new file |
| `src/App.tsx` | Add route |
| `src/data/projectsData.ts` | Add project entry |

---

## Placeholder Content

All image sources will initially use placeholder strings (`""` or placeholder image paths) that can be replaced when actual assets are provided. The structure supports:
- Hero image
- Market saturation visual
- Marketing Site screenshots
- Marketing Hub dashboard screenshots
- Design detail gallery images (4-6 slots)

