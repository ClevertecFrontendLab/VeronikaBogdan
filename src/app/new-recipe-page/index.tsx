import { SmallAddIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Grid,
    GridItem,
    Image,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import EditPen from '~/assets/svg/edit-pen.svg';
import EmptyImage from '~/components/empty-image';
import MultiSelect from '~/components/multi-select';
// import { IMAGE_HOST } from '~/constants';
import { MEASURE_UNIT_ERROR } from '~/constants/toast-texts';
import {
    INPUT_MAX_LENGTH,
    RECIPE_DESCRIPTION_MAX_LENGTH,
    // STEP_DESCRIPTION_MAX_LENGTH,
    TIME_MAX,
} from '~/constants/validation';
import useToast from '~/hooks/use-error-toast';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetMeasureUnitsQuery } from '~/query/services/recipies';
import { Recipe } from '~/query/types/recipies';

const NewRecipePage = () => {
    const methods = useForm<Recipe>({
        mode: 'onSubmit',
        defaultValues: {
            image: '',
            portions: '',
            time: '',
            ingredients: [
                {
                    title: '',
                    count: '',
                    measureUnit: '',
                },
                {
                    title: '',
                    count: '',
                    measureUnit: '',
                },
            ],
            steps: [
                {
                    stepNumber: '1',
                    description: '',
                    image: '',
                },
            ],
        },
    });
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        // reset,
        formState: { errors },
    } = methods;

    const [isPublish, setPublishState] = useState(false);

    const { data: categories } = useGetCategoriesQuery();
    const { isError: isMeasureError } = useGetMeasureUnitsQuery();
    // const { data: measureUnits, isError: isMeasureError } = useGetMeasureUnitsQuery();

    const onSubmit = (recipe: Recipe) => console.log(recipe);

    const subcategories = useMemo(
        () =>
            categories?.uniqueSubcategories?.map((subcategory) => ({
                label: subcategory.title,
                value: subcategory._id,
            })) || [],
        [categories],
    );
    useToast({ isLoaded: isMeasureError, status: 'error', toastType: MEASURE_UNIT_ERROR });
    console.log('isDraft', isPublish, errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} data-test-id='recipe-form'>
            <Stack
                spacing={{ base: 6, xl: 10 }}
                pb={{ base: '100px', xl: 0 }}
                paddingTop={{ base: '80px', xl: '135px' }}
                width={{ xl: '108%', '3xl': '100%' }}
            >
                <Card
                    direction={{ base: 'column', md: 'row' }}
                    variant='page'
                    layerStyle='contentContainer'
                >
                    <EmptyImage
                        dataTestIdBlock='recipe-image-block'
                        dataTestIdInput='recipe-image-block-input-file'
                        h={{ base: '224px', md: '225px', xl: '411px' }}
                        w={{ base: '100%', md: '230px', xl: '353px', '3xl': '554px' }}
                    />
                    {/* <Image
                        src={`${IMAGE_HOST}${card?.image}`}
                        borderRadius='lg'
                        h={{ base: '224px', md: '225px', xl: '411px' }}
                        w={{ base: '100%', md: '230px', xl: '353px', '3xl': '554px' }}
                        objectFit='cover'
                        
                    /> */}
                    <CardBody
                        pl={{ base: 0, md: 5, xl: 6 }}
                        pt={{ base: 4, md: 0 }}
                        pr={{ base: 0, '3xl': 28 }}
                    >
                        <Stack gap={{ base: 4, xl: 6 }}>
                            <Grid
                                templateColumns={{
                                    base: '1fr 1.7fr',
                                    md: '1fr 1.1fr',
                                    xl: '1fr 1.7fr',
                                    '3xl': '1fr 1.2fr',
                                }}
                                gap={6}
                                mb={{ xl: 2 }}
                            >
                                <GridItem h='10' alignContent='center' textStyle='newRecipeName'>
                                    Выберите не менее 3-х тегов
                                </GridItem>
                                <GridItem h='10'>
                                    <MultiSelect
                                        placeholder='Выберите из списка...'
                                        options={subcategories}
                                        selectedItems={getValues('categoriesIds') || []}
                                        selectItems={(items) =>
                                            setValue('categoriesIds', items, {
                                                shouldValidate: true,
                                            })
                                        }
                                        dataTestIdButton='recipe-categories'
                                    />
                                </GridItem>
                            </Grid>
                            <Input
                                data-test-id='recipe-title'
                                type='text'
                                size='lg'
                                variant={errors.title ? 'recipeError' : 'recipeGreen'}
                                placeholder='Название рецепта'
                                {...register('title', {
                                    required: true,
                                    maxLength: INPUT_MAX_LENGTH,
                                })}
                            />
                            <Textarea
                                data-test-id='recipe-description'
                                placeholder='Краткое описание рецепта'
                                size='recipe'
                                variant={
                                    errors.description ? 'errorDescription' : 'recipeDescription'
                                }
                                {...register('description', {
                                    required: isPublish,
                                    maxLength: RECIPE_DESCRIPTION_MAX_LENGTH,
                                })}
                            />
                            <Flex gap={{ base: 4, xl: 6 }}>
                                <Text textStyle='newRecipeName' alignContent='center'>
                                    На сколько человек ваш рецепт?
                                </Text>
                                <NumberInput
                                    min={1}
                                    step={1}
                                    w='72px'
                                    variant={errors.portions ? 'recipeError' : ''}
                                >
                                    <NumberInputField
                                        data-test-id='recipe-portions'
                                        placeholder='4'
                                        {...register('portions', {
                                            required: isPublish,
                                            min: 1,
                                        })}
                                    />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper data-test-id='increment-stepper' />
                                        <NumberDecrementStepper data-test-id='decrement-stepper' />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                            <Flex gap={{ base: 4, xl: 6 }}>
                                <Text textStyle='newRecipeName' alignContent='center'>
                                    Сколько времени готовить в минутах?
                                </Text>
                                <NumberInput
                                    min={1}
                                    step={1}
                                    w='72px'
                                    variant={errors.time ? 'recipeError' : ''}
                                >
                                    <NumberInputField
                                        data-test-id='recipe-time'
                                        placeholder='30'
                                        {...register('time', {
                                            required: isPublish,
                                            max: TIME_MAX,
                                            min: 1,
                                        })}
                                    />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper data-test-id='increment-stepper' />
                                        <NumberDecrementStepper data-test-id='decrement-stepper' />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                        </Stack>
                    </CardBody>
                </Card>
                <Stack spacing={{ base: 6, xl: 10 }} layerStyle='recipeContainer'>
                    <Stack spacing={{ base: 3, md: 4 }}>
                        <Flex gap={1} align='center'>
                            <Text textStyle='newRecipeName' alignContent='center'>
                                Добавьте ингредиенты рецепта, нажав на
                            </Text>
                            <Box display='inline-flex' border='1px solid black' borderRadius='full'>
                                <SmallAddIcon boxSize={4} />
                            </Box>
                        </Flex>
                        <Grid gridTemplateColumns='1fr 0.5fr 1fr 0.5fr' gap={{ base: 3, '3xl': 4 }}>
                            <GridItem>Ингредиент</GridItem>
                            <GridItem>Количество</GridItem>
                            <GridItem>Единица измерения</GridItem>
                            <GridItem />
                            {getValues('ingredients').map((_, index) => (
                                <>
                                    <GridItem>
                                        <Input
                                            data-test-id={`recipe-ingredients-title-${index}`}
                                            type='text'
                                            size='lg'
                                            variant={
                                                errors.ingredients &&
                                                errors?.ingredients[index]?.title
                                                    ? 'recipeError'
                                                    : 'recipe'
                                            }
                                            placeholder='Ингредиент'
                                            {...register(`ingredients.${index}.title`, {
                                                required: true,
                                                maxLength: INPUT_MAX_LENGTH,
                                            })}
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Input
                                            data-test-id={`recipe-ingredients-count-${index}`}
                                            type='text'
                                            size='lg'
                                            variant={
                                                errors.ingredients &&
                                                errors?.ingredients[index]?.count
                                                    ? 'recipeError'
                                                    : 'recipe'
                                            }
                                            placeholder='100'
                                            {...register(`ingredients.${index}.count`, {
                                                required: true,
                                                min: 1,
                                            })}
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Input
                                            data-test-id={`recipe-ingredients-measureUnit-${index}`}
                                            type='text'
                                            size='lg'
                                            variant={
                                                errors.ingredients &&
                                                errors?.ingredients[index]?.measureUnit
                                                    ? 'recipeError'
                                                    : 'recipe'
                                            }
                                            placeholder='100'
                                            {...register(`ingredients.${index}.measureUnit`, {
                                                required: true,
                                                // maxLength: STEP_DESCRIPTION_MAX_LENGTH,
                                            })}
                                        />
                                    </GridItem>
                                    <GridItem></GridItem>
                                </>
                            ))}
                        </Grid>
                    </Stack>
                    <Stack>
                        <Text textStyle='newRecipeName'>Добавьте шаги приготовления</Text>
                    </Stack>
                    <Flex direction={{ base: 'column', md: 'row' }} gap={5} justify='center'>
                        <Button
                            variant='listCardOutline'
                            size='auth'
                            leftIcon={<Image mr={{ base: 2, xl: 0 }} src={EditPen} />}
                            data-test-id='recipe-save-draft-button'
                            type='submit'
                            onClick={() => {
                                setPublishState(false);
                            }}
                        >
                            Сохранить черновик
                        </Button>
                        <Button
                            variant='listCardSolid'
                            size='auth'
                            data-test-id='recipe-publish-recipe-button'
                            type='submit'
                            onClick={() => {
                                setPublishState(true);
                            }}
                        >
                            Опубликовать рецепт
                        </Button>
                    </Flex>
                </Stack>
            </Stack>
        </form>
    );
};

export default NewRecipePage;
