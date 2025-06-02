import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Grid,
    Heading,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useParams } from 'react-router';

import NewRecipies from '~/app/main-page/new-recipies';
import AuthorBox from '~/app/recipe-page/author-box';
import Ingredients from '~/app/recipe-page/ingredients';
import NutritionBox from '~/app/recipe-page/nutrition-box';
import Steps from '~/app/recipe-page/steps';
import Trash from '~/assets/svg/black-trash.svg';
import Bookmark from '~/assets/svg/bookmark-heart.svg';
import EditPen from '~/assets/svg/edit-pen.svg';
import HeartEyes from '~/assets/svg/emoji-heart-eyes.svg';
import Timer from '~/assets/svg/timer.svg';
import Badge from '~/components/badge';
import IconCountWrapper from '~/components/icon-count-wrapper';
import { IMAGE_HOST, JWT_TOKEN_NAME } from '~/constants';
import { ROUTES } from '~/constants/routes';
import {
    RECIPE_REMOVE_ERROR,
    RECIPE_REMOVE_SUCCESS,
    SERVER_ERROR,
    TOASTS,
} from '~/constants/toast-texts';
import { useGetCategoriesQuery } from '~/query/services/categories';
import {
    useGetRecipeQuery,
    useRateRecipeMutation,
    useRemoveRecipeMutation,
    useSaveBookmarkRecipeMutation,
} from '~/query/services/recipies';
import { getCategoryById, getRootCategory } from '~/utils/current-paths';

