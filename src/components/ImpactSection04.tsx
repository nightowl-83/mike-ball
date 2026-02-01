import { useState } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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

// Marketplace content for the second tab
const marketplaceContent = {
  title: "Advanced Filters Driven by Buyer Intent",
  description: "The insight engine surfaces new filter categories based on what buyers actually search for.",
  features: [
    {
      title: "Intent-Based Categories",
      description: "Filter groups derived from actual buyer search patterns."
    },
    {
      title: "Dynamic Suggestions",
      description: "Keywords that auto-populate based on trending searches."
    }
  ]
};

interface ImpactSection04Props {
  sectionRef: (el: HTMLElement | null) => void;
}

export const ImpactSection04 = ({ sectionRef }: ImpactSection04Props) => {
  const [activeBlock, setActiveBlock] = useState(0);
  const [activeTab, setActiveTab] = useState<'marketing-hub' | 'marketing-site'>('marketing-hub');

  const goNext = () => setActiveBlock((activeBlock + 1) % hubBlocks.length);
  const goPrev = () => setActiveBlock((activeBlock - 1 + hubBlocks.length) % hubBlocks.length);

  return (
    <section
      ref={sectionRef}
      className="slide-section flex flex-col pt-12 relative"
    >
      <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col h-full pb-24">
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
            {activeTab === 'marketing-hub' 
              ? hubBlocks[activeBlock].title 
              : marketplaceContent.title}
          </h3>
          
          {/* Right: Count + Arrows (only for Marketing Hub) */}
          {activeTab === 'marketing-hub' && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {activeBlock + 1} of {hubBlocks.length}
              </span>
              <Button variant="outline" size="icon" onClick={goPrev} className="h-9 w-9">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={goNext} className="h-9 w-9">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Divider */}
        <Separator className="mb-8" />

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'marketing-hub' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Text Column */}
              <div className="lg:col-span-1 space-y-4">
                <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic border-l-4 border-primary pl-4">
                  "{hubBlocks[activeBlock].quote}"
                </blockquote>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {hubBlocks[activeBlock].narrative}
                </p>
              </div>
              
              {/* Image Column */}
              <div className="lg:col-span-2 h-[calc(100vh-480px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center transition-all duration-500">
                <p className="text-muted-foreground text-base">Image for "{hubBlocks[activeBlock].title}"</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Text Column */}
              <div className="lg:col-span-1 space-y-5">
                <p className="text-lg text-muted-foreground">
                  {marketplaceContent.description}
                </p>
                <div className="space-y-3">
                  {marketplaceContent.features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-foreground">{feature.title}</p>
                        <p className="text-base text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image Column */}
              <div className="lg:col-span-2 h-[calc(100vh-480px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground text-base">Marketplace Filter UI</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Tab Toggle */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center py-6 animate-in slide-in-from-bottom-4 duration-500">
        <div className="bg-background/50 backdrop-blur-md rounded-full p-1.5 flex gap-1 border border-border">
          <button
            onClick={() => {
              setActiveTab('marketing-hub');
              setActiveBlock(0);
            }}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === 'marketing-hub'
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Marketing Hub
          </button>
          <button
            onClick={() => setActiveTab('marketing-site')}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === 'marketing-site'
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Market Place
          </button>
        </div>
      </div>
    </section>
  );
};
