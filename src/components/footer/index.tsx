import { SearchIcon } from '@chakra-ui/icons';
import { Avatar, Grid, GridItem, IconButton, Image, Stack, Text } from '@chakra-ui/react';

import Photo from '~/assets/png/photo.png';
import Home from '~/assets/svg/home.svg';
import Writeble from '~/assets/svg/writeble.svg';
import { useAppSelector } from '~/store/hooks';
import { menuSelector } from '~/store/menu-slice';

const Footer = () => {
    const { isBurgerMenu } = useAppSelector(menuSelector);

    return (
        <Grid
            gridTemplateColumns='repeat(4,max-content)'
            data-test-id='footer'
            position='fixed'
            bottom={0}
            w='full'
            h='84px'
            bg='lime.50'
            justifyContent='space-around'
            layerStyle={isBurgerMenu ? 'blur' : ''}
        >
            <GridItem minW='90px'>
                <Stack
                    alignItems='center'
                    pt={2.5}
                    bgGradient='radial(62.52% 62.51% at 48.89% 38.5%, #c4ff61 0%, rgba(255, 255, 255, 0) 75%)'
                >
                    <IconButton
                        isRound={true}
                        variant='solid'
                        w={1}
                        bg='black'
                        aria-label='Главная'
                        icon={<Image src={Home} boxSize={4} />}
                    />
                    <Text textStyle='footerActive'>Главная</Text>
                </Stack>
            </GridItem>
            <GridItem minW='90px'>
                <Stack alignItems='center' pt={2.5}>
                    <IconButton
                        isRound={true}
                        bg='transparent'
                        aria-label='Поиск'
                        fontSize='26px'
                        icon={<SearchIcon />}
                    />
                    <Text textStyle='footerInactive'>Поиск</Text>
                </Stack>
            </GridItem>
            <GridItem minW='90px'>
                <Stack alignItems='center' pt={2.5}>
                    <IconButton
                        isRound={true}
                        bg='transparent'
                        aria-label='Поиск'
                        icon={<Image src={Writeble} boxSize={6} />}
                    />
                    <Text textStyle='footerInactive'>Записать</Text>
                </Stack>
            </GridItem>
            <GridItem minW='90px'>
                <Stack alignItems='center' pt={2.5}>
                    <Avatar src={Photo} boxSize={10} borderRadius='full' />
                    <Text textStyle='footerInactive'>Мой профиль</Text>
                </Stack>
            </GridItem>
        </Grid>
    );
};

export default Footer;
