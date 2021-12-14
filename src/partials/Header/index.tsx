import React, { useCallback, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';

import './index.scss';

import logo from '../../assets/logo-white.svg';

const Header: React.FC = () => {
    const handleMouseMoving = useCallback(({ pageX, pageY }: React.MouseEvent<HTMLDivElement>) => {
        const logo = document.getElementById('logo')!;
        const header = document.getElementById('page-header')!;
        const bannerTexts = document.getElementById('banner-texts')!;

        const width = (window.innerWidth / 2 - pageX) / 80;
        const height = (window.innerHeight / 2 - pageY) / 10;

        logo.style.marginTop = String(height * 0.3 + 'px');
        logo.style.marginLeft = String(-width * 0.5 + 'px');

        bannerTexts.style.marginTop = String(height * 0.5 + 'px');
        bannerTexts.style.marginLeft = String(-width * 0.5 + 'px');

        header.style.backgroundPosition = `0% 0%, calc(100% - ${width * 0.3}px) calc(100% - ${-10 - height * 0.2}px)`;
    }, []);

    function handleOnExplore() {
        document.querySelector('#about-us')!.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <header onMouseMoveCapture={window.innerWidth >= 1200 ? handleMouseMoving : () => null} id="page-header">
            <img id="logo" src={logo} alt="Logotipo da 3dschool" />
            <div id="banner-texts" className="wrapper">
                <Title>
                    Criando novas&nbsp;
                    <Typewriter
                        options={{
                            strings: ['perspectivas', 'experiências'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    para o aprendizado.
                </Title>
                <Subtitle>Venha conosco revolucionar a maneira de aprender e ensinar o mundo.</Subtitle>
                <Button
                    label="Explorar"
                    onClick={handleOnExplore}
                />
            </div>
        </header>
    );
}

export default Header;