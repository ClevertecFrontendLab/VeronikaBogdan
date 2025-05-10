import { Grid, GridItem } from '@chakra-ui/react';

import Blog from '~/app/main-page/blog';
import Juiciest from '~/app/main-page/juiciest';
import NewRecipies from '~/app/main-page/new-recipies';
import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import Loader from '~/components/loader';
import RelevantKitchen from '~/components/relevant-kitchen';
import useUpdateRecipes from '~/hooks/use-update-recipes';
import { useGetRecipesQuery } from '~/query/services/recipies';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';

const MainPage = () => {
    const { currentRecipes, allergens, searchText } = useAppSelector(filtersSelector);

    const recipeSearchParams = {
        searchString: searchText,
        allergens: allergens.length > 0 ? allergens.join(',') : null,
    };

    const {
        data: recipes,
        isLoading: isRecipesLoading,
        isFetching: isRecipesFetching,
    } = useGetRecipesQuery(recipeSearchParams);

    const clearedSearch = (currentRecipes.length === 0 || !searchText) && allergens.length === 0;

    useUpdateRecipes(recipes);

    return (
        <ContentContainer
            title='Приятного аппетита!'
            successSearch={recipes ? searchText && recipes?.data?.length > 0 : ''}
            notFound={(searchText || allergens.length > 0) && recipes?.data.length === 0}
            isLoading={recipes && allergens.length === 0 && isRecipesFetching}
            searchParams={recipeSearchParams}
        >
            {isRecipesLoading && <Loader />}
            {recipes && (
                <>
                    {clearedSearch ? (
                        <>
                            <NewRecipies />
                            <Juiciest />
                            <Blog />
                        </>
                    ) : (
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
                            {currentRecipes.map((card, cardIndex) => (
                                <GridItem key={card._id} data-test-id={`food-card-${cardIndex}`}>
                                    <HorizontalCard card={card} />
                                </GridItem>
                            ))}
                        </Grid>
                    )}
                    <RelevantKitchen />
                </>
            )}
        </ContentContainer>
    );
};

export default MainPage;
