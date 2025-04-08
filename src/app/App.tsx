import './App.css';

import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Footer from '~/components/footer';
import Header from '~/components/header';
import NavigationMenu from '~/components/navigation-menu';
import Sidebar from '~/components/sidebar';

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"header" "main" "footer"`,
                xl: `"header header header"
                  "nav-menu main sidebar"
                  "nav-menu footer sidebar"`,
            }}
            // gridTemplateRows='50px 1fr 30px'
            gridTemplateColumns={{ base: '1fr', xl: 'max-content 1fr max-content' }}
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
            <GridItem area='sidebar' hideBelow='xl'>
                <Sidebar />
            </GridItem>
            <GridItem area='footer' hideFrom='xl'>
                <Footer />
            </GridItem>
        </Grid>
    );
}

export default App;
