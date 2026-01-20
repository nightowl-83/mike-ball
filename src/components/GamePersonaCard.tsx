import { cn } from "@/lib/utils";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { Shield, Crosshair, BookOpen, Target, Quote } from "lucide-react";

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
  variant?: "default" | "compact" | "vertical" | "strip";
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
  isVisible = false,
  variant = "default",
}: GamePersonaCardProps) => {
  const IconComponent = classIcons[classIcon];

  // Helper function for color-coded stat bars based on value
  const getStatColor = (value: number) => {
    if (value >= 80) return 'from-emerald-500/80 to-emerald-400';
    if (value >= 50) return 'from-primary/80 to-primary';
    return 'from-amber-500/80 to-amber-400';
  };

  // ============================================
  // VARIANT: Strip - Highly condensed horizontal
  // ============================================
  if (variant === "strip") {
    return (
      <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        <div className="flex items-center gap-4 p-3">
          {/* Small Avatar */}
          <div className="flex-shrink-0">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-border/30">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover object-top transition-all duration-[2500ms] ease-out"
                style={{ filter: isVisible ? 'grayscale(0%)' : 'grayscale(100%)' }}
              />
            </div>
          </div>

          {/* Name & Class */}
          <div className="flex-shrink-0 w-28">
            <h3 className="text-sm font-bold text-foreground">{name}</h3>
            <p className="text-xs text-muted-foreground">{classTitle}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] px-1.5 py-0.5 bg-primary/20 text-primary rounded font-mono">
                Lv.{level}
              </span>
              <span className="text-[10px] text-muted-foreground">{age}y</span>
            </div>
          </div>

          {/* Mini Stats Bars */}
          <div className="flex-1 min-w-0 hidden sm:block">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-1">
              {stats.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-muted-foreground truncate">{stat.subject}</span>
                    <span className="text-[9px] font-medium text-primary font-mono">{stat.value}</span>
                  </div>
                  <div className="h-1 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getStatColor(stat.value)} rounded-full`}
                      style={{ 
                        width: isVisible ? `${stat.value}%` : '0%',
                        transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: `${idx * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Radar */}
          <div className="flex-shrink-0 w-16 h-14 hidden lg:block">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={stats} outerRadius="80%">
                <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.3} />
                <Radar
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                  strokeWidth={1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Quote (truncated) */}
          <div className="flex-shrink-0 w-40 hidden xl:block">
            <p className="text-[11px] text-muted-foreground italic line-clamp-2 leading-relaxed">"{quote}"</p>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // VARIANT: Vertical - Mobile-style stacked
  // ============================================
  if (variant === "vertical") {
    return (
      <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-2 border-b border-border/30 bg-muted/30">
          <div>
            <h3 className="text-sm font-bold text-foreground">{name}</h3>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{classTitle}</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-muted-foreground uppercase">Lv</span>
            <span className="text-lg font-bold font-mono text-primary">{level}</span>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover object-top transition-all duration-[2500ms] ease-out"
            style={{ filter: isVisible ? 'grayscale(0%)' : 'grayscale(100%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute bottom-1.5 left-1.5 flex gap-1">
            <span className="text-[9px] px-1.5 py-0.5 bg-background/80 backdrop-blur-sm rounded text-muted-foreground border border-border/30">
              {age}y • {playerType}
            </span>
          </div>
        </div>

        {/* 2x2 Grid - Enlarged */}
        <div className="grid grid-cols-2 gap-3 p-4">
          {/* Attributes */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Stats</h4>
            <div className="space-y-3">
              {stats.slice(0, 4).map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-muted-foreground">{stat.subject}</span>
                    <span className="text-sm font-semibold text-primary font-mono">{stat.value}</span>
                  </div>
                  <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getStatColor(stat.value)} rounded-full`}
                      style={{ 
                        width: isVisible ? `${stat.value}%` : '0%',
                        transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: `${idx * 0.15}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Radar */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Skills</h4>
            <div className="h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={stats} outerRadius="75%">
                  <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.4} />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                    tickLine={false}
                  />
                  <Radar
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

          {/* Goals */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Goals</h4>
            <ul className="space-y-2.5">
              {goals.slice(0, 4).map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 leading-snug">{goal.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border/30 flex items-center">
            <p className="text-base text-muted-foreground italic leading-relaxed">"{quote}"</p>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // VARIANT: Compact - 50vh max height
  // ============================================
  if (variant === "compact") {
    return (
      <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group max-h-[50vh]">
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Header - Compact */}
        <div className="relative flex items-center justify-between p-2 border-b border-border/50 bg-muted/30">
          <div>
            <h3 className="text-base font-bold text-foreground">{name}</h3>
            <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">{classTitle}</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Level</span>
            <span className="text-xl font-bold font-mono text-primary">{level}</span>
          </div>
        </div>

        {/* Main Content - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row gap-2 p-2">
          {/* Left: Avatar */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted border border-border/50">
              <img 
                src={avatar} 
                alt={`${name} persona`} 
                style={{ filter: isVisible ? 'grayscale(0%)' : 'grayscale(100%)' }}
                className="w-full h-full object-cover object-top transition-all duration-[2500ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-1 left-1 right-1 flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-background/80 backdrop-blur-sm text-[9px] font-medium border border-border/50">
                  {age}y
                </span>
                <span className="px-1.5 py-0.5 rounded bg-muted/80 backdrop-blur-sm text-[9px] font-medium text-muted-foreground border border-border/50 truncate">
                  {playerType}
                </span>
              </div>
            </div>
          </div>

          {/* Right: 2x2 Grid - Compact */}
          <div className="lg:w-2/3 grid grid-cols-2 gap-2">
            {/* Attributes */}
            <div className="p-2.5 rounded-lg bg-muted/30 border border-border/50">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">Attributes</h4>
              <div className="space-y-1.5">
                {stats.slice(0, 4).map((stat, index) => (
                  <div key={stat.subject}>
                    <div className="flex justify-between text-xs mb-0.5">
                      <span className="text-muted-foreground truncate mr-1">{stat.subject}</span>
                      <span className="text-primary font-mono">{stat.value}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getStatColor(stat.value)} rounded-full`}
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

            {/* Skill Radar */}
            <div className="p-2.5 rounded-lg bg-muted/30 border border-border/50">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Skill Radar</h4>
              <div className="h-[90px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={stats} cx="50%" cy="50%" outerRadius="65%">
                    <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.5} />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 8 }}
                      tickLine={false}
                    />
                    <Radar
                      name="Stats"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                      strokeWidth={1}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Objectives */}
            <div className="p-2.5 rounded-lg bg-muted/30 border border-border/50">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">Objectives</h4>
              <div className="space-y-1">
                {goals.slice(0, 3).map((goal, index) => (
                  <div key={index} className="flex items-start gap-1.5 text-xs">
                    <Target className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90 leading-tight line-clamp-1">{goal.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="p-2.5 rounded-lg bg-muted/30 border border-border/50 flex items-center">
              <p className="text-xs text-muted-foreground italic leading-relaxed line-clamp-3">
                "{quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // VARIANT: Default - Original layout
  // ============================================
  return (
    <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Header */}
      <div className="relative flex items-center justify-between p-3 border-b border-border/50 bg-muted/30">
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
      <div className="flex flex-col lg:flex-row gap-3 p-3">
        {/* Left: Avatar with grayscale transition */}
        <div className="lg:w-2/5 flex-shrink-0">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted border border-border/50">
            <img 
              src={avatar} 
              alt={`${name} persona`} 
              style={{ filter: isVisible ? 'grayscale(0%)' : 'grayscale(100%)' }}
              className="w-full h-full object-cover object-top transition-all duration-1000 ease-out"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            {/* Age + Type badges */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium border border-border/50">
                {age} years old
              </span>
              <span className="px-2 py-0.5 rounded-md bg-muted/80 backdrop-blur-sm text-xs font-medium text-muted-foreground border border-border/50">
                {playerType}
              </span>
            </div>
          </div>
        </div>

        {/* Right: 2x2 Grid */}
        <div className="lg:w-3/5 grid grid-cols-2 gap-3">
          {/* Top-Left: Attributes */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-3">Attributes</h4>
            <div className="space-y-2.5">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={stat.subject}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground truncate mr-1">{stat.subject}</span>
                    <span className="text-primary font-mono">{stat.value}</span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden relative">
                    <div 
                      className={`h-full bg-gradient-to-r ${getStatColor(stat.value)} rounded-full`}
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
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Skill Radar</h4>
            <div className="h-[150px] md:h-[170px]">
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
                    strokeWidth={1.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom-Left: Objectives */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-3">Objectives</h4>
            <div className="space-y-2">
              {goals.slice(0, 4).map((goal, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-2 text-sm"
                >
                  <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-tight">{goal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-Right: Quote */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/50 flex items-center">
            <p className="text-base text-muted-foreground italic leading-relaxed">
              "{quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePersonaCard;
