import './horizontal-card.scss';

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Highlight,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import RecommendationWoman from '~/assets/png/recommendation1.png';
import Bookmark from '~/assets/svg/bookmark-heart.svg';
import Badge from '~/components/badge';
import { HorizontalCardProps } from '~/components/horizontal-card/types';
import IconCountWrapper from '~/components/icon-count-wrapper';
import { filtersSelector } from '~/store/filters-slice';
import { useAppSelector } from '~/store/hooks';

const HorizontalCard = ({ card }: HorizontalCardProps) => {
    const navigate = useNavigate();

    const { searchText } = useAppSelector(filtersSelector);

    return (
        <Card direction='row'>
            <Badge
                icon={card?.icon}
                text={card?.badge}
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
                src={card.image}
                borderLeftRadius='lg'
                h={{ base: '131px', xl: '244px' }}
                w={{ base: '158px', xl: '346px' }}
            />
            <Stack flex={1} px={{ base: 2, xl: 6 }}>
                <CardBody px={{ base: 0 }} py={{ base: 2, xl: 0 }} pt={{ base: 2, xl: 5 }}>
                    <Stack gap={{ base: 0, xl: 2 }}>
                        <Flex justify='space-between'>
                            <Badge
                                icon={card.icon}
                                text={card.badge}
                                type='horizontal'
                                hideBelow='xl'
                            />
                            <HStack>
                                {card.bookmarks && (
                                    <IconCountWrapper type='favorite' count={card.bookmarks} />
                                )}
                                {card.likes && <IconCountWrapper type='like' count={card.likes} />}
                            </HStack>
                        </Flex>
                        <Heading
                            size='listTitle'
                            letterSpacing='tight'
                            noOfLines={{ base: 2, '3xl': 1 }}
                            mt={{ base: 0, xl: 4 }}
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
                        variant='listCardSolid'
                        size='listCard'
                        onClick={() =>
                            navigate(`/${card.category[0]}/${card.subcategory[0]}/${card.id}`)
                        }
                    >
                        Готовить
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default HorizontalCard;
