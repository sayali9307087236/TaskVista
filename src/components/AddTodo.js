// src/components/AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('low');

  const handleAddTodo = () => {
    if (inputText.trim() === '') return; // Prevent adding empty tasks

    addTodo(inputText, selectedPriority);
    setInputText('');
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a new task"
      />
      <select
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button onClick={handleAddTodo}>Add Task</button> {/* Updated button text */}
    </div>
  );
};

export default AddTodo;
