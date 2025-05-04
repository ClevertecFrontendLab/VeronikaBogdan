import { SearchIcon } from '@chakra-ui/icons';
import {
    Center,
    Heading,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useBoolean,
    useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import FilterIcon from '~/assets/svg/filter-icon.svg';
import AllergenMenu from '~/components/allergen-menu';
import FiltersDrawer from '~/components/filters-drawer';
import {
    clearFilters,
    filtersSelector,
    setSearchText,
    setSearchTextInput,
    toggleFindRecipe,
} from '~/store/filters-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

type PageHeaderProps = {
    title?: string;
    description?: string;
    children: ReactNode;
    notFound: boolean;
};

const ContentContainer = ({ title, description, children, notFound }: PageHeaderProps) => {
    const dispatch = useAppDispatch();
    const { searchTextInput } = useAppSelector(filtersSelector);

    const [isSearch, setSearch] = useBoolean();

    const filtersDrawerDisclosure = useDisclosure();

    return (
        <Stack
            spacing={{ xl: 6 }}
            pb={{ base: '100px', xl: 0 }}
            paddingTop={{ base: '62px', xl: '80px' }}
        >
            <Center my={7} mt={{ base: 0, '3xl': 4 }} mb={{ base: 4, xl: 0 }}>
                <Stack
                    spacing={{ base: 4, xl: 6 }}
                    flex={{ base: 1 }}
                    align='center'
                    maxW={{ md: '480px', xl: '700px', '3xl': '900px' }}
                    pt={{ base: 4, xl: 5, '3xl': 1 }}
                    pb={{ base: 4, xl: 8, '3xl': 8 }}
                    boxShadow={
                        isSearch
                            ? '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                            : ''
                    }
                    borderBottomRadius={{ base: 2, md: 6, xl: 8, '3xl': 26 }}
                    layerStyle='contentContainer'
                >
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
                                data-test-id='filter-button'
                                variant='outline'
                                colorScheme='blackAlpha'
                                aria-label='Фильтры'
                                p={{ base: 0, xl: '11px' }}
                                h={{ base: 8, xl: 12 }}
                                minW={{ base: 8, xl: 'auto' }}
                                icon={<Image src={FilterIcon} h={{ base: 4, xl: 7 }} />}
                                onClick={() => {
                                    filtersDrawerDisclosure.onOpen();
                                    dispatch(toggleFindRecipe(false));
                                    dispatch(clearFilters());
                                }}
                            />
                            <InputGroup>
                                <Input
                                    type='search'
                                    data-test-id='search-input'
                                    color='lime.800'
                                    colorScheme='blackAlpha'
                                    fontSize={{ base: 'sm', xl: 'lg' }}
                                    h={{ base: 8, xl: 12 }}
                                    borderColor={notFound ? 'red' : 'blackAlpha.600'}
                                    placeholder={isSearch ? '' : 'Название или ингредиент...'}
                                    _placeholder={{ color: 'inherit' }}
                                    _focusVisible={{
                                        borderColor: notFound ? 'red' : 'blackAlpha.600',
                                        boxShadow: 'none',
                                    }}
                                    _hover={{ borderColor: notFound ? 'red' : 'blackAlpha.600' }}
                                    onFocus={() => {
                                        setSearch.on();
                                    }}
                                    onBlur={() => {
                                        setSearch.off();
                                    }}
                                    value={searchTextInput}
                                    onChange={({ target }) => {
                                        dispatch(setSearchTextInput(target.value));

                                        if (!target.value) {
                                            dispatch(setSearchText());
                                        }
                                    }}
                                    onKeyDown={({ code }) => {
                                        if (code === 'Enter' && searchTextInput.length > 2) {
                                            dispatch(setSearchText());
                                        }
                                    }}
                                />
                                <InputRightElement
                                    pr={{ base: 0, xl: 2 }}
                                    mr={{ base: -0.4, xl: 0 }}
                                    h={{ base: 8, xl: 12 }}
                                    pointerEvents={searchTextInput.length > 2 ? 'auto' : 'none'}
                                    _hover={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        if (searchTextInput.length > 2) {
                                            dispatch(setSearchText());
                                        }
                                    }}
                                    data-test-id='search-button'
                                >
                                    <SearchIcon boxSize={{ base: '16px', xl: '20px' }} />
                                </InputRightElement>
                            </InputGroup>
                        </HStack>
                        <HStack hideBelow='xl' spacing={4}>
                            <AllergenMenu />
                        </HStack>
                    </Stack>
                </Stack>
            </Center>
            <Stack spacing={{ base: 8, md: 7, xl: 10, '3xl': 12 }}>{children}</Stack>
            <FiltersDrawer disclosure={filtersDrawerDisclosure} />
        </Stack>
    );
};
export default ContentContainer;
