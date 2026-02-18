'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme: Theme = stored === 'dark' || stored === 'light' ? stored : systemPrefersDark ? 'dark' : 'light';
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Farbmodus wechseln"
      className="theme-switch chip-hover inline-flex h-11 w-11 items-center justify-center rounded-full border font-semibold"
    >
      <span className="sr-only">Farbmodus wechseln</span>
      <span aria-hidden="true" className="inline-flex items-center text-lg leading-none">
        {mounted ? (theme === 'dark' ? '☀︎' : '☾') : '☾'}
      </span>
    </button>
  );
}
