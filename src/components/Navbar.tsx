import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[880px] bg-background/70 backdrop-blur-md border border-border/50 rounded-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Mike<span className="text-primary">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" className="hidden sm:flex">
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
