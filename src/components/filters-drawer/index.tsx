import './filters-drawer.module.scss';

import {
    Button,
    Checkbox,
    CheckboxGroup,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Stack,
    Switch,
    Tag,
    TagCloseButton,
    TagLabel,
    VStack,
} from '@chakra-ui/react';

import MultiSelect from '~/components/multi-select';
import CATEGORIES from '~/constants/categories';
import { ALLERGENS, AUTHORS, MEAT, SIDE } from '~/constants/labels';
import { addNewAllergen, clearFilters, filtersSelector, setFilters } from '~/store/filters-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

type FiltersDrawer = { disclosure: { isOpen: boolean; onClose: () => void } };

const FiltersDrawer = ({ disclosure }: FiltersDrawer) => {
    const dispatch = useAppDispatch();
    const { filters } = useAppSelector(filtersSelector);

    const { isOpen, onClose } = disclosure;

    const isDisableNewRecipe = !Object.values(filters)
        .flat()
        .some((item) => (item !== true ? item : ''));

    const tags = Object.values(filters)
        .filter((tag) => tag && tag !== true)
        .flat();

    console.log(Object.values(filters).flat());

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
            <DrawerOverlay layerStyle='blur' bg='blackAlpha.300' />
            <DrawerContent
                data-test-id='filter-drawer'
                maxW={{ base: '344px', xl: '463px' }}
                p={{ base: 4, xl: 8 }}
                pr={{ base: 1, xl: 1, '3xl': 8 }}
                gap={{ xl: 6 }}
            >
                <DrawerCloseButton
                    top={{ base: '30px', '3xl': '47px' }}
                    right='28px'
                    bg='black'
                    color='white'
                    borderRadius='50%'
                    data-test-id='close-filter-drawer'
                />
                <DrawerHeader
                    fontSize='2xl'
                    fontWeight={700}
                    lineHeight='133%'
                    color='black'
                    px={0}
                >
                    Фильтр
                </DrawerHeader>
                <DrawerBody
                    px={0}
                    className='filters-drawer'
                    display='flex'
                    flexDir='column'
                    justifyContent='space-between'
                    gap={6}
                >
                    <Stack spacing={{ base: 4, xl: 6 }}>
                        <MultiSelect
                            placeholder='Категория'
                            options={CATEGORIES.map((category) => category.label)}
                            selectedItems={filters?.categories || []}
                            selectItems={(items: string[] | string) =>
                                dispatch(setFilters({ name: 'categories', value: items }))
                            }
                            dataTestIdButton='filter-menu-button-категория'
                        />
                        <MultiSelect
                            placeholder='Поиск по автору'
                            options={AUTHORS}
                            selectedItems={filters?.authors || []}
                            selectItems={(items: string[] | string) =>
                                dispatch(setFilters({ name: 'authors', value: items }))
                            }
                        />
                        <Stack spacing={3}>
                            <Heading variant='listTitle' size='filterHeading'>
                                Тип мяса
                            </Heading>
                            <CheckboxGroup
                                onChange={(value) => dispatch(setFilters({ name: 'meat', value }))}
                            >
                                {MEAT.map((meatItem) => (
                                    <Checkbox
                                        key={meatItem}
                                        data-test-id={`checkbox-${meatItem.toLowerCase()}`}
                                        size='sm'
                                        value={meatItem}
                                    >
                                        {meatItem}
                                    </Checkbox>
                                ))}
                            </CheckboxGroup>
                        </Stack>
                        <Stack spacing={3}>
                            <Heading variant='listTitle' size='filterHeading'>
                                Тип гарнира
                            </Heading>
                            <CheckboxGroup
                                onChange={(value) => dispatch(setFilters({ name: 'side', value }))}
                            >
                                {SIDE.map((sideItem) => (
                                    <Checkbox
                                        key={sideItem}
                                        data-test-id={`checkbox-${sideItem.toLowerCase()}`}
                                        size='sm'
                                        value={sideItem}
                                    >
                                        {sideItem}
                                    </Checkbox>
                                ))}
                            </CheckboxGroup>
                        </Stack>
                        <Stack spacing={2}>
                            <FormControl
                                display='flex'
                                alignItems='center'
                                whiteSpace='nowrap'
                                w='auto'
                            >
                                <FormLabel htmlFor='exclude-allergens' mb='0'>
                                    Исключить аллергены
                                </FormLabel>
                                <Switch
                                    id='exclude-allergens'
                                    data-test-id='allergens-switcher-filter'
                                    isChecked={filters.isAllergens}
                                    onChange={() => {
                                        dispatch(
                                            setFilters({
                                                name: 'isAllergens',
                                                value: !filters.isAllergens,
                                            }),
                                        );
                                        dispatch(setFilters({ name: 'allergens', value: [] }));
                                    }}
                                />
                            </FormControl>
                            <MultiSelect
                                placeholder='Выберите из списка аллергенов...'
                                options={ALLERGENS}
                                isDisabled={!filters.isAllergens}
                                selectedItems={filters.allergens}
                                selectItems={(items: string[] | string) =>
                                    dispatch(setFilters({ name: 'allergens', value: items }))
                                }
                                newItem={filters.newAllergen}
                                setNewItem={(value) =>
                                    dispatch(setFilters({ name: 'newAllergen', value }))
                                }
                                addNewItem={() => dispatch(addNewAllergen())}
                                dataTestIdButton='allergens-menu-button-filter'
                                isAllergen
                            />
                        </Stack>
                    </Stack>
                    <VStack spacing={8} align='end' w='full'>
                        <HStack flexWrap='wrap' w='full'>
                            {tags.map((tag, tagIndex) => (
                                <Tag
                                    key={tagIndex}
                                    size='sm'
                                    borderRadius='full'
                                    variant='solid'
                                    bg='lime.100'
                                    borderColor='lime.400'
                                    data-test-id='filter-tag'
                                >
                                    <TagLabel color='lime.800'>{tag}</TagLabel>
                                    <TagCloseButton color='lime.600' />
                                </Tag>
                            ))}
                        </HStack>
                        <HStack>
                            <Button
                                variant='listCardOutline'
                                mr={3}
                                onClick={() => {
                                    // onClose();
                                    dispatch(clearFilters());
                                }}
                                data-test-id='clear-filter-button'
                            >
                                Очистить фильтр
                            </Button>
                            <Button
                                variant='listCardSolid'
                                colorScheme='blue'
                                data-test-id='find-recipe-button'
                                isDisabled={isDisableNewRecipe}
                                pointerEvents={isDisableNewRecipe ? 'none' : 'auto'}
                                onClick={() => {
                                    if (!isDisableNewRecipe) {
                                        onClose();
                                    }
                                }}
                            >
                                Найти рецепт
                            </Button>
                        </HStack>
                    </VStack>
                </DrawerBody>
                {/* <DrawerFooter px={0}>
                    <VStack spacing={8} align='end' w='full'>
                        <HStack flexWrap='wrap' w='full'>
                            {tags.map((tag, tagIndex) => (
                                <Tag
                                    key={tagIndex}
                                    size='sm'
                                    borderRadius='full'
                                    variant='solid'
                                    bg='lime.100'
                                    borderColor='lime.400'
                                    data-test-id='filter-tag'
                                >
                                    <TagLabel color='lime.800'>{tag}</TagLabel>
                                    <TagCloseButton color='lime.600' />
                                </Tag>
                            ))}
                        </HStack>
                        <HStack>
                            <Button
                                variant='listCardOutline'
                                mr={3}
                                onClick={onClose}
                                data-test-id='clear-filter-button'
                            >
                                Очистить фильтр
                            </Button>
                            <Button
                                variant='listCardSolid'
                                colorScheme='blue'
                                data-test-id='find-recipe-button'
                                isDisabled={isDisableNewRecipe}
                                pointerEvents={isDisableNewRecipe ? 'none' : 'auto'}
                                onClick={() => {
                                    if (!isDisableNewRecipe) {
                                        onClose();
                                    }
                                }}
                            >
                                Найти рецепт
                            </Button>
                        </HStack>
                    </VStack>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    );
};

export default FiltersDrawer;
