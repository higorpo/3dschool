import classNames from 'classnames';
import React from 'react';

import classes from './index.module.css';

interface TitleProps {
    className?: string | undefined
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
    return <h1 className={classNames(classes.title, className)}>{children}</h1>;
}

export default Title;