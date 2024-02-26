import { Button, Result } from 'antd';
import React from 'react';

import { AuthLayout } from '@components/auth-layout';

import './result-page.scss';
import { history } from '@redux/configure-store';

export const ResultPage: React.FC = () => {
    const path = history.location.pathname;
    console.log(path);
    return (
        <AuthLayout>
            {path === '/result/success' && (
                <Result
                    status='success'
                    title='Регистрация успешна'
                    subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
                    extra={
                        <Button block type='primary' data-test-id='registration-enter-button'>
                            Войти
                        </Button>
                    }
                />
            )}
            {path === '/result/warning' && (
                <Result
                    status='warning'
                    title='Вход не выполнен'
                    subTitle='Что-то пошло не так. Попробуйте еще раз.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='registration-enter-button'
                            onClick={history.back}
                        >
                            Повторить
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
                            onClick={() => history.push('/auth/registration')}
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
                            onClick={history.back}
                        >
                            Назад к регистрации
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
                            block
                            type='primary'
                            data-test-id='check-retry-button'
                            onClick={() => history.push('/auth/registration')}
                        >
                            Попробовать снова
                        </Button>
                    }
                />
            )}
            {path === '/result/error-check-email' && (
                <Result
                    status='500'
                    title='Такой e-mail не зарегистрирован'
                    subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                    extra={
                        <Button
                            block
                            type='primary'
                            data-test-id='check-back-button'
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
