import 'swiper/swiper-bundle.css';
import './new-recipies.scss';

import {
    Card,
    CardBody,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from '~/assets/svg/arrow-left.svg';
import ArrowRight from '~/assets/svg/arrow-right.svg';
import Badge from '~/components/badge';
import IconCountWrapper from '~/components/icon-count-wrapper';
import Loader from '~/components/loader';
import {
    CREATED_AT_SORT_PARAM,
    DESC_SORT_PARAM,
    IMAGE_HOST,
    NEW_RECIPIES_COUNT,
} from '~/constants';
import { SERVER_ERROR } from '~/constants/toast-texts';
import useToast from '~/hooks/use-error-toast';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipesQuery } from '~/query/services/recipies';
import { getCategoryById, getRootCategory } from '~/utils/current-paths';

const NewRecipies = () => {
    const navigate = useNavigate();

    const {
        data,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError,
    } = useGetCategoriesQuery();
    const { data: recipes } = useGetRecipesQuery({
        limit: NEW_RECIPIES_COUNT,
        sortBy: CREATED_AT_SORT_PARAM,
        sortOrder: DESC_SORT_PARAM,
    });

    const sortedNewRecipiesByDate = useMemo(() => {
        if (recipes) {
            return recipes?.data.toSorted(
                (firstCard, secondCard) =>
                    Date.parse(secondCard.createdAt) - Date.parse(firstCard.createdAt),
            );
        }
    }, [recipes]);

    useToast({ isLoaded: isCategoriesError, status: 'error', toastType: SERVER_ERROR });

    return (
        recipes && (
            <Stack
                spacing={{ base: 3, xl: 6 }}
                position='relative'
                overflowX={{ xl: 'hidden', '3xl': 'visible' }}
                pl={{ base: 4, md: 5, xl: 0 }}
            >
                {isCategoriesLoading && <Loader />}
                <Heading variant='blockTitle' size='blockTitle'>
                    Новые рецепты
                </Heading>
                <Flex
                    hideBelow='xl'
                    w={{ xl: '101%', '3xl': '100.5%' }}
                    justify='space-between'
                    position='absolute'
                    top={{ xl: '45.5%', '3xl': '46%' }}
                    zIndex={2}
                >
                    <IconButton
                        colorScheme='blackAlpha'
                        aria-label='Стрелка влево'
                        bg='black'
                        ml={{ xl: -2 }}
                        boxSize={{ xl: 10, '3xl': 12 }}
                        icon={<Image src={ArrowLeft} h={{ xl: 4, '3xl': 6 }} />}
                        className='back'
                        data-test-id='carousel-back'
                    />
                    <IconButton
                        colorScheme='blackAlpha'
                        aria-label='Стрелка вправо'
                        bg='black'
                        boxSize={{ xl: 10, '3xl': 12 }}
                        icon={<Image src={ArrowRight} h={{ xl: 4, '3xl': 6 }} />}
                        className='forward'
                        data-test-id='carousel-forward'
                    />
                </Flex>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView='auto'
                    loop={true}
                    speed={0}
                    navigation={{
                        nextEl: '.forward',
                        prevEl: '.back',
                    }}
                    data-test-id='carousel'
                >
                    {sortedNewRecipiesByDate?.map((recipe, recipeIndex) => (
                        <SwiperSlide key={recipe._id} data-test-id={`carousel-card-${recipeIndex}`}>
                            <Card
                                position='relative'
                                overflow='hidden'
                                h={{ base: '224px', xl: '402px', '3xl': '424px' }}
                                w={{ base: '158px', xl: '277px', '3xl': '322px' }}
                                minW={{ base: '158px', xl: '277px', '3xl': '322px' }}
                                onClick={() =>
                                    navigate(
                                        `/${getRootCategory(data?.all, recipe.categoriesIds[0])?.category}/${getCategoryById(data?.all, recipe.categoriesIds[0])?.category}/${recipe._id}`,
                                    )
                                }
                            >
                                <Stack
                                    spacing={2}
                                    position='absolute'
                                    top={2}
                                    left={2}
                                    w={{ base: '158px', xl: '277px', '3xl': '322px' }}
                                >
                                    {recipe.categoriesIds.map((category) => (
                                        <Badge
                                            key={category}
                                            icon={`${IMAGE_HOST}/${getRootCategory(data?.all, category)?.icon}`}
                                            text={getCategoryById(data?.all, category)?.title}
                                            type='vertical'
                                            hideFrom='xl'
                                        />
                                    ))}
                                </Stack>
                                <Image
                                    src={`${IMAGE_HOST}/${recipe.image}`}
                                    borderTopRadius='lg'
                                    h={{ base: '128px', xl: '230px' }}
                                    alt={recipe.title}
                                />
                                <CardBody
                                    p={{ base: 2, xl: 3, '3xl': 4 }}
                                    px={{ '3xl': 6 }}
                                    h='100%'
                                >
                                    <Stack h='100%'>
                                        <Heading
                                            size='smallCardTitle'
                                            letterSpacing='tight'
                                            noOfLines={{ base: 2, xl: 1 }}
                                            fontWeight={500}
                                        >
                                            {recipe.title}
                                        </Heading>
                                        <Text textStyle='text' noOfLines={3} hideBelow='xl'>
                                            {recipe.description}
                                        </Text>
                                        <Flex
                                            mt='auto'
                                            mb={0}
                                            justify='space-between'
                                            flexDirection={{ base: 'row-reverse', xl: 'row' }}
                                            alignItems='flex-end'
                                        >
                                            <Stack spacing={2}>
                                                {recipe.categoriesIds.map((category) => (
                                                    <Badge
                                                        key={category}
                                                        icon={`${IMAGE_HOST}${getRootCategory(data?.all, category)?.icon}`}
                                                        text={
                                                            getCategoryById(data?.all, category)
                                                                ?.title
                                                        }
                                                        type='vertical'
                                                        hideBelow='xl'
                                                    />
                                                ))}
                                            </Stack>
                                            <HStack>
                                                <IconCountWrapper
                                                    type='favorite'
                                                    count={recipe.bookmarks}
                                                />
                                                <IconCountWrapper
                                                    type='like'
                                                    count={recipe.likes}
                                                />
                                            </HStack>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Stack>
        )
    );
};

export default NewRecipies;
