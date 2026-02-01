import { ArrowRight, ArrowLeft, Database, Filter, BarChart3, Target, Lightbulb, TrendingUp, Zap, Users, LineChart, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useCallback, useRef } from "react";
import { SlideNav } from "@/components/SlideNav";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { cn } from "@/lib/utils";
import { ImpactSection04 } from "@/components/ImpactSection04";
import trendiUpload from "@/assets/trendi-upload.png";
import trendiKeywords from "@/assets/trendi-keywords.png";
import trendiRegions from "@/assets/trendi-regions.png";
const IntelligenceOverInventoryProject = () => {
  // Section data for navigation
  const sectionData = [
    { id: 'hero', label: 'Overview', number: '' },
    { id: 'conflict', label: 'The Challenge', number: '/01' },
    { id: 'engine', label: 'The Solution', number: '/02' },
    { id: 'parsing', label: 'Parsing Tool', number: '/03' },
    { id: 'impact', label: 'Impact', number: '/04' },
    { id: 'strategy', label: 'Strategy', number: '/05' },
    { id: 'gallery', label: 'Gallery', number: '/06' },
    { id: 'vision', label: 'Vision', number: '/07' },
    { id: 'next-project', label: 'Next Project', number: '/08' }
  ];

  // Use slide navigation hook
  const { currentSectionIndex, scrollToSection, containerRef, sectionRefs } = useSlideNavigation({
    sectionCount: sectionData.length,
    threshold: 0.5,
  });

  // Dual-mode toggle state (persists across sections /04-/07)
  const [activeDataMode, setActiveDataMode] = useState<'marketing-hub' | 'marketplace'>('marketing-hub');
  
  // Section /02 layout toggle state
  const [section02Layout, setSection02Layout] = useState<'horizontal' | 'vertical'>('horizontal');
  
  // Show toggle only on sections 4-7 (Impact, Strategy, Gallery, Vision)
  const showDualModeToggle = currentSectionIndex >= 4 && currentSectionIndex <= 7;

  // Scroll to top on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, []);

  // Flow steps data
  const flowSteps = [
    { icon: Database, label: "Lead Data", description: "Capture buyer inquiries and engagement signals" },
    { icon: Filter, label: "Keyword Parser", description: "Extract intent keywords from lead messages" },
    { icon: Target, label: "Intent Mapping", description: "Map keywords to filter categories" },
    { icon: BarChart3, label: "UI Filters", description: "Surface as advanced search options" },
    { icon: Users, label: "Seller Training", description: "Provide data for what buyers are searching for" }
  ];

  // Strategy pillars data
  const strategyPillars = [
    {
      number: "01",
      title: "Challenging Research Assumptions",
      description: "Pushed back on initial research findings that favored simplified filters. Data showed power users needed granular controls.",
      icon: Lightbulb
    },
    {
      number: "02",
      title: "Data-Informed Execution",
      description: "Built a feedback loop between lead quality metrics and filter usage patterns. Each iteration was validated against conversion data.",
      icon: TrendingUp
    },
    {
      number: "03",
      title: "Business Value Alignment",
      description: "Positioned first-party data collection as a competitive moat. Shifted stakeholder focus from feature parity to unique value creation.",
      icon: Target
    }
  ];

  // Gallery items data
  const galleryItems = [
    { caption: "Filter interface showing intent-driven categories with visual hierarchy" },
    { caption: "Performance Coach dashboard with contextual nudges" },
    { caption: "Mobile filter experience with progressive disclosure" },
    { caption: "Analytics view showing lead quality metrics" }
  ];

  // Challenge section conversation points
  const challengePoints = [
    { text: "The rural land marketplace was drowning in commodity data. Every competitor had access to the same 3rd-party feeds, creating a race to the bottom." },
    { text: "Identical listings populated every platform. No single marketplace could claim unique inventory—buyers saw the same properties everywhere they looked." },
    { text: "We had no insight into what buyers actually wanted. Engagement data existed, but it was siloed and surface-level—clicks without context." },
    { text: "Sellers received vanity metrics that looked good but told them nothing actionable. Views and saves, but no understanding of buyer intent or fit." },
    { text: "Search filters were built from listing data, not buyer behavior. The experience forced users to think in database terms rather than natural land-buying language." }
  ];

  // Challenge section wheel-based progress state
  const [challengeActiveIndex, setChallengeActiveIndex] = useState(0);
  const wheelAccumulatorRef = useRef(0);
  const challengeSectionRef = useRef<HTMLDivElement>(null);
  const WHEEL_THRESHOLD = 100; // Amount of wheel delta needed to advance
  const isTransitioningRef = useRef(false);

  // Handle wheel events for Challenge section sub-scroll using native event
  useEffect(() => {
    const challengeSection = challengeSectionRef.current;
    if (!challengeSection) return;

    const handleWheel = (e: WheelEvent) => {
      // Only process if we're on the Challenge section (index 1)
      if (currentSectionIndex !== 1) return;
      
      // Prevent rapid-fire transitions
      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      wheelAccumulatorRef.current += delta;

      // Scrolling down
      if (delta > 0) {
        if (wheelAccumulatorRef.current >= WHEEL_THRESHOLD) {
          if (challengeActiveIndex < challengePoints.length - 1) {
            // Advance to next paragraph - prevent scroll
            e.preventDefault();
            isTransitioningRef.current = true;
            setChallengeActiveIndex(prev => prev + 1);
            wheelAccumulatorRef.current = 0;
            setTimeout(() => { isTransitioningRef.current = false; }, 400);
          }
          // At last paragraph, allow scroll to next section (don't prevent)
        } else {
          // Still accumulating - prevent scroll
          e.preventDefault();
        }
      }
      // Scrolling up
      else if (delta < 0) {
        if (wheelAccumulatorRef.current <= -WHEEL_THRESHOLD) {
          if (challengeActiveIndex > 0) {
            // Go back to previous paragraph - prevent scroll
            e.preventDefault();
            isTransitioningRef.current = true;
            setChallengeActiveIndex(prev => prev - 1);
            wheelAccumulatorRef.current = 0;
            setTimeout(() => { isTransitioningRef.current = false; }, 400);
          }
          // At first paragraph, allow scroll to previous section (don't prevent)
        } else {
          // Still accumulating - prevent scroll
          e.preventDefault();
        }
      }
    };

    challengeSection.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      challengeSection.removeEventListener('wheel', handleWheel);
    };
  }, [currentSectionIndex, challengeActiveIndex, challengePoints.length]);

  // Reset challenge state when leaving the section
  useEffect(() => {
    if (currentSectionIndex !== 1) {
      setChallengeActiveIndex(0);
      wheelAccumulatorRef.current = 0;
    }
  }, [currentSectionIndex]);

  return (
    <div className="flex bg-background">
      {/* Slide Navigation */}
      <SlideNav
        sections={sectionData}
        currentIndex={currentSectionIndex}
        onNavigate={scrollToSection}
      />

      {/* Main Content - Slide Container */}
      <main
        ref={containerRef}
        className={cn(
          "flex-1 ml-16 md:ml-56 lg:ml-64 slide-container transition-colors duration-500",
          "bg-background",
          activeDataMode === 'marketplace' && "theme-light"
        )}
      >
        {/* Hero Section */}
        <section
          ref={(el) => { (sectionRefs[0] as any).current = el; }}
          className="slide-section flex items-center justify-center"
        >
          <div className="w-[85%] mx-auto py-12">
            <div className="space-y-6 max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-medium">
                Product Strategy
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight">
                Intelligence Over<br />Inventory
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                Transforming Commodity Data into First-Party Insights
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                A strategic initiative to convert generic 3rd-party listing data into proprietary buyer intent signals, 
                powering advanced search filters and a seller performance coaching system.
              </p>
              
              {/* Metadata Grid */}
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div>
                  <span className="text-base text-muted-foreground">Role</span>
                  <p className="text-lg font-semibold">Lead Product Designer</p>
                </div>
                <div>
                  <span className="text-base text-muted-foreground">Timeline</span>
                  <p className="text-lg font-semibold">6 months</p>
                </div>
                <div>
                  <span className="text-base text-muted-foreground">Year</span>
                  <p className="text-lg font-semibold">2024</p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold">+45% Lead Quality</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold">3x Seller Engagement</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold">First-Party Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section - /01 - Stepped Conversation */}
        <section
          ref={(el) => { 
            (sectionRefs[1] as any).current = el;
            (challengeSectionRef as any).current = el;
          }}
          className="slide-section flex items-center justify-center"
        >
          <div className="w-[85%] mx-auto">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                The Challenge
              </h2>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /01
              </span>
            </div>

            {/* Conversation Flow */}
            <div className="max-w-4xl space-y-6">
              {challengePoints.map((point, index) => (
                <p
                  key={index}
                  className={cn(
                    "text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-500",
                    challengeActiveIndex === index
                      ? "text-foreground font-semibold opacity-100"
                      : "text-muted-foreground font-normal opacity-50"
                  )}
                >
                  {point.text}
                </p>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 mt-10">
              {challengePoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setChallengeActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    challengeActiveIndex === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to point ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* The Insight Engine Section - /02 */}
        <section
          ref={(el) => { (sectionRefs[2] as any).current = el; }}
          className="slide-section flex items-center justify-center bg-card/30"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                  The Insight Engine
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
                  A data pipeline that transforms buyer engagement signals into actionable product features.
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /02
              </span>
            </div>

            {/* Layout Toggle */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-sm text-muted-foreground">Layout:</span>
              <div className="flex gap-1 p-1 bg-muted/50 rounded-lg">
                <button
                  onClick={() => setSection02Layout('horizontal')}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                    section02Layout === 'horizontal'
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Horizontal
                </button>
                <button
                  onClick={() => setSection02Layout('vertical')}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                    section02Layout === 'vertical'
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Vertical
                </button>
              </div>
            </div>

            {/* Horizontal Flow with Staggered Cards - Desktop (only when horizontal selected) */}
            {section02Layout === 'horizontal' && (
              <div className="relative flex-1 hidden lg:flex items-center justify-center py-8">
                {/* Horizontal connecting line - dashed */}
                <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-border" />
                
                {/* Cards Container */}
                <div className="flex items-center justify-around w-full relative px-4">
                  {flowSteps.map((step, index) => {
                    // Cards at indices 0, 2, 4 go BELOW the line; 1, 3 go ABOVE
                    const isAbove = [1, 3].includes(index);
                    
                    return (
                      <div 
                        key={step.label} 
                        className={cn(
                          "relative flex flex-col items-center z-10",
                          isAbove ? "-translate-y-20" : "translate-y-20"
                        )}
                      >
                        {/* Connector going UP for above cards */}
                        {isAbove && (
                          <>
                            <div className="bg-card border border-border rounded-xl p-6 w-52 xl:w-64 shadow-sm">
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="text-base xl:text-lg font-semibold text-foreground leading-tight">{step.label}</h3>
                                <step.icon className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                              </div>
                              <p className="text-sm xl:text-base text-muted-foreground leading-snug">{step.description}</p>
                            </div>
                            <div className="w-0.5 h-6 border-l-2 border-dashed border-border" />
                            <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                          </>
                        )}
                        
                        {/* Connector going DOWN for below cards */}
                        {!isAbove && (
                          <>
                            <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                            <div className="w-0.5 h-6 border-l-2 border-dashed border-border" />
                            <div className="bg-card border border-border rounded-xl p-6 w-52 xl:w-64 shadow-sm">
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="text-base xl:text-lg font-semibold text-foreground leading-tight">{step.label}</h3>
                                <step.icon className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                              </div>
                              <p className="text-sm xl:text-base text-muted-foreground leading-snug">{step.description}</p>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Vertical Layout - Single Column (all screen sizes when vertical selected) */}
            {section02Layout === 'vertical' && (
              <div className="relative pl-8 max-w-2xl mx-auto">
                {/* Vertical dashed line */}
                <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-border" />
                
                <div className="space-y-6">
                  {flowSteps.map((step, index) => (
                    <div key={step.label} className="relative flex items-start gap-6">
                      {/* Node on the line */}
                      <div className="absolute left-[-20px] top-6 w-3 h-3 rounded-full bg-primary" />
                      {/* Horizontal connector */}
                      <div className="absolute left-[-8px] top-[26px] w-4 border-t-2 border-dashed border-border" />
                      
                      {/* Card - Full width in column */}
                      <div className="bg-card border border-border rounded-xl p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
                          <step.icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <p className="text-base text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile/Tablet fallback - show only when horizontal on desktop */}
            {section02Layout === 'horizontal' && (
              <div className="lg:hidden relative pl-8">
                {/* Vertical line on the left - dashed */}
                <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-border" />
                
                <div className="space-y-4">
                  {flowSteps.map((step, index) => (
                    <div key={step.label} className="relative flex items-start gap-4">
                      {/* Connection node */}
                      <div className="absolute left-[-20px] top-4 w-3 h-3 rounded-full bg-primary" />
                      {/* Horizontal connector - dashed */}
                      <div className="absolute left-[-8px] top-[18px] w-4 border-t-2 border-dashed border-border" />
                      
                      {/* Card */}
                      <div className="bg-card border border-border rounded-xl p-5 flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-base font-semibold text-foreground">{step.label}</h3>
                          <step.icon className="w-5 h-5 text-muted-foreground shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-snug">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* From Noise to Signal - Parsing Tool Section - /03 */}
        <section
          ref={(el) => { (sectionRefs[3] as any).current = el; }}
          className="slide-section flex items-center"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                  From Noise to Signal
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl">
                  The parsing tool transforms unstructured lead messages into structured intent data, enabling smarter filters and actionable seller insights.
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /03
              </span>
            </div>

            {/* 3-Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-muted/50 border border-border rounded-xl overflow-hidden">
                  <img src={trendiUpload} alt="Upload & Configure" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">Upload email data and configure the parsing engine for analysis.</p>
              </div>
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-muted/50 border border-border rounded-xl overflow-hidden">
                  <img src={trendiKeywords} alt="Keyword Analysis" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">Track keyword trends over time with interactive charts and filters.</p>
              </div>
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-muted/50 border border-border rounded-xl overflow-hidden">
                  <img src={trendiRegions} alt="Distribution Insights" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">Visualize keyword distribution and identify top search terms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual-Interface Impact Section - /04 */}
        <ImpactSection04 
          sectionRef={(el) => { (sectionRefs[4] as any).current = el; }} 
          activeTab={activeDataMode}
        />

        {/* Strategy & Influence Grid - /05 */}
        <section
          ref={(el) => { (sectionRefs[5] as any).current = el; }}
          className="slide-section flex items-center bg-card/30"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Strategy & Influence
              </h2>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /05
              </span>
            </div>

            {/* 3-Column Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {strategyPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl md:text-4xl font-bold font-mono text-primary/30">{pillar.number}</span>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-base text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Detail Gallery - /06 */}
        <section
          ref={(el) => { (sectionRefs[6] as any).current = el; }}
          className="slide-section flex items-center"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Design Details
              </h2>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /06
              </span>
            </div>

            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="aspect-video bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground text-sm md:text-base">Design Detail {index + 1}</p>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision - /07 */}
        <section
          ref={(el) => { (sectionRefs[7] as any).current = el; }}
          className="slide-section flex items-center bg-card/30"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 block mb-4">
                /07
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">The AI Evolution</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                The next phase integrates machine learning to predict buyer preferences before they search. 
                By analyzing engagement patterns across the platform, we can surface listings that match 
                latent intent—turning the marketplace from reactive search to proactive discovery.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project - /08 */}
        <section
          ref={(el) => { (sectionRefs[8] as any).current = el; }}
          className="slide-section flex items-center"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            <div className="flex flex-col items-center text-center">
              <span className="text-base text-muted-foreground mb-2">Next Project</span>
              <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Rural Land Marketplace</h3>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                A complete relaunch with modern design, intuitive search, and enhanced map functionality.
              </p>
              <Link to="/projects/rural-land-marketplace">
                <Button size="lg" className="gap-2 text-base">
                  View Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Dual-Mode Toggle - Visible on sections /04-/07 */}
      {showDualModeToggle && (
        <div className={cn(
          "fixed bottom-0 left-16 md:left-56 lg:left-64 right-0",
          "flex justify-center py-12",
          "animate-in slide-in-from-bottom-4 duration-500",
          "z-50 pointer-events-none"
        )}>
          <div className="bg-background/50 backdrop-blur-md rounded-full p-1.5 flex gap-1 border border-border pointer-events-auto">
            <button
              onClick={() => setActiveDataMode('marketing-hub')}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeDataMode === 'marketing-hub'
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Marketing Hub
            </button>
            <button
              onClick={() => setActiveDataMode('marketplace')}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeDataMode === 'marketplace'
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Marketplace
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntelligenceOverInventoryProject;
