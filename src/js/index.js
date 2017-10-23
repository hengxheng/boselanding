import '../sass/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';


ReactDOM.render((
    <BrowserRouter>
        { renderRoutes(routes) }
    </BrowserRouter>
), document.getElementById('root')); 