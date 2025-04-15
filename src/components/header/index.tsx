import { Avatar, Flex, Grid, GridItem, Image, Spacer } from '@chakra-ui/react';

import Photo from '~/assets/png/photo.png';
import LogoIcon from '~/assets/svg/logo-icon.svg';
import LogoText from '~/assets/svg/logo-text.svg';
import MenuIcon from '~/assets/svg/menu-icon.svg';
import BreadCrubms from '~/components/breadcrumbs';
import ProfileNotifications from '~/components/profile-notifications';

const Header = () => (
    <Flex
        bg='lime.50'
        data-test-id='header'
        align='center'
        position='fixed'
        maxW={{ base: '100%', xl: '1920px' }}
        w='100%'
        zIndex={2}
        h={{ base: 16, xl: 20 }}
        pr={{ base: 7, md: 8, xl: 20 }}
        pl={4}
    >
        <Flex align='end' columnGap={1.5}>
            <Image src={LogoIcon} />
            <Image src={LogoText} hideBelow='md' />
        </Flex>
        <BreadCrubms />
        <Spacer />
        <Grid
            hideBelow='xl'
            templateColumns='48px 1fr'
            templateRows='repeat(2, 1fr)'
            columnGap={3}
            alignItems='center'
        >
            <GridItem rowSpan={2} colSpan={1}>
                <Avatar name='Екатерина Константинопольская' src={Photo} />
            </GridItem>
            <GridItem fontSize='lg' fontWeight='medium'>
                Екатерина Константинопольская
            </GridItem>
            <GridItem fontSize='sm' color='blackAlpha.700'>
                @bake_and_pie
            </GridItem>
        </Grid>
        <ProfileNotifications type='header' />
        <Image src={MenuIcon} hideFrom='xl' />
    </Flex>
);

export default Header;
