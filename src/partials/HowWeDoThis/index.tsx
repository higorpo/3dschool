import React from 'react';
import Paragraph from '../../components/Paragraph';

import Title from '../../components/Title';

import image from '../../assets/image2.png';

import './index.scss';

const HowWillWeDoThis: React.FC = () => {
    return (
        <section id="how-will-we-do-this">
            <Title>Como vamos fazer isso?</Title>
            <Paragraph>
                Vamos fornecer para cada escola participante kits que contém um óculos de realidade virtual a ser usado junto com um aparelho celular e um controle VR bluetooth. Através de um aplicativo disponibilizado no celular do aluno, e em conjunto com os aparelhos mencionados, nós conseguiremos criar diferentes ambientes virtuais para auxiliar no ensino de crianças, adolescentes e adultos. Além disso, nosso objetivo é democratizar o acesso a essas tecnologias, e por isso, trabalhamos duro para diminuir os custos de implantação da tecnologia, sendo assim prometemos a implantação da nossa solução por um custo de até <strong>R$40 reais por kit*</strong>, que pode ser compartilhado com mais de um aluno.
            </Paragraph>

            <span>*não consideramos nessa conta o custo do aparelho celular (que na maioria dos casos será do próprio aluno) nem logística de transporte.</span>

            <img src={image} alt="Mulher usando óculos de realidade virtual" />
        </section>
    );
}

export default HowWillWeDoThis;