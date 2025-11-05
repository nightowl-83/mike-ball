import marketingHubDashboard from "@/assets/marketing-hub-dashboard.webp";
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
    title: "Marketing Hub CMS",
    description: "A comprehensive content management system designed to streamline marketing operations with powerful analytics and intuitive workflows.",
    category: "Dashboard",
    image: marketingHubDashboard,
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
