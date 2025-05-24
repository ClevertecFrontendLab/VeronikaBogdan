import { Button, Flex, Grid, GridItem, Heading, Image, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import RightArrow from '~/assets/svg/arrow-right-dark.svg';
import HorizontalCard from '~/components/horizontal-card';
import { DESC_SORT_PARAM, LIKES_SORT_PARAM } from '~/constants';
import { useGetRecipesQuery } from '~/query/services/recipies';

const Juiciest = () => {
    const navigate = useNavigate();

    const { data: recipes } = useGetRecipesQuery({
        sortBy: LIKES_SORT_PARAM,
        sortOrder: DESC_SORT_PARAM,
    });

    const handleNavigateJuiciestPage = () => navigate('/the-juiciest');

    return (
        recipes && (
            <Stack spacing={{ base: 2, md: 3, xl: 3 }} layerStyle='contentContainer'>
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
                <Grid layerStyle='horizontalCards'>
                    {recipes.data.map((card, cardIndex) => (
                        <GridItem key={card._id} data-test-id={`food-card-${cardIndex}`}>
                            <HorizontalCard
                                card={card}
                                dataTestIdButton={`card-link-${cardIndex}`}
                            />
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
        )
    );
};

export default Juiciest;
