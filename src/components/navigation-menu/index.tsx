import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Center,
    Divider,
    Flex,
    HStack,
    Image,
    LinkBox,
    LinkOverlay,
    Text,
    useBoolean,
    VStack,
} from '@chakra-ui/react';
import { Ref, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

import AccordionIcon from '~/assets/svg/accordion-icon.svg';
import ExitIcon from '~/assets/svg/exit.svg';
import BreadCrubms from '~/components/breadcrumbs';
import Loader from '~/components/loader';
import { IMAGE_HOST } from '~/constants';
import { ROUTES } from '~/constants/routes';
import { SEARCH_ERROR } from '~/constants/toast-texts';
import useToast from '~/hooks/use-error-toast';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useAppSelector } from '~/store/hooks';
import { menuSelector } from '~/store/menu-slice';

type NavigationMenuProps = { menuRef?: Ref<HTMLDivElement | null> };

const NavigationMenu = ({ menuRef }: NavigationMenuProps) => {
    const { isBurgerMenu } = useAppSelector(menuSelector);

    const [isExpandedMenu, handleMenu] = useBoolean();

    const navigate = useNavigate();
    const { category, subcategory } = useParams();

    const { data, isLoading, isError } = useGetCategoriesQuery();

    const isActiveSubcategory = (value: string) => subcategory === value;

    const defaultCategory = useMemo(
        () => data && data?.categories?.findIndex((item) => item.category === category),
        [data, category],
    );

    const handleExit = () => {
        localStorage.clear();
        navigate(ROUTES.login);
    };

    useToast({ isLoaded: isError, status: 'error', toastType: SEARCH_ERROR });

    return (
        <Flex
            data-test-id='nav'
            ref={menuRef || null}
            position={{ base: 'absolute', xl: 'fixed' }}
            flexDir='column'
            justify='space-between'
            w={{ base: '344px', xl: '256px' }}
            h={{ base: 'calc(100vh - 145px)', xl: 'calc(100vh - 80px)' }}
            top={{ base: '64px', xl: '80px' }}
            right={{ base: '8px', xl: 'auto' }}
            zIndex={2}
            backgroundColor='white'
            borderBottomRadius={{ base: '12px', xl: 0 }}
            boxShadow={{
                base: '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1);',
                xl: '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 3px 0 rgba(0, 0, 0, 0.12);',
            }}
        >
            {isLoading && <Loader />}
            {isBurgerMenu && <BreadCrubms hideFrom='xl' />}
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
                index={defaultCategory}
                onChange={(value) => (value === -1 ? handleMenu.off() : handleMenu.on())}
            >
                {data &&
                    data?.categories?.map((category) => (
                        <AccordionItem key={category._id} border={0}>
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
                                        data-test-id={
                                            category.category === 'vegan'
                                                ? 'vegan-cuisine'
                                                : category.category
                                        }
                                        onClick={() => {
                                            const subcategoryMenu = category?.subCategories;

                                            navigate(
                                                `/${category?.category}/${
                                                    subcategoryMenu
                                                        ? subcategoryMenu[0]?.category
                                                        : ''
                                                }`,
                                            );
                                        }}
                                    >
                                        <Image src={`${IMAGE_HOST}${category.icon}`} mr={3} />
                                        <Text>{category.title}</Text>
                                        <Box ml='auto' pr={{ base: 6, xl: 4 }}>
                                            <Image
                                                src={AccordionIcon}
                                                h={4}
                                                transform={
                                                    isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                                                }
                                            />
                                        </Box>
                                    </AccordionButton>
                                    <AccordionPanel p={0}>
                                        {category.subCategories?.map((subcategory) => (
                                            <LinkBox
                                                key={subcategory.category}
                                                data-test-id={
                                                    isActiveSubcategory(subcategory.category)
                                                        ? `${subcategory.category}-active`
                                                        : ''
                                                }
                                                _hover={{ bg: 'lime.50' }}
                                            >
                                                <HStack
                                                    spacing='11px'
                                                    alignItems='flex-start'
                                                    pl={
                                                        isActiveSubcategory(subcategory.category)
                                                            ? 8
                                                            : 10
                                                    }
                                                    py='6px'
                                                >
                                                    <Center
                                                        h={
                                                            isActiveSubcategory(
                                                                subcategory.category,
                                                            )
                                                                ? 7
                                                                : 6
                                                        }
                                                    >
                                                        <Divider
                                                            orientation='vertical'
                                                            variant={
                                                                isActiveSubcategory(
                                                                    subcategory.category,
                                                                )
                                                                    ? 'menuActiveDivider'
                                                                    : 'menuInactiveDivider'
                                                            }
                                                            mt={
                                                                isActiveSubcategory(
                                                                    subcategory.category,
                                                                )
                                                                    ? -1
                                                                    : 0
                                                            }
                                                        />
                                                    </Center>
                                                    <LinkOverlay
                                                        as={Link}
                                                        to={`/${category.category}/${subcategory.category}`}
                                                    >
                                                        <Text
                                                            color='black'
                                                            fontWeight={
                                                                isActiveSubcategory(
                                                                    subcategory.category,
                                                                )
                                                                    ? 700
                                                                    : 500
                                                            }
                                                        >
                                                            {subcategory.title}
                                                        </Text>
                                                    </LinkOverlay>
                                                </HStack>
                                            </LinkBox>
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
                    onClick={handleExit}
                >
                    <Image src={ExitIcon} />
                    <Text>Выйти</Text>
                </Button>
            </VStack>
        </Flex>
    );
};

export default NavigationMenu;
