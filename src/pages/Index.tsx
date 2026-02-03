import { useEffect, useState } from "react";
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

  // IntersectionObserver to detect active section and update background state
  useEffect(() => {
    const sections = document.querySelectorAll('[data-bg-state]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by their position on page to handle multiple intersecting sections
        const sortedEntries = [...entries].sort((a, b) => {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });
        
        sortedEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newState = entry.target.getAttribute('data-bg-state');
            if (newState === 'floating' || newState === 'grid') {
              setBgState(newState);
            }
          }
        });
      },
      { 
        threshold: 0.1, // Lower threshold - trigger earlier
        rootMargin: '-10% 0px -10% 0px' // Trigger when section is 10% into viewport
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed animated background */}
      <div className="fixed inset-0 -z-10 bg-background">
        <AnimatedBackground initialState={bgState} showControls={false} />
      </div>

      {/* Page content */}
      <div className="min-h-screen">
        <Hero />
        <Skills variant={skillVariant} />
        <Projects />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
