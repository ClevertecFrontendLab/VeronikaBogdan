import { Button, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import Loader from '~/components/loader';
import RelevantKitchen from '~/components/relevant-kitchen';
import { ALL_CARDS } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_MAIN } from '~/constants/relevant-kitchen';
import { useGetRecipesQuery } from '~/query/services/recipies';
import { Recipe } from '~/query/types/recipies';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';
import { filterByAllergens } from '~/utils/allergen-filter';
import { searchTextFilter } from '~/utils/search-text-filter';

const JuiciestPage = () => {
    const { allergens, searchText } = useAppSelector(filtersSelector);
    const [page, setPage] = useState(1);
    const [juiciestRecipes, setJuiciestRecipes] = useState<Recipe[]>([]);

    const {
        data: recipes,
        isLoading,
        isFetching,
    } = useGetRecipesQuery({
        page,
        sortBy: 'likes',
        limit: 8,
        sortOrder: 'desc',
    });

    const filteredByAllergens = filterByAllergens({ cards: ALL_CARDS, allergens });

    const filteredBySearchText = searchTextFilter({ cards: filteredByAllergens, searchText });

    // const cards = filteredBySearchText.length > 0 ? filteredBySearchText : filteredByAllergens;

    useEffect(() => {
        if (recipes) {
            setJuiciestRecipes((previousRecipes) => [...previousRecipes, ...recipes.data]);
        }
    }, [recipes]);

    return (
        <ContentContainer
            title='Самое сочное'
            notFound={filteredBySearchText.length === 0 || filteredByAllergens.length === 0}
        >
            {isLoading && <Loader />}
            {recipes && (
                <>
                    <Grid
                        layerStyle='contentContainer'
                        templateColumns={{
                            base: '100%',
                            md: 'repeat(2, 1fr)',
                            xl: '100%',
                            '3xl': 'repeat(2, 1fr)',
                        }}
                        gap={{ base: 4, md: 3, xl: 3.5, '3xl': 5 }}
                    >
                        {juiciestRecipes.map((card, cardIndex) => (
                            <GridItem key={card._id} data-test-id={`food-card-${cardIndex}`}>
                                <HorizontalCard card={card} />
                            </GridItem>
                        ))}
                    </Grid>
                    {page < recipes.meta.totalPages && (
                        <Button
                            variant='pageSolid'
                            size='pageActive'
                            mt={{ base: -4 }}
                            onClick={() => setPage(page + 1)}
                            data-test-id='load-more-button'
                        >
                            {isFetching ? 'Загрузка' : 'Загрузить еще'}
                        </Button>
                    )}
                </>
            )}
            <RelevantKitchen data={RELEVANT_KITCHEN_MAIN} />
        </ContentContainer>
    );
};

export default JuiciestPage;
