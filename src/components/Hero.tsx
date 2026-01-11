import Navbar from "./Navbar";

const Hero = () => {
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
