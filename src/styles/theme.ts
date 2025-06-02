import { extendTheme } from '@chakra-ui/react';

import dividerTheme from '~/components/navigation-menu/dividerTheme';
import buttonTheme from '~/styles/components/button';
import cardTheme from '~/styles/components/card';
import checkboxTheme from '~/styles/components/checkbox';
import gridTheme from '~/styles/components/grid';
import headingTheme from '~/styles/components/heading';
import inputTheme from '~/styles/components/input';
import menuTheme from '~/styles/components/menu';
import numberInputTheme from '~/styles/components/number-input';
import switchTheme from '~/styles/components/switch';
import tabsTheme from '~/styles/components/tabs';
import textareaTheme from '~/styles/components/textarea';
import layerStyles from '~/styles/layer-styles';
import textStyles from '~/styles/text-styles';

const breakpoints = {
    base: '0em',
    sm: '360px',
    md: '768px',
    lg: '992px',
    xl: '1440px',
    '2xl': '96em',
    '3xl': '1920px',
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
        650: '#29813f',
        700: '#207e00',
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

const components = {
    Button: buttonTheme,
    Card: cardTheme,
    Checkbox: checkboxTheme,
    Divider: dividerTheme,
    Grid: gridTheme,
    Heading: headingTheme,
    Input: inputTheme,
    Menu: menuTheme,
    NumberInput: numberInputTheme,
    Tabs: tabsTheme,
    Textarea: textareaTheme,
    Switch: switchTheme,
};

export const theme = extendTheme({
    breakpoints,
    fonts,
    colors,
    fontSizes,
    textStyles,
    layerStyles,
    radii,
    components,
});
