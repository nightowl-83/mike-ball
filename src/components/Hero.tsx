import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section 
        data-bg-state="floating"
        className="relative min-h-screen flex items-start justify-center"
      >
        {/* Content - positioned between navbar and cloud (~30% from top) */}
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in" style={{ paddingTop: '25vh' }}>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Main Heading */}
            <div className="space-y-4">
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
        <div className="absolute bottom-8 inset-x-0 z-10 flex justify-center animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
