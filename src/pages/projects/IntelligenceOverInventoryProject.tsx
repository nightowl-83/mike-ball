import { ArrowDown, ArrowRight, Database, Filter, BarChart3, Target, Users, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Brain, Quote } from "lucide-react";
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
import hubAnalyticsCore from "@/assets/Hub-Analytics-Core.png";
import analyticsScoreCard from "@/assets/Analytics-Score_Card.png";
import marketCompareOptions from "@/assets/Market-Compare-Options.png";
import hubAnalyticsCore1440 from "@/assets/Hub-Analytics-Core-1440.png";
import leadWellAnalyze from "@/assets/Lead-Well-Analyiize-1440.png";
import hubAnalyticsLeadsPort from "@/assets/Hub-Analytics-Leads-Port-1440.png";
import callouts4_3Market from "@/assets/Callouts-4_3-Market.png";

const IntelligenceOverInventoryProject = () => {
  // Section data for navigation - Added Gallery section
  const sectionData = [
    { id: 'hero', label: 'Overview', number: '' },
    { id: 'conflict', label: 'The Challenge', number: '/01', subtitle: 'Understanding the commodity data problem' },
    { id: 'idea', label: 'The Idea', number: '' },
    { id: 'engine', label: 'The Solution', number: '/02', subtitle: 'Building the data pipeline' },
    { id: 'parsing', label: 'Parsing Tool', number: '/03', subtitle: 'Extracting buyer intent from leads' },
    { id: 'impact', label: 'Impact', number: '/04', subtitle: 'Dual-interface implementation' },
    { id: 'strategy', label: 'Strategy', number: '/05', subtitle: 'Influencing product direction' },
    { id: 'gallery', label: 'Gallery', number: '', subtitle: 'Messaging and treatment variations' },
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
  // Auto-revert to dark mode when leaving section 04 while in light (marketplace) mode
  useEffect(() => {
    if (currentSectionIndex === 5) {
      hasVisitedSection04.current = true;
      lastModeOnSection04.current = activeDataMode;
    } else {
      // If we've left section 04 and were in marketplace (light) mode, revert to dark
      if (activeDataMode === 'marketplace') {
        setActiveDataMode('marketing-hub');
      }
    }
  }, [currentSectionIndex]);

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

  // Strategy items data - updated with combined slides 1&2, new image for slide 3
  const strategyItems = [
    {
      title: "Lead Volume vs Quality",
      subtitle: "Challenging the Initial Direction",
      description: "An earlier effort to drive lead volume had unintended consequences. Our initial success created a new problem. By making it easier for buyers to find and contact sellers, we significantly increased lead volume. However, sellers began reporting that the \"noise\" had also increased. They were spending more time filtering through low-intent inquiries, which created a new form of friction in their workflow.",
      secondaryDescription: "I had to challenge our team's reliance on \"Total Leads\" as the primary success metric. While the charts looked great, the user experience for our sellers was actually degrading. I pushed for a move away from simple volume toward Market Comparison and Lead Quality.",
      image: hubAnalyticsCore1440
    },
    {
      title: "Challenging the \"More is Better\" Fallacy",
      description: "A lead count of five means something very different in remote Idaho than it does in a high-turnover market. To solve this, I shifted our focus from raw volume to relative benchmarking—providing the regional context sellers needed to gauge their actual performance.\n\nBy surfacing comparative data, like '+5 leads more than similar listings,' we moved the needle from vanity metrics to actionable market intelligence, showing sellers exactly where they stood against their neighbors.",
      image: callouts4_3Market
    },
    {
      title: "Lead Strength Indicators",
      description: "We implemented a \"Lead Strength\" system within the Marketing Hub. Using the same parsing logic from the buyer side, we flagged leads that contained high-intent signals—such as specific move-in timelines or proof of funds.",
      image: leadWellAnalyze
    },
    {
      title: "Data-Informed Coaching (The Marketing Hub)",
      description: "By shifting our mindset from delivering more leads to delivering quality leads, we challenged how we present data to our users. Instead of a passive listing form, the Hub became a coaching tool.\n\nThe \"Popular Features\" section and Property Completeness Score could be used to guide users checking their listings performance as well.\n\nThe same messaging, \"Water and Electricity are often asked about by buyers. Properties that include this see an average of 5x more leads.\" could guide users to provide this additional information.\n\nThis allowed sellers to prioritize their day. We weren't just giving them more work; we were giving them a way to manage it. This shift proved that as a Lead Designer, my responsibility isn't just to the buyer's ease of use, but to the seller's operational efficiency.",
      image: hubAnalyticsLeadsPort
    }
  ];

  // Parsing tool cards data - 2 column design with proper aspect ratios
  const parsingCardPairs = [
    { 
      images: [
        { src: trendiKeywords, title: "Keyword Analysis" },
        { src: trendiUpload, title: "Upload & Configure" }
      ],
      title: "Extracting Buyer Intent",
      description: "The tool parses thousands of lead emails to identify recurring keywords and phrases. By analyzing what buyers are asking about—financing options, water access, road conditions—we can surface the data gaps that sellers need to fill.",
      highlights: [
        "Natural language processing for lead content",
        "Trend tracking over configurable time periods",
        "Exportable reports for stakeholder review"
      ]
    },
    { 
      images: [
        { src: trendiAdvanced, title: "Advanced Trend Analysis" },
        { src: trendiRegions, title: "Distribution Insights" }
      ],
      title: "Regional & Temporal Insights",
      description: "Understanding that buyer needs vary by region and season, the tool breaks down keyword frequency by geography and time. This allows us to prioritize feature requests and tailor the seller coaching experience to specific markets.",
      highlights: [
        "Geographic distribution mapping",
        "Seasonal trend identification",
        "Priority scoring for product roadmap"
      ]
    }
  ];

  // Vision roadmap items - with associated images
  const visionItems = [
    { icon: Brain, title: "Predictive Matching", description: "ML models predict buyer preferences before they search", image: hubAnalyticsCore },
    { icon: Sparkles, title: "Proactive Discovery", description: "Surface listings that match latent intent patterns", image: analyticsScoreCard },
    { icon: TrendingUp, title: "Engagement Analytics", description: "Deep analysis of cross-platform behavior signals", image: marketCompareOptions }
  ];
  
  // Vision active index for 2-column clickable layout
  const [visionActiveIndex, setVisionActiveIndex] = useState(0);

  // Challenge section conversation points - updated content
  const challengePoints = [
    { title: "The Market Reality", text: "While we maintained a strong core of unique listings, the majority of our traffic was driven by third-party feeds. Because these same base listings appeared on every competing platform, new-to-market products could easily chip away at our traffic by offering similar utility with less overhead." },
    { title: "The Insight Gap", text: "We knew people were clicking, but we didn't know why. Our engagement data was surface-level—we could see that a listing was popular, but we couldn't see the specific requirements or 'deal-breakers' that buyers were looking for within the data." },
    { title: "The Seller Disconnect", text: "Sellers were receiving vanity metrics like total views and saves. These numbers looked good on a report but offered zero guidance on how to actually close a deal. A seller with 1,000 views and zero leads had no way to know if their price was wrong or if they were missing a key piece of information." },
    { title: "Database-First Filtering", text: "Our search filters were limited by the technical constraints of the incoming feeds. We were forcing buyers to search based on how the database was structured, rather than the natural language of land buying (e.g., 'Is there power at the road?' or 'Does it have a well?')." }
  ];

  // Challenge section wheel-based progress state
  const [challengeActiveIndex, setChallengeActiveIndex] = useState(0);
  const wheelAccumulatorRef = useRef(0);
  const challengeSectionRef = useRef<HTMLDivElement>(null);
  const WHEEL_THRESHOLD = 100;
  const isTransitioningRef = useRef(false);

  // "The Idea" section - using centered layout only (toggle removed)

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
        // Section 6: Strategy - fade navigation (index shifted due to gallery)
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
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:300ms]">
                A strategic initiative to convert generic 3rd-party listing data into proprietary buyer intent data—powering advanced search filters and seller performance coaching.
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

              {/* Impact Metrics - Semi-opaque bg with neutral text */}
              <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in [animation-delay:500ms]">
                <span className="px-4 py-2 rounded-full bg-primary/15 text-foreground border border-primary/20 text-base font-semibold">+45% Lead Quality</span>
                <span className="px-4 py-2 rounded-full bg-primary/15 text-foreground border border-primary/20 text-base font-semibold">First-Party Data</span>
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

            {/* Conversation Flow - with titles */}
            <div className="max-w-4xl space-y-8">
              {challengePoints.map((point, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-500",
                    challengeActiveIndex === index
                      ? "opacity-100"
                      : "opacity-40"
                  )}
                >
                  <h3 className={cn(
                    "text-base md:text-lg font-semibold mb-2 transition-colors duration-500",
                    challengeActiveIndex === index
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}>
                    {point.title}
                  </h3>
                  <p className={cn(
                    "text-lg md:text-xl leading-relaxed transition-all duration-500",
                    challengeActiveIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground/70"
                  )}>
                    {point.text}
                  </p>
                </div>
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
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* The Idea Section - Centered blockquote layout */}
        <section
          ref={(el) => { 
            (sectionRefs[2] as any).current = el;
          }}
          className="slide-section flex items-center justify-center relative overflow-hidden"
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          
          <div className="w-[85%] mx-auto relative z-10">
            {/* Centered Layout - Dark bg with floating dots */}
            <div className="max-w-4xl mx-auto animate-fade-in relative">
              {/* Dark card with subtle dot pattern */}
              <div className="bg-card/80 backdrop-blur border border-border rounded-3xl p-12 md:p-16 relative overflow-hidden">
                {/* Subtle floating dots decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                  <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-primary" />
                  <div className="absolute top-16 right-20 w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="absolute top-24 left-1/4 w-1 h-1 rounded-full bg-primary" />
                  <div className="absolute top-12 right-1/3 w-2 h-2 rounded-full bg-primary" />
                  <div className="absolute bottom-20 left-16 w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="absolute bottom-12 right-24 w-2 h-2 rounded-full bg-primary" />
                </div>
                
                {/* Quote icon circle */}
                <div className="flex justify-center mb-10">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-lg">
                    <Quote className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <blockquote className="text-center space-y-6 relative z-10">
                  <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed font-light">
                    An Account Manager flagged that buyers were reaching out to sellers about 'Owner Financing' and getting no response. It was a clear signal that our listings were missing the very information that drove the final purchase decision.
                  </p>
                </blockquote>
              </div>
              
              {/* Insight below - neutral color for second sentence */}
              <div className="mt-8 text-center">
                <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
                  The leads themselves could tell us what buyers actually want.
                </p>
              </div>
            </div>
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

        {/* Lead Intelligence Tool - Parsing Tool Section - /03 - 2 Column Layout */}
        <section
          ref={(el) => { 
            (sectionRefs[4] as any).current = el;
            (parsingSectionRef as any).current = el;
          }}
          className="slide-section flex flex-col pt-8 relative min-h-screen"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col flex-1 pb-32">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-12">
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

            {/* Content fills remaining viewport - 2 column layout with fade-up animation */}
            <div className="flex-1 relative overflow-hidden">
              {parsingCardPairs.map((pair, pairIndex) => {
                const isActive = parsingActiveIndex === pairIndex;
                const isPast = parsingActiveIndex > pairIndex;
                
                return (
                  <div
                    key={pairIndex}
                    className={cn(
                      "absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full transition-all duration-700 ease-out",
                      isActive 
                        ? "opacity-100 translate-y-0 z-10" 
                        : isPast
                          ? "opacity-0 -translate-y-12 pointer-events-none z-0"
                          : "opacity-0 translate-y-12 pointer-events-none z-0"
                    )}
                  >
                    {/* Images Column - stacked with proper aspect ratios */}
                    <div className="relative h-[500px] lg:h-full">
                      {/* Secondary image - back */}
                      <div className="absolute left-0 top-0 w-[85%] rounded-xl overflow-hidden shadow-xl border border-border bg-card">
                        <img 
                          src={pair.images[1].src} 
                          alt={pair.images[1].title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      {/* Primary image - front, overlapping */}
                      <div className="absolute right-0 bottom-8 w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
                        <img 
                          src={pair.images[0].src} 
                          alt={pair.images[0].title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Text Column - constrained width on desktop */}
                    <div className="space-y-6 lg:max-w-[50%]">
                      {/* Main content box */}
                      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">{pair.title}</h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{pair.description}</p>
                      </div>
                      
                      {/* Highlights box */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4">
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Key Capabilities</h4>
                        <ul className="space-y-3">
                          {pair.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
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
                <ArrowDown className="w-4 h-4" />
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

        {/* Strategy & Influence - /05 - No Gallery */}
        <section
          ref={(el) => { 
            (sectionRefs[6] as any).current = el;
            (strategySectionRef as any).current = el;
          }}
          className="slide-section flex flex-col pt-8 bg-card/30 relative min-h-screen"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col flex-1 pb-32">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Strategy & Influence
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl">
                  How I used the data to shape product decisions
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /05
              </span>
            </div>

            {/* Content fills remaining viewport - with fade-up animation */}
            <div className="flex-1 relative overflow-hidden">
              {strategyItems.map((item, index) => {
                const isActive = strategyActiveIndex === index;
                const isPast = strategyActiveIndex > index;
                
                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full transition-all duration-700 ease-out pt-4",
                      isActive 
                        ? "opacity-100 translate-y-0 z-10" 
                        : isPast
                          ? "opacity-0 -translate-y-12 pointer-events-none z-0"
                          : "opacity-0 translate-y-12 pointer-events-none z-0"
                    )}
                  >
                    {/* Image Column */}
                    <div className="bg-muted/30 border border-border rounded-xl overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-auto object-contain bg-card" />
                      ) : (
                        <div className="w-full aspect-[16/10] flex items-center justify-center">
                          <p className="text-muted-foreground">Visual placeholder</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Text Column - increased padding, centered content */}
                    <div className="flex flex-col justify-center h-full lg:pl-8 lg:pr-16">
                      <div className="space-y-6 max-w-lg">
                        <h3 className="text-2xl md:text-4xl font-semibold text-foreground">{item.title}</h3>
                        {'subtitle' in item && item.subtitle && (
                          <h4 className="text-lg md:text-xl font-medium text-primary">{item.subtitle}</h4>
                        )}
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{item.description}</p>
                        {'secondaryDescription' in item && item.secondaryDescription && (
                          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">{item.secondaryDescription}</p>
                        )}
                      </div>
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
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>
          )}
        </section>

        {/* Messaging & Treatment Variations Gallery - New Section */}
        <section
          ref={(el) => { (sectionRefs[7] as any).current = el; }}
          className="slide-section flex flex-col pt-8 relative min-h-screen"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col flex-1 pb-32">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Messaging & Treatment Variations
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl">
                  Exploring different approaches to communicate value
                </p>
              </div>
            </div>

            {/* 2 Column Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* Placeholder slots for user to add images */}
              <div className="bg-card border border-border rounded-xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground">Add screenshot here</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Upload images to populate gallery</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground">Add screenshot here</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Upload images to populate gallery</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground">Add screenshot here</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Upload images to populate gallery</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground">Add screenshot here</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Upload images to populate gallery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision - /06 - 2 Column Clickable Layout */}
        <section
          ref={(el) => { (sectionRefs[8] as any).current = el; }}
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

            {/* 2 Column Layout: Clickable Items + Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Clickable Cards */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The next phase integrates machine learning to predict buyer preferences before they search—
                  turning the marketplace from reactive search to proactive discovery.
                </p>
                
                {visionItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setVisionActiveIndex(index)}
                    className={cn(
                      "w-full text-left bg-card border rounded-xl p-6 transition-all duration-300",
                      visionActiveIndex === index 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                        visionActiveIndex === index ? "bg-primary/20" : "bg-primary/10"
                      )}>
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Right Column: Image Display */}
              <div className="bg-muted/30 border border-border rounded-xl overflow-hidden sticky top-8">
                <img 
                  src={visionItems[visionActiveIndex].image} 
                  alt={visionItems[visionActiveIndex].title}
                  className="w-full h-auto object-contain transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Next Project - /07 */}
        <section
          ref={(el) => { (sectionRefs[9] as any).current = el; }}
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
