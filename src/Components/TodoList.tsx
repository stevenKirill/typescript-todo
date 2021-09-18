import React from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '../interfaces'

interface Props {
    onRemove: (id: string) => void
    todos: ITodo[]
    onComplete: (id: string) => void
};

const TodoList = ({ onRemove, todos, onComplete }: Props ) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onComplete={onComplete}
                />
            ))}
        </div>
    );
};

export default TodoList
