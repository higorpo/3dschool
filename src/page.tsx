import React from 'react';

import './page.scss';

import Header from './partials/Header';
import AboutUs from './partials/AboutUs';
import WhatWeDo from './partials/WhatWeDo';
import HowWillWeDoThis from './partials/HowWeDoThis';
import WhatWeOffer from './partials/WhatWeOffer';
import Proposals from './partials/Proposals';
import Footer from './partials/Footer';

const Page: React.FC = () => {
    return (
        <div id="page-landing">
            <Header />

            <main>
                <AboutUs />
                <WhatWeDo />
                <HowWillWeDoThis />
                <WhatWeOffer />
                <Proposals />
            </main>

            <Footer />
        </div>
    );
}

export default Page;