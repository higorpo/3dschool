import React from 'react';

import classes from './index.module.css';

interface ButtonProps {
    label: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button tabIndex={0} className={classes.button} onClick={onClick}>{label}</button>
    );
}

export default Button;