import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizes = defineStyle({
    pageTitle: {
        fontSize: { base: '2xl', xl: '5xl' },
    },
});

const variants = defineStyle({
    pageTitle: {
        color: 'black',
        fontWeight: 700,
        textAlign: 'center',
    },
});

const headingTheme = defineStyleConfig({
    sizes,
    variants,
});

export default headingTheme;
