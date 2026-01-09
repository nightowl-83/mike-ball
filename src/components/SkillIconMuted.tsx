interface SkillIconMutedProps {
  name: string;
  abbreviation?: string;
  bgColor: string;
  textColor?: string;
  icon?: React.ReactNode;
  iconHover?: React.ReactNode;
}

const SkillIconMuted = ({ name, abbreviation, bgColor, textColor = "white", icon, iconHover }: SkillIconMutedProps) => {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div 
        className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 bg-muted group-hover:bg-[var(--hover-bg)]"
        style={{ '--hover-bg': bgColor } as React.CSSProperties}
      >
        {icon ? (
          <>
            <span className="group-hover:hidden text-muted-foreground">
              {icon}
            </span>
            <span className="hidden group-hover:block">
              {iconHover || icon}
            </span>
          </>
        ) : (
          <span 
            className="text-lg md:text-xl font-bold text-muted-foreground group-hover:text-[var(--hover-text)] transition-colors duration-300"
            style={{ '--hover-text': textColor } as React.CSSProperties}
          >
            {abbreviation}
          </span>
        )}
      </div>
      <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        {name}
      </span>
    </div>
  );
};

export default SkillIconMuted;
