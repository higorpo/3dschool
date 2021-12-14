import React from 'react';

import logo from '../../assets/logo-black.svg';

import './index.scss';

const Footer: React.FC = () => {
    return (
        <footer id="page-footer">
            <img id="logo" src={logo} alt="Logotipo da 3dschool" />
            <p>
                Imagens, ícones e vetores usados no site foram inspirados ou retirados através dos sites <a href="https://pixabay.com">Pixabay</a>, <a href="https://www.freepik.com/">Freepik</a> e <a href="https://www.flaticon.com/">Flaticon</a>.
                <br />
                Site criado para o desafio da <a href="https://rocketseat.com.br">Rocketseat</a>.
            </p>
        </footer>
    );
}

export default Footer;