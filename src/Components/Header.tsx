import React, { FC } from 'react';
import classes from '../styles/header.module.css';

const Header: FC = () => {
    return (
        <h2 className={classes.header}>
            Создайте новое задание
        </h2>
    );
};

export default Header
