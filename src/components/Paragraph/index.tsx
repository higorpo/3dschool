import classNames from 'classnames';
import React from 'react';

import classes from './index.module.css';

interface ParagraphProps {
    className?: string | undefined
}

const Paragraph: React.FC<ParagraphProps> = ({ className, children }) => {
    return <p className={classNames(classes.paragraph, className)}>{children}</p>;
}

export default Paragraph;