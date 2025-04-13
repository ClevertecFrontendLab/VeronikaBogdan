import {
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

import Badge from '../badge';
import IconCountWrapper from '../icon-count-wrapper';
import { relevantKitchenData } from './types';

type RelevantKitchenProps = {
    hideTopBorderFrom?: string;
    data: relevantKitchenData;
};

const RelevantKitchen = ({ hideTopBorderFrom = '', data }: RelevantKitchenProps) => (
    <Grid
        gridTemplateColumns={{
            base: '100%',
            md: 'repeat(3, 1fr)',
            '3xl': 'repeat(4, 1fr)',
        }}
        gap={{ base: 3, '3xl': 4 }}
        pt={{ base: 2, xl: 7, '3xl': 2 }}
        borderTop={hideTopBorderFrom ? { [hideTopBorderFrom]: '' } : '1px solid'}
        borderTopColor='blackAlpha.200'
    >
        <GridItem colSpan={{ md: 3, xl: 1, '3xl': 2 }}>
            <Heading variant='blockTitle' size='blockTitle'>
                {data.title}
            </Heading>
        </GridItem>
        <GridItem colSpan={{ md: 3, xl: 2 }} mb={{ base: 1, xl: 5, '3xl': 3 }}>
            <Text
                textStyle='blockDescription'
                letterSpacing='0.1px'
                lineHeight={{ '3xl': '170%' }}
                pl={{ '3xl': 5 }}
            >
                {data.description}
            </Text>
        </GridItem>
        {data.cards.map((card) => (
            <GridItem key={card.title} minW={{ md: '232px' }}>
                <Card h='full'>
                    <CardBody p={{ base: 3, '3xl': 5 }}>
                        <Stack>
                            <Heading size='relevantCardTitle' isTruncated>
                                {card.title}
                            </Heading>
                            <Text textStyle='text' noOfLines={3}>
                                {card.description}
                            </Text>
                            <Flex mt={{ base: 5 }} justify='space-between'>
                                <Badge icon={card.icon} text={card.badge} />
                                <HStack mr={{ xl: 2 }}>
                                    {card.favorite && (
                                        <IconCountWrapper type='favorite' count={card.favorite} />
                                    )}
                                    {card.like && (
                                        <IconCountWrapper type='like' count={card.like} />
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
                {data.list.map((listItem) => (
                    <Card key={listItem.name}>
                        <CardBody
                            px={{ base: 3, '3xl': 8 }}
                            py={{ base: 3, '3xl': 3 }}
                            pr={{ '3xl': 5 }}
                        >
                            <HStack>
                                <Image src={listItem.icon} boxSize={5} />
                                <Heading size='smallCardTitle' isTruncated>
                                    {listItem.name}
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
    </Grid>
);

export default RelevantKitchen;
