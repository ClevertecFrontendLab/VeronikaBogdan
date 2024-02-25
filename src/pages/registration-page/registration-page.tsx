import { Button, Form, Input, Menu, Space } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { AuthLayout } from '@components/auth-layout';

import './registration-page.scss';

const { Item } = Form;

const menuItems = [
    {
        key: '1',
        label: 'Вход',
    },
    {
        key: '2',
        label: 'Регистрация',
    },
];

export const RegistrationPage: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <AuthLayout>
            <Menu mode='inline' items={menuItems} defaultSelectedKeys={['2']} />

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
                    <Input addonBefore='e-mail' data-test-id='registration-email' />
                </Item>
                <Item
                    name='password'
                    extra='Пароль не менее 8 символов, с заглавной буквой и цифрой'
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
                    <Input.Password placeholder='Пароль' data-test-id='registration-password' />
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
                        data-test-id='registration-confirm-password'
                    />
                </Item>
                <Item className='enter-buttons'>
                    <Space direction='vertical'>
                        <Button
                            type='primary'
                            htmlType='submit'
                            data-test-id='registration-submit-button'
                        >
                            Войти
                        </Button>
                        <Button icon={<GooglePlusOutlined />}>Регистрация через Google</Button>
                    </Space>
                </Item>
            </Form>
        </AuthLayout>
    );
};
