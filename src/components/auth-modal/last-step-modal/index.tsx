import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

import Picture from '~/assets/png/last-step-signup.png';
import { authModalSelector } from '~/store/auth-modal-slice';
import { useAppSelector } from '~/store/hooks';

const LastStepModal = () => {
    const { email } = useAppSelector(authModalSelector);

    return (
        <>
            <Image src={Picture} w={{ base: '108px', xl: '208px' }} />
            <Stack gap={4}>
                <Heading variant='errorHeading'>
                    Остался последний шаг. Нужно верифицировать ваш e-mail
                </Heading>
                <Box textStyle='errorDescription' color='blackAlpha.900' fontWeight={400}>
                    Мы отправили вам на почту <Text fontWeight={500}>{email}</Text>
                    ссылку для верификации.
                </Box>
                <Stack gap={0}>
                    <Stack direction={{ base: 'column', xl: 'row' }} gap={{ base: 0, xl: 1 }}>
                        <Text textStyle='modalHelper'>Не пришло письмо?</Text>
                        <Text textStyle='modalHelper'> Проверьте папку Спам.</Text>
                    </Stack>
                    <Box textStyle='modalHelper'>
                        По другим вопросам свяжитесь с <Text as='u'>поддержкой</Text>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
};

export default LastStepModal;
