import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { StickyNavHeader } from "@/components/StickyNavHeader";
import ProjectSectionNav from "@/components/ProjectSectionNav";

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
  const personasRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const colorSystemRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const nextProjectRef = useRef<HTMLDivElement>(null);

  // Section navigation data
  const sections = [
    { id: 'hero', section: 'Overview', subsection: '', number: '', ref: heroRef },
    { id: 'overview', section: 'Background', subsection: '', number: '', ref: overviewRef },
    { id: 'process', section: 'Process', subsection: '', number: '/01', ref: processRef },
    { id: 'personas', section: 'Process', subsection: 'Personas', number: '/01', ref: personasRef },
    { id: 'design', section: 'Design', subsection: '', number: '/02', ref: designRef },
    { id: 'color-system', section: 'Design', subsection: 'Color System', number: '/02', ref: colorSystemRef },
    { id: 'delivery', section: 'Delivery', subsection: '', number: '/03', ref: deliveryRef },
    { id: 'outcomes', section: 'Outcomes', subsection: '', number: '/04', ref: outcomesRef },
    { id: 'next-project', section: 'Next Project', subsection: '', number: '', ref: nextProjectRef },
  ];

  // Use the unified navigation hook
  const { currentSectionIndex, setCurrentSectionIndex, stickyHeader } = useProjectNavigation(sections);

  // Scroll animations
  const heroAnim = useScrollAnimation();
  const overviewAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const personasAnim = useScrollAnimation();
  const designAnim = useScrollAnimation();
  const colorSystemAnim = useScrollAnimation();
  const deliveryAnim = useScrollAnimation();
  const outcomesAnim = useScrollAnimation();
  const nextProjectAnim = useScrollAnimation();

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

      {/* Section Navigation */}
      <ProjectSectionNav 
        sections={sections} 
        currentSectionIndex={currentSectionIndex} 
        setCurrentSectionIndex={setCurrentSectionIndex} 
      />

      {/* Hero Section - Two Column Layout */}
      <section 
        ref={heroAnim.ref} 
        className={`relative h-screen max-h-[900px] w-full overflow-hidden border-b border-border transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Content */}
          <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 bg-card py-12 md:py-0">
            <div className="space-y-4 md:space-y-6 animate-fade-in max-w-2xl">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                Mobile App Design
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Signal,<br />
                Not Noise.
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                A utility-first mobile companion that filters clickbait, protects narrative spoilers, and respects the gamer's time.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Role</span>
                  <p className="font-semibold text-sm md:text-base">Product Designer</p>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Timeline</span>
                  <p className="font-semibold text-sm md:text-base">6 months</p>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Year</span>
                  <p className="font-semibold text-sm md:text-base">2024</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6 overflow-visible">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Product Strategy</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">UX/UI Design</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">User Research</span>
              </div>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative bg-muted/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-4xl">🎮</span>
                </div>
                <p className="text-muted-foreground text-sm">Hero mockup coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">
        {/* Background Section */}
        <section 
          ref={overviewAnim.ref} 
          className={`min-h-[60vh] flex items-center py-20 md:py-32 transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={overviewRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
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

        {/* Product Shots Section - Placeholder */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="aspect-[4/3] rounded-2xl bg-muted/30 border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Product shot placeholder</p>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-muted/30 border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Product shot placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          ref={processAnim.ref} 
          className={`py-20 md:py-32 transition-all duration-700 ${processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={processRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            {/* Strategy Intro - Two Column */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <span className="text-sm text-primary font-medium tracking-wide uppercase mb-4 block">/01 Process</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  The Strategy
                </h2>
                <p className="text-xl md:text-2xl text-primary font-medium">
                  Utility Over Impressions
                </p>
              </div>
              <div className="md:pt-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We moved away from a generic news feed to a "Game Hub" architecture. By onboarding users based on their behavior, we tailored the interface to solve specific friction points rather than maximizing ad views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personas Section */}
        <section 
          ref={personasAnim.ref} 
          className={`py-20 md:py-32 bg-muted/30 transition-all duration-700 ${personasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={personasRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                The Personas & Wants
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We designed for three distinct behaviors to ensure the UI could adapt to conflicting needs:
              </p>
            </div>

            {/* Persona Cards - 3 Column Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {personas.map((persona, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl">
                      {index === 0 ? '⚡' : index === 1 ? '📖' : '📰'}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      {persona.name}
                    </h4>
                    <p className="text-primary font-medium text-sm">
                      ({persona.character})
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Focus</span>
                      <p className="text-foreground mt-1">{persona.focus}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Wants</span>
                      <p className="text-foreground mt-1">{persona.wants}</p>
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
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <span className="text-sm text-primary font-medium tracking-wide uppercase mb-4 block">/02 Design</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Visual Language
                </h2>
                <p className="text-xl md:text-2xl text-primary font-medium">
                  "Digital Zen"
                </p>
              </div>
              <div className="md:pt-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To reduce eye strain during late-night gaming sessions, we abandoned the industry-standard "Aggressive Gamer Red" for a premium, editorial dark mode.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color System Section */}
        <section 
          ref={colorSystemAnim.ref} 
          className={`py-20 md:py-32 bg-muted/30 transition-all duration-700 ${colorSystemAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={colorSystemRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                The System
              </h3>
            </div>

            {/* Color Swatches - 3 Column Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {colorSystem.map((color, index) => (
                <div 
                  key={index}
                  className="space-y-4"
                >
                  {/* Color Swatch */}
                  <div 
                    className="w-full aspect-square rounded-2xl border border-border shadow-lg"
                    style={{ backgroundColor: color.hex }}
                  />
                  {/* Color Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-foreground">
                        {color.name}
                      </h4>
                      <code className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
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
          className={`py-20 md:py-32 transition-all duration-700 ${deliveryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={deliveryRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="mb-12 md:mb-16">
              <span className="text-sm text-primary font-medium tracking-wide uppercase mb-4 block">/03 Delivery</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Key Features
              </h2>
            </div>

            {/* Feature Cards - Stacked */}
            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 md:p-10 lg:p-12"
                >
                  <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10">
                    {/* Feature Number */}
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary/20">
                      /{feature.number}
                    </div>
                    
                    {/* Feature Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {feature.caption}
                        </p>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section - Placeholder */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="aspect-[16/9] rounded-2xl bg-card border border-border flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-muted flex items-center justify-center">
                  <span className="text-3xl">📱</span>
                </div>
                <p className="text-muted-foreground">Full showcase coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section 
          ref={outcomesAnim.ref} 
          className={`py-24 md:py-40 transition-all duration-700 ${outcomesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={outcomesRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-sm text-primary font-medium tracking-wide uppercase mb-6 block text-center">/04 Outcomes</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
                The Takeaway
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center">
                Transforms the gaming news experience from a cluttered distraction into a precision tool, proving that respecting user agency is the ultimate engagement strategy. By solving for "Utility" (what the user is doing while reading), we unlocked features that traditional news sites miss entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project Section */}
        <section 
          ref={nextProjectAnim.ref}
          className={`py-20 md:py-32 border-t border-border transition-all duration-700 ${nextProjectAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={nextProjectRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-sm text-muted-foreground uppercase tracking-wide mb-2 block">Next Project</span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  Rural Land Marketplace
                </h3>
              </div>
              <Link to="/projects/rural-land-marketplace">
                <Button size="lg" className="gap-2">
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="py-12 md:py-16 border-t border-border">
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
    </div>
  );
};

export default GamingNewsSiteProject;