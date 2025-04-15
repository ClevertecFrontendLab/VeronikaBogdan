import { Button, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import { children as subcategories } from '~/constants/categories';
import { GRID_CARDS_CATEGORY } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_CATEGORY } from '~/constants/relevant-kitchen';

const CategoryPage = () => {
    const { subcategory } = useParams();
    const [tabIndex, setTabIndex] = useState(0);

    const defaultIndex = useMemo(
        () => subcategories.findIndex((item) => item.path === subcategory),
        [subcategory],
    );

    return (
        <ContentContainer
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
        >
            <Tabs
                align='center'
                mt={{ base: 1, '3xl': -3 }}
                index={defaultIndex}
                defaultIndex={tabIndex}
                onChange={setTabIndex}
                variant='unstyled'
            >
                <TabList
                    overflowX='hidden'
                    pl={{ base: '265px', md: 0 }}
                    pr={{ md: '133px', xl: 0 }}
                    w={{ base: '109%', md: '105.5%', xl: '100%' }}
                    justifySelf={{ base: 'center' }}
                >
                    {subcategories.map((tab) => (
                        <Tab
                            key={tab.label}
                            fontSize={{ base: 'sm', xl: 'md' }}
                            lineHeight={{ base: '143%', xl: '150%' }}
                            whiteSpace='nowrap'
                            color='lime.800'
                            border={0}
                            borderBottom='1px solid'
                            borderBottomColor='blackAlpha.200'
                            borderRadius={0}
                            _selected={{
                                color: 'lime.600',
                                borderBottom: '2px solid',
                                borderBottomColor: 'lime.600',
                            }}
                            p={{ base: '4px 16px' }}
                        >
                            {tab.label}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {subcategories.map((tab) => (
                        <TabPanel
                            key={tab.label}
                            textAlign='left'
                            p={0}
                            pt={{ base: 6 }}
                            display='flex'
                            flexDirection='column'
                        >
                            <Grid
                                templateColumns={{
                                    base: '100%',
                                    md: 'repeat(2, 1fr)',
                                    xl: '100%',
                                    '3xl': 'repeat(2, 1fr)',
                                }}
                                gap={{ base: 4, md: 3, xl: 3.5, '3xl': 5 }}
                            >
                                {GRID_CARDS_CATEGORY.map((card) => (
                                    <GridItem key={card.key}>
                                        <HorizontalCard card={card} />
                                    </GridItem>
                                ))}
                            </Grid>
                            <Button
                                variant='pageSolid'
                                size='pageActive'
                                hideFrom='xl'
                                mt={{ base: 4 }}
                            >
                                Загрузить еще
                            </Button>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
            <RelevantKitchen data={RELEVANT_KITCHEN_CATEGORY} hideTopBorderFrom='xl' />
        </ContentContainer>
    );
};

export default CategoryPage;
