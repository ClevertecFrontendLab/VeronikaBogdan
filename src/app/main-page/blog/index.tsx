import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Grid,
    GridItem,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';

import { BLOG_COMMENTS } from '~/constants/blog-main-page';

const Blog = () => (
    <Stack bg='lime.300' borderRadius='2xl' p={{ base: 3, xl: 6 }} mt={{ '3xl': -2.5 }}>
        <Flex justify='space-between'>
            <Heading size='blogTitle'>Кулинарные блоги</Heading>
            <Button
                variant='blogActive'
                size='pageActive'
                hideBelow='xl'
                rightIcon={<ArrowForwardIcon />}
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
                                noOfLines={1}
                            >
                                {comment.user}
                            </GridItem>
                            <GridItem fontSize={{ base: 'xs', xl: 'sm' }} color='blackAlpha.700'>
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
            rightIcon={<ArrowForwardIcon />}
        >
            Все авторы
        </Button>
    </Stack>
);

export default Blog;
