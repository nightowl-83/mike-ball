import { ProjectData } from "@/data/projectsData";
import ProjectCardFooter from "@/components/ProjectCardFooter";
import { ArrowUpRight } from "lucide-react";

// Sample project data for the playground
const sampleProject: ProjectData = {
  id: "sample",
  title: "Rural Land Marketplace",
  description: "Redesigning the property search experience for a niche real estate platform serving rural land buyers.",
  image: "/src/assets/MH-Showcase-Laptopmulti-2.png",
  category: "Product Design",
  tags: ["UX Research", "UI Design", "Design System"],
  company: "LandNetwork",
  route: "#",
  layoutVariant: "hero-accent",
};

// Variation 1: High Color - Vibrant Purple Gradient
const Variation1 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">1. High Color - Vibrant Purple</h3>
    <div className="group block">
      <div 
        className="relative overflow-hidden rounded-2xl pt-[18px] px-3 pb-3 md:p-12 min-h-[500px] transition-all duration-500 flex flex-col"
        style={{
          background: 'radial-gradient(ellipse at top center, hsl(263 80% 40% / 0.6) 0%, hsl(280 70% 20% / 0.8) 50%, hsl(220 25% 6%) 100%)'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/2 w-[600px] h-64 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <CardContent project={sampleProject} />
      </div>
    </div>
  </div>
);

// Variation 2: High Color - Dual Tone (Purple + Blue)
const Variation2 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">2. High Color - Purple/Blue Gradient</h3>
    <div className="group block">
      <div 
        className="relative overflow-hidden rounded-2xl pt-[18px] px-3 pb-3 md:p-12 min-h-[500px] transition-all duration-500 flex flex-col"
        style={{
          background: 'linear-gradient(135deg, hsl(263 70% 25% / 0.5) 0%, hsl(220 70% 20% / 0.5) 50%, hsl(220 25% 6%) 100%)'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        <CardContent project={sampleProject} />
      </div>
    </div>
  </div>
);

// Variation 3: Medium Color - Subtle Purple Glow
const Variation3 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">3. Medium - Subtle Purple Glow</h3>
    <div className="group block">
      <div 
        className="relative overflow-hidden rounded-2xl pt-[18px] px-3 pb-3 md:p-12 min-h-[500px] transition-all duration-500 flex flex-col"
        style={{
          background: 'radial-gradient(ellipse at top center, hsl(263 50% 20% / 0.3) 0%, hsl(220 25% 8%) 60%)'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[500px] h-48 bg-primary/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <CardContent project={sampleProject} />
      </div>
    </div>
  </div>
);

// Variation 4: Medium - Border Accent with Minimal Gradient
const Variation4 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">4. Medium - Border Accent</h3>
    <div className="group block">
      <div 
        className="relative overflow-hidden rounded-2xl pt-[18px] px-3 pb-3 md:p-12 min-h-[500px] transition-all duration-500 flex flex-col border border-primary/20"
        style={{
          background: 'linear-gradient(180deg, hsl(220 25% 10%) 0%, hsl(220 25% 6%) 100%)'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute top-0 left-1/2 w-64 h-32 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <CardContent project={sampleProject} />
      </div>
    </div>
  </div>
);

// Variation 5: Muted - Warm Gray Gradient
const Variation5 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">5. Muted - Warm Gray</h3>
    <div className="group block">
      <div 
        className="relative overflow-hidden rounded-2xl pt-[18px] px-3 pb-3 md:p-12 min-h-[500px] transition-all duration-500 flex flex-col"
        style={{
          background: 'linear-gradient(180deg, hsl(220 15% 14%) 0%, hsl(220 20% 8%) 100%)'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.01] rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <CardContent project={sampleProject} />
      </div>
    </div>
  </div>
);

// Variation 6: Minimal - Flat Dark with Subtle Noise
const Variation6 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">6. Minimal - Flat Dark</h3>
    <div className="group block">
      <div 
        className="relative overflow-hidden rounded-2xl pt-[18px] px-3 pb-3 md:p-12 min-h-[500px] transition-all duration-500 flex flex-col border border-border/30"
        style={{
          background: 'hsl(220 25% 9%)'
        }}
      >
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
        <CardContent project={sampleProject} />
      </div>
    </div>
  </div>
);

// Shared card content component
const CardContent = ({ project }: { project: ProjectData }) => (
  <>
    <div className="absolute top-9 right-9 md:top-12 md:right-12 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
      <ArrowUpRight className="h-5 w-5 text-primary" />
    </div>
    
    <div className="relative z-10 flex flex-col h-full flex-1 gap-6">
      <div className="space-y-4 md:space-y-6 text-white text-center">
        <span className="inline-block text-sm font-medium text-white/80 uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mx-auto">
          {project.description}
        </p>
      </div>
      
      <div className="relative w-full flex-1 md:min-h-[200px] flex items-center justify-center">
        <div className="relative transform group-hover:scale-[1.02] transition-transform duration-500 w-[85%] max-w-3xl">
          <div className="w-full h-48 bg-muted/20 rounded-xl flex items-center justify-center border border-white/10">
            <span className="text-white/40 text-sm">[Image Placeholder]</span>
          </div>
        </div>
      </div>
      
      <div>
        <ProjectCardFooter tags={project.tags} company={project.company} variant="dark" />
      </div>
    </div>
  </>
);

const CardPlayground = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-2">Featured Card Background Variations</h1>
          <p className="text-muted-foreground">6 variations ranging from high color to muted</p>
        </div>
        
        <div className="grid gap-12">
          <Variation1 />
          <Variation2 />
          <Variation3 />
          <Variation4 />
          <Variation5 />
          <Variation6 />
        </div>
      </div>
    </div>
  );
};

export default CardPlayground;
