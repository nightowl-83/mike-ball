// Color definitions with HSL values from index.css
const colorData: Record<string, { h: number; s: number; l: number }> = {
  '--background': { h: 220, s: 25, l: 8 },
  '--foreground': { h: 210, s: 40, l: 98 },
  '--card': { h: 220, s: 20, l: 12 },
  '--card-foreground': { h: 210, s: 40, l: 98 },
  '--popover': { h: 220, s: 20, l: 12 },
  '--popover-foreground': { h: 210, s: 40, l: 98 },
  '--primary': { h: 263, s: 70, l: 65 },
  '--primary-foreground': { h: 210, s: 40, l: 98 },
  '--secondary': { h: 220, s: 15, l: 20 },
  '--secondary-foreground': { h: 210, s: 40, l: 98 },
  '--muted': { h: 220, s: 15, l: 20 },
  '--muted-foreground': { h: 215, s: 15, l: 65 },
  '--accent': { h: 263, s: 70, l: 65 },
  '--accent-foreground': { h: 210, s: 40, l: 98 },
  '--destructive': { h: 0, s: 84.2, l: 60.2 },
  '--destructive-foreground': { h: 210, s: 40, l: 98 },
  '--border': { h: 220, s: 15, l: 20 },
  '--input': { h: 220, s: 15, l: 20 },
  '--ring': { h: 263, s: 70, l: 65 },
  '--sidebar-background': { h: 220, s: 25, l: 8 },
  '--sidebar-foreground': { h: 210, s: 40, l: 98 },
  '--sidebar-primary': { h: 263, s: 70, l: 65 },
  '--sidebar-accent': { h: 220, s: 15, l: 20 },
  '--sidebar-border': { h: 220, s: 15, l: 20 },
};

// Convert HSL to RGB
const hslToRgb = (h: number, s: number, l: number): { r: number; g: number; b: number } => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return {
    r: Math.round(255 * f(0)),
    g: Math.round(255 * f(8)),
    b: Math.round(255 * f(4)),
  };
};

// Convert RGB to HEX
const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
};

