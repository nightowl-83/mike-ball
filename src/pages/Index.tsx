import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";

type BackgroundState = 'floating' | 'grid';

const Index = () => {
  const location = useLocation();
  const [bgState, setBgState] = useState<BackgroundState>('floating');
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Toggle between "colored" and "muted" to switch skill icon variants
  const skillVariant: "colored" | "muted" = "muted";

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  // Scroll-based background state management
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroBottom = heroRef.current?.offsetHeight || window.innerHeight;
      
      // Transition to grid when user starts scrolling (after 50px)
      // Transition back to floating when scrolled back near hero bottom
      if (scrollY > 50) {
        setBgState('grid');
      } else {
        setBgState('floating');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed animated background */}
      <div className="fixed inset-0 -z-10 bg-background">
        <AnimatedBackground initialState={bgState} showControls={false} />
      </div>

      {/* Page content */}
      <div className="min-h-screen" ref={heroRef}>
        <Hero />
        <Skills variant={skillVariant} />
        <Projects />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
