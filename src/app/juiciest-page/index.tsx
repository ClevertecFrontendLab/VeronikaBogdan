import { Button, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import Loader from '~/components/loader';
import RelevantKitchen from '~/components/relevant-kitchen';
import { DEFAULT_RECIPE_LIMIT, DESC_SORT_PARAM, FIRST_PAGE, LIKES_SORT_PARAM } from '~/constants';
import { useGetRecipesQuery } from '~/query/services/recipies';
import { Recipe } from '~/query/types/recipies';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';

const JuiciestPage = () => {
    const { allergens, searchText } = useAppSelector(filtersSelector);
    const [page, setPage] = useState(FIRST_PAGE);
    const [juiciestRecipes, setJuiciestRecipes] = useState<Recipe[]>([]);

    const {
        data: recipes,
        isLoading: isJuiciestRecipesLoading,
        isFetching,
    } = useGetRecipesQuery({
        page,
        sortBy: LIKES_SORT_PARAM,
        limit: DEFAULT_RECIPE_LIMIT,
        sortOrder: DESC_SORT_PARAM,
    });

    useEffect(() => {
        if (recipes) {
            setJuiciestRecipes((previousRecipes) => [...previousRecipes, ...recipes.data]);
        }
    }, [recipes]);

    return (
        <ContentContainer
            title='Самое сочное'
            successSearch={recipes ? searchText && recipes?.data?.length > 0 : ''}
            notFound={(searchText || allergens.length > 0) && recipes?.data.length === 0}
        >
            {isJuiciestRecipesLoading && <Loader />}
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
                            onClick={() => setPage(page + FIRST_PAGE)}
                            data-test-id='load-more-button'
                            isDisabled={isFetching}
                            isLoading={isFetching}
                            loadingText='Загрузка'
                            spinnerPlacement='start'
                        >
                            Загрузить ещё
                        </Button>
                    )}
                </>
            )}
            <RelevantKitchen />
        </ContentContainer>
    );
};

export default JuiciestPage;
