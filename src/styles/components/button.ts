import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizes = defineStyle({
    pageActive: {
        fontSize: { base: 'md', '3xl': 'lg' },
        lineHeight: { base: '150%', '3xl': '156%' },
    },
    listCard: {
        fontSize: { base: 'xs', xl: 'sm' },
        lineHeight: { base: '133%', xl: '143%' },
        px: { base: 2, xl: 3 },
        py: { base: 1, xl: 1.5 },
    },
    limeOutline: {
        fontSize: { base: 'xs', '3xl': 'sm' },
        lineHeight: { base: '133%', '3xl': '143%' },
        px: { base: 2, '3xl': 3 },
        py: { base: 1.5, xl: 2, '3xl': 1 },
    },
    recipeButton: {
        fontSize: { base: 'xs', xl: 'sm', '3xl': 'lg' },
        lineHeight: { base: '133%', xl: '143%', '3xl': '156%' },
        px: { base: 2, md: 2, '3xl': 6 },
        py: { base: 1, md: 1, '3xl': 2.5 },
    },
});

const variants = defineStyle({
    pageSolid: {
        fontWeight: 600,
        bg: 'lime.400',
        px: { base: 4, '3xl': 6 },
        py: { base: 2, '3xl': 2.5 },
        w: 'fit-content',
        alignSelf: 'center',
    },
    listCardSolid: {
        fontWeight: 600,
        color: 'white',
        bg: 'black',
        _disabled: {
            bg: 'gray.700',
            '&[type="button"]': {
                _hover: {
                    bg: 'gray.700',
                },
            },
        },
    },
    listCardOutline: {
        fontWeight: 600,
        color: 'blackAlpha.800',
        bg: 'whiteAlpha.100',
        border: '1px solid',
        borderColor: 'blackAlpha.600',
    },
    blogActive: {
        fontWeight: 600,
        px: { base: 4, '3xl': 6 },
        py: { base: 2, '3xl': 2.5 },
        w: 'fit-content',
        alignSelf: 'center',
        mr: { xl: -2 },
    },
    recipeButton: {
        fontWeight: 600,
        bg: 'lime.400',
        w: 'fit-content',
        alignSelf: 'center',
    },
});

const buttonTheme = defineStyleConfig({
    sizes,
    variants,
});

export default buttonTheme;
