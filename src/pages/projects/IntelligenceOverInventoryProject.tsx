import { ArrowRight, Database, Filter, BarChart3, Target, Lightbulb, TrendingUp, Zap, Users, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { SlideNav } from "@/components/SlideNav";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";

const IntelligenceOverInventoryProject = () => {
  // Section data for navigation
  const sectionData = [
    { id: 'hero', label: 'Overview', number: '' },
    { id: 'conflict', label: 'The Challenge', number: '/01' },
    { id: 'engine', label: 'The Solution', number: '/02' },
    { id: 'impact', label: 'Impact', number: '/03' },
    { id: 'strategy', label: 'Strategy', number: '/04' },
    { id: 'gallery', label: 'Gallery', number: '/05' },
    { id: 'vision', label: 'Vision', number: '/06' },
    { id: 'next-project', label: 'Next Project', number: '/07' }
  ];

  // Use slide navigation hook
  const { currentSectionIndex, scrollToSection, containerRef, sectionRefs } = useSlideNavigation({
    sectionCount: sectionData.length,
    threshold: 0.5,
  });

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
    { icon: BarChart3, label: "UI Filters", description: "Surface as advanced search options" }
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
        className="flex-1 ml-16 md:ml-56 lg:ml-64 slide-container"
      >
        {/* Hero Section */}
        <section
          ref={(el) => { (sectionRefs[0] as any).current = el; }}
          className="slide-section flex items-center"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 py-12">
            <div className="space-y-6 max-w-4xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-medium">
                Product Strategy
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight">
                Intelligence Over<br />Inventory
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                Transforming Commodity Data into First-Party Insights
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                A strategic initiative to convert generic 3rd-party listing data into proprietary buyer intent signals, 
                powering advanced search filters and a seller performance coaching system.
              </p>
              
              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-8 pt-4">
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
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold">+45% Lead Quality</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold">3x Seller Engagement</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold">First-Party Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section - /01 */}
        <section
          ref={(el) => { (sectionRefs[1] as any).current = el; }}
          className="slide-section flex items-center"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                The Challenge
              </h2>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /01
              </span>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Left: Problem Block */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground">
                  The rural land marketplace was drowning in commodity data. Every competitor had access to the same 
                  3rd-party feeds, creating a race to the bottom.
                </p>
                
                {/* Description Cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-base md:text-lg font-medium text-foreground mb-1">Commodity Listings</p>
                    <p className="text-base text-muted-foreground">Identical listings across all competitor platforms with no differentiation.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-base md:text-lg font-medium text-foreground mb-1">Blind Engagement</p>
                    <p className="text-base text-muted-foreground">No insight into buyer intent or preferences driving searches.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-base md:text-lg font-medium text-foreground mb-1">Generic Metrics</p>
                    <p className="text-base text-muted-foreground">Sellers received surface-level performance data without actionable insights.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-base md:text-lg font-medium text-foreground mb-1">Mental Model Mismatch</p>
                    <p className="text-base text-muted-foreground">Search filters didn't align with how buyers naturally think about land.</p>
                  </div>
                </div>
              </div>

              {/* Right: Visual Placeholder */}
              <div className="space-y-3">
                <div className="aspect-video bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                  <p className="text-muted-foreground text-base">Market Saturation Visual</p>
                </div>
                <p className="text-base text-muted-foreground">
                  Competitive analysis showing feature parity across major platforms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Insight Engine Section - /02 */}
        <section
          ref={(el) => { (sectionRefs[2] as any).current = el; }}
          className="slide-section flex items-center bg-card/30"
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

            {/* Flow Steps */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="relative">
                  <div className="bg-card border border-border rounded-xl p-5 md:p-8 h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{step.label}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual-Interface Impact Section - /03 */}
        <section
          ref={(el) => { (sectionRefs[3] as any).current = el; }}
          className="slide-section flex items-center"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Dual-Interface Impact
              </h2>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /03
              </span>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="marketing-site" className="w-full">
              <TabsList className="w-full md:w-auto mb-6 bg-muted/50">
                <TabsTrigger value="marketing-site" className="flex-1 md:flex-none px-8 text-base">Marketing Site</TabsTrigger>
                <TabsTrigger value="marketing-hub" className="flex-1 md:flex-none px-8 text-base">Marketing Hub</TabsTrigger>
              </TabsList>

              <TabsContent value="marketing-site">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-5">
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
                  <div className="aspect-video bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground text-base">Marketing Site Screenshot</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="marketing-hub">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Performance Coach Dashboard</h3>
                    <p className="text-lg text-muted-foreground">
                      Sellers receive personalized recommendations based on buyer engagement patterns.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-4">
                        <LineChart className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-base font-medium text-foreground">Real-Time Metrics</p>
                          <p className="text-base text-muted-foreground">Live engagement data updated as buyers interact.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Users className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-base font-medium text-foreground">Buyer Behavior Insights</p>
                          <p className="text-base text-muted-foreground">Understand what attracts and converts prospects.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-base font-medium text-foreground">Optimization Tips</p>
                          <p className="text-base text-muted-foreground">Actionable suggestions to improve listing performance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground text-base">Marketing Hub Dashboard</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Strategy & Influence Grid - /04 */}
        <section
          ref={(el) => { (sectionRefs[4] as any).current = el; }}
          className="slide-section flex items-center bg-card/30"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Strategy & Influence
              </h2>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /04
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

        {/* Design Detail Gallery - /05 */}
        <section
          ref={(el) => { (sectionRefs[5] as any).current = el; }}
          className="slide-section flex items-center"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Design Details
              </h2>
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 hidden md:block">
                /05
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

        {/* Future Vision - /06 */}
        <section
          ref={(el) => { (sectionRefs[6] as any).current = el; }}
          className="slide-section flex items-center bg-card/30"
        >
          <div className="w-full px-4 md:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-5xl md:text-7xl font-bold font-mono opacity-20 block mb-4">
                /06
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

        {/* Next Project - /07 */}
        <section
          ref={(el) => { (sectionRefs[7] as any).current = el; }}
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
    </div>
  );
};

export default IntelligenceOverInventoryProject;
