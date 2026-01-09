import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
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
          <ThemeToggle />
          <Button size="sm" variant="outline" className="hidden sm:flex">
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
