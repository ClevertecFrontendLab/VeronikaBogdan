import { useToast as useChakraToast } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';

import { TOASTS } from '~/constants/toast-texts';

type ToastProps = {
    isLoaded: boolean;
    status: 'info' | 'warning' | 'success' | 'error' | 'loading';
    toastType: string;
};

const useToast = ({ isLoaded, status, toastType }: ToastProps) => {
    const toast = useChakraToast();

    const options = useMemo(
        () => ({
            status,
            ...TOASTS[toastType as keyof typeof TOASTS],
        }),
        [status, toastType],
    );

    useEffect(() => {
        if (isLoaded) {
            toast(options);
        }
    }, [isLoaded, toast, options]);
};

export default useToast;
