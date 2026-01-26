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
  Zap,
  Wifi,
  WifiOff,
  Lock,
  Unlock,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IconShowcaseProps {
  className?: string;
}

const icons = [
  // Row 1
  { Icon: Home },
  { Icon: Search },
  { Icon: Settings },
  { Icon: Bell },
  { Icon: User },
  { Icon: Menu },
  // Row 2
  { Icon: Star },
  { Icon: Heart },
  { Icon: Bookmark },
  { Icon: Share2 },
  { Icon: Play },
  { Icon: Pause },
  // Row 3
  { Icon: Trophy },
  { Icon: Gamepad2 },
  { Icon: Clock },
  { Icon: Calendar },
  { Icon: Filter },
  { Icon: Layers },
  // Row 4
  { Icon: Eye },
  { Icon: EyeOff },
  { Icon: AlertCircle },
  { Icon: CheckCircle },
  { Icon: Info },
  { Icon: MessageSquare },
  // Row 5
  { Icon: Download },
  { Icon: Upload },
  { Icon: Trash2 },
  { Icon: Edit },
  { Icon: Copy },
  { Icon: ExternalLink },
  // Row 6
  { Icon: ChevronDown },
  { Icon: ChevronRight },
  { Icon: ArrowLeft },
  { Icon: ArrowRight },
  { Icon: RefreshCw },
  { Icon: X },
  // Row 7 - New icons
  { Icon: Zap },
  { Icon: Wifi },
  { Icon: WifiOff },
  { Icon: Lock },
  { Icon: Unlock },
  { Icon: Sun },
  // Row 8 - New icons
  { Icon: Moon },
  { Icon: Volume2 },
  { Icon: VolumeX },
  { Icon: Maximize },
  { Icon: Minimize },
  { Icon: RotateCw },
];

export const DesignSystemIcons = ({ className }: IconShowcaseProps) => {
  return (
    <div className={cn("bg-card border border-border rounded-lg p-4 md:p-6", className)}>
      <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Icons</h3>
      
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-3">
        {icons.map(({ Icon }, index) => (
          <div
            key={index}
            className="group flex items-center justify-center p-3 rounded-lg hover:bg-[#8899A6]/10 transition-all duration-200"
          >
            <Icon 
              className="w-5 h-5 md:w-6 md:h-6 text-foreground/70 group-hover:text-foreground transition-colors duration-200" 
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSystemIcons;
