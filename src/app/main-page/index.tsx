import { Grid, GridItem } from '@chakra-ui/react';

import Blog from '~/app/main-page/blog';
import Juiciest from '~/app/main-page/juiciest';
import NewRecipies from '~/app/main-page/new-recipies';
import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import { ALL_CARDS } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_MAIN } from '~/constants/relevant-kitchen';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';
import { filterByAllergens } from '~/utils/allergen-filter';
import { filterByCategory } from '~/utils/category-filter';
import { searchTextFilter } from '~/utils/search-text-filter';

const MainPage = () => {
    const {
        allergens,
        searchText,
        filters: { categories },
    } = useAppSelector(filtersSelector);

    const filteredByCategory =
        categories.length > 0 ? filterByCategory({ cards: ALL_CARDS, categories }) : ALL_CARDS;

    const filteredByAllergens = filterByAllergens({ cards: filteredByCategory, allergens });

    const filteredBySearchText = searchTextFilter({ cards: filteredByAllergens, searchText });

    const cards = filteredBySearchText.length > 0 ? filteredBySearchText : filteredByAllergens;

    const clearedSearch =
        (filteredBySearchText.length === 0 || !searchText) && allergens.length === 0;

    return (
        <ContentContainer
            title='Приятного аппетита!'
            notFound={
                filteredBySearchText.length === 0 ||
                filteredByAllergens.length === 0 ||
                filteredByCategory.length === 0
            }
        >
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
                    {cards.map((card, cardIndex) => (
                        <GridItem key={card.id} data-test-id={`food-card-${cardIndex}`}>
                            <HorizontalCard card={card} />
                        </GridItem>
                    ))}
                </Grid>
            )}
            <RelevantKitchen data={RELEVANT_KITCHEN_MAIN} />
        </ContentContainer>
    );
};

export default MainPage;
