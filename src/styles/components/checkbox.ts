import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([]);

const baseStyle = definePartsStyle({
    control: {
        bg: 'white',
        borderColor: 'lime.150',
        _hover: {
            bg: 'white',
        },
        _focusVisible: {
            boxShadow: 'none',
        },
        _checked: {
            bg: 'lime.400',
            borderColor: 'lime.400',

            _hover: {
                bg: 'lime.400',
                borderColor: 'lime.400',
            },
            _focusVisible: {
                boxShadow: 'none',
            },
        },
    },
    icon: {
        color: 'black',
    },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });

export default checkboxTheme;
