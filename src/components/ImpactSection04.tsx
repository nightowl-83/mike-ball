import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Import Marketing Hub images
import mhUtilitiesForm from "@/assets/mh-utilities-form.png";
import mhUtilitiesSearch from "@/assets/mh-utilities-search.png";
// Import new images
import completeCards from "@/assets/Complete-Cards-1600-900.png";
import utilitiesDeskMobile from "@/assets/Utilities-Desk-Mobile-16-9.png";

// Unified content blocks - Marketing Hub first (0-2), then Marketplace (3)
const allBlocks = [
  // Marketing Hub slides (0-2)
  {
    title: "The Seller's 'Aha' Moment",
    quote: "We shifted from asking for data to proving its ROI.",
    narrative: "By surfacing buyer intent directly within the listing flow, we transformed a chore into a competitive advantage. We didn't just ask for utility info; we showed sellers that it was their fastest path to a 5x lead increase.",
    image: mhUtilitiesForm,
    mode: 'marketing-hub' as const
  },
  {
    title: "Gamifying Quality",
    quote: "The Completeness Score became our invisible coach.",
    narrative: "We used gamification to align seller behavior with search engine success. It provided a clear, actionable roadmap for sellers to improve their own visibility without needing a manual support touch-point.",
    image: completeCards,
    mode: 'marketing-hub' as const
  },
  {
    title: "Closing the Loop",
    quote: "We built a self-correcting data flywheel.",
    narrative: "This created a bridge between two platforms: buyer questions fueled seller prompts, which in turn unlocked the filters buyers needed. The system started learning and improving its own data density.",
    image: mhUtilitiesSearch,
    mode: 'marketing-hub' as const
  },
  // Marketplace slides (3)
  {
    title: "Intent-Based Navigation",
    quote: "We didn't design filters; we designed answers.",
    subtitle: "Using the lead parser, I prioritized a 'Utility First' navigation. We elevated the attributes that our users were most vocal about in their inquiries, drastically reducing the 'pogo-sticking' behavior between the search page and listing details.",
    narrative: "In a market flooded with identical 3rd-party listings, our users were struggling to find land that met basic survivability needs—water, power, and road access. This data existed in the leads, but was invisible on the page.",
    image: utilitiesDeskMobile,
    mode: 'marketplace' as const
  }
];

interface ImpactSection04Props {
  sectionRef: (el: HTMLElement | null) => void;
  activeTab: 'marketing-hub' | 'marketplace';
  setActiveTab?: (tab: 'marketing-hub' | 'marketplace') => void;
  scrollToSection?: (index: number) => void;
  isActive?: boolean;
}

