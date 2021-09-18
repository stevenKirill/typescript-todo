import React from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '../interfaces'

interface Props {
    onRemove: () => void
    todos: ITodo[]
};

const TodoList = ({ onRemove, todos }: Props ) => {
    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove}/>)}
        </div>
    );
};

export default TodoList
