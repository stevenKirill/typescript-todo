import React, { FC, useState } from 'react';
import { ITodo } from './interfaces';
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

  const onComplete = (id: string) => {
    const modified = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isFinished: !todo.isFinished
        }
      }
      return todo;
    });
    setTodos(modified);
  };

  return (
    <div className="App">
      <Header/>
      <Form onAdd={handleAddTodo}/>
      <br/>
      <TodoList onRemove={handleRemove} todos={todos} onComplete={onComplete}/>
    </div>
  );
}

export default App;