const ColorSwatch = ({ name, cssVar, description }: { name: string; cssVar: string; description: string }) => {
  const hsl = colorData[cssVar];
  const rgb = hsl ? hslToRgb(hsl.h, hsl.s, hsl.l) : { r: 0, g: 0, b: 0 };
  const hex = hsl ? rgbToHex(rgb.r, rgb.g, rgb.b) : '#000000';
  
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border">
      <div 
        className="w-16 h-16 rounded-lg border border-border shadow-md flex-shrink-0"
        style={{ backgroundColor: `hsl(var(${cssVar}))` }}
      />
      <div className="flex-1 min-w-0">
        <p className="font-mono text-sm text-primary">{cssVar}</p>
        <p className="text-foreground font-medium">{name}</p>
        <p className="text-muted-foreground text-sm mb-2">{description}</p>
        {hsl && (
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="bg-secondary px-2 py-1 rounded">HSL: {hsl.h} {hsl.s}% {hsl.l}%</span>
            <span className="bg-secondary px-2 py-1 rounded">RGB: {rgb.r}, {rgb.g}, {rgb.b}</span>
            <span className="bg-secondary px-2 py-1 rounded">HEX: {hex}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const GradientSwatch = ({ name, cssVar, description }: { name: string; cssVar: string; description: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border">
    <div 
      className="w-16 h-16 rounded-lg border border-border shadow-md flex-shrink-0"
      style={{ background: `var(${cssVar})` }}
    />
    <div className="flex-1 min-w-0">
      <p className="font-mono text-sm text-primary">{cssVar}</p>
      <p className="text-foreground font-medium">{name}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const ShadowSwatch = ({ name, cssVar, description }: { name: string; cssVar: string; description: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border">
    <div 
      className="w-16 h-16 rounded-lg bg-card border border-border flex-shrink-0"
      style={{ boxShadow: `var(${cssVar})` }}
    />
    <div className="flex-1 min-w-0">
      <p className="font-mono text-sm text-primary">{cssVar}</p>
      <p className="text-foreground font-medium">{name}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const TableRow = ({ cells, isHeader = false }: { cells: string[]; isHeader?: boolean }) => (
  <tr className={isHeader ? "border-b border-border bg-secondary/50" : "border-b border-border/50"}>
    {cells.map((cell, i) => (
      isHeader ? (
        <th key={i} className="text-left p-3 text-sm font-semibold text-foreground">{cell}</th>
      ) : (
        <td key={i} className="p-3 text-sm text-muted-foreground">{cell}</td>
      )
    ))}
  </tr>
);

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Internal Documentation</p>
          <h1 className="text-4xl font-bold mb-2">Style Guide</h1>
          <p className="text-muted-foreground">Complete reference for design tokens, components, and layout patterns.</p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="#typography" className="text-primary hover:underline">Typography</a>
            <a href="#colors" className="text-primary hover:underline">Colors</a>
            <a href="#spacing" className="text-primary hover:underline">Spacing & Containers</a>
            <a href="#home-elements" className="text-primary hover:underline">Home Page Elements</a>
            <a href="#project-sections" className="text-primary hover:underline">Project Page Sections</a>
            <a href="#animations" className="text-primary hover:underline">Animations & Behaviors</a>
            <a href="#breakpoints" className="text-primary hover:underline">Responsive Breakpoints</a>
            <a href="#utilities" className="text-primary hover:underline">CSS Utilities</a>
          </div>
        </nav>

        {/* Typography */}
        <section id="typography" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Typography</h2>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-4 text-primary">Font Family</h3>
              <p className="font-mono text-sm bg-secondary px-3 py-2 rounded inline-block">font-family: 'Outfit', sans-serif</p>
              <p className="text-muted-foreground text-sm mt-2">Tailwind class: <code className="bg-secondary px-2 py-1 rounded">font-sans</code></p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-4 text-primary">Font Sizes</h3>
              <div className="space-y-4">
                <div><span className="text-8xl font-bold">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-8xl</code></div>
                <div><span className="text-7xl font-bold">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-7xl</code></div>
                <div><span className="text-5xl font-bold">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-5xl</code></div>
                <div><span className="text-3xl font-bold">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-3xl</code></div>
                <div><span className="text-xl">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-xl</code></div>
                <div><span className="text-base">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-base</code></div>
                <div><span className="text-sm">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-sm</code></div>
                <div><span className="text-xs">Aa</span> <code className="text-sm bg-secondary px-2 py-1 rounded ml-4">text-xs</code></div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-4 text-primary">Common Heading Patterns</h3>
              <div className="space-y-3 font-mono text-sm">
                <p><span className="text-muted-foreground">Section Title:</span> text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold</p>
                <p><span className="text-muted-foreground">Subsection:</span> text-2xl md:text-3xl font-bold</p>
                <p><span className="text-muted-foreground">Card Title:</span> text-xl md:text-2xl font-semibold</p>
                <p><span className="text-muted-foreground">Body Text:</span> text-base md:text-lg text-muted-foreground</p>
                <p><span className="text-muted-foreground">Section Number:</span> text-6xl md:text-8xl lg:text-[12rem] font-bold text-muted/30</p>
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section id="colors" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Colors</h2>
          
          {/* Core Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-primary">Core Colors</h3>
            <div className="grid gap-3">
              <ColorSwatch name="Background" cssVar="--background" description="Main app background (dark blue-gray)" />
              <ColorSwatch name="Foreground" cssVar="--foreground" description="Primary text color (near white)" />
            </div>
          </div>

          {/* Brand Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-primary">Brand Colors</h3>
            <div className="grid gap-3">
              <ColorSwatch name="Primary" cssVar="--primary" description="Primary brand color (purple)" />
              <ColorSwatch name="Primary Foreground" cssVar="--primary-foreground" description="Text on primary" />
              <ColorSwatch name="Accent" cssVar="--accent" description="Accent color (same as primary)" />
            </div>
          </div>

          {/* Secondary & Muted */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-primary">Secondary & Muted</h3>
            <div className="grid gap-3">
              <ColorSwatch name="Secondary" cssVar="--secondary" description="Secondary background" />
              <ColorSwatch name="Muted" cssVar="--muted" description="Muted background" />
              <ColorSwatch name="Muted Foreground" cssVar="--muted-foreground" description="Muted/subtle text" />
            </div>
          </div>

          {/* UI Elements */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-primary">UI Elements</h3>
            <div className="grid gap-3">
              <ColorSwatch name="Card" cssVar="--card" description="Card background" />
              <ColorSwatch name="Border" cssVar="--border" description="Border color" />
              <ColorSwatch name="Ring" cssVar="--ring" description="Focus ring color" />
              <ColorSwatch name="Destructive" cssVar="--destructive" description="Error/destructive actions (red)" />
            </div>
          </div>

          {/* Gradients */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-primary">Gradients</h3>
            <div className="grid gap-3">
              <GradientSwatch name="Primary Gradient" cssVar="--gradient-primary" description="Purple to blue gradient" />
              <GradientSwatch name="Card Gradient" cssVar="--gradient-card" description="Subtle card gradient" />
            </div>
          </div>

          {/* Shadows */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-primary">Shadows</h3>
            <div className="grid gap-3">
              <ShadowSwatch name="Glow" cssVar="--shadow-glow" description="Purple glow effect" />
              <ShadowSwatch name="Card Shadow" cssVar="--shadow-card" description="Card elevation shadow" />
            </div>
          </div>
        </section>

        {/* Spacing & Containers */}
        <section id="spacing" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Spacing & Containers</h2>
          
          <div className="bg-card p-6 rounded-lg border border-border space-y-4 font-mono text-sm">
            <div>
              <p className="text-primary mb-1">Standard Section Padding</p>
              <code className="bg-secondary px-3 py-2 rounded block">py-10 md:py-24</code>
            </div>
            <div>
              <p className="text-primary mb-1">Content Container</p>
              <code className="bg-secondary px-3 py-2 rounded block">container mx-auto max-w-[1440px] px-4</code>
            </div>
            <div>
              <p className="text-primary mb-1">Section Gap (Horizontal)</p>
              <code className="bg-secondary px-3 py-2 rounded block">gap-4 md:gap-8 lg:gap-16</code>
            </div>
            <div>
              <p className="text-primary mb-1">Card Padding</p>
              <code className="bg-secondary px-3 py-2 rounded block">p-6 md:p-8 lg:p-12</code>
            </div>
          </div>
        </section>

        {/* Home Page Elements */}
        <section id="home-elements" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Home Page Elements</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <TableRow isHeader cells={["Element Name", "Component", "Description", "Usage"]} />
              </thead>
              <tbody>
                <TableRow cells={["Hero Accent Card", "HeroAccentCard", "Full-width gradient card with floating arrow", "Featured project at top"]} />
                <TableRow cells={["Hero Centered Card", "HeroCenteredCard", "Light gradient centered layout", "Secondary featured project"]} />
                <TableRow cells={["Two Column Card", "TwoColumnCard", "Dark card with side image", "Standard project display"]} />
                <TableRow cells={["Minimal Centered Card", "MinimalCenteredCard", "Clean subtle gradient", "Compact project cards"]} />
                <TableRow cells={["Locked Card", "LockedCard", "Dimmed with lock icon", "NDA/restricted projects"]} />
                <TableRow cells={["Side Project Card", "SideProjectCard", "Logo/icon focused layout", "Personal/side projects"]} />
                <TableRow cells={["Scroll Indicator", "Hero component", "Animated bounce pill", "Hero section only"]} />
                <TableRow cells={["Skills Grid", "Skills component", "Icon grid with hover states", "Competencies section"]} />
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Location:</span> All card variants are in <code className="bg-secondary px-2 py-1 rounded">src/components/ProjectCardVariants.tsx</code>
            </p>
          </div>
        </section>

        {/* Project Page Section Layouts */}
        <section id="project-sections" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Project Page Section Layouts</h2>
          
          <p className="text-muted-foreground mb-6">Use these commands when requesting new sections. Each layout follows established patterns for consistency.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <TableRow isHeader cells={["Layout Name", "Command", "Description"]} />
              </thead>
              <tbody>
                <TableRow cells={["Section Header", "\"Add section header /0X Title\"", "Title left + large number right, with optional subtitle"]} />
                <TableRow cells={["Two-Column Content", "\"Add two-column section\"", "Left: title/description, Right: numbered bullet points"]} />
                <TableRow cells={["Design Process Steps", "\"Add process steps\"", "Vertical timeline with /01, /02 numbered steps"]} />
                <TableRow cells={["Bento Gallery", "\"Add bento gallery with X images\"", "Asymmetric image grid, horizontal scroll on mobile"]} />
                <TableRow cells={["Full-Width Image", "\"Add full-width image section\"", "Viewport-height image with text overlay at top"]} />
                <TableRow cells={["User Persona Card", "\"Add persona card\"", "2x2 grid with photo, goals, frustrations, personality traits"]} />
                <TableRow cells={["Statistics Visualization", "\"Add animated stats\"", "Arc gauges with percentages and labels"]} />
                <TableRow cells={["Callout Section", "\"Add callout with image\"", "Text description + expandable image dialog (image right)"]} />
                <TableRow cells={["Callout Reversed", "\"Add reversed callout\"", "Same as callout but image on left side"]} />
                <TableRow cells={["GIF Showcase", "\"Add GIF showcase\"", "Side-by-side GIF demonstrations with captions"]} />
                <TableRow cells={["Analytics Carousel", "\"Add analytics carousel\"", "Image carousel with thumbnail navigation"]} />
                <TableRow cells={["Outcomes Grid", "\"Add outcomes section\"", "3-column metrics cards with icon + stat + description"]} />
                <TableRow cells={["Showcase Gallery", "\"Add showcase section\"", "Final images display in responsive grid"]} />
                <TableRow cells={["Next Project CTA", "\"Add next project link\"", "Animated card linking to next case study"]} />
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-3 text-primary">Section Container Pattern</h3>
              <pre className="bg-secondary p-4 rounded text-sm overflow-x-auto">
{`<section className="py-10 md:py-24 bg-background">
  <div className="container mx-auto max-w-[1440px] px-4">
    {/* Content */}
  </div>
</section>`}
              </pre>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-3 text-primary">Section Header Pattern</h3>
              <pre className="bg-secondary p-4 rounded text-sm overflow-x-auto">
{`<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-16">
  <div>
    <p className="text-sm text-muted-foreground mb-2">SUBSECTION LABEL</p>
    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">
      Section Title<span className="text-primary">.</span>
    </h2>
  </div>
  <span className="text-6xl md:text-8xl font-bold text-muted/30">/01</span>
</div>`}
              </pre>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-3 text-primary">Callout Section Pattern</h3>
              <pre className="bg-secondary p-4 rounded text-sm overflow-x-auto">
{`<div className="callout-section py-10 md:py-24">
  <div className="container mx-auto max-w-[1440px] px-4">
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground uppercase">Label</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">Title</h3>
        <p className="text-muted-foreground">Description text...</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <img src={image} className="rounded-lg cursor-pointer hover:opacity-90" />
        </DialogTrigger>
        <DialogContent className="max-w-[90vw]">
          <img src={image} className="w-full" />
        </DialogContent>
      </Dialog>
    </div>
  </div>
</div>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Animations & Behaviors */}
        <section id="animations" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Animations & Behaviors</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <TableRow isHeader cells={["Behavior", "Implementation", "Usage"]} />
              </thead>
              <tbody>
                <TableRow cells={["Scroll Animation", "useScrollAnimation({ threshold: 0.2 })", "Fade-in elements on scroll into view"]} />
                <TableRow cells={["Section Navigation", "ProjectSectionNav component", "Sticky prev/next arrows for project pages"]} />
                <TableRow cells={["Gallery Modal", "Dialog + DialogTrigger", "Click-to-expand images in callout sections"]} />
                <TableRow cells={["Horizontal Drag Scroll", "useHorizontalDragScroll hook", "Touch-friendly carousels and galleries"]} />
                <TableRow cells={["Back to Top", "Built into ProjectSectionNav", "Appears after scrolling, returns to hero"]} />
                <TableRow cells={["Image Hover Zoom", "hover:scale-105 transition-transform", "Subtle zoom on image hover"]} />
              </tbody>
            </table>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-3 text-primary">Scroll Animation Hook Usage</h3>
            <pre className="bg-secondary p-4 rounded text-sm overflow-x-auto">
{`const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

<div 
  ref={ref} 
  className={\`transition-all duration-700 \${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }\`}
>
  Content that fades in on scroll
</div>`}
            </pre>
          </div>
        </section>

        {/* Responsive Breakpoints */}
        <section id="breakpoints" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Responsive Breakpoints</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <TableRow isHeader cells={["Breakpoint", "Tailwind Prefix", "Min Width", "Typical Use"]} />
              </thead>
              <tbody>
                <TableRow cells={["Mobile", "(default)", "0px", "Base styles, single column"]} />
                <TableRow cells={["Tablet", "md:", "768px", "Two columns, larger text"]} />
                <TableRow cells={["Desktop", "lg:", "1024px", "Full layouts, max features"]} />
                <TableRow cells={["Large Desktop", "xl:", "1280px", "Larger spacing, typography"]} />
                <TableRow cells={["Extra Large", "2xl:", "1400px", "Container max-width reached"]} />
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-3 text-primary">Common Responsive Patterns</h3>
            <div className="space-y-3 font-mono text-sm">
              <p><span className="text-muted-foreground">Grid:</span> grid-cols-1 md:grid-cols-2 lg:grid-cols-3</p>
              <p><span className="text-muted-foreground">Flex Direction:</span> flex-col md:flex-row</p>
              <p><span className="text-muted-foreground">Text Size:</span> text-3xl md:text-5xl lg:text-7xl</p>
              <p><span className="text-muted-foreground">Spacing:</span> gap-4 md:gap-8 lg:gap-16</p>
              <p><span className="text-muted-foreground">Visibility:</span> hidden md:block or md:hidden</p>
            </div>
          </div>
        </section>

        {/* CSS Utility Classes */}
        <section id="utilities" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">CSS Utility Classes</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <TableRow isHeader cells={["Class", "Purpose", "Defined In"]} />
              </thead>
              <tbody>
                <TableRow cells={[".viewport-image-section", "Full-width image spanning viewport edges", "index.css"]} />
                <TableRow cells={[".callout-section", "Callout styling with glowing dot indicator", "index.css"]} />
                <TableRow cells={[".hide-scrollbar", "Hidden scrollbar for horizontal scroll areas", "index.css"]} />
                <TableRow cells={[".animate-fade-in", "Entry animation (fade + slide up)", "tailwind.config.ts"]} />
                <TableRow cells={[".animate-scale-in", "Scale entry animation", "tailwind.config.ts"]} />
                <TableRow cells={[".story-link", "Underline animation on hover for links", "index.css"]} />
              </tbody>
            </table>
          </div>
        </section>

        {/* Tailwind Usage Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Tailwind Color Classes</h2>
          <div className="bg-card p-6 rounded-lg border border-border font-mono text-sm space-y-2">
            <p className="text-muted-foreground">// Background & Text</p>
            <p>bg-background, text-foreground</p>
            <p>bg-card, text-card-foreground</p>
            <p>bg-primary, text-primary-foreground</p>
            <p>bg-secondary, text-secondary-foreground</p>
            <p>bg-muted, text-muted-foreground</p>
            <p>bg-accent, text-accent-foreground</p>
            <p>bg-destructive, text-destructive-foreground</p>
            <p className="text-muted-foreground mt-4">// Borders & Rings</p>
            <p>border-border, ring-ring</p>
            <p className="text-muted-foreground mt-4">// Shadows</p>
            <p>shadow-glow, shadow-card</p>
          </div>
        </section>

        <footer className="text-center text-muted-foreground text-sm py-8 border-t border-border">
          <p>Access this page at <code className="bg-card px-2 py-1 rounded">/style-guide</code></p>
        </footer>
      </div>
    </div>
  );
};

export default StyleGuide;