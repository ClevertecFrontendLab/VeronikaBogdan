import './main-page.scss';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import Recipe from '~/assets/png/new-recipies/recipe1.png';
import RecommendationWoman from '~/assets/png/recommendation1.png';
import Bookmark from '~/assets/svg/bookmark-heart.svg';
import Bakery from '~/assets/svg/categories/bakery.svg';
import Badge from '~/components/badge';
import ContentContainer from '~/components/content-container';
import IconCountWrapper from '~/components/icon-count-wrapper';

import NewRecipies from './new-recipies';

const MainPage = () => (
    <ContentContainer title='Приятного аппетита!'>
        <NewRecipies />
        <Stack spacing={{ base: 2, md: 3, xl: 3 }}>
            <Flex justify='space-between'>
                <Heading variant='blockTitle' size='blockTitle'>
                    Самое сочное
                </Heading>
                <Button
                    variant='pageSolid'
                    size='pageActive'
                    rightIcon={<ArrowForwardIcon />}
                    hideBelow='xl'
                >
                    Вся подборка
                </Button>
            </Flex>
            <Grid
                templateColumns={{
                    base: '100%',
                    md: 'repeat(2, 1fr)',
                    xl: '100%',
                    '3xl': 'repeat(2, 1fr)',
                }}
                gap={{ base: 2.5, md: 3, xl: 3.5, '3xl': 5 }}
            >
                {[1, 2, 3, 4].map((card) => (
                    <GridItem key={card}>
                        <Card direction='row'>
                            <Badge
                                icon={Bakery}
                                text='Вторые блюда'
                                type='horizontal'
                                hideFrom='xl'
                                isTopPositioned
                            />
                            <Badge
                                icon={RecommendationWoman}
                                text='Елена Высоцкая рекомендует'
                                type='vertical'
                                hideBelow='xl'
                                isBottomPositioned
                            />
                            <Image
                                src={Recipe}
                                borderLeftRadius='lg'
                                h={{ base: '128px', xl: '244px' }}
                                w={{ base: '158px', xl: '346px' }}
                            />
                            <Stack flex={1} px={{ base: 2, xl: 6 }}>
                                <CardBody
                                    px={{ base: 0 }}
                                    py={{ base: 2, xl: 0 }}
                                    pt={{ base: 2, xl: 5 }}
                                >
                                    <Stack gap={{ base: 0, xl: 2 }}>
                                        <Flex justify='space-between'>
                                            <Badge
                                                icon={Bakery}
                                                text='Вторые блюда'
                                                type='horizontal'
                                                hideBelow='xl'
                                            />
                                            <HStack>
                                                <IconCountWrapper type='favorite' count={85} />
                                                <IconCountWrapper type='like' count={152} />
                                            </HStack>
                                        </Flex>
                                        <Heading
                                            size='listTitle'
                                            letterSpacing='tight'
                                            noOfLines={{ base: 2, '3xl': 1 }}
                                            mt={{ base: 0, xl: 4 }}
                                        >
                                            Кнели со спагетти
                                        </Heading>
                                        <Text textStyle='text' noOfLines={3} hideBelow='xl'>
                                            Как раз после праздников, когда мясные продукты еще
                                            остались, но никто их уже не хочет, время варить
                                            солянку.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter
                                    justify='flex-end'
                                    gap={2}
                                    px={{ base: 0 }}
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
                                    <Button variant='listCardSolid' size='listCard'>
                                        Готовить
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
            <Button
                variant='pageSolid'
                size='pageActive'
                hideFrom='xl'
                rightIcon={<ArrowForwardIcon />}
            >
                Вся подборка
            </Button>
        </Stack>
        <Stack>
            <div>1</div>
            <div>2</div>
        </Stack>
    </ContentContainer>
);

export default MainPage;
