import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Navigate, Route, Routes } from 'react-router-dom';

import { history, store } from '@redux/configure-store';

import { ConfirmEmailPage, LoginPage, MainPage, RegistrationPage, ResultPage } from './pages';

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
                    <Route
                        path='/'
                        element={
                            localStorage.getItem('accessToken') ? (
                                <Navigate to='/main' />
                            ) : (
                                <Navigate to='/auth' />
                            )
                        }
                    />
                    <Route path='/auth' element={<LoginPage />} />
                    <Route path='/auth/registration' element={<RegistrationPage />} />
                    <Route path='/auth/confirm-email' element={<ConfirmEmailPage />} />
                    <Route path='/result/:status' element={<ResultPage />} />
                    <Route path='/main' element={<MainPage />} />
                </Routes>
            </HistoryRouter>
        </Provider>
    </>,
);
