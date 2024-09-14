import React, { useState } from 'react'; 
import TodoItem from './TodoItem';
import AddTodo from './AddTodo'; // Import AddTodo from its own file
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../Styles/TodoList.css'; // Ensure that TodoList.css actually exists in this path
import Swal from 'sweetalert2';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, priority) => {
    setTodos([...todos, { id: Date.now(), text, priority, completed: false }]);
  };

  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        Swal.fire({
          title: 'Task Completed!',
          text: 'The task has been marked as completed.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter(todo => todo.id !== id));
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        );
      }
    });
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
  };

  return (
    <div className="todo-list-container">
      <AddTodo addTodo={addTodo} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="todo-list">
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={`todo-item ${todo.priority} ${todo.completed ? 'completed' : ''}`}
                    >
                      <TodoItem
                        todo={todo}
                        completeTodo={() => completeTodo(todo.id)}
                        deleteTodo={() => deleteTodo(todo.id)}
                        updateTodo={updateTodo}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
