import { Button, Checkbox, Form, Input, Space } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import React from 'react';

import { AuthLayout, AuthMenu } from '@components/auth-layout';

import './login-page.scss';
import '../registration-page/registration-page.scss';

const { Item } = Form;

export const LoginPage: React.FC = () => {
    const [form] = Form.useForm();
    const { status } = Item.useStatus();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    console.log('status', status);
    return (
        <AuthLayout>
            <AuthMenu itemKey={'entrance'} />
            <Form form={form} name='register' onFinish={onFinish} scrollToFirstError>
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
                            pattern: /[A-Z]+/g,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                        },
                        {
                            pattern: /[0-9]+/g,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                        },
                        {
                            type: 'string',
                            min: 8,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                        },
                    ]}
                >
                    <Input.Password placeholder='Пароль' data-test-id='login-password' />
                </Item>
                <Item className='check-area'>
                    <Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Item>

                    <Button type='link' className='form-forgot'>
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
                        <Button block icon={<GooglePlusOutlined />}>
                            Войти через Google
                        </Button>
                    </Space>
                </Item>
            </Form>
        </AuthLayout>
    );
};