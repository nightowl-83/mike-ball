# Color System

This document lists all colors used in the project's design system. All colors are defined in HSL format.

---

## Core Colors

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--background` | `220 25% 8%` | Main app background (dark blue-gray) |
| `--foreground` | `210 40% 98%` | Primary text color (near white) |

---

## Card & Popover

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--card` | `220 20% 12%` | Card background |
| `--card-foreground` | `210 40% 98%` | Card text color |
| `--popover` | `220 20% 12%` | Popover background |
| `--popover-foreground` | `210 40% 98%` | Popover text color |

---

## Brand Colors

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--primary` | `263 70% 65%` | Primary brand color (purple) |
| `--primary-foreground` | `210 40% 98%` | Text on primary |
| `--accent` | `263 70% 65%` | Accent color (same as primary) |
| `--accent-foreground` | `210 40% 98%` | Text on accent |

---

## Secondary & Muted

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--secondary` | `220 15% 20%` | Secondary background |
| `--secondary-foreground` | `210 40% 98%` | Secondary text |
| `--muted` | `220 15% 20%` | Muted background |
| `--muted-foreground` | `215 15% 65%` | Muted/subtle text |

---

## UI Elements

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--border` | `220 15% 20%` | Border color |
| `--input` | `220 15% 20%` | Input background |
| `--ring` | `263 70% 65%` | Focus ring color |
| `--destructive` | `0 84.2% 60.2%` | Error/destructive actions (red) |
| `--destructive-foreground` | `210 40% 98%` | Text on destructive |

---

## Sidebar

| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--sidebar-background` | `220 25% 8%` | Sidebar background |
| `--sidebar-foreground` | `210 40% 98%` | Sidebar text |
| `--sidebar-primary` | `263 70% 65%` | Sidebar primary accent |
| `--sidebar-primary-foreground` | `210 40% 98%` | Text on sidebar primary |
| `--sidebar-accent` | `220 15% 20%` | Sidebar accent background |
| `--sidebar-accent-foreground` | `210 40% 98%` | Text on sidebar accent |
| `--sidebar-border` | `220 15% 20%` | Sidebar border |
| `--sidebar-ring` | `263 70% 65%` | Sidebar focus ring |

---

## Gradients

| Token | Value | Description |
|-------|-------|-------------|
| `--gradient-primary` | `linear-gradient(135deg, hsl(263 70% 65%), hsl(220 85% 65%))` | Purple to blue gradient |
| `--gradient-card` | `linear-gradient(180deg, hsl(220 20% 12%), hsl(220 20% 10%))` | Subtle card gradient |

---

## Shadows

| Token | Value | Description |
|-------|-------|-------------|
| `--shadow-glow` | `0 0 40px hsl(263 70% 65% / 0.3)` | Purple glow effect |
| `--shadow-card` | `0 10px 30px -10px hsl(220 25% 0% / 0.5)` | Card elevation shadow |

---

## Other

| Token | Value | Description |
|-------|-------|-------------|
| `--radius` | `0.75rem` | Default border radius (12px) |
| `--transition-smooth` | `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` | Smooth transition timing |

---

## Usage in Tailwind

All colors are available as Tailwind classes:

```
bg-background, text-foreground
bg-card, text-card-foreground
bg-primary, text-primary-foreground
bg-secondary, text-secondary-foreground
bg-muted, text-muted-foreground
bg-accent, text-accent-foreground
bg-destructive, text-destructive-foreground
border-border, ring-ring
```
