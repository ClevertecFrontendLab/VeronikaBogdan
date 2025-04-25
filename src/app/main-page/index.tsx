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
import { searchTextFilter } from '~/utils/searchTextFilter';

const MainPage = () => {
    const { searchText } = useAppSelector(filtersSelector);

    const filteredBySearchText = searchTextFilter({ cards: ALL_CARDS, searchText });

    console.log(filteredBySearchText, searchText);

    const cards = filteredBySearchText.length > 0 ? filteredBySearchText : ALL_CARDS;

    const clearedSearch = filteredBySearchText.length === 0 || !searchText;

    return (
        <ContentContainer title='Приятного аппетита!'>
            {clearedSearch ? (
                <>
                    <NewRecipies />
                    <Juiciest />
                    <Blog />
                </>
            ) : (
                <Grid layerStyle='contentContainer, horizontalCards'>
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
