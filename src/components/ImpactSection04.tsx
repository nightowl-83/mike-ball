import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Zap, LineChart, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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

type PatternType = 'pills' | 'carousel' | 'spotlight' | 'stacked';

interface ImpactSection04Props {
  sectionRef: (el: HTMLElement | null) => void;
}

// Pattern 1: Horizontal Pills
const PillsPattern = ({ activeBlock, setActiveBlock }: { activeBlock: number; setActiveBlock: (i: number) => void }) => (
  <div className="space-y-8">
    {/* Pill Navigation */}
    <div className="flex flex-wrap gap-2">
      {hubBlocks.map((block, index) => (
        <button
          key={block.title}
          onClick={() => setActiveBlock(index)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeBlock === index
              ? "bg-primary text-primary-foreground"
              : "bg-muted/50 text-muted-foreground hover:bg-muted"
          )}
        >
          {block.title}
        </button>
      ))}
    </div>
    
    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-1 space-y-4">
        <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic border-l-4 border-primary pl-4">
          "{hubBlocks[activeBlock].quote}"
        </blockquote>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {hubBlocks[activeBlock].narrative}
        </p>
      </div>
      <div className="lg:col-span-2 h-[calc(100vh-420px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center transition-all duration-500">
        <p className="text-muted-foreground text-base">Image for "{hubBlocks[activeBlock].title}"</p>
      </div>
    </div>
  </div>
);

