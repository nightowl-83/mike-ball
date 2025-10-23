import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ title, description, category, image, link = "/project/1" }: ProjectCardProps) => {
  return (
    <a href={link} className="group block">
      <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Hover Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">{category}</span>
          </div>
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </a>
  );
};

export default ProjectCard;