const RecipePage = () => {
    const userId = jwtDecode(localStorage.getItem(JWT_TOKEN_NAME))?.userId;

    const navigate = useNavigate();
    const toast = useChakraToast();

    const { recipeId } = useParams();
    const { data: card } = useGetRecipeQuery(recipeId);

    const { data } = useGetCategoriesQuery();

    const [removeRecipe] = useRemoveRecipeMutation();
    const [rateRecipe] = useRateRecipeMutation();
    const [saveBookmarkRecipe] = useSaveBookmarkRecipeMutation();

    const handleRemoveRecipe = () => {
        removeRecipe(recipeId)
            .unwrap()
            .then(() => {
                toast({
                    status: 'success',
                    ...TOASTS[RECIPE_REMOVE_SUCCESS],
                });

                navigate(ROUTES.main);
            })
            .catch((error) => {
                toast.closeAll();

                if (Math.floor(error.status / 100) === 5) {
                    toast({
                        status: 'error',
                        ...TOASTS[RECIPE_REMOVE_ERROR],
                    });
                }
            });
    };
    const handleEditRecipe = () => {
        console.log('asdf');
        navigate(
            `/edit-recipe/${getRootCategory(data?.all, card?.categoriesIds[0])?.category}/${getCategoryById(data?.all, card?.categoriesIds[0])?.category}/${recipeId}`,
        );
    };
    const handleRateRecipe = () => {
        rateRecipe(recipeId)
            .unwrap()
            .catch((error) => {
                toast.closeAll();

                if (error.status === 500) {
                    toast({
                        status: 'error',
                        ...TOASTS[SERVER_ERROR],
                    });
                }
            });
    };

    const handleBookmarkRecipe = () => {
        saveBookmarkRecipe(recipeId)
            .unwrap()
            .catch((error) => {
                toast.closeAll();

                if (error.status === 500) {
                    toast({
                        status: 'error',
                        ...TOASTS[SERVER_ERROR],
                    });
                }
            });
    };

    return card ? (
        <Stack
            spacing={{ base: 6, xl: 10 }}
            pb={{ base: '100px', xl: 0 }}
            paddingTop={{ base: '80px', xl: '135px' }}
        >
            <Card
                direction={{ base: 'column', md: 'row' }}
                variant='page'
                layerStyle='contentContainer'
            >
                <Image
                    src={`${IMAGE_HOST}${card?.image}`}
                    borderRadius='lg'
                    h={{ base: '224px', md: '225px', xl: '411px' }}
                    w={{ base: '100%', md: '230px', xl: '353px', '3xl': '554px' }}
                    objectFit='cover'
                    alt={card?.title}
                />
                <Stack flex={1} pl={{ base: 0, md: 5, xl: 6 }} pt={{ base: 4, md: 0 }}>
                    <CardBody px={{ base: 0 }} py={{ base: 2, xl: 0 }} pt={0}>
                        <Stack gap={{ base: 0, xl: 2 }}>
                            <Flex justify='space-between' alignItems='flex-start'>
                                <Stack spacing={2} flexWrap='wrap' direction='row'>
                                    {card.categoriesIds.map((category) => (
                                        <Badge
                                            key={category}
                                            icon={`${IMAGE_HOST}${getRootCategory(data?.all, category)?.icon}`}
                                            text={getCategoryById(data?.all, category)?.title}
                                            type='horizontal'
                                        />
                                    ))}
                                </Stack>
                                <HStack minWidth='165px' justifyContent='flex-end'>
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
                            <Badge icon={Timer} text={`${card.time} минут`} type='time' />
                        </Box>
                        <HStack
                            justify={{ base: 'flex-start', md: 'flex-end' }}
                            gap={{ base: 2, md: 4 }}
                            px={{ base: 0 }}
                            pt={{ base: 0 }}
                            pb={{ base: 0 }}
                        >
                            {userId === card?.authorId ? (
                                <>
                                    <IconButton
                                        aria-label='Remove step'
                                        bg='white'
                                        borderRadius='full'
                                        icon={<Image src={Trash} />}
                                        data-test-id='recipe-delete-button'
                                        onClick={handleRemoveRecipe}
                                    />
                                    <Button
                                        variant='listCardOutline'
                                        size='recipeButton'
                                        leftIcon={
                                            <Image
                                                src={EditPen}
                                                marginInlineEnd={1}
                                                boxSize={{ base: 3, xl: 4 }}
                                            />
                                        }
                                        onClick={handleEditRecipe}
                                    >
                                        Редактировать рецепт
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant='listCardOutline'
                                        size='recipeButton'
                                        leftIcon={
                                            <Image
                                                src={HeartEyes}
                                                marginInlineEnd={1}
                                                boxSize={{ base: 3, xl: 4 }}
                                            />
                                        }
                                        onClick={handleRateRecipe}
                                    >
                                        <Text>Оценить рецепт</Text>
                                    </Button>
                                    <Button
                                        variant='recipeButton'
                                        size='recipeButton'
                                        leftIcon={
                                            <Image
                                                src={Bookmark}
                                                marginInlineEnd={1}
                                                boxSize={{ base: 3, xl: 4 }}
                                            />
                                        }
                                        onClick={handleBookmarkRecipe}
                                    >
                                        Сохранить в закладки
                                    </Button>
                                </>
                            )}
                        </HStack>
                    </CardFooter>
                </Stack>
            </Card>
            <Stack spacing={{ base: 6, xl: 10 }}>
                <Stack
                    margin={{ base: 0, xl: 'auto' }}
                    maxW={{ base: '100%', xl: '668px' }}
                    spacing={{ base: 2, md: 4 }}
                    layerStyle='contentContainer'
                >
                    <Text fontSize='sm'>* Калорийность на 1 порцию</Text>
                    <Grid
                        templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
                        gap={{ base: 3, xl: 4, '3xl': 6 }}
                    >
                        <NutritionBox
                            name='калорийность'
                            count={card.nutritionValue.calories}
                            unit='ккал'
                        />
                        <NutritionBox
                            name='белки'
                            count={card.nutritionValue.protein || card.nutritionValue.proteins || 0}
                            unit='грамм'
                            pl={16}
                        />
                        <NutritionBox
                            name='жиры'
                            count={card.nutritionValue.fats}
                            unit='грамм'
                            pl={16}
                        />
                        <NutritionBox
                            name='углеводы'
                            count={card.nutritionValue.carbohydrates}
                            unit='грамм'
                            pl={10}
                        />
                    </Grid>
                </Stack>
                <Ingredients ingredients={card.ingredients} portions={card.portions} />
                <Steps steps={card.steps} />
                <AuthorBox />
                <NewRecipies />
            </Stack>
        </Stack>
    ) : null;
};

export default RecipePage;
