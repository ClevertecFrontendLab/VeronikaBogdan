import { ChevronDownIcon, ChevronUpIcon, SmallAddIcon } from '@chakra-ui/icons';
import {
    Button,
    HStack,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Tag,
    useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { menuStyles } from '~/styles/components/menu';

type Option = { label: string; value: string } | string;

type MultiSelectProps = {
    options: Option[];
    placeholder: string;
    selectedItems: string[] | string;
    selectItems: (value: string[] | string) => void;
    newItem?: string;
    setNewItem?: (value: string) => void;
    addNewItem?: () => void;
    isDisabled?: boolean;
    dataTestIdButton?: string;
    dataTestIdList?: string;
    isSearchBox?: boolean;
    isAllergen?: boolean;
    noWrapOptions?: boolean;
};

const MultiSelect = ({
    placeholder,
    options,
    selectedItems,
    selectItems,
    newItem,
    setNewItem,
    addNewItem,
    isDisabled,
    dataTestIdButton,
    dataTestIdList,
    isSearchBox,
    isAllergen,
    noWrapOptions,
}: MultiSelectProps) => {
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const inputRef = useRef<HTMLInputElement>(null);

    const defaultSelectCount = isLargerThan1440 ? 2 : 1;

    const getOption = (option: Option) =>
        typeof option === 'object'
            ? { label: option.label, value: option.value }
            : { label: option, value: option };

    const getOptionLabel = (item) => options.find((option) => option.value === item)?.label;

    const getTags = (item, index, items) => {
        if (noWrapOptions) {
            if (index === defaultSelectCount) return `+${items.length - defaultSelectCount}`;
            if (index > defaultSelectCount) return '';
        }

        return getOptionLabel(item);
    };

    const focusInput = () =>
        setTimeout(() => {
            inputRef.current?.focus();
        }, 35);

    useEffect(() => {
        focusInput();
    }, [inputRef, selectedItems]);

    const style = isSearchBox ? menuStyles.page : {};

    return (
        <Menu
            closeOnSelect={false}
            onOpen={() => focusInput()}
            variant='searchBox'
            isLazy={true}
            matchWidth={true}
        >
            {({ isOpen }) => (
                <>
                    <MenuButton
                        as={Button}
                        isDisabled={isDisabled}
                        data-test-id={dataTestIdButton}
                        rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        borderColor={selectedItems.length > 0 ? 'lime.300' : 'blackAlpha.200'}
                        {...menuStyles.button}
                        {...style}
                    >
                        {selectedItems.length > 0
                            ? selectedItems?.map((item, itemIndex, items) => (
                                  <Tag
                                      key={itemIndex}
                                      fontSize='xs'
                                      fontWeight={500}
                                      color='lime.600'
                                      border='1px solid'
                                      borderColor='lime.400'
                                      backgroundColor='transparent'
                                      display={
                                          noWrapOptions && itemIndex > defaultSelectCount
                                              ? 'none'
                                              : 'inline-flex'
                                      }
                                  >
                                      {getTags(item, itemIndex, items)}
                                  </Tag>
                              ))
                            : placeholder}
                    </MenuButton>
                    <MenuList
                        data-test-id={dataTestIdList}
                        position='relative'
                        minWidth='full'
                        height='310px'
                        overflowY='auto'
                        {...menuStyles.list}
                    >
                        .
                        <MenuOptionGroup
                            type='checkbox'
                            value={selectedItems}
                            onChange={(values: string[] | string) => selectItems(values)}
                        >
                            {options.map((option, optionIndex) => (
                                <MenuItemOption
                                    key={getOption(option).value}
                                    // key={option}
                                    fontSize='sm'
                                    borderRadius={0}
                                    border={0}
                                    _hover={{
                                        outline: 0,
                                        outlineOffset: 0,
                                    }}
                                    _focus={{
                                        outline: 0,
                                        outlineOffset: 0,
                                    }}
                                    sx={{
                                        '&:nth-of-type(2n + 1)': {
                                            backgroundColor: 'blackAlpha.200',
                                        },
                                        '& > span:first-of-type': {
                                            borderRadius: '2px',
                                            border: '3px solid',
                                            borderColor: selectedItems.includes(
                                                getOption(option).value,
                                            )
                                                ? 'lime.400'
                                                : 'lime.150',
                                            backgroundColor: selectedItems.includes(
                                                getOption(option).value,
                                            )
                                                ? 'lime.400'
                                                : '',
                                            opacity: 1,
                                            w: 3,
                                            h: 3,
                                            mr: 2,
                                            ml: 1,
                                        },
                                        '& svg': {
                                            opacity: selectedItems.includes(getOption(option).value)
                                                ? 1
                                                : 0,
                                        },
                                    }}
                                    value={getOption(option).value}
                                    data-test-id={
                                        isAllergen
                                            ? `allergen-${optionIndex}`
                                            : `checkbox-${getOption(option).label.toLowerCase()}`
                                    }
                                >
                                    {getOption(option).label}
                                </MenuItemOption>
                            ))}
                        </MenuOptionGroup>
                        {isAllergen && (
                            <HStack pl={6} pr={3} spacing={4} my={2}>
                                <Input
                                    ref={inputRef}
                                    type='text'
                                    data-test-id='add-other-allergen'
                                    placeholder='Другой аллерген'
                                    _placeholder={{ color: 'lime.800' }}
                                    fontSize='sm'
                                    _focusVisible={{ outline: 0 }}
                                    autoFocus
                                    value={newItem}
                                    onChange={(event) =>
                                        setNewItem && setNewItem(event.target.value)
                                    }
                                    onKeyDown={({ code }) => {
                                        if (code === 'Enter' && addNewItem) {
                                            addNewItem();
                                        }
                                    }}
                                />
                                <IconButton
                                    data-test-id='add-allergen-button'
                                    isRound={true}
                                    variant='solid'
                                    minW='12px'
                                    maxH='12px'
                                    backgroundColor='lime.600'
                                    color='white'
                                    aria-label='Add new allergen'
                                    icon={<SmallAddIcon width='auto' height='auto' />}
                                    onClick={addNewItem}
                                />
                            </HStack>
                        )}
                    </MenuList>
                </>
            )}
        </Menu>
    );
};

export default MultiSelect;
