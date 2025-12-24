import { ArrowLeft, Layout, Columns2, X, ChevronLeft, ChevronRight, Home, Search, Bell, User, Settings, Heart, Star, Mail, Phone, Camera, MapPin, Calendar, Download, Upload, Trash2, Edit, Share2, Filter, Menu, Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { StickyNavHeader } from "@/components/StickyNavHeader";
import { cn } from "@/lib/utils";
import ruralLandHero from "@/assets/rural-land-marketplace.jpg";
import personaHeadshot from "@/assets/persona-headshot.jpg";
import landPromoDesktop from "@/assets/land-promo-desktop-2.png";
import landPromoMobile from "@/assets/land-promo-mobile.jpg";
import landFlowDesktop from "@/assets/LandNetwork-Flow.jpg";
import landFlowMobile from "@/assets/Land-Flow-mobile.jpg";
import uiWireframeVideo from "@/assets/ui-wireframe-hidef.webm";
import searchUiComp from "@/assets/search-ui-comp.jpg";

const RuralLandMarketplaceProject = () => {
  const [stickyHeader, setStickyHeader] = useState({
    visible: false,
    section: '',
    subsection: '',
    number: ''
  });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [designLayout, setDesignLayout] = useState<1 | 2 | 3>(1);

  // Refs for sections and subsections
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const defineRef = useRef<HTMLDivElement>(null);
  const defineGalleryRef = useRef<HTMLDivElement>(null);
  const discoveryRef = useRef<HTMLDivElement>(null);
  const discoveryInterviewsRef = useRef<HTMLDivElement>(null);
  const discoveryPersonaRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const userFlowRef = useRef<HTMLDivElement>(null);
  const designSystemRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    id: 'define-gallery',
    section: 'Define',
    subsection: 'Gallery',
    number: '/01',
    ref: defineGalleryRef
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
    id: 'design-userflow',
    section: 'Design',
    subsection: 'User Flow',
    number: '/03',
    ref: userFlowRef
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
  }];

  // Array of gallery images (placeholder - to be replaced with actual images)
  const galleryImages = [{
    src: "/placeholder.svg",
    alt: "Rural Land Marketplace - Research session"
  }, {
    src: "/placeholder.svg",
    alt: "Design exploration session"
  }, {
    src: "/placeholder.svg",
    alt: "Brainstorm whiteboard - Feature planning"
  }, {
    src: "/placeholder.svg",
    alt: "Team brainstorm session"
  }, {
    src: "/placeholder.svg",
    alt: "Brainstorm overview - Full board"
  }, {
    src: "/placeholder.svg",
    alt: "Rural Land Marketplace mission and goals"
  }, {
    src: "/placeholder.svg",
    alt: "Presentation session"
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

    // Create observers for all sections
    sections.forEach(section => {
      if (section.ref.current) {
        observers.push(createObserver(section.ref, {
          section: section.section,
          subsection: section.subsection,
          number: section.number
        }));
        observers[observers.length - 1].observe(section.ref.current);
      }
    });

    // Hide sticky header when at top (hero is visible)
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
    if (heroRef.current) {
      topObserver.observe(heroRef.current);
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

  // Seamless video loop - reset before browser triggers reload
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime < 0.4) {
        video.currentTime = 0;
      }
    };
    
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

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
  const resultsAnim = useScrollAnimation();
  const showcaseAnim = useScrollAnimation();
  const navigationAnim = useScrollAnimation();
  const { ref: wireframeRef, isVisible: wireframeVisible } = useScrollAnimation();
  
  
  return <div className="min-h-screen bg-background">
      {/* Unified Sticky Header */}
      <StickyNavHeader visible={stickyHeader.visible} currentSection={stickyHeader.section} currentSubsection={stickyHeader.subsection} currentNumber={stickyHeader.number} sections={sections} />

      {/* Hero Section - Two Column Layout Only */}
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
          <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 bg-card py-12 md:py-0 mx-0 my-0">
            <div className="space-y-4 md:space-y-6 animate-fade-in max-w-2xl">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">Web Design</span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Rural Land<br />
                Marketplace
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">A complete relaunch of Costar's Rural Land Marketplace, reimagining the property search experience with modern design and intuitive map integration.</p>
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
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6 overflow-visible">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">User Testing</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">UI Design</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Mobile & Responsive</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Search & Map</span>
              </div>
            </div>
          </div>

          {/* Right: Image - 50vw width on desktop, full on mobile */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative">
            <img src={ruralLandHero} alt="Rural Land Marketplace Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">
        {/* Overview Section */}
        <section ref={overviewAnim.ref} className={`min-h-[60vh] flex items-center justify-center py-10 md:py-16 transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={overviewRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Background</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Costar's Rural Land Marketplace was the go-to platform for buyers and sellers of rural properties, farms, and large land parcels. However, the platform's interface had become outdated and cumbersome to navigate.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The search functionality was complex, the map integration felt disconnected, and the mobile experience was almost non-existent. Our team was tasked with a complete relaunch that would modernize the platform while maintaining the robust features that users relied on.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Through comprehensive user research and iterative design, we delivered a solution that increased property views by 45% and improved mobile engagement by 60%.
                </p>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Project Highlights</h2>
                <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Comprehensive redesign of search and filter functionality for intuitive property discovery.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Seamless map integration that became the centerpiece of the browsing experience.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Mobile-first responsive design optimized for all devices and screen sizes.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>User testing with real estate professionals and land buyers to validate design decisions.</span>
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
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img src={landPromoDesktop} alt="Land.com Find Your Open Space promotional banner" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img src={landPromoMobile} alt="Land.com mobile app interface" className="w-full h-full object-cover" />
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
                  A structured approach combining competitive analysis, user research, and iterative design to deliver a seamless property search experience.
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
                      <p>Modernize the platform</p>
                      <p>Improve search functionality</p>
                      <p>Enhance map experience</p>
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
                      <p>Platform audit</p>
                      <p>Competitor analysis</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 md:gap-10 py-6 md:py-8 border-b border-border">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/03</div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Design</h3>
                    <div className="space-y-1 text-base md:text-lg text-muted-foreground">
                      <p>Intuitive navigation</p>
                      <p>Responsive layouts</p>
                      <p>Modern aesthetics</p>
                      <p>Accessible design</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 md:gap-10 pt-6 md:pt-8">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/04</div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Delivery</h3>
                    <div className="space-y-1 text-base md:text-lg text-muted-foreground">
                      <p>Design System</p>
                      <p>User Testing</p>
                      <p>UI Implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Define Section - 01 */}
        <section ref={defineContentAnim.ref} className={`relative py-10 md:py-24 transition-all duration-700 ${defineContentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  Analysis of the existing Rural Land Marketplace revealed key features users valued most, along with critical pain points.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-primary">Search Functionality:</strong> Users relied on search filters for property type, acreage, price, and location, but the interface was cluttered and confusing.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Map View:</strong> The map was a critical tool for browsing properties by location, but it felt disconnected from the main search experience.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Property Listings:</strong> Detailed listings provided comprehensive information, but navigation between views was cumbersome.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Mobile Experience:</strong> Nearly unusable on mobile devices, despite a growing number of users accessing the platform on phones and tablets.
                  </p>
                  
                  <div className="p-4 md:p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Summary of Analysis</h3>
                    <p>Retain core search and map functionality while dramatically simplifying the interface.</p>
                    <p className="mt-2">Prioritize mobile-first design and seamless integration between search and map views.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Layout - 7 Images */}
            <div ref={defineGalleryRef} className="mt-8 md:mt-32">
              {/* Mobile: Horizontal Scroll Gallery */}
              <div className="flex md:hidden overflow-x-scroll snap-x snap-mandatory gap-3 pb-4 -mx-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {galleryImages.map((img, idx) => <button key={idx} onClick={() => openGallery(idx)} className="min-w-[calc(100vw-48px)] h-[400px] snap-center rounded-xl overflow-hidden shadow-card hover:scale-[1.02] transition-transform flex-shrink-0">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>)}
              </div>
              
              {/* Tablet/Desktop: Bento Grid */}
              <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                {/* Image 1 - Large */}
                <button onClick={() => openGallery(0)} className="col-span-2 md:col-span-4 lg:col-span-3 row-span-2 rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer">
                  <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 2 - Tall */}
                <button onClick={() => openGallery(1)} className="col-span-2 md:col-span-4 lg:col-span-3 row-span-2 rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.05s'
              }}>
                  <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 3 - Medium */}
                <button onClick={() => openGallery(2)} className="col-span-1 md:col-span-2 row-span-1 rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.1s'
              }}>
                  <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 4 - Medium */}
                <button onClick={() => openGallery(3)} className="col-span-1 md:col-span-2 row-span-1 rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.15s'
              }}>
                  <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 5 - Wide */}
                <button onClick={() => openGallery(4)} className="col-span-2 md:col-span-4 lg:col-span-2 row-span-1 rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.2s'
              }}>
                  <img src={galleryImages[4].src} alt={galleryImages[4].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 6 - Full Height */}
                <button onClick={() => openGallery(5)} className="col-span-1 md:col-span-2 row-span-2 rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.25s'
              }}>
                  <img src={galleryImages[5].src} alt={galleryImages[5].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 7 - Large */}
                <button onClick={() => openGallery(6)} className="col-span-2 md:col-span-4 row-span-2 rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer" style={{
                animationDelay: '0.3s'
              }}>
                  <img src={galleryImages[6].src} alt={galleryImages[6].alt} className="w-full h-full object-cover" />
                </button>
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
                    We surveyed <strong className="text-primary">45</strong> land buyers and sellers about their property search experience. <strong className="text-primary">38</strong> responded with insights that guided our redesign.
                  </p>
                </div>
              </div>

              {/* Right Columns - Charts (2 columns) */}
              <div ref={discoveryStatsAnim.ref} className={`lg:col-span-2 space-y-4 md:space-y-8 transition-all duration-700 ${discoveryStatsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Statistics */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-8 items-center">
                  {/* 28% Satisfaction */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient1-rural" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(220 100% 65%)" />
                          <stop offset="100%" stopColor="hsl(220 100% 80%)" />
                        </linearGradient>
                        <filter id="glow1-rural">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Background circle */}
                      <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      {/* Progress circle - 28% */}
                      <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient1-rural)" strokeWidth="8" strokeDasharray="439.8" strokeDashoffset={439.8 * (1 - 0.28)} strokeLinecap="round" transform="rotate(-90 80 80)" filter="url(#glow1-rural)" />
                      <text x="80" y="75" textAnchor="middle" className="text-2xl font-bold" fill="hsl(var(--foreground))">28%</text>
                      <text x="80" y="95" textAnchor="middle" className="text-xs" fill="hsl(var(--muted-foreground))">Satisfied</text>
                    </svg>
                    <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Users satisfied with current search experience</p>
                  </div>

                  {/* 65% Mobile Usage */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient2-rural" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(280 100% 70%)" />
                          <stop offset="100%" stopColor="hsl(280 100% 85%)" />
                        </linearGradient>
                        <filter id="glow2-rural">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient2-rural)" strokeWidth="8" strokeDasharray="439.8" strokeDashoffset={439.8 * (1 - 0.65)} strokeLinecap="round" transform="rotate(-90 80 80)" filter="url(#glow2-rural)" />
                      <text x="80" y="75" textAnchor="middle" className="text-2xl font-bold" fill="hsl(var(--foreground))">65%</text>
                      <text x="80" y="95" textAnchor="middle" className="text-xs" fill="hsl(var(--muted-foreground))">Mobile</text>
                    </svg>
                    <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Users accessing platform on mobile devices</p>
                  </div>

                  {/* 82% Map Usage */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="gradient3-rural" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(340 100% 65%)" />
                          <stop offset="100%" stopColor="hsl(340 100% 80%)" />
                        </linearGradient>
                        <filter id="glow3-rural">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient3-rural)" strokeWidth="8" strokeDasharray="439.8" strokeDashoffset={439.8 * (1 - 0.82)} strokeLinecap="round" transform="rotate(-90 80 80)" filter="url(#glow3-rural)" />
                      <text x="80" y="75" textAnchor="middle" className="text-2xl font-bold" fill="hsl(var(--foreground))">82%</text>
                      <text x="80" y="95" textAnchor="middle" className="text-xs" fill="hsl(var(--muted-foreground))">Map</text>
                    </svg>
                    <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Users relying on map view for property search</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Quotes */}
            <div ref={quotesAnim.ref} className={`space-y-6 md:space-y-8 transition-all duration-700 ${quotesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">What Users Said</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "The search filters are so confusing. I just want to find land near me, but I have to click through so many options."
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Land Buyer</p>
                </div>
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "I love the map view, but it feels separate from everything else. I wish I could search directly on the map."
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Real Estate Agent</p>
                </div>
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "On my phone, it's almost impossible to use. The buttons are too small and the layout doesn't fit my screen."
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Mobile User</p>
                </div>
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                    "The platform has everything I need, but the interface looks outdated and feels clunky to navigate."
                  </p>
                  <p className="text-sm font-semibold text-foreground">— Property Seller</p>
                </div>
              </div>
            </div>

            {/* Persona Header Section */}
            <div className="mt-16 md:mt-32 max-w-6xl mx-auto text-center px-4">
              <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Creating in-depth user personas to better understand our users, goals & needs.
              </h2>
            </div>

            {/* User Persona Section - 2x2 Grid */}
            <div ref={discoveryPersonaRef} className="mt-12 md:mt-20">
              <div ref={personaAnim.ref} className={`transition-all duration-700 ${personaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl md:text-3xl font-semibold mb-4 md:mb-12 max-w-6xl mx-auto">User Persona</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-6xl mx-auto">
                {/* Top Left - Photo & Bio */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] bg-muted">
                    <img src={personaHeadshot} alt="Land Buyer Persona" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-2">Carlos M.</h3>
                    <p className="text-lg text-muted-foreground">38 years old, Land Buyer</p>
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
                      <span className="text-xl">Map-based property searching</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl">Mobile-friendly experience</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl">Improved search functionality</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl">Better image viewing on detail pages</span>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Carlos is looking for a seamless way to discover and explore land properties through an intuitive, location-first platform.
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
                        <div className="h-full bg-primary rounded-full absolute left-0 top-0" style={{
                          width: discoveryStatsAnim.isVisible ? '65%' : '0%',
                          transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          transitionDelay: '0s'
                        }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Extrovert</span>
                        <span>Introvert</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                        <div className="h-full bg-primary rounded-full absolute left-0 top-0" style={{
                          width: discoveryStatsAnim.isVisible ? '45%' : '0%',
                          transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          transitionDelay: '0.2s'
                        }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Feeling</span>
                        <span>Thinking</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                        <div className="h-full bg-primary rounded-full absolute left-0 top-0" style={{
                          width: discoveryStatsAnim.isVisible ? '75%' : '0%',
                          transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          transitionDelay: '0.4s'
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right - Quote */}
                <div className="bg-card rounded-2xl p-8 shadow-sm flex items-center">
                  <p className="text-xl text-muted-foreground leading-relaxed italic">
                    "I need to easily search properties on a map from my phone, with better filters and image galleries that actually work well."
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Section - 03 */}
        <section ref={designContentAnim.ref} className={`relative py-10 md:py-24 transition-all duration-700 ${designContentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  Creating a seamless, map-centric experience that simplifies property search and works beautifully on any device.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Map-First Interface:</strong> Redesigned the entire experience around the map view, making it the primary way users discover and explore properties.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Simplified Search:</strong> Streamlined filters with smart defaults and progressive disclosure, reducing cognitive load while maintaining power user capabilities.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Responsive Design:</strong> Built mobile-first with touch-optimized controls and adaptive layouts that work seamlessly across all devices.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Visual Refinement:</strong> Modern, clean aesthetic with improved typography, spacing, and visual hierarchy for better scannability.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4">Design Principles</h3>
                    <p>Location-first - the map is the heart of the experience.</p>
                    <p className="mt-2">Simplicity without sacrificing functionality.</p>
                    <p className="mt-2">Mobile-optimized for on-the-go property hunting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Viewport Design Image */}
        <div className="viewport-image-section">
          <div ref={userFlowRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="absolute top-0 left-0 right-0 z-20 px-6 pt-24">
            <div className="container mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-4xl font-bold text-foreground">User Flow</h3>
                </div>
                <div className="text-right">
                  
                </div>
              </div>
            </div>
          </div>
          {/* Desktop image - hidden on tablet and below */}
          <img src={landFlowDesktop} alt="User flow design" className="hidden lg:block w-full h-full object-cover object-left-top" />
          {/* Mobile/Tablet image - visible on tablet and below */}
          <img src={landFlowMobile} alt="User flow design" className="block lg:hidden w-full h-full object-cover object-center" />
        </div>

        {/* Design System Section */}
        <section className="relative py-12 md:py-24 bg-background flex items-center">
          <div ref={designSystemRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Design System</h2>
            
            {/* Bento Box Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 pb-8 md:pb-12">
              {/* Large Typography Card - Split into two columns */}
              <div className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Typography</h3>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-6 md:mb-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">Roboto</h1>
                    <p className="text-sm md:text-base text-muted-foreground">Font Family</p>
                  </div>
                  
                  {/* Two Column Layout for Text Styles */}
                  <div className="grid grid-cols-2 gap-6 md:gap-8">
                    {/* First Column */}
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <p className="text-3xl md:text-4xl font-semibold">H1</p>
                        <p className="text-sm text-muted-foreground">34px Semi Bold</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-semibold">H2</p>
                        <p className="text-sm text-muted-foreground">28px Semi Bold</p>
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-medium">H3</p>
                        <p className="text-sm text-muted-foreground">24px Medium</p>
                      </div>
                      <div>
                        <p className="text-lg md:text-xl font-medium">H4</p>
                        <p className="text-sm text-muted-foreground">20px Medium</p>
                      </div>
                    </div>
                    
                    {/* Second Column */}
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <p className="text-base md:text-lg font-semibold">Subtitle</p>
                        <p className="text-sm text-muted-foreground">18px Semi Bold</p>
                      </div>
                      <div>
                        <p className="text-base md:text-lg">Body</p>
                        <p className="text-sm text-muted-foreground">16px Regular</p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base font-medium">Caption</p>
                        <p className="text-sm text-muted-foreground">14px Medium</p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base">Small</p>
                        <p className="text-sm text-muted-foreground">12px Regular</p>
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
                    backgroundColor: '#006D31'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-base mb-1">Land Green</p>
                        <p className="text-xs opacity-80">#006D31</p>
                        <p className="text-xs opacity-60 mt-1">Primary</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#155443'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Deep Green</p>
                        <p className="text-xs opacity-80">#155443</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#0E7080'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Blue Spruce</p>
                        <p className="text-xs opacity-80">#0E7080</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#A82445'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Raspberry</p>
                        <p className="text-xs opacity-80">#A82445</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-4 flex items-end" style={{
                    backgroundColor: '#AF5A1D'
                  }}>
                      <div className="text-white">
                        <p className="font-semibold text-xs">Chestnut</p>
                        <p className="text-xs opacity-80">#AF5A1D</p>
                      </div>
                    </div>
                  </div>
                    </div>

                    {/* Icons Card */}
                    <div className="bg-card border border-border rounded-lg p-4 md:p-6 flex-1">
                      <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Icons</h3>
                      <div className="grid grid-cols-6 md:grid-cols-8 gap-2 md:gap-3">
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Search className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Filter className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Home className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Heart className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Star className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Camera className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Download className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Upload className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Trash2 className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Edit className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Share2 className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <ChevronLeft className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Menu className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <X className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Check className="w-5 h-5" />
                        </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Minus className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Plus className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Columns2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section - 04 */}
        <section ref={deliveryContentAnim.ref} className={`relative py-10 md:py-24 bg-card/30 transition-all duration-700 ${deliveryContentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={deliveryRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between mb-4 md:mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold flex-1">Delivery</h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 text-right shrink-0">/04</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-xl text-muted-foreground">
                  Implementing a comprehensive design system and ensuring seamless handoff to development teams for a successful relaunch.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Design System:</strong> Created a comprehensive design system with reusable components, ensuring consistency across the entire platform.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Developer Handoff:</strong> Provided detailed Figma files with design specs, component libraries, and interactive prototypes for smooth implementation.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Quality Assurance:</strong> Conducted extensive testing across devices, browsers, and screen sizes to ensure flawless execution.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Launch Support:</strong> Worked closely with the development team during the rollout to address edge cases and refine interactions.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4">Deliverables</h3>
                    <p>Complete design system with 60+ components and detailed documentation.</p>
                    <p className="mt-2">High-fidelity prototypes for all major flows and responsive breakpoints.</p>
                    <p className="mt-2">User testing reports with insights and recommendations for continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Translating Wireframes to UI - Full Screen Image Section */}
        <section className="w-full">
          <div className="px-6 py-6 md:py-16">
            <div className="container mx-auto max-w-[1440px]">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Translating Wireframes to UI</h3>
            </div>
          </div>
          <div className="relative w-full h-screen max-h-[600px] lg:max-h-[850px] overflow-hidden">
            <video 
              ref={videoRef}
              src={uiWireframeVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-[16%_center] scale-75 md:object-[20%_center] md:scale-100 lg:object-center lg:scale-95"
            />
            
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
          </div>
        </section>

        {/* Search Section - 05 */}
        <section className="relative py-10 md:py-24 bg-background">
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between mb-4 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold flex-1">Search</h2>
              <span className="text-xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 text-right shrink-0">/05</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-base md:text-xl text-muted-foreground">
                  The new search experience became the cornerstone of the platform redesign, prioritizing speed, clarity, and seamless integration with map browsing.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <p>
                    <strong className="text-primary">Simplified Filters:</strong> Streamlined search controls for property type, acreage, price range, and location with an intuitive interface that reduces cognitive load.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Map-First Approach:</strong> Integrated search directly into the map view, allowing users to draw search boundaries, explore by region, and see results in real-time.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Mobile-Optimized:</strong> Touch-friendly controls and gestures designed specifically for mobile devices, with quick filters accessible via bottom sheet navigation.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Smart Suggestions:</strong> Auto-complete and location-based suggestions help users find properties faster, with saved searches and alerts for new listings.
                  </p>
                  
                  <div className="p-4 md:p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Key Impact</h3>
                    <p>Search satisfaction increased from 28% to 76%, with users completing property searches 40% faster on average.</p>
                    <p className="mt-2">Mobile search engagement grew by 85%, making it the primary way users discovered properties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Bleed Search UI Image */}
        <section className="w-full">
          <img 
            src={searchUiComp} 
            alt="Search UI components showing filters, map layers, and property search interface" 
            className="w-full h-auto"
          />
        </section>

        {/* Results Section */}
        <section ref={resultsAnim.ref} className={`min-h-screen flex items-center justify-center py-10 md:py-24 transition-all duration-700 ${resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1440px] text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Outcomes</h2>
            <p className="text-base text-muted-foreground mb-8 md:mb-16">
              After the relaunch, the Rural Land Marketplace saw significant improvements across all key metrics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-sm space-y-3 md:space-y-4 text-left">
                <div className="text-lg md:text-xl font-bold text-muted-foreground mb-2">01</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Property Views</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Significant increase in property views and engagement.
                </p>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  +45%
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-sm space-y-3 md:space-y-4 text-left">
                <div className="text-lg md:text-xl font-bold text-muted-foreground mb-2">02</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Mobile Engagement</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Mobile users spending more time browsing properties.
                </p>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  +60%
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-sm space-y-3 md:space-y-4 text-left">
                <div className="text-lg md:text-xl font-bold text-muted-foreground mb-2">03</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">User Satisfaction</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Post-launch user satisfaction score.
                </p>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  92%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Showcase */}
        <section ref={showcaseAnim.ref} className={`min-h-screen flex items-center justify-center py-12 md:py-24 bg-card/30 transition-all duration-700 ${showcaseAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-[1600px] space-y-6 md:space-y-12">
            <div className="w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-glow">
              <img src="/placeholder.svg" alt="Final showcase 1" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="w-full aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-card">
                <img src="/placeholder.svg" alt="Final showcase 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-card">
                <img src="/placeholder.svg" alt="Final showcase 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Next Project */}
        <section ref={navigationAnim.ref} className={`py-24 border-t border-border transition-all duration-700 ${navigationAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

export default RuralLandMarketplaceProject;
