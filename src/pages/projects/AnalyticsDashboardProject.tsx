import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AnalyticsDashboardProject = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full-Width Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-50">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <img 
          src="/placeholder.svg" 
          alt="Analytics Dashboard hero"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-50% to-background to-100%" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                SaaS Product
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Analytics Dashboard
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Data visualization platform helping teams make informed decisions with 
                real-time insights and beautiful charts.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <span className="text-sm text-muted-foreground">Role</span>
                  <p className="font-semibold">Product Designer</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Timeline</span>
                  <p className="font-semibold">5 months</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Year</span>
                  <p className="font-semibold">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-[10vh] z-10 bg-background">
        {/* Overview Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl font-bold">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This project focused on creating a powerful yet intuitive analytics platform 
                  that makes complex data accessible to everyone. The challenge was to present 
                  vast amounts of data in a way that's both beautiful and actionable.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The result is a dashboard that increased user data comprehension by 70% 
                  and reduced time-to-insight by 55%.
                </p>
              </div>
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card animate-scale-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Overview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-card/30">
          <div className="container mx-auto max-w-7xl">
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-glow animate-fade-in">
              <img 
                src="/placeholder.svg" 
                alt="Full width showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card animate-scale-in order-2 lg:order-1">
                <img 
                  src="/placeholder.svg" 
                  alt="Challenge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 animate-fade-in order-1 lg:order-2">
                <h2 className="text-4xl font-bold">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional analytics tools are either too basic or overwhelmingly complex. 
                  Users need a solution that scales from simple reports to advanced analysis.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Make complex data accessible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Create flexible visualization options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Enable real-time collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl font-bold">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We created a modular dashboard system with customizable widgets, intelligent 
                  data visualization recommendations, and powerful filtering capabilities.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <p className="text-muted-foreground">
                      Drag-and-drop widgets, custom reports, real-time data sync, 
                      AI-powered insights, and team collaboration tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card animate-scale-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Solution"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-bold mb-16 animate-fade-in">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4 animate-scale-in">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  70%
                </div>
                <p className="text-muted-foreground">
                  Increase in data comprehension
                </p>
              </div>
              <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  55%
                </div>
                <p className="text-muted-foreground">
                  Reduction in time-to-insight
                </p>
              </div>
              <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  4.9/5
                </div>
                <p className="text-muted-foreground">
                  Average user rating
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Showcase */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-card/30">
          <div className="container mx-auto max-w-7xl space-y-12">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-glow animate-fade-in">
              <img 
                src="/placeholder.svg" 
                alt="Final showcase 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card animate-scale-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Final showcase 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <img 
                  src="/placeholder.svg" 
                  alt="Final showcase 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Next Project */}
        <section className="px-6 py-24 border-t border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Next Project</p>
                <h3 className="text-2xl font-bold">Mobile Banking App</h3>
              </div>
              <Link to="/projects/mobile-banking">
                <Button variant="outline" className="gap-2">
                  View Project
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnalyticsDashboardProject;
