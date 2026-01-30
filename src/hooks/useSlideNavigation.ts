import { useRef, useState, useEffect, useCallback, RefObject } from "react";

interface UseSlideNavigationOptions {
  sectionCount: number;
  threshold?: number;
}

interface UseSlideNavigationReturn {
  currentSectionIndex: number;
  scrollToSection: (index: number) => void;
  containerRef: RefObject<HTMLDivElement>;
  sectionRefs: RefObject<HTMLDivElement>[];
}

export function useSlideNavigation({
  sectionCount,
  threshold = 0.5,
}: UseSlideNavigationOptions): UseSlideNavigationReturn {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create refs for each section
  const sectionRefs = useRef<RefObject<HTMLDivElement>[]>(
    Array.from({ length: sectionCount }, () => ({ current: null }))
  ).current;

  // Scroll to a specific section
  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    const sectionRef = sectionRefs[index];
    
    if (container && sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [sectionRefs]);

  // Track current section via Intersection Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observers: IntersectionObserver[] = [];

    sectionRefs.forEach((ref, index) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              setCurrentSectionIndex(index);
            }
          });
        },
        {
          root: container,
          threshold: threshold,
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionRefs, threshold]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if focus is on an input or textarea
      const activeElement = document.activeElement;
      if (
        activeElement?.tagName === "INPUT" ||
        activeElement?.tagName === "TEXTAREA" ||
        activeElement?.getAttribute("contenteditable") === "true"
      ) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = Math.min(currentSectionIndex + 1, sectionCount - 1);
        scrollToSection(nextIndex);
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = Math.max(currentSectionIndex - 1, 0);
        scrollToSection(prevIndex);
      }
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentSectionIndex, sectionCount, scrollToSection]);

  return {
    currentSectionIndex,
    scrollToSection,
    containerRef,
    sectionRefs,
  };
}

export default useSlideNavigation;
