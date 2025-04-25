import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const variants = defineStyle({
    horizontalCards: {
        gridTemplateColumns: {
            base: '100%',
            md: 'repeat(2, 1fr)',
            xl: '100%',
            '3xl': 'repeat(2, 1fr)',
        },
        gap: { base: 2.5, md: 3, xl: 3.5, '3xl': 5 },
    },
});

const gridTheme = defineStyleConfig({
    variants,
});

export default gridTheme;
