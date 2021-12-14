import React from 'react';
import BenefitItem from '../../components/BenefitItem';

import Title from '../../components/Title';

import hardware from '../../assets/microprocessor.png';
import software from '../../assets/devops.png';
import teaching from '../../assets/teaching.png';

import './index.scss';

const WhatWeOffer: React.FC = () => {
    return (
        <section id="what-we-offer">
            <Title>O que nós oferecemos as escolas?</Title>

            <div className="wrapper">
                <BenefitItem
                    iconUrl={hardware}
                    title="Hardware"
                    description="Equipamentos necessários para implantar a tecnologia da 3dschool nas escolas contratantes, além do suporte e manutenção técnica."
                />
                <BenefitItem
                    iconUrl={software}
                    title="Software"
                    description="Um aplicativo para celulares Android e iOS capaz de criar diferentes ambientes virtuais misturando tecnologias VR e AR para criar experiências únicas aos alunos."
                />
                <BenefitItem
                    iconUrl={teaching}
                    title="Treinamento"
                    description="Treinamos os professores para obter um aproveitamento máximo ao lecionar suas disciplinas utilizando nossa tecnologia como um apoio ao ensino."
                />
            </div>
        </section>
    );
}

export default WhatWeOffer;