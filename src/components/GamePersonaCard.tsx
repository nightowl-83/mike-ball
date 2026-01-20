import { cn } from "@/lib/utils";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { Shield, Crosshair, BookOpen, Target } from "lucide-react";

interface PersonaStat {
  subject: string;
  value: number;
  fullMark: number;
}

interface PersonaGoal {
  text: string;
}

interface GamePersonaCardProps {
  name: string;
  classTitle: string;
  age: number;
  playerType: string;
  avatar: string;
  stats: PersonaStat[];
  goals: PersonaGoal[];
  quote: string;
  level?: number;
  classIcon?: "strategist" | "enthusiast" | "explorer";
  isVisible?: boolean;
}

const classIcons = {
  strategist: Crosshair,
  enthusiast: BookOpen,
  explorer: Shield,
};

export const GamePersonaCard = ({
  name,
  classTitle,
  age,
  playerType,
  avatar,
  stats,
  goals,
  quote,
  level = 99,
  classIcon = "strategist",
  isVisible = true,
}: GamePersonaCardProps) => {
  const IconComponent = classIcons[classIcon];

  return (
    <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Header */}
      <div className="relative flex items-center justify-between p-4 border-b border-border/50 bg-muted/30">
        {/* Left: Name */}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">{classTitle}</p>
        </div>
        
        {/* Right: Level Badge */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Level</span>
          <span className="text-2xl font-bold font-mono text-primary">{level}</span>
        </div>
      </div>

      {/* Main Content - Horizontal Layout */}
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Left: Avatar with grayscale transition */}
        <div className="lg:w-2/5 flex-shrink-0">
          <div className="relative aspect-[3/5] rounded-xl overflow-hidden bg-muted border border-border/50">
            <img 
              src={avatar} 
              alt={`${name} persona`} 
              style={{ filter: isVisible ? 'grayscale(0%)' : 'grayscale(100%)' }}
              className={cn(
                "w-full h-full object-cover object-top transition-all duration-1000 ease-out"
              )}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            {/* Age + Type badges */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium border border-border/50">
                {age} years old
              </span>
              <span className="px-2 py-1 rounded-md bg-muted/80 backdrop-blur-sm text-xs font-medium text-muted-foreground border border-border/50">
                {playerType}
              </span>
            </div>
          </div>
        </div>

        {/* Right: 2x2 Grid */}
        <div className="lg:w-3/5 grid grid-cols-2 gap-3">
          {/* Top-Left: Attributes */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">Attributes</h4>
            <div className="space-y-2">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={stat.subject}>
                  <div className="flex justify-between text-[10px] mb-0.5">
                    <span className="text-muted-foreground truncate mr-1">{stat.subject}</span>
                    <span className="text-primary font-mono">{stat.value}</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                      style={{
                        width: isVisible ? `${stat.value}%` : '0%',
                        transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: `${index * 0.15}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top-Right: Skill Radar */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Skill Radar</h4>
            <div className="h-[100px] md:h-[110px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={stats} cx="50%" cy="50%" outerRadius="65%">
                  <PolarGrid 
                    stroke="hsl(var(--border))" 
                    strokeOpacity={0.5}
                  />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ 
                      fill: 'hsl(var(--muted-foreground))', 
                      fontSize: 7,
                    }}
                    tickLine={false}
                  />
                  <Radar
                    name="Stats"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    strokeWidth={1.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom-Left: Objectives */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">Objectives</h4>
            <div className="space-y-1.5">
              {goals.slice(0, 4).map((goal, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-1.5 text-[11px]"
                >
                  <Target className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-tight">{goal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-Right: Quote */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/50 flex items-center">
            <p className="text-[11px] text-muted-foreground italic leading-relaxed">
              "{quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePersonaCard;
