import {
    Box,
    Flex,
    HStack,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import { Ingredient } from '~/query/types/recipies';

type IngredientsProps = { ingredients: Ingredient[]; portions: number };

const Ingredients = ({ ingredients, portions }: IngredientsProps) => {
    const [portion, setPortion] = useState(portions);

    return (
        <Stack layerStyle='recipeContainer' mt={{ base: 1 }}>
            <Flex justify='space-between' align='center'>
                <Text textStyle='ingredients' pl={{ xl: 6 }}>
                    Ингредиенты
                </Text>
                <HStack>
                    <Text textStyle='ingredients'>Порций</Text>
                    <NumberInput
                        defaultValue={portion}
                        min={1}
                        onChange={(value: string) => setPortion(+value)}
                        w='72px'
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper data-test-id='increment-stepper' />
                            <NumberDecrementStepper data-test-id='decrement-stepper' />
                        </NumberInputStepper>
                    </NumberInput>
                </HStack>
            </Flex>
            <Stack spacing={0}>
                {ingredients.map((ingredient, index) => (
                    <Flex
                        key={index}
                        justify='space-between'
                        align='center'
                        py={{ base: 2.5, xl: 4 }}
                        px={{ base: 2, xl: 6 }}
                        sx={{
                            '&:nth-of-type(2n + 1)': {
                                backgroundColor: 'blackAlpha.200',
                            },
                        }}
                    >
                        <Text textStyle='text'>{ingredient.title}</Text>
                        <Box display='flex' gap='2px'>
                            {ingredient.count === 'по вкусу' ? (
                                <Text textStyle='text'>{ingredient.count}</Text>
                            ) : (
                                <>
                                    <Text
                                        textStyle='text'
                                        data-test-id={`ingredient-quantity-${index}`}
                                    >
                                        {(+ingredient.count * portion) / portions}
                                    </Text>{' '}
                                    <Text textStyle='text'>{ingredient.measureUnit}</Text>
                                </>
                            )}
                        </Box>
                    </Flex>
                ))}
            </Stack>
        </Stack>
    );
};

export default Ingredients;
