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

  // Helper: Check if a section is a "major" section (no subsection)
  const isMajorSection = (index: number) => !sections[index]?.subsection;

  // Helper: Find the major section index for the current position
  const getCurrentMajorIndex = () => {
    // Walk backward from currentSectionIndex to find the major section we're "in"
    for (let i = currentSectionIndex; i >= 0; i--) {
      if (isMajorSection(i)) return i;
    }
    return 0;
  };

  // Helper: Find the previous major section index
  const findPrevMajorIndex = (fromMajorIndex: number) => {
    for (let i = fromMajorIndex - 1; i >= 0; i--) {
      if (isMajorSection(i)) return i;
    }
    return 0; // Return hero/top
  };

  // Helper: Find the next major section index
  const findNextMajorIndex = (fromMajorIndex: number) => {
    for (let i = fromMajorIndex + 1; i < sections.length; i++) {
      if (isMajorSection(i)) return i;
    }
    return fromMajorIndex; // No next major, stay put
  };

  const goToPrevious = () => {
    const currentMajor = getCurrentMajorIndex();
    const prevMajor = findPrevMajorIndex(currentMajor);
    setCurrentSectionIndex(prevMajor);
    scrollToSectionIndex(prevMajor);
  };

  const goToNext = () => {
    const currentMajor = getCurrentMajorIndex();
    const nextMajor = findNextMajorIndex(currentMajor);
    setCurrentSectionIndex(nextMajor);
    scrollToSectionIndex(nextMajor);
  };

  // Check if there's a previous/next major section for disabled states
  const currentMajor = getCurrentMajorIndex();
  const hasPrevMajor = currentMajor > 0;
  const hasNextMajor = findNextMajorIndex(currentMajor) !== currentMajor;

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
        disabled={!hasPrevMajor}
        className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous section"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        disabled={!hasNextMajor}
        className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next section"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProjectSectionNav;
