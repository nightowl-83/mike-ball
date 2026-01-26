

## Gaming News Site - Design System, Parallax Section & Cleanup Updates

### Overview

This plan implements five key changes:
1. Typography row height increase by 25%
2. Color chips restructured to stacked layout with larger fonts
3. New wireframe-to-HiDef parallax transition section
4. Onboarding title image container cleanup
5. Remove Outcomes section

---

### 1. Typography Row - Increase Height by 25%

**File:** `src/pages/projects/GamingNewsSiteProject.tsx` (line 1274)

**Change:**
- Current: `min-h-[400px]`
- New: `min-h-[500px]` (400 x 1.25 = 500)

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 min-h-[500px]">
```

---

### 2. Color Chips - Stacked Layout with Larger Fonts

**File:** `src/pages/projects/GamingNewsSiteProject.tsx` (lines 1345-1364)

**Current Layout:**
```text
[Color Swatch 50%] | [HEX/HSL/RGB specs on right]
```

**New Layout:**
```text
[Full-Width Color Swatch]
  - Color Name (bottom-left)
  - HEX
  - HSL  
  - RGB (primary row only)
```

**Font Size Increases:**
- Color name: `text-[10px]` -> `text-sm` (primary), `text-[8px]` -> `text-xs` (secondary)
- HEX: `text-[9px]` -> `text-sm font-mono`
- HSL/RGB: `text-[9px]` -> `text-xs`

**New Code Structure:**
```tsx
{column.map((color, rowIdx) => (
  <div 
    key={color.name} 
    className={`rounded-lg overflow-hidden border border-border/50 ${rowIdx === 0 ? 'h-[185px]' : 'h-[100px]'}`}
    style={{ backgroundColor: color.hex }}
  >
    <div className={`w-full h-full flex flex-col justify-end p-3 ${color.isDark ? 'text-white' : 'text-gray-900'}`}>
      <p className={`font-bold uppercase mb-1 ${rowIdx === 0 ? 'text-sm' : 'text-xs'}`}>
        {color.name}
      </p>
      <p className="font-mono text-sm">{color.hex}</p>
      <p className={`text-xs ${color.isDark ? 'opacity-70' : 'opacity-60'}`}>{color.hsl}</p>
      {rowIdx === 0 && color.rgb && (
        <p className={`text-xs ${color.isDark ? 'opacity-70' : 'opacity-60'}`}>{color.rgb}</p>
      )}
    </div>
  </div>
))}
```

---

### 3. New Wireframe-to-HiDef Parallax Transition Section

**Location:** After Design System section (line 1372), before Delivery section

**Assets Required:**
- Copy `user-uploads://Wireframe-2.png` -> `src/assets/wireframe-flow.png`
- Copy `user-uploads://HIDEF-2.png` -> `src/assets/ui-hidef.png`

**Implementation:**

A full-viewport (90vh) sticky section with scroll-driven parallax crossfade between wireframe and hi-def designs.

**Technical Approach:**
- Outer container: `h-[200vh]` to create scroll distance
- Inner sticky container: `sticky top-0 h-screen` to keep images fixed
- Calculate scroll progress (0-1) as section scrolls through viewport
- Wireframe opacity: `1 - progress`
- HiDef opacity: `progress`

**New Code:**
```tsx
{/* Wireframe to HiDef Transition Section */}
<section ref={wireframeTransitionRef} className="relative h-[200vh]">
  <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
    {/* Wireframe Layer */}
    <img 
      src={wireframeFlow} 
      alt="Wireframe designs showing user flow" 
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ opacity: 1 - wireframeProgress }}
    />
    {/* HiDef Layer */}
    <img 
      src={uiHidef} 
      alt="High fidelity UI designs" 
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ opacity: wireframeProgress }}
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

**Scroll Progress Logic (add to component):**
```tsx
const wireframeTransitionRef = useRef<HTMLDivElement>(null);
const [wireframeProgress, setWireframeProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    if (!wireframeTransitionRef.current) return;
    const rect = wireframeTransitionRef.current.getBoundingClientRect();
    const sectionHeight = wireframeTransitionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    const scrolled = -rect.top;
    const scrollableHeight = sectionHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
    
    setWireframeProgress(progress);
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

### 4. Onboarding Title Image - Remove All Container Background

**File:** `src/components/OnboardingCallout.tsx` (lines 43-62)

The current component already has `noImageBackground` prop but the image still has `rounded-xl` class. Update to conditionally remove all styling when `noImageBackground` is true.

**Changes:**
```tsx
{/* Image Column */}
<div 
  className={cn(
    "lg:col-span-7",
    reversed ? "lg:order-2" : "lg:order-1",
    "transition-all duration-700 ease-out",
    anim.isVisible 
      ? "opacity-100 translate-x-0" 
      : reversed 
        ? "opacity-0 translate-x-12" 
        : "opacity-0 -translate-x-12"
  )}
  style={{ transitionDelay: "100ms" }}
>
  <img 
    src={image} 
    alt={title}
    className={cn(
      "w-full h-auto object-cover",
      !noImageBackground && "rounded-xl"
    )}
  />
</div>
```

This ensures when `noImageBackground={true}` is passed:
- No background color on container
- No rounded corners on image
- No border or texture styling

---

### 5. Remove Outcomes Section

**File:** `src/pages/projects/GamingNewsSiteProject.tsx`

**Remove:**
- Lines 1486-1531: Entire Outcomes Section (`{/* Outcomes Section - 05 */}`)
- Remove `outcomesRef` from the sticky navigation refs
- Remove `outcomesAnim` scroll animation hook usage
- Remove "Outcomes" from the `sections` array for sticky nav

**Cleanup Required:**
- Remove from section refs declaration
- Update Next Project section number if applicable
- Clean up any navigation-related references

---

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/assets/wireframe-flow.png` | Copy from user upload (Wireframe-2.png) |
| `src/assets/ui-hidef.png` | Copy from user upload (HIDEF-2.png) |
| `src/pages/projects/GamingNewsSiteProject.tsx` | Typography height, color layout, parallax section, remove Outcomes |
| `src/components/OnboardingCallout.tsx` | Remove rounded corners when noImageBackground is true |

---

### Technical Implementation Notes

**Import Additions (GamingNewsSiteProject.tsx):**
```tsx
import wireframeFlow from "@/assets/wireframe-flow.png";
import uiHidef from "@/assets/ui-hidef.png";
```

**State Addition:**
```tsx
const [wireframeProgress, setWireframeProgress] = useState(0);
const wireframeTransitionRef = useRef<HTMLDivElement>(null);
```

**Execution Order:**
1. Copy wireframe and hi-def images to `src/assets/`
2. Update `OnboardingCallout.tsx` to conditionally remove rounded corners
3. Update `GamingNewsSiteProject.tsx`:
   - Add image imports
   - Add wireframe progress state and ref
   - Add scroll effect for parallax
   - Increase typography row height to 500px
   - Restructure color chips to stacked layout
   - Add parallax transition section after Design System
   - Remove Outcomes section entirely

