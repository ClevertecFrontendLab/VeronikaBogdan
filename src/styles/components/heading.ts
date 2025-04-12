import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizes = defineStyle({
    pageTitle: {
        fontSize: { base: '2xl', xl: '5xl' },
    },
    blockTitle: {
        fontSize: { base: '2xl', xl: '4xl', '3xl': '5xl' },
    },
    h3: {},
    smallCardTitle: {
        fontSize: { xl: 'lg', '3xl': 'xl' },
        lineHeight: { base: '150%', xl: '156%', '3xl': '140%' },
    },
});

const variants = defineStyle({
    pageTitle: {
        color: 'black',
        fontWeight: 700,
        textAlign: 'center',
    },
    blockTitle: {
        color: 'black',
        fontWeight: 500,
        lineHeight: { base: '133%', xl: '111%' },
    },
    h3: {
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '140%',
    },
});

const headingTheme = defineStyleConfig({
    sizes,
    variants,
});

export default headingTheme;
