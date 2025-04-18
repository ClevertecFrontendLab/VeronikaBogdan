import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([]);

const baseStyle = definePartsStyle({
    container: {
        bg: 'white',
        border: '1px solid',
        borderColor: 'blackAlpha.200 !important',
        borderRadius: 'lg',
        boxShadow: 'none',
        _hover: {
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        },
    },
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });

export default cardTheme;
