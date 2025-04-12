import { extendTheme } from '@chakra-ui/react';

import dividerTheme from '~/components/navigation-menu/dividerTheme';
import cardTheme from '~/styles/components/card';
import headingTheme from '~/styles/components/heading';
import switchTheme from '~/styles/components/switch';
import layerStyles from '~/styles/layer-styles';
import textStyles from '~/styles/text-styles';

const breakpoints = {
    base: '0em', // 0px
    sm: '360px', // ~480px. em is a relative unit and is dependant on the font size.
    md: '768px', // ~768px
    lg: '992px', // ~992px
    xl: '1440px', // ~1280px
    '2xl': '96em', // ~1536px 1920px
    '3xl': '1920px', // ~1536px 1920px
};

const fonts = {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
    mono: 'Inter, sans-serif',
};

const colors = {
    lime: {
        50: '#ffffd3',
        100: '#eaffc7',
        150: '#d7ff94',
        300: '#c4ff61',
        400: '#b1ff2e',
        600: '#2db100',
        800: '#134b00',
    },
    white: '#fff',
    whiteAlpha: {
        100: 'rgba(255, 255, 255, 0.06)',
    },
    gray: {
        400: '#a0aec0',
        700: '#2d3748',
    },
    blackAlpha: {
        200: 'rgba(0, 0, 0, 0.08)',
        300: 'rgba(0, 0, 0, 0.16)',
        400: 'rgba(0, 0, 0, 0.24)',
        600: 'rgba(0, 0, 0, 0.48)',
        700: 'rgba(0, 0, 0, 0.64)',
        800: 'rgba(0, 0, 0, 0.8)',
        900: 'rgba(0, 0, 0, 0.92);',
    },
    black: '#000',
};

const fontSizes = {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
};

const radii = {
    base: '4px',
    sm: '2px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
};

export const theme = extendTheme({
    breakpoints,
    fonts,
    colors,
    fontSizes,
    textStyles,
    layerStyles,
    radii,
    components: {
        Card: cardTheme,
        Divider: dividerTheme,
        Heading: headingTheme,
        Switch: switchTheme,
    },
});
