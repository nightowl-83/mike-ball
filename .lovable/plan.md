

# Update Rural Land Marketplace Card Background

## Overview
Replace the current radial purple gradient background on the Rural Land Marketplace homepage card with a new linear gradient based on the provided color stops.

## Gradient Specification
From the reference image:
- **0% (Start):** `#181D25` - Dark blue-gray
- **100% (End):** `#2D2D3A` - Slightly lighter purple-gray

## Implementation

### File to Modify
`src/components/ProjectCardVariants.tsx`

### Change Details
Update the `HeroAccentCard` component's background style from the current radial gradient:

```css
/* Current */
background: radial-gradient(ellipse at top center, hsl(263 70% 25% / 0.4) 0%, hsl(220 25% 6%) 70%)
```

To the new linear gradient:

```css
/* New */
background: linear-gradient(180deg, #181D25 0%, #2D2D3A 100%)
```

This creates a subtle vertical gradient from a darker blue-gray at the top to a slightly lighter purple-gray at the bottom, providing an elegant, understated background that complements the project imagery.

---

## Technical Details

### Specific Code Change
In `src/components/ProjectCardVariants.tsx`, line 25-27:

**Before:**
```tsx
style={{
  background: 'radial-gradient(ellipse at top center, hsl(263 70% 25% / 0.4) 0%, hsl(220 25% 6%) 70%)'
}}
```

**After:**
```tsx
style={{
  background: 'linear-gradient(180deg, #181D25 0%, #2D2D3A 100%)'
}}
```

### Color Values Reference
| Stop | HEX | RGB |
|------|-----|-----|
| 0% | #181D25 | rgb(24, 29, 37) |
| 100% | #2D2D3A | rgb(45, 45, 58) |

