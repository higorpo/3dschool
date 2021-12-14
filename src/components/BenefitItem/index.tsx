import React from 'react';

import classes from './index.module.css';

interface BenefitItemProps {
    iconUrl: string
    title: string
    description: string
}

const BenefitItem: React.FC<BenefitItemProps> = ({ iconUrl, title, description }) => {
    return (
        <div className={classes.benefitItem}>
            <div className={classes.iconWrapper}>
                <img className={classes.iconImage} src={iconUrl} alt="Ícone do benefício" />
            </div>

            <p className={classes.title}>{title}</p>
            <p className={classes.description}>{description}</p>
        </div>
    );
}

export default BenefitItem;