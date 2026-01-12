interface SkillIconProps {
  name: string;
  abbreviation?: string;
  bgColor: string;
  textColor?: string;
  icon?: React.ReactNode;
}

const SkillIcon = ({ name, abbreviation, bgColor, textColor = "white", icon }: SkillIconProps) => {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div 
        className="w-11 h-11 md:w-16 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        style={{ backgroundColor: bgColor }}
      >
        {icon ? (
          icon
        ) : (
          <span 
            className="text-base md:text-xl font-bold"
            style={{ color: textColor }}
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

export default SkillIcon;