export const ImpactSection04 = ({ sectionRef, activeTab, setActiveTab, scrollToSection, isActive }: ImpactSection04Props) => {
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const hasInitialized = useRef(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Clamp activeBlockIndex to valid range
  const safeIndex = Math.max(0, Math.min(activeBlockIndex, allBlocks.length - 1));
  
  // Determine the current mode based on which slide we're on
  const currentBlock = allBlocks[safeIndex];
  const isMarketingHub = safeIndex < 3;
  
  // Sync state if it was out of bounds
  useEffect(() => {
    if (activeBlockIndex !== safeIndex) {
      setActiveBlockIndex(safeIndex);
    }
  }, [activeBlockIndex, safeIndex]);

  // Reset to first slide when section becomes active (only once per visit)
  useEffect(() => {
    if (isActive && !hasInitialized.current) {
      setActiveBlockIndex(0);
      hasInitialized.current = true;
    }
    if (!isActive) {
      hasInitialized.current = false;
    }
  }, [isActive]);

  // Update parent's activeTab when crossing the boundary
  useEffect(() => {
    if (setActiveTab) {
      setActiveTab(isMarketingHub ? 'marketing-hub' : 'marketplace');
    }
  }, [isMarketingHub, setActiveTab]);

  // Reset image loaded state when slide changes
  useEffect(() => {
    setImageLoaded(false);
  }, [safeIndex]);

  const goNext = () => {
    if (activeBlockIndex < allBlocks.length - 1) {
      setActiveBlockIndex(activeBlockIndex + 1);
    }
  };

  const goPrev = () => {
    if (activeBlockIndex > 0) {
      setActiveBlockIndex(activeBlockIndex - 1);
    }
  };

  // Handle clicking on marketplace toggle - jump to slide 3
  const handleMarketplaceClick = () => {
    if (setActiveTab) {
      setActiveTab('marketplace');
    }
    setActiveBlockIndex(3); // Jump to first marketplace slide
  };

  // Handle clicking on marketing hub toggle - jump to slide 0
  const handleMarketingHubClick = () => {
    if (setActiveTab) {
      setActiveTab('marketing-hub');
    }
    setActiveBlockIndex(0); // Jump to first marketing hub slide
  };

  // Keyboard navigation - only when section is active
  useEffect(() => {
    if (!isActive) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeBlockIndex, isActive]);

  return (
    <section
      ref={sectionRef}
      className="slide-section flex flex-col pt-12 relative"
    >
      <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col h-full pb-32">
        {/* Header - Title left, Number right */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Dual-Interface Impact
          </h2>
          <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
            /04
          </span>
        </div>

        {/* Subtitle with Toggle */}
        <div className="flex items-center gap-4 mb-12">
          <p className="text-lg md:text-xl text-muted-foreground">
            How the data affected the buyer & seller experience
          </p>
          {/* Toggle as section navigation */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handleMarketingHubClick}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                isMarketingHub 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              )}
            >
              Marketing Hub
            </button>
            <button
              onClick={handleMarketplaceClick}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                !isMarketingHub 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              )}
            >
              Marketplace
            </button>
          </div>
        </div>

        {/* Carousel Control Row */}
        <div className="flex justify-between items-center mb-6">
          {/* Left: Slide Title */}
          <div className="flex items-center gap-3">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {currentBlock.title}
            </h3>
          </div>
          
          {/* Right: Count + Arrows + Continue */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {activeBlockIndex + 1} of {allBlocks.length}
            </span>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goPrev} 
              disabled={activeBlockIndex === 0}
              className={cn(
                "h-9 w-9",
                !isMarketingHub && "border-foreground/20 text-foreground hover:bg-foreground/10"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goNext} 
              disabled={activeBlockIndex === allBlocks.length - 1}
              className={cn(
                "h-9 w-9",
                !isMarketingHub && "border-foreground/20 text-foreground hover:bg-foreground/10"
              )}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            {scrollToSection && (
              <Button
                variant="outline"
                onClick={() => scrollToSection(6)}
                className={cn(
                  "gap-2 ml-2",
                  !isMarketingHub && "border-foreground/20 text-foreground hover:bg-foreground/10"
                )}
              >
                Continue
                <ArrowDown className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Divider */}
        <Separator className="mb-8" />

        {/* Content Area */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Text Column */}
            <div className="lg:col-span-1 space-y-4">
              <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic border-l-4 border-primary pl-4">
                "{currentBlock.quote}"
              </blockquote>
              {'subtitle' in currentBlock && currentBlock.subtitle && (
                <p className="text-base md:text-lg text-primary/80 leading-relaxed font-medium">
                  {currentBlock.subtitle}
                </p>
              )}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {currentBlock.narrative}
              </p>
            </div>
            
            {/* Image Column with load animation */}
            <div className={cn(
              "lg:col-span-2 h-[calc(100vh-480px)] min-h-[300px] bg-muted/30 border border-border rounded-xl overflow-hidden flex items-center justify-center",
              "transition-all duration-500"
            )}>
              {currentBlock.image ? (
                <img 
                  src={currentBlock.image} 
                  alt={currentBlock.title}
                  onLoad={() => setImageLoaded(true)}
                  className={cn(
                    "max-w-full max-h-full transition-all duration-700",
                    activeBlockIndex >= 3 ? "object-contain" : "w-full h-full object-cover object-top",
                    imageLoaded 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  )}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground text-base">Image for "{currentBlock.title}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
