import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { StickyNavHeader } from "@/components/StickyNavHeader";
import { useState, useEffect, useRef } from "react";
import ruralLandHero from "@/assets/rural-land-marketplace.jpg";

const RuralLandMarketplaceProject = () => {
  const [stickyHeader, setStickyHeader] = useState({
    visible: false,
    section: '',
    subsection: '',
    number: ''
  });

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Section navigation data
  const sections = [{
    id: 'hero',
    section: 'Hero',
    subsection: '',
    number: '',
    ref: heroRef
  }, {
    id: 'overview',
    section: 'Overview',
    subsection: '',
    number: '',
    ref: overviewRef
  }, {
    id: 'challenge',
    section: 'Challenge',
    subsection: '',
    number: '/01',
    ref: challengeRef
  }, {
    id: 'solution',
    section: 'Solution',
    subsection: '',
    number: '/02',
    ref: solutionRef
  }, {
    id: 'results',
    section: 'Results',
    subsection: '',
    number: '/03',
    ref: resultsRef
  }];

  // Sticky header tracking
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-100px 0px -50% 0px'
    };

    const createObserver = (ref: React.RefObject<HTMLDivElement>, data: {
      section: string;
      subsection: string;
      number: string;
    }) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setStickyHeader({
            visible: true,
            ...data
          });
        }
      }, observerOptions);
    };

    const observers: IntersectionObserver[] = [];

    if (heroRef.current) {
      observers.push(createObserver(heroRef, { section: 'Hero', subsection: '', number: '' }));
      observers[observers.length - 1].observe(heroRef.current);
    }

    if (overviewRef.current) {
      observers.push(createObserver(overviewRef, { section: 'Overview', subsection: '', number: '' }));
      observers[observers.length - 1].observe(overviewRef.current);
    }

    if (challengeRef.current) {
      observers.push(createObserver(challengeRef, { section: 'Challenge', subsection: '', number: '/01' }));
      observers[observers.length - 1].observe(challengeRef.current);
    }

    if (solutionRef.current) {
      observers.push(createObserver(solutionRef, { section: 'Solution', subsection: '', number: '/02' }));
      observers[observers.length - 1].observe(solutionRef.current);
    }

    if (resultsRef.current) {
      observers.push(createObserver(resultsRef, { section: 'Results', subsection: '', number: '/03' }));
      observers[observers.length - 1].observe(resultsRef.current);
    }

    const topObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStickyHeader({ visible: false, section: '', subsection: '', number: '' });
      }
    }, { threshold: 0.1 });

    if (heroRef.current) {
      topObserver.observe(heroRef.current);
    }

    return () => {
      observers.forEach(obs => obs.disconnect());
      topObserver.disconnect();
    };
  }, []);

  // Scroll animations
  const heroAnim = useScrollAnimation();
  const overviewAnim = useScrollAnimation();
  const challengeAnim = useScrollAnimation();
  const solutionAnim = useScrollAnimation();
  const resultsAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
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
        className={`relative h-screen max-h-[900px] w-full overflow-hidden border-b border-border transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Content */}
          <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 bg-card py-12 md:py-0">
            <div className="space-y-4 md:space-y-6 animate-fade-in max-w-2xl">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                Web Design
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Rural Land<br />
                Marketplace
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                A complete relaunch of Costar's Rural Land Marketplace, reimagining the property search experience with modern design and intuitive navigation.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Role</span>
                  <p className="font-semibold text-sm md:text-base">Lead Designer</p>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Timeline</span>
                  <p className="font-semibold text-sm md:text-base">4 months</p>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Year</span>
                  <p className="font-semibold text-sm md:text-base">2023</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">
                  User Testing
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">
                  UI Design
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">
                  Mobile & Responsive Design
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">
                  Search & Map Redesign
                </span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <img 
              src={ruralLandHero} 
              alt="Rural Land Marketplace Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section 
        ref={overviewAnim.ref}
        className={`py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-border transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={overviewRef} className="absolute -mt-20" />
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Project Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Rural Land Marketplace project was a comprehensive redesign of Costar's existing platform, 
            focusing on creating a more intuitive and visually appealing experience for users searching for 
            rural properties. As Lead Designer, I was responsible for reimagining the entire user experience, 
            from the search interface to the map functionality.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">My Role</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Lead Designer</li>
                <li>• User Testing</li>
                <li>• UI Design</li>
                <li>• Mobile & Responsive Design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Deliverables</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Design System</li>
                <li>• Prototypes</li>
                <li>• User Flows</li>
                <li>• Final Designs</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Search Redesign</li>
                <li>• Map Interface</li>
                <li>• Property Listings</li>
                <li>• Mobile Experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section 
        ref={challengeAnim.ref}
        className={`py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-muted/30 border-b border-border transition-all duration-700 ${challengeAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={challengeRef} className="absolute -mt-20" />
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-bold text-xl">/01</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">The Challenge</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The existing Rural Land Marketplace platform had outdated design patterns and a complex user 
            interface that made it difficult for users to efficiently search and discover rural properties. 
            The map integration was clunky, and the mobile experience was nearly unusable. Our challenge 
            was to modernize the entire platform while maintaining familiarity for existing users.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Pain Points</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Outdated visual design</li>
                <li>• Complex search filters</li>
                <li>• Poor mobile experience</li>
                <li>• Inefficient map navigation</li>
              </ul>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Goals</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modernize visual design</li>
                <li>• Simplify search experience</li>
                <li>• Optimize for mobile</li>
                <li>• Enhance map functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        ref={solutionAnim.ref}
        className={`py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-border transition-all duration-700 ${solutionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={solutionRef} className="absolute -mt-20" />
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-bold text-xl">/02</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">The Solution</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We redesigned the entire platform from the ground up, starting with extensive user research 
            and testing. The new design features a clean, modern interface with intuitive search filters, 
            a responsive map view that works seamlessly across devices, and a mobile-first approach that 
            makes property searching effortless on any device.
          </p>
          <div className="space-y-8 pt-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Search & Filter Redesign</h3>
              <p className="text-muted-foreground">
                Simplified search interface with smart filters that adapt to user behavior. Implemented 
                auto-suggestions and saved searches to streamline the property discovery process.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Map Integration</h3>
              <p className="text-muted-foreground">
                Redesigned the map view to be the central hub of the experience. Users can now seamlessly 
                switch between list and map views, with real-time updates and smooth interactions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Mobile-First Design</h3>
              <p className="text-muted-foreground">
                Built with mobile users in mind from day one. The responsive design ensures a perfect 
                experience across all devices, with touch-optimized controls and progressive disclosure 
                of information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section 
        ref={resultsAnim.ref}
        className={`py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-muted/30 transition-all duration-700 ${resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div ref={resultsRef} className="absolute -mt-20" />
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-bold text-xl">/03</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Results & Impact</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The redesigned platform launched successfully, receiving positive feedback from both users 
            and stakeholders. User testing showed significant improvements in task completion rates and 
            overall satisfaction.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-muted-foreground">Faster search completion</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">60%</div>
              <p className="text-muted-foreground">Mobile engagement increase</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">User satisfaction score</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RuralLandMarketplaceProject;
