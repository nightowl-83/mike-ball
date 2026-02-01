import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Narrative content blocks for Marketing Hub
const hubBlocks = [
  {
    title: "The Seller's 'Aha' Moment",
    quote: "We shifted from asking for data to proving its ROI.",
    narrative: "By surfacing buyer intent directly within the listing flow, we transformed a chore into a competitive advantage. We didn't just ask for utility info; we showed sellers that it was their fastest path to a 5x lead increase."
  },
  {
    title: "Gamifying Quality",
    quote: "The Completeness Score became our invisible coach.",
    narrative: "We used gamification to align seller behavior with search engine success. It provided a clear, actionable roadmap for sellers to improve their own visibility without needing a manual support touch-point."
  },
  {
    title: "Closing the Loop",
    quote: "We built a self-correcting data flywheel.",
    narrative: "This created a bridge between two platforms: buyer questions fueled seller prompts, which in turn unlocked the filters buyers needed. The system started learning and improving its own data density."
  }
];

// Marketplace content blocks
const marketplaceBlocks = [
  {
    title: "The 'Invisibility' Problem",
    quote: "Turning 'Dark Data' into Searchable Value.",
    narrative: "In a market flooded with identical 3rd-party listings, our users were struggling to find land that met basic survivability needs—water, power, and road access. This data existed in the leads, but was invisible on the page."
  },
  {
    title: "Intent-Based Navigation",
    quote: "We didn't design filters; we designed answers.",
    narrative: "Using the lead parser, I prioritized a 'Utility First' navigation. We elevated the attributes that our users were most vocal about in their inquiries, drastically reducing the 'pogo-sticking' behavior between the search page and listing details."
  }
];

interface ImpactSection04Props {
  sectionRef: (el: HTMLElement | null) => void;
  activeTab: 'marketing-hub' | 'marketplace';
}

export const ImpactSection04 = ({ sectionRef, activeTab }: ImpactSection04Props) => {
  const [activeBlock, setActiveBlock] = useState(0);

  // Get the current blocks based on active tab
  const currentBlocks = activeTab === 'marketing-hub' ? hubBlocks : marketplaceBlocks;

  // Reset active block when tab changes
  useEffect(() => {
    setActiveBlock(0);
  }, [activeTab]);

  const goNext = () => setActiveBlock((activeBlock + 1) % currentBlocks.length);
  const goPrev = () => setActiveBlock((activeBlock - 1 + currentBlocks.length) % currentBlocks.length);

  return (
    <section
      ref={sectionRef}
      className="slide-section flex flex-col pt-12 relative"
    >
      <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col h-full pb-32">
        {/* Header - Title left, Number right */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
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
          {/* Left: Slide Title */}
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            {currentBlocks[activeBlock].title}
          </h3>
          
          {/* Right: Count + Arrows */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {activeBlock + 1} of {currentBlocks.length}
            </span>
            <Button variant="outline" size="icon" onClick={goPrev} className="h-9 w-9">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={goNext} className="h-9 w-9">
              <ChevronRight className="w-4 h-4" />
            </Button>
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
                "{currentBlocks[activeBlock].quote}"
              </blockquote>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {currentBlocks[activeBlock].narrative}
              </p>
            </div>
            
            {/* Image Column */}
            <div className="lg:col-span-2 h-[calc(100vh-480px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center transition-all duration-500">
              <p className="text-muted-foreground text-base">Image for "{currentBlocks[activeBlock].title}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
