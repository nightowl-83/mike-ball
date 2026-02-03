import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Import Marketing Hub images
import mhUtilitiesForm from "@/assets/mh-utilities-form.png";
import mhCompletenessCards from "@/assets/mh-completeness-cards.png";
import mhUtilitiesSearch from "@/assets/mh-utilities-search.png";
// Import Marketplace images
import ldpMobileUtilities from "@/assets/LDP-Mobile-Utilities.png";
import utilitiesSearch from "@/assets/Utilities-Search-2.png";

// Unified content blocks - Marketing Hub first, then Marketplace
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
    image: mhCompletenessCards,
    mode: 'marketing-hub' as const
  },
  {
    title: "Closing the Loop",
    quote: "We built a self-correcting data flywheel.",
    narrative: "This created a bridge between two platforms: buyer questions fueled seller prompts, which in turn unlocked the filters buyers needed. The system started learning and improving its own data density.",
    image: mhUtilitiesSearch,
    mode: 'marketing-hub' as const
  },
  // Marketplace slides (3-4)
  {
    title: "The 'Invisibility' Problem",
    quote: "Turning 'Dark Data' into Searchable Value.",
    narrative: "In a market flooded with identical 3rd-party listings, our users were struggling to find land that met basic survivability needs—water, power, and road access. This data existed in the leads, but was invisible on the page.",
    image: ldpMobileUtilities,
    mode: 'marketplace' as const
  },
  {
    title: "Intent-Based Navigation",
    quote: "We didn't design filters; we designed answers.",
    narrative: "Using the lead parser, I prioritized a 'Utility First' navigation. We elevated the attributes that our users were most vocal about in their inquiries, drastically reducing the 'pogo-sticking' behavior between the search page and listing details.",
    image: utilitiesSearch,
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

  // Determine the current mode based on which slide we're on
  const currentBlock = allBlocks[activeBlockIndex];
  const isMarketingHub = activeBlockIndex < 3;

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeBlockIndex]);

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

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          How the data affected the buyer & seller experience
        </p>

        {/* Carousel Control Row */}
        <div className="flex justify-between items-center mb-6">
          {/* Left: Slide Title with mode indicator */}
          <div className="flex items-center gap-3">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {currentBlock.title}
            </h3>
            <span className={cn(
              "text-xs font-medium px-2.5 py-1 rounded-full border",
              isMarketingHub 
                ? 'bg-primary/15 text-primary border-primary/30' 
                : 'bg-foreground/10 text-foreground border-foreground/20'
            )}>
              {isMarketingHub ? 'Marketing Hub' : 'Marketplace'}
            </span>
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
                <ArrowRight className="w-4 h-4" />
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
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {currentBlock.narrative}
              </p>
            </div>
            
            {/* Image Column */}
            <div className={cn(
              "lg:col-span-2 h-[calc(100vh-480px)] min-h-[300px] bg-muted/30 border border-border rounded-xl overflow-hidden flex items-center justify-center",
              "transition-all duration-500"
            )}>
              {currentBlock.image ? (
                <img 
                  src={currentBlock.image} 
                  alt={currentBlock.title}
                  className={cn(
                    "max-w-full max-h-full transition-all duration-500",
                    activeBlockIndex >= 3 ? "object-contain" : "w-full h-full object-cover object-top"
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

        {/* Progress dots - SINGLE instance */}
        <div className="flex justify-center gap-2 mt-8">
          {allBlocks.map((block, index) => (
            <button
              key={index}
              onClick={() => setActiveBlockIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeBlockIndex === index
                  ? "bg-primary w-6"
                  : block.mode === 'marketing-hub'
                    ? "bg-primary/30 hover:bg-primary/50"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
