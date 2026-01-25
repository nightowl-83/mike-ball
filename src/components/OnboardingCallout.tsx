import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PersonaMapping {
  persona: string;
  description: string;
}

interface OnboardingCalloutProps {
  title: string;
  description: string;
  personaMappings: PersonaMapping[];
  image?: string;
  imageAlt?: string;
  imagePlaceholder?: string;
  reversed?: boolean;
  className?: string;
}

export const OnboardingCallout = ({
  title,
  description,
  personaMappings,
  image,
  imageAlt = "Onboarding screen",
  imagePlaceholder = "Image Coming Soon",
  reversed = false,
  className,
}: OnboardingCalloutProps) => {
  const anim = useScrollAnimation();

  return (
    <div
      ref={anim.ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16 transition-all duration-700",
        anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {/* Image Column */}
      <div
        className={cn(
          "lg:col-span-7 aspect-[4/3] rounded-xl overflow-hidden bg-muted/30 border border-border",
          reversed ? "lg:order-2" : "lg:order-1"
        )}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground text-lg">{imagePlaceholder}</span>
          </div>
        )}
      </div>

      {/* Text Column */}
      <div
        className={cn(
          "lg:col-span-5 space-y-6",
          reversed ? "lg:order-1" : "lg:order-2"
        )}
      >
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Persona Mappings */}
        <div className="space-y-3 pt-4 border-t border-border/50">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Persona Mapping
          </p>
          <div className="space-y-2">
            {personaMappings.map((mapping, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-primary font-semibold text-sm flex-shrink-0">
                  {mapping.persona}:
                </span>
                <span className="text-sm text-muted-foreground">
                  {mapping.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCallout;
