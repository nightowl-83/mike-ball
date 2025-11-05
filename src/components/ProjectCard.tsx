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
        <div className="flex flex-col md:flex-row items-stretch h-full">
          {/* Content - Left Side */}
          <div className="flex-1 p-6 md:p-8 space-y-3 md:space-y-4 flex flex-col justify-center order-2 md:order-1">
            <div className="flex items-center">
              <span className="text-sm font-medium text-primary">{category}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Container - Right Side */}
          <div className="relative overflow-hidden md:w-1/2 aspect-[4/3] md:aspect-auto order-1 md:order-2">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-card/20 to-card/90 md:bg-gradient-to-l opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Hover Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default ProjectCard;
