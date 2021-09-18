import React, { FC, MouseEvent, useState, ChangeEvent } from 'react';
import { TPriority, ITodo } from '../interfaces';
import Select from './Select';
import classes from '../styles/form.module.css';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    onAdd: (todo: ITodo) => void
};

const TITLE: string = 'todoTitle';
const TIME: string = 'timeToDo';

const OPTIONS = [
    {
        label: 'Высокий',
        value: 'high',
        id: uuidv4()
    },
    {
        label: 'Средний',
        value: 'medium',
        id: uuidv4()
    },
    {
        label: 'Низкий',
        value: 'low',
        id: uuidv4()
    }
];

const Form: FC = (
    { onAdd }: Props,
) => {
    const [task,setTask] = useState<string>('');
    const [time,setTime]= useState<number>(0);
    const [priority,setPriority] = useState<TPriority>('low');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        if (name === TITLE) {
            setTask(value)
        } else if (name === TIME) {
            setTime(Number(value));
        };
    };

    const handleChangePriority = (e: ChangeEvent<HTMLSelectElement> ) => {
        const prior = e.target.value as TPriority;
        setPriority(prior);
    };

    const hadleSaveTodo = () => {
        onAdd({
            todoTitle: task,
            isFinished: false,
            priority,
            timeToDo: time,
            id: uuidv4(),
        });
        setTask('');
        setTime(0);
        setPriority('low');
    };

    return (
        <>
            <input 
                type="text"
                placeholder="имя"
                name="todoTitle"
                onChange={handleChange}
            />
            <input 
                type="number"
                placeholder="время"
                name="timeToDo"
                onChange={handleChange}
            />
            <Select options={OPTIONS} onPriority={handleChangePriority}/>
            <button onClick={hadleSaveTodo}>Создать</button>
        </>
    );
};

export default Form
