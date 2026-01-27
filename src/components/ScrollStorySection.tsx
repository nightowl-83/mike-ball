import { useRef } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/utils';

export interface StoryItem {
  text: string;
  image: string;
  imageAlt: string;
  subheader?: string;
}

interface ScrollStorySectionProps {
  /** Array of story items with text and image */
  stories: StoryItem[];
  /** Swap image/text column positions */
  reversed?: boolean;
  /** Optional section title */
  sectionTitle?: string;
  /** Optional section number (e.g., "/04") */
  sectionNumber?: string;
  /** Show progress indicator */
  showProgressIndicator?: boolean;
  /** Progress indicator style */
  progressStyle?: 'dots' | 'line';
  /** Additional class names */
  className?: string;
}

/**
 * ScrollStorySection - A scroll-driven storytelling component
 * 
 * Layout name: "story-reveal"
 * 
 * Usage:
 * - Default: <ScrollStorySection stories={[...]} />
 * - Reversed: <ScrollStorySection stories={[...]} reversed />
 * - With header: <ScrollStorySection stories={[...]} sectionTitle="Features" sectionNumber="/04" />
 * - Line progress: <ScrollStorySection stories={[...]} progressStyle="line" />
 */
export const ScrollStorySection = ({
  stories,
  reversed = false,
  sectionTitle,
  sectionNumber,
  showProgressIndicator = true,
  progressStyle = 'dots',
  className,
}: ScrollStorySectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { activeSlide, slideProgress, isInView } = useScrollProgress(containerRef, {
    slideCount: stories.length,
    offset: 0,
  });

  // Calculate height based on number of stories (100vh per story)
  const containerHeight = `${stories.length * 100}vh`;

  return (
    <section
      ref={containerRef}
      className={cn('relative', className)}
      style={{ height: containerHeight }}
    >
      {/* Sticky container that holds both columns */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Optional Section Header with Progress Indicator */}
        {(sectionTitle || sectionNumber) && (
          <div className="absolute top-0 left-0 right-0 z-10 pt-20 md:pt-24">
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
              <div className="flex items-baseline justify-between mb-6">
                {sectionTitle && (
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    {sectionTitle}
                  </h2>
                )}
                {sectionNumber && (
                  <span className="text-xl md:text-4xl font-bold font-mono opacity-20">
                    {sectionNumber}
                  </span>
                )}
              </div>
              {/* Progress Indicator - Now under title */}
              {showProgressIndicator && (
                <div className="flex items-center gap-2">
                  {progressStyle === 'dots' ? (
                    <div className="flex gap-2">
                      {stories.map((_, index) => (
                        <div
                          key={index}
                          className={cn(
                            'w-2 h-2 rounded-full transition-all duration-300',
                            index === activeSlide
                              ? 'bg-primary scale-125'
                              : index < activeSlide
                              ? 'bg-primary/50'
                              : 'bg-muted-foreground/30'
                          )}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="w-24 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{
                          width: `${((activeSlide + slideProgress) / stories.length) * 100}%`,
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Two-Column Layout */}
        <div className={cn(
          'h-full flex flex-col md:flex-row',
          reversed ? 'md:flex-row-reverse' : ''
        )}>
          {/* Text Column */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 relative">
            {/* Text Items */}
            <div className="relative max-w-xl ml-8 md:ml-12">
              {stories.map((story, index) => {
                const isActive = index === activeSlide;
                const isPast = index < activeSlide;
                
                // Split text into words for staggered animation
                const words = story.text.split(' ');
                
                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out',
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0',
                      isPast ? '-translate-y-12' : 'translate-y-12'
                    )}
                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    {story.subheader && (
                      <h3 className="text-lg md:text-xl font-bold text-[#8B9AAD] mb-4">
                        {story.subheader}
                      </h3>
                    )}
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                      {words.map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className={cn(
                            'inline-block mr-[0.3em] transition-all ease-out',
                            isActive 
                              ? 'opacity-100 translate-y-0 blur-0' 
                              : 'opacity-0 translate-y-4 blur-sm'
                          )}
                          style={{
                            transitionDuration: '600ms',
                            transitionDelay: isActive ? `${wordIndex * 30}ms` : '0ms',
                          }}
                        >
                          <span
                            className={cn(
                              'transition-colors duration-500',
                              isActive ? 'text-foreground' : 'text-muted-foreground'
                            )}
                          >
                            {word}
                          </span>
                        </span>
                      ))}
                    </p>
                  </div>
                );
              })}
              {/* Spacer for layout */}
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-0 pointer-events-none">
                {stories[0]?.text}
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
            {stories.map((story, index) => {
              const isActive = index === activeSlide;
              const scale = isActive ? 1 : 0.98;
              
              return (
                <div
                  key={index}
                  className={cn(
                    'absolute inset-0 transition-all duration-700 ease-out',
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  )}
                  style={{
                    transform: `scale(${scale})`,
                  }}
                >
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStorySection;
