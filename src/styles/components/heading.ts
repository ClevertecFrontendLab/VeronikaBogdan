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
    listTitle: {
        fontSize: { base: 'md', xl: 'xl' },
        lineHeight: { base: '150%', xl: '140%' },
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
});

const headingTheme = defineStyleConfig({
    sizes,
    variants,
});

export default headingTheme;
