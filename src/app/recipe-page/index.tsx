import {
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
            paddingTop={{ base: '62px', xl: '135px' }}
        >
            <Card direction='row' variant='page'>
                <Stack
                    spacing={2}
                    position='absolute'
                    top={2}
                    left={2}
                    w={{ base: '158px', xl: '346px' }}
                >
                    {card.category.map((category) => (
                        <Badge
                            key={category}
                            icon={getCategory(category)?.icon}
                            text={getCategory(category)?.label}
                            type='horizontal'
                            hideFrom='xl'
                        />
                    ))}
                </Stack>
                <Image
                    src={card?.image}
                    borderLeftRadius='lg'
                    h={{ base: '131px', xl: '244px' }}
                    w={{ base: '158px', xl: '346px' }}
                />
                <Stack flex={1} px={{ base: 2, xl: 6 }}>
                    <CardBody px={{ base: 0 }} py={{ base: 2, xl: 0 }} pt={{ base: 2, xl: 5 }}>
                        <Stack gap={{ base: 0, xl: 2 }}>
                            <Flex justify='space-between'>
                                <Stack
                                    spacing={2}
                                    //  w={{ base: '158px', xl: '346px' }}
                                >
                                    {card.category.map((category) => (
                                        <Badge
                                            key={category}
                                            icon={getCategory(category)?.icon}
                                            text={getCategory(category)?.label}
                                            type='horizontal'
                                            hideBelow='xl'
                                        />
                                    ))}
                                </Stack>
                                <HStack>
                                    {card?.bookmarks && (
                                        <IconCountWrapper type='favorite' count={card.bookmarks} />
                                    )}
                                    {card?.likes && (
                                        <IconCountWrapper type='like' count={card.likes} />
                                    )}
                                </HStack>
                            </Flex>
                            <Heading
                                size='listTitle'
                                letterSpacing='tight'
                                noOfLines={{ base: 2, '3xl': 1 }}
                                mt={{ base: 0, xl: 4 }}
                            >
                                {card.title}
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
                            variant='listCardSolid'
                            size='listCard'
                            // onClick={() =>
                            //     navigate(`/${card.category[0]}/${card.subcategory[0]}/${card.id}`)
                            // }
                        >
                            Готовить
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </Stack>
    ) : null;
};

export default RecipePage;
