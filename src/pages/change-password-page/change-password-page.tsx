import { Button, Form, Input, Typography } from 'antd';
import React from 'react';

import { AuthLayout } from '@components/auth-layout';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { postChangePassword } from '@redux/password-recovery-slices/change-password';
import { ChangePasswordData } from '@redux/password-recovery-slices/types';
import { history } from '@redux/configure-store';

import '../registration-page/registration-page.scss';
import './change-password-page.scss';

const { Item } = Form;
const { Title } = Typography;

export const ChangePasswordPage: React.FC = () => {
    const { statusCode } = useAppSelector((state) => state.changePassword);
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();

    const onFinish = (values: ChangePasswordData) => {
        dispatch(postChangePassword(values));
    };

    if (statusCode === 201) history.push('/result/success-change-password');
    if (statusCode) history.push('/result/error-change-password');

    return (
        <AuthLayout>
            <Title level={3}>Восстановление аккаунта</Title>
            <Form form={form} name='register' onFinish={onFinish} scrollToFirstError>
                <Item
                    name='password'
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    rules={[
                        {
                            required: true,
                            message: '',
                        },
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                        },
                    ]}
                >
                    <Input.Password placeholder='Пароль' data-test-id='change-password' />
                </Item>
                <Item
                    name='confirm'
                    dependencies={['password']}
                    className='confirm-password'
                    rules={[
                        {
                            required: true,
                            message: '',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder='Повторите пароль'
                        data-test-id='change-confirm-password'
                    />
                </Item>
                <Button block type='primary' htmlType='submit' data-test-id='change-submit-button'>
                    Войти
                </Button>
            </Form>
        </AuthLayout>
    );
};
