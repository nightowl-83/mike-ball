import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

interface SlideNavSection {
  id: string;
  label: string;
  number: string;
}

interface SlideNavProps {
  sections: SlideNavSection[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  className?: string;
}

export const SlideNav = ({
  sections,
  currentIndex,
  onNavigate,
  className,
}: SlideNavProps) => {
  const isMobile = useIsMobile();

  const NavContent = () => (
    <nav className="flex flex-col justify-center h-full py-8">
      {/* Back Button */}
      <div className="px-4 md:px-6 mb-8">
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground w-full justify-start"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden md:inline">Back to Home</span>
          </Button>
        </Link>
      </div>

      {/* Section List */}
      <div className="flex-1 flex flex-col justify-center gap-1 px-2 md:px-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onNavigate(index)}
            aria-current={currentIndex === index ? "true" : undefined}
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200",
              "hover:bg-accent/50",
              currentIndex === index
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "text-xs font-mono w-8 shrink-0",
                currentIndex === index ? "text-primary" : "text-muted-foreground/60"
              )}
            >
              {section.number || `0${index + 1}`}
            </span>
            <span className="text-sm font-medium hidden md:block truncate">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="px-4 md:px-6 mt-8">
        <div className="text-xs text-muted-foreground text-center md:text-left">
          <span className="text-foreground font-medium">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          <span>{sections.length}</span>
        </div>
      </div>
    </nav>
  );

  // Mobile: Bottom floating indicator with sheet
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-card/90 backdrop-blur-lg border border-border shadow-lg flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              {sections[currentIndex]?.label}
            </span>
            <span className="text-xs text-muted-foreground">
              {currentIndex + 1}/{sections.length}
            </span>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[60vh] bg-background/95 backdrop-blur-lg">
          <NavContent />
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop: Fixed left sidebar
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen w-16 md:w-56 lg:w-64",
        "bg-background/80 backdrop-blur-lg",
        "border-r border-border",
        "z-40",
        className
      )}
    >
      <NavContent />
    </aside>
  );
};

export default SlideNav;
