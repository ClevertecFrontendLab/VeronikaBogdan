import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([]);

const baseStyle = definePartsStyle({
    field: {
        backgroundColor: 'white',
        color: 'lime.800',
        _placeholder: { color: 'lime.800' },
    },
});

const variants = {
    auth: definePartsStyle({
        field: {
            border: '2px solid',
            borderColor: 'lime.150',
            backgroundColor: 'white',
            color: 'lime.800',
            _placeholder: { color: 'lime.800' },
        },
    }),
    error: definePartsStyle({
        field: {
            border: '2px solid',
            borderColor: 'red.500',
            backgroundColor: 'white',
            color: 'lime.800',
            _placeholder: { color: 'lime.800' },
        },
    }),
};

const sizes = {
    auth: definePartsStyle({}),
};

export const inputTheme = defineMultiStyleConfig({ baseStyle, variants, sizes });

export default inputTheme;
