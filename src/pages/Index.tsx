import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const location = useLocation();
  
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

  return (
    <div className="min-h-screen">
      <Hero />
      <Skills variant={skillVariant} />
      <Projects />
      <ContactSection />
    </div>
  );
};

export default Index;
