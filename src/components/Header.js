// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // Ensure this path is correct

const Header = () => {
  // Check if the body has the dark-mode class
  const isDarkMode = document.body.classList.contains('dark-mode');

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <h1>TaskVista</h1>
        <h2 className="tagline">Organize and Prioritize Today, Achieve Tomorrow</h2>
        {/* Add your navigation items here */}
      </nav>
    </header>
  );
};

export default Header;
