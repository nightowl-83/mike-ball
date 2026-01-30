import { ArrowLeft, ArrowRight, Database, Filter, BarChart3, Target, Lightbulb, TrendingUp, Zap, Users, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { StickyNavHeader } from "@/components/StickyNavHeader";
import ProjectSectionNav from "@/components/ProjectSectionNav";

const IntelligenceOverInventoryProject = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const conflictRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const strategyRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const nextProjectRef = useRef<HTMLDivElement>(null);

  // Section navigation data
  const sections = [
    { id: 'hero', section: 'Overview', subsection: '', number: '', ref: heroRef },
    { id: 'conflict', section: 'Challenge', subsection: '', number: '/01', ref: conflictRef },
    { id: 'engine', section: 'Solution', subsection: '', number: '/02', ref: engineRef },
    { id: 'impact', section: 'Impact', subsection: '', number: '/03', ref: impactRef },
    { id: 'strategy', section: 'Strategy', subsection: '', number: '/04', ref: strategyRef },
    { id: 'gallery', section: 'Gallery', subsection: '', number: '/05', ref: galleryRef },
    { id: 'vision', section: 'Vision', subsection: '', number: '', ref: visionRef },
    { id: 'next-project', section: 'Next Project', subsection: '', number: '', ref: nextProjectRef }
  ];

  // Use the unified navigation hook
  const { currentSectionIndex, setCurrentSectionIndex, stickyHeader } = useProjectNavigation(sections);

  // Scroll animations
  const heroAnim = useScrollAnimation();
  const conflictAnim = useScrollAnimation();
  const engineAnim = useScrollAnimation();
  const impactAnim = useScrollAnimation();
  const strategyAnim = useScrollAnimation();
  const galleryAnim = useScrollAnimation();
  const visionAnim = useScrollAnimation();
  const nextProjectAnim = useScrollAnimation();

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
      description: "Pushed back on initial research findings that favored simplified filters. Data showed power users needed granular controls that matched their mental models of land evaluation.",
      icon: Lightbulb
    },
    {
      number: "02",
      title: "Data-Informed Execution",
      description: "Built a feedback loop between lead quality metrics and filter usage patterns. Each iteration was validated against conversion data, not just usability scores.",
      icon: TrendingUp
    },
    {
      number: "03",
      title: "Business Value Alignment",
      description: "Positioned first-party data collection as a competitive moat. Shifted stakeholder focus from feature parity to unique value creation through proprietary insights.",
      icon: Target
    }
  ];

  // Gallery items data
  const galleryItems = [
    { placeholder: true, caption: "Filter interface showing intent-driven categories with visual hierarchy optimized for scan patterns" },
    { placeholder: true, caption: "Performance Coach dashboard with contextual nudges based on listing engagement data" },
    { placeholder: true, caption: "Mobile filter experience with progressive disclosure and touch-optimized interactions" },
    { placeholder: true, caption: "Analytics view showing lead quality metrics and conversion attribution" }
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

      {/* Hero Section - Two Column Layout */}
      <section
        ref={heroAnim.ref}
        className={`relative min-h-screen w-full overflow-hidden border-b border-border transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left: Content */}
          <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 bg-card py-24 md:py-0">
            <div className="space-y-4 md:space-y-6 animate-fade-in max-w-2xl">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                Product Strategy
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Intelligence Over<br />
                Inventory
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                Transforming Commodity Data into First-Party Insights
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                A strategic initiative to convert generic 3rd-party listing data into proprietary buyer intent signals, 
                powering advanced search filters and a seller performance coaching system.
              </p>
              
              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Role</span>
                  <p className="font-semibold text-sm md:text-base">Lead Product Designer</p>
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

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Product Strategy</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Data Systems</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">UX Design</span>
              </div>

              {/* Impact Metrics */}
              <div className="flex flex-wrap gap-3 pt-6 md:pt-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">+45% Lead Quality</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">3x Seller Engagement</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">First-Party Data</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image Placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-muted/50 flex items-center justify-center">
            <div className="w-[80%] h-[60%] bg-card/50 border border-border rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">

        {/* Strategic Conflict Section - /01 */}
        <section
          ref={conflictAnim.ref}
          className={`py-10 md:py-24 transition-all duration-700 ${conflictAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={conflictRef} className="container mx-auto max-w-[1440px] px-6 md:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground flex-1">
                The Challenge
              </h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block shrink-0 text-right">
                /01
              </span>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left: Problem Block */}
              <div className="space-y-6">
                <p className="text-base md:text-lg text-muted-foreground">
                  The rural land marketplace was drowning in commodity data. Every competitor had access to the same 
                  3rd-party feeds, creating a race to the bottom on pricing and features. We needed a way to differentiate 
                  through proprietary insights.
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Identical listings across all competitor platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">No insight into buyer intent or preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Sellers received generic performance metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Search filters didn't match how buyers thought about land</span>
                  </li>
                </ul>

                {/* Callout Box */}
                <div className="bg-card/50 border border-primary/20 rounded-xl p-6 mt-8">
                  <p className="text-sm md:text-base text-foreground font-medium">
                    "We were selling the same product as everyone else. The only way to win was to know our 
                    customers better than anyone—and turn that knowledge into product features."
                  </p>
                </div>
              </div>

              {/* Right: Visual Placeholder */}
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Market Saturation Visual</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Competitive analysis showing feature parity across major rural land platforms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Insight Engine Section - /02 */}
        <section
          ref={engineAnim.ref}
          className={`py-10 md:py-24 bg-card/30 transition-all duration-700 ${engineAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={engineRef} className="container mx-auto max-w-[1440px] px-6 md:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8 md:mb-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground">
                  The Insight Engine
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl">
                  A data pipeline that transforms buyer engagement signals into actionable product features, 
                  creating a flywheel of continuous improvement.
                </p>
              </div>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block shrink-0 text-right">
                /02
              </span>
            </div>

            {/* Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="relative">
                  {/* Connection Line (desktop only) */}
                  {index < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-full h-[2px] bg-gradient-to-r from-primary/20 to-primary/5 translate-x-1/2" />
                  )}
                  
                  <div className="bg-card border border-border rounded-xl p-6 relative z-10 h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.label}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual-Interface Impact Section - /03 */}
        <section
          ref={impactAnim.ref}
          className={`py-10 md:py-24 transition-all duration-700 ${impactAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={impactRef} className="container mx-auto max-w-[1440px] px-6 md:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground flex-1">
                Dual-Interface Impact
              </h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block shrink-0 text-right">
                /03
              </span>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="marketing-site" className="w-full">
              <TabsList className="w-full md:w-auto mb-8 bg-muted/50">
                <TabsTrigger value="marketing-site" className="flex-1 md:flex-none px-6">Marketing Site</TabsTrigger>
                <TabsTrigger value="marketing-hub" className="flex-1 md:flex-none px-6">Marketing Hub</TabsTrigger>
              </TabsList>

              <TabsContent value="marketing-site" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Advanced Filters Driven by Buyer Intent</h3>
                    <p className="text-base md:text-lg text-muted-foreground">
                      The insight engine surfaces new filter categories based on what buyers actually search for, 
                      not what we assumed they wanted. Keywords from lead inquiries become searchable attributes.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">Intent-based filter categories</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">Dynamic keyword suggestions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">Personalized search rankings</span>
                      </li>
                    </ul>
                  </div>
                  <div className="aspect-[4/3] bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Marketing Site Screenshot</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="marketing-hub" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Performance Coach Dashboard</h3>
                    <p className="text-base md:text-lg text-muted-foreground">
                      Sellers receive personalized recommendations based on buyer engagement patterns. 
                      The dashboard surfaces ROI-driven nudges to improve listing quality and visibility.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <LineChart className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">Real-time engagement metrics</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">Buyer behavior insights</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">Actionable optimization tips</span>
                      </li>
                    </ul>
                  </div>
                  <div className="aspect-[4/3] bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Marketing Hub Dashboard Screenshot</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Strategy & Influence Grid - /04 */}
        <section
          ref={strategyAnim.ref}
          className={`py-10 md:py-24 bg-card/30 transition-all duration-700 ${strategyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={strategyRef} className="container mx-auto max-w-[1440px] px-6 md:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground flex-1">
                Strategy & Influence
              </h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block shrink-0 text-right">
                /04
              </span>
            </div>

            {/* 3-Column Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {strategyPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold font-mono text-primary/30">{pillar.number}</span>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Detail Gallery - /05 */}
        <section
          ref={galleryAnim.ref}
          className={`py-10 md:py-24 transition-all duration-700 ${galleryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={galleryRef} className="container mx-auto max-w-[1440px] px-6 md:px-12">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground flex-1">
                Design Details
              </h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block shrink-0 text-right">
                /05
              </span>
            </div>

            {/* 2-Column Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {galleryItems.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="aspect-[4/3] bg-muted/50 border border-border rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Design Detail {index + 1}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision Footer */}
        <section
          ref={visionAnim.ref}
          className={`py-10 md:py-24 transition-all duration-700 ${visionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={visionRef} className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">The AI Evolution</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                The next phase integrates machine learning to predict buyer preferences before they search. 
                By analyzing engagement patterns across the platform, we can surface listings that match 
                latent intent—turning the marketplace from reactive search to proactive discovery.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project Navigation */}
        <section
          ref={nextProjectAnim.ref}
          className={`py-10 md:py-24 border-t border-border transition-all duration-700 ${nextProjectAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={nextProjectRef} className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Next Project</span>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground">Rural Land Marketplace</h3>
                <p className="text-muted-foreground max-w-lg">
                  A complete relaunch with modern design, intuitive search, and enhanced map functionality.
                </p>
              </div>
              <Link to="/projects/rural-land-marketplace">
                <Button size="lg" className="gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Section Nav */}
      <ProjectSectionNav
        sections={sections}
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
      />
    </div>
  );
};

export default IntelligenceOverInventoryProject;
