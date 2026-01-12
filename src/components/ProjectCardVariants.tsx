import { ProjectData } from "@/data/projectsData";
import ProjectCardFooter from "./ProjectCardFooter";
import { ArrowUpRight, Lock, Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: ProjectData;
}

// Hero Accent Card - Full width with gradient background
export const HeroAccentCard = ({
  project
}: ProjectCardProps) => {
  return <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl pt-[18px] px-3 pb-3 md:p-12 lg:p-[72px] min-h-[500px] md:min-h-[600px] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col" style={{
      background: 'var(--gradient-accent)'
    }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Floating arrow - top right corner */}
        <div className="absolute top-9 right-9 md:top-12 md:right-12 lg:top-[72px] lg:right-[72px] z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
        
        <div className="relative z-10 flex flex-col h-full flex-1 gap-6">
          {/* Content - Centered */}
          <div className="space-y-4 md:space-y-6 text-white text-center">
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
          <div className="relative w-full flex-1 md:min-h-[300px] flex items-center justify-center">
            <div className="relative transform group-hover:scale-[1.02] transition-transform duration-500 w-[85%] max-w-3xl">
              <img src={project.image} alt={project.title} className="w-full h-auto object-contain" />
            </div>
          </div>
          
          {/* Footer - Pinned to bottom */}
          <div>
            <ProjectCardFooter tags={project.tags} company={project.company} metrics={project.metrics} variant="dark" />
          </div>
        </div>
      </div>
    </a>;
};

// Hero Centered Card - Light gradient with centered content
export const HeroCenteredCard = ({
  project
}: ProjectCardProps) => {
  return <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl p-12 md:p-[72px] min-h-[500px] md:min-h-[600px] transition-all duration-500 hover:shadow-2xl" style={{
      background: project.accentGradient ? 'var(--gradient-accent)' : 'linear-gradient(to bottom right, hsl(220 15% 90%), hsl(220 15% 95%))'
    }}>
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
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          </div>
          
          {/* Footer */}
          <div className="w-full max-w-4xl mt-8">
            <ProjectCardFooter tags={project.tags} company={project.company} metrics={project.metrics} variant="light" />
          </div>
        </div>
      </div>
    </a>;
};

// Two Column Card - Dark card with device mockup
export const TwoColumnCard = ({
  project
}: ProjectCardProps) => {
  return <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 p-12 md:p-[60px] min-h-[400px] transition-all duration-500 hover:shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8 h-full">
          {/* Image */}
          <div className="relative w-full md:w-2/5 flex-shrink-0">
            <div className="relative overflow-hidden rounded-xl transform group-hover:scale-105 transition-transform duration-500">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover aspect-[4/3]" />
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
            
            <ProjectCardFooter tags={project.tags} company={project.company} metrics={project.metrics} variant="light" />
          </div>
        </div>
      </div>
    </a>;
};

// Minimal Centered Card - Clean with subtle styling
export const MinimalCenteredCard = ({
  project
}: ProjectCardProps) => {
  return <a href={project.route} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 p-3 md:p-[60px] min-h-[400px] transition-all duration-500 hover:shadow-lg">
        <div className="flex flex-col items-center text-center h-full">
          {/* Image */}
          <div className="relative w-full max-w-md mb-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover aspect-[16/10]" />
            </div>
            
            {/* Floating badge */}
            {project.metrics && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg">
                {project.metrics}
              </div>}
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
            <ProjectCardFooter tags={project.tags} company={project.company} variant="light" />
          </div>
        </div>
      </div>
    </a>;
};

// Password Protected Card - Project requires password to access
export const PasswordProtectedCard = ({
  project
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Friend2026") {
      sessionStorage.setItem(`project-access-${project.id}`, "true");
      setIsOpen(false);
      navigate(project.route);
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <>
      <div 
        className="group block cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-2xl bg-[hsl(220_15%_12%)] border border-border/50 hover:border-primary/30 p-3 md:p-[60px] min-h-[400px] transition-all duration-500 hover:shadow-lg">
          <div className="flex flex-col items-center text-center h-full">
            {/* Image */}
            <div className="relative w-full max-w-[32rem] mb-8">
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-[125%] h-auto object-cover" />
                ) : (
                  <Lock className="w-12 h-12 text-muted-foreground/30" />
                )}
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-3 max-w-lg">
              <span className="inline-block text-sm font-medium text-muted-foreground/60 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground/70 leading-relaxed">
                {project.description}
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
                  <Lock className="w-4 h-4" />
                  Under NDA
                </span>
              </div>
            </div>
            
            {/* Footer */}
            <div className="w-full mt-6">
              <ProjectCardFooter tags={project.tags} company={project.company} variant="light" />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Password</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password to view project"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={error ? "border-destructive" : ""}
              />
              {error && (
                <p className="text-sm text-destructive">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Locked Card - Project that cannot be viewed (kept for backward compatibility)
export const LockedCard = ({
  project
}: ProjectCardProps) => {
  return <div className="group block cursor-not-allowed">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted/80 to-muted/40 border border-border/50 p-3 md:p-[60px] min-h-[300px] transition-all duration-500">
        <div className="flex flex-col items-center text-center h-full justify-center">
          {/* Lock Icon */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-muted-foreground/50" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-3 max-w-lg">
            <span className="inline-block text-sm font-medium text-muted-foreground/60 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-muted-foreground/70">
              {project.title}
            </h3>
            <p className="text-muted-foreground/50 leading-relaxed">
              {project.description}
            </p>
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/40 bg-muted-foreground/5 px-4 py-2 rounded-full">
                <Lock className="w-4 h-4" />
                Project Under NDA
              </span>
            </div>
          </div>
          
          {/* Footer */}
          <div className="w-full mt-6 opacity-50">
            <ProjectCardFooter tags={project.tags} company={project.company} variant="light" />
          </div>
        </div>
      </div>
    </div>;
};

// Coming Soon Card - For future projects
export const ComingSoonCard = ({
  project
}: ProjectCardProps) => {
  return <div className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted/60 to-muted/30 border border-border/50 p-3 md:p-[60px] min-h-[300px] transition-all duration-500">
        <div className="flex flex-col items-center text-center h-full justify-center">
          {/* Image Placeholder */}
          <div className="relative w-full max-w-md mb-6">
            <div className="relative overflow-hidden rounded-xl bg-primary/5 aspect-[16/10] flex items-center justify-center border border-primary/10">
              <Sparkles className="w-12 h-12 text-primary/30" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-3 max-w-lg">
            <span className="inline-block text-sm font-medium text-muted-foreground/60 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground/70">
              {project.title}
            </h3>
            <p className="text-muted-foreground/60 leading-relaxed">
              {project.description}
            </p>
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                Coming Soon
              </span>
            </div>
          </div>
          
          {/* Footer */}
          <div className="w-full mt-6 opacity-60">
            <ProjectCardFooter tags={project.tags} company={project.company} variant="light" />
          </div>
        </div>
      </div>
    </div>;
};

// Side Project Card - For personal/creative projects
export const SideProjectCard = ({
  project
}: ProjectCardProps) => {
  return <a 
      href="https://www.etsy.com/shop/NightOwlStudioUS" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[hsl(220_15%_10%)] border border-border hover:border-primary/30 p-3 md:p-[60px] min-h-[300px] transition-all duration-500 hover:shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 h-full">
          {/* Image/Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center h-full">
              <img src={project.image} alt={project.title} className="w-full h-auto object-contain" />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            
            <ProjectCardFooter tags={project.tags} company={project.company} variant="light" ctaText="View Etsy Shop" />
          </div>
        </div>
      </div>
    </a>;
};
