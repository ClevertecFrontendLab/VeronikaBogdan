import { Button, Grid, GridItem } from '@chakra-ui/react';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import { ALL_CARDS } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_MAIN } from '~/constants/relevant-kitchen';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';
import { searchTextFilter } from '~/utils/searchTextFilter';

const JuiciestPage = () => {
    const { searchText } = useAppSelector(filtersSelector);

    const filteredBySearchText = searchTextFilter({ cards: ALL_CARDS, searchText });

    const cards = filteredBySearchText.length > 0 ? filteredBySearchText : ALL_CARDS;

    return (
        <ContentContainer title='Самое сочное'>
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
            <Button variant='pageSolid' size='pageActive' hideFrom='xl' mt={{ base: -4 }}>
                Загрузить еще
            </Button>
            <RelevantKitchen data={RELEVANT_KITCHEN_MAIN} />
        </ContentContainer>
    );
};

export default JuiciestPage;
