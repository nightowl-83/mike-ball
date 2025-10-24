import { ArrowLeft, Layout, Columns2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";

const MobileBankingProject = () => {
  const [isColumnLayout, setIsColumnLayout] = useState(false);
  const [isDefineSticky, setIsDefineSticky] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const defineRef = useRef<HTMLDivElement>(null);

  // Array of 7 gallery images
  const galleryImages = Array.from({ length: 7 }, (_, i) => ({
    src: "/placeholder.svg",
    alt: `Gallery image ${i + 1}`
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDefineSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: [0], rootMargin: "-1px 0px 0px 0px" }
    );

    if (defineRef.current) {
      observer.observe(defineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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

  return <div className="min-h-screen bg-background">
      {/* Hero Section - Toggle between layouts */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Back Button & Layout Toggle */}
        <div className="absolute top-6 left-6 z-50 flex gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsColumnLayout(!isColumnLayout)}
            className="gap-2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground"
          >
            {isColumnLayout ? <Layout className="h-4 w-4" /> : <Columns2 className="h-4 w-4" />}
            {isColumnLayout ? "Full Width" : "2 Column"}
          </Button>
        </div>

        {!isColumnLayout ? (
          /* Full-Width Layout */
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
          </>
        ) : (
          /* 2-Column Layout */
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
          </div>
        )}
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">
        {/* Overview Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6 animate-fade-in">
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
              <div className="space-y-6 animate-fade-in">
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
        <section className="px-6 py-24">
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card animate-scale-in">
                <img src="/placeholder.svg" alt="Product shot 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <img src="/placeholder.svg" alt="Product shot 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-card/30">
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
                <div className="flex gap-10 pb-8 border-b border-border animate-fade-in">
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
                <div className="flex gap-10 py-8 border-b border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
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
                <div className="flex gap-10 py-8 border-b border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
                <div className="flex gap-10 pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
        <section className="relative px-6 py-24">
          <div ref={defineRef} className="absolute top-0 left-0 w-full h-1" />
          
          {/* Sticky Headers */}
          <div className={`sticky top-0 z-40 transition-all duration-300 ${
            isDefineSticky 
              ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-sm -mx-6 px-6 py-4' 
              : ''
          }`}>
            <div className={`container mx-auto max-w-[1440px] transition-all duration-300 ${
              isDefineSticky ? '' : 'pointer-events-none'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <h2 className={`font-bold transition-all duration-300 ${
                  isDefineSticky 
                    ? 'text-3xl md:text-4xl' 
                    : 'text-6xl md:text-7xl lg:text-8xl'
                }`}>
                  Define
                </h2>
                <div className="text-right">
                  <span className={`font-bold font-mono opacity-30 transition-all duration-300 ${
                    isDefineSticky 
                      ? 'text-2xl md:text-3xl' 
                      : 'text-6xl md:text-7xl'
                  }`}>
                    /01
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">Define</h2>
                <p className="text-xl text-muted-foreground">
                  Audit of the Existing System revealed these were the most used, and valuable features to users.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                <div className="text-right">
                  <span className="text-6xl md:text-7xl font-bold font-mono opacity-30">/01</span>
                </div>
                
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Listing Upload:</strong> Users could upload property information, photos, and descriptions, though the interface was not intuitive and cluttered.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Listing Manager:</strong> Allowed users to view, edit, and manage listing statuses (e.g., sold, pending).
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Lead Tracking:</strong> Provided basic lead inquiry details.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Listing Analytics:</strong> Offered performance metrics such as views and inquiries.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-foreground mb-4">Summary of Audit</h3>
                    <p>Retain and improve core features like listing upload, management, leads, and analytics.</p>
                    <p className="mt-2">Address navigation, usability, and responsiveness issues.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Layout - 7 Images */}
            <div className="container mx-auto max-w-[1440px] mt-24">
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[200px]">
                {/* Image 1 - Large */}
                <button
                  onClick={() => openGallery(0)}
                  className="col-span-4 md:col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 2 - Tall */}
                <button
                  onClick={() => openGallery(1)}
                  className="col-span-4 md:col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer"
                  style={{ animationDelay: '0.05s' }}
                >
                  <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 3 - Medium */}
                <button
                  onClick={() => openGallery(2)}
                  className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer"
                  style={{ animationDelay: '0.1s' }}
                >
                  <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 4 - Medium */}
                <button
                  onClick={() => openGallery(3)}
                  className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer"
                  style={{ animationDelay: '0.15s' }}
                >
                  <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 5 - Wide */}
                <button
                  onClick={() => openGallery(4)}
                  className="col-span-4 md:col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer"
                  style={{ animationDelay: '0.2s' }}
                >
                  <img src={galleryImages[4].src} alt={galleryImages[4].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 6 - Medium */}
                <button
                  onClick={() => openGallery(5)}
                  className="col-span-2 md:col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer"
                  style={{ animationDelay: '0.25s' }}
                >
                  <img src={galleryImages[5].src} alt={galleryImages[5].alt} className="w-full h-full object-cover" />
                </button>
                
                {/* Image 7 - Large */}
                <button
                  onClick={() => openGallery(6)}
                  className="col-span-4 md:col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-card animate-fade-in hover:scale-[1.02] transition-transform cursor-pointer"
                  style={{ animationDelay: '0.3s' }}
                >
                  <img src={galleryImages[6].src} alt={galleryImages[6].alt} className="w-full h-full object-cover" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-card/30">
          <div className="container mx-auto max-w-[1600px]">
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-glow animate-fade-in">
              <img src="/placeholder.svg" alt="Full width showcase" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card animate-scale-in order-2 lg:order-1">
                <img src="/placeholder.svg" alt="Challenge" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6 animate-fade-in order-1 lg:order-2">
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
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-card/30">
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
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
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card animate-scale-in">
                <img src="/placeholder.svg" alt="Solution" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="container mx-auto max-w-[1440px] text-center">
            <h2 className="text-4xl font-bold mb-16 animate-fade-in">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4 animate-scale-in">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  45%
                </div>
                <p className="text-muted-foreground">
                  Increase in user engagement
                </p>
              </div>
              <div className="space-y-4 animate-scale-in" style={{
              animationDelay: '0.1s'
            }}>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  60%
                </div>
                <p className="text-muted-foreground">
                  Reduction in transaction time
                </p>
              </div>
              <div className="space-y-4 animate-scale-in" style={{
              animationDelay: '0.2s'
            }}>
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
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-card/30">
          <div className="container mx-auto max-w-[1600px] space-y-12">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-glow animate-fade-in">
              <img src="/placeholder.svg" alt="Final showcase 1" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card animate-scale-in">
                <img src="/placeholder.svg" alt="Final showcase 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card animate-scale-in" style={{
              animationDelay: '0.1s'
            }}>
                <img src="/placeholder.svg" alt="Final showcase 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Next Project */}
        <section className="px-6 py-24 border-t border-border">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setGalleryOpen(false)}
              className="absolute top-6 right-6 z-50 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-50 bg-background/20 backdrop-blur-md px-4 py-2 rounded-full text-foreground font-medium">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={previousImage}
              className="absolute left-6 z-50 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground h-12 w-12"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Current Image */}
            <div className="w-full h-full flex items-center justify-center p-20">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg animate-fade-in"
              />
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-6 z-50 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground h-12 w-12"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-background/20 backdrop-blur-md p-3 rounded-full">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default MobileBankingProject;