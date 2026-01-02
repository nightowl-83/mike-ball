import { ArrowUpRight } from "lucide-react";

interface ProjectCardFooterProps {
  tags: string[];
  company?: string;
  metrics?: string;
  variant?: "light" | "dark";
}

const ProjectCardFooter = ({ tags, company, metrics, variant = "dark" }: ProjectCardFooterProps) => {
  const isDark = variant === "dark";
  
  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t ${
      isDark ? "border-white/10" : "border-black/10"
    }`}>
      <div className="flex flex-wrap items-center gap-3">
        {company && (
          <span className={`text-sm font-medium ${isDark ? "text-white/70" : "text-foreground/70"}`}>
            {company}
          </span>
        )}
        {company && tags.length > 0 && (
          <span className={`${isDark ? "text-white/30" : "text-foreground/30"}`}>•</span>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className={`text-xs px-3 py-1.5 rounded-full ${
                isDark 
                  ? "bg-white/10 text-white/80 border border-white/10" 
                  : "bg-black/5 text-foreground/70 border border-black/10"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {metrics && (
          <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-foreground"}`}>
            {metrics}
          </span>
        )}
        <span className={`inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300 ${
          isDark ? "text-white" : "text-foreground"
        }`}>
          View Case Study
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
};

export default ProjectCardFooter;
