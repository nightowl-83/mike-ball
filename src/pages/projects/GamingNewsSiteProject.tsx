import { ArrowLeft } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { StickyNavHeader } from "@/components/StickyNavHeader";

const GamingNewsSiteProject = () => {
  // Check if user has access
  const hasAccess = sessionStorage.getItem("project-access-gaming-news-site") === "true";
  
  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  // Section navigation data
  const sections = [
    { id: 'hero', section: 'Overview', subsection: '', number: '', ref: heroRef },
    { id: 'overview', section: 'Background', subsection: '', number: '', ref: overviewRef },
    { id: 'process', section: 'Process', subsection: '', number: '/01', ref: processRef },
    { id: 'design', section: 'Design', subsection: '', number: '/02', ref: designRef },
    { id: 'delivery', section: 'Delivery', subsection: '', number: '/03', ref: deliveryRef },
    { id: 'outcomes', section: 'Outcomes', subsection: '', number: '/04', ref: outcomesRef },
  ];

  // Use the unified navigation hook
  const { currentSectionIndex, setCurrentSectionIndex, stickyHeader } = useProjectNavigation(sections);

  // Scroll animations
  const heroAnim = useScrollAnimation();
  const overviewAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const designAnim = useScrollAnimation();
  const deliveryAnim = useScrollAnimation();
  const outcomesAnim = useScrollAnimation();

  // Persona data
  const personas = [
    {
      name: "The Optimizer",
      character: "Marcus",
      focus: "Competitive efficiency and Meta.",
      wants: "Instant access to patch notes, server status, and \"Just the Facts\" summaries. Hates scrolling through fluff.",
    },
    {
      name: "The Immersionist",
      character: "Elena",
      focus: "Narrative and Discovery.",
      wants: "Deep-dive guides and walkthroughs, but requires strict spoiler protection and a \"Second Screen\" reading experience.",
    },
    {
      name: "The Enthusiast",
      character: "Kenji",
      focus: "Industry Culture and Business.",
      wants: "A curated \"Daily Brief\" of top stories to read during a commute. Values a clean, magazine-style layout over data density.",
    },
  ];

  // Color system data
  const colorSystem = [
    {
      name: "Deep Charcoal",
      hex: "#121217",
      description: "A softer alternative to pure black to reduce OLED smear and contrast vibration.",
    },
    {
      name: "Nordic Steel",
      hex: "#8B9AAD",
      description: "Crisp, slate-blue neutrals for maximum legibility.",
    },
    {
      name: "Industrial Orange",
      hex: "#FF6B35",
      description: "A high-visibility accent used strictly for utility actions and tools.",
    },
  ];

  // Features data
  const features = [
    {
      number: "01",
      title: "The Spoiler Curtain",
      caption: "Narrative Protection",
      description: "A global \"Active Playing\" setting automatically detects and blurs images or headlines for specific titles, allowing users to browse news without fear of ruining plot twists.",
    },
    {
      number: "02",
      title: "The \"Caffeine\" Toggle",
      caption: "Native Second-Screen Support",
      description: "A \"Wake Lock\" utility integrated directly into the reading view. This keeps the phone screen active while users play on their TV.",
    },
    {
      number: "03",
      title: "Progressive Accordions",
      caption: "Fluff-Free Reading",
      description: "Long-form guides are broken into collapsible steps. This prevents \"scrolling fatigue\" and ensures players don't accidentally read solutions for puzzles they haven't reached yet.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Unified Sticky Header */}
      <StickyNavHeader 
        visible={stickyHeader.visible} 
        currentSection={stickyHeader.section} 
        currentSubsection={stickyHeader.subsection} 
        currentNumber={stickyHeader.number} 
        sections={sections} 
      />

      {/* Hero Section */}
      <section 
        ref={heroAnim.ref} 
        className={`relative min-h-[85vh] w-full overflow-hidden border-b border-border transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={heroRef} className="absolute top-0 left-0 w-full h-1" />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground text-xs md:text-sm">
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
        </div>

        <div className="container mx-auto max-w-[1440px] px-6 md:px-12 py-32 md:py-40 flex flex-col items-center justify-center min-h-[85vh]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              Signal, Not Noise.
            </h1>
            
            {/* Subhead */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A utility-first mobile companion that filters clickbait, protects narrative spoilers, and respects the gamer's time.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                Product Strategy
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                UX/UI Design
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                6 months
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                User Research
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section - Two Column */}
      <section 
        ref={overviewAnim.ref} 
        className={`py-20 md:py-32 transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={overviewRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Left - Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                The Problem
              </h2>
              <p className="text-xl md:text-2xl text-primary font-medium">
                The "Firehose" Effect
              </p>
            </div>
            
            {/* Right - Content */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mobile gaming journalism is currently a hostile user experience. Players are bombarded with aggressive ads, auto-play videos, and irrelevant content. Worse, headlines often contain spoilers that ruin the narrative experience before the game is even played. We needed to pivot from "content consumption" to "user utility."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processAnim.ref} 
        className={`py-20 md:py-32 bg-muted/30 transition-all duration-700 ${processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={processRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Strategy Intro - Two Column */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                The Strategy
              </h2>
              <p className="text-xl md:text-2xl text-primary font-medium">
                Utility Over Impressions
              </p>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We moved away from a generic news feed to a "Game Hub" architecture. By onboarding users based on their behavior, we tailored the interface to solve specific friction points rather than maximizing ad views.
              </p>
            </div>
          </div>

          {/* Personas Section */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              The Personas & Wants
            </h3>
            <p className="text-muted-foreground mb-12">
              We designed for three distinct behaviors to ensure the UI could adapt to conflicting needs:
            </p>
          </div>

          {/* Persona Cards - 3 Column Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {personas.map((persona, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
              >
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground">
                    {persona.name}
                  </h4>
                  <p className="text-primary font-medium">
                    ({persona.character})
                  </p>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide">Focus</span>
                    <p className="text-foreground">{persona.focus}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide">Wants</span>
                    <p className="text-foreground">{persona.wants}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section 
        ref={designAnim.ref} 
        className={`py-20 md:py-32 transition-all duration-700 ${designAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={designRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Philosophy Intro - Two Column */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Visual Language
              </h2>
              <p className="text-xl md:text-2xl text-primary font-medium">
                "Digital Zen"
              </p>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To reduce eye strain during late-night gaming sessions, we abandoned the industry-standard "Aggressive Gamer Red" for a premium, editorial dark mode.
              </p>
            </div>
          </div>

          {/* Color System - The System */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
              The System
            </h3>
          </div>

          {/* Color Swatches - 3 Column Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {colorSystem.map((color, index) => (
              <div 
                key={index}
                className="space-y-4"
              >
                {/* Color Swatch */}
                <div 
                  className="w-full aspect-square rounded-2xl border border-border"
                  style={{ backgroundColor: color.hex }}
                />
                {/* Color Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-foreground">
                      {color.name}
                    </h4>
                    <code className="text-sm text-muted-foreground font-mono">
                      {color.hex}
                    </code>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section 
        ref={deliveryAnim.ref} 
        className={`py-20 md:py-32 bg-muted/30 transition-all duration-700 ${deliveryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={deliveryRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 md:mb-16">
            Key Features
          </h2>

          {/* Feature Cards - Stacked */}
          <div className="space-y-8 md:space-y-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12">
                  {/* Feature Number */}
                  <div className="text-5xl md:text-6xl font-bold text-primary/20">
                    /{feature.number}
                  </div>
                  
                  {/* Feature Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-primary font-medium italic">
                        {feature.caption}
                      </p>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section 
        ref={outcomesAnim.ref} 
        className={`py-20 md:py-32 transition-all duration-700 ${outcomesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={outcomesRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              The Takeaway
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transforms the gaming news experience from a cluttered distraction into a precision tool, proving that respecting user agency is the ultimate engagement strategy. By solving for "Utility" (what the user is doing while reading), we unlocked features that traditional news sites miss entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GamingNewsSiteProject;