import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

import App from '~/app/App.tsx';
import AuthorizationPage from '~/app/authorization-page';
import Login from '~/app/authorization-page/login';
import SignUp from '~/app/authorization-page/signup';
import CategoryPage from '~/app/category-page';
import ErrorPage from '~/app/error-page';
import JuiciestPage from '~/app/juiciest-page';
import MainPage from '~/app/main-page';
import RecipePage from '~/app/recipe-page';
import Alert from '~/components/alert';
import { ROUTES } from '~/constants/routes';
import { store } from '~/store/configure-store.ts';
import { theme } from '~/styles/theme';

type ToastRenderProps = {
    title: string;
    description: string;
    status: 'info' | 'warning' | 'success' | 'error' | 'loading';
    isClosable: boolean;
    onClose: () => void;
    dataTestId?: string;
};

const router = createBrowserRouter([
    {
        path: ROUTES.main,
        Component: App,
        children: [
            { index: true, Component: MainPage },
            {
                path: ROUTES.category,
                Component: CategoryPage,
            },
            {
                path: ROUTES.recipe,
                Component: RecipePage,
            },
            { path: ROUTES.theJuiciest, Component: JuiciestPage },
            { path: ROUTES.notFound, Component: ErrorPage },
        ],
    },
    {
        path: ROUTES.authorization,
        Component: AuthorizationPage,
        children: [
            { path: ROUTES.login, Component: Login },
            { path: ROUTES.signup, Component: SignUp },
        ],
    },
    { path: ROUTES.verification, Component: AuthorizationPage },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider
            theme={theme}
            toastOptions={{
                defaultOptions: {
                    duration: 15000,
                    isClosable: true,
                    position: 'bottom',
                    render: ({
                        title,
                        description,
                        status,
                        isClosable,
                        onClose,
                        dataTestId,
                    }: ToastRenderProps) => (
                        <Alert
                            title={title}
                            description={description}
                            status={status}
                            isClosable={isClosable}
                            onClose={onClose}
                            dataTestId={dataTestId}
                        />
                    ),
                },
            }}
        >
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
