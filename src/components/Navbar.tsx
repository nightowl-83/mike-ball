import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/#" + targetId);
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[880px] bg-background/70 backdrop-blur-md border border-border/50 rounded-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Mike<span className="text-primary">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#work" 
            onClick={(e) => handleNavClick(e, "work")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a 
            href="/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            size="sm" 
            variant="outline" 
            className="hidden sm:flex"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/#contact");
              } else {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get In Touch
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <nav className="flex flex-col gap-4">
                <SheetClose asChild>
                  <a 
                    href="#work" 
                    onClick={(e) => handleNavClick(e, "work")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Work
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="/about" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    About
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Contact
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <Button 
                    className="mt-4 w-full"
                    onClick={() => {
                      if (location.pathname !== "/") {
                        navigate("/#contact");
                      } else {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Get In Touch
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
