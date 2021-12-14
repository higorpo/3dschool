import React from 'react';

import classes from './index.module.css';

const Subtitle: React.FC = ({ children }) => {
    return <h2 className={classes.subtitle}>{children}</h2>;
}

export default Subtitle;