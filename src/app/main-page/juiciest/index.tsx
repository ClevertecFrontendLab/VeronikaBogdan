import { Button, Flex, Grid, GridItem, Heading, Image, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import RightArrow from '~/assets/svg/arrow-right-dark.svg';
import HorizontalCard from '~/components/horizontal-card';
import JUICIEST_MAIN_PAGE from '~/constants/grid-cards';

const Juiciest = () => {
    const navigate = useNavigate();

    const handleNavigateJuiciestPage = () => navigate('/the-juiciest');

    return (
        <Stack spacing={{ base: 2, md: 3, xl: 3 }}>
            <Flex justify='space-between'>
                <Heading variant='blockTitle' size='blockTitle'>
                    Самое сочное
                </Heading>
                <Button
                    variant='pageSolid'
                    size='pageActive'
                    hideBelow='xl'
                    rightIcon={<Image src={RightArrow} />}
                    data-test-id='juiciest-link'
                    onClick={handleNavigateJuiciestPage}
                >
                    Вся подборка
                </Button>
            </Flex>
            <Grid
                templateColumns={{
                    base: '100%',
                    md: 'repeat(2, 1fr)',
                    xl: '100%',
                    '3xl': 'repeat(2, 1fr)',
                }}
                gap={{ base: 2.5, md: 3, xl: 3.5, '3xl': 5 }}
            >
                {JUICIEST_MAIN_PAGE.map((card) => (
                    <GridItem key={card.key}>
                        <HorizontalCard card={card} />
                    </GridItem>
                ))}
            </Grid>
            <Button
                variant='pageSolid'
                size='pageActive'
                hideFrom='xl'
                rightIcon={<Image src={RightArrow} />}
                data-test-id='juiciest-link-mobile'
                onClick={handleNavigateJuiciestPage}
            >
                Вся подборка
            </Button>
        </Stack>
    );
};

export default Juiciest;
