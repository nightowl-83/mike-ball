import { ArrowRight, Database, Filter, BarChart3, Target, Users, ChevronLeft, ChevronRight, Lightbulb, Sparkles, TrendingUp, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef, useCallback } from "react";
import { SlideNav } from "@/components/SlideNav";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { cn } from "@/lib/utils";
import { ImpactSection04 } from "@/components/ImpactSection04";
import { useIsMobile } from "@/hooks/use-mobile";
// Removed embla carousel imports - using custom fade-up transitions
import trendiUpload from "@/assets/trendi-upload.png";
import trendiKeywords from "@/assets/trendi-keywords.png";
import trendiRegions from "@/assets/trendi-regions.png";
import trendiAdvanced from "@/assets/trendi-advanced.png";
import mhCompletenessCards from "@/assets/mh-completeness-cards.png";

const IntelligenceOverInventoryProject = () => {
  // Section data for navigation - Added "The Idea" section
  const sectionData = [
    { id: 'hero', label: 'Overview', number: '' },
    { id: 'conflict', label: 'The Challenge', number: '/01', subtitle: 'Understanding the commodity data problem' },
    { id: 'idea', label: 'The Idea', number: '' },
    { id: 'engine', label: 'The Solution', number: '/02', subtitle: 'Building the data pipeline' },
    { id: 'parsing', label: 'Parsing Tool', number: '/03', subtitle: 'Extracting buyer intent from leads' },
    { id: 'impact', label: 'Impact', number: '/04', subtitle: 'Dual-interface implementation' },
    { id: 'strategy', label: 'Strategy', number: '/05', subtitle: 'Influencing product direction' },
    { id: 'vision', label: 'Vision', number: '/06', subtitle: 'The AI-powered future' },
    { id: 'next-project', label: 'Next Project', number: '/07' }
  ];

  // Use slide navigation hook
  const { currentSectionIndex, scrollToSection, containerRef, sectionRefs } = useSlideNavigation({
    sectionCount: sectionData.length,
    threshold: 0.5,
  });

  // Dual-mode toggle state (persists across sections /04-/07)
  const [activeDataMode, setActiveDataMode] = useState<'marketing-hub' | 'marketplace'>('marketing-hub');
  
  // Track if user has visited section 04 to persist their mode preference
  const hasVisitedSection04 = useRef(false);
  const lastModeOnSection04 = useRef<'marketing-hub' | 'marketplace'>('marketing-hub');
  
  // Mobile detection
  const isMobile = useIsMobile();
  
  // Show toggle only on section 5 (Impact) - index shifted due to new section
  const showDualModeToggle = currentSectionIndex === 5;

  // Track mode when on section 04, restore when returning
  useEffect(() => {
    if (currentSectionIndex === 5) {
      hasVisitedSection04.current = true;
      lastModeOnSection04.current = activeDataMode;
    }
    // Only reset mode when navigating away from section 04 to sections OTHER than 05/06
    // This ensures returning to 04 from 05 preserves the mode
  }, [currentSectionIndex, activeDataMode]);

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

  // Strategy items data - removed numbering
  const strategyItems = [
    {
      title: "Challenging the \"More is Better\" Fallacy",
      description: "We pushed back against the assumption that simply increasing lead volume was our primary goal. We realized that if we didn't address the content of those leads, we were just creating more work for sellers without necessarily increasing their success rate. I used the lead parsing data to prove that there was a gap between what buyers were asking and what sellers were providing. I shifted the conversation from \"How do we get more clicks?\" to \"How do we help sellers answer these common questions upfront?\"",
      image: trendiKeywords
    },
    {
      title: "Data-Informed Coaching (The Marketing Hub)",
      description: "By shifting our mindset from delivering more leads to delivering quality leads, we challenged how we present data to our users. Instead of a passive listing form, the Hub became a coaching tool. We implemented the \"Popular Features\" section and the Property Completeness Score. We used the parser's findings to tell sellers exactly what they were missing. \"Water and Electricity are often asked about by buyers. Properties that include this see an average of 5x more leads.\"",
      image: mhCompletenessCards
    }
  ];

  // Parsing tool cards data - paired for overlapping effect
  const parsingCardPairs = [
    { 
      images: [
        { src: trendiUpload, title: "Upload & Configure" },
        { src: trendiKeywords, title: "Keyword Analysis" }
      ],
      captions: [
        "Upload email data and configure the parsing engine for analysis.",
        "Track keyword trends over time with interactive charts and filters."
      ]
    },
    { 
      images: [
        { src: trendiRegions, title: "Distribution Insights" },
        { src: trendiAdvanced, title: "Advanced Trend Analysis" }
      ],
      captions: [
        "Visualize keyword distribution and identify top search terms.",
        "Deep dive into temporal patterns and emerging buyer interests."
      ]
    }
  ];

  // Vision roadmap items
  const visionItems = [
    { icon: Brain, title: "Predictive Matching", description: "ML models predict buyer preferences before they search" },
    { icon: Sparkles, title: "Proactive Discovery", description: "Surface listings that match latent intent patterns" },
    { icon: TrendingUp, title: "Engagement Analytics", description: "Deep analysis of cross-platform behavior signals" }
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
  const WHEEL_THRESHOLD = 100;
  const isTransitioningRef = useRef(false);

  // "The Idea" section - now just a simple blockquote, no state needed

  // Slide indices for fade-up navigation (no carousel API needed)
  const [parsingActiveIndex, setParsingActiveIndex] = useState(0);
  const [strategyActiveIndex, setStrategyActiveIndex] = useState(0);
  
  // Wheel accumulators for /03 and /05
  const parsingSectionRef = useRef<HTMLDivElement>(null);
  const parsingWheelAccumulatorRef = useRef(0);
  const parsingIsTransitioningRef = useRef(false);
  
  const strategySectionRef = useRef<HTMLDivElement>(null);
  const strategyWheelAccumulatorRef = useRef(0);
  const strategyIsTransitioningRef = useRef(false);

  // Keyboard navigation for Left/Right within sections
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if focus is on an input
      const activeElement = document.activeElement;
      if (
        activeElement?.tagName === "INPUT" ||
        activeElement?.tagName === "TEXTAREA" ||
        activeElement?.getAttribute("contenteditable") === "true"
      ) {
        return;
      }

      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const direction = e.key === "ArrowRight" ? 1 : -1;
        
        // Section 1: Challenge - advance text
        if (currentSectionIndex === 1) {
          e.preventDefault();
          const newIndex = challengeActiveIndex + direction;
          if (newIndex >= 0 && newIndex < challengePoints.length) {
            setChallengeActiveIndex(newIndex);
          }
        }
        // Section 2: The Idea - no internal navigation needed
        // Section 4: Parsing Tool - fade navigation
        else if (currentSectionIndex === 4) {
          e.preventDefault();
          const newIdx = parsingActiveIndex + direction;
          if (newIdx >= 0 && newIdx < parsingCardPairs.length) {
            setParsingActiveIndex(newIdx);
          }
        }
        // Section 6: Strategy - fade navigation
        else if (currentSectionIndex === 6) {
          e.preventDefault();
          const newIdx = strategyActiveIndex + direction;
          if (newIdx >= 0 && newIdx < strategyItems.length) {
            setStrategyActiveIndex(newIdx);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSectionIndex, challengeActiveIndex, challengePoints.length, parsingActiveIndex, parsingCardPairs.length, strategyActiveIndex, strategyItems.length]);

  // Handle wheel events for Challenge section sub-scroll
  useEffect(() => {
    const challengeSection = challengeSectionRef.current;
    if (!challengeSection) return;

    const handleWheel = (e: WheelEvent) => {
      if (currentSectionIndex !== 1) return;
      
      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      wheelAccumulatorRef.current += delta;

      if (delta > 0) {
        if (wheelAccumulatorRef.current >= WHEEL_THRESHOLD) {
          if (challengeActiveIndex < challengePoints.length - 1) {
            e.preventDefault();
            isTransitioningRef.current = true;
            setChallengeActiveIndex(prev => prev + 1);
            wheelAccumulatorRef.current = 0;
            setTimeout(() => { isTransitioningRef.current = false; }, 400);
          }
        } else {
          e.preventDefault();
        }
      } else if (delta < 0) {
        if (wheelAccumulatorRef.current <= -WHEEL_THRESHOLD) {
          if (challengeActiveIndex > 0) {
            e.preventDefault();
            isTransitioningRef.current = true;
            setChallengeActiveIndex(prev => prev - 1);
            wheelAccumulatorRef.current = 0;
            setTimeout(() => { isTransitioningRef.current = false; }, 400);
          }
        } else {
          e.preventDefault();
        }
      }
    };

    challengeSection.addEventListener('wheel', handleWheel, { passive: false });
    return () => challengeSection.removeEventListener('wheel', handleWheel);
  }, [currentSectionIndex, challengeActiveIndex, challengePoints.length]);

  // "The Idea" section no longer needs wheel handling - it's just a blockquote

  // Reset states when leaving sections
  useEffect(() => {
    if (currentSectionIndex !== 1) {
      setChallengeActiveIndex(0);
      wheelAccumulatorRef.current = 0;
    }
    if (currentSectionIndex !== 4) {
      setParsingActiveIndex(0);
      parsingWheelAccumulatorRef.current = 0;
    }
    if (currentSectionIndex !== 6) {
      setStrategyActiveIndex(0);
      strategyWheelAccumulatorRef.current = 0;
    }
  }, [currentSectionIndex]);

  // Wheel handler for /03 Parsing Tool
  useEffect(() => {
    const parsingSection = parsingSectionRef.current;
    if (!parsingSection) return;

    const handleWheel = (e: WheelEvent) => {
      if (currentSectionIndex !== 4) return;
      
      if (parsingIsTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      parsingWheelAccumulatorRef.current += delta;

      if (delta > 0) {
        if (parsingWheelAccumulatorRef.current >= WHEEL_THRESHOLD) {
          if (parsingActiveIndex < parsingCardPairs.length - 1) {
            e.preventDefault();
            parsingIsTransitioningRef.current = true;
            setParsingActiveIndex(prev => prev + 1);
            parsingWheelAccumulatorRef.current = 0;
            setTimeout(() => { parsingIsTransitioningRef.current = false; }, 400);
          }
        } else {
          e.preventDefault();
        }
      } else if (delta < 0) {
        if (parsingWheelAccumulatorRef.current <= -WHEEL_THRESHOLD) {
          if (parsingActiveIndex > 0) {
            e.preventDefault();
            parsingIsTransitioningRef.current = true;
            setParsingActiveIndex(prev => prev - 1);
            parsingWheelAccumulatorRef.current = 0;
            setTimeout(() => { parsingIsTransitioningRef.current = false; }, 400);
          }
        } else {
          e.preventDefault();
        }
      }
    };

    parsingSection.addEventListener('wheel', handleWheel, { passive: false });
    return () => parsingSection.removeEventListener('wheel', handleWheel);
  }, [currentSectionIndex, parsingActiveIndex, parsingCardPairs.length]);

  // Wheel handler for /05 Strategy
  useEffect(() => {
    const strategySection = strategySectionRef.current;
    if (!strategySection) return;

    const handleWheel = (e: WheelEvent) => {
      if (currentSectionIndex !== 6) return;
      
      if (strategyIsTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      strategyWheelAccumulatorRef.current += delta;

      if (delta > 0) {
        if (strategyWheelAccumulatorRef.current >= WHEEL_THRESHOLD) {
          if (strategyActiveIndex < strategyItems.length - 1) {
            e.preventDefault();
            strategyIsTransitioningRef.current = true;
            setStrategyActiveIndex(prev => prev + 1);
            strategyWheelAccumulatorRef.current = 0;
            setTimeout(() => { strategyIsTransitioningRef.current = false; }, 400);
          }
        } else {
          e.preventDefault();
        }
      } else if (delta < 0) {
        if (strategyWheelAccumulatorRef.current <= -WHEEL_THRESHOLD) {
          if (strategyActiveIndex > 0) {
            e.preventDefault();
            strategyIsTransitioningRef.current = true;
            setStrategyActiveIndex(prev => prev - 1);
            strategyWheelAccumulatorRef.current = 0;
            setTimeout(() => { strategyIsTransitioningRef.current = false; }, 400);
          }
        } else {
          e.preventDefault();
        }
      }
    };

    strategySection.addEventListener('wheel', handleWheel, { passive: false });
    return () => strategySection.removeEventListener('wheel', handleWheel);
  }, [currentSectionIndex, strategyActiveIndex, strategyItems.length]);


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
          "flex-1 slide-container transition-colors duration-500",
          "ml-0 md:ml-56 lg:ml-64",
          "pt-14 md:pt-0",
          "bg-background",
          activeDataMode === 'marketplace' && "theme-light"
        )}
      >
        {/* Hero Section */}
        <section
          ref={(el) => { (sectionRefs[0] as any).current = el; }}
          className="slide-section flex items-center justify-center group/section"
        >
          <div className="w-[85%] mx-auto py-12">
            <div className="space-y-6 max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-medium animate-fade-in">
                Product Strategy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in [animation-delay:100ms]">
                Intelligence Over<br />Inventory
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
                Transforming Commodity Data into First-Party Insights
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:300ms]">
                A strategic initiative to convert generic 3rd-party listing data into proprietary buyer intent data—powering advanced search filters and a seller performance coaching system.
              </p>
              
              {/* Metadata Grid */}
              <div className="flex flex-wrap justify-center gap-8 pt-4 animate-fade-in [animation-delay:400ms]">
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
                  <p className="text-lg font-semibold">2025</p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in [animation-delay:500ms]">
                <span className="px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/20 text-base font-semibold">+45% Lead Quality</span>
                <span className="px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/20 text-base font-semibold">First-Party Data</span>
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
          className="slide-section flex items-center justify-center relative"
        >
          <div className="w-[85%] mx-auto">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  The Challenge
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
                  Understanding the commodity data problem
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /01
              </span>
            </div>

            {/* Conversation Flow - improved contrast for inactive states */}
            <div className="max-w-4xl space-y-6">
              {challengePoints.map((point, index) => (
                <p
                  key={index}
                  className={cn(
                    "text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-500",
                    challengeActiveIndex === index
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground/70 font-normal"
                  )}
                >
                  {point.text}
                </p>
              ))}
            </div>

            {/* Progress Indicator - with focus states */}
            <div className="flex gap-2 mt-10">
              {challengePoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setChallengeActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    challengeActiveIndex === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to challenge point ${index + 1} of ${challengePoints.length}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Bottom Right */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setChallengeActiveIndex(prev => Math.max(0, prev - 1))}
              disabled={challengeActiveIndex === 0}
              className="h-10 w-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setChallengeActiveIndex(prev => Math.min(challengePoints.length - 1, prev + 1))}
              disabled={challengeActiveIndex === challengePoints.length - 1}
              className="h-10 w-10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection(2)}
              className="gap-2 ml-2"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* The Idea Section - Enhanced with visual interest */}
        <section
          ref={(el) => { 
            (sectionRefs[2] as any).current = el;
          }}
          className="slide-section flex items-center justify-center relative overflow-hidden"
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          
          <div className="w-[85%] mx-auto max-w-4xl relative z-10">
            {/* Lightbulb icon above quote */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <blockquote className="text-center space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                "One of my accounts called in asking if we could add to display 'Owner Financing' when available. He said{" "}
                <span className="font-semibold text-foreground not-italic">
                  'I sent multiple inquiries to the sellers on your site and he never responded'
                </span>"
              </p>
              <footer className="text-base text-muted-foreground/80 font-medium tracking-wide uppercase">
                — Account Manager Feature Request
              </footer>
              <div className="pt-6 border-t border-border/50">
                <p className="text-2xl md:text-3xl font-semibold text-primary leading-relaxed">
                  The leads themselves could tell us what buyers actually want.
                </p>
              </div>
            </blockquote>
          </div>
          
          {/* Connecting line to next section */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0.5 h-32"
            style={{
              background: `linear-gradient(
                to bottom,
                hsl(var(--background)) 0%,
                hsl(var(--border)) 100%
              )`
            }}
          />
        </section>

        {/* The Insight Engine Section - /02 */}
        <section
          ref={(el) => { (sectionRefs[3] as any).current = el; }}
          className="slide-section flex items-center justify-center relative"
        >
          {/* Full viewport height gradient line - CENTERED on page */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 z-0"
            style={{
              background: `linear-gradient(
                to bottom,
                hsl(var(--background)) 0%,
                hsl(var(--border)) 15%,
                hsl(var(--primary)) 35%,
                hsl(var(--primary)) 65%,
                hsl(var(--border)) 85%,
                hsl(var(--background)) 100%
              )`
            }}
          />
          
          <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  The Insight Engine
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
                  A data pipeline that transforms raw buyer interactions into actionable product features.
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /02
              </span>
            </div>

            {/* Vertical Layout - cards only, no dots/connectors */}
            <div className="max-w-2xl mx-auto space-y-4 relative">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="relative">
                  {/* Card */}
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
                      <step.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <p className="text-base text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Intelligence Tool - Parsing Tool Section - /03 */}
        <section
          ref={(el) => { 
            (sectionRefs[4] as any).current = el;
            (parsingSectionRef as any).current = el;
          }}
          className="slide-section flex flex-col pt-8 relative h-screen"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col flex-1 pb-20">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  The Lead Intelligence Tool
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-3xl">
                  I wanted a simple tool that would parse leads for keywords and see what our users were asking about.
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /03
              </span>
            </div>

            {/* Content fills remaining viewport - 3:1 ratio with fade-up animation */}
            <div className="flex-1 relative overflow-hidden">
              {parsingCardPairs.map((pair, pairIndex) => {
                const isActive = parsingActiveIndex === pairIndex;
                const isPast = parsingActiveIndex > pairIndex;
                
                return (
                  <div
                    key={pairIndex}
                    className={cn(
                      "absolute inset-0 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center h-full transition-all duration-700 ease-out",
                      isActive 
                        ? "opacity-100 translate-y-0 z-10" 
                        : isPast
                          ? "opacity-0 -translate-y-12 pointer-events-none z-0"
                          : "opacity-0 translate-y-12 pointer-events-none z-0"
                    )}
                  >
                    {/* Images Column - 3 columns */}
                    <div className="relative lg:col-span-3 h-[400px] lg:h-full min-h-[400px]">
                      {/* Primary image - back */}
                      <div className="absolute left-0 top-0 w-[85%] h-[90%] rounded-xl overflow-hidden shadow-2xl border border-border">
                        <img 
                          src={pair.images[0].src} 
                          alt={pair.images[0].title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {/* Secondary image - front, overlapping */}
                      <div className="absolute right-0 bottom-0 w-[75%] h-[80%] rounded-xl overflow-hidden shadow-2xl border border-border">
                        <img 
                          src={pair.images[1].src} 
                          alt={pair.images[1].title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Text Column - 1 column */}
                    <div className="space-y-6 lg:col-span-1">
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">{pair.images[0].title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{pair.captions[0]}</p>
                      </div>
                      <div className="space-y-2 pt-3 border-t border-border">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">{pair.images[1].title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{pair.captions[1]}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Only visible when on this section */}
          {currentSectionIndex === 4 && (
            <div className="fixed bottom-8 right-8 flex items-center gap-2 z-50 md:flex hidden">
              <span className="text-sm text-muted-foreground mr-2">{parsingActiveIndex + 1}/{parsingCardPairs.length}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setParsingActiveIndex(prev => Math.max(0, prev - 1))}
                disabled={parsingActiveIndex === 0}
                className="h-10 w-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setParsingActiveIndex(prev => Math.min(parsingCardPairs.length - 1, prev + 1))}
                disabled={parsingActiveIndex === parsingCardPairs.length - 1}
                className="h-10 w-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection(5)}
                className="gap-2 ml-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </section>

        {/* Dual-Interface Impact Section - /04 */}
        <ImpactSection04 
          sectionRef={(el) => { (sectionRefs[5] as any).current = el; }} 
          activeTab={activeDataMode}
          setActiveTab={setActiveDataMode}
          scrollToSection={scrollToSection}
          isActive={currentSectionIndex === 5}
        />

        {/* Strategy & Influence - /05 - Consistent Layout */}
        <section
          ref={(el) => { 
            (sectionRefs[6] as any).current = el;
            (strategySectionRef as any).current = el;
          }}
          className="slide-section flex flex-col pt-8 bg-card/30 relative h-screen"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col flex-1 pb-20">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Strategy & Influence
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl">
                  Influencing product direction with data
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /05
              </span>
            </div>

            {/* Content fills remaining viewport - fade-up animation */}
            <div className="flex-1 relative overflow-hidden">
              {strategyItems.map((item, index) => {
                const isActive = strategyActiveIndex === index;
                const isPast = strategyActiveIndex > index;
                
                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full transition-all duration-700 ease-out",
                      isActive 
                        ? "opacity-100 translate-y-0 z-10" 
                        : isPast
                          ? "opacity-0 -translate-y-12 pointer-events-none z-0"
                          : "opacity-0 translate-y-12 pointer-events-none z-0"
                    )}
                  >
                    {/* Image Column - consistent position (no alternating) */}
                    <div className="h-[400px] lg:h-full min-h-[400px] bg-muted/30 border border-border rounded-xl overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-muted-foreground">Visual placeholder</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Text Column */}
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-4xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Only visible when on this section */}
          {currentSectionIndex === 6 && (
            <div className="fixed bottom-8 right-8 flex items-center gap-2 z-50 md:flex hidden">
              <span className="text-sm text-muted-foreground mr-2">{strategyActiveIndex + 1}/{strategyItems.length}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setStrategyActiveIndex(prev => Math.max(0, prev - 1))}
                disabled={strategyActiveIndex === 0}
                className="h-10 w-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setStrategyActiveIndex(prev => Math.min(strategyItems.length - 1, prev + 1))}
                disabled={strategyActiveIndex === strategyItems.length - 1}
                className="h-10 w-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection(7)}
                className="gap-2 ml-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </section>

        {/* Future Vision - /06 - Enhanced with roadmap */}
        <section
          ref={(el) => { (sectionRefs[7] as any).current = el; }}
          className="slide-section flex items-center bg-card/30"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  The AI Evolution
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
                  The future of proactive discovery
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /06
              </span>
            </div>

            {/* Vision Content */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 text-center">
                The next phase integrates machine learning to predict buyer preferences before they search—
                turning the marketplace from reactive search to proactive discovery.
              </p>

              {/* Roadmap Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visionItems.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Project - /07 */}
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

      {/* Floating Dual-Mode Toggle - Visible on section /04 */}
      {showDualModeToggle && (
        <div className={cn(
          "fixed bottom-0 right-0",
          "left-0 md:left-56 lg:left-64",
          "flex justify-center py-12",
          "animate-in slide-in-from-bottom-4 duration-500",
          "z-50 pointer-events-none"
        )}>
          <div className={cn(
            "backdrop-blur-md rounded-full p-1.5 flex gap-1 border pointer-events-auto",
            activeDataMode === 'marketplace' 
              ? "bg-white/80 border-gray-300" 
              : "bg-background/50 border-border"
          )}>
            <button
              onClick={() => setActiveDataMode('marketing-hub')}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeDataMode === 'marketing-hub'
                  ? "bg-foreground text-background"
                  : activeDataMode === 'marketplace'
                    ? "text-gray-600 hover:text-gray-900"
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
                  ? "bg-gray-900 text-white"
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
