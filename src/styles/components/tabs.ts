import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([]);

const baseStyle = definePartsStyle({
    tab: {
        whiteSpace: 'nowrap',
        color: 'lime.800',
        border: 0,
        outline: 0,
        borderBottom: '1px solid',
        borderBottomColor: 'blackAlpha.200',
        borderRadius: 0,
        _hover: { borderBottomColor: 'lime.600' },
        _selected: {
            outline: 0,
            color: 'lime.600',
            borderBottom: '2px solid',
            borderBottomColor: 'lime.600',
        },
        _focus: { outline: 0 },
        p: { base: '4px 16px' },
    },
});

const variants = {
    auth: definePartsStyle({
        root: {
            minWidth: { base: '320px', md: '355px', xl: '451px', '3xl': '461px' },
            width: { base: 'full', md: 'fit-content' },
            ml: { md: 1, '3xl': 6 },
        },
        tab: {
            borderBottom: 0,
            _hover: { borderBottomColor: 'lime.700' },
            _selected: {
                color: 'lime.700',
                borderBottom: '2px solid',
                borderBottomColor: 'lime.700',
            },
            fontWeight: 500,
            fontSize: { base: 'md', xl: 'lg' },
            lineHeight: { base: '150%', xl: '156%' },
        },
        tablist: {
            borderBottom: '1px solid',
            borderBottomColor: 'blackAlpha.200',
        },
    }),
};

const sizes = {
    auth: definePartsStyle({
        tab: {
            padding: { base: '12px 18px', xl: '8px 28px' },
        },
    }),
};

export const tabsTheme = defineMultiStyleConfig({ baseStyle, variants, sizes });

export default tabsTheme;
