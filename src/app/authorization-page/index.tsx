import {
    Flex,
    Grid,
    GridItem,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from '@chakra-ui/react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router';

import StartingImage from '~/assets/png/starting-image.png';
import LogoIcon from '~/assets/svg/logo-icon.svg';
import LogoText from '~/assets/svg/logo-text.svg';
import { ROUTES } from '~/constants/routes';

const TABS_INFO = [
    { title: 'Вход на сайт', path: ROUTES.login },
    { title: 'Регистрация', path: ROUTES.signup },
];

const AuthorizationPage = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isLoginPage = pathname.includes(ROUTES.login);
    const isSignupPage = pathname.includes(ROUTES.signup);

    if (!(isLoginPage || isSignupPage)) {
        return <Navigate to={ROUTES.login} />;
    }

    return (
        <Grid
            templateColumns={{ base: '1fr', xl: '1fr 1.025fr' }}
            h='100dvh'
            bgGradient='linear(to-bl,  lime.100 22%, lime.650 165%)'
        >
            <GridItem p={{ base: 4, md: 5 }} display='flex' flexDirection='column' height='full'>
                <Flex
                    justify='center'
                    align='center'
                    direction='column'
                    gap={{ base: 10, md: 14, xl: 20 }}
                    h='full'
                >
                    <Flex align='end' columnGap={1.5}>
                        <Image src={LogoIcon} w={{ base: 10, xl: 16 }} h={{ base: 10, xl: 16 }} />
                        <Image src={LogoText} w={{ base: 32, xl: 48 }} />
                    </Flex>
                    <Tabs variant='auth' size='auth' defaultIndex={+isSignupPage}>
                        <TabList mb={10}>
                            {TABS_INFO.map((tab) => (
                                <Tab key={tab.title} onClick={() => navigate(tab.path)}>
                                    {tab.title}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels>
                            {TABS_INFO.map((tab, tabIndex) => (
                                <TabPanel key={tab.title} p={0}>
                                    {+isSignupPage === tabIndex && <Outlet />}
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </Tabs>
                </Flex>
                <Text
                    textStyle='smallText'
                    fontWeight={600}
                    // position='absolute'
                    // bottom={0}
                    pt={{ base: 2, xl: 7 }}
                    py={{ base: 0, xl: 7 }}
                    px={2}
                >
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </Text>
            </GridItem>
            <GridItem position='relative' hideBelow='xl'>
                <Image src={StartingImage} objectFit='cover' w='full' h='100vh' />
                <Text
                    textStyle='smallText'
                    fontWeight={600}
                    position='absolute'
                    bottom={0}
                    right={0}
                    p={7}
                >
                    &ndash; Лучший сервис для ваших кулинарных побед
                </Text>
            </GridItem>
        </Grid>
    );
};

export default AuthorizationPage;
