import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Index = () => {
  // Toggle between "colored" and "muted" to switch skill icon variants
  const skillVariant: "colored" | "muted" = "muted";

  return (
    <div className="min-h-screen">
      <Hero />
      <Skills variant={skillVariant} />
      <Projects />
    </div>
  );
};

export default Index;
