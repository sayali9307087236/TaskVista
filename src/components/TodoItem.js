// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, completeTodo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() === '') return; // Prevent updating with empty text
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.priority} ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="view-mode">
          <span
            className={`todo-text ${todo.completed ? 'completed' : ''}`}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.text}
          </span>
          <div className="button-group">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => completeTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
