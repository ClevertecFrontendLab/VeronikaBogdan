import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizes = defineStyle({
    pageTitle: {
        fontSize: { base: '2xl', xl: '5xl' },
    },
    blockTitle: {
        fontSize: { base: '2xl', xl: '4xl', '3xl': '5xl' },
        lineHeight: { base: '133%', xl: '111%' },
    },
    smallCardTitle: {
        fontSize: { xl: 'lg', '3xl': 'xl' },
        lineHeight: { base: '150%', xl: '156%', '3xl': '140%' },
    },
    relevantCardTitle: {
        fontSize: { xl: 'xl', '3xl': 'xl' },
        lineHeight: { base: '140%', xl: '156%', '3xl': '140%' },
    },

    listTitle: {
        fontSize: { base: 'md', xl: 'xl' },
        lineHeight: { base: '168%', xl: '140%' },
    },
    blogTitle: {
        fontWeight: 500,
        fontSize: { base: '2xl', xl: '3xl', '3xl': '4xl' },
        lineHeight: { base: '150%', xl: '130%', '3xl': '100%' },
        letterSpacing: { xl: '-0.5px' },
    },
    filterHeading: {
        fontSize: 'md',
        lineHeight: '150%',
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
    },
    listTitle: {
        color: 'black',
        fontWeight: 500,
    },
    labelCheckbox: {
        color: 'black',
        fontWeight: 400,
    },
});

const headingTheme = defineStyleConfig({
    sizes,
    variants,
});

export default headingTheme;
