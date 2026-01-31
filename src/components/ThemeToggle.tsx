import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Blue', color: 'hsl(241 76% 55%)', className: '' },
  { id: 'red', name: 'Coral', color: 'hsl(9 85% 58%)', className: 'theme-red' },
  { id: 'teal', name: 'Teal', color: 'hsl(175 70% 45%)', className: 'theme-teal' },
  { id: 'light', name: 'Light', color: 'hsl(241 76% 45%)', className: 'theme-light' },
];

const ThemeToggle = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    // Remove all theme classes
    themes.forEach(theme => {
      if (theme.className) {
        document.documentElement.classList.remove(theme.className);
      }
    });
    // Add current theme class
    const currentTheme = themes[themeIndex];
    if (currentTheme.className) {
      document.documentElement.classList.add(currentTheme.className);
    }
  }, [themeIndex]);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  const currentTheme = themes[themeIndex];

  return (
    <button
      onClick={cycleTheme}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card backdrop-blur-sm hover:bg-secondary transition-all duration-300"
      aria-label="Cycle color theme"
    >
      <Palette className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">
        {currentTheme.name}
      </span>
      <div 
        className="w-3 h-3 rounded-full transition-colors duration-300"
        style={{ backgroundColor: currentTheme.color }}
      />
    </button>
  );
};

export default ThemeToggle;
