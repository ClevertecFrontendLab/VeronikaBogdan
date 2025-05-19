import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import AuthModal from '~/components/auth-modal';
import Password from '~/components/inputs/password';
import Loader from '~/components/loader';
import { SIGN_IN_ERROR_MODAL } from '~/constants';
import {
    EMAIL_VERIFIED_ERROR,
    INCORRECT_LOGIN_PASSWORD_ERROR,
    TOASTS,
} from '~/constants/toast-texts';
import { LOGIN_REQUIRED, PASSWORD_REQUIRED, validateByMaxLength } from '~/constants/validation';
import { useSaveLoginMutation } from '~/query/services/auth';
import { LoginForm } from '~/query/types/auth';
import { setAuthModal, setDataTestIdModal, setLoginData } from '~/store/auth-modal-slice';
import { useAppDispatch } from '~/store/hooks';

const Login = () => {
    const methods = useForm<LoginForm>({
        // criteriaMode: 'all',
        mode: 'all',
    });
    const {
        register,
        handleSubmit,
        setValue,

        formState: { errors },
    } = methods;

    const [saveLogin, { isLoading }] = useSaveLoginMutation();

    const dispatch = useAppDispatch();
    const toast = useChakraToast();

    const handleTrim = ({ target }) => setValue(target.name, target.value.trim());

    const onSubmit = (data: LoginForm) => {
        saveLogin(data)
            .unwrap()
            .then((event) => console.log(event))
            .catch((error) => {
                console.log(error);

                if (error.status === 401) {
                    toast({ status: 'error', ...TOASTS[INCORRECT_LOGIN_PASSWORD_ERROR] });
                    return;
                }
                if (error.status === 403) {
                    toast({ status: 'error', ...TOASTS[EMAIL_VERIFIED_ERROR] });
                    return;
                }
                if (Math.floor(error.status / 100) === 5) {
                    dispatch(setAuthModal(true));
                    dispatch(setLoginData(data));
                    dispatch(setDataTestIdModal(SIGN_IN_ERROR_MODAL));
                    return;
                }
            });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} data-test-id='sign-in-form'>
                {isLoading && <Loader />}
                <Stack gap={6} fontSize='md' lineHeight='150%'>
                    <FormControl isInvalid={Boolean(errors.login)}>
                        <FormLabel fontWeight={400}>Логин для входа на сайт</FormLabel>
                        <Input
                            data-test-id='login-input'
                            type='text'
                            variant={errors.login ? 'error' : 'auth'}
                            placeholder='Логин'
                            {...register('login', {
                                required: LOGIN_REQUIRED,
                                maxLength: validateByMaxLength,
                                onBlur: handleTrim,
                            })}
                        />
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
                            maxLength: validateByMaxLength,
                            onBlur: handleTrim,
                        }}
                        error={errors?.password?.message}
                    />
                    <Button
                        type='submit'
                        variant='listCardSolid'
                        size='auth'
                        data-test-id='submit-button'
                    >
                        Войти
                    </Button>
                </Stack>
            </form>
            <AuthModal onSubmit={onSubmit} />
        </FormProvider>
    );
};

export default Login;
