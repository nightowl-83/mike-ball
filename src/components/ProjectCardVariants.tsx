import { ProjectData } from "@/data/projectsData";
import ProjectCardFooter from "./ProjectCardFooter";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectData;
}

// Hero Accent Card - Full width with gradient background
export const HeroAccentCard = ({ project }: ProjectCardProps) => {
  return (
    <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 lg:p-12 min-h-[500px] md:min-h-[600px] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col" style={{ background: 'var(--gradient-accent)' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Floating arrow - top right corner */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
        
        <div className="relative z-10 flex flex-col h-full flex-1">
          {/* Content - Centered */}
          <div className="space-y-4 md:space-y-6 text-white mb-6 md:mb-8 text-center">
            <span className="inline-block text-sm font-medium text-white/80 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {project.title}
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mx-auto">
              {project.description}
            </p>
          </div>
          
          {/* Image */}
          <div className="relative w-full flex-1 min-h-[200px] md:min-h-[300px] pt-8 md:pt-12 flex items-center justify-center">
            <div className="relative transform group-hover:scale-[1.02] transition-transform duration-500 w-[85%] max-w-3xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Footer - Pinned to bottom */}
          <div className="mt-6 md:mt-8">
            <ProjectCardFooter 
              tags={project.tags} 
              company={project.company}
              metrics={project.metrics}
              variant="dark"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

// Hero Centered Card - Light gradient with centered content
export const HeroCenteredCard = ({ project }: ProjectCardProps) => {
  return (
    <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 min-h-[500px] md:min-h-[600px] transition-all duration-500 hover:shadow-2xl" style={{ background: project.accentGradient ? 'var(--gradient-accent)' : 'linear-gradient(to bottom right, hsl(220 15% 90%), hsl(220 15% 95%))' }}>
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Content */}
          <div className="space-y-4 mb-8 max-w-2xl">
            <span className="inline-block text-sm font-medium text-foreground/60 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Image */}
          <div className="relative w-full max-w-4xl flex-1">
            <div className="relative overflow-hidden rounded-xl shadow-2xl transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-500">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Footer */}
          <div className="w-full max-w-4xl mt-8">
            <ProjectCardFooter 
              tags={project.tags} 
              company={project.company}
              metrics={project.metrics}
              variant="light"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

// Two Column Card - Dark card with device mockup
export const TwoColumnCard = ({ project }: ProjectCardProps) => {
  return (
    <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 p-8 md:p-10 min-h-[400px] transition-all duration-500 hover:shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8 h-full">
          {/* Image */}
          <div className="relative w-full md:w-2/5 flex-shrink-0">
            <div className="relative overflow-hidden rounded-xl transform group-hover:scale-105 transition-transform duration-500">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-4">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            
            <ProjectCardFooter 
              tags={project.tags} 
              company={project.company}
              metrics={project.metrics}
              variant="light"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

// Minimal Centered Card - Clean with subtle styling
export const MinimalCenteredCard = ({ project }: ProjectCardProps) => {
  return (
    <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 p-8 md:p-10 min-h-[400px] transition-all duration-500 hover:shadow-lg">
        <div className="flex flex-col items-center text-center h-full">
          {/* Image */}
          <div className="relative w-full max-w-md mb-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>
            
            {/* Floating badge */}
            {project.metrics && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg">
                {project.metrics}
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="space-y-3 max-w-lg">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Footer */}
          <div className="w-full mt-6">
            <ProjectCardFooter 
              tags={project.tags} 
              company={project.company}
              variant="light"
            />
          </div>
        </div>
      </div>
    </a>
  );
};