// Pattern 2: Card Carousel with Arrows
const CarouselPattern = ({ activeBlock, setActiveBlock }: { activeBlock: number; setActiveBlock: (i: number) => void }) => {
  const goNext = () => setActiveBlock((activeBlock + 1) % hubBlocks.length);
  const goPrev = () => setActiveBlock((activeBlock - 1 + hubBlocks.length) % hubBlocks.length);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Text Column with Arrows */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={goPrev} className="shrink-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {activeBlock + 1} / {hubBlocks.length}
            </span>
            <Button variant="outline" size="icon" onClick={goNext} className="shrink-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeBlock * 100}%)` }}
            >
              <div className="flex">
                {hubBlocks.map((block, index) => (
                  <div key={block.title} className="w-full shrink-0 pr-4">
                    <h4 className="text-lg font-semibold text-foreground mb-3">{block.title}</h4>
                    <blockquote className="text-lg md:text-xl font-semibold text-foreground italic border-l-4 border-primary pl-4 mb-4">
                      "{block.quote}"
                    </blockquote>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {block.narrative}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dot Indicators */}
          <div className="flex gap-2">
            {hubBlocks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveBlock(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeBlock === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
        
        {/* Image Column */}
        <div className="lg:col-span-2 h-[calc(100vh-420px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center relative overflow-hidden">
          {hubBlocks.map((block, index) => (
            <div
              key={block.title}
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                activeBlock === index ? "opacity-100" : "opacity-0"
              )}
            >
              <p className="text-muted-foreground text-base">Image for "{block.title}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Pattern 3: Auto-Rotating Spotlight
const SpotlightPattern = ({ activeBlock, setActiveBlock }: { activeBlock: number; setActiveBlock: (i: number) => void }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const DURATION = 6000; // 6 seconds
  
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    
    const startTime = Date.now() - (progress / 100) * DURATION;
    
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / DURATION) * 100;
      
      if (newProgress >= 100) {
        setActiveBlock((activeBlock + 1) % hubBlocks.length);
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    }, 50);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeBlock, setActiveBlock]);
  
  // Reset progress when activeBlock changes
  useEffect(() => {
    setProgress(0);
  }, [activeBlock]);
  
  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div 
        className="relative cursor-pointer group"
        onClick={() => setIsPaused(!isPaused)}
      >
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="absolute right-0 -top-8 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            {isPaused ? "Click to resume" : "Click to pause"}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1 space-y-4">
          <h4 className="text-lg font-semibold text-foreground">{hubBlocks[activeBlock].title}</h4>
          <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic border-l-4 border-primary pl-4">
            "{hubBlocks[activeBlock].quote}"
          </blockquote>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {hubBlocks[activeBlock].narrative}
          </p>
          
          {/* Manual Navigation */}
          <div className="flex gap-2 pt-4">
            {hubBlocks.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveBlock(index);
                  setProgress(0);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeBlock === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 h-[calc(100vh-420px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center relative overflow-hidden">
          {hubBlocks.map((block, index) => (
            <div
              key={block.title}
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
                activeBlock === index ? "opacity-100" : "opacity-0"
              )}
            >
              <p className="text-muted-foreground text-base">Image for "{block.title}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Pattern 4: Stacked Cards
const StackedPattern = ({ activeBlock, setActiveBlock }: { activeBlock: number; setActiveBlock: (i: number) => void }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Stacked Cards */}
      <div className="lg:col-span-1 relative h-[350px]">
        {hubBlocks.map((block, index) => {
          // Calculate position based on distance from active
          const distance = index - activeBlock;
          const isActive = index === activeBlock;
          const isBehind = distance > 0;
          const offset = Math.abs(distance);
          
          return (
            <div
              key={block.title}
              onClick={() => setActiveBlock(index)}
              className={cn(
                "absolute inset-x-0 bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-500 ease-out",
                isActive 
                  ? "z-30 shadow-lg" 
                  : offset === 1 
                    ? "z-20 shadow-md" 
                    : "z-10 shadow-sm"
              )}
              style={{
                transform: isActive 
                  ? "translateY(0) scale(1)" 
                  : `translateY(${distance * 20}px) scale(${1 - offset * 0.05})`,
                opacity: isActive ? 1 : 1 - offset * 0.2,
              }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">{block.title}</h4>
              <blockquote className="text-base md:text-lg font-semibold text-foreground italic border-l-4 border-primary pl-4 mb-4">
                "{block.quote}"
              </blockquote>
              <p className={cn(
                "text-sm text-muted-foreground leading-relaxed transition-all duration-500",
                isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
              )}>
                {block.narrative}
              </p>
            </div>
          );
        })}
      </div>
      
      {/* Image Column */}
      <div className="lg:col-span-2 h-[calc(100vh-420px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center relative overflow-hidden">
        {hubBlocks.map((block, index) => (
          <div
            key={block.title}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
              activeBlock === index ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="text-muted-foreground text-base">Image for "{block.title}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ImpactSection04 = ({ sectionRef }: ImpactSection04Props) => {
  const [activePattern, setActivePattern] = useState<PatternType>('pills');
  const [activeBlock, setActiveBlock] = useState(0);
  
  // Reset active block when pattern changes
  useEffect(() => {
    setActiveBlock(0);
  }, [activePattern]);
  
  return (
    <section
      ref={sectionRef}
      className="slide-section flex flex-col pt-12"
    >
      <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col h-full">
        {/* Header - Title left, Number right */}
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Dual-Interface Impact
          </h2>
          <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
            /04
          </span>
        </div>

        {/* Pattern Selector */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm text-muted-foreground">Pattern:</span>
          <ToggleGroup 
            type="single" 
            value={activePattern} 
            onValueChange={(val) => val && setActivePattern(val as PatternType)}
            className="bg-muted/50 rounded-lg p-1"
          >
            <ToggleGroupItem value="pills" className="text-sm px-3">Pills</ToggleGroupItem>
            <ToggleGroupItem value="carousel" className="text-sm px-3">Carousel</ToggleGroupItem>
            <ToggleGroupItem value="spotlight" className="text-sm px-3">Spotlight</ToggleGroupItem>
            <ToggleGroupItem value="stacked" className="text-sm px-3">Stacked</ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Tabs - Marketing Hub first */}
        <Tabs defaultValue="marketing-hub" className="w-full flex flex-col flex-1">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="marketing-hub" className="px-6 md:px-8 text-base">Marketing Hub</TabsTrigger>
              <TabsTrigger value="marketing-site" className="px-6 md:px-8 text-base">Marketing Site</TabsTrigger>
            </TabsList>
          </div>

          {/* Content fills remaining space */}
          <div className="flex-1">
            <TabsContent value="marketing-hub" className="w-full m-0">
              {activePattern === 'pills' && (
                <PillsPattern activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
              )}
              {activePattern === 'carousel' && (
                <CarouselPattern activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
              )}
              {activePattern === 'spotlight' && (
                <SpotlightPattern activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
              )}
              {activePattern === 'stacked' && (
                <StackedPattern activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
              )}
            </TabsContent>

            <TabsContent value="marketing-site" className="w-full m-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1 space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Advanced Filters Driven by Buyer Intent</h3>
                  <p className="text-lg text-muted-foreground">
                    The insight engine surfaces new filter categories based on what buyers actually search for.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-foreground">Intent-Based Categories</p>
                        <p className="text-base text-muted-foreground">Filter groups derived from actual buyer search patterns.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-foreground">Dynamic Suggestions</p>
                        <p className="text-base text-muted-foreground">Keywords that auto-populate based on trending searches.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-foreground">Personalized Rankings</p>
                        <p className="text-base text-muted-foreground">Results ordered by relevance to user behavior.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 h-[calc(100vh-420px)] min-h-[300px] bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                  <p className="text-muted-foreground text-base">Marketing Site Screenshot</p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ImpactSection04;
