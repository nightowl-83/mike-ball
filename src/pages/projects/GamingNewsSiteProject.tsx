import { ArrowLeft } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { StickyNavHeader } from "@/components/StickyNavHeader";

const GamingNewsSiteProject = () => {
  // Check if user has access
  const hasAccess = sessionStorage.getItem("project-access-gaming-news-site") === "true";
  
  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  // Section navigation data
  const sections = [
    { id: 'hero', section: 'Overview', subsection: '', number: '', ref: heroRef },
    { id: 'overview', section: 'Background', subsection: '', number: '', ref: overviewRef },
    { id: 'process', section: 'Process', subsection: '', number: '/01', ref: processRef },
    { id: 'design', section: 'Design', subsection: '', number: '/02', ref: designRef },
    { id: 'delivery', section: 'Delivery', subsection: '', number: '/03', ref: deliveryRef },
    { id: 'outcomes', section: 'Outcomes', subsection: '', number: '/04', ref: outcomesRef },
  ];

  // Use the unified navigation hook
  const { currentSectionIndex, setCurrentSectionIndex, stickyHeader } = useProjectNavigation(sections);

  // Scroll animations
  const heroAnim = useScrollAnimation();
  const overviewAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const designAnim = useScrollAnimation();
  const deliveryAnim = useScrollAnimation();
  const outcomesAnim = useScrollAnimation();

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

      {/* Hero Section */}
      <section 
        ref={heroAnim.ref} 
        className={`relative min-h-[70vh] w-full overflow-hidden border-b border-border transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

        <div className="container mx-auto max-w-[1440px] px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Web Design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Gaming News Site Redesign
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Complete redesign of a major gaming news publication for CBS Interactive, 
              focusing on modern UI patterns and improved content discovery.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div>
                <span className="text-sm text-muted-foreground">Role</span>
                <p className="font-semibold">Visual Designer</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Company</span>
                <p className="font-semibold">CBS Interactive</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Timeline</span>
                <p className="font-semibold">4 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section 
        ref={overviewAnim.ref} 
        className={`py-16 md:py-24 transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={overviewRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Background</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This section will contain details about the project background, challenges, 
              and the initial discovery phase.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Content coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processAnim.ref} 
        className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={processRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Details about the design process, research methodology, and iterations 
              will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section 
        ref={designAnim.ref} 
        className={`py-16 md:py-24 transition-all duration-700 ${designAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={designRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Design</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Visual design explorations, wireframes, and high-fidelity mockups 
              will be showcased in this section.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section 
        ref={deliveryAnim.ref} 
        className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${deliveryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={deliveryRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Final deliverables, design handoff, and implementation details 
              will be documented here.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section 
        ref={outcomesAnim.ref} 
        className={`py-16 md:py-24 transition-all duration-700 ${outcomesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={outcomesRef} className="absolute top-0 left-0 w-full h-1" />
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Outcomes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Project results, metrics, and learnings will be shared in this section.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GamingNewsSiteProject;
