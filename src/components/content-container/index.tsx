import { SearchIcon } from '@chakra-ui/icons';
import {
    Center,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Stack,
    Switch,
    Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import FilterIcon from '~/assets/svg/filter-icon.svg';

type PageHeaderProps = { title: string; description?: string; children: ReactNode };

const ContentContainer = ({ title, description, children }: PageHeaderProps) => (
    <Stack
        spacing={{ xl: 6 }}
        px={{ base: 4, md: 5, xl: 0 }}
        pb={{ base: '100px', xl: 0 }}
        paddingTop={{ base: '62px', xl: '80px' }}
    >
        <Center my={7} mt={{ base: 4, xl: 5, '3xl': 4 }} mb={{ base: 8, xl: 8, '3xl': 6 }}>
            <Stack spacing={{ base: 4, xl: 6 }} flex={{ base: 1 }} align='center'>
                <Stack spacing={{ base: 3, xl: 2 }}>
                    <Heading variant='pageTitle' size='pageTitle'>
                        {title}
                    </Heading>
                    {description && (
                        <Text textStyle='blockDescription' align='center' maxW={727}>
                            {description}
                        </Text>
                    )}
                </Stack>
                <Stack spacing={4} w={{ base: '100%', md: 'auto' }}>
                    <HStack
                        spacing={3}
                        w={{ base: '100%', md: '448px', xl: '518px' }}
                        mt={{ base: '-4px', xl: description ? '2' : '-4px' }}
                    >
                        <IconButton
                            variant='outline'
                            colorScheme='blackAlpha'
                            aria-label='Фильтры'
                            p={{ base: 0, xl: '11px' }}
                            h={{ base: 8, xl: 12 }}
                            minW={{ base: 8, xl: 'auto' }}
                            icon={<Image src={FilterIcon} h={{ base: 4, xl: 7 }} />}
                        />
                        <InputGroup borderColor='blackAlpha.600'>
                            <Input
                                color='lime.800'
                                colorScheme='blackAlpha'
                                fontSize={{ base: 'sm', xl: 'lg' }}
                                placeholder='Название или ингредиент...'
                                _placeholder={{ color: 'inherit' }}
                                h={{ base: 8, xl: 12 }}
                            />
                            <InputRightElement
                                pr={{ base: 0, xl: 2 }}
                                mr={{ base: -0.4, xl: 0 }}
                                h={{ base: 8, xl: 12 }}
                            >
                                <SearchIcon boxSize={{ base: '16px', xl: '20px' }} />
                            </InputRightElement>
                        </InputGroup>
                    </HStack>

                    <HStack hideBelow='xl' spacing={4}>
                        <FormControl display='flex' alignItems='center' whiteSpace='nowrap' ml={2}>
                            <FormLabel htmlFor='exclude-allergens' mb='0'>
                                Исключить мои аллергены
                            </FormLabel>
                            <Switch id='exclude-allergens' />
                        </FormControl>
                        <Select
                            placeholder='Выберите из списка...'
                            color='blackAlpha.700'
                            borderColor='blackAlpha.200'
                        />
                    </HStack>
                </Stack>
            </Stack>
        </Center>
        <Stack spacing={{ base: 8, md: 7, xl: 10, '3xl': 12 }}>{children}</Stack>
    </Stack>
);

export default ContentContainer;
