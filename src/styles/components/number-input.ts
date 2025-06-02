import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([]);

const baseStyle = definePartsStyle({
    field: {
        border: '1px solid',
        borderColor: 'blackAlpha.200',
        backgroundColor: 'white',
        color: 'blackAlpha.900',
        _placeholder: { color: 'blackAlpha.700' },
    },
});

const variants = {
    recipeError: definePartsStyle({
        field: {
            border: '2px solid',
            borderColor: 'red.500',
            backgroundColor: 'white',
            color: 'blackAlpha.900',
            _placeholder: { color: 'blackAlpha.700' },
        },
    }),
};

export const numberInputTheme = defineMultiStyleConfig({ baseStyle, variants });

export default numberInputTheme;
