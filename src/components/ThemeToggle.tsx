import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const ThemeToggle = () => {
  const [isRedTheme, setIsRedTheme] = useState(false);

  useEffect(() => {
    if (isRedTheme) {
      document.documentElement.classList.add('theme-red');
    } else {
      document.documentElement.classList.remove('theme-red');
    }
  }, [isRedTheme]);

  return (
    <button
      onClick={() => setIsRedTheme(!isRedTheme)}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card backdrop-blur-sm hover:bg-secondary transition-all duration-300"
      aria-label="Toggle color theme"
    >
      <Palette className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">
        {isRedTheme ? 'Red' : 'Purple'}
      </span>
      <div 
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          isRedTheme ? 'bg-[hsl(9,85%,58%)]' : 'bg-primary'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
