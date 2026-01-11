import { ArrowUpRight } from "lucide-react";

interface ProjectCardFooterProps {
  tags: string[];
  company?: string;
  metrics?: string;
  variant?: "light" | "dark";
  ctaText?: string;
}

const ProjectCardFooter = ({ tags, company, metrics, variant = "dark", ctaText = "View Case Study" }: ProjectCardFooterProps) => {
  const isDark = variant === "dark";
  
  return (
    <div className={`w-full mt-auto px-4 py-3 md:px-6 md:py-4 rounded-lg ${
      isDark ? "bg-white/10 backdrop-blur-sm" : "bg-muted/60 backdrop-blur-sm"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {company && (
            <span className={`text-xs sm:text-sm font-medium ${isDark ? "text-white/70" : "text-foreground/70"}`}>
              {company}
            </span>
          )}
          {company && tags.length > 0 && (
            <span className={`hidden sm:inline ${isDark ? "text-white/30" : "text-foreground/30"}`}>•</span>
          )}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${
                  isDark 
                    ? "bg-white/10 text-white/80 border border-white/10" 
                    : "bg-background/80 text-foreground/70 border border-border"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          {metrics && (
            <span className={`text-xs sm:text-sm font-semibold ${isDark ? "text-white" : "text-foreground"}`}>
              {metrics}
            </span>
          )}
          <span className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300 ${
            isDark ? "text-white" : "text-foreground"
          }`}>
            {ctaText}
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardFooter;
