import {
    Box,
    Button,
    // FormControl,
    // FormLabel,
    Heading,
    Image,
    // Input,
    Stack,
    Text,
} from '@chakra-ui/react';

import Picture from '~/assets/png/login-error.png';
// import { EMAIL_REQUIRED, hasEmail, validateByMaxLength } from '~/constants/validation';

const EmailModal = () => {
    const handleCode = () => {};

    // const handleTrim = ({ target }) => setValue(target.name, target.value.trim());
    return (
        <>
            <Image src={Picture} w={{ base: '108px', xl: '208px' }} />
            <Stack gap={4}>
                <Heading variant='errorHeading'>
                    Остался последний шаг. Нужно верифицировать ваш e-mail
                </Heading>
                <Box textStyle='errorDescription' color='blackAlpha.900' fontWeight={400}>
                    Для восстановления входа введите ваш e-mail, куда можно отправить уникальный код
                </Box>
                <form>
                    {/* <FormControl isInvalid={Boolean(errors.email)}>
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
                    </FormControl> */}
                    <Button
                        type='submit'
                        variant='listCardSolid'
                        size='auth'
                        data-test-id='repeat-button'
                        w='full'
                        onClick={handleCode}
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
