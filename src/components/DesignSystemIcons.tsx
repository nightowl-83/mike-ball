import {
  Home,
  Search,
  Settings,
  Bell,
  User,
  Menu,
  Star,
  Heart,
  Bookmark,
  Share2,
  Play,
  Pause,
  Trophy,
  Gamepad2,
  Clock,
  Calendar,
  Filter,
  Layers,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Info,
  MessageSquare,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IconShowcaseProps {
  className?: string;
}

const icons = [
  // Row 1
  { name: "Home", Icon: Home },
  { name: "Search", Icon: Search },
  { name: "Settings", Icon: Settings },
  { name: "Bell", Icon: Bell },
  { name: "User", Icon: User },
  { name: "Menu", Icon: Menu },
  // Row 2
  { name: "Star", Icon: Star },
  { name: "Heart", Icon: Heart },
  { name: "Bookmark", Icon: Bookmark },
  { name: "Share", Icon: Share2 },
  { name: "Play", Icon: Play },
  { name: "Pause", Icon: Pause },
  // Row 3
  { name: "Trophy", Icon: Trophy },
  { name: "Gamepad", Icon: Gamepad2 },
  { name: "Clock", Icon: Clock },
  { name: "Calendar", Icon: Calendar },
  { name: "Filter", Icon: Filter },
  { name: "Layers", Icon: Layers },
  // Row 4
  { name: "Eye", Icon: Eye },
  { name: "EyeOff", Icon: EyeOff },
  { name: "Alert", Icon: AlertCircle },
  { name: "Check", Icon: CheckCircle },
  { name: "Info", Icon: Info },
  { name: "Message", Icon: MessageSquare },
  // Row 5
  { name: "Download", Icon: Download },
  { name: "Upload", Icon: Upload },
  { name: "Trash", Icon: Trash2 },
  { name: "Edit", Icon: Edit },
  { name: "Copy", Icon: Copy },
  { name: "External", Icon: ExternalLink },
  // Row 6
  { name: "Down", Icon: ChevronDown },
  { name: "Right", Icon: ChevronRight },
  { name: "Back", Icon: ArrowLeft },
  { name: "Forward", Icon: ArrowRight },
  { name: "Refresh", Icon: RefreshCw },
  { name: "Close", Icon: X },
];

export const DesignSystemIcons = ({ className }: IconShowcaseProps) => {
  return (
    <div className={cn("bg-card border border-border rounded-lg p-4 md:p-6", className)}>
      <h3 className="text-lg md:text-xl font-bold mb-2">Icons</h3>
      <p className="text-sm text-muted-foreground mb-4 md:mb-6">
        Material Design System icons. Weight 300, outlined by default, filled when selected.
      </p>
      
      <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
        {icons.map(({ name, Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
          >
            {/* Icon pair: outlined default, filled on hover */}
            <div className="relative w-6 h-6">
              {/* Outlined (default) */}
              <Icon 
                className="w-6 h-6 text-foreground/70 group-hover:opacity-0 transition-opacity duration-200 absolute inset-0" 
                strokeWidth={1.5}
              />
              {/* Filled (hover) */}
              <Icon 
                className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute inset-0" 
                strokeWidth={1.5}
                fill="currentColor"
              />
            </div>
            <span className="text-[10px] md:text-xs text-muted-foreground text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSystemIcons;
