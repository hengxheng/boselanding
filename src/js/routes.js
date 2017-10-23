import AppRoot from './containers/app';
import Home from './containers/HomePage';
import P600 from './containers/P600Page';
import P650 from './containers/P650Page';
import NotFound from './containers/notfound';

export const routes = [
    {
        component: AppRoot,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/home',
                exact: true,
                component: Home
            },
            {
                path: '/product-600',
                exact: true,
                component: P600
            },
            {
                path: '/product-650',
                exact: true,
                component: P650
            },
            {
                path: "*",
                component: NotFound
            }
        ]
    }
]