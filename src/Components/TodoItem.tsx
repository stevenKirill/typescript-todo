import React from 'react';
import { ITodo } from '../interfaces';
import classes from '../styles/todo.module.css';

interface Props {
    todo: ITodo;
    onRemove: (id: string) => void
    onComplete: (id: string) => void
};

const TodoItem = ( { todo, onRemove, onComplete }: Props ) => {
    const { id, todoTitle, isFinished, timeToDo } = todo;
    return (
        <div data-id={id} className={classes.todoitem}>
            <input 
                type="checkbox" 
                checked={isFinished}
                className={classes.checkbox}
                onChange={() => onComplete(id)}
            />
            <div>{todoTitle}</div>
            <div>{timeToDo} ч</div>
            <button className={classes.button} onClick={() => onRemove(id)}>X</button>
        </div>
    )
}

export default TodoItem;
