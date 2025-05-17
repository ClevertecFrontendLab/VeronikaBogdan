/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Progress,
    Stack,
    Text,
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { useLayoutEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Password from '~/components/inputs/password';
import Loader from '~/components/loader';
import { SERVER_ERROR, TOASTS } from '~/constants/toast-texts';
import {
    CONFIRMED_REQUIRED,
    EMAIL_REQUIRED,
    FIRSTNAME_REQUIRED,
    hasConfirmedPassword,
    hasEmail,
    hasLogin,
    hasPassword,
    LASTNAME_REQUIRED,
    LOGIN_REQUIRED,
    PASSWORD_REQUIRED,
    validateByLetters,
    validateByMaxLength,
    validateByMinLength,
    validatePasswordByMinLength,
} from '~/constants/validation';
import { useSaveSignupMutation } from '~/query/services/auth';
import { SignUpForm } from '~/query/types/auth';

const titleSteps = ['Личная информация', 'Логин и пароль'];
const firstStep = 1;
const secondStep = 2;

const fields = ['firstName', 'lastName', 'email', 'login', 'password', 'confirmed'];

const SignUp = () => {
    const methods = useForm<SignUpForm>({
        // criteriaMode: 'all',
        mode: 'all',
    });
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        getFieldState,
        reset,
        formState: { errors },
    } = methods;
    const toast = useChakraToast();

    const [step, setStep] = useState(firstStep);
    const [progressValues, setProgress] = useState<string[]>([]);

    const [saveSignup, { isLoading }] = useSaveSignupMutation();

    const isFirstStep = step === firstStep;
    const isSecondStep = step === secondStep;

    const progress = +((100 / 6) * progressValues.length).toFixed();

    const handleTrim = ({ target }) => setValue(target.name, target.value.trim());

    const handleProgress = (name) => {
        if (
            !getFieldState(name).isDirty ||
            getFieldState(name).error ||
            getFieldState(name).invalid
        ) {
            setProgress((previousProgress) => previousProgress.filter((value) => value !== name));
            return;
        } else if (progressValues.includes(name)) {
            return;
        } else {
            setProgress((previousProgress) => [...previousProgress, name]);
        }
    };

    useLayoutEffect(() => {
        fields.forEach((field) => handleProgress(field));
    }, [
        getFieldState('firstName').invalid,
        getFieldState('lastName').invalid,
        getFieldState('email').invalid,
        getFieldState('login').invalid,
        getFieldState('password').invalid,
        getFieldState('confirmed').invalid,
    ]);

    const onSubmit: SubmitHandler<SignUpForm> = (data) => {
        if (isFirstStep) {
            setStep(secondStep);
            return;
        }

        if (isSecondStep) {
            saveSignup(data)
                .unwrap()
                .then((event) => {
                    console.log(event);

                    reset();
                    setStep(firstStep);
                })
                .catch((error) => {
                    console.log(error);

                    // if (error.status === 401) {
                    //     toast({ status: 'error', ...TOASTS[INCORRECT_LOGIN_PASSWORD_ERROR] });
                    // }

                    // if (error.status === 403) {
                    //     toast({ status: 'error', ...TOASTS[EMAIL_VERIFIED_ERROR] });
                    // }

                    if (Math.floor(error.status) === 5) {
                        toast({ status: 'error', ...TOASTS[SERVER_ERROR] });
                    }
                });
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} data-test-id='sign-up-form'>
                {isLoading && <Loader />}
                <Stack gap={6} fontSize='md' lineHeight='150%'>
                    <Box>
                        <Text>
                            Шаг {step}. {titleSteps[step - 1]}
                        </Text>
                        <Progress
                            data-test-id='sign-up-progress'
                            hasStripe
                            value={progress}
                            size='sm'
                            sx={{
                                backgroundColor: 'blackAlpha.100',
                                '& > [role="progressbar"]': {
                                    backgroundColor: 'lime.300',
                                },
                            }}
                        />
                    </Box>
                    {isFirstStep && (
                        <>
                            <FormControl isInvalid={Boolean(errors.firstName)}>
                                <FormLabel fontWeight={400}>Ваше имя</FormLabel>
                                <Input
                                    data-test-id='first-name-input'
                                    type='text'
                                    variant={errors.firstName ? 'error' : 'auth'}
                                    placeholder='Имя'
                                    {...register('firstName', {
                                        required: FIRSTNAME_REQUIRED,
                                        maxLength: validateByMaxLength,
                                        validate: { validateByLetters },
                                        onBlur: handleTrim,
                                    })}
                                />
                                {errors.firstName && (
                                    <FormErrorMessage textStyle='smallText'>
                                        {errors.firstName.message}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.lastName)}>
                                <FormLabel fontWeight={400}>Ваша фамилия</FormLabel>
                                <Input
                                    data-test-id='last-name-input'
                                    type='text'
                                    variant={errors.lastName ? 'error' : 'auth'}
                                    placeholder='Фамилия'
                                    {...register('lastName', {
                                        required: LASTNAME_REQUIRED,
                                        maxLength: validateByMaxLength,
                                        validate: { validateByLetters },
                                        onBlur: handleTrim,
                                    })}
                                />
                                {errors.lastName && (
                                    <FormErrorMessage textStyle='smallText'>
                                        {errors.lastName.message}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.email)}>
                                <FormLabel fontWeight={400}>Ваш e-mail</FormLabel>
                                <Input
                                    data-test-id='email-input'
                                    type='text'
                                    variant={errors.email ? 'error' : 'auth'}
                                    placeholder='e-mail'
                                    {...register('email', {
                                        required: EMAIL_REQUIRED,
                                        maxLength: validateByMaxLength,
                                        validate: { hasEmail },
                                        onBlur: handleTrim,
                                    })}
                                />
                                {errors.email && (
                                    <FormErrorMessage textStyle='smallText'>
                                        {errors.email.message}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </>
                    )}
                    {isSecondStep && (
                        <>
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
                                        onBlur: handleTrim,
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
                                    onBlur: handleTrim,
                                }}
                                helper='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                                error={errors?.password?.message}
                            />
                            <Password
                                dataTestId='confirm-password-input'
                                title='Повторите пароль'
                                name='confirmed'
                                options={{
                                    required: CONFIRMED_REQUIRED,
                                    validate: {
                                        hasPassword: (password: string) =>
                                            hasConfirmedPassword(password, getValues('password')),
                                    },
                                    onBlur: handleTrim,
                                }}
                                error={errors.confirmed?.message}
                            />
                        </>
                    )}
                    <Button
                        type='submit'
                        variant='listCardSolid'
                        size='auth'
                        data-test-id='submit-button'
                    >
                        {step === firstStep ? ' Дальше' : 'Зарегистрироваться'}
                    </Button>
                </Stack>
            </form>
        </FormProvider>
    );
};

export default SignUp;
