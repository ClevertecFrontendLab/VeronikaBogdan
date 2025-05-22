import { Box, Spinner } from '@chakra-ui/react';

type LoaderProps = { dataTestId?: string; layerStyle?: 'none'; padding?: number };

const Loader = ({ dataTestId, layerStyle, padding }: LoaderProps) => (
    <Box
        width='full'
        height='full'
        layerStyle={layerStyle || 'blur'}
        left={0}
        display='flex'
        justifyContent='center'
        alignItems='center'
        zIndex={2000}
    >
        <Box
            data-test-id={dataTestId || 'app-loader'}
            display='inline-block'
            padding={padding || 14}
            bgGradient='radial(50% 50% at 50% 45%, #c4ff61 -35%, rgba(255, 255, 255, 0) 100%)'
        >
            <Spinner size='lg' />
        </Box>
    </Box>
);

export default Loader;
