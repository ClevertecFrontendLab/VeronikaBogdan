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
    },
    listCardOutline: {
        fontWeight: 600,
        color: 'blackAlpha.800',
        bg: 'whiteAlpha.100',
        border: '1px solid',
        borderColor: 'blackAlpha.600',
    },
});

const buttonTheme = defineStyleConfig({
    sizes,
    variants,
});

export default buttonTheme;
