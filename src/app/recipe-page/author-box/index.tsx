import { Box, Button, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

import RecommendationWoman from '~/assets/png/man.png';
import PeopleGroup from '~/assets/svg/people-group.svg';
import Subscribe from '~/assets/svg/subscribe.svg';

const AuthorBox = () => (
    <Box layerStyle='recipeContainer'>
        <HStack
            layerStyle='contentContainer'
            bg='lime.300'
            borderRadius='xl'
            border={0}
            p={{ base: 3, md: 6, xl: 6 }}
        >
            <Image
                src={RecommendationWoman}
                borderRadius='full'
                h={{ base: '96px' }}
                w={{ base: '96px' }}
            />
            <Stack w='full' position='relative' ml={{ md: 2 }}>
                <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    position='absolute'
                    right={{ base: -1, md: 0 }}
                    top={{ base: -2, md: 0 }}
                >
                    Автор рецепта
                </Text>
                <Heading
                    fontWeight={{ base: 600, md: 700 }}
                    fontSize={{ base: '18px', md: '24px' }}
                    lineHeight={{ base: '156%', md: '133%' }}
                    pt={{ base: 1, md: 0 }}
                >
                    Сергей Разумов
                </Heading>
                <Text textStyle='text' color='blackAlpha.700' pt={{ md: -2 }}>
                    @serg25
                </Text>
                <Flex justify='space-between'>
                    <Button
                        variant='listCardSolid'
                        size='listCard'
                        px={{ base: 2 }}
                        py={{ base: 1 }}
                        leftIcon={
                            <Image
                                marginInlineEnd={{ base: 1, xl: 0 }}
                                src={Subscribe}
                                boxSize={{ base: 3 }}
                            />
                        }
                    >
                        <Text fontSize='xs'>Подписаться</Text>
                    </Button>
                    <HStack>
                        <Image src={PeopleGroup} boxSize={{ base: 3 }} />
                        <Text color='lime.600' fontWeight='semibold' fontSize={{ base: 'xs' }}>
                            125
                        </Text>
                    </HStack>
                </Flex>
            </Stack>
        </HStack>
    </Box>
);

export default AuthorBox;
