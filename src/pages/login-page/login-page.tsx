import { Button, Checkbox, Form, Input, Space } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import React from 'react';

import { AuthLayout, AuthMenu } from '@components/auth-layout';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { postLogin } from '@redux/login-slice';
import { LoginFormUserData } from '@redux/login-slice/types';
import { history } from '@redux/configure-store';

import '../registration-page/registration-page.scss';
import { postCheckEmail, setEmail } from '@redux/password-recovery-slices/check-email';

const { Item } = Form;

export const LoginPage: React.FC = () => {
    const { accessToken, isError } = useAppSelector((state) => state.login);
    const { email, message, statusCode } = useAppSelector((state) => state.checkEmail);
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();

    const onFinish = (values: LoginFormUserData) => {
        dispatch(postLogin(values));
    };

    if (accessToken) history.push('/main');
    if (isError) history.push('/result/error-login');
    if (statusCode && message === 'Email не найден')
        history.push('/result/error-check-email-no-exist');
    else if (statusCode === 200) history.push('/auth/confirm-email');
    else if (statusCode) history.push('/result/error-check-email');

    return (
        <AuthLayout>
            <AuthMenu itemKey={'entrance'} />
            <Form
                form={form}
                name='register'
                onFinish={onFinish}
                scrollToFirstError
                initialValues={{ email: email }}
            >
                {(values, formInstance) => {
                    const isEmailError = formInstance.getFieldError('email').length;

                    return (
                        <>
                            <Item
                                name='email'
                                rules={[
                                    {
                                        type: 'email',
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Input addonBefore='e-mail' data-test-id='login-email' />
                            </Item>
                            <Item
                                name='password'
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                    {
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                        message:
                                            'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder='Пароль'
                                    data-test-id='login-password'
                                />
                            </Item>
                            <Item className='check-area'>
                                <Item name='remember' valuePropName='checked' noStyle>
                                    <Checkbox data-test-id='login-remember'>
                                        Запомнить меня
                                    </Checkbox>
                                </Item>
                                <Button
                                    type='link'
                                    className='form-forgot'
                                    data-test-id='login-forgot-button'
                                    onClick={() => {
                                        dispatch(setEmail(values.email));
                                        !isEmailError && dispatch(postCheckEmail(values.email));
                                    }}
                                >
                                    Забыли пароль?
                                </Button>
                            </Item>
                            <Item className='enter-buttons login-page'>
                                <Space direction='vertical'>
                                    <Button
                                        block
                                        type='primary'
                                        htmlType='submit'
                                        data-test-id='login-submit-button'
                                    >
                                        Войти
                                    </Button>
                                    <Button block icon={<GooglePlusOutlined />} htmlType='button'>
                                        Войти через Google
                                    </Button>
                                </Space>
                            </Item>
                        </>
                    );
                }}
            </Form>
        </AuthLayout>
    );
};
