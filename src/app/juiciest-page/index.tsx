import { Button, Grid, GridItem } from '@chakra-ui/react';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import { GRID_CARDS_JUISIEST } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_MAIN } from '~/constants/relevant-kitchen';

const JuiciestPage = () => (
    <ContentContainer title='Самое сочное'>
        <Grid
            templateColumns={{
                base: '100%',
                md: 'repeat(2, 1fr)',
                xl: '100%',
                '3xl': 'repeat(2, 1fr)',
            }}
            gap={{ base: 4, md: 3, xl: 3.5, '3xl': 5 }}
        >
            {GRID_CARDS_JUISIEST.map((card) => (
                <GridItem key={card.key}>
                    <HorizontalCard card={card} />
                </GridItem>
            ))}
        </Grid>
        <Button variant='pageSolid' size='pageActive' hideFrom='xl' mt={{ base: 4 }}>
            Загрузить еще
        </Button>
        <RelevantKitchen data={RELEVANT_KITCHEN_MAIN} />
    </ContentContainer>
);

export default JuiciestPage;
