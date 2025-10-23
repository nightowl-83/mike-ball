import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in UI/UX design and product development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
