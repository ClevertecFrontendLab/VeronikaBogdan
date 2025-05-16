import './App.css';

import { Box, Grid, GridItem, useMediaQuery, useOutsideClick } from '@chakra-ui/react';
import { useRef } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

import Footer from '~/components/footer';
import Header from '~/components/header';
import NavigationMenu from '~/components/navigation-menu';
import Sidebar from '~/components/sidebar';
import { ROUTES } from '~/constants/routes';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { menuSelector, setBurgerMenuState } from '~/store/menu-slice';

const App = () => {
    const dispatch = useAppDispatch();
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const { isBurgerMenu } = useAppSelector(menuSelector);

    const { pathname } = useLocation();

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    useOutsideClick({
        ref: menuRef,
        handler: (event) => {
            if (isBurgerMenu) {
                event.preventDefault();
                event.stopPropagation();

                if (headerRef.current && !headerRef.current.contains(event.target)) {
                    dispatch(setBurgerMenuState());
                }
            }
        },
    });

    const isErrorPage = pathname === '/not-found';

    const condition = true;
    if (condition) {
        return <Navigate to={`${ROUTES.authorization}/${ROUTES.login}`} />;
    }

    return (
        <>
            <Grid
                templateAreas={{
                    base: `"header" "main" "footer"`,
                    xl: `"header header header"
                "nav-menu main sidebar"
                "nav-menu footer sidebar"`,
                }}
                gridTemplateColumns={{
                    base: '100%',
                    xl: '1fr 880px 1fr',
                    '3xl': '1fr 1360px 1fr',
                }}
                maxW={{ '3xl': '1920px' }}
                position='relative'
                columnGap={6}
            >
                <GridItem area='header'>
                    <Header ref={headerRef} isError={isErrorPage} />
                </GridItem>
                <GridItem area='nav-menu' hideBelow='xl'>
                    {isLargerThan1440 && !isErrorPage && <NavigationMenu />}
                </GridItem>
                <GridItem area='main'>
                    <Outlet />
                </GridItem>
                <GridItem area='sidebar' hideBelow='xl' justifyItems={{ xl: 'end' }}>
                    {!isErrorPage && <Sidebar />}
                </GridItem>
                <GridItem area='footer' hideFrom='xl'>
                    {!isErrorPage && <Footer />}
                </GridItem>
            </Grid>
            {isBurgerMenu && (
                <Box layerStyle='blur'>
                    <NavigationMenu menuRef={menuRef} />
                </Box>
            )}
        </>
    );
};

export default App;
