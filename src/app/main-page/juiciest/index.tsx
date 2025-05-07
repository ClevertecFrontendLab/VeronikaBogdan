import {
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    useMediaQuery,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import RightArrow from '~/assets/svg/arrow-right-dark.svg';
import HorizontalCard from '~/components/horizontal-card';
import { useGetRecipesQuery } from '~/query/services/recipies';

const Juiciest = () => {
    const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 1399px)');
    const navigate = useNavigate();

    const { data: recipes } = useGetRecipesQuery({ sortBy: 'likes', sortOrder: 'desc' });

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
                        data-test-id={isTablet ? '' : 'juiciest-link'}
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
                    data-test-id={isTablet ? 'juiciest-link' : 'juiciest-link-mobile'}
                    onClick={handleNavigateJuiciestPage}
                >
                    Вся подборка
                </Button>
            </Stack>
        )
    );
};

export default Juiciest;
