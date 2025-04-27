import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

export const menuStyles = {
    page: { maxW: '270px' },
    drawer: { maxW: '270px' },
    button: {
        w: '100%',
        h: '100%',
        minH: 10,
        py: 2.5,
        pl: 4,
        pr: 0,
        fontWeight: 400,
        color: 'blackAlpha.700',
        backgroundColor: 'white',
        _disabled: {
            color: 'blackAlpha.700',
            borderColor: 'blackAlpha.200',
        },
        _hover: {
            backgroundColor: 'transparent',
        },
        _expanded: {
            backgroundColor: 'white',
            borderColor: 'lime.300',
        },
        sx: {
            '& > span': {
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: 2,
            },
        },
    },
    list: {
        top: -2,
        border: 0,
        py: 1,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
};

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([]);

const variants = {
    searchBox: definePartsStyle({ list: { maxW: '270px' } }),
    drawer: definePartsStyle({ list: { maxWidth: '300px' } }),
};

export const menuTheme = defineMultiStyleConfig({ variants });

export default menuTheme;
