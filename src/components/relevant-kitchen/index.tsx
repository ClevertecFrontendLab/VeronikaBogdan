import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';

import Badge from '~/components/badge';
import IconCountWrapper from '~/components/icon-count-wrapper';
import { IMAGE_HOST, RELEVANT_KITCHEN_LIMIT } from '~/constants';
import { SEARCH_ERROR } from '~/constants/toast-texts';
import useToast from '~/hooks/use-error-toast';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipesQuery } from '~/query/services/recipies';
import { getRootCategory } from '~/utils/current-paths';
import { getRandomInteger } from '~/utils/random-integer';

type RelevantKitchenProps = { hideTopBorderFrom?: string };

const RelevantKitchen = ({ hideTopBorderFrom = '' }: RelevantKitchenProps) => {
    const { data: categories } = useGetCategoriesQuery();

    const randomCategory = useMemo(() => {
        if (categories) {
            const index = getRandomInteger(0, categories?.all.length);
            return categories?.all[index];
        }
    }, [categories]);

    const { data: recipes, isError } = useGetRecipesQuery(
        {
            id: randomCategory?._id || '',
            limit: RELEVANT_KITCHEN_LIMIT,
        },
        { skip: !randomCategory?._id },
    );

    useToast({ isLoaded: isError, status: 'error', toastType: SEARCH_ERROR });

    return (
        <Box layerStyle='contentContainer'>
            <Grid
                gridTemplateColumns={{
                    base: '100%',
                    md: 'repeat(3, 1fr)',
                    '3xl': 'repeat(4, 1fr)',
                }}
                gap={{ base: 3, '3xl': 4 }}
                pt={{ base: 2, xl: 7, '3xl': 2 }}
                borderTop={
                    hideTopBorderFrom ? { base: '1px solid', [hideTopBorderFrom]: 0 } : '1px solid'
                }
                borderTopColor='blackAlpha.200'
            >
                <GridItem colSpan={{ md: 3, xl: 1, '3xl': 2 }}>
                    <Heading variant='blockTitle' size='blockTitle'>
                        {randomCategory?.title}
                    </Heading>
                </GridItem>
                <GridItem colSpan={{ md: 3, xl: 2 }} mb={{ base: 1, xl: 5, '3xl': 3 }}>
                    <Text
                        textStyle='blockDescription'
                        letterSpacing='0.1px'
                        lineHeight={{ '3xl': '170%' }}
                        pl={{ '3xl': 5 }}
                    >
                        {randomCategory?.description}
                    </Text>
                </GridItem>
                {recipes && (
                    <>
                        {recipes.data
                            ?.filter((_, index) => index < 2)
                            ?.map((card) => (
                                <GridItem key={card.title} minW={{ md: '232px' }}>
                                    <Card h='full'>
                                        <CardBody p={{ base: 3, '3xl': 5 }}>
                                            <Stack h='full'>
                                                <Heading
                                                    size='relevantCardTitle'
                                                    fontWeight={500}
                                                    isTruncated
                                                >
                                                    {card.title}
                                                </Heading>
                                                <Text textStyle='text' noOfLines={3}>
                                                    {card.description}
                                                </Text>
                                                <Flex
                                                    pt={{ base: 5 }}
                                                    mt={{ base: 'auto' }}
                                                    justify='space-between'
                                                >
                                                    <Stack
                                                        spacing={2}
                                                        flexWrap='wrap'
                                                        direction={{ xl: 'row', '3xl': 'column' }}
                                                    >
                                                        {card.categoriesIds?.map((category) => (
                                                            <Badge
                                                                key={category}
                                                                icon={`${IMAGE_HOST}${getRootCategory(categories?.all, category)?.icon}`}
                                                                text={
                                                                    getRootCategory(
                                                                        categories?.all,
                                                                        category,
                                                                    )?.title
                                                                }
                                                            />
                                                        ))}
                                                    </Stack>
                                                    <HStack
                                                        mr={{ xl: 2 }}
                                                        minWidth='fit-content'
                                                        align='flex-end'
                                                    >
                                                        {card.bookmarks && (
                                                            <IconCountWrapper
                                                                type='favorite'
                                                                count={card.bookmarks}
                                                            />
                                                        )}
                                                        {card.likes && (
                                                            <IconCountWrapper
                                                                type='like'
                                                                count={card.likes}
                                                            />
                                                        )}
                                                    </HStack>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            ))}
                        <GridItem colSpan={{ '3xl': 2 }} minW={{ md: '232px' }}>
                            <Stack spacing={{ base: 1.5, md: 1, '3xl': 3 }}>
                                {recipes.data
                                    ?.filter((_, index) => index > 1)
                                    ?.map((listItem) => (
                                        <Card key={listItem._id}>
                                            <CardBody
                                                px={{ base: 3, '3xl': 8 }}
                                                py={{ base: 3, '3xl': 3 }}
                                                pr={{ '3xl': 5 }}
                                            >
                                                <HStack>
                                                    <Image
                                                        src={`${IMAGE_HOST}${getRootCategory(categories?.all, listItem.categoriesIds[0])?.icon}`}
                                                        boxSize={5}
                                                    />
                                                    <Heading
                                                        size='smallCardTitle'
                                                        fontWeight={500}
                                                        isTruncated
                                                    >
                                                        {listItem.title}
                                                    </Heading>
                                                    <Button
                                                        variant='outline'
                                                        size='limeOutline'
                                                        colorScheme='lime'
                                                        ml='auto'
                                                    >
                                                        Готовить
                                                    </Button>
                                                </HStack>
                                            </CardBody>
                                        </Card>
                                    ))}
                            </Stack>
                        </GridItem>
                    </>
                )}
            </Grid>
        </Box>
    );
};

export default RelevantKitchen;
