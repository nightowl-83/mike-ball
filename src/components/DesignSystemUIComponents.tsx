import { cn } from "@/lib/utils";
import { Search, Bell, Check } from "lucide-react";

interface UIComponentsShowcaseProps {
  className?: string;
}

export const DesignSystemUIComponents = ({ className }: UIComponentsShowcaseProps) => {
  return (
    <div className={cn("bg-card border border-border rounded-lg p-4 md:p-6", className)}>
      <h3 className="text-lg md:text-xl font-bold mb-2">UI Components</h3>
      <p className="text-sm text-muted-foreground mb-4 md:mb-6">
        Core interface elements using the design system palette.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Buttons */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Buttons</p>
          <div className="flex flex-wrap gap-2">
            {/* Primary - Mt Dew */}
            <button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ backgroundColor: '#CCFF00', color: '#121217' }}>
              Primary
            </button>
            {/* Secondary - Surface with border */}
            <button className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors"
              style={{ backgroundColor: '#1E1E24', borderColor: '#2D2D3A', color: '#FAFBFD' }}>
              Secondary
            </button>
            {/* Ghost */}
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:bg-muted/50 transition-colors">
              Ghost
            </button>
            {/* Destructive - Red Bull */}
            <button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ backgroundColor: '#F43B3E', color: '#FAFBFD' }}>
              Destructive
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Inputs</p>
          <div className="space-y-2">
            {/* Text Input */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border"
              style={{ backgroundColor: '#1E1E24', borderColor: '#2D2D3A' }}>
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Search games...</span>
            </div>
            {/* Standard Input */}
            <div className="px-3 py-2 rounded-lg border"
              style={{ backgroundColor: '#1E1E24', borderColor: '#2D2D3A' }}>
              <span className="text-sm" style={{ color: '#FAFBFD' }}>Username</span>
            </div>
          </div>
        </div>

        {/* Toggle / Switch */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Toggles</p>
          <div className="flex items-center gap-4">
            {/* Toggle Off */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 rounded-full relative"
                style={{ backgroundColor: '#2D2D3A' }}>
                <div className="absolute top-1 left-1 w-4 h-4 rounded-full"
                  style={{ backgroundColor: '#8899A6' }} />
              </div>
              <span className="text-xs text-muted-foreground">Off</span>
            </div>
            {/* Toggle On */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 rounded-full relative"
                style={{ backgroundColor: '#CCFF00' }}>
                <div className="absolute top-1 right-1 w-4 h-4 rounded-full"
                  style={{ backgroundColor: '#121217' }} />
              </div>
              <span className="text-xs text-muted-foreground">On</span>
            </div>
          </div>
        </div>

        {/* Tags / Badges */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Tags & Badges</p>
          <div className="flex flex-wrap gap-2">
            {/* Status Tags */}
            <span className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: 'rgba(204, 255, 0, 0.2)', color: '#CCFF00' }}>
              Active
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: 'rgba(244, 59, 62, 0.2)', color: '#F43B3E' }}>
              Alert
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium border"
              style={{ borderColor: '#2D2D3A', color: '#8899A6' }}>
              Default
            </span>
            {/* Notification Badge */}
            <div className="relative">
              <Bell className="w-5 h-5 text-foreground/70" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-[8px] flex items-center justify-center font-bold"
                style={{ backgroundColor: '#F43B3E', color: '#FAFBFD' }}>
                3
              </span>
            </div>
          </div>
        </div>

        {/* Cards / Containers */}
        <div className="md:col-span-2 space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Cards</p>
          <div className="grid grid-cols-2 gap-3">
            {/* Default Card */}
            <div className="p-4 rounded-lg border"
              style={{ backgroundColor: '#1E1E24', borderColor: '#2D2D3A' }}>
              <p className="text-sm font-medium" style={{ color: '#FAFBFD' }}>Surface Card</p>
              <p className="text-xs mt-1" style={{ color: '#8899A6' }}>Default container style</p>
            </div>
            {/* Highlighted Card */}
            <div className="p-4 rounded-lg border-2"
              style={{ backgroundColor: '#1E1E24', borderColor: 'rgba(204, 255, 0, 0.3)' }}>
              <p className="text-sm font-medium" style={{ color: '#FAFBFD' }}>Highlighted Card</p>
              <p className="text-xs mt-1" style={{ color: '#8899A6' }}>Primary border accent</p>
            </div>
          </div>
        </div>

        {/* Checkbox / Radio */}
        <div className="md:col-span-2 space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Selection</p>
          <div className="flex flex-wrap gap-6">
            {/* Checkbox Unchecked */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded border-2"
                style={{ borderColor: '#2D2D3A' }} />
              <span className="text-sm text-muted-foreground">Unchecked</span>
            </div>
            {/* Checkbox Checked */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded flex items-center justify-center"
                style={{ backgroundColor: '#CCFF00' }}>
                <Check className="w-3 h-3" style={{ color: '#121217' }} />
              </div>
              <span className="text-sm text-muted-foreground">Checked</span>
            </div>
            {/* Radio Unchecked */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2"
                style={{ borderColor: '#2D2D3A' }} />
              <span className="text-sm text-muted-foreground">Option A</span>
            </div>
            {/* Radio Checked */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: '#CCFF00' }}>
                <div className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: '#CCFF00' }} />
              </div>
              <span className="text-sm text-muted-foreground">Option B</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemUIComponents;
