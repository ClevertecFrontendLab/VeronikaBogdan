import { Button, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import useUpdateRecipes from '~/hooks/use-update-recipes';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipesQuery } from '~/query/services/recipies';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';
import { getCategory } from '~/utils/current-paths';

const CategoryPage = () => {
    const navigate = useNavigate();
    const { category, subcategory } = useParams();
    const { allergens, searchText, currentRecipes } = useAppSelector(filtersSelector);

    const { data } = useGetCategoriesQuery();

    const selectedCategory = getCategory(data?.categories, category);

    const subcategories = selectedCategory?.subCategories || [];

    const defaultSubcategory = subcategories?.findIndex((item) => item.category === subcategory);

    useEffect(() => {
        if (data && (!selectedCategory?.category || defaultSubcategory === -1)) {
            navigate('/not-found');
        }
    }, [navigate, data, selectedCategory?.category, defaultSubcategory]);

    const recipesParams = {
        id: searchText || allergens.length > 0 ? '' : subcategories[defaultSubcategory]?._id,
        searchString: searchText,
        allergens: allergens.length > 0 ? allergens.join(',') : null,
        subcategoriesIds: subcategories.map((subcategory) => subcategory._id).join(',') || '',
    };

    const { data: recipes, isFetching: isRecipesFetching } = useGetRecipesQuery(recipesParams, {
        skip: !data,
    });

    useUpdateRecipes(recipes);

    return (
        <ContentContainer
            title={selectedCategory?.title}
            description={selectedCategory?.description}
            successSearch={recipes ? searchText && recipes?.data?.length > 0 : ''}
            notFound={(searchText || allergens.length > 0) && recipes?.data.length === 0}
            isLoading={recipes && allergens.length === 0 && isRecipesFetching}
        >
            {data && (
                <>
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
                                    onClick={() => navigate(`/${category}/${tab.category}`)}
                                >
                                    {tab.title}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels>
                            {subcategories &&
                                recipes &&
                                subcategories.map((tab) => (
                                    <TabPanel
                                        key={tab._id}
                                        textAlign='left'
                                        p={0}
                                        pt={{ base: 6 }}
                                        display='flex'
                                        flexDirection='column'
                                    >
                                        <Grid layerStyle='horizontalCards'>
                                            {currentRecipes.map((card, cardIndex) => (
                                                <GridItem
                                                    key={card._id}
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
                                        {recipes.meta.page < recipes.meta.totalPages && (
                                            <Button
                                                variant='pageSolid'
                                                size='pageActive'
                                                mt={{ base: 4 }}
                                                data-test-id='load-more-button'
                                            >
                                                Загрузить еще
                                            </Button>
                                        )}
                                    </TabPanel>
                                ))}
                        </TabPanels>
                    </Tabs>
                    <RelevantKitchen hideTopBorderFrom='xl' />
                </>
            )}
        </ContentContainer>
    );
};

export default CategoryPage;
