import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Mobile Banking App",
    description: "A modern banking experience with intuitive navigation and seamless transactions. Designed for simplicity and security.",
    category: "Mobile App",
    image: project1,
  },
  {
    title: "E-Commerce Platform",
    description: "Complete redesign of an online shopping experience focusing on conversion optimization and user engagement.",
    category: "Web Design",
    image: project2,
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform helping teams make informed decisions with real-time insights and beautiful charts.",
    category: "SaaS Product",
    image: project3,
  },
];

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
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
