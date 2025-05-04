import { Button, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import { ALL_CARDS } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_CATEGORY } from '~/constants/relevant-kitchen';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';
import { filterByAllergens } from '~/utils/allergen-filter';
import { searchTextFilter } from '~/utils/search-text-filter';

const CategoryPage = () => {
    const navigate = useNavigate();
    const { category, subcategory } = useParams();
    const { allergens, searchText } = useAppSelector(filtersSelector);

    const { data } = useGetCategoriesQuery();

    const selectedCategory = data?.categories.find((item) => item.category === category);

    const subcategories = selectedCategory?.subCategories || [];

    const defaultSubcategory = subcategories?.findIndex((item) => item.category === subcategory);

    const filteredByCategory = ALL_CARDS.filter((card) => card.category.includes(category || ''));
    const filteredBySubcategory = filteredByCategory.filter((card) =>
        card.subcategory.includes(subcategory || ''),
    );

    const filteredByAllergens = filterByAllergens({ cards: filteredBySubcategory, allergens });

    const filteredBySearchText = searchTextFilter({
        cards: filteredByAllergens,
        searchText,
    });

    const cards = filteredBySearchText.length > 0 ? filteredBySearchText : filteredByAllergens;

    return (
        <ContentContainer
            title={selectedCategory?.title}
            description={selectedCategory?.description}
            notFound={filteredBySearchText.length === 0 || filteredByAllergens.length === 0}
        >
            <Tabs
                layerStyle='contentContainer'
                align='center'
                mt={{ base: 1, '3xl': -3 }}
                index={defaultSubcategory}
                variant='unstyled'
            >
                <TabList overflowX='hidden' w='100%' justifySelf={{ base: 'center' }}>
                    {subcategories.map((tab, tabIndex) => (
                        <Tab
                            key={tab._id}
                            data-test-id={`tab-${tab.category}-${tabIndex}`}
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
                            onClick={() => navigate(`/${category}/${tab.category}`)}
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {subcategories.map((tab) => (
                        <TabPanel
                            key={tab._id}
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
                                            subcategory === tab.category
                                                ? `food-card-${cardIndex}`
                                                : ''
                                        }
                                    >
                                        <HorizontalCard card={card} />
                                    </GridItem>
                                ))}
                            </Grid>
                            <Button variant='pageSolid' size='pageActive' mt={{ base: 4 }}>
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
