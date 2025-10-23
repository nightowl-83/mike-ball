import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EcommerceProject = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6 mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Web Design
            </span>
            <h1 className="text-5xl md:text-7xl font-bold">
              E-Commerce Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Complete redesign of an online shopping experience focusing on conversion 
              optimization and user engagement.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div>
                <span className="text-sm text-muted-foreground">Role</span>
                <p className="font-semibold">UX/UI Designer</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Timeline</span>
                <p className="font-semibold">4 months</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Year</span>
                <p className="font-semibold">2024</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-24 animate-scale-in shadow-glow">
            <img 
              src="/placeholder.svg" 
              alt="E-Commerce Platform hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-24 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The goal was to transform an outdated e-commerce experience into a modern, 
                conversion-focused platform. We focused on streamlining the checkout process 
                and creating a more engaging product discovery experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The redesign resulted in a 35% increase in conversion rate and a 50% 
                reduction in cart abandonment.
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
      <section className="px-6 py-24">
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
      <section className="px-6 py-24 bg-card/30">
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
                The existing platform had a confusing navigation structure, lengthy checkout 
                process, and poor product presentation that was hurting sales.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Reduce cart abandonment rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Improve product discovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Streamline checkout process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We implemented a modern design system, simplified the checkout to 3 steps, 
                and created an intelligent product recommendation engine.
              </p>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Key Features</h3>
                  <p className="text-muted-foreground">
                    One-click checkout, personalized recommendations, enhanced search, 
                    and AR product preview.
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
      <section className="px-6 py-24 bg-card/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-16 animate-fade-in">Impact & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 animate-scale-in">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                35%
              </div>
              <p className="text-muted-foreground">
                Increase in conversion rate
              </p>
            </div>
            <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                50%
              </div>
              <p className="text-muted-foreground">
                Reduction in cart abandonment
              </p>
            </div>
            <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                4.7/5
              </div>
              <p className="text-muted-foreground">
                Average user rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Showcase */}
      <section className="px-6 py-24">
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
              <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
            </div>
            <Link to="/projects/analytics-dashboard">
              <Button variant="outline" className="gap-2">
                View Project
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceProject;
