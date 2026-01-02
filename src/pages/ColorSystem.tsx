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

const ColorSystem = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Internal Documentation</p>
          <h1 className="text-4xl font-bold mb-2">Color System</h1>
          <p className="text-muted-foreground">Visual reference for all design tokens. This page is hidden from navigation.</p>
        </div>

        {/* Core Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Core Colors</h2>
          <div className="grid gap-3">
            <ColorSwatch name="Background" cssVar="--background" description="Main app background (dark blue-gray)" />
            <ColorSwatch name="Foreground" cssVar="--foreground" description="Primary text color (near white)" />
          </div>
        </section>

        {/* Card & Popover */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Card & Popover</h2>
          <div className="grid gap-3">
            <ColorSwatch name="Card" cssVar="--card" description="Card background" />
            <ColorSwatch name="Card Foreground" cssVar="--card-foreground" description="Card text color" />
            <ColorSwatch name="Popover" cssVar="--popover" description="Popover background" />
            <ColorSwatch name="Popover Foreground" cssVar="--popover-foreground" description="Popover text color" />
          </div>
        </section>

        {/* Brand Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Brand Colors</h2>
          <div className="grid gap-3">
            <ColorSwatch name="Primary" cssVar="--primary" description="Primary brand color (purple)" />
            <ColorSwatch name="Primary Foreground" cssVar="--primary-foreground" description="Text on primary" />
            <ColorSwatch name="Accent" cssVar="--accent" description="Accent color (same as primary)" />
            <ColorSwatch name="Accent Foreground" cssVar="--accent-foreground" description="Text on accent" />
          </div>
        </section>

        {/* Secondary & Muted */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Secondary & Muted</h2>
          <div className="grid gap-3">
            <ColorSwatch name="Secondary" cssVar="--secondary" description="Secondary background" />
            <ColorSwatch name="Secondary Foreground" cssVar="--secondary-foreground" description="Secondary text" />
            <ColorSwatch name="Muted" cssVar="--muted" description="Muted background" />
            <ColorSwatch name="Muted Foreground" cssVar="--muted-foreground" description="Muted/subtle text" />
          </div>
        </section>

        {/* UI Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">UI Elements</h2>
          <div className="grid gap-3">
            <ColorSwatch name="Border" cssVar="--border" description="Border color" />
            <ColorSwatch name="Input" cssVar="--input" description="Input background" />
            <ColorSwatch name="Ring" cssVar="--ring" description="Focus ring color" />
            <ColorSwatch name="Destructive" cssVar="--destructive" description="Error/destructive actions (red)" />
            <ColorSwatch name="Destructive Foreground" cssVar="--destructive-foreground" description="Text on destructive" />
          </div>
        </section>

        {/* Sidebar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Sidebar</h2>
          <div className="grid gap-3">
            <ColorSwatch name="Sidebar Background" cssVar="--sidebar-background" description="Sidebar background" />
            <ColorSwatch name="Sidebar Foreground" cssVar="--sidebar-foreground" description="Sidebar text" />
            <ColorSwatch name="Sidebar Primary" cssVar="--sidebar-primary" description="Sidebar primary accent" />
            <ColorSwatch name="Sidebar Accent" cssVar="--sidebar-accent" description="Sidebar accent background" />
            <ColorSwatch name="Sidebar Border" cssVar="--sidebar-border" description="Sidebar border" />
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Gradients</h2>
          <div className="grid gap-3">
            <GradientSwatch name="Primary Gradient" cssVar="--gradient-primary" description="Purple to blue gradient" />
            <GradientSwatch name="Card Gradient" cssVar="--gradient-card" description="Subtle card gradient" />
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Shadows</h2>
          <div className="grid gap-3">
            <ShadowSwatch name="Glow" cssVar="--shadow-glow" description="Purple glow effect" />
            <ShadowSwatch name="Card Shadow" cssVar="--shadow-card" description="Card elevation shadow" />
          </div>
        </section>

        {/* Tailwind Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Tailwind Usage</h2>
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
          <p>Access this page at <code className="bg-card px-2 py-1 rounded">/color-system</code></p>
        </footer>
      </div>
    </div>
  );
};

export default ColorSystem;