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
import { useNavigate } from 'react-router';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from '~/assets/svg/arrow-left.svg';
import ArrowRight from '~/assets/svg/arrow-right.svg';
import Badge from '~/components/badge';
import IconCountWrapper from '~/components/icon-count-wrapper';
import { NEW_RECIPIES_COUNT } from '~/constants';
import { ALL_CARDS } from '~/constants/grid-cards';
import { getCategory, getSingleSubcategory } from '~/utils/currentPaths';

const NewRecipies = () => {
    const navigate = useNavigate();

    const sortedNewRecipiesByDate = [...ALL_CARDS].sort(
        (firstCard, secondCard) => Date.parse(secondCard.date) - Date.parse(firstCard.date),
    );

    const filteredNewRecipiesByCount = sortedNewRecipiesByDate.filter(
        (_, cardIndex) => cardIndex < NEW_RECIPIES_COUNT,
    );

    return (
        <Stack
            spacing={{ base: 3, xl: 6 }}
            position='relative'
            overflowX={{ xl: 'hidden', '3xl': 'visible' }}
        >
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
                navigation={{
                    nextEl: '.forward',
                    prevEl: '.back',
                }}
                data-test-id='carousel'
            >
                {filteredNewRecipiesByCount.map((recipe, recipeIndex) => (
                    <SwiperSlide key={recipe.id} data-test-id={`carousel-card-${recipeIndex}`}>
                        <Card
                            position='relative'
                            overflow='hidden'
                            h={{ base: '224px', xl: '402px', '3xl': '424px' }}
                            w={{ base: '158px', xl: '277px', '3xl': '322px' }}
                            minW={{ base: '158px', xl: '277px', '3xl': '322px' }}
                            onClick={() =>
                                navigate(
                                    `/${getCategory(recipe.category[0])?.path}/${getSingleSubcategory(recipe.category[0], recipe.subcategory[0])?.path}/${recipe.id}`,
                                )
                            }
                            // onClick={() => navigate(`/vegan/first-dishes/${recipe.id}`)}
                        >
                            <Stack
                                spacing={2}
                                position='absolute'
                                top={2}
                                left={2}
                                // w={{ base: '158px', xl: '346px' }}
                            >
                                {recipe.category.map((category) => (
                                    <Badge
                                        key={category}
                                        icon={getCategory(category)?.icon}
                                        text={getCategory(category)?.label}
                                        type='vertical'
                                        hideFrom='xl'
                                    />
                                ))}
                            </Stack>
                            <Image
                                src={recipe.image}
                                borderTopRadius='lg'
                                h={{ base: '128px', xl: '230px' }}
                            />
                            <CardBody p={{ base: 2, xl: 3, '3xl': 4 }} px={{ '3xl': 6 }} h='100%'>
                                <Stack h='100%'>
                                    <Heading
                                        size='smallCardTitle'
                                        letterSpacing='tight'
                                        noOfLines={{ base: 2, xl: 1 }}
                                    >
                                        {recipe.title}
                                    </Heading>
                                    <Text textStyle='text' noOfLines={3} hideBelow='xl'>
                                        {recipe.description}
                                    </Text>
                                    <Flex mt='auto' mb={0} justify='space-between'>
                                        <Stack spacing={2}>
                                            {recipe.category.map((category) => (
                                                <Badge
                                                    key={category}
                                                    icon={getCategory(category)?.icon}
                                                    text={getCategory(category)?.label}
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
                                            <IconCountWrapper type='like' count={recipe.likes} />
                                        </HStack>
                                    </Flex>
                                </Stack>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Stack>
    );
};

export default NewRecipies;
