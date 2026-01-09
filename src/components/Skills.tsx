import { Code, Sparkles, Bot, Figma } from "lucide-react";
import SkillIcon from "./SkillIcon";
import SkillIconMuted from "./SkillIconMuted";

interface SkillsProps {
  variant?: "colored" | "muted";
}

const Skills = ({ variant = "colored" }: SkillsProps) => {
  const skills = [
    { name: "Illustrator", abbreviation: "Ai", bgColor: "#FF9A00", textColor: "#000" },
    { name: "Photoshop", abbreviation: "Ps", bgColor: "#001E36", textColor: "#31A8FF" },
    { name: "InDesign", abbreviation: "Id", bgColor: "#49021F", textColor: "#FF3366" },
    { name: "After Effects", abbreviation: "Ae", bgColor: "#00005B", textColor: "#9999FF" },
    { 
      name: "Figma", 
      abbreviation: "", 
      bgColor: "#1E1E1E", 
      textColor: "#fff", 
      icon: <Figma className="w-6 h-6" />,
      iconColored: <Figma className="w-6 h-6 text-white" />
    },
    { 
      name: "Cursor", 
      abbreviation: "", 
      bgColor: "#1E1E1E", 
      textColor: "#fff", 
      icon: <Sparkles className="w-6 h-6" />,
      iconColored: <Sparkles className="w-6 h-6 text-orange-500" />
    },
    { 
      name: "Code", 
      abbreviation: "", 
      bgColor: "#1E1E1E", 
      textColor: "#fff", 
      icon: <Code className="w-6 h-6" />,
      iconColored: <Code className="w-6 h-6 text-white" />
    },
    { 
      name: "AI Tools", 
      abbreviation: "", 
      bgColor: "#1E1E1E", 
      textColor: "#fff", 
      icon: <Bot className="w-6 h-6" />,
      iconColored: <Bot className="w-6 h-6 text-white" />
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Skills
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {variant === "colored" ? (
              skills.map((skill) => (
                <SkillIcon
                  key={skill.name}
                  name={skill.name}
                  abbreviation={skill.abbreviation}
                  bgColor={skill.bgColor}
                  textColor={skill.textColor}
                  icon={skill.iconColored || skill.icon}
                />
              ))
            ) : (
              skills.map((skill) => (
                <SkillIconMuted
                  key={skill.name}
                  name={skill.name}
                  abbreviation={skill.abbreviation}
                  bgColor={skill.bgColor}
                  textColor={skill.textColor}
                  icon={skill.icon}
                  iconHover={skill.iconColored}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
