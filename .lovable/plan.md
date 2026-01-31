

# Global Design System + Intelligence Over Inventory Updates

## Overview
Four targeted updates across the design system and the project page:
1. Update primary color site-wide from purple to #3835E2
2. Enhance Insight Engine (/02) card connectors and center content
3. Remove icon colors and increase card sizes in /02
4. Fix Impact section (/04) header layout and spacing

---

## Part 1: Global Primary Color Update

### Color Conversion
| Property | Current | New (#3835E2) |
|----------|---------|---------------|
| Hex | ~#9B87F5 | #3835E2 |
| HSL | 263 70% 65% | 241 76% 55% |

### Files to Update
**src/index.css** - Update all instances of the purple color

### Changes in `:root`
| Token | Current HSL | New HSL |
|-------|-------------|---------|
| `--primary` | 263 70% 65% | 241 76% 55% |
| `--accent` | 263 70% 65% | 241 76% 55% |
| `--ring` | 263 70% 65% | 241 76% 55% |
| `--sidebar-primary` | 263 70% 65% | 241 76% 55% |
| `--sidebar-ring` | 263 70% 65% | 241 76% 55% |
| `--gradient-primary` | hsl(263 70% 65%), hsl(220 85% 65%) | hsl(241 76% 55%), hsl(220 85% 60%) |
| `--gradient-accent` | hsl(263 70% 50%), hsl(280 70% 55%), hsl(240 70% 55%) | hsl(241 76% 50%), hsl(260 70% 55%), hsl(220 70% 55%) |
| `--shadow-glow` | hsl(263 70% 65% / 0.3) | hsl(241 76% 55% / 0.3) |

### Changes in `.theme-light`
| Token | Current HSL | New HSL |
|-------|-------------|---------|
| `--primary` | 263 70% 50% | 241 76% 45% |
| `--accent` | 263 70% 50% | 241 76% 45% |
| `--ring` | 263 70% 50% | 241 76% 45% |
| `--sidebar-primary` | 263 70% 50% | 241 76% 45% |
| `--sidebar-ring` | 263 70% 50% | 241 76% 45% |
| `--gradient-primary` | Update to new blue |
| `--gradient-accent` | Update to new blue |
| `--shadow-glow` | Update to new blue |

---

## Part 2: Insight Engine Section (/02) - Visual Enhancements

### Current State
- Content positioned at top with `pt-12` (via section header)
- Connector lines are solid thin lines (`h-0.5 bg-border`)
- Icons use `text-primary` color
- Cards are `w-44 xl:w-52`

### Changes

**A. Center Content in Viewport**
- Change section class from `flex items-start` to `flex items-center justify-center`
- Remove top padding from header, let flex centering handle positioning

**B. Enhanced Connector Lines**
- Change from solid to dashed: `border-dashed border-t-2 border-border` instead of `h-0.5 bg-border`
- OR use gradient: linear-gradient from transparent to primary to transparent
- Increase horizontal line thickness for visual weight

**C. Remove Icon Colors**
- Change `text-primary` to `text-muted-foreground` for all card icons
- Applies to both desktop and mobile layouts

**D. Increase Card Sizes**
- Desktop: Change from `w-44 xl:w-52` to `w-52 xl:w-64`
- Increase padding from `p-5` to `p-6`
- Increase text sizes slightly

---

## Part 3: Impact Section (/04) - Header Layout

### Current State
```
          Dual-Interface Impact
                 /04
        [Marketing Site] [Hub]
```

### New Layout
```
Dual-Interface Impact                    /04
        [Marketing Site] [Hub]

       [Content with more spacing]
```

### Changes
- Move section number to same line as title (flex row with justify-between)
- Add margin between tabs and content: `mb-8` or `mb-10` on the tabs container
- Maintain centered tabs but with more vertical breathing room

---

## Technical Summary

### Files to Modify
1. `src/index.css` - Primary color update
2. `src/pages/projects/IntelligenceOverInventoryProject.tsx` - Section layouts

### Code Changes Detail

**src/index.css:**
- Replace all `263 70% 65%` with `241 76% 55%` in `:root`
- Replace all `263 70% 50%` with `241 76% 45%` in `.theme-light`
- Update gradient and shadow values accordingly

**IntelligenceOverInventoryProject.tsx:**

Section /02:
- Line 278: Change section class to `flex items-center justify-center`
- Lines 300, 326, 335: Change horizontal/vertical connectors to dashed style
- Lines 322, 339, 368: Change icon color from `text-primary` to `text-muted-foreground`
- Lines 319, 336, 365: Increase card width and padding

Section /04:
- Lines 430-438: Restructure header to single row with title left, number right
- Line 442: Add `mb-10` for spacing between tabs and content

