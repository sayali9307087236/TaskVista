// src/components/ThemeToggle.js
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing the icons
import '../Styles/ThemeToggle.css'; // Ensure the correct path to ThemeToggle.css

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? (
        <>
          <FaSun size={20} />
          <span className="toggle-text">Light Mode</span>
        </>
      ) : (
        <>
          <FaMoon size={20} />
          <span className="toggle-text">Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
