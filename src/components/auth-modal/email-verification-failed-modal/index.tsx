import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

import Picture from '~/assets/png/verified-link-error.png';

const EmailVerificationFailedModal = () => (
    <>
        <Image src={Picture} w={{ base: '108px', xl: '208px' }} />
        <Stack gap={4}>
            <Heading variant='errorHeading'>Упс! Что-то пошло не так</Heading>
            <Box textStyle='errorDescription' fontWeight={400}>
                Ваша ссылка для верификации недействительна. Попробуйте зарегистрироваться снова.
            </Box>
            <Box textStyle='modalHelper'>
                Остались вопросы? Свяжитесь с <Text as='u'>поддержкой</Text>
            </Box>
        </Stack>
    </>
);

export default EmailVerificationFailedModal;
