import { SearchIcon } from '@chakra-ui/icons';
import {
    Center,
    Flex,
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
    // <Stack spacing={6} mx={{ base: 4, md: 5 }}>
    <Stack spacing={6} px={{ base: 4, md: 5 }}>
        {/* <Center my={7} mt={{ base: 4 }}> */}
        <Center my={7} mt={{ base: 4 }}>
            <Stack spacing={{ base: 4, xl: 6 }} flex={{ base: 1 }} align='center'>
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
                <Stack spacing={4} w={{ base: '100%', md: 'auto' }}>
                    {/* <HStack w='518px' spacing={3} h={8}> */}
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
                        <Select placeholder='Выберите из списка...'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </HStack>
                </Stack>
            </Stack>
        </Center>
        <Flex gap={{ xl: 10 }}>{children}</Flex>
    </Stack>
);

export default ContentContainer;
