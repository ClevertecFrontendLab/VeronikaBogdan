const layerStyles = {
    blur: {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(2px)',
        bg: 'blackAlpha.300',
    },
    base: {
        bg: 'gray.50',
        border: '2px solid',
        borderColor: 'gray.500',
    },
    selected: {
        bg: 'teal.500',
        color: 'teal.700',
        borderColor: 'orange.500',
    },
};

export default layerStyles;
