import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([]);

const baseStyle = definePartsStyle({
    track: {
        bg: 'blackAlpha.300',
        _checked: {
            bg: 'lime.300',
        },
    },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });

export default switchTheme;
