import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

const useErrorToast = (isError: boolean) => {
    const toast = useToast();

    useEffect(() => {
        if (isError) {
            toast();
        }
    }, [isError, toast]);
};

export default useErrorToast;
