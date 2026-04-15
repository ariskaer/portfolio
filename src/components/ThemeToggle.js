// src/components/ThemeToggle.js
'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Переключить тему"
      title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        color: 'var(--text-primary)'
      }}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}