/**
 * REFERENCE FILE: Search UI Options A & B
 * 
 * This file contains the archived code for Options A and B of the Search UI section
 * from the RuralLandMarketplaceProject page. These were alternative layout designs
 * that can be restored if needed.
 * 
 * To use: Copy the relevant JSX into the Search section of RuralLandMarketplaceProject.tsx
 */

// =============================================================================
// OPTION A: 2/3 + 1/3 Grid Layout with Full Height Sections
// =============================================================================
// Features:
// - Three 90vh sections, one for each search feature
// - Image takes 2/3 width, text takes 1/3 width
// - Static scroll-through experience

export const SearchOptionA = () => {
  // Requires these imports:
  // import searchUiLocation from "@/assets/search-ui-location-2.png";
  // import searchUiPrice from "@/assets/search-ui-price.png";
  // import searchUiFilters from "@/assets/search-ui-filters.png";
  
  return (
    <div className="mt-16 md:mt-24">
      {/* Subsection 1: Geographical Search */}
      <div className="h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center w-full">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden">
            <img 
              src="/placeholder-location.png" 
              alt="Geographic search interface showing location autocomplete and map view" 
              className="w-full h-auto"
            />
          </div>
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Geographical Search</h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Geographic Search allows users to quickly search by state, city, counties, or multiple locations on the map.
            </p>
            <div className="space-y-2 text-base md:text-lg text-muted-foreground">
              <p><strong className="text-primary">Multi-location selection:</strong> Add multiple locations to refine search results</p>
              <p><strong className="text-primary">Smart autocomplete:</strong> Instant suggestions as users type</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subsection 2: Responsive Filters */}
      <div className="h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center w-full">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden">
            <img 
              src="/placeholder-price.png" 
              alt="Responsive price filter interface with quick select options" 
              className="w-full h-auto"
            />
          </div>
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Responsive Filters</h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Additive filters provide instant feedback as filters are added, instead of having to add multiple filters, run a search, and see no results.
            </p>
            <div className="space-y-2 text-base md:text-lg text-muted-foreground">
              <p><strong className="text-primary">Real-time updates:</strong> Results update instantly as filters change</p>
              <p><strong className="text-primary">Quick presets:</strong> Common price ranges available with one click</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subsection 3: Advanced Land Specific Filtering */}
      <div className="h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center w-full">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden">
            <img 
              src="/placeholder-filters.png" 
              alt="Advanced filtering panel with property types, acreage, and land-specific options" 
              className="w-full h-auto"
            />
          </div>
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Advanced Land Specific Filtering</h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Purpose-built filters for rural land buyers including property types like Ranch, Homesite, Farms, Recreational, and more.
            </p>
            <div className="space-y-2 text-base md:text-lg text-muted-foreground">
              <p><strong className="text-primary">Property type icons:</strong> Visual categorization for quick scanning</p>
              <p><strong className="text-primary">Land-specific metrics:</strong> Acreage ranges, water features, terrain types</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// =============================================================================
// OPTION B: Full-Screen Carousel with Button Navigation
// =============================================================================
// Features:
// - Tab-like buttons above the image to switch between views
// - Full 95vh image display with fade transitions
// - 5 slides: Default, Location, Price, Filters, Layers

export const SearchOptionB = () => {
  // Requires these imports and state:
  // import { useState } from "react";
  // import { cn } from "@/lib/utils";
  // import searchUiDefault from "@/assets/search-ui-default.png";
  // import searchUiLocation from "@/assets/search-ui-location-2.png";
  // import searchUiPrice from "@/assets/search-ui-price.png";
  // import searchUiFilters from "@/assets/search-ui-filters.png";
  // import searchUiLayers from "@/assets/search-ui-layers.png";
  //
  // const [carouselSlide, setCarouselSlide] = useState(0);
  
  const carouselSlide = 0; // Replace with state
  const setCarouselSlide = (index: number) => {}; // Replace with state setter
  
  const slides = [
    { src: "/placeholder-default.png", alt: "Search UI default view" },
    { src: "/placeholder-location.png", alt: "Search UI location search" },
    { src: "/placeholder-price.png", alt: "Search UI price filter" },
    { src: "/placeholder-filters.png", alt: "Search UI filters panel" },
    { src: "/placeholder-layers.png", alt: "Search UI with map layers" }
  ];
  
  return (
    <div className="mt-16 md:mt-24">
      {/* Section subtitle */}
      <p className="text-muted-foreground text-lg mb-8 text-center">
        Interactive search interface with location-based filtering, price controls, and map layers
      </p>
      
      {/* Carousel navigation buttons - above image */}
      <div className="flex justify-center gap-3 mb-6">
        {['Default', 'Location', 'Price', 'Filters', 'Layers'].map((label, index) => (
          <button
            key={index}
            onClick={() => setCarouselSlide(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              carouselSlide === index 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {/* Full-screen carousel section */}
      <div className="relative w-full h-[95vh] overflow-hidden">
        {/* Carousel slides with fade animation */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              carouselSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img 
              src={slide.src} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


// =============================================================================
// STATE REQUIREMENTS
// =============================================================================
// If restoring Option A or B, add this state to the component:
//
// const [searchDesignOption, setSearchDesignOption] = useState<'A' | 'B'>('A');
// const [carouselSlide, setCarouselSlide] = useState(0); // Only needed for Option B
//
// And add the toggle UI:
// <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-background/90 backdrop-blur-md border border-border rounded-full px-2 py-1.5 shadow-lg">
//   <button
//     onClick={() => setSearchDesignOption('A')}
//     className={cn(
//       "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
//       searchDesignOption === 'A' 
//         ? "bg-primary text-primary-foreground" 
//         : "text-muted-foreground hover:text-foreground"
//     )}
//   >
//     Option A
//   </button>
//   <button
//     onClick={() => setSearchDesignOption('B')}
//     className={cn(
//       "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
//       searchDesignOption === 'B' 
//         ? "bg-primary text-primary-foreground" 
//         : "text-muted-foreground hover:text-foreground"
//     )}
//   >
//     Option B
//   </button>
// </div>
