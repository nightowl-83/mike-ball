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
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.accentGradient} p-8 md:p-12 min-h-[500px] md:min-h-[600px] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 h-full">
          {/* Content */}
          <div className="flex-1 space-y-6 text-white">
            <div className="space-y-4">
              <span className="inline-block text-sm font-medium text-white/80 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <ProjectCardFooter 
              tags={project.tags} 
              company={project.company}
              metrics={project.metrics}
              variant="dark"
            />
          </div>
          
          {/* Image */}
          <div className="relative w-full md:w-1/2 flex-shrink-0">
            <div className="relative overflow-hidden rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            {/* Floating arrow */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              <ArrowUpRight className="h-5 w-5 text-primary" />
            </div>
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
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.accentGradient || "from-slate-100 to-slate-50"} p-8 md:p-12 min-h-[500px] md:min-h-[600px] transition-all duration-500 hover:shadow-2xl`}>
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
