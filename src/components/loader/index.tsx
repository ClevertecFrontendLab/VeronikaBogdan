import { Box, Spinner } from '@chakra-ui/react';

const Loader = () => (
    <Box
        width='full'
        height='full'
        layerStyle='blur'
        left={0}
        zIndex={10}
        display='flex'
        justifyContent='center'
        alignItems='center'
    >
        <Box
            data-test-id='app-loader'
            display='inline-block'
            padding={14}
            bgGradient='radial(50% 50% at 50% 45%, #c4ff61 -35%, rgba(255, 255, 255, 0) 100%)'
        >
            <Spinner size='lg' />
        </Box>
    </Box>
);

export default Loader;
