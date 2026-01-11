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
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { StickyNavHeader } from "@/components/StickyNavHeader";
import ProjectSectionNav from "@/components/ProjectSectionNav";
import { cn } from "@/lib/utils";
import userFlowDesktop from "@/assets/NetworkFlow.jpg";
import userFlowMobile from "@/assets/Network-Flow-mobile-2.jpg";
import locateListingImage from "@/assets/locate-listing-new.png";
import addListingLocationGif from "@/assets/add-listing-location.gif";
import addListingFullGif from "@/assets/add-listing-full.gif";
import leadsGif from "@/assets/leads-transparent.gif";
import audit1 from "@/assets/MH-Audit-1-2.webp";
import brainstorm1 from "@/assets/mh-brainstorm-1-2.webp";
import brainstorm4 from "@/assets/mh-brainstorm-4-2.webp";
import brainstorm5 from "@/assets/mh-brainstorm-5-2.webp";
import brainstorm6 from "@/assets/mh-brainstorm-6-2.webp";
import brainstorm7 from "@/assets/mh-brainstorm-7.webp";
import brainstorm8 from "@/assets/mh-brainstorm-8-2.webp";
import benFHeadshot from "@/assets/ben-f-headshot.webp";
import dashboardHero from "@/assets/dashboard-home.webp";
import analyticsTable1 from "@/assets/analytics-table-1.webp";
import analyticsTable2 from "@/assets/analytics-table-2.webp";
import analyticsTable3 from "@/assets/analytics-table-3.webp";
import analyticsTable4 from "@/assets/analytics-table-4.webp";
import HubPromo1 from "@/assets/Hub-Promo-1.png";
import HubPromo2 from "@/assets/Hub-Promo-2.png";
import AnalyticsCore2 from "@/assets/Analytics-Core-2.png";
import AnalyticsSuggestPort from "@/assets/Analytics-Suggest-Port.png";
import HubMobileTablet from "@/assets/Hub-Mobile-Tablet.png";
import HubPromo2phone from "@/assets/Hub-Promo-2phone.png";
import AnalyticsCore2Full from "@/assets/Analytics-Core-2-2.png";
import MHShowcaseLaptop from "@/assets/MH-Showcase-Laptopmulti-2.png";
import MHShowcase2 from "@/assets/MH-showcase-2.png";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileBankingProject = () => {
  const isMobile = useIsMobile();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [designLayout, setDesignLayout] = useState<1 | 2 | 3>(1);
  const [currentAnalyticsSlide, setCurrentAnalyticsSlide] = useState(0);
  const [analyticsApi, setAnalyticsApi] = useState<CarouselApi>();

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
  const addEditListingRef = useRef<HTMLDivElement>(null);
  const listingProcessRef = useRef<HTMLDivElement>(null);
  const leadsRef = useRef<HTMLDivElement>(null);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
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
  }, {
    id: 'delivery-listing',
    section: 'Delivery',
    subsection: 'Add & Edit a Listing',
    number: '/04',
    ref: addEditListingRef
  }, {
    id: 'delivery-process',
    section: 'Delivery',
    subsection: 'Listing Creation Process',
    number: '/04',
    ref: listingProcessRef
  }, {
    id: 'delivery-leads',
    section: 'Delivery',
    subsection: 'Managing Leads',
    number: '/04',
    ref: leadsRef
  }, {
    id: 'delivery-analytics',
    section: 'Delivery',
    subsection: 'Listing Analytics',
    number: '/04',
    ref: analyticsRef
  }, {
    id: 'outcomes',
    section: 'Outcomes',
    subsection: '',
    number: '/05',
    ref: resultsRef
  }, {
    id: 'showcase',
    section: 'Showcase',
    subsection: '',
    number: '/06',
    ref: showcaseRef
  }, {
    id: 'next-project',
    section: 'Next Project',
    subsection: '',
    number: '',
    ref: nextProjectRef
  }];

  // Use the unified navigation hook
  const { currentSectionIndex, setCurrentSectionIndex, stickyHeader } = useProjectNavigation(sections);

  // Array of gallery images
  const galleryImages = [{
    src: audit1,
    alt: "Marketing Hub Audit - Whiteboard session"
  }, {
    src: brainstorm1,
    alt: "Brainstorm session - Design sketches"
  }, {
    src: brainstorm4,
    alt: "Brainstorm whiteboard - Feature planning"
  }, {
    src: brainstorm5,
    alt: "Team brainstorm session"
  }, {
    src: brainstorm6,
    alt: "Brainstorm overview - Full board"
  }, {
    src: brainstorm7,
    alt: "Marketing Hub mission and goals"
  }, {
    src: brainstorm8,
    alt: "Presentation session"
  }];
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

  // Analytics carousel effect
  useEffect(() => {
    if (!analyticsApi) return;
    analyticsApi.on("select", () => {
      setCurrentAnalyticsSlide(analyticsApi.selectedScrollSnap());
    });
  }, [analyticsApi]);

  // Analytics images data
  const analyticsImages = [{
    src: analyticsTable1,
    alt: "Analytics dashboard showing listing exposure and metrics"
  }, {
    src: analyticsTable2,
    alt: "Analytics chart displaying listing exposure over time"
  }, {
    src: analyticsTable3,
    alt: "Analytics overview with interaction metrics and location map"
  }, {
    src: analyticsTable4,
    alt: "Analytics visitor details and listing history"
  }];

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
  // Analytics callout animations
  const analyticsCallout1Anim = useScrollAnimation({ threshold: 0.2 });
  const analyticsCallout2Anim = useScrollAnimation({ threshold: 0.2 });
  const analyticsCallout3Anim = useScrollAnimation({ threshold: 0.2 });
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
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">Dashboard Design</span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Marketing Hub<br />
                Client Dashboard
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">A modern CMS experience with intuitive navigation and seamless transactions. Designed for simplicity and security.</p>
              <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Role</span>
                  <p className="font-semibold text-sm md:text-base">Lead Product Designer</p>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Timeline</span>
                  <p className="font-semibold text-sm md:text-base">3 months</p>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground">Year</span>
                  <p className="font-semibold text-sm md:text-base">2024</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6 overflow-visible">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Figma</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">Maze</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">AI Prototyping</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background border border-border text-xs md:text-sm font-medium">UI/UX Design</span>
              </div>
            </div>
          </div>
          
          {/* Right: Image - 50vw width on desktop, full on mobile */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative">
            <img 
              src={dashboardHero} 
              alt="Marketing Hub Dashboard" 
              className="w-full h-full object-cover animate-fade-in"
              style={{ animationDuration: '0.8s' }}
            />
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">
        {/* Background Section */}
        <section ref={overviewAnim.ref} className={`relative min-h-[60vh] flex items-center justify-center py-10 md:py-16 transition-all duration-700 ${overviewAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={overviewRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Background</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The Property Control Center (PCC) was originally built as a one-stop solution for rural real estate professionals to manage property listings, track leads, and monitor analytics.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Over time, however, the platform became outdated, with a non-responsive design and inefficient workflows that frustrated users. Recognizing the need for modernization, our team embarked on a complete redesign, focusing on usability, responsiveness, and customization for rural-specific needs.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Through extensive user research and iterative design, we developed a solution 
                  that increased user engagement by 45% and reduced transaction time by 60%.
                </p>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Project Highlights</h2>
                <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Comprehensive audit of the existing system to identify valuable features and pain points.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>A responsive, mobile-friendly interface tailored for seamless usage across devices.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Improved workflows for managing listings, leads, analytics, and billing.</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>A user-centered design process incorporating feedback from rural real estate agents.</span>
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
                <img src={HubPromo1} alt="Marketing Hub Dashboard" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img src={HubPromo2} alt="Marketing Hub Map View" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section ref={processAnim.ref} className={`relative min-h-screen flex items-center justify-center py-10 md:py-24 bg-card/30 transition-all duration-700 ${processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={processRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Column - Title & Description */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">Design Process</h2>
                <p className="text-base md:text-xl text-muted-foreground">
                  A structured approach combining user research, iterative design, and continuous testing to deliver an intuitive and effective solution.
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
                      <p>Ease of use</p>
                      <p>Competitor analysis</p>
                      <p>Understanding product wants</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 md:gap-10 py-6 md:py-8 border-b border-border">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary flex-shrink-0">/02</div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Discovery</h3>
                    <div className="space-y-1 text-base md:text-lg text-muted-foreground">
                      <p>User Surveys</p>
                      <p>Audit of current systems</p>
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
                      <p>Ease of use</p>
                      <p>Accessible</p>
                      <p>Desirable</p>
                      <p>Intuitive</p>
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
        <section ref={defineContentAnim.ref} className={`relative py-10 md:py-24 transition-all duration-700 ${defineContentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={defineRef} className="absolute top-0 left-0 w-full h-1" />

          <div className="container mx-auto max-w-[1440px]">
            <div className="flex items-baseline justify-between gap-4 mb-4 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">Define</h2>
              <span className="text-3xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block">/01</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-base md:text-xl text-muted-foreground">
                  Audit of the Existing System revealed these were the most used, and valuable features to users.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
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
                  
                  <div className="p-4 md:p-6 rounded-xl bg-card/50 border-2 border-primary/20">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Summary of Audit</h3>
                    <p>Retain and improve core features like listing upload, management, leads, and analytics.</p>
                    <p className="mt-2">Address navigation, usability, and responsiveness issues.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Layout - 7 Images */}
            <div ref={defineGalleryRef} className="mt-8 md:mt-32">
              {/* Mobile: 2-Column Grid Gallery */}
              <div className="md:hidden relative">
                <div className="grid grid-cols-2 gap-3">
                  {galleryImages.map((img, idx) => <button key={idx} onClick={() => openGallery(idx)} className="aspect-video rounded-xl overflow-hidden shadow-card hover:scale-[1.02] transition-transform">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>)}
                </div>
                {/* Mobile CTA to open gallery */}
                <button 
                  onClick={() => openGallery(0)} 
                  className="w-full mt-4 py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium text-primary bg-transparent border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <span>View</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
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
            {/* Section Header - Title and Number on same row for tablet+ */}
            <div className="flex items-baseline justify-between gap-4 mb-8 md:mb-16">
              <h2 className="text-3xl md:text-7xl lg:text-8xl font-bold">Discovery</h2>
              <span className="text-3xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block">/02</span>
            </div>
            
            <div ref={discoveryInterviewsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 mb-8 md:mb-32 items-stretch">
              {/* Left Column - User Interviews (1 column) */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">User Interviews</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We surveyed <strong className="text-primary">30</strong> real estate agents about their current platform experience. <strong className="text-primary">22</strong> responded with valuable feedback that shaped our design direction.
                  </p>
                </div>
              </div>

              {/* Right Columns - Charts (2 columns) */}
              <div ref={discoveryStatsAnim.ref} className={`lg:col-span-2 space-y-4 md:space-y-8 transition-all duration-700 ${discoveryStatsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Statistics */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-8 items-center">
                  {/* 36% Satisfaction */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
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
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="url(#gradient1)" strokeWidth="6" strokeLinecap="round" strokeDasharray="188.5" strokeDashoffset={discoveryStatsAnim.isVisible ? "120.6" : "188.5"} filter="url(#glow1)" style={{
                      transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)"
                    }} />
                    </svg>
                    <div className="text-5xl font-normal mb-3">36%</div>
                    <p className="text-base text-muted-foreground">Overall user satisfaction</p>
                  </div>

                  {/* 24% Confidence */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
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
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="url(#gradient2)" strokeWidth="6" strokeLinecap="round" strokeDasharray="188.5" strokeDashoffset={discoveryStatsAnim.isVisible ? "143.3" : "188.5"} filter="url(#glow2)" style={{
                      transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s"
                    }} />
                    </svg>
                    <div className="text-5xl font-normal mb-3">24%</div>
                    <p className="text-base text-muted-foreground">Confidence in listing metrics</p>
                  </div>

                  {/* 91% Difficult Management */}
                  <div className="text-center">
                    <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 transition-all duration-700 hover:scale-110" viewBox="0 0 160 160">
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
                      <path d="M 20 140 A 60 60 0 0 1 140 140" fill="none" stroke="url(#gradient3)" strokeWidth="6" strokeLinecap="round" strokeDasharray="188.5" strokeDashoffset={discoveryStatsAnim.isVisible ? "17" : "188.5"} filter="url(#glow3)" style={{
                      transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s"
                    }} />
                    </svg>
                    <div className="text-5xl font-normal mb-3">91%</div>
                    <p className="text-base text-muted-foreground">Difficulty managing listings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Pain Point Quotes */}
            <div ref={quotesAnim.ref} className={`mt-8 md:mt-24 transition-all duration-700 ${quotesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-6xl mx-auto">
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"There is no save function when I am creating a listing."</p>
                </div>
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"I tried to use from my phone and it was impossible. There should be an app."</p>
                </div>
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"I thought I wasn't receiving any leads only to find out I just didn't know where they were going."</p>
                </div>
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"Listing performance reports are not useful. What do these numbers mean?"</p>
                </div>
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"Navigation is hard to 'navigate'"</p>
                </div>
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"The menus are super confusing. I have to click around a bunch just to edit a listing or check on a lead. Nothing is where I expect it to be."</p>
                </div>
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"Uploading a new property is such a slow process. It feels like there are millions of steps, and there's no way to speed it up if I have a lot of listings."</p>
                </div>
                <div className="bg-card rounded-lg md:rounded-xl p-3 md:p-8 shadow-sm">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">"The site feels really outdated and cluttered. It's hard to find what I'm looking for without getting frustrated."</p>
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
                    <img src={benFHeadshot} alt="Rural Land Agent" className="w-full h-full object-cover" />
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
                    "Content management is very important to me. I need to be able to effectively manage inventory, post, track leads and analyze the markets."
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
            {/* Section Header - Title and Number on same row for tablet+ */}
            <div className="flex items-baseline justify-between gap-4 mb-4 md:mb-8">
              <h2 className="text-3xl md:text-7xl lg:text-8xl font-bold">Design</h2>
              <span className="text-3xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block">/03</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-xl text-muted-foreground">
                  Creating an intuitive, modern interface that streamlines workflows and enhances user experience.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
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

        {/* Full Viewport Design Image */}
        <div className="viewport-image-section">
          <div ref={userFlowRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="absolute top-4 left-4 md:top-0 md:left-0 md:right-0 z-20 md:px-6 md:pt-24">
            <div className="container mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-foreground">User Flow</h3>
                </div>
                <div className="text-right">
                  
                </div>
              </div>
            </div>
          </div>
          {/* Desktop/Tablet image - hidden on mobile */}
          <img src={userFlowDesktop} alt="User flow design" className="hidden md:block w-full h-full object-cover object-left-top" />
          {/* Mobile image - visible on mobile only */}
          <img src={userFlowMobile} alt="User flow design" className="block md:hidden w-full h-full object-cover object-center" />
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
                          <Home className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Search className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Bell className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                          <Settings className="w-5 h-5" />
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
                          <MapPin className="w-5 h-5" />
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
                          <Filter className="w-5 h-5" />
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
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Columns2 className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Settings className="w-5 h-5" />
                    </div>
                    <div className="aspect-square bg-muted/50 rounded flex items-center justify-center text-foreground/60 hover:bg-muted hover:text-foreground transition-all">
                      <Heart className="w-5 h-5" />
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
            {/* Section Header - Title and Number on same row for tablet+ */}
            <div className="flex items-baseline justify-between gap-4 mb-4 md:mb-8">
              <h2 className="text-3xl md:text-7xl lg:text-8xl font-bold">Delivery</h2>
              <span className="text-3xl md:text-6xl lg:text-7xl font-bold font-mono opacity-20 hidden md:block">/04</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-12">
                <p className="text-xl text-muted-foreground">
                  Implementing a comprehensive design system and ensuring seamless handoff to development teams.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:space-y-12">
                
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground">
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

        {/* Add & Edit a Listing Section */}
        <section className="relative w-full overflow-hidden">
          <div ref={addEditListingRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Left Column - Phone Mockups (full width on mobile, 50vw on desktop) */}
            <div className="w-full lg:w-[50vw] relative overflow-hidden bg-background min-h-[300px] lg:min-h-auto">
              <img src={locateListingImage} alt="Add and Edit Listing Flow" className="w-full h-full object-contain object-center lg:object-left" />
              {/* Gradient overlay - only on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-48 lg:hidden bg-gradient-to-t from-background/100 via-background/60 via-60% to-transparent pointer-events-none" />
            </div>

            {/* Section number - top right on desktop only */}
            <div className="absolute top-6 right-6 hidden lg:block">
              <span className="text-6xl lg:text-7xl font-bold font-mono opacity-20">/04</span>
            </div>

            {/* Right Column - Content - Overlaps on mobile */}
            <div className="w-full lg:w-[50vw] flex items-center px-6 lg:px-16 py-6 md:py-24 bg-background relative -mt-20 lg:mt-0 z-10 rounded-t-3xl lg:rounded-none">
              <div className="space-y-4 md:space-y-8 max-w-2xl w-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Add & Edit a Listing</h2>
                
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Address search with geolocation APIs for auto-completion and verification.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Drag-and-drop photo upload with automatic optimization.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Rich text editor for property descriptions.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Categorized amenities tailored to rural needs.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Auto-save functionality to prevent data loss during interruptions.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>Draft states allowing users to save progress and return later to complete listings.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Process GIFs Section */}
        <section className="relative py-10 md:py-24 border-t border-b border-border/50">
          <div ref={listingProcessRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="mb-8 md:mb-12 text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Listing Creation Process</h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-3 md:mt-4">Interactive flows demonstrating the streamlined property listing experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto py-2 md:py-4">
              {/* Location Selection GIF */}
              <div className="flex flex-col gap-4">
                <p className="text-base text-muted-foreground text-center">Location Property</p>
                <div className="w-full max-h-[600px] rounded-xl md:rounded-2xl overflow-hidden bg-card/50 flex items-center justify-center">
                  <img src={addListingLocationGif} alt="Add listing location selection process" className="w-full h-full object-contain" />
                </div>
              </div>
              {/* Full Listing Form GIF */}
              <div className="flex flex-col gap-4">
                <p className="text-base text-muted-foreground text-center">Adding Listing Details</p>
                <div className="w-full max-h-[600px] rounded-xl md:rounded-2xl overflow-hidden bg-card/50 flex items-center justify-center">
                  <img src={addListingFullGif} alt="Complete listing creation process" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Management Section */}
        <section className="relative py-10 md:py-24">
          <div ref={leadsRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
              {/* Left Column - Text Content */}
              <div className="space-y-3 md:space-y-6">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">Managing Leads</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The Leads section is designed with a focused, streamlined approach—helping users concentrate on one task at a time. Whether reviewing new inquiries, checking contact details, or tracking engagement history, the layout guides you step by step so nothing gets lost in the shuffle.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  It's a clear, actionable space to manage your pipeline without distractions.
                </p>
              </div>

              {/* Right Column - Section Number */}
              <div className="flex items-start justify-center lg:justify-end hidden md:flex">
                <p className="text-3xl md:text-6xl lg:text-7xl font-bold text-muted-foreground/20">/04</p>
              </div>
            </div>

            {/* Full Width GIF Row - Full width on mobile */}
            <div className="w-full mt-4 md:mt-12 -mx-2 md:mx-0">
              <div className="w-full md:max-w-[85%] md:mx-auto md:rounded-2xl overflow-hidden shadow-card ring-2 ring-inset ring-background">
                <img src={leadsGif} alt="Lead management interface demonstration" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Listing Analytics Section - Stacked Callouts */}
        <section className="relative py-10 md:py-24 bg-card/30">
          <div ref={analyticsRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] px-6">
            {/* Section Header */}
            <div className="mb-8 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Listing Analytics</h3>
              <p className="text-base md:text-lg text-muted-foreground">Comprehensive insights and performance tracking for your property listings</p>
            </div>

            {/* Callout 1: Core Metrics & Monitoring */}
            <div 
              ref={analyticsCallout1Anim.ref}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-20 transition-all duration-700 ${analyticsCallout1Anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="space-y-6">
                <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                  Core Metrics
                </div>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">Track Performance at a Glance</h4>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The analytics dashboard consolidates every critical metric into a single view. Users can instantly see how many times their listing has appeared in search results, how many visitors clicked through to the details page, and how those numbers trend over time. By surfacing key performance indicators like lead volume and traffic sources upfront, users spend less time hunting for data and more time acting on insights that drive results.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">View Dashboard</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Track Leads</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Analyze Traffic</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative w-full cursor-pointer group">
                      <img src={AnalyticsCore2} alt="Analytics dashboard showing listing exposure and metrics" className="w-full h-auto max-h-[50vh] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-lg transition-colors duration-300" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img src={AnalyticsCore2} alt="Analytics dashboard showing listing exposure and metrics" className="max-w-full max-h-[90vh] object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Callout 2: Advanced Analysis (Reversed Layout) */}
            <div 
              ref={analyticsCallout2Anim.ref}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-20 transition-all duration-700 ${analyticsCallout2Anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center justify-center order-2 lg:order-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative w-full cursor-pointer group">
                      <img src={AnalyticsSuggestPort} alt="Analytics chart displaying listing exposure over time" className="w-full h-auto max-h-[50vh] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-lg transition-colors duration-300" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img src={AnalyticsSuggestPort} alt="Analytics chart displaying listing exposure over time" className="max-w-full max-h-[90vh] object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                  Advanced Analysis
                </div>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">Benchmark & Compare</h4>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Understanding performance in isolation only tells part of the story. The advanced analysis tools let users benchmark their listings against comparable properties, revealing where they stand in the market. A geographic heat-map visualizes buyer interest by region, while AI-powered suggestions offer actionable recommendations—like adding more photos or adjusting pricing—to improve visibility and engagement.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Compare Listings</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">View Heat-Map</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Get Suggestions</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Track Ad ROI</span>
                </div>
              </div>
            </div>

            {/* Callout 3: Flexibility & Access */}
            <div 
              ref={analyticsCallout3Anim.ref}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ${analyticsCallout3Anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="space-y-6">
                <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                  Flexibility & Access
                </div>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">Your Data, Your Way</h4>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Real estate professionals are rarely at a desk, so the analytics experience was designed for flexibility from the start. Users can filter data by custom date ranges to focus on the periods that matter most, export polished reports to share with clients or stakeholders, and access the full dashboard on mobile devices. Whether reviewing performance in the field or preparing for a client meeting, insights are always within reach.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Set Date Range</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Export Report</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm font-medium">Mobile Access</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative w-full cursor-pointer group">
                      <img src={HubMobileTablet} alt="Analytics overview with interaction metrics and location map" className="w-full h-auto max-h-[50vh] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-lg transition-colors duration-300" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img src={HubMobileTablet} alt="Analytics overview with interaction metrics and location map" className="max-w-full max-h-[90vh] object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        

        {/* Challenge Section */}
        

        {/* Solution Section */}
        

        {/* Results Section */}
        <section ref={resultsAnim.ref} className={`relative min-h-screen flex items-center justify-center py-6 md:py-16 transition-all duration-700 ${resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={resultsRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px] text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Outcomes</h2>
            <p className="text-base text-muted-foreground mb-8 md:mb-16">
              After deploying the redesigned dashboard, key metrics improved significantly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-sm space-y-3 md:space-y-4 text-left">
                <div className="text-lg md:text-xl font-bold text-muted-foreground mb-2">01</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">User Engagement</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Significantly Improved user engagement.
                </p>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  +69%
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-sm space-y-3 md:space-y-4 text-left">
                <div className="text-lg md:text-xl font-bold text-muted-foreground mb-2">02</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Active Users</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Indicated growing role in managing their listings.
                </p>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  +155%
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-sm space-y-3 md:space-y-4 text-left">
                <div className="text-lg md:text-xl font-bold text-muted-foreground mb-2">03</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">User Engagement</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Reduction in time spent on uploading new listings.
                </p>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  32%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Showcase */}
        <section ref={showcaseAnim.ref} className={`relative min-h-screen flex items-center justify-center py-12 md:py-24 transition-all duration-700 ${showcaseAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={showcaseRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1600px] space-y-6 md:space-y-12">
            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl">
              <img src={MHShowcaseLaptop} alt="Marketing Hub comprehensive view showing multiple screens and features" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl">
              <img src={MHShowcase2} alt="Marketing Hub mobile screens showing location, analytics, and leads management" className="w-full h-auto object-contain" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="w-full overflow-hidden rounded-xl md:rounded-2xl flex items-center justify-center">
                <img src={HubPromo2phone} alt="Mobile app showing location confirmation and property photos" className="w-full h-auto object-contain" />
              </div>
              <div className="w-full overflow-hidden rounded-xl md:rounded-2xl flex items-center justify-center">
                <img src={AnalyticsCore2Full} alt="Analytics dashboard with listing exposure metrics" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Next Project */}
        <section ref={navigationAnim.ref} className={`relative py-24 border-t border-border transition-all duration-700 ${navigationAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div ref={nextProjectRef} className="absolute top-0 left-0 w-full h-1" />
          <div className="container mx-auto max-w-[1440px]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Next Project</p>
                <h3 className="text-2xl font-bold">Rural Land Marketplace</h3>
              </div>
              <Link 
                to="/projects/rural-land-marketplace"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                <Button variant="outline" className="gap-2 w-full md:w-auto">
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

      {/* Sticky Section Navigation Arrows */}
      <ProjectSectionNav 
        sections={sections}
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
      />
    </div>;
};
export default MobileBankingProject;