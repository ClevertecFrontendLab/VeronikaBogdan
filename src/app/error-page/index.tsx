import { Flex, Heading, Image, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

import Error from '~/assets/png/error-page.png';

const ErrorPage = () => (
    <Flex h='100vh' align='center' justify='center'>
        <Stack maxWidth={{ base: '252px', xl: '332px' }} alignItems='center'>
            <Image src={Error} w={{ base: '108px', xl: '208px' }} />
            <Heading as='h1' variant='errorHeading' pt={8} pb={4}>
                Упс! Такой страницы нет
            </Heading>
            <Text textStyle='errorDescription'>
                Можете поискать другой рецепт{' '}
                <ChakraLink
                    as={ReactRouterLink}
                    to='/'
                    textStyle='errorDescription'
                    textDecoration='underline'
                    data-test-id='error-page-go-home'
                >
                    здесь.
                </ChakraLink>
            </Text>
        </Stack>
    </Flex>
);

export default ErrorPage;
