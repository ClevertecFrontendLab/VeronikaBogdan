import {
    Alert as ChakraAlert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type AlertProps = {
    title: ReactNode;
    description: ReactNode;
    status?: 'error' | 'info' | 'warning' | 'success' | 'loading' | undefined;
    isClosable?: boolean;
    onClose?: () => void;
};

const Alert = ({ title, description, status, isClosable, onClose }: AlertProps) => (
    <ChakraAlert
        status={status}
        bg={status === 'success' ? 'green.500' : 'red.500'}
        w={{ base: '328px', xl: '400px' }}
        data-test-id='error-notification'
        mb='85px'
    >
        <AlertIcon color='white' />
        <Box>
            <AlertTitle fontWeight={500} color='white'>
                {title}
            </AlertTitle>
            <AlertDescription fontWeight={300} color='white'>
                {description}
            </AlertDescription>
        </Box>
        {isClosable && (
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                ml='auto'
                color='white'
                onClick={onClose}
                data-test-id='close-alert-button'
            />
        )}
    </ChakraAlert>
);

export default Alert;
