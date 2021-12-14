import React from 'react';
import Paragraph from '../Paragraph';

import Title from '../Title';

import classes from './index.module.css';

interface ProposalItemProps {
    imageUrl: string
    imageAlt: string
    title: string
    description: string
}

const ProposalItem: React.FC<ProposalItemProps> = ({ imageUrl, imageAlt, title, description }) => {
    return (
        <div className={classes.proposalItem}>
            <img className={classes.image} src={imageUrl} alt={imageAlt} />

            <div className={classes.wrapper}>
                <Title className={classes.title}>{title}</Title>
                {description.split(/\\n/g).map(item => <Paragraph className={classes.paragraph}>{item}</Paragraph>)}
            </div>
        </div>
    );
}

export default ProposalItem;