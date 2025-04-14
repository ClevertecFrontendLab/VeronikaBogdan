import './App.css';

import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Footer from '~/components/footer';
import Header from '~/components/header';
import NavigationMenu from '~/components/navigation-menu';
import Sidebar from '~/components/sidebar';
import { theme } from '~/styles/theme';

function App() {
    console.log(theme);
    return (
        <Grid
            templateAreas={{
                base: `"header" "main" "footer"`,
                xl: `"header header header"
                  "nav-menu main sidebar"
                  "nav-menu footer sidebar"`,
            }}
            gridTemplateColumns={{
                base: '100%',
                // xl: 'max-content 880px 1fr',
                // '3xl': 'max-content 1360px 1fr',
                //----
                // xl: '257px 880px 1fr',
                // '3xl': '257px 1360px 1fr',
                //----
                // xl: '257px 880px max-content',
                // '3xl': '257px 1360px max-content',
                //----
                // xl: '257px max-content 200px',
                // '3xl': '257px max-content 200px',
                xl: '257px 880px 250px',
                '3xl': '257px 1360px 250px',
            }}
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
}

export default App;
