import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PageHeaderProps = { title: string; description?: string; children: ReactNode };

const ContentContainer = ({ title, description, children }: PageHeaderProps) => (
    <Stack spacing={6}>
        <Center my={7} mt={{ base: 4 }} mx={{ base: 4, md: 5 }}>
            <Stack spacing={{ base: 4, xl: 7 }} align='center'>
                <Stack spacing={{ base: 3, xl: 2 }}>
                    <Heading variant='pageTitle' size='pageTitle'>
                        {title}
                    </Heading>
                    {description && (
                        <Text
                            fontWeight={500}
                            fontSize={{ base: 'sm', xl: 'md' }}
                            lineHeight={{ base: '143%', xl: '135%' }}
                            color='blackAlpha.600'
                            align='center'
                            maxW={727}
                        >
                            {description}
                        </Text>
                    )}
                </Stack>
                <Box>filters</Box>
            </Stack>
        </Center>
        <Flex gap={{ xl: 10 }}>{children}</Flex>
    </Stack>
);

export default ContentContainer;
