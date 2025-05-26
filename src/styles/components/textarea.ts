import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizes = defineStyle({
    recipe: {
        fontSize: 'sm',
        fontWeight: '400',
        lineHeight: '143%',
        borderRadius: 'md',
        py: 2,
        px: 3,
    },
});

const variants = defineStyle({
    recipeDescription: {
        border: '1px solid',
        borderColor: 'gray.200',
        color: 'blackAlpha.900',
        _placeholder: { color: 'blackAlpha.700' },
    },
    recipeStep: {
        border: '1px solid',
        borderColor: 'gray.200',
        color: 'blackAlpha.900',
        _placeholder: { color: 'blackAlpha.500' },
    },
    errorDescription: {
        border: '2px solid',
        borderColor: 'red.500',
        color: 'blackAlpha.900',
        _placeholder: { color: 'blackAlpha.700' },
    },
    errorStep: {
        border: '2px solid',
        borderColor: 'red.500',
        color: 'blackAlpha.900',
        _placeholder: { color: 'blackAlpha.700' },
    },
});

const textareaTheme = defineStyleConfig({
    sizes,
    variants,
});

export default textareaTheme;
