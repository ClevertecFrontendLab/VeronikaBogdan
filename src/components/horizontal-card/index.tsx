import './horizontal-card.scss';

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

import Bookmark from '~/assets/svg/bookmark-heart.svg';
import Bakery from '~/assets/svg/categories/bakery.svg';
import Badge from '~/components/badge';
import IconCountWrapper from '~/components/icon-count-wrapper';

type HorizontalCardProps = {
    card: {
        image: string;
        title: string;
        description: string;
        badge: string;
        favorite: number;
        like: number;
        recommend: { user: string; photo: string } | null;
    };
};

const HorizontalCard = ({ card }: HorizontalCardProps) => (
    <Card direction='row'>
        <Badge icon={Bakery} text='Вторые блюда' type='horizontal' hideFrom='xl' isTopPositioned />
        {card.recommend && (
            <Badge
                icon={card.recommend.photo}
                text={`${card?.recommend?.user} рекомендует`}
                type='vertical'
                hideBelow='xl'
                isBottomPositioned
            />
        )}
        <Image
            src={card.image}
            borderLeftRadius='lg'
            h={{ base: '128px', xl: '244px' }}
            w={{ base: '158px', xl: '346px' }}
        />
        <Stack flex={1} px={{ base: 2, xl: 6 }}>
            <CardBody px={{ base: 0 }} py={{ base: 2, xl: 0 }} pt={{ base: 2, xl: 5 }}>
                <Stack gap={{ base: 0, xl: 2 }}>
                    <Flex justify='space-between'>
                        <Badge icon={Bakery} text={card.badge} type='horizontal' hideBelow='xl' />
                        <HStack>
                            {card.favorite && (
                                <IconCountWrapper type='favorite' count={card.favorite} />
                            )}
                            {card.like && <IconCountWrapper type='like' count={card.like} />}
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
            <CardFooter justify='flex-end' gap={2} px={{ base: 0 }} pb={{ base: 1, xl: 5 }}>
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
);

export default HorizontalCard;
