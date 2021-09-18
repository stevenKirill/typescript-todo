import React, { FC, useState, MouseEvent } from 'react';
import { ITodo, TPriority } from './interfaces';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import './App.css';

const App: FC = () => {
  const [todos,setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (todo: ITodo): void => {
    setTodos([...todos, todo]);
  };

  const handleRemove = (id: string): void => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div className="App">
      <Header/>
      <Form onAdd={handleAddTodo}/>
      <TodoList onRemove={handleRemove} todos={todos}/>
    </div>
  );
}

export default App;
