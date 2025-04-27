import { Button, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import CATEGORIES from '~/constants/categories';
import { ALL_CARDS } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_CATEGORY } from '~/constants/relevant-kitchen';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';
import { searchTextFilter } from '~/utils/searchTextFilter';

const CategoryPage = () => {
    const navigate = useNavigate();
    const { category, subcategory } = useParams();
    const { searchText } = useAppSelector(filtersSelector);

    const subcategories = CATEGORIES.find((item) => item.path === category)?.children || [];

    const defaultSubcategory = subcategories?.findIndex((item) => item.path === subcategory);

    const filteredByCategory = ALL_CARDS.filter((card) => card.category.includes(category || ''));
    const filteredBySubcategory = filteredByCategory.filter((card) =>
        card.subcategory.includes(subcategory || ''),
    );

    const filteredBySearchText = searchTextFilter({ cards: filteredBySubcategory, searchText });

    // console.log(filteredBySubcategory, filteredBySearchText);

    const cards = filteredBySearchText.length > 0 ? filteredBySearchText : filteredBySubcategory;

    return (
        <ContentContainer
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
        >
            <Tabs
                layerStyle='contentContainer'
                align='center'
                mt={{ base: 1, '3xl': -3 }}
                index={defaultSubcategory}
                variant='unstyled'
            >
                <TabList
                    overflowX='hidden'
                    // pl={{ base: '265px', md: 0 }}
                    // pr={{ md: '130px', xl: 0 }}
                    w='100%'
                    justifySelf={{ base: 'center' }}
                >
                    {subcategories.map((tab, tabIndex) => (
                        <Tab
                            key={tab.label}
                            data-test-id={`tab-${tab.path}-${tabIndex}`}
                            fontSize={{ base: 'sm', xl: 'md' }}
                            lineHeight={{ base: '143%', xl: '150%' }}
                            whiteSpace='nowrap'
                            color='lime.800'
                            border={0}
                            outline={0}
                            borderBottom='1px solid'
                            borderBottomColor='blackAlpha.200'
                            borderRadius={0}
                            _hover={{ borderBottomColor: 'lime.600' }}
                            _selected={{
                                outline: 0,
                                color: 'lime.600',
                                borderBottom: '2px solid',
                                borderBottomColor: 'lime.600',
                            }}
                            _focus={{ outline: 0 }}
                            p={{ base: '4px 16px' }}
                            onClick={() => navigate(`/${category}/${tab.path}`)}
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
                            <Grid layerStyle='horizontalCards'>
                                {cards.map((card, cardIndex) => (
                                    <GridItem
                                        key={card.id}
                                        data-test-id={
                                            subcategory === tab.path ? `food-card-${cardIndex}` : ''
                                        }
                                    >
                                        <HorizontalCard card={card} />
                                    </GridItem>
                                ))}
                            </Grid>

                            <Button
                                variant='pageSolid'
                                size='pageActive'
                                // hideFrom='xl'
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
