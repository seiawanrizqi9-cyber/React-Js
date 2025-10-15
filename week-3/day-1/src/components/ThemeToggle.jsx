import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        theme === 'light' 
          ? 'bg-gray-700 text-white'  
          : 'bg-gray-300 text-black'   
      }`}
    >
      {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
    </button>
  );
};

export default ThemeToggle;
