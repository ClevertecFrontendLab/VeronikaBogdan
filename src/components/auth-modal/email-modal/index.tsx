import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Image,
    Input,
    Stack,
    Text,
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import Picture from '~/assets/png/login-error.png';
import Loader from '~/components/loader';
import { VERIFICATION_CODE_MODAL } from '~/constants';
import { SERVER_ERROR, TOASTS, VERIFICATION_CODE_ERROR } from '~/constants/toast-texts';
import { EMAIL_REQUIRED, hasEmail, validateByMaxLength } from '~/constants/validation';
import { useSaveForgotPasswordMutation } from '~/query/services/auth';
import { SendEmailForm } from '~/query/types/auth';
import { setDataTestIdModal, setEmail } from '~/store/auth-modal-slice';
import { useAppDispatch } from '~/store/hooks';
import { handleTrim } from '~/utils/trim-handler';

const EmailModal = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<SendEmailForm>({
        criteriaMode: 'all',
        mode: 'all',
    });
    const toast = useChakraToast();
    const dispatch = useAppDispatch();

    const [saveForgotPassword, { isLoading, error, isError }] = useSaveForgotPasswordMutation();

    const isEmailError = Boolean(errors.email || (isError && error?.status === 403));

    const handleCode = (email: SendEmailForm) => {
        toast.closeAll();

        saveForgotPassword(email)
            .unwrap()
            .then(() => {
                reset();
                dispatch(setDataTestIdModal(VERIFICATION_CODE_MODAL));
                dispatch(setEmail(email.email));
            })
            .catch((error) => {
                reset();

                if (error.status === 403) {
                    toast({
                        status: 'error',
                        ...TOASTS[VERIFICATION_CODE_ERROR],
                    });
                }
                if (Math.floor(error.status / 100) === 5) {
                    toast({ status: 'error', ...TOASTS[SERVER_ERROR] });
                }
            });
    };

    return (
        <>
            {isLoading && <Loader />}
            <Image src={Picture} w={{ base: '108px', xl: '208px' }} />
            <Stack gap={4}>
                <Box textStyle='errorDescription' color='blackAlpha.900' fontWeight={400}>
                    Для восстановления входа введите ваш e-mail, куда можно отправить уникальный код
                </Box>
                <form onSubmit={handleSubmit(handleCode)}>
                    <FormControl isInvalid={isEmailError}>
                        <FormLabel fontWeight={400}>Ваш e-mail</FormLabel>
                        <Input
                            data-test-id='email-input'
                            type='text'
                            variant={isEmailError ? 'error' : 'auth'}
                            placeholder='e-mail'
                            {...register('email', {
                                required: EMAIL_REQUIRED,
                                maxLength: validateByMaxLength,
                                validate: { hasEmail },
                                onBlur: (event) => handleTrim(event, setValue),
                            })}
                        />
                        {errors.email && (
                            <FormErrorMessage textStyle='smallText'>
                                {errors.email.message}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <Button
                        type='submit'
                        variant='listCardSolid'
                        size='auth'
                        data-test-id='submit-button'
                        w='full'
                        mt={6}
                    >
                        Получить код
                    </Button>
                </form>
                <Stack gap={0}>
                    <Stack direction={{ base: 'column', xl: 'row' }} gap={{ base: 0, xl: 1 }}>
                        <Text textStyle='modalHelper'>Не пришло письмо?</Text>
                        <Text textStyle='modalHelper'> Проверьте папку Спам.</Text>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default EmailModal;
