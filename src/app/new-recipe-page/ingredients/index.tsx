import { AddIcon, SmallAddIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Image,
    Input,
    Select,
    Stack,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { INGREDIENT } from '~/app/new-recipe-page/default-values';
import Trash from '~/assets/svg/trash.svg';
import { INPUT_MAX_LENGTH } from '~/constants/validation';
import { useGetMeasureUnitsQuery } from '~/query/services/recipies';

type NewRecipeIngredientsProps = { required: boolean };

const NewRecipeIngredients = ({ required }: NewRecipeIngredientsProps) => {
    const {
        register,
        getValues,
        setValue,
        formState: { errors },
    } = useFormContext();

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const { data: measureUnits } = useGetMeasureUnitsQuery();

    const handleAddIngredient = () => {
        getValues('ingredients').push(INGREDIENT);
        setValue('ingredients', getValues('ingredients'), { shouldValidate: true });
    };

    const handleRemoveIngredient = (removedIndex: number) => {
        const changedIngredients = getValues('ingredients').filter(
            (_, index: number) => index !== removedIndex,
        );
        setValue('ingredients', changedIngredients, { shouldValidate: true });
    };

    return (
        <Stack spacing={{ base: 3, md: 4 }}>
            <Flex gap={1} align='center'>
                <Text textStyle='newRecipeName' alignContent='center'>
                    Добавьте ингредиенты рецепта, нажав на
                </Text>
                <Box display='inline-flex' border='1px solid black' borderRadius='full'>
                    <SmallAddIcon boxSize={4} />
                </Box>
            </Flex>
            <Grid
                gridTemplateColumns={{
                    base: '0.5fr 1.1fr 0.1fr',
                    md: '1.5fr 0.5fr 1.1fr 0.1fr',
                }}
                gap={{ base: 3, '3xl': 4 }}
            >
                {isLargerThan768 && (
                    <>
                        <GridItem
                            textStyle='ingredients'
                            textTransform='capitalize'
                            pl={{ base: 2, xl: 3 }}
                            h={6}
                        >
                            Ингредиент
                        </GridItem>
                        <GridItem
                            textStyle='ingredients'
                            textTransform='capitalize'
                            pl={{ base: 2, xl: 7 }}
                            h={6}
                        >
                            Количество
                        </GridItem>
                        <GridItem
                            textStyle='ingredients'
                            textTransform='capitalize'
                            pl={{ base: 2, xl: 6 }}
                            h={6}
                        >
                            Единица измерения
                        </GridItem>
                        <GridItem />
                    </>
                )}
                {getValues('ingredients')?.map((_, index, ingredients) => (
                    <>
                        <GridItem gridColumn={{ base: '1/4', md: '1' }}>
                            <Input
                                data-test-id={`recipe-ingredients-title-${index}`}
                                type='text'
                                size='md'
                                variant={
                                    errors.ingredients && errors?.ingredients[index]?.title
                                        ? 'recipeError'
                                        : 'recipe'
                                }
                                placeholder='Ингредиент'
                                {...register(`ingredients.${index}.title`, {
                                    required,
                                    maxLength: INPUT_MAX_LENGTH,
                                })}
                            />
                        </GridItem>
                        <GridItem>
                            <Input
                                data-test-id={`recipe-ingredients-count-${index}`}
                                type='number'
                                size='md'
                                variant={
                                    errors.ingredients && errors?.ingredients[index]?.count
                                        ? 'recipeError'
                                        : 'recipe'
                                }
                                placeholder='100'
                                {...register(`ingredients.${index}.count`, {
                                    required,
                                    min: 1,
                                })}
                            />
                        </GridItem>
                        <GridItem>
                            {measureUnits && (
                                <Select
                                    placeholder='Единица измерения'
                                    data-test-id={`recipe-ingredients-measureUnit-${index}`}
                                    size='md'
                                    isInvalid={
                                        errors.ingredients &&
                                        errors?.ingredients[index]?.measureUnit
                                    }
                                    errorBorderColor='red.500'
                                    defaultValue='г'
                                    {...register(`ingredients.${index}.measureUnit`, {
                                        required,
                                    })}
                                    sx={{
                                        option: {
                                            color: 'black',
                                            '&:nth-of-type(2n + 1)': {
                                                backgroundColor: 'blackAlpha.200',
                                            },

                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: 'green',
                                            },
                                        },
                                    }}
                                >
                                    {measureUnits?.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                    {/* <option value='грамм'>г</option> */}
                                </Select>
                            )}
                        </GridItem>
                        <GridItem>
                            {index + 1 === ingredients.length ? (
                                <IconButton
                                    aria-label='Add ingredient'
                                    bg='black'
                                    borderRadius='full'
                                    icon={<AddIcon color='white' />}
                                    data-test-id='recipe-ingredients-add-ingredients'
                                    onClick={handleAddIngredient}
                                />
                            ) : (
                                <IconButton
                                    aria-label='Remove ingredient'
                                    bg='white'
                                    borderRadius='full'
                                    icon={<Image src={Trash} />}
                                    data-test-id={`recipe-ingredients-remove-ingredients-${index}`}
                                    onClick={() => handleRemoveIngredient(index)}
                                />
                            )}
                        </GridItem>
                    </>
                ))}
            </Grid>
        </Stack>
    );
};

export default NewRecipeIngredients;
