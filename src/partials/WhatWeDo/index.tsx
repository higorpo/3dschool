import React from 'react';

import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';

import './index.scss';

const WhatWeDo: React.FC = () => {
    return (
        <section id="what-we-do">
            <div className="wrapper">
                <span>O que nós fazemos?</span>
                <Title>Trabalhamos para criar um futuro melhor. </Title>
            </div>
        </section>
    );
}

export default WhatWeDo;