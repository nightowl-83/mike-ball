import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  route: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    description: "A modern banking experience with intuitive navigation and seamless transactions. Designed for simplicity and security.",
    category: "Mobile App",
    image: project1,
    route: "/projects/mobile-banking",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Complete redesign of an online shopping experience focusing on conversion optimization and user engagement.",
    category: "Web Design",
    image: project2,
    route: "/projects/ecommerce-platform",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization platform helping teams make informed decisions with real-time insights and beautiful charts.",
    category: "SaaS Product",
    image: project3,
    route: "/projects/analytics-dashboard",
  },
];
