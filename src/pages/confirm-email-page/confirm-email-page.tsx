import { Button, Result } from 'antd';
import React, { useState } from 'react';
import VerificationInput from 'react-verification-input';

import { AuthLayout } from '@components/auth-layout';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

import { history } from '@redux/configure-store';
import { postConfirmEmail, setStatusCode } from '@redux/password-recovery-slices/confirm-email';

import '../result-page/result-page.scss';

export const ConfirmEmailPage: React.FC = () => {
    const { email } = useAppSelector((state) => state.checkEmail);
    const { statusCode } = useAppSelector((state) => state.confirmEmail);
    const dispatch = useAppDispatch();

    const [value, setValue] = useState<null | string>(null);

    if (statusCode === 200) history.push('/auth/change-password');

    const handleInput = (event) => {
        setValue(event);
    };

    return (
        <AuthLayout>
            <Result
                status={statusCode ? 'error' : 'info'}
                title={
                    (!statusCode ? '' : 'Неверный код.') + 'Введите код для восстановления аккаунта'
                }
                subTitle={
                    <>
                        Мы отправили вам на e-mail <strong>{email}</strong> шестизначный код.
                        Введите его в поле ниже.
                    </>
                }
                extra={
                    <VerificationInput
                        classNames={{ character: statusCode ? 'character-error' : 'character' }}
                        placeholder=''
                        onComplete={(code) => {
                            dispatch(postConfirmEmail({ email: email, code: code }));
                            setValue('');
                        }}
                        inputProps={{ 'data-test-id': 'verification-input' }}
                        value={value}
                        onChange={handleInput}
                    />
                }
            />
            <span className='subtitle'>Не пришло письмо? Проверьте папку Спам.</span>
        </AuthLayout>
    );
};
