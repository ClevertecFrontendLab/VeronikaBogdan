import './horizontal-card.scss';

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Highlight,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

// import RecommendationWoman from '~/assets/png/recommendation1.png';
import Bookmark from '~/assets/svg/bookmark-heart.svg';
import Badge from '~/components/badge';
import IconCountWrapper from '~/components/icon-count-wrapper';
import { IMAGE_HOST } from '~/constants';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { Recipe } from '~/query/types/recipies';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';
import { getCategoryById, getRootCategory } from '~/utils/current-paths';

type HorizontalCardProps = { card: Recipe; dataTestIdButton?: string };

const HorizontalCard = ({ card, dataTestIdButton }: HorizontalCardProps) => {
    const navigate = useNavigate();

    const { searchText } = useAppSelector(filtersSelector);

    const { data } = useGetCategoriesQuery();

    return (
        <Card direction='row' h='full'>
            <Stack spacing={2} position='absolute' top={2} left={2}>
                {card.categoriesIds.map((category) => (
                    <Badge
                        key={category}
                        icon={`${IMAGE_HOST}${getRootCategory(data?.all, category)?.icon}`}
                        text={getCategoryById(data?.all, category)?.title}
                        type='horizontal'
                        hideFrom='xl'
                    />
                ))}
            </Stack>
            {/* <Badge
                icon={RecommendationWoman}
                text='Елена Высоцкая рекомендует'
                type='vertical'
                hideBelow='xl'
                isBottomPositioned
            /> */}
            <Image
                src={`${IMAGE_HOST}${card.image}`}
                borderLeftRadius='lg'
                w={{ base: '158px', xl: '346px' }}
            />
            <Stack flex={1} px={{ base: 2, xl: 6 }}>
                <CardBody px={{ base: 0 }} py={{ base: 2, xl: 0 }} pt={{ base: 2, xl: 5 }}>
                    <Stack gap={{ base: 0, xl: 2 }}>
                        <HStack
                            justify='space-between'
                            alignItems='flex-start'
                            flexDir={{ base: 'row-reverse', xl: 'row' }}
                        >
                            <Stack
                                spacing={2}
                                flexWrap='wrap'
                                direction={{ xl: 'row', '3xl': 'column' }}
                            >
                                {card.categoriesIds.map((category) => (
                                    <Badge
                                        key={category}
                                        icon={`${IMAGE_HOST}${getRootCategory(data?.all, category)?.icon}`}
                                        text={getCategoryById(data?.all, category)?.title}
                                        type='horizontal'
                                        hideBelow='xl'
                                    />
                                ))}
                            </Stack>
                            <HStack
                                w='130px'
                                justifyContent={{ base: 'flex-start', xl: 'flex-end' }}
                            >
                                {card.bookmarks && (
                                    <IconCountWrapper type='favorite' count={card.bookmarks} />
                                )}
                                {card.likes && <IconCountWrapper type='like' count={card.likes} />}
                            </HStack>
                        </HStack>
                        <Heading
                            size='listTitle'
                            letterSpacing='tight'
                            noOfLines={{ base: 2, '3xl': 1 }}
                            mt={{ base: 0, xl: 4 }}
                            fontWeight={500}
                        >
                            <Highlight query={searchText} styles={{ color: 'lime.600' }}>
                                {card.title}
                            </Highlight>
                        </Heading>
                        <Text textStyle='text' noOfLines={3} hideBelow='xl'>
                            {card.description}
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter
                    justify='flex-end'
                    gap={2}
                    px={{ base: 0 }}
                    pt={{ base: 0 }}
                    pb={{ base: 1, xl: 5 }}
                >
                    <Button
                        variant='listCardOutline'
                        size='listCard'
                        leftIcon={<Image src={Bookmark} boxSize={{ xl: 3 }} />}
                        px={{ base: 1, xl: 3 }}
                    >
                        <Text hideBelow='xl'>Сохранить</Text>
                    </Button>
                    <Button
                        data-test-id={dataTestIdButton}
                        variant='listCardSolid'
                        size='listCard'
                        onClick={() =>
                            navigate(
                                `/${getRootCategory(data?.all, card.categoriesIds[0])?.category}/${getCategoryById(data?.all, card.categoriesIds[0])?.category}/${card._id}`,
                                // `/${getCategoryById(data?.all, recipe.categoriesIds[0])?.category}/${getSingleSubcategory(data?.all, recipe.categoriesIds[0], recipe.categoriesIds[0])?.category}/${recipe.id}`,
                            )
                        }
                        // onClick={() =>
                        //     navigate(`/${card.category[0]}/${card.subcategory[0]}/${card.id}`)
                        // }
                    >
                        Готовить
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default HorizontalCard;
