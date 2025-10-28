import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Section {
  id: string;
  section: string;
  subsection: string;
  number: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface StickyNavHeaderProps {
  visible: boolean;
  currentSection: string;
  currentSubsection: string;
  currentNumber: string;
  sections: Section[];
}

export const StickyNavHeader = ({
  visible,
  currentSection,
  currentSubsection,
  currentNumber,
  sections,
}: StickyNavHeaderProps) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const currentIndex = sections.findIndex(
    (s) => s.section === currentSection && s.subsection === currentSubsection
  );

  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto max-w-[1440px] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              {currentSection}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {currentSubsection && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 text-lg">
                    <span className="text-muted-foreground">
                      {currentSection}: {currentSubsection} {currentNumber}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-background z-[60]">
                {previousSection && (
                  <DropdownMenuItem
                    onClick={() => scrollToSection(previousSection.ref)}
                  >
                    ← Previous:{" "}
                    {previousSection.subsection || previousSection.section}
                  </DropdownMenuItem>
                )}
                {nextSection && (
                  <DropdownMenuItem
                    onClick={() => scrollToSection(nextSection.ref)}
                  >
                    → Next: {nextSection.subsection || nextSection.section}
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem disabled className="opacity-50 cursor-default">
                  ─────────────
                </DropdownMenuItem>
                {sections.map((section) => (
                  <DropdownMenuItem
                    key={section.id}
                    onClick={() => scrollToSection(section.ref)}
                    className={
                      section.section === currentSection &&
                      section.subsection === currentSubsection
                        ? "bg-muted font-medium"
                        : ""
                    }
                  >
                    {section.subsection
                      ? `${section.section}: ${section.subsection}`
                      : section.section}{" "}
                    {section.number}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
