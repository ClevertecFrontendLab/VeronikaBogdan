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
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router';

import StartingImage from '~/assets/png/starting-image.png';
import LogoIcon from '~/assets/svg/logo-icon.svg';
import LogoText from '~/assets/svg/logo-text.svg';
import { EMAIL_VERIFICATION_FAILED_MODAL } from '~/constants';
// import AuthModal from '~/components/auth-modal';
import { ROUTES } from '~/constants/routes';
import { EMAIL_VERIFIED_SUCCESS, TOASTS } from '~/constants/toast-texts';
import { setAuthModal, setDataTestIdModal } from '~/store/auth-modal-slice';
import { useAppDispatch } from '~/store/hooks';

const TABS_INFO = [
    { title: 'Вход на сайт', path: ROUTES.login },
    { title: 'Регистрация', path: ROUTES.signup },
];

const AuthorizationPage = () => {
    const dispatch = useAppDispatch();
    const toast = useChakraToast();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const isLoginPage = pathname.includes(ROUTES.login);
    const isSignupPage = pathname.includes(ROUTES.signup);
    const isVerificationPage = pathname.includes(ROUTES.verification);
    const isEmailVerified = searchParams.get('emailVerified') === 'true';

    const [tabIndex, setTabIndex] = useState(+isSignupPage);

    useEffect(() => {
        if (isVerificationPage) {
            if (isEmailVerified) {
                navigate(`/${ROUTES.authorization}/${ROUTES.login}`);
                toast({ status: 'success', ...TOASTS[EMAIL_VERIFIED_SUCCESS] });
            } else {
                navigate(`/${ROUTES.authorization}/${ROUTES.signup}`);
                dispatch(setAuthModal(true));
                dispatch(setDataTestIdModal(EMAIL_VERIFICATION_FAILED_MODAL));
            }
        }
    }, [dispatch, isEmailVerified, isVerificationPage, navigate, toast]);

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
                    <Tabs variant='auth' size='auth' defaultIndex={+isSignupPage} index={tabIndex}>
                        <TabList mb={10}>
                            {TABS_INFO.map((tab, tabListIndex) => (
                                <Tab
                                    key={tab.title}
                                    onClick={() => {
                                        navigate(tab.path);
                                        setTabIndex(tabListIndex);
                                    }}
                                >
                                    {tab.title}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels>
                            {TABS_INFO.map((tab, panelIndex) => (
                                <TabPanel key={tab.title} p={0}>
                                    {tabIndex === panelIndex && <Outlet />}
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
            {/* <AuthModal /> */}
        </Grid>
    );
};

export default AuthorizationPage;
