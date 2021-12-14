import React from 'react';

import logo from '../../assets/logo-black.svg';

import './index.scss';

const Footer: React.FC = () => {
    return (
        <footer id="page-footer">
            <img id="logo" src={logo} alt="Logotipo da 3dschool" />
        </footer>
    );
}

export default Footer;