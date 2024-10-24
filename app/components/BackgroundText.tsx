"use client";

import React from "react";

export const BackgroundText: React.FC = () => {
  const wallOfText = `
      "use client";
      import * as React from "react";
      import { useTheme } from "next-themes";
      import { ThemeProvider as NextThemesProvider } from "next-themes";
      import type { ThemeProviderProps } from "next-themes/dist/types";
      import { FaCircleHalfStroke } from "react-icons/fa6";

      const storageKey = 'theme-preference';

      export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
      return (
      <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            {...props}
      >
            {children}
      </NextThemesProvider>
      );
      }

      export const ThemeSwitch: React.FC = () => {
      const { setTheme } = useTheme();
      const [mounted, setMounted] = React.useState(false);
      const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('light');

      const getColorPreference = (): 'light' | 'dark' => {
      if (typeof window !== 'undefined') {
            const storedPreference = localStorage.getItem(storageKey);
            if (storedPreference) {
            return storedPreference as 'light' | 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light'; 
      };

      const reflectPreference = (theme: 'light' | 'dark') => {
      document.documentElement.classList.remove('bg-light', 'bg-dark');
      document.documentElement.classList.add();
      setCurrentTheme(theme);
      setTheme(theme);
      };

      React.useEffect(() => {
      setMounted(true);
      const initTheme = getColorPreference();
      reflectPreference(initTheme);

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
            const newTheme = mediaQuery.matches ? 'dark' : 'light';
            localStorage.setItem(storageKey, newTheme);
            reflectPreference(newTheme);
      };

      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
      }, [setTheme]);

      const toggleTheme = () => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
      };

      if (!mounted) {
      return (
            <FaCircleHalfStroke
            className="h-[14px] w-[14px] text-[#1c1c1c]"
            aria-hidden="true"
            />
      );
      }

      return (

            />
      </button>
      );
      };

  `;

  const repetitions = Array(1).fill(wallOfText); // Adjust the number as needed

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="flex flex-wrap w-full h-full leading-none">
        {repetitions.map((text, index) => (
          <span
            key={index}
            className="text-2xl font-light opacity-10 dark:text-gray-500 text-gray-700 whitespace-nowrap"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
