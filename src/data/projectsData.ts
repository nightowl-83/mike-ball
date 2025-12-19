import marketingHubDashboard from "@/assets/marketing-hub-dashboard.webp";
import ruralLandMarketplace from "@/assets/land-ui-mobile.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  route: string;
  tags: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "mobile-banking",
    title: "Marketing Hub CMS",
    description: "A comprehensive content management system designed to streamline marketing operations with powerful analytics and intuitive workflows.",
    category: "Dashboard",
    image: marketingHubDashboard,
    route: "/projects/mobile-banking",
    tags: ["UX Research", "UI Design", "Prototyping", "User Testing"],
  },
  {
    id: "rural-land-marketplace",
    title: "Rural Land Marketplace",
    description: "A complete relaunch of Costar's Rural Land Marketplace with modern design, intuitive search, and enhanced map functionality.",
    category: "Web Design",
    image: ruralLandMarketplace,
    route: "/projects/rural-land-marketplace",
    tags: ["Lead Designer", "User Testing", "UI Design", "Mobile & Responsive Design", "Search & Map Redesign"],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Complete redesign of an online shopping experience focusing on conversion optimization and user engagement.",
    category: "Web Design",
    image: project2,
    route: "/projects/ecommerce-platform",
    tags: ["Conversion Optimization", "A/B Testing", "Responsive Design", "Brand Identity"],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization platform helping teams make informed decisions with real-time insights and beautiful charts.",
    category: "SaaS Product",
    image: project3,
    route: "/projects/analytics-dashboard",
    tags: ["Data Visualization", "Dashboard Design", "User Research", "Interaction Design"],
  },
];
