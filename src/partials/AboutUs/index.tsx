import React from 'react';

import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';

import './index.scss';

const AboutUs: React.FC = () => {
    return (
        <section id="about-us">
            <Title>O que somos?</Title>
            <Paragraph>
                A 3dschool é uma solução que visa revolucionar a educação através do uso de realidades mistas (mixed reality), com o objetivo de proporcionar aos estudantes novas formas de entender o mundo por meio de ambientes educacionais interativos que auxiliam na demonstração e explicação dos conceitos abordados em sala de aula. Através da nossa tecnologia, queremos trabalhar com os governos para preparar as escolas para formar individuos capacitados para entender o novo mundo e para se tornarem os pilares da próxima geração.
            </Paragraph>
        </section>
    );
}

export default AboutUs;