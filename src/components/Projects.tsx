import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

const Projects = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
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
        <div className="flex flex-col gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                link={project.route}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
