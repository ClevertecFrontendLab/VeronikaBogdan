import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

import Picture from '~/assets/png/login-error.png';

type LoginErrorModalProps = { onSubmit?: () => void };

const LoginErrorModal = ({ onSubmit }: LoginErrorModalProps) => {
    const handleRepeat = () => {
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <>
            <Image src={Picture} w={{ base: '108px', xl: '208px' }} />
            <Stack gap={4}>
                <Heading variant='errorHeading'>Вход не выполнен</Heading>
                <Stack gap={0}>
                    <Text textStyle='errorDescription'>Что-то пошло не так.</Text>
                    <Text textStyle='errorDescription'>Попробуйте еще раз</Text>
                </Stack>
            </Stack>
            <Button
                type='submit'
                variant='listCardSolid'
                size='auth'
                data-test-id='repeat-button'
                w='full'
                onClick={handleRepeat}
            >
                Повторить
            </Button>
        </>
    );
};

export default LoginErrorModal;
