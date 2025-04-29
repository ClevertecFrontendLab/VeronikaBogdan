const layerStyles = {
    blur: {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(2px)',
        bg: 'blackAlpha.300',
    },
    contentContainer: {
        px: { base: 4, md: 5, xl: 0 },
    },
    horizontalCards: {
        gridTemplateColumns: {
            base: '100%',
            md: 'repeat(2, 1fr)',
            xl: '100%',
            '3xl': 'repeat(2, 1fr)',
        },
        gap: { base: 2.5, md: 3, xl: 3.5, '3xl': 5 },
    },

    nutritionBox: {
        border: '1px solid',
        borderColor: 'blackAlpha.200',
        borderRadius: '16px',
        textAlign: 'center',
    },
    recipeContainer: {
        mx: { base: 0, md: '62px', xl: '158px', '3xl': '356px' },
        px: { base: 4, md: 5, xl: 0 },
    },
    base: {
        bg: 'gray.50',
        border: '2px solid',
        borderColor: 'gray.500',
    },
};

export default layerStyles;
