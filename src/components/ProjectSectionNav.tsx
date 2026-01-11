import { ChevronUp, ChevronDown, ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
  // Optional metadata (used by project pages)
  number?: string;
  subsection?: string;
}

interface ProjectSectionNavProps {
  sections: Section[];
  currentSectionIndex: number;
  setCurrentSectionIndex: (index: number) => void;
}

/**
 * ProjectSectionNav - Sticky bottom-right navigation arrows for scrolling between project sections
 * 
 * Usage:
 * 1. Define sections array with id and ref for each section
 * 2. Track currentSectionIndex with useState
 * 3. Place <ProjectSectionNav /> at the end of your component (outside main content div)
 * 
 * Example:
 * const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
 * const sections = [
 *   { id: 'hero', ref: heroRef },
 *   { id: 'overview', ref: overviewRef },
 *   ...
 * ];
 * 
 * <ProjectSectionNav 
 *   sections={sections}
 *   currentSectionIndex={currentSectionIndex}
 *   setCurrentSectionIndex={setCurrentSectionIndex}
 * />
 */
const ProjectSectionNav = ({
  sections,
  currentSectionIndex,
  setCurrentSectionIndex
}: ProjectSectionNavProps) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSectionIndex = (index: number) => {
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    sections[index]?.ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goToPrevious = () => {
    let prevIndex = Math.max(0, currentSectionIndex - 1);

    // When crossing between numbered sections (/02 -> /01), scroll to the *start* of the previous number block.
    const currentNumber = sections[currentSectionIndex]?.number;
    const prevNumber = sections[prevIndex]?.number;
    if (currentNumber && prevNumber && currentNumber !== prevNumber) {
      // Find the start of the prevNumber block
      while (prevIndex > 0 && sections[prevIndex - 1]?.number === prevNumber) {
        prevIndex--;
      }

      // Prefer the block entry that represents the main section (no subsection)
      for (let i = prevIndex; i < sections.length && sections[i]?.number === prevNumber; i++) {
        if (!sections[i]?.subsection) {
          prevIndex = i;
          break;
        }
      }
    }

    setCurrentSectionIndex(prevIndex);
    scrollToSectionIndex(prevIndex);
  };

  const goToNext = () => {
    const nextIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
    setCurrentSectionIndex(nextIndex);
    scrollToSectionIndex(nextIndex);
  };

  const goToTop = () => {
    setCurrentSectionIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      {showBackToTop && (
        <button
          onClick={goToTop}
          className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all"
          aria-label="Back to top"
        >
          <ArrowUpToLine className="w-5 h-5" />
        </button>
      )}
      <button
        onClick={goToPrevious}
        disabled={currentSectionIndex === 0}
        className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous section"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        disabled={currentSectionIndex === sections.length - 1}
        className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next section"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProjectSectionNav;
