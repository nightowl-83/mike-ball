import marketingHubDashboard from "@/assets/marketing-hub-dashboard.webp";
import ruralLandMarketplace from "@/assets/land-flat-homepage.png";
import nightOwlLogo from "@/assets/night-owl-logo.svg";
import gnsHeroCard from "@/assets/gns-hero-card.png";

export type LayoutVariant = "hero-accent" | "hero-centered" | "two-column" | "minimal-centered" | "locked" | "side-project" | "password-protected" | "coming-soon";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  route: string;
  tags: string[];
  layoutVariant: LayoutVariant;
  accentGradient?: string;
  company?: string;
  metrics?: string;
  isLocked?: boolean;
}

export const projectsData: ProjectData[] = [
  {
    id: "rural-land-marketplace",
    title: "Rural Land Marketplace",
    description: "A complete relaunch of Costar's Rural Land Marketplace with modern design, intuitive search, and enhanced map functionality.",
    category: "Responsive Mobile Design",
    image: ruralLandMarketplace,
    route: "/projects/rural-land-marketplace",
    tags: ["Lead Designer", "User Testing", "UI Design", "Mobile Design"],
    layoutVariant: "hero-accent",
    accentGradient: "from-violet-600 via-purple-600 to-indigo-700",
    company: "CoStar Group",
    metrics: "+45% Engagement"
  },
  {
    id: "marketing-hub",
    title: "Marketing Hub CMS",
    description: "A comprehensive content management system designed to streamline marketing operations with powerful analytics and intuitive workflows.",
    category: "Dashboard",
    image: marketingHubDashboard,
    route: "/projects/marketing-hub",
    tags: ["UX Research", "UI Design", "Prototyping", "User Testing"],
    layoutVariant: "minimal-centered",
    company: "Enterprise SaaS"
  },
  {
    id: "gaming-news-site",
    title: "Gaming News Site Redesign",
    description: "Complete redesign of a major gaming news publication for CBS Interactive, featuring in-depth user research, modern UI patterns, and improved content discovery.",
    category: "Web Design",
    image: gnsHeroCard,
    route: "/projects/gaming-news-site",
    tags: ["Visual Design", "Content Strategy", "Mobile Design"],
    layoutVariant: "minimal-centered",
    company: "CBS Interactive"
  },
  {
    id: "intelligence-over-inventory",
    title: "Intelligence Over Inventory",
    description: "Transforming commodity data into first-party insights with advanced filtering and seller performance coaching.",
    category: "Product Strategy",
    image: "",
    route: "/projects/intelligence-over-inventory",
    tags: ["Product Strategy", "Data Systems", "UX Design"],
    layoutVariant: "hero-accent",
    company: "CoStar Group"
  },
  {
    id: "ar-travel-companion",
    title: "AR Travel Companion",
    description: "Augmented reality UI design for an immersive travel companion app, blending real-world exploration with digital guidance.",
    category: "Coming Soon",
    image: "",
    route: "#",
    tags: ["AR Design", "Mobile UI", "Prototype"],
    layoutVariant: "coming-soon",
    company: "Personal Project"
  },
  {
    id: "night-owl-studio",
    title: "Night Owl Studio",
    description: "Personal illustration and poster design projects exploring bold visual styles and creative experimentation.",
    category: "Side Projects",
    image: nightOwlLogo,
    route: "#",
    tags: ["Illustration", "Poster Design", "Brand Identity"],
    layoutVariant: "side-project"
  },
];
