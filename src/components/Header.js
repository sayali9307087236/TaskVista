


import React, { useEffect, useState } from 'react';
import '../Styles/Header.css'; // Adjust path if needed

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <h1 className="main-heading">TaskVista</h1>
        <p className="tagline">Organize and Prioritize Today, Achieve Tomorrow</p>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
