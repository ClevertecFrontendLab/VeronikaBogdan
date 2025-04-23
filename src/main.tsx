import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

import App from '~/app/App.tsx';
import CategoryPage from '~/app/category-page';
import JuiciestPage from '~/app/juiciest-page';
import MainPage from '~/app/main-page';
import { store } from '~/store/configure-store.ts';
import { theme } from '~/styles/theme';

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: MainPage },
            {
                path: ':category/:subcategory',
                Component: CategoryPage,
            },
            {
                path: ':category/:subcategory/:id',
                Component: CategoryPage,
            },
            { path: 'the-juiciest', Component: JuiciestPage },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
