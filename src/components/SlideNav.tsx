import { cn } from "@/lib/utils";
import { ArrowLeft, ChevronDown } from "lucide-react";
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

  const NavContent = ({ onItemClick }: { onItemClick?: () => void }) => (
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

      <div className="flex-1 flex flex-col justify-center gap-1 px-2 md:px-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              onNavigate(index);
              onItemClick?.();
            }}
            aria-current={currentIndex === index ? "true" : undefined}
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200",
              "hover:bg-accent/50",
              currentIndex === index
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {section.number && (
              <span
                className={cn(
                  "text-xs font-mono w-8 shrink-0",
                  currentIndex === index ? "text-primary" : "text-muted-foreground/60"
                )}
              >
                {section.number}
              </span>
            )}
            <span className="text-sm font-medium truncate">
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

  // Mobile: Top bar with dropdown sheet
  if (isMobile) {
    return (
      <Sheet>
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 text-muted-foreground hover:text-foreground p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            
            <SheetTrigger asChild>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-border">
                {sections[currentIndex]?.number && (
                  <span className="text-xs font-mono text-muted-foreground">
                    {sections[currentIndex].number}
                  </span>
                )}
                <span className="text-sm font-medium text-foreground">
                  {sections[currentIndex]?.label}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </SheetTrigger>
            
            <div className="text-xs text-muted-foreground">
              {currentIndex + 1}/{sections.length}
            </div>
          </div>
        </div>
        <SheetContent side="top" className="h-auto max-h-[70vh] bg-background/95 backdrop-blur-lg pt-16">
          <NavContent onItemClick={() => {
            // Sheet will close automatically via SheetClose behavior
          }} />
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
