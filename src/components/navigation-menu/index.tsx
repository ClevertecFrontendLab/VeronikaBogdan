import './menu.scss';

import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Image,
    Text,
    useBoolean,
    VStack,
} from '@chakra-ui/react';

import AccordionIcon from '~/assets/svg/accordion-icon.svg';
import ExitIcon from '~/assets/svg/exit.svg';
import CATEGORIES from '~/constants/categories';

const NavigationMenu = () => {
    const [isExpandedMenu, handleMenu] = useBoolean();

    return (
        <Flex
            flexDir='column'
            justify='space-between'
            w='256px'
            h='calc(100vh - 80px)'
            boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 3px 0 rgba(0, 0, 0, 0.12);'
        >
            <Accordion
                py={2.5}
                pl={2.5}
                mt={6}
                overflowY='auto'
                borderBottomRadius={isExpandedMenu ? '12px' : ''}
                boxShadow={
                    isExpandedMenu
                        ? '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        : ''
                }
                allowToggle
                onChange={(value) => (value === -1 ? handleMenu.off() : handleMenu.on())}
            >
                {CATEGORIES.map((category) => (
                    <AccordionItem key={category.label} border={0}>
                        {({ isExpanded }) => (
                            <>
                                <AccordionButton
                                    pl={2}
                                    pr={0}
                                    py={3}
                                    borderRadius={0}
                                    border={0}
                                    _hover={{ bg: 'lime.50' }}
                                    _focus={{ outline: 0 }}
                                    _focusVisible={{ outline: 0 }}
                                    _expanded={{ bg: 'lime.100' }}
                                >
                                    <Image src={category.icon} mr={3} />
                                    <Text>{category.label}</Text>
                                    <Box ml='auto' pr={2.5}>
                                        <Image
                                            src={AccordionIcon}
                                            h={4}
                                            transform={
                                                isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                                            }
                                        />
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel>
                                    {category.children.map((subcategory) => (
                                        <HStack key={subcategory} spacing='11px'>
                                            <Divider
                                                orientation='vertical'
                                                colorScheme='lime.300'
                                                h={6}
                                            />
                                            {/* <Divider orientation='vertical' h={6} /> */}
                                            <Text>{subcategory}</Text>
                                        </HStack>
                                    ))}
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
            <VStack spacing={3} px={6} pb={8} fontSize='xs' align='left'>
                <Text fontWeight={500} color='blackAlpha.400'>
                    Версия программы 03.25
                </Text>
                <VStack fontWeight={400} color='blackAlpha.700' spacing={0} align='left'>
                    <Text>Все права защищены,</Text>
                    <Text>ученический файл,</Text>
                    <Text>©Клевер Технолоджи, 2025</Text>
                </VStack>
                <Button
                    variant='link'
                    fontSize='xs'
                    fontWeight={600}
                    color='black'
                    gap='6px'
                    justifyContent='flex-start'
                >
                    <Image src={ExitIcon} />
                    <Text>Выйти</Text>
                </Button>
            </VStack>
        </Flex>
    );
};

export default NavigationMenu;
