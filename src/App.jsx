import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className='span-body'>
      <span className='todo-span' style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <div className='todo-btns'>
      <button className='todo-done-btn' onClick={() => toggleTodo(todo.id)}>
        {todo.done ? 'Undo' : 'Done'}
      </button>
      <button className='todo-delete-btn' onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (!inputValue) return; 
    const newTodo = {
      id: todos.length + 1,
      title: inputValue,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue(''); 
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="todo-body">
        <h1>Todo List</h1>
        <div className="todo-field">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='todo-add-btn' onClick={addTodo}>Add</button>
          </div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
