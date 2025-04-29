import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import RightArrow from '~/assets/svg/arrow-right-dark.svg';
import { BLOG_COMMENTS } from '~/constants/blog-main-page';

const Blog = () => (
    <Box layerStyle='contentContainer'>
        <Stack bg='lime.300' borderRadius='2xl' p={{ base: 3, xl: 6 }} mt={{ '3xl': -2.5 }}>
            <Flex justify='space-between'>
                <Heading size='blogTitle'>Кулинарные блоги</Heading>
                <Button
                    variant='blogActive'
                    size='pageActive'
                    hideBelow='xl'
                    rightIcon={<Image src={RightArrow} />}
                >
                    Все авторы
                </Button>
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 3, xl: 4 }}
                mt={{ xl: 2, '3xl': 4 }}
            >
                {BLOG_COMMENTS.map((comment) => (
                    <Card key={comment.username}>
                        <CardHeader p={{ base: 4, '3xl': 6 }} pb={{ base: 2 }}>
                            <Grid
                                templateColumns='max-content 1fr'
                                templateRows='repeat(2, 1fr)'
                                columnGap='8px'
                                alignItems='center'
                            >
                                <GridItem rowSpan={2} colSpan={1}>
                                    <Avatar
                                        name={comment.user}
                                        src={comment.avatar}
                                        boxSize={{ base: 8, xl: 12 }}
                                        borderRadius='full'
                                    />
                                </GridItem>
                                <GridItem
                                    fontSize={{ base: 'md', xl: 'lg' }}
                                    fontWeight='medium'
                                    isTruncated
                                >
                                    {comment.user}
                                </GridItem>
                                <GridItem
                                    fontSize={{ base: 'xs', xl: 'sm' }}
                                    color='blackAlpha.700'
                                    isTruncated
                                >
                                    {comment.username}
                                </GridItem>
                            </Grid>
                        </CardHeader>
                        <CardBody p={{ base: 4 }} px={{ '3xl': 6 }} pt={0} pb={{ '3xl': 5 }}>
                            <Text textStyle='text' noOfLines={3}>
                                {comment.text}
                            </Text>
                        </CardBody>
                    </Card>
                ))}
            </Flex>
            <Button
                variant='blogActive'
                size='pageActive'
                hideFrom='xl'
                pt={{ base: 4 }}
                rightIcon={<Image src={RightArrow} />}
            >
                Все авторы
            </Button>
        </Stack>
    </Box>
);

export default Blog;
