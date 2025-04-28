import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router';

import Bookmark from '~/assets/svg/bookmark-heart.svg';
import HeartEyes from '~/assets/svg/emoji-heart-eyes.svg';
import Timer from '~/assets/svg/timer.svg';
import Badge from '~/components/badge';
import IconCountWrapper from '~/components/icon-count-wrapper';
import { ALL_CARDS } from '~/constants/grid-cards';
import { getCategory } from '~/utils/currentPaths';

const RecipePage = () => {
    const { recipeId } = useParams();

    const card = ALL_CARDS.find((card) => card.id === recipeId);

    return card ? (
        <Stack
            spacing={{ '3xl': 10 }}
            pb={{ base: '100px', xl: 0 }}
            paddingTop={{ base: '80px', xl: '135px' }}
        >
            <Card
                direction={{ base: 'column', md: 'row' }}
                variant='page'
                layerStyle='contentContainer'
            >
                <Image
                    src={card?.image}
                    borderRadius='lg'
                    h={{ base: '224px', md: '225px', xl: '411px' }}
                    w={{ base: '100%', md: '230px', xl: '353px', '3xl': '554px' }}
                    objectFit='cover'
                />
                <Stack flex={1} pl={{ base: 0, md: 5, xl: 6 }} pt={{ base: 4, md: 0 }}>
                    <CardBody px={{ base: 0 }} py={{ base: 2, xl: 0 }} pt={0}>
                        <Stack gap={{ base: 0, xl: 2 }}>
                            <Flex justify='space-between' alignItems='flex-start'>
                                <Stack
                                    spacing={2}
                                    flexWrap='wrap'
                                    direction={{ base: 'column', xl: 'row' }}
                                >
                                    {card.category.map((category) => (
                                        <Badge
                                            key={category}
                                            icon={getCategory(category)?.icon}
                                            text={getCategory(category)?.label}
                                            type='horizontal'
                                        />
                                    ))}
                                </Stack>
                                <HStack w='165px' justifyContent='flex-end'>
                                    {card?.bookmarks && (
                                        <IconCountWrapper type='favorite' count={card.bookmarks} />
                                    )}
                                    {card?.likes && (
                                        <IconCountWrapper type='like' count={card.likes} />
                                    )}
                                </HStack>
                            </Flex>
                            <Heading
                                fontSize={{ base: '2xl', xl: '5xl' }}
                                lineHeight={{ base: '133%', xl: '100%' }}
                                mt={{ base: 8 }}
                                maxW={{ xl: '430px' }}
                            >
                                {card.title}
                            </Heading>
                            <Text textStyle='text' mt={{ base: 4 }}>
                                {card.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter
                        justify='space-between'
                        flexDirection={{ base: 'column', md: 'row' }}
                        gap={3}
                        p={{ base: 0 }}
                    >
                        <Box alignContent='flex-end'>
                            <Badge icon={Timer} text={card.time} type='time' />
                        </Box>
                        <HStack
                            justify={{ base: 'flex-start', md: 'flex-end' }}
                            gap={{ base: 2, md: 4 }}
                            px={{ base: 0 }}
                            pt={{ base: 0 }}
                            pb={{ base: 0 }}
                        >
                            <Button
                                variant='listCardOutline'
                                size='recipeButton'
                                leftIcon={
                                    <Image
                                        src={HeartEyes}
                                        marginInlineEnd={2}
                                        boxSize={{ base: 3, xl: 4 }}
                                    />
                                }
                            >
                                <Text>Оценить рецепт</Text>
                            </Button>
                            <Button
                                variant='recipeButton'
                                size='recipeButton'
                                leftIcon={
                                    <Image
                                        src={Bookmark}
                                        marginInlineEnd={2}
                                        boxSize={{ base: 3, xl: 4 }}
                                    />
                                }
                            >
                                Сохранить в закладки
                            </Button>
                        </HStack>
                    </CardFooter>
                </Stack>
            </Card>
        </Stack>
    ) : null;
};

export default RecipePage;
