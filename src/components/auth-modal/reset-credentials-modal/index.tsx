import {
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import Password from '~/components/inputs/password';
import Loader from '~/components/loader';
import { ROUTES } from '~/constants/routes';
import { RESTORE_CREDENTIALS_SUCCESS, SERVER_ERROR, TOASTS } from '~/constants/toast-texts';
import {
    CONFIRMED_REQUIRED,
    hasConfirmedPassword,
    hasLogin,
    hasPassword,
    LOGIN_REQUIRED,
    PASSWORD_REQUIRED,
    validateByMaxLength,
    validateByMinLength,
    validatePasswordByMinLength,
} from '~/constants/validation';
import { useSaveResetPasswordMutation } from '~/query/services/auth';
import { ResetPasswordForm } from '~/query/types/auth';
import { authModalSelector, resetState } from '~/store/auth-modal-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { handleTrim } from '~/utils/trim-handler';

const ResetCredentialsModal = () => {
    const methods = useForm<ResetPasswordForm>({
        criteriaMode: 'all',
        mode: 'all',
    });
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors },
    } = methods;

    const { email } = useAppSelector(authModalSelector);

    const [saveLogin, { isLoading }] = useSaveResetPasswordMutation();

    const dispatch = useAppDispatch();
    const toast = useChakraToast();
    const navigate = useNavigate();

    const onSubmit = (data: ResetPasswordForm) => {
        const changedData = { ...data, email };

        saveLogin(changedData)
            .unwrap()
            .then(() => {
                reset();
                navigate(ROUTES.login);
                dispatch(resetState());
                toast({
                    status: 'success',
                    ...TOASTS[RESTORE_CREDENTIALS_SUCCESS],
                });
            })
            .catch((error) => {
                toast.closeAll();

                if (Math.floor(error.status / 100) === 5) {
                    toast({ status: 'error', ...TOASTS[SERVER_ERROR] });
                }
            });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {isLoading && <Loader />}
                <Stack gap={6}>
                    <Heading variant='errorHeading'>Восстановление аккаунта</Heading>
                    <FormControl isInvalid={Boolean(errors.login)}>
                        <FormLabel fontWeight={400}>Логин для входа на сайт</FormLabel>
                        <Input
                            data-test-id='login-input'
                            type='text'
                            variant={errors.login ? 'error' : 'auth'}
                            placeholder='Логин'
                            {...register('login', {
                                required: LOGIN_REQUIRED,
                                minLength: validateByMinLength,
                                maxLength: validateByMaxLength,
                                validate: { hasLogin },
                                onBlur: (event) => handleTrim(event, setValue),
                            })}
                        />
                        <FormHelperText textStyle='smallText'>
                            Логин не менее 5 символов, только латиница
                        </FormHelperText>
                        {errors.login && (
                            <FormErrorMessage textStyle='smallText'>
                                {errors.login.message}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <Password
                        dataTestId='password-input'
                        title='Пароль'
                        name='password'
                        options={{
                            required: PASSWORD_REQUIRED,
                            minLength: validatePasswordByMinLength,
                            maxLength: validateByMaxLength,
                            validate: { hasPassword },
                            onBlur: (event) => handleTrim(event, setValue),
                        }}
                        helper='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                        error={errors?.password?.message}
                    />
                    <Password
                        dataTestId='confirm-password-input'
                        title='Повторите пароль'
                        name='passwordConfirm'
                        options={{
                            required: CONFIRMED_REQUIRED,
                            validate: {
                                hasPassword: (password: string) =>
                                    hasConfirmedPassword(password, getValues('password')),
                            },
                            onBlur: (event) => handleTrim(event, setValue),
                        }}
                        error={errors.passwordConfirm?.message}
                    />
                </Stack>
                <Button
                    type='submit'
                    variant='listCardSolid'
                    size='auth'
                    data-test-id='submit-button'
                    w='full'
                    mt={8}
                >
                    Зарегистрироваться
                </Button>
            </form>
        </FormProvider>
    );
};

export default ResetCredentialsModal;
