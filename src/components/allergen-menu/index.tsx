import { ChevronDownIcon, ChevronUpIcon, SmallAddIcon } from '@chakra-ui/icons';
import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Switch,
    Tag,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { ALLERGENS } from '~/constants/labels';
import {
    addOtherAllergen,
    filtersSelector,
    setAllergensInput,
    setOtherAllergen,
    toggleAllergens,
} from '~/store/filters-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { menuStyles } from '~/styles/components/menu';

const AllergenMenu = () => {
    const dispatch = useAppDispatch();

    const { isAllergens, allergensInput, otherAllergen } = useAppSelector(filtersSelector);

    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () =>
        setTimeout(() => {
            inputRef.current?.focus();
        }, 35);

    useEffect(() => {
        focusInput();
    }, [inputRef, allergensInput]);

    return (
        <>
            <FormControl display='flex' alignItems='center' whiteSpace='nowrap' ml={2} w='auto'>
                <FormLabel htmlFor='exclude-allergens' mb='0'>
                    Исключить{isAllergens ? '' : ' мои'} аллергены
                </FormLabel>
                <Switch
                    id='exclude-allergens'
                    data-test-id='allergens-switcher'
                    isChecked={isAllergens}
                    onChange={() => dispatch(toggleAllergens())}
                />
            </FormControl>
            <Menu closeOnSelect={false} onOpen={() => focusInput()} variant='searchBox'>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={Button}
                            isDisabled={!isAllergens}
                            data-test-id='allergens-menu-button'
                            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            borderColor={allergensInput.length > 0 ? 'lime.300' : 'blackAlpha.200'}
                            {...menuStyles.button}
                            {...menuStyles.page}
                        >
                            {allergensInput.length > 0
                                ? allergensInput.map((allergen, allergenIndex) => (
                                      <Tag
                                          key={allergenIndex}
                                          fontSize='xs'
                                          fontWeight={500}
                                          color='lime.600'
                                          border='1px solid'
                                          borderColor='lime.400'
                                          backgroundColor='transparent'
                                      >
                                          {allergen}
                                      </Tag>
                                  ))
                                : 'Выберите из списка...'}
                        </MenuButton>
                        <MenuList
                            data-test-id={isOpen ? 'allergens-menu' : ''}
                            position='relative'
                            {...menuStyles.list}
                        >
                            <MenuOptionGroup
                                type='checkbox'
                                value={allergensInput}
                                onChange={(values) => dispatch(setAllergensInput(values))}
                            >
                                {ALLERGENS.map((allergen, allergenIndex) => (
                                    <MenuItemOption
                                        key={allergen}
                                        fontSize='sm'
                                        borderRadius={0}
                                        _hover={{
                                            outline: 0,
                                        }}
                                        _focus={{
                                            outline: 0,
                                            border: 0,
                                        }}
                                        sx={{
                                            '&:nth-of-type(2n + 1)': {
                                                backgroundColor: 'blackAlpha.200',
                                            },
                                            '& > span:first-of-type': {
                                                borderRadius: '2px',
                                                border: '3px solid',
                                                borderColor: allergensInput.includes(allergen)
                                                    ? 'lime.400'
                                                    : 'lime.150',
                                                backgroundColor: allergensInput.includes(allergen)
                                                    ? 'lime.400'
                                                    : '',
                                                opacity: 1,
                                                w: 3,
                                                h: 3,
                                                mr: 2,
                                                ml: 1,
                                            },
                                            '& svg': {
                                                opacity: allergensInput.includes(allergen) ? 1 : 0,
                                            },
                                        }}
                                        value={allergen}
                                        data-test-id={isOpen ? `allergen-${allergenIndex}` : ''}
                                    >
                                        {allergen}
                                    </MenuItemOption>
                                ))}
                            </MenuOptionGroup>
                            <HStack pl={6} pr={3} spacing={4} my={2}>
                                <Input
                                    ref={inputRef}
                                    type='text'
                                    data-test-id={isOpen ? 'add-other-allergen' : ''}
                                    placeholder='Другой аллерген'
                                    _placeholder={{ color: 'lime.800' }}
                                    fontSize='sm'
                                    _focusVisible={{ outline: 0 }}
                                    autoFocus={true}
                                    value={otherAllergen}
                                    onChange={(event) =>
                                        dispatch(setOtherAllergen(event.target.value))
                                    }
                                    onKeyDown={({ code }) => {
                                        if (code === 'Enter') {
                                            dispatch(addOtherAllergen());
                                        }
                                    }}
                                />
                                <IconButton
                                    data-test-id={isOpen ? 'add-allergen-button' : ''}
                                    isRound={true}
                                    variant='solid'
                                    minW='12px'
                                    maxH='12px'
                                    backgroundColor='lime.600'
                                    color='white'
                                    aria-label='Add new allergen'
                                    icon={<SmallAddIcon width='auto' height='auto' />}
                                    onClick={() => dispatch(addOtherAllergen())}
                                />
                            </HStack>
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    );
};
export default AllergenMenu;
