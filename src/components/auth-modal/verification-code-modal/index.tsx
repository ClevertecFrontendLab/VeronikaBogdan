import {
    Box,
    Heading,
    HStack,
    Image,
    PinInput,
    PinInputField,
    Stack,
    Text,
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import Picture from '~/assets/png/email-code.png';
import Loader from '~/components/loader';
import { RESET_CREDENTIALS_MODAL } from '~/constants';
import { SERVER_ERROR, TOASTS } from '~/constants/toast-texts';
import { useSaveVerificationCodeMutation } from '~/query/services/auth';
import { authModalSelector, setDataTestIdModal } from '~/store/auth-modal-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

const pinFields = [1, 2, 3, 4, 5, 6];

const VerificationCodeModal = () => {
    const toast = useChakraToast();
    const dispatch = useAppDispatch();

    const [codeInputs, setCodeInputs] = useState('');

    const { email } = useAppSelector(authModalSelector);

    const [saveVerificationCode, { isLoading, isError, error }] = useSaveVerificationCodeMutation();

    const isInvalid = error?.status === 403;

    const handleCode = (otpToken: string) => {
        const body = { otpToken, email };
        toast.closeAll();

        saveVerificationCode(body)
            .unwrap()
            .then(() => {
                dispatch(setDataTestIdModal(RESET_CREDENTIALS_MODAL));
            })
            .catch((error) => {
                if (Math.floor(error.status / 100) === 5) {
                    toast({ status: 'error', ...TOASTS[SERVER_ERROR] });
                }
                setCodeInputs('');
            });
    };

    return (
        <>
            {isLoading && <Loader />}
            <Image src={Picture} w={{ base: '108px', xl: '208px' }} />
            <Stack gap={4}>
                {isInvalid && <Heading variant='errorHeading'>Неверный код</Heading>}
                <Box textStyle='errorDescription' color='blackAlpha.900' fontWeight={400}>
                    Мы отправили вам на e-mail <Text fontWeight={500}>{email}</Text>
                    <Stack direction={{ base: 'column', xl: 'row' }} gap={{ xl: 1 }}>
                        <Text>шестизначный код.</Text>
                        <Text>Введите его ниже.</Text>
                    </Stack>
                </Box>
                <HStack justifyContent='center'>
                    <PinInput
                        otp
                        onComplete={handleCode}
                        value={codeInputs}
                        onChange={setCodeInputs}
                        isInvalid={isError || isInvalid}
                        autoFocus={false}
                    >
                        {pinFields.map((_, fieldIndex) => (
                            <PinInputField
                                data-test-id={`verification-code-input-${fieldIndex + 1}`}
                                placeholder='o'
                                _placeholder={{
                                    color: 'lime.800',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                }}
                                border={isError || isInvalid ? '0' : '1px solid'}
                                borderColor='blackAlpha.100'
                                _hover={{
                                    borderColor:
                                        isError || isInvalid ? 'red.500' : 'blackAlpha.100',
                                }}
                                _focusVisible={{
                                    borderColor:
                                        isError || isInvalid ? 'red.500' : 'blackAlpha.100',
                                }}
                            />
                        ))}
                    </PinInput>
                </HStack>
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

export default VerificationCodeModal;
