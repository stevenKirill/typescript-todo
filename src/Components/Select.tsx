import React, { ChangeEvent } from 'react';
import { IOption } from '../interfaces'

interface Props {
    options: IOption[];
    onPriority: (e: ChangeEvent<HTMLSelectElement>) => void
};

const Select = ( { options, onPriority }: Props ) => {
    return (
        <select onChange={onPriority}>
            {options.map((option: IOption) => {
                return <option key={option.id} value={option.value}>{option.label}</option>
            } )}
        </select>
    );
};

export default Select
