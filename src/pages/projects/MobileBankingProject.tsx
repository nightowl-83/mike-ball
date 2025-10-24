import { ArrowLeft, Layout, Columns2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const MobileBankingProject = () => {
  const [isColumnLayout, setIsColumnLayout] = useState(false);
  const [stickyHeader, setStickyHeader] = useState({
    visible: false,
    section: '',
    subsection: '',
    number: ''
  });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Refs for sections and subsections
  const defineRef = useRef<HTMLDivElement>(null);
  const defineGalleryRef = useRef<HTMLDivElement>(null);
  const discoveryRef = useRef<HTMLDivElement>(null);
  const discoveryInterviewsRef = useRef<HTMLDivElement>(null);
  const discoveryPersonaRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);

  // Array of 7 gallery images
  const galleryImages = Array.from({
    length: 7
  }, (_, i) => ({
    src: "/placeholder.svg",
    alt: `Gallery image ${i + 1}`
  }));

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

    // Define section observers
    if (defineRef.current) {
      observers.push(createObserver(defineRef, {
        section: 'Define',
        subsection: '',
        number: '/01'
      }));
      observers[observers.length - 1].observe(defineRef.current);
    }
    if (defineGalleryRef.current) {
      observers.push(createObserver(defineGalleryRef, {
        section: 'Define',
        subsection: 'Gallery',
        number: '/01'
      }));
      observers[observers.length - 1].observe(defineGalleryRef.current);
    }

    // Discovery section observers
    if (discoveryRef.current) {
      observers.push(createObserver(discoveryRef, {
        section: 'Discovery',
        subsection: '',
        number: '/02'
      }));
      observers[observers.length - 1].observe(discoveryRef.current);
    }
    if (discoveryInterviewsRef.current) {
      observers.push(createObserver(discoveryInterviewsRef, {
        section: 'Discovery',
        subsection: 'User Interviews',
        number: '/02'
      }));
      observers[observers.length - 1].observe(discoveryInterviewsRef.current);
    }
    if (discoveryPersonaRef.current) {
      observers.push(createObserver(discoveryPersonaRef, {
        section: 'Discovery',
        subsection: 'User Persona',
        number: '/02'
      }));
      observers[observers.length - 1].observe(discoveryPersonaRef.current);
    }

    // Design section observer
    if (designRef.current) {
      observers.push(createObserver(designRef, {
        section: 'Design',
        subsection: '',
        number: '/03'
      }));
      observers[observers.length - 1].observe(designRef.current);
    }

    // Delivery section observer
    if (deliveryRef.current) {
      observers.push(createObserver(deliveryRef, {
        section: 'Delivery',
        subsection: '',
        number: '/04'
      }));
      observers[observers.length - 1].observe(deliveryRef.current);
    }

    // Hide sticky header when at top
    const topObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStickyHeader({
          visible: false,
          section: '',
          subsection: '',
          number: ''
        });
      }
    }, {
      threshold: 0.1
    });
    if (defineRef.current) {
      topObserver.observe(defineRef.current);
    }
    return () => {
      observers.forEach(obs => obs.disconnect());
      topObserver.disconnect();
    };
  }, []);
  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % galleryImages.length);
  };
  const previousImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "Escape") setGalleryOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryOpen]);

  // Scroll animations for all sections
  const heroAnim = useScrollAnimation();
  const overviewAnim = useScrollAnimation();
  const productShotsAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const defineContentAnim = useScrollAnimation();
  const bentoAnim = useScrollAnimation();
  const discoveryStatsAnim = useScrollAnimation();
  const quotesAnim = useScrollAnimation();
  const personaAnim = useScrollAnimation();
  const designContentAnim = useScrollAnimation();
  const deliveryContentAnim = useScrollAnimation();
  const fullWidthAnim = useScrollAnimation();
  const challengeAnim = useScrollAnimation();
  const solutionAnim = useScrollAnimation();
  const resultsAnim = useScrollAnimation();
  const showcaseAnim = useScrollAnimation();
  const navigationAnim = useScrollAnimation();
  return <div className="min-h-screen bg-background">
      {/* Unified Sticky Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${stickyHeader.visible ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-sm' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto max-w-[1440px] px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">
              {stickyHeader.section}
              {stickyHeader.subsection && ` - ${stickyHeader.subsection}`}
            </h2>
            <span className="text-2xl md:text-3xl font-bold font-mono opacity-30">
              {stickyHeader.number}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section - Toggle between layouts */}
      <section ref={heroAnim.ref} className={`relative h-[80vh] w-full overflow-hidden transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Back Button & Layout Toggle */}
        <div className="absolute top-6 left-6 z-50 flex gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Button variant="ghost" size="sm" onClick={() => setIsColumnLayout(!isColumnLayout)} className="gap-2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground">
            {isColumnLayout ? <Layout className="h-4 w-4" /> : <Columns2 className="h-4 w-4" />}
            {isColumnLayout ? "Full Width" : "2 Column"}
          </Button>
        </div>

        {!isColumnLayout ? (/* Full-Width Layout */
      <>
            <img src="/placeholder.svg" alt="Mobile Banking App hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-50% to-background to-100%" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-16">
              <div className="container mx-auto max-w-6xl">
                <div className="space-y-6 animate-fade-in">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">Dashboard Design</span>
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                    Marketing Hub<br />
                    Client Dashboard
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl">A modern CMS experience with intuitive navigation and seamless transactions. Designed for simplicity and security.</p>
                  <div className="flex flex-wrap gap-6 pt-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Role</span>
                      <p className="font-semibold">Lead Product Designer</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <p className="font-semibold">3 months</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Year</span>
                      <p className="font-semibold">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>) : (/* 2-Column Layout */
      <div className="flex h-full">
            {/* Left: Content */}
            <div className="w-1/2 flex items-center px-12 lg:px-20 bg-background">
              <div className="space-y-6 animate-fade-in max-w-2xl">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Dashboard Design</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                  Marketing Hub<br />
                  Client Dashboard
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">A modern CMS experience with intuitive navigation and seamless transactions. Designed for simplicity and security.</p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Role</span>
                    <p className="font-semibold">Lead Product Designer</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <p className="font-semibold">3 months</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Year</span>
                    <p className="font-semibold">2024</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-6">
                  <span className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">Figma</span>
                  <span className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">Maze</span>
                  <span className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">AI Prototyping</span>
                  <span className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">UI/UX Design</span>
                </div>
              </div>
            </div>
            
            {/* Right: Image - 50vw width, full container height */}
            <div className="w-1/2 h-full relative">
              <img src="/placeholder.svg" alt="Mobile Banking App hero" className="w-full h-full object-cover" />
            </div>
          </div>)}
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">
        {/* Overview Section */}
        <section ref={overviewAnim.ref} className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Background</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Property Control Center (PCC) was originally built as a one-stop solution for rural real estate professionals to manage property listings, track leads, and monitor analytics.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over time, however, the platform became outdated, with a non-responsive design and inefficient workflows that frustrated users. Recognizing the need for modernization, our team embarked on a complete redesign, focusing on usability, responsiveness, and customization for rural-specific needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through extensive user research and iterative design, we developed a solution 
                  that increased user engagement by 45% and reduced transaction time by 60%.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Project Highlights</h2>
                <ul className="space-y-6 text-lg text-muted-foreground">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Comprehensive audit of the existing system to identify valuable features and pain points.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>A responsive, mobile-friendly interface tailored for seamless usage across devices.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Improved workflows for managing listings, leads, analytics, and billing.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>A user-centered design process incorporating feedback from rural real estate agents.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Product Shots */}
        <section ref={productShotsAnim.ref} className={`px-6 py-24 transition-all duration-700 ${productShotsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img src="/placeholder.svg" alt="Product shot 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img src="/placeholder.svg" alt="Product shot 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section ref={processAnim.ref} className={`min-h-screen flex items-center justify-center px-6 py-24 bg-card/30 transition-all duration-700 ${processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title & Description */}
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">Design Process</h2>
                <p className="text-xl text-muted-foreground">
                  A structured approach combining user research, iterative design, and continuous testing to deliver an intuitive and effective solution.
                </p>
              </div>

              {/* Right Column - Steps */}
              <div className="space-y-0">
                {/* Step 1 */}
                <div className="flex gap-10 pb-8 border-b border-border">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-primary flex-shrink-0">/01</div>
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold">Defining the Goal</h3>
                    <div className="space-y-1 text-lg text-muted-foreground">
                      <p>Ease of use</p>
                      <p>Competitor analysis</p>
                      <p>Understanding product wants</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-10 py-8 border-b border-border">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-primary flex-shrink-0">/02</div>
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold">Discovery</h3>
                    <div className="space-y-1 text-lg text-muted-foreground">
                      <p>User Surveys</p>
                      <p>Audit of current systems</p>
                      <p>Competitor analysis</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-10 py-8 border-b border-border">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-primary flex-shrink-0">/03</div>
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold">Design</h3>
                    <div className="space-y-1 text-lg text-muted-foreground">
                      <p>Ease of use</p>
                      <p>Accessible</p>
                      <p>Desirable</p>
                      <p>Intuitive</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-10 pt-8">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-primary flex-shrink-0">/04</div>
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold">Delivery</h3>
                    <div className="space-y-1 text-lg text-muted-foreground">
                      <p>Design System</p>
                      <p>Testing</p>
                      <p>UI patterns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Define Section - 01 */}
        <section ref={defineContentAnim.ref} className={`relative px-6 py-24 transition-all duration-700 ${defineContentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={defineRef} className="absolute top-0 left-0 w-full h-1" />

          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">Define</h2>
              <div className="text-right">
                <span className="text-6xl md:text-7xl font-bold font-mono opacity-30">/01</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <p className="text-xl text-muted-foreground">
                  Audit of the Existing System revealed these were the most used, and valuable features to users.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-primary">Listing Upload:</strong> Users could upload property information, photos, and descriptions, though the interface was not intuitive and cluttered.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Listing Manager:</strong> Allowed users to view, edit, and manage listing statuses (e.g., sold, pending).
                  </p>
                  
                  <p>
                    <strong className="text-primary">Lead Tracking:</strong> Provided basic lead inquiry details.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Listing Analytics:</strong> Offered performance metrics such as views and inquiries.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4">Summary of Audit</h3>
                    <p>Retain and improve core features like listing upload, management, leads, and analytics.</p>
                    <p className="mt-2">Address navigation, usability, and responsiveness issues.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Layout - 7 Images */}
            <div ref={defineGalleryRef} className="mt-32">
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[200px]">
                {/* Image 1 - Large */}
                <button onClick={() => openGallery(0)} className="col-span-4 md:col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer">
                  <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 2 - Tall */}
                <button onClick={() => openGallery(1)} className="col-span-4 md:col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.05s'
              }}>
                  <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 3 - Medium */}
                <button onClick={() => openGallery(2)} className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.1s'
              }}>
                  <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 4 - Medium */}
                <button onClick={() => openGallery(3)} className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.15s'
              }}>
                  <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 5 - Wide */}
                <button onClick={() => openGallery(4)} className="col-span-4 md:col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.2s'
              }}>
                  <img src={galleryImages[4].src} alt={galleryImages[4].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 6 - Full Height */}
                <button onClick={() => openGallery(5)} className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.25s'
              }}>
                  <img src={galleryImages[5].src} alt={galleryImages[5].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 7 - Large */}
                <button onClick={() => openGallery(6)} className="col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.3s'
              }}>
                  <img src={galleryImages[6].src} alt={galleryImages[6].alt} className="w-full h-full object-cover" />
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Discovery Section - 02 */}
        <section className="relative px-6 py-24 bg-card/30">
          <div ref={discoveryRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div ref={discoveryInterviewsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32 items-stretch">
              {/* Left Column - User Interviews (1 column) */}
              <div className="flex flex-col justify-between h-full">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">Discovery</h2>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">User Interviews</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We surveyed <strong className="text-primary">30</strong> real estate agents about their current platform experience. <strong className="text-primary">22</strong> responded with valuable feedback that shaped our design direction.
                  </p>
                </div>
              </div>

              {/* Right Columns - Charts (2 columns) */}
              <div ref={discoveryStatsAnim.ref} className={`lg:col-span-2 space-y-8 transition-all duration-700 ${discoveryStatsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-right">
                  <span className="text-6xl md:text-7xl font-bold font-mono opacity-30">/02</span>
                </div>
                {/* Statistics */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  {/* 36% Satisfaction */}
                  <div className="text-center">
                    <svg className="w-40 h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(220 100% 65%)" />
                          <stop offset="100%" stopColor="hsl(220 100% 80%)" />
                        </linearGradient>
                        <filter id="glow1">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Background arc */}
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" opacity="0.2" strokeLinecap="round" />
                      {/* Foreground arc - 36% using dasharray */}
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="url(#gradient1)" strokeWidth="6" strokeLinecap="round" strokeDasharray="188.5" strokeDashoffset="120.6" filter="url(#glow1)" className="transition-all duration-1000" />
                    </svg>
                    <div className="text-5xl font-normal mb-3">36%</div>
                    <p className="text-base text-muted-foreground">Overall user satisfaction</p>
                  </div>

                  {/* 24% Confidence */}
                  <div className="text-center">
                    <svg className="w-40 h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(280 100% 70%)" />
                          <stop offset="100%" stopColor="hsl(280 100% 85%)" />
                        </linearGradient>
                        <filter id="glow2">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Background arc */}
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" opacity="0.2" strokeLinecap="round" />
                      {/* Foreground arc - 24% using dasharray */}
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="url(#gradient2)" strokeWidth="6" strokeLinecap="round" strokeDasharray="188.5" strokeDashoffset="143.3" filter="url(#glow2)" className="transition-all duration-1000" />
                    </svg>
                    <div className="text-5xl font-normal mb-3">24%</div>
                    <p className="text-base text-muted-foreground">Confidence in listing metrics</p>
                  </div>

                  {/* 91% Difficult Management */}
                  <div className="text-center">
                    <svg className="w-40 h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(0 100% 70%)" />
                          <stop offset="100%" stopColor="hsl(0 100% 85%)" />
                        </linearGradient>
                        <filter id="glow3">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Background arc */}
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" opacity="0.2" strokeLinecap="round" />
                      {/* Foreground arc - 91% using dasharray */}
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="url(#gradient3)" strokeWidth="6" strokeLinecap="round" strokeDasharray="188.5" strokeDashoffset="17" filter="url(#glow3)" className="transition-all duration-1000" />
                    </svg>
                    <div className="text-5xl font-normal mb-3">91%</div>
                    <p className="text-base text-muted-foreground">Difficulty managing listings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Pain Point Quotes */}
            <div ref={quotesAnim.ref} className={`mt-24 transition-all duration-700 ${quotesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"There is no save function when I am creating a listing."</p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"I tried to use from my phone and it was impossible. There should be an app."</p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"I thought I wasn't receiving any leads only to find out I just didn't know where they were going."</p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"Listing performance reports are not useful. What do these numbers mean?"</p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"Navigation is hard to 'navigate'"</p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"The menus are super confusing. I have to click around a bunch just to edit a listing or check on a lead. Nothing is where I expect it to be."</p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"Uploading a new property is such a slow process. It feels like there are millions of steps, and there's no way to speed it up if I have a lot of listings."</p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">"The site feels really outdated and cluttered. It's hard to find what I'm looking for without getting frustrated."</p>
                </div>
              </div>
            </div>

            {/* User Persona Section - 2x2 Grid */}
            <div ref={discoveryPersonaRef} className="mt-32">
              <div ref={personaAnim.ref} className={`transition-all duration-700 ${personaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-3xl font-semibold mb-12 max-w-6xl mx-auto">User Persona</h3>
              <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Top Left - Photo & Bio */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] bg-muted">
                    <img src="/placeholder.svg" alt="Rural Land Agent" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-2">Ben F.</h3>
                    <p className="text-lg text-muted-foreground">41 years old, Rural Land Agent</p>
                  </div>
                </div>

                {/* Top Right - User Goals */}
                <div className="bg-card rounded-2xl p-10 shadow-sm flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-8">User Goals</h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl">Effective Inventory Management</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl">Streamlined operations</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl">Market understanding</span>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Ben is dedicated to optimizing processes and implementing strategies for organizing success.
                  </p>
                </div>

                {/* Bottom Left - Personality */}
                <div className="bg-card rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-8">Personality</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Sensing</span>
                        <span>Intuition</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                        <div className="h-full rounded-full absolute inset-0 transition-all duration-1000 ease-out" style={{
                          width: '65%',
                          background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
                          boxShadow: '0 0 20px hsla(var(--primary) / 0.7), inset 0 0 10px hsla(var(--primary) / 0.3)'
                        }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Extrovert</span>
                        <span>Introvert</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                        <div className="h-full rounded-full absolute inset-0 transition-all duration-1000 ease-out" style={{
                          width: '45%',
                          background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
                          boxShadow: '0 0 20px hsla(var(--primary) / 0.7), inset 0 0 10px hsla(var(--primary) / 0.3)'
                        }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Feeling</span>
                        <span>Thinking</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                        <div className="h-full rounded-full absolute inset-0 transition-all duration-1000 ease-out" style={{
                          width: '75%',
                          background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
                          boxShadow: '0 0 20px hsla(var(--primary) / 0.7), inset 0 0 10px hsla(var(--primary) / 0.3)'
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right - Quote */}
                <div className="bg-card rounded-2xl p-8 shadow-sm flex items-center">
                  <p className="text-xl text-muted-foreground leading-relaxed italic">
                    "Content management is very important to me. I need to be able to effectively manage inventory, post, track leads and analyze the markets."
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Section - 03 */}
        <section ref={designContentAnim.ref} className={`relative px-6 py-24 transition-all duration-700 ${designContentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={designRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">Design</h2>
                <p className="text-xl text-muted-foreground">
                  Creating an intuitive, modern interface that streamlines workflows and enhances user experience.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                <div className="text-right">
                  <span className="text-6xl md:text-7xl font-bold font-mono opacity-30">/03</span>
                </div>
                
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Information Architecture:</strong> Restructured navigation to prioritize most-used features, reducing clicks by 40% for common tasks.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Visual Design System:</strong> Developed a cohesive design system with reusable components, ensuring consistency across all pages and reducing development time.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Mobile-First Approach:</strong> Designed for mobile devices first, then scaled up for tablets and desktops, ensuring optimal experience across all screen sizes.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Usability Testing:</strong> Conducted multiple rounds of testing with real estate professionals, iterating based on feedback to refine interactions.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4">Design Principles</h3>
                    <p>Simplicity over complexity - every feature must serve a clear purpose.</p>
                    <p className="mt-2">Accessibility for all users, regardless of technical skill level.</p>
                    <p className="mt-2">Performance-focused design for fast load times even in rural areas with limited connectivity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section - 04 */}
        <section ref={deliveryContentAnim.ref} className={`relative px-6 py-24 bg-card/30 transition-all duration-700 ${deliveryContentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={deliveryRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">User Flow</h2>
                <p className="text-xl text-muted-foreground">
                  Implementing a comprehensive design system and ensuring seamless handoff to development teams.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                <div className="text-right">
                  <span className="text-6xl md:text-7xl font-bold font-mono opacity-30">/04</span>
                </div>
                
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Design System:</strong> Created a comprehensive design system with reusable components, color palettes, typography guidelines, and interaction patterns for consistent implementation across all screens.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Developer Handoff:</strong> Provided detailed documentation, Figma prototypes with dev mode enabled, and component specifications to ensure accurate implementation.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Quality Assurance:</strong> Conducted thorough testing across devices and browsers, working closely with developers to refine interactions and fix edge cases.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">User Training:</strong> Developed onboarding flows and help documentation to guide users through the new interface and feature set.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4">Deliverables</h3>
                    <p>Complete design system with 50+ components and comprehensive documentation.</p>
                    <p className="mt-2">Interactive prototypes for all major user flows and responsive breakpoints.</p>
                    <p className="mt-2">User testing reports and iterative improvements based on real-world feedback.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section ref={fullWidthAnim.ref} className={`min-h-screen flex items-center justify-center px-6 py-24 bg-card/30 transition-all duration-700 ${fullWidthAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1600px]">
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-glow">
              <img src="/placeholder.svg" alt="Full width showcase" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section ref={challengeAnim.ref} className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-700 ${challengeAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
                <img src="/placeholder.svg" alt="Challenge" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl font-bold">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional banking apps are often cluttered and difficult to navigate. 
                  Users struggle with finding basic features and feel overwhelmed by 
                  unnecessary complexity.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Simplify complex financial operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Maintain high security standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Create an intuitive user experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section ref={solutionAnim.ref} className={`min-h-screen flex items-center justify-center px-6 py-24 bg-card/30 transition-all duration-700 ${solutionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We designed a clean, minimal interface that puts the most important features 
                  front and center. The new design uses clear visual hierarchy, intuitive 
                  navigation, and delightful micro-interactions.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <p className="text-muted-foreground">
                      Quick actions, biometric authentication, real-time notifications, 
                      and personalized financial insights.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img src="/placeholder.svg" alt="Solution" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section ref={resultsAnim.ref} className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-700 ${resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px] text-center">
            <h2 className="text-4xl font-bold mb-16">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  45%
                </div>
                <p className="text-muted-foreground">
                  Increase in user engagement
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  60%
                </div>
                <p className="text-muted-foreground">
                  Reduction in transaction time
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  4.8/5
                </div>
                <p className="text-muted-foreground">
                  Average user rating
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Showcase */}
        <section ref={showcaseAnim.ref} className={`min-h-screen flex items-center justify-center px-6 py-24 bg-card/30 transition-all duration-700 ${showcaseAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1600px] space-y-12">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-glow">
              <img src="/placeholder.svg" alt="Final showcase 1" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card">
                <img src="/placeholder.svg" alt="Final showcase 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card">
                <img src="/placeholder.svg" alt="Final showcase 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Next Project */}
        <section ref={navigationAnim.ref} className={`px-6 py-24 border-t border-border transition-all duration-700 ${navigationAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Next Project</p>
                <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
              </div>
              <Link to="/projects/ecommerce-platform">
                <Button variant="outline" className="gap-2">
                  View Project
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Gallery Modal */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 bg-background/98 backdrop-blur-xl border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button variant="ghost" size="icon" onClick={() => setGalleryOpen(false)} className="absolute top-6 right-6 z-50 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground">
              <X className="h-6 w-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-50 bg-background/20 backdrop-blur-md px-4 py-2 rounded-full text-foreground font-medium">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>

            {/* Previous Button */}
            <Button variant="ghost" size="icon" onClick={previousImage} className="absolute left-6 z-50 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground h-12 w-12">
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Current Image */}
            <div className="w-full h-full flex items-center justify-center p-20">
              <img src={galleryImages[currentImageIndex].src} alt={galleryImages[currentImageIndex].alt} className="max-w-full max-h-full object-contain rounded-lg animate-fade-in" />
            </div>

            {/* Next Button */}
            <Button variant="ghost" size="icon" onClick={nextImage} className="absolute right-6 z-50 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground h-12 w-12">
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-background/20 backdrop-blur-md p-3 rounded-full">
              {galleryImages.map((img, idx) => <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-8' : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'}`} />)}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default MobileBankingProject;