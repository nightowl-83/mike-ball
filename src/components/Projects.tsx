import { projectsData } from "@/data/projectsData";
import { 
  HeroAccentCard, 
  HeroCenteredCard, 
  TwoColumnCard, 
  MinimalCenteredCard 
} from "./ProjectCardVariants";

const Projects = () => {
  const renderProjectCard = (project: typeof projectsData[0], index: number) => {
    const animationDelay = `${0.1 * index}s`;
    
    const CardComponent = {
      "hero-accent": HeroAccentCard,
      "hero-centered": HeroCenteredCard,
      "two-column": TwoColumnCard,
      "minimal-centered": MinimalCenteredCard,
    }[project.layoutVariant];

    return (
      <div 
        key={project.id} 
        className="animate-scale-in"
        style={{ animationDelay }}
      >
        <CardComponent project={project} />
      </div>
    );
  };

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-[1080px]">
        {/* Section Header */}
        <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in UI/UX design and product development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8 md:gap-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {projectsData.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
