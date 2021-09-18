import React from 'react';
import { ITodo } from '../interfaces';

interface Props {
    todo: ITodo;
    onRemove: (id: string) => void
};

const TodoItem = ( { todo, onRemove }: Props ) => {
    const { id, todoTitle, isFinished, timeToDo } = todo;
    return (
        <div data-id={id}>
            <input type="checkbox" checked={isFinished}/>
            <div>{todoTitle}</div>
            <div>{timeToDo}</div>
            <button onClick={() => onRemove(id)}>Удалить</button>
        </div>
    )
}

export default TodoItem
