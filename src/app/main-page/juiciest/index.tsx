import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Grid, GridItem, Heading, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import HorizontalCard from '~/components/horizontal-card';
import JUICIEST_MAIN_PAGE from '~/constants/main-page-juicies';

const Juiciest = () => {
    const navigate = useNavigate();

    const handleNavigateJuiciestPage = () => navigate('/juiciest');

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
                    rightIcon={<ArrowForwardIcon />}
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
                rightIcon={<ArrowForwardIcon />}
                data-test-id='juiciest-link-mobile'
                onClick={handleNavigateJuiciestPage}
            >
                Вся подборка
            </Button>
        </Stack>
    );
};

export default Juiciest;
