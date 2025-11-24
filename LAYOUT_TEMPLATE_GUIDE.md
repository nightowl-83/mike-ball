# Project Page Layout Template Guide

This guide provides plain English commands you can use to create consistent, beautiful project page sections.

## Common Section Layouts

### 1. **Standard Two-Column Section**
**Command:** "Create a standard two-column section called [NAME]"

**Structure:**
- Left column: Large title (H2) + descriptive paragraph
- Right column: Section number + bulleted content with bold labels
- Background: Alternates between `bg-background` and `bg-card/30`
- Spacing: `py-10 md:py-24`

**Example sections:** Define, Discovery, Design, Delivery

```tsx
<section className="relative py-10 md:py-24 bg-card/30">
  <div className="container mx-auto max-w-[1440px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 mb-4 md:mb-16">
      <div className="order-1 lg:order-1">
        <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">[TITLE]</h2>
      </div>
      <div className="order-2 lg:order-2 text-center lg:text-right hidden md:block">
        <span className="text-3xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20">/[NUMBER]</span>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
      {/* Left Column */}
      <div className="space-y-4 md:space-y-12">
        <p className="text-base md:text-xl text-muted-foreground">
          [DESCRIPTION]
        </p>
      </div>

      {/* Right Column */}
      <div className="space-y-4 md:space-y-12">
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
          <p>
            <strong className="text-primary">[LABEL]:</strong> [Content]
          </p>
          
          <div className="p-4 md:p-6 rounded-xl bg-card/50 border-2 border-primary/20">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">[BOX TITLE]</h3>
            <p>[Content]</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 2. **Hero Section (Two-Column Full-Height)**
**Command:** "Create a hero section with image on the right"

**Structure:**
- Full viewport height with flex layout
- Left: Content (title, description, metadata)
- Right: Background image
- Responsive: Stacks on mobile

```tsx
<section className="relative min-h-screen flex flex-col md:flex-row">
  {/* Left Content */}
  <div className="w-full md:w-1/2 flex items-center p-6 md:p-12 bg-background">
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
        [PROJECT TITLE]
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground">
        [DESCRIPTION]
      </p>
      {/* Metadata */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className="text-sm text-muted-foreground mb-1">Role</div>
          <div className="font-semibold">[ROLE]</div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/2 h-[40vh] md:h-screen">
    <img src="[IMAGE]" alt="[ALT]" className="w-full h-full object-cover" />
  </div>
</section>
```

---

### 3. **Full-Width Image with Overlay Text**
**Command:** "Create a full-width image section with overlay title"

**Structure:**
- Full viewport height
- Image as background
- Content overlay with gradient or solid background
- Text positioned at top

```tsx
<div className="viewport-image-section">
  <div className="absolute top-0 left-0 right-0 z-20 px-6 pt-24">
    <div className="container mx-auto max-w-[1440px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-4xl font-bold text-foreground">[TITLE]</h3>
        </div>
      </div>
    </div>
  </div>
  <img src="[IMAGE]" alt="[ALT]" className="w-full h-full object-cover object-left-top" />
</div>
```

---

### 4. **Bento Grid Gallery**
**Command:** "Create a bento grid gallery with [N] images"

**Structure:**
- Responsive grid with varied image sizes
- Mobile: Horizontal scroll
- Desktop: Asymmetric bento layout
- Clickable images that open in modal

```tsx
<div className="mt-8 md:mt-32">
  {/* Mobile: Horizontal Scroll */}
  <div className="flex md:hidden overflow-x-scroll snap-x snap-mandatory gap-3 pb-4 -mx-2 px-2 [&::-webkit-scrollbar]:hidden">
    {images.map((img, idx) => (
      <button key={idx} onClick={() => openGallery(idx)} className="min-w-[calc(100vw-48px)] h-[400px] snap-center rounded-xl overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </button>
    ))}
  </div>
  
  {/* Desktop: Bento Grid */}
  <div className="hidden md:grid grid-cols-6 gap-4 auto-rows-[200px]">
    {/* Large image */}
    <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden">
      <img src="[IMAGE]" alt="" className="w-full h-full object-cover" />
    </div>
    {/* Medium images */}
    <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
      <img src="[IMAGE]" alt="" className="w-full h-full object-cover" />
    </div>
  </div>
</div>
```

---

### 5. **Results/Metrics Grid**
**Command:** "Create a metrics section with [N] stats cards"

**Structure:**
- 3-column grid on desktop, stacks on mobile
- Each card shows: Number, Title, Description, Big stat
- Clean card design with shadows

```tsx
<section className="py-10 md:py-24">
  <div className="container mx-auto max-w-[1440px]">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Outcomes</h2>
    <p className="text-muted-foreground mb-8 md:mb-16">[DESCRIPTION]</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div className="bg-card rounded-2xl p-8 shadow-sm space-y-4">
        <div className="text-xl font-bold text-muted-foreground">01</div>
        <h3 className="text-2xl font-bold">[TITLE]</h3>
        <p className="text-muted-foreground">[DESCRIPTION]</p>
        <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          [STAT]
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 6. **Design Process Steps**
**Command:** "Create a design process section with [N] steps"

**Structure:**
- Vertical timeline layout
- Each step has number + title + bullet points
- Border separators between steps

```tsx
<section className="py-10 md:py-24 bg-card/30">
  <div className="container mx-auto max-w-[1440px]">
    <h2 className="text-4xl md:text-6xl font-bold mb-12">Design Process</h2>
    <div className="space-y-0">
      {/* Step 1 */}
      <div className="flex gap-4 md:gap-10 py-6 md:py-8 border-b border-border">
        <div className="text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/01</div>
        <div className="space-y-3">
          <h3 className="text-3xl lg:text-4xl font-bold">[TITLE]</h3>
          <div className="space-y-1 text-lg text-muted-foreground">
            <p>[ITEM]</p>
            <p>[ITEM]</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Quick Reference Commands

| Command | Layout Type | Use Case |
|---------|------------|----------|
| "Standard two-column section" | Split title/content | Main content sections |
| "Hero with side image" | 50/50 split | Project intro |
| "Full-width image overlay" | Full viewport | Visual breaks |
| "Bento grid gallery" | Asymmetric grid | Photo showcases |
| "Metrics cards" | 3-column grid | Results/stats |
| "Process steps" | Vertical timeline | Workflows |

---

## Design System Tokens

Always use semantic tokens from the design system:

- **Background:** `bg-background`, `bg-card`, `bg-card/30`
- **Text:** `text-foreground`, `text-muted-foreground`, `text-primary`
- **Borders:** `border-border`, `border-primary/20`
- **Spacing:** `py-10 md:py-24`, `gap-4 md:gap-16`
- **Container:** `container mx-auto max-w-[1440px]`

---

## Animation Pattern

Add scroll animations using the `useScrollAnimation` hook:

```tsx
const contentAnim = useScrollAnimation();

<section ref={contentAnim.ref} className={`transition-all duration-700 ${contentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
```

---

## Plain English Examples

**Example 1:** "Create a standard two-column section called 'Research' with section number /02 and a light background"

**Example 2:** "Add a full-width image section with 'User Testing' as the overlay title"

**Example 3:** "Create a metrics section with 4 cards showing engagement stats"

**Example 4:** "Add a bento grid gallery with 7 images after the Define section"
