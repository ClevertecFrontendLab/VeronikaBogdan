import './App.css';

import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Footer from '~/components/footer';
import Header from '~/components/header';
import NavigationMenu from '~/components/navigation-menu';
import Sidebar from '~/components/sidebar';

const App = () => (
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
            <Header />
        </GridItem>
        <GridItem area='nav-menu' hideBelow='xl'>
            <NavigationMenu />
        </GridItem>
        <GridItem area='main'>
            <Outlet />
        </GridItem>
        <GridItem area='sidebar' hideBelow='xl' justifyItems={{ xl: 'end' }}>
            <Sidebar />
        </GridItem>
        <GridItem area='footer' hideFrom='xl'>
            <Footer />
        </GridItem>
    </Grid>
);

export default App;
