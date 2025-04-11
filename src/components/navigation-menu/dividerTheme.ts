import { defineStyleConfig } from '@chakra-ui/react';

const dividerTheme = defineStyleConfig({
    variants: {
        menuActiveDivider: {
            borderWidth: '7px',
            borderStyle: 'solid',
            borderColor: 'lime.300',
            mt: -1,
            ml: '2px',
        },
        menuInactiveDivider: {
            borderWidth: '',
            borderStyle: 'solid',
            borderColor: 'lime.300',
            mt: -1,
        },
    },
});

export default dividerTheme;
