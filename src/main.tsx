import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

import CategoryPage from './app/category-page';
import JuiciestPage from './app/juiciest-page';
import MainPage from './app/main-page';

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: MainPage },
            { path: 'category', Component: CategoryPage },
            { path: 'juiciest', Component: JuiciestPage },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
);
