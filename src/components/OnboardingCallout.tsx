import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PersonaMapping {
  persona: string;
  action: string;
}

interface OnboardingCalloutProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  personaMappings?: PersonaMapping[];
  reversed?: boolean;
  showDivider?: boolean;
  noPadding?: boolean;
  noImageBackground?: boolean;
}

export const OnboardingCallout = ({
  title,
  subtitle,
  description,
  image,
  personaMappings = [],
  reversed = false,
  showDivider = false,
  noPadding = false,
  noImageBackground = false,
}: OnboardingCalloutProps) => {
  const anim = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={anim.ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
        noPadding ? "py-0 lg:py-0 pb-0" : "py-12 lg:py-16",
        showDivider && "border-b border-border/50"
      )}
    >
      {/* Image Column */}
      <div 
        className={cn(
          "lg:col-span-7",
          reversed ? "lg:order-2" : "lg:order-1",
          "transition-all duration-700 ease-out",
          anim.isVisible 
            ? "opacity-100 translate-x-0" 
            : reversed 
              ? "opacity-0 translate-x-12" 
              : "opacity-0 -translate-x-12"
        )}
        style={{ transitionDelay: "100ms" }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Text Column */}
      <div 
        className={cn(
          "lg:col-span-5",
          reversed ? "lg:order-1" : "lg:order-2"
        )}
      >
        {subtitle && (
          <span 
            className={cn(
              "text-xs uppercase tracking-wider text-[#CCFF00] font-medium block mb-2",
              "transition-all duration-500 ease-out",
              anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            {subtitle}
          </span>
        )}

        <h3 
          className={cn(
            "text-2xl lg:text-3xl font-bold text-white mb-4",
            "transition-all duration-500 ease-out",
            anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          {title}
        </h3>

        <p 
          className={cn(
            "text-base text-white/70 leading-relaxed mb-6",
            "transition-all duration-500 ease-out",
            anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          {description}
        </p>

        {personaMappings.length > 0 && (
          <div className="space-y-3">
            <span 
              className={cn(
                "text-xs uppercase tracking-wider text-white/50 font-medium block",
                "transition-all duration-500 ease-out",
                anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "500ms" }}
            >
              Persona Mapping
            </span>
            {personaMappings.map((mapping, index) => (
              <div 
                key={index}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-lg bg-[#1E1E24] border border-[#2D2D3A]",
                  "transition-all duration-500 ease-out",
                  anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${550 + index * 100}ms` }}
              >
                <span className="text-[#CCFF00] font-semibold text-sm shrink-0">
                  {mapping.persona}:
                </span>
                <span className="text-white/70 text-sm">
                  {mapping.action}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingCallout;
