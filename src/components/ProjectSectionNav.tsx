import { ChevronUp, ChevronDown } from "lucide-react";

interface Section {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
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
  const goToPrevious = () => {
    const prevIndex = Math.max(0, currentSectionIndex - 1);
    setCurrentSectionIndex(prevIndex);
    // If going to first section (hero), scroll to top of page
    if (prevIndex === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      sections[prevIndex]?.ref?.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const goToNext = () => {
    const nextIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
    setCurrentSectionIndex(nextIndex);
    sections[nextIndex]?.ref?.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
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
