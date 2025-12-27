import { useEffect, useState, RefObject } from 'react';

interface ScrollProgressOptions {
  /** Number of slides to divide the scroll area into */
  slideCount: number;
  /** Offset from top of viewport (in pixels) */
  offset?: number;
}

interface ScrollProgressResult {
  /** Current active slide index (0-based) */
  activeSlide: number;
  /** Progress within current slide (0-1) */
  slideProgress: number;
  /** Overall scroll progress (0-1) */
  totalProgress: number;
  /** Whether the container is in view */
  isInView: boolean;
}

export const useScrollProgress = (
  containerRef: RefObject<HTMLElement>,
  options: ScrollProgressOptions
): ScrollProgressResult => {
  const { slideCount, offset = 0 } = options;
  const [result, setResult] = useState<ScrollProgressResult>({
    activeSlide: 0,
    slideProgress: 0,
    totalProgress: 0,
    isInView: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the container has been scrolled past
      // When rect.top is at viewport top (minus offset), progress = 0
      // When rect.bottom is at viewport top, progress = 1
      const scrollableHeight = containerHeight - viewportHeight;
      const scrolled = -rect.top + offset;
      
      // Clamp progress between 0 and 1
      const totalProgress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      // Determine if container is in view
      const isInView = rect.top < viewportHeight && rect.bottom > 0;
      
      // Calculate active slide (0-indexed)
      const rawSlide = totalProgress * slideCount;
      const activeSlide = Math.min(Math.floor(rawSlide), slideCount - 1);
      
      // Calculate progress within the current slide (0-1)
      const slideProgress = rawSlide - activeSlide;

      setResult({
        activeSlide: Math.max(0, activeSlide),
        slideProgress,
        totalProgress,
        isInView,
      });
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [containerRef, slideCount, offset]);

  return result;
};
