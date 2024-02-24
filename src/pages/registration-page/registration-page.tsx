import { Form, Input, Menu } from 'antd';

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

    // const formItemLayout = {
    //     labelCol: {
    //         xs: { span: 24 },
    //         sm: { span: 8 },
    //     },
    //     wrapperCol: {
    //         xs: { span: 24 },
    //         sm: { span: 16 },
    //     },
    // };

    return (
        <AuthLayout>
            <Menu mode='inline' items={menuItems} defaultSelectedKeys={['2']} />

            <Form form={form} name='register' onFinish={onFinish} scrollToFirstError>
                <Item
                    name='email'
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input addonBefore='e-mail' placeholder='e-mail' />
                </Item>
                <Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Пароль' />
                </Item>
                <Item
                    name='confirm'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
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
                    <Input.Password placeholder='Повторите пароль' />
                </Item>
            </Form>
        </AuthLayout>
    );
};
