import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './theme.scss';

import Page from './page';

ReactDOM.render(
    <React.StrictMode>
        <Page />
    </React.StrictMode>,
    document.getElementById('root')
);