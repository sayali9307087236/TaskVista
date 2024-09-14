// src/App.js
import React from 'react';
import './Styles/TodoList.css'; // Import light mode styles
import './Styles/dark-mode.css'; // Import dark mode styles
import ThemeToggle from './components/ThemeToggle';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="header">
        <ThemeToggle />
        <h1 className="task-vista-heading">TaskVista</h1> {/* Main heading */}
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
