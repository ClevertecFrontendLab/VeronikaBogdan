import { Button, Form, Input, Space } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { history } from '@redux/configure-store';
import { postRegistration, setRegistrationUserData } from '@redux/registration-slice';
import { RegistrationUserData } from '@redux/registration-slice/types';

import { AuthLayout, AuthMenu } from '@components/auth-layout';

import './registration-page.scss';

const { Item } = Form;

export const RegistrationPage: React.FC = () => {
    const { status } = useAppSelector((state) => state.registration);
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();

    const onFinish = (values: RegistrationUserData) => {
        dispatch(setRegistrationUserData(values));
        dispatch(postRegistration(values));
    };

    // console.log('status', status);

    if (status === 201) history.push('/result/success');
    else if (status === 409) history.push('/result/error-user-exist');
    else if (status) history.push('/result/error');

    return (
        <AuthLayout>
            <AuthMenu itemKey='registration' />
            <Form form={form} name='register' onFinish={onFinish} scrollToFirstError>
                {(_, formInstance) => {
                    const isFieldError = formInstance
                        .getFieldsError()
                        .map((item) => item.errors.length)
                        .includes(1);

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
                                <Input addonBefore='e-mail' data-test-id='registration-email' />
                            </Item>
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
                                        message:
                                            'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder='Пароль'
                                    data-test-id='registration-password'
                                />
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
                                        block
                                        type='primary'
                                        htmlType='submit'
                                        data-test-id='registration-submit-button'
                                        disabled={isFieldError}
                                    >
                                        Войти
                                    </Button>
                                    <Button block icon={<GooglePlusOutlined />}>
                                        Регистрация через Google
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
