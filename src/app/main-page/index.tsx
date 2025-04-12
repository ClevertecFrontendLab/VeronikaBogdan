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

import ArrowLeft from '~/assets/svg/arrow-left.svg';
import ArrowRight from '~/assets/svg/arrow-right.svg';
import Badge from '~/components/badge';
import ContentContainer from '~/components/content-container';
import IconCountWrapper from '~/components/icon-count-wrapper';
import CATEGORIES from '~/constants/categories';
import NEW_RECIPIES from '~/constants/new-recipies';

const MainPage = () => (
    <ContentContainer title='Приятного аппетита!'>
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
                zIndex={1}
            >
                <IconButton
                    variant='outline'
                    colorScheme='blackAlpha'
                    aria-label='Стрелка влево'
                    bg='black'
                    ml={{ xl: -2 }}
                    boxSize={{ xl: 10, '3xl': 12 }}
                    icon={<Image src={ArrowLeft} h={{ xl: 4, '3xl': 6 }} />}
                />
                <IconButton
                    variant='outline'
                    colorScheme='blackAlpha'
                    aria-label='Стрелка вправо'
                    bg='black'
                    boxSize={{ xl: 10, '3xl': 12 }}
                    icon={<Image src={ArrowRight} h={{ xl: 4, '3xl': 6 }} />}
                />
            </Flex>
            <HStack spacing={{ base: 3, '3xl': 6 }} overflow='hidden' position='relative'>
                {NEW_RECIPIES.map((recipe) => {
                    const badge = CATEGORIES.find(
                        (category) =>
                            category.label === recipe.badge || category.label.includes('Веган'),
                    );

                    return (
                        <Card
                            key={recipe.key}
                            position='relative'
                            overflow='hidden'
                            w={{ base: '158px', xl: '277px', '3xl': '322px' }}
                            minW={{ base: '158px', xl: '277px', '3xl': '322px' }}
                        >
                            <Badge
                                icon={badge?.icon}
                                text={recipe?.badge}
                                type='vertical'
                                hideFrom='xl'
                                isTopPositioned
                            />
                            <Image
                                src={recipe.image}
                                borderTopRadius='lg'
                                h={{ base: '128px', xl: '230px' }}
                            />
                            <CardBody p={{ base: 2, xl: 3, '3xl': 4 }} px={{ '3xl': 6 }}>
                                <Stack>
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
                                    <Flex mt={{ xl: 5 }} justify='space-between'>
                                        <Badge
                                            icon={badge?.icon}
                                            text={recipe?.badge}
                                            type='vertical'
                                            hideBelow='xl'
                                        />
                                        <HStack>
                                            <IconCountWrapper
                                                type='favorite'
                                                count={recipe.favorite}
                                            />
                                            <IconCountWrapper type='like' count={recipe.like} />
                                        </HStack>
                                    </Flex>
                                </Stack>
                            </CardBody>
                        </Card>
                    );
                })}
            </HStack>
        </Stack>
        <Stack>
            <div>s</div>
            <div>1</div>
        </Stack>
    </ContentContainer>
);

export default MainPage;
