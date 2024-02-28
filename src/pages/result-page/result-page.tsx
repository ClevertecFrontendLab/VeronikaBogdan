import { Button, Result } from 'antd';
import React from 'react';

import { AuthLayout } from '@components/auth-layout';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { history } from '@redux/configure-store';
import { setError } from '@redux/login-slice/login-slice';
import { postRegistration } from '@redux/registration-slice';
import { setStatusCode } from '@redux/password-recovery-slices/check-email';
import { setStatusRegistrationCode } from '@redux/registration-slice/registration-slice';

import './result-page.scss';

export const ResultPage: React.FC = () => {
    const { data } = useAppSelector((state) => state.registration);
    const dispatch = useAppDispatch();

    const path = history.location.pathname;

    return (
        <AuthLayout>
            {path === '/result/success' && (
                <Result
                    status='success'
                    title='Регистрация успешна'
                    subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='registration-enter-button'
                            onClick={() => history.push('/auth')}
                        >
                            Войти
                        </Button>
                    }
                />
            )}
            {path === '/result/error' && (
                <Result
                    status='error'
                    title='Данные не сохранились'
                    subTitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='registration-retry-button'
                            onClick={() => {
                                history.push('/auth/registration');
                                dispatch(postRegistration(data));
                            }}
                        >
                            Повторить
                        </Button>
                    }
                />
            )}
            {path === '/result/error-user-exist' && (
                <Result
                    status='error'
                    title='Данные не сохранились'
                    subTitle='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='registration-back-button'
                            onClick={() => {
                                dispatch(setStatusRegistrationCode(0));
                                history.push('/auth/registration');
                            }}
                        >
                            Назад к регистрации
                        </Button>
                    }
                />
            )}
            {path === '/result/error-login' && (
                <Result
                    status='warning'
                    title='Вход не выполнен'
                    subTitle='Что-то пошло не так. Попробуйте еще раз.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='login-retry-button'
                            onClick={() => {
                                dispatch(setError(false));
                                history.back();
                            }}
                        >
                            Повторить
                        </Button>
                    }
                />
            )}
            {path === '/result/error-check-email-no-exist' && (
                <Result
                    status='error'
                    title='Такой e-mail не зарегистрирован'
                    subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                    extra={
                        <Button
                            type='primary'
                            data-test-id='check-retry-button'
                            onClick={() => {
                                dispatch(setStatusCode(0));
                                history.push('/auth');
                            }}
                        >
                            Попробовать снова
                        </Button>
                    }
                />
            )}
            {path === '/result/error-check-email' && (
                <Result
                    status='500'
                    title='Что-то пошло не так'
                    subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
                    extra={
                        <Button
                            type='primary'
                            data-test-id='check-back-button'
                            onClick={() => {
                                dispatch(setStatusCode(0));
                                history.push('/auth');
                            }}
                        >
                            Назад
                        </Button>
                    }
                />
            )}
            {path === '/result/error-change-password ' && (
                <Result
                    status='error'
                    title='Такой e-mail не зарегистрирован'
                    subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='change-retry-button'
                            onClick={() => history.push('/auth/registration')}
                        >
                            Попробовать снова
                        </Button>
                    }
                />
            )}
            {path === '/result/success-change-password ' && (
                <Result
                    status='500'
                    title='Такой e-mail не зарегистрирован'
                    subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='change-entry-button'
                            onClick={() => history.push('/auth/registration')}
                        >
                            Попробовать снова
                        </Button>
                    }
                />
            )}
        </AuthLayout>
    );
};
