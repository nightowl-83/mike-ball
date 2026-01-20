import React from 'react';
import { LayoutGrid, Rows3, Columns3, StretchHorizontal } from 'lucide-react';

interface PersonaLayoutToggleProps {
  activeLayout: 1 | 2 | 3 | 4;
  onLayoutChange: (layout: 1 | 2 | 3 | 4) => void;
}

const layouts = [
  { id: 1 as const, label: 'V1', icon: Rows3, tooltip: 'Default Layout' },
  { id: 2 as const, label: 'V2', icon: LayoutGrid, tooltip: 'Compact (50vh)' },
  { id: 3 as const, label: 'V3', icon: Columns3, tooltip: '3-Column Grid' },
  { id: 4 as const, label: 'V4', icon: StretchHorizontal, tooltip: 'Strip (Recommended)' },
];

export const PersonaLayoutToggle = ({ activeLayout, onLayoutChange }: PersonaLayoutToggleProps) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg shadow-sm">
      <span className="text-[10px] text-muted-foreground px-2 hidden sm:inline uppercase tracking-wider">Layout</span>
      {layouts.map(({ id, label, icon: Icon, tooltip }) => (
        <button
          key={id}
          onClick={() => onLayoutChange(id)}
          className={`
            flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium
            transition-all duration-200
            ${activeLayout === id 
              ? 'bg-primary text-primary-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }
          `}
          title={tooltip}
        >
          <Icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default PersonaLayoutToggle;
