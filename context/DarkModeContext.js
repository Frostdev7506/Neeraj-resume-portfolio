import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Get initial theme preference
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return false;
    
    try {
      // Check localStorage for saved preference
      const saved = localStorage.getItem('theme-preference');
      if (saved && saved !== 'system') {
        return saved === 'dark';
      }
      
      // Fall back to system preference
      if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch (error) {
      console.warn('Error accessing localStorage or matchMedia:', error);
    }
    
    // Default to light theme
    return false;
  };

  // Apply theme to document
  const applyTheme = (isDark) => {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  // Enhanced setDarkMode with persistence
  const setDarkModeWithPersistence = (value) => {
    setDarkMode(value);
    applyTheme(value);
    
    try {
      localStorage.setItem('theme-preference', value ? 'dark' : 'light');
    } catch (error) {
      console.warn('Error saving theme preference to localStorage:', error);
    }
  };

  // Toggle function for convenience
  const toggleDarkMode = () => {
    setDarkModeWithPersistence(!darkMode);
  };

  // Initialize theme on client-side hydration
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setDarkMode(initialTheme);
    applyTheme(initialTheme);
    setIsHydrated(true);

    // Listen for system theme changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (e) => {
        // Only update if user hasn't set a specific preference
        try {
          const saved = localStorage.getItem('theme-preference');
          if (!saved || saved === 'system') {
            setDarkMode(e.matches);
            applyTheme(e.matches);
          }
        } catch (error) {
          console.warn('Error handling system theme change:', error);
        }
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ 
      darkMode, 
      setDarkMode: setDarkModeWithPersistence,
      toggleDarkMode,
      isHydrated
    }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
