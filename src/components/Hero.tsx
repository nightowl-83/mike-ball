import { Code, Sparkles, Bot, Figma, Pen } from "lucide-react";
import SkillIcon from "./SkillIcon";
import Navbar from "./Navbar";

const Hero = () => {
  const skills = [
    { name: "Illustrator", abbreviation: "Ai", bgColor: "#FF9A00", textColor: "#000" },
    { name: "Photoshop", abbreviation: "Ps", bgColor: "#001E36", textColor: "#31A8FF" },
    { name: "InDesign", abbreviation: "Id", bgColor: "#49021F", textColor: "#FF3366" },
    { name: "After Effects", abbreviation: "Ae", bgColor: "#00005B", textColor: "#9999FF" },
    { name: "Figma", abbreviation: "", bgColor: "#1E1E1E", textColor: "#fff", icon: <Figma className="w-6 h-6 text-white" /> },
    { name: "Cursor", abbreviation: "", bgColor: "#1E1E1E", textColor: "#fff", icon: <Sparkles className="w-6 h-6 text-orange-500" /> },
    { name: "Code", abbreviation: "", bgColor: "#1E1E1E", textColor: "#fff", icon: <Code className="w-6 h-6 text-white" /> },
    { name: "AI Tools", abbreviation: "", bgColor: "#1E1E1E", textColor: "#fff", icon: <Bot className="w-6 h-6 text-white" /> },
  ];

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center bg-background">
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Hello, I'm Mike<span className="text-primary">.</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
                A Product Designer that uses<br />
                AI, UX, design, & code to<br />
                tackle hard problems.
              </p>
            </div>

            {/* Skills Section */}
            <div className="pt-8 space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Skills
              </h2>
              
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {skills.map((skill) => (
                  <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    abbreviation={skill.abbreviation}
                    bgColor={skill.bgColor}
                    textColor={skill.textColor}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">scroll</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
