import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Navigate, Route, Routes } from 'react-router-dom';

import { history, store } from '@redux/configure-store';

import { LoginPage, MainPage, RegistrationPage } from './pages';

import 'antd/dist/antd.css';
import 'normalize.css';
import './index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path='/' element={<Navigate to='/auth' />} />
                    <Route path='/main' element={<MainPage />} />
                    {/* <Route element={<AuthLayout />}> */}
                    {/* <Route path='/auth' element={<RegistrationPage />} /> */}
                    {/* <Route index element={<RegistrationPage />} /> */}
                    <Route path='/auth' element={<LoginPage />} />
                    <Route path='/auth/registration' element={<RegistrationPage />} />
                    {/* </Route> */}
                </Routes>
            </HistoryRouter>
        </Provider>
    </>,
);
