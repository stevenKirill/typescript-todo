import React, { FC, useState, ChangeEvent, useEffect, useRef } from 'react';
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

const Form: FC<Props> = ( { onAdd }: Props ) => {
    const [task,setTask] = useState<string>('');
    const [time,setTime]= useState<number>(0);
    const [priority,setPriority] = useState<TPriority>('low');
    const inputref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const { current } = inputref;
        if (current) {
            current.focus()
        };
    },[])

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
        // TODO не сбрасываеються значения input
        setTask('');
        setTime(0);
        setPriority('low');
    };

    return (
        <div className={classes.form}>
            <input
                ref={inputref}
                type="text"
                placeholder="имя"
                name="todoTitle"
                onChange={handleChange}
                className={classes.input}
            />
            <input 
                type="number"
                placeholder="время"
                name="timeToDo"
                onChange={handleChange}
                className={classes.input}
            />
            <Select options={OPTIONS} onPriority={handleChangePriority}/>
            <button onClick={hadleSaveTodo} className={classes.button}>Создать</button>
        </div>
    );
};

export default Form
