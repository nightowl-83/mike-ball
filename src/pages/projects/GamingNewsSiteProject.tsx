import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { StickyNavHeader } from "@/components/StickyNavHeader";
import ProjectSectionNav from "@/components/ProjectSectionNav";
import { ScrollStorySection } from "@/components/ScrollStorySection";
import { GamePersonaCard } from "@/components/GamePersonaCard";
import { PersonaLayoutToggle } from "@/components/PersonaLayoutToggle";
// Image imports
import gnsHeroPhone from "@/assets/gns-hero-phone.jpg";
import gnsWalkthroughPhone from "@/assets/gns-walkthrough-phone.png";
import gnsHomePhoneShowcase from "@/assets/gns-home-phone-showcase.png";
import gnsFeatureSpoiler from "@/assets/gns-feature-spoiler.webp";
import gnsFeatureCaffeine from "@/assets/gns-feature-caffeine.webp";
import gnsFeatureAccordion from "@/assets/gns-feature-accordion.webp";
import gnsPersonaMarcus from "@/assets/gns-persona-marcus.png";
import gnsPersonaElena from "@/assets/gns-persona-elena.png";
import gnsPersonaKenji from "@/assets/gns-persona-kenji.png";
const GamingNewsSiteProject = () => {
  // Check if user has access
  const hasAccess = sessionStorage.getItem("project-access-gaming-news-site") === "true";

  // Persona layout state
  const [personaLayout, setPersonaLayout] = useState<1 | 2 | 3 | 4>(1);
  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const defineRef = useRef<HTMLDivElement>(null);
  const discoveryRef = useRef<HTMLDivElement>(null);
  const discoveryInterviewsRef = useRef<HTMLDivElement>(null);
  const discoveryPersonaRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const designSystemRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const nextProjectRef = useRef<HTMLDivElement>(null);

  // Section navigation data
  const sections = [{
    id: 'hero',
    section: 'Overview',
    subsection: '',
    number: '',
    ref: heroRef
  }, {
    id: 'overview',
    section: 'Background',
    subsection: '',
    number: '',
    ref: overviewRef
  }, {
    id: 'process',
    section: 'Process',
    subsection: '',
    number: '',
    ref: processRef
  }, {
    id: 'define',
    section: 'Define',
    subsection: '',
    number: '/01',
    ref: defineRef
  }, {
    id: 'discovery',
    section: 'Discovery',
    subsection: '',
    number: '/02',
    ref: discoveryRef
  }, {
    id: 'discovery-interviews',
    section: 'Discovery',
    subsection: 'User Interviews',
    number: '/02',
    ref: discoveryInterviewsRef
  }, {
    id: 'discovery-persona',
    section: 'Discovery',
    subsection: 'User Persona',
    number: '/02',
    ref: discoveryPersonaRef
  }, {
    id: 'design',
    section: 'Design',
    subsection: '',
    number: '/03',
    ref: designRef
  }, {
    id: 'design-system',
    section: 'Design',
    subsection: 'Design System',
    number: '/03',
    ref: designSystemRef
  }, {
    id: 'delivery',
    section: 'Delivery',
    subsection: '',
    number: '/04',
    ref: deliveryRef
  }, {
    id: 'outcomes',
    section: 'Outcomes',
    subsection: '',
    number: '/05',
    ref: outcomesRef
  }, {
    id: 'next-project',
    section: 'Next Project',
    subsection: '',
    number: '',
    ref: nextProjectRef
  }];

  // Use the unified navigation hook
  const {
    currentSectionIndex,
    setCurrentSectionIndex,
    stickyHeader
  } = useProjectNavigation(sections);

  // Scroll animations
  const heroAnim = useScrollAnimation();
  const overviewAnim = useScrollAnimation();
  const productShotsAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const defineAnim = useScrollAnimation();
  const discoveryAnim = useScrollAnimation();
  const discoveryStatsAnim = useScrollAnimation();
  const quotesAnim = useScrollAnimation();
  const personaAnim = useScrollAnimation();
  // Individual persona animations for grayscale effect
  const persona1Anim = useScrollAnimation({
    threshold: 0.3
  });
  const persona2Anim = useScrollAnimation({
    threshold: 0.3
  });
  const persona3Anim = useScrollAnimation({
    threshold: 0.3
  });
  const designAnim = useScrollAnimation();
  const deliveryAnim = useScrollAnimation();
  const outcomesAnim = useScrollAnimation();
  const nextProjectAnim = useScrollAnimation();
  return <div className="min-h-screen bg-background">
      {/* Unified Sticky Header */}
      <StickyNavHeader visible={stickyHeader.visible} currentSection={stickyHeader.section} currentSubsection={stickyHeader.subsection} currentNumber={stickyHeader.number} sections={sections} />

      {/* Section Navigation */}
      <ProjectSectionNav sections={sections} currentSectionIndex={currentSectionIndex} setCurrentSectionIndex={setCurrentSectionIndex} />

      {/* Hero Section - Two Column Layout */}
      <section ref={heroAnim.ref} className={`relative h-screen max-h-[900px] w-full overflow-hidden border-b border-border transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Content */}
          <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 bg-card py-12 md:py-0">
            <div className="space-y-4 md:space-y-6 animate-fade-in max-w-2xl">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                Mobile App Design
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Signal,<br />
                Not Noise.
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                A utility-first mobile companion that filters clickbait, protects narrative spoilers, and respects the gamer's time.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Role</span>
                  <p className="font-semibold text-sm md:text-base">Product Designer</p>
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
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6 overflow-visible">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Product Strategy</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">UX/UI Design</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">User Research</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative bg-muted/50">
            <img src={gnsHeroPhone} alt="Gaming News Site Game Hub interface mockup" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">
        {/* Background Section */}
        <section ref={overviewAnim.ref} className={`min-h-[60vh] flex items-center justify-center py-10 md:py-16 transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={overviewRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Background</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Mobile gaming journalism is currently a hostile user experience. Players are bombarded with aggressive ads, auto-play videos, and irrelevant content that prioritizes engagement metrics over genuine utility.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Worse, headlines often contain spoilers that ruin the narrative experience before the game is even played. The industry's "firehose" approach leaves gamers overwhelmed, frustrated, and unable to find the specific information they need.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We needed to pivot from "content consumption" to "user utility" — building a companion app that respects gamers' time and protects their experience.
                </p>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Project Highlights</h2>
                <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Utility-first mobile companion that filters clickbait and respects the gamer's time.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Spoiler protection for narrative games with automatic content blurring.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Three distinct user personas to adapt UI to conflicting needs.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Premium editorial dark mode designed for late-night gaming sessions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Product Shots */}
        <section ref={productShotsAnim.ref} className={`py-24 transition-all duration-700 ${productShotsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-card bg-muted/30 border border-border flex items-end justify-center">
                <img alt="Game walkthrough guide view with Chrono Trigger article" className="w-auto h-full object-bottom object-cover" src="/lovable-uploads/a607c58f-ed86-4495-8c47-9ad09711a2ce.jpg" />
              </div>
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-card bg-muted/30 border border-border flex items-end justify-center">
                <img src={gnsHomePhoneShowcase} alt="Home screen with Daily Brief and current games" className="w-auto h-full object-contain object-bottom" />
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section ref={processAnim.ref} className={`min-h-screen flex items-center justify-center py-10 md:py-24 bg-card/30 transition-all duration-700 ${processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={processRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Column - Title & Description */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">Design Process</h2>
                <p className="text-base md:text-xl text-muted-foreground">
                  A utility-focused approach combining user behavior analysis, persona development, and iterative design to deliver a gamer-centric companion app.
                </p>
              </div>

              {/* Right Column - Steps */}
              <div className="space-y-0">
                {/* Step 1 */}
                <div className="flex gap-4 md:gap-10 pb-6 md:pb-8 border-b border-border">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/01</div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Defining the Goal</h3>
                    <div className="space-y-1 text-base md:text-lg text-muted-foreground">
                      <p>Utility over impressions</p>
                      <p>Behavior-based onboarding</p>
                      <p>Game Hub architecture</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 md:gap-10 py-6 md:py-8 border-b border-border">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/02</div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Discovery</h3>
                    <div className="space-y-1 text-base md:text-lg text-muted-foreground">
                      <p>User interviews</p>
                      <p>Persona development</p>
                      <p>Behavior analysis</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 md:gap-10 py-6 md:py-8 border-b border-border">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/03</div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Design</h3>
                    <div className="space-y-1 text-base md:text-lg text-muted-foreground">
                      <p>Digital Zen philosophy</p>
                      <p>Editorial dark mode</p>
                      <p>Accessible patterns</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 md:gap-10 pt-6 md:pt-8">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/04</div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Delivery</h3>
                    <div className="space-y-1 text-base md:text-lg text-muted-foreground">
                      <p>Spoiler Curtain</p>
                      <p>Caffeine Toggle</p>
                      <p>Progressive Accordions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Define Section - 01 */}
        <section ref={defineAnim.ref} className={`relative py-10 md:py-24 transition-all duration-700 ${defineAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={defineRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between mb-4 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold flex-1">Define</h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 text-right shrink-0">/01</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-base md:text-xl text-muted-foreground">
                  We moved away from a generic news feed to a "Game Hub" architecture. By onboarding users based on their behavior, we tailored the interface to solve specific friction points rather than maximizing ad views.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-primary">Game Hub Architecture:</strong> Instead of a firehose of content, users organize their experience around specific games they're playing or following.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Behavior-Based Onboarding:</strong> New users select their gaming style (competitive, narrative, casual) to receive a tailored experience from day one.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Utility Over Impressions:</strong> Every feature was evaluated on user value, not engagement metrics. Features that drove "time on site" without utility were rejected.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Friction Point Solutions:</strong> Identified and solved key pain points: spoilers, irrelevant content, aggressive advertising, and poor second-screen support.
                  </p>
                  
                  <div className="p-4 md:p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Summary of Strategy</h3>
                    <p>Build for utility, not impressions. The measure of success is user satisfaction, not time-on-site.</p>
                    <p className="mt-2">Personalize through behavior, not demographics. Let users' actions guide the experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Section - 02 */}
        <section className="relative py-10 md:py-24 bg-card/30">
          <div ref={discoveryRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between mb-4 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold flex-1">Discovery</h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 text-right shrink-0">/02</span>
            </div>
            <div ref={discoveryInterviewsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 mb-8 md:mb-32 items-stretch">
              {/* Left Column - User Interviews (1 column) */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">User Interviews</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We surveyed <strong className="text-primary">52</strong> active gamers about their news consumption habits. <strong className="text-primary">41</strong> responded with detailed insights about their frustrations and desires.
                  </p>
                </div>
              </div>

              {/* Right Columns - Charts (2 columns) */}
              <div ref={discoveryStatsAnim.ref} className={`lg:col-span-2 space-y-4 md:space-y-8 transition-all duration-700 ${discoveryStatsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Statistics */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-8 items-center">
                  {/* 73% Frustrated */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient1-gaming" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(220 100% 65%)" />
                          <stop offset="100%" stopColor="hsl(220 100% 80%)" />
                        </linearGradient>
                        <filter id="glow1-gaming">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient1-gaming)" strokeWidth="8" strokeDasharray="439.8" strokeDashoffset={439.8 * (1 - 0.73)} strokeLinecap="round" transform="rotate(-90 80 80)" filter="url(#glow1-gaming)" />
                      <text x="80" y="75" textAnchor="middle" className="text-2xl font-bold" fill="hsl(var(--foreground))">73%</text>
                      <text x="80" y="95" textAnchor="middle" className="text-xs" fill="hsl(var(--muted-foreground))">Frustrated</text>
                    </svg>
                    <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Users frustrated with current gaming news sites</p>
                  </div>

                  {/* 89% Mobile */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient2-gaming" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(280 100% 70%)" />
                          <stop offset="100%" stopColor="hsl(280 100% 85%)" />
                        </linearGradient>
                        <filter id="glow2-gaming">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient2-gaming)" strokeWidth="8" strokeDasharray="439.8" strokeDashoffset={439.8 * (1 - 0.89)} strokeLinecap="round" transform="rotate(-90 80 80)" filter="url(#glow2-gaming)" />
                      <text x="80" y="75" textAnchor="middle" className="text-2xl font-bold" fill="hsl(var(--foreground))">89%</text>
                      <text x="80" y="95" textAnchor="middle" className="text-xs" fill="hsl(var(--muted-foreground))">Mobile</text>
                    </svg>
                    <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Users reading gaming news on mobile devices</p>
                  </div>

                  {/* 61% Spoiled */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient3-gaming" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(340 100% 65%)" />
                          <stop offset="100%" stopColor="hsl(340 100% 80%)" />
                        </linearGradient>
                        <filter id="glow3-gaming">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient3-gaming)" strokeWidth="8" strokeDasharray="439.8" strokeDashoffset={439.8 * (1 - 0.61)} strokeLinecap="round" transform="rotate(-90 80 80)" filter="url(#glow3-gaming)" />
                      <text x="80" y="75" textAnchor="middle" className="text-2xl font-bold" fill="hsl(var(--foreground))">61%</text>
                      <text x="80" y="95" textAnchor="middle" className="text-xs" fill="hsl(var(--muted-foreground))">Spoiled</text>
                    </svg>
                    <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Users who had a game spoiled by a headline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Quotes */}
            <div ref={quotesAnim.ref} className={`space-y-6 md:space-y-8 transition-all duration-700 ${quotesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">What Gamers Said</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "I just want patch notes and server status. Why do I have to scroll past 10 clickbait articles to find that?"
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Competitive Player</p>
                </div>
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "A headline spoiled the ending of a game I'd been playing for 40 hours. I literally stopped reading gaming news after that."
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Story-Driven Gamer</p>
                </div>
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "I use guides while playing, but my phone screen keeps turning off. Why isn't there a simple way to keep it on?"
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Second-Screen User</p>
                </div>
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "I want a daily brief I can read on my commute. Something curated and clean, not a wall of ads."
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Casual Reader</p>
                </div>
              </div>
            </div>

            {/* Persona Header Section */}
            <div className="mt-16 md:mt-32 max-w-6xl mx-auto text-center px-4">
              <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Creating distinct user personas to design for conflicting needs.
              </h2>
            </div>

            {/* User Persona Section - Game Character Cards */}
            <div ref={discoveryPersonaRef} className="mt-12 md:mt-20">
              {/* Layout Toggle */}
              <div className="flex justify-end mb-4">
                <PersonaLayoutToggle activeLayout={personaLayout} onLayoutChange={setPersonaLayout} />
              </div>
              
              <div ref={personaAnim.ref} className={`transition-all duration-700 ${personaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* V1: Default - Stacked vertically */}
                {personaLayout === 1 && <div className="space-y-8 md:space-y-12">
                    <div ref={persona1Anim.ref}>
                      <GamePersonaCard name="Marcus T." classTitle="The Strategist" age={28} playerType="Competitive Gamer" avatar={gnsPersonaMarcus} level={99} classIcon="strategist" isVisible={persona1Anim.isVisible} variant="default" stats={[{
                    subject: 'Focus',
                    value: 85,
                    fullMark: 100
                  }, {
                    subject: 'Speed',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Efficiency',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Meta Knowledge',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 15,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 45,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Instant access to patch notes'
                  }, {
                    text: 'Real-time server status'
                  }, {
                    text: '"Just the Facts" summaries'
                  }, {
                    text: 'Zero scrolling through fluff'
                  }]} quote="I don't have time to scroll through clickbait. Just tell me if the patch changed my main character and I'm good." />
                    </div>
                    <div ref={persona2Anim.ref}>
                      <GamePersonaCard name="Elena R." classTitle="The Enthusiast" age={34} playerType="Story-Driven Gamer" avatar={gnsPersonaElena} level={87} classIcon="enthusiast" isVisible={persona2Anim.isVisible} variant="default" stats={[{
                    subject: 'Story Focus',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 75,
                    fullMark: 100
                  }, {
                    subject: 'Immersion',
                    value: 100,
                    fullMark: 100
                  }, {
                    subject: 'Reading Depth',
                    value: 55,
                    fullMark: 100
                  }, {
                    subject: 'Spoiler Aversion',
                    value: 100,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Complete spoiler protection'
                  }, {
                    text: 'Curated narrative game coverage'
                  }, {
                    text: 'Premium reading experience'
                  }, {
                    text: 'Editorial-quality content'
                  }]} quote="A headline spoiled the ending of a game I'd been playing for 40 hours. I literally stopped reading gaming news after that." />
                    </div>
                    <div ref={persona3Anim.ref}>
                      <GamePersonaCard name="Kenji M." classTitle="The Explorer" age={22} playerType="Gaming Enthusiast" avatar={gnsPersonaKenji} level={72} classIcon="explorer" isVisible={persona3Anim.isVisible} variant="default" stats={[{
                    subject: 'Multitasking',
                    value: 88,
                    fullMark: 100
                  }, {
                    subject: 'Daily Gaming',
                    value: 42,
                    fullMark: 100
                  }, {
                    subject: 'Mobile Usage',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Curiosity',
                    value: 90,
                    fullMark: 100
                  }, {
                    subject: 'Adaptability',
                    value: 68,
                    fullMark: 100
                  }, {
                    subject: 'Enthusiasm',
                    value: 85,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Second-screen guide support'
                  }, {
                    text: 'Screen stays awake while gaming'
                  }, {
                    text: 'Quick daily gaming digest'
                  }, {
                    text: 'Ad-free reading experience'
                  }]} quote="I use guides while playing, but my phone screen keeps turning off. Why isn't there a simple way to keep it on?" />
                    </div>
                  </div>}

                {/* V2: Compact - 50vh max height per card */}
                {personaLayout === 2 && <div className="space-y-6">
                    <div ref={persona1Anim.ref}>
                      <GamePersonaCard name="Marcus T." classTitle="The Strategist" age={28} playerType="Competitive Gamer" avatar={gnsPersonaMarcus} level={99} classIcon="strategist" isVisible={persona1Anim.isVisible} variant="compact" stats={[{
                    subject: 'Focus',
                    value: 85,
                    fullMark: 100
                  }, {
                    subject: 'Speed',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Efficiency',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Meta Knowledge',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 15,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 45,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Instant access to patch notes'
                  }, {
                    text: 'Real-time server status'
                  }, {
                    text: '"Just the Facts" summaries'
                  }, {
                    text: 'Zero scrolling through fluff'
                  }]} quote="I don't have time to scroll through clickbait. Just tell me if the patch changed my main character and I'm good." />
                    </div>
                    <div ref={persona2Anim.ref}>
                      <GamePersonaCard name="Elena R." classTitle="The Enthusiast" age={34} playerType="Story-Driven Gamer" avatar={gnsPersonaElena} level={87} classIcon="enthusiast" isVisible={persona2Anim.isVisible} variant="compact" stats={[{
                    subject: 'Story Focus',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 75,
                    fullMark: 100
                  }, {
                    subject: 'Immersion',
                    value: 100,
                    fullMark: 100
                  }, {
                    subject: 'Reading Depth',
                    value: 55,
                    fullMark: 100
                  }, {
                    subject: 'Spoiler Aversion',
                    value: 100,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Complete spoiler protection'
                  }, {
                    text: 'Curated narrative game coverage'
                  }, {
                    text: 'Premium reading experience'
                  }, {
                    text: 'Editorial-quality content'
                  }]} quote="A headline spoiled the ending of a game I'd been playing for 40 hours. I literally stopped reading gaming news after that." />
                    </div>
                    <div ref={persona3Anim.ref}>
                      <GamePersonaCard name="Kenji M." classTitle="The Explorer" age={22} playerType="Gaming Enthusiast" avatar={gnsPersonaKenji} level={72} classIcon="explorer" isVisible={persona3Anim.isVisible} variant="compact" stats={[{
                    subject: 'Multitasking',
                    value: 88,
                    fullMark: 100
                  }, {
                    subject: 'Daily Gaming',
                    value: 42,
                    fullMark: 100
                  }, {
                    subject: 'Mobile Usage',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Curiosity',
                    value: 90,
                    fullMark: 100
                  }, {
                    subject: 'Adaptability',
                    value: 68,
                    fullMark: 100
                  }, {
                    subject: 'Enthusiasm',
                    value: 85,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Second-screen guide support'
                  }, {
                    text: 'Screen stays awake while gaming'
                  }, {
                    text: 'Quick daily gaming digest'
                  }, {
                    text: 'Ad-free reading experience'
                  }]} quote="I use guides while playing, but my phone screen keeps turning off. Why isn't there a simple way to keep it on?" />
                    </div>
                  </div>}

                {/* V3: 3-Column Grid - Vertical cards side by side */}
                {personaLayout === 3 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div ref={persona1Anim.ref}>
                      <GamePersonaCard name="Marcus T." classTitle="The Strategist" age={28} playerType="Competitive Gamer" avatar={gnsPersonaMarcus} level={99} classIcon="strategist" isVisible={persona1Anim.isVisible} variant="vertical" stats={[{
                    subject: 'Focus',
                    value: 85,
                    fullMark: 100
                  }, {
                    subject: 'Speed',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Efficiency',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Meta Knowledge',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 15,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 45,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Instant access to patch notes'
                  }, {
                    text: 'Real-time server status'
                  }, {
                    text: '"Just the Facts" summaries'
                  }, {
                    text: 'Zero scrolling through fluff'
                  }]} quote="I don't have time to scroll through clickbait. Just tell me if the patch changed my main character and I'm good." />
                    </div>
                    <div ref={persona2Anim.ref}>
                      <GamePersonaCard name="Elena R." classTitle="The Enthusiast" age={34} playerType="Story-Driven Gamer" avatar={gnsPersonaElena} level={87} classIcon="enthusiast" isVisible={persona2Anim.isVisible} variant="vertical" stats={[{
                    subject: 'Story Focus',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 75,
                    fullMark: 100
                  }, {
                    subject: 'Immersion',
                    value: 100,
                    fullMark: 100
                  }, {
                    subject: 'Reading Depth',
                    value: 55,
                    fullMark: 100
                  }, {
                    subject: 'Spoiler Aversion',
                    value: 100,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Complete spoiler protection'
                  }, {
                    text: 'Curated narrative game coverage'
                  }, {
                    text: 'Premium reading experience'
                  }, {
                    text: 'Editorial-quality content'
                  }]} quote="A headline spoiled the ending of a game I'd been playing for 40 hours. I literally stopped reading gaming news after that." />
                    </div>
                    <div ref={persona3Anim.ref}>
                      <GamePersonaCard name="Kenji M." classTitle="The Explorer" age={22} playerType="Gaming Enthusiast" avatar={gnsPersonaKenji} level={72} classIcon="explorer" isVisible={persona3Anim.isVisible} variant="vertical" stats={[{
                    subject: 'Multitasking',
                    value: 88,
                    fullMark: 100
                  }, {
                    subject: 'Daily Gaming',
                    value: 42,
                    fullMark: 100
                  }, {
                    subject: 'Mobile Usage',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Curiosity',
                    value: 90,
                    fullMark: 100
                  }, {
                    subject: 'Adaptability',
                    value: 68,
                    fullMark: 100
                  }, {
                    subject: 'Enthusiasm',
                    value: 85,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Second-screen guide support'
                  }, {
                    text: 'Screen stays awake while gaming'
                  }, {
                    text: 'Quick daily gaming digest'
                  }, {
                    text: 'Ad-free reading experience'
                  }]} quote="I use guides while playing, but my phone screen keeps turning off. Why isn't there a simple way to keep it on?" />
                    </div>
                  </div>}

                {/* V4: Strip - Condensed horizontal rows */}
                {personaLayout === 4 && <div className="space-y-3">
                    <div ref={persona1Anim.ref}>
                      <GamePersonaCard name="Marcus T." classTitle="The Strategist" age={28} playerType="Competitive Gamer" avatar={gnsPersonaMarcus} level={99} classIcon="strategist" isVisible={persona1Anim.isVisible} variant="strip" stats={[{
                    subject: 'Focus',
                    value: 85,
                    fullMark: 100
                  }, {
                    subject: 'Speed',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Efficiency',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Meta Knowledge',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 15,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 45,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Instant access to patch notes'
                  }, {
                    text: 'Real-time server status'
                  }, {
                    text: '"Just the Facts" summaries'
                  }, {
                    text: 'Zero scrolling through fluff'
                  }]} quote="I don't have time to scroll through clickbait. Just tell me if the patch changed my main character and I'm good." />
                    </div>
                    <div ref={persona2Anim.ref}>
                      <GamePersonaCard name="Elena R." classTitle="The Enthusiast" age={34} playerType="Story-Driven Gamer" avatar={gnsPersonaElena} level={87} classIcon="enthusiast" isVisible={persona2Anim.isVisible} variant="strip" stats={[{
                    subject: 'Story Focus',
                    value: 98,
                    fullMark: 100
                  }, {
                    subject: 'Patience',
                    value: 92,
                    fullMark: 100
                  }, {
                    subject: 'Dedication',
                    value: 75,
                    fullMark: 100
                  }, {
                    subject: 'Immersion',
                    value: 100,
                    fullMark: 100
                  }, {
                    subject: 'Reading Depth',
                    value: 55,
                    fullMark: 100
                  }, {
                    subject: 'Spoiler Aversion',
                    value: 100,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Complete spoiler protection'
                  }, {
                    text: 'Curated narrative game coverage'
                  }, {
                    text: 'Premium reading experience'
                  }, {
                    text: 'Editorial-quality content'
                  }]} quote="A headline spoiled the ending of a game I'd been playing for 40 hours. I literally stopped reading gaming news after that." />
                    </div>
                    <div ref={persona3Anim.ref}>
                      <GamePersonaCard name="Kenji M." classTitle="The Explorer" age={22} playerType="Gaming Enthusiast" avatar={gnsPersonaKenji} level={72} classIcon="explorer" isVisible={persona3Anim.isVisible} variant="strip" stats={[{
                    subject: 'Multitasking',
                    value: 88,
                    fullMark: 100
                  }, {
                    subject: 'Daily Gaming',
                    value: 42,
                    fullMark: 100
                  }, {
                    subject: 'Mobile Usage',
                    value: 95,
                    fullMark: 100
                  }, {
                    subject: 'Curiosity',
                    value: 90,
                    fullMark: 100
                  }, {
                    subject: 'Adaptability',
                    value: 68,
                    fullMark: 100
                  }, {
                    subject: 'Enthusiasm',
                    value: 85,
                    fullMark: 100
                  }]} goals={[{
                    text: 'Second-screen guide support'
                  }, {
                    text: 'Screen stays awake while gaming'
                  }, {
                    text: 'Quick daily gaming digest'
                  }, {
                    text: 'Ad-free reading experience'
                  }]} quote="I use guides while playing, but my phone screen keeps turning off. Why isn't there a simple way to keep it on?" />
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </section>

        {/* Design Section - 03 */}
        <section ref={designAnim.ref} className={`relative py-10 md:py-24 transition-all duration-700 ${designAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={designRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between mb-4 md:mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold flex-1">Design</h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 text-right shrink-0">/03</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-xl text-muted-foreground">
                  To reduce eye strain during late-night gaming sessions, we abandoned the industry-standard "Aggressive Gamer Red" for a premium, editorial dark mode we called "Digital Zen."
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-primary">Deep Charcoal Base:</strong> A softer alternative to pure black (#121217) to reduce OLED smear and contrast vibration during extended reading sessions.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Nordic Steel Neutrals:</strong> Crisp, slate-blue grays (#8B9AAD) for maximum legibility without the harshness of pure white text.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Industrial Orange Accents:</strong> High-visibility orange (#FF6B35) used strictly for utility actions—never decoration. Every orange element is actionable.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Editorial Typography:</strong> Clean, magazine-style layouts that prioritize readability over information density.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4">Design Principles</h3>
                    <p>Calm, not aggressive. The interface should feel like a premium reading experience.</p>
                    <p className="mt-2">Functional color. Every accent color must have a purpose.</p>
                    <p className="mt-2">Mobile-first. Touch targets, gestures, and one-hand operation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design System Section */}
        <section className="relative py-12 md:py-24 bg-background flex items-center">
          <div ref={designSystemRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Design System</h2>
            
            {/* Bento Box Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 pb-8 md:pb-12">
              {/* Large Typography Card */}
              <div className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Typography</h3>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-6 md:mb-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">Inter</h1>
                    <p className="text-sm md:text-base text-muted-foreground">Font Family</p>
                  </div>
                  
                  {/* Two Column Layout for Text Styles */}
                  <div className="grid grid-cols-2 gap-6 md:gap-8">
                    {/* First Column */}
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <p className="text-3xl md:text-4xl font-semibold">H1</p>
                        <p className="text-sm text-muted-foreground">32px Semi Bold</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-semibold">H2</p>
                        <p className="text-sm text-muted-foreground">26px Semi Bold</p>
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-medium">H3</p>
                        <p className="text-sm text-muted-foreground">22px Medium</p>
                      </div>
                      <div>
                        <p className="text-lg md:text-xl font-medium">H4</p>
                        <p className="text-sm text-muted-foreground">18px Medium</p>
                      </div>
                    </div>
                    
                    {/* Second Column */}
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <p className="text-base md:text-lg font-semibold">Subtitle</p>
                        <p className="text-sm text-muted-foreground">16px Semi Bold</p>
                      </div>
                      <div>
                        <p className="text-base md:text-lg">Body</p>
                        <p className="text-sm text-muted-foreground">15px Regular</p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base font-medium">Caption</p>
                        <p className="text-sm text-muted-foreground">13px Medium</p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base">Small</p>
                        <p className="text-sm text-muted-foreground">11px Regular</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Colors Card */}
                <div className="bg-card border border-border rounded-lg p-4 md:p-6 flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Colors</h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1">
                    <div className="rounded-lg p-4 flex items-end row-span-2" style={{
                    backgroundColor: '#121217'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-base mb-1">Deep Charcoal</p>
                        <p className="text-xs opacity-80">#121217</p>
                        <p className="text-xs opacity-60 mt-1">Primary Dark</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#8B9AAD'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Nordic Steel</p>
                        <p className="text-xs opacity-80">#8B9AAD</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#FF6B35'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Industrial Orange</p>
                        <p className="text-xs opacity-80">#FF6B35</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#1E1E24'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Card Dark</p>
                        <p className="text-xs opacity-80">#1E1E24</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#2D5A4A'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Success Green</p>
                        <p className="text-xs opacity-80">#2D5A4A</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing/Components Card */}
                <div className="bg-card border border-border rounded-lg p-4 md:p-6 flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Key Components</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <span className="text-xl">🛡️</span>
                      </div>
                      <div>
                        <p className="font-semibold">Spoiler Shield</p>
                        <p className="text-xs text-muted-foreground">Content blur with reveal tap</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <span className="text-xl">☕</span>
                      </div>
                      <div>
                        <p className="font-semibold">Wake Lock Toggle</p>
                        <p className="text-xs text-muted-foreground">Keep screen active for guides</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <span className="text-xl">📖</span>
                      </div>
                      <div>
                        <p className="font-semibold">Progressive Accordion</p>
                        <p className="text-xs text-muted-foreground">Step-by-step guide expansion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section - 04 */}
        <section ref={deliveryAnim.ref} className={`relative py-10 md:py-24 bg-card/30 transition-all duration-700 ${deliveryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={deliveryRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between mb-4 md:mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold flex-1">Delivery</h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 text-right shrink-0">/04</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 mb-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-xl text-muted-foreground">
                  Three signature features emerged from our research, each solving a specific pain point identified in user interviews.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-primary">The Spoiler Curtain:</strong> A global "Active Playing" setting automatically detects and blurs images or headlines for specific titles, allowing users to browse news without fear of ruining plot twists.
                  </p>
                  
                  <p>
                    <strong className="text-primary">The "Caffeine" Toggle:</strong> A "Wake Lock" utility integrated directly into the reading view. This keeps the phone screen active while users play on their TV—perfect for walkthroughs and guides.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Progressive Accordions:</strong> Long-form guides are broken into collapsible steps. This prevents "scrolling fatigue" and ensures players don't accidentally read solutions for puzzles they haven't reached yet.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Daily Brief Mode:</strong> A curated morning digest that surfaces the top 5 stories based on user preferences—readable in under 5 minutes during a commute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase - ScrollStorySection */}
        <ScrollStorySection stories={[{
        text: "The Spoiler Curtain protects users from unwanted story reveals. Using intelligent content filtering, it detects and hides plot-sensitive information until you're ready to see it. A global 'Active Playing' setting lets users mark games they're currently experiencing.",
        image: gnsFeatureSpoiler,
        imageAlt: "Spoiler Curtain feature interface showing blurred content with reveal button"
      }, {
        text: "The Caffeine Toggle enables second-screen support for late-night gaming sessions. With a single tap, the interface keeps the screen active while users reference guides on their TV—no more fumbling to unlock your phone mid-boss fight.",
        image: gnsFeatureCaffeine,
        imageAlt: "Caffeine Toggle dark mode feature with Keep Screen On active"
      }, {
        text: "Progressive Accordions eliminate content bloat for fluff-free reading. Long-form guides are broken into collapsible steps, preventing scrolling fatigue and ensuring players don't accidentally read solutions for puzzles they haven't reached yet.",
        image: gnsFeatureAccordion,
        imageAlt: "Progressive Accordion content feature showing expandable guide sections"
      }]} sectionTitle="Key Features" sectionNumber="/04" progressStyle="dots" />

        {/* Deliverables Box */}
        <section className="py-10 md:py-16 bg-card/30">
          <div className="container mx-auto max-w-[1440px]">
            <div className="p-6 md:p-8 rounded-xl bg-card/50 border-2 border-primary/20 max-w-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Deliverables</h3>
              <p className="text-muted-foreground">Complete design system with 40+ components optimized for dark mode.</p>
              <p className="text-muted-foreground mt-2">High-fidelity prototypes for iOS and Android with gesture interactions.</p>
              <p className="text-muted-foreground mt-2">User testing sessions validating spoiler protection and guide usability.</p>
            </div>
          </div>
        </section>

        {/* Outcomes Section - 05 */}
        <section ref={outcomesAnim.ref} className={`relative py-10 md:py-24 transition-all duration-700 ${outcomesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={outcomesRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between mb-4 md:mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold flex-1">Outcomes</h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 text-right shrink-0">/05</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-xl text-muted-foreground">
                  The utility-first approach validated our hypothesis: gamers want tools, not more content.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-primary">User Satisfaction:</strong> Post-launch surveys showed 87% satisfaction rate, up from the 28% baseline for existing gaming news apps.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Spoiler Protection:</strong> The Spoiler Curtain became the #1 requested feature in app store reviews, with 94% of users enabling it for at least one game.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Second-Screen Usage:</strong> The Caffeine Toggle saw 67% adoption among guide readers, validating the second-screen use case.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Daily Engagement:</strong> Daily Brief mode drove 3x higher morning engagement compared to the full feed, with users averaging 4.2 minutes of focused reading.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4">Key Learnings</h3>
                    <p>Utility features drive loyalty better than content volume.</p>
                    <p className="mt-2">Respecting user preferences (like spoiler protection) builds trust and retention.</p>
                    <p className="mt-2">Dark mode isn't just aesthetic—it's a core accessibility feature for gamers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Section */}
        <section ref={nextProjectAnim.ref} className={`relative py-20 md:py-32 border-t border-border transition-all duration-700 ${nextProjectAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={nextProjectRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Next Project</p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">Rural Land Marketplace</h3>
                <p className="text-lg text-muted-foreground mt-4 max-w-xl">
                  A complete relaunch of Costar's Rural Land Marketplace, reimagining the property search experience with modern design and intuitive map integration.
                </p>
              </div>
              <Link to="/projects/rural-land-marketplace">
                <Button size="lg" className="gap-2">
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto max-w-[1440px]">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
          </div>
        </section>
      </div>
    </div>;
};
export default GamingNewsSiteProject;