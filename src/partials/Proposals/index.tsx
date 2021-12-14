import React from 'react';

import ProposalItem from '../../components/ProposalItem';

import image1 from '../../assets/image3.png';
import image2 from '../../assets/image4.png';
import image3 from '../../assets/image5.png';

import './index.scss';

const Proposals: React.FC = () => {
    return (
        <section id="proposals">
            <ProposalItem
                imageUrl={image1}
                imageAlt="Menina em frente a um quadro negro usando óculos de realidade virtual apontando para cima"
                title="Qual o nosso objetivo?"
                description="Queremos melhorar o ensino para preparar as gerações do futuro para o que vem por aí, e para isso, queremos democratizar o acesso a tecnologia de realidade virtual para tornar o processo de ensino cada vez melhor, permitindo com que alunos tenham acesso a diferentes perspectivas ao serem ensinados.\nAtravés dessa solução, queremos proporcionar mais acesso a diferentes visões de mundo através de laboratórios virtuais, experiências de apoio ao ensino e outras formas de realidade virtual.\nCom a 3dschool vamos fornecer o apoio a um ensino cada vez melhor misturando a realidade com elementos virtuais que apoiem essa educação."
            />
            <ProposalItem
                imageUrl={image2}
                imageAlt="Alunos em uma sala de aula usando um óculos de realidade virtual"
                title="Quem queremos impactar?"
                description="Num primeiro momento, queremos chamar a atenção de governos e escolas para se atentarem ao que as próximas gerações esperam e o que eles podem fazer hoje para se adequar as próximas inovações. Em parceria com os governos, queremos implantar a 3dschool em milhares de escolas pelo país para proporcionar ao alunos novas maneiras de aprender, com o objetivo de prepará-los para o futuro."
            />
            <ProposalItem
                imageUrl={image3}
                imageAlt="Menino em frente a um quadro negro usando um óculos de realidade virtual"
                title="Qual a viabilidade?"
                description="Para tornar possível tudo isso o que foi explicado, foi realizado uma série de pesquisas de viabilidade, e com as tecnologias que possuímos hoje é possível sim desenvolver o que está sendo proposto. Queremos entregar soluções VR com o menor custo possível aos governos, e para isso podemos utilizar como base tecnologias já desenvolvidas com o Google Cardboard. Assim, podemos criar um aplicativo e uma experiência completa utilizando as tecnologias VR e AR para proporcionar aos alunos tudo aquilo o que é prometido."
            />
        </section>
    );
}

export default Proposals;