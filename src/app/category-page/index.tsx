import { Button, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import ContentContainer from '~/components/content-container';
import HorizontalCard from '~/components/horizontal-card';
import RelevantKitchen from '~/components/relevant-kitchen';
import { children as subcategories } from '~/constants/categories';
import { ALL_CARDS } from '~/constants/grid-cards';
import { RELEVANT_KITCHEN_CATEGORY } from '~/constants/relevant-kitchen';

const CategoryPage = () => {
    const navigate = useNavigate();
    const { category, subcategory } = useParams();

    const defaultSubcategory = subcategories.findIndex((item) => item.path === subcategory);

    return (
        <ContentContainer
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
        >
            <Tabs
                align='center'
                mt={{ base: 1, '3xl': -3 }}
                index={defaultSubcategory}
                variant='unstyled'
            >
                <TabList
                    overflowX='hidden'
                    pl={{ base: '265px', md: 0 }}
                    pr={{ md: '133px', xl: 0 }}
                    w={{ base: '109%', md: '105.5%', xl: '100%' }}
                    justifySelf={{ base: 'center' }}
                >
                    {subcategories.map((tab, tabIndex) => (
                        <Tab
                            key={tab.label}
                            data-test-id={`tab-${subcategory}-${tabIndex}`}
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
                            <Grid
                                templateColumns={{
                                    base: '100%',
                                    md: 'repeat(2, 1fr)',
                                    xl: '100%',
                                    '3xl': 'repeat(2, 1fr)',
                                }}
                                gap={{ base: 4, md: 3, xl: 3.5, '3xl': 5 }}
                            >
                                {ALL_CARDS.map((card) => (
                                    <GridItem key={card.id}>
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
