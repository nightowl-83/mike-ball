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
  classIcon?: "strategist" | "immersionist" | "explorer";
  isVisible?: boolean;
}

const classIcons = {
  strategist: Crosshair,
  immersionist: BookOpen,
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
      <div className="relative flex items-center justify-between p-4 md:p-6 border-b border-border/50 bg-muted/30">
        {/* Left: Class Icon + Name */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">{name}</h3>
            <p className="text-sm md:text-base text-primary font-medium tracking-wide uppercase">{classTitle}</p>
          </div>
        </div>
        
        {/* Right: Level Badge */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Level</span>
          <span className="text-2xl md:text-3xl font-bold font-mono text-primary">{level}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6">
        {/* Left Column: Avatar + Info */}
        <div className="space-y-4">
          {/* Avatar */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border/50">
            <img 
              src={avatar} 
              alt={`${name} persona`} 
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            {/* Age + Type badges */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <span className="px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs md:text-sm font-medium border border-border/50">
                {age} years old
              </span>
              <span className="px-2 py-1 rounded-md bg-primary/20 backdrop-blur-sm text-xs md:text-sm font-medium text-primary border border-primary/30">
                {playerType}
              </span>
            </div>
          </div>

          {/* Stats Bars */}
          <div className="space-y-3 p-4 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Attributes</h4>
            {stats.slice(0, 3).map((stat, index) => (
              <div key={stat.subject}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{stat.subject}</span>
                  <span className="text-primary font-mono">{stat.value}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden relative">
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

        {/* Right Column: Radar Chart + Goals */}
        <div className="space-y-4">
          {/* Radar Chart */}
          <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Skill Radar</h4>
            <div className="h-[200px] md:h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={stats} cx="50%" cy="50%" outerRadius="70%">
                  <PolarGrid 
                    stroke="hsl(var(--border))" 
                    strokeOpacity={0.5}
                  />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ 
                      fill: 'hsl(var(--muted-foreground))', 
                      fontSize: 10,
                    }}
                    tickLine={false}
                  />
                  <Radar
                    name="Stats"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Goals / Objectives */}
          <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Objectives</h4>
            <div className="space-y-2">
              {goals.map((goal, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-sm"
                >
                  <Target className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{goal.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Quote */}
      <div className="relative p-4 md:p-6 border-t border-border/50 bg-muted/20">
        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
          "{quote}"
        </p>
      </div>
    </div>
  );
};

export default GamePersonaCard;
