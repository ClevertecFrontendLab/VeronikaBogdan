import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Button,
    Divider,
    Flex,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';

import ExitIcon from '~/assets/svg/exit.svg';
import CATEGORIES from '~/constants/categories';

const NavigationMenu = () => (
    <Flex
        flexDir='column'
        justify='space-between'
        w='256px'
        h='calc(100vh - 80px)'
        boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);'
    >
        <Accordion allowToggle py={2.5} pl={2.5} pr={1} mt={6} overflowY='scroll'>
            {CATEGORIES.map((category) => (
                <AccordionItem key={category.label} border={0}>
                    <AccordionButton
                        pl={2}
                        pr={0}
                        py={2.5}
                        borderRadius={0}
                        border={0}
                        _hover={{ bg: 'lime.50' }}
                        _focus={{ outline: 0 }}
                        _focusVisible={{ outline: 0 }}
                    >
                        <Image src={category.icon} mr={3} />
                        <Text>{category.label}</Text>
                        <AccordionIcon w={7} h={7} ml='auto' />
                    </AccordionButton>
                    <AccordionPanel>
                        {category.children.map((subcategory) => (
                            <HStack key={subcategory} spacing='11px'>
                                <Divider orientation='vertical' colorScheme='lime.300' h={6} />
                                {/* <Divider orientation='vertical' h={6} /> */}
                                <Text>{subcategory}</Text>
                            </HStack>
                        ))}
                    </AccordionPanel>
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

export default NavigationMenu;
