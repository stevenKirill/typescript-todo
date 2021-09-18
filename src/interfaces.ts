export type TPriority = 'high' | 'medium' | 'low';

export interface ITodo {
    todoTitle: string;
    isFinished: boolean;
    priority: TPriority;
    timeToDo: number;
    id: string;
};

export interface IOption {
    label: string;
    value: string;
    id: string;
};