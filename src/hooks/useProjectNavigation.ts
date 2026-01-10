import { useState, useEffect, RefObject } from 'react';

interface Section {
  id: string;
  section: string;
  subsection: string;
  number: string;
  ref: RefObject<HTMLDivElement>;
}

interface StickyHeaderState {
  visible: boolean;
  section: string;
  subsection: string;
  number: string;
}

/**
 * useProjectNavigation - Unified hook for project page navigation
 * 
 * Handles both:
 * 1. currentSectionIndex tracking for arrow navigation (ProjectSectionNav)
 * 2. stickyHeader state for the top navigation bar (StickyNavHeader)
 * 
 * Usage:
 * const { currentSectionIndex, setCurrentSectionIndex, stickyHeader } = useProjectNavigation(sections);
 */
export const useProjectNavigation = (sections: Section[]) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [stickyHeader, setStickyHeader] = useState<StickyHeaderState>({
    visible: false,
    section: '',
    subsection: '',
    number: ''
  });

  // Track current section index for arrow navigation
  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const ref = sections[i].ref;
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= viewportMiddle) {
            setCurrentSectionIndex(i);
            return;
          }
        }
      }
      setCurrentSectionIndex(0);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Track sticky header visibility and current section
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-100px 0px -50% 0px'
    };

    const observers: IntersectionObserver[] = [];

    sections.forEach((section, index) => {
      if (section.ref.current) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setStickyHeader({
              visible: index > 0, // Hide on first section (hero)
              section: section.section,
              subsection: section.subsection,
              number: section.number
            });
          }
        }, observerOptions);
        observer.observe(section.ref.current);
        observers.push(observer);
      }
    });

    // Hide sticky header when at top (hero is visible)
    const heroRef = sections[0]?.ref;
    let topObserver: IntersectionObserver | null = null;
    if (heroRef?.current) {
      topObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setStickyHeader({
            visible: false,
            section: '',
            subsection: '',
            number: ''
          });
        }
      }, { threshold: 0.1 });
      topObserver.observe(heroRef.current);
    }

    return () => {
      observers.forEach(obs => obs.disconnect());
      topObserver?.disconnect();
    };
  }, [sections]);

  return {
    currentSectionIndex,
    setCurrentSectionIndex,
    stickyHeader
  };
};
