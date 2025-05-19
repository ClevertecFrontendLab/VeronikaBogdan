import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
} from '@chakra-ui/react';

import {
    EMAIL_VERIFICATION_FAILED_MODAL,
    SIGN_IN_ERROR_MODAL,
    SIGN_UP_SUCCESS_MODAL,
} from '~/constants';
import { authModalSelector, setAuthModal, setEmail } from '~/store/auth-modal-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

// import EmailModal from './email-modal';
import EmailVerificationFailedModal from './email-verification-failed-modal';
import LastStepModal from './last-step-modal';
import LoginErrorModal from './login-error-modal';

type AuthModalProps = { onSubmit?: () => void };

const AuthModal = ({ onSubmit }: AuthModalProps) => {
    const dispatch = useAppDispatch();

    const { isModal, dataTestIdModal } = useAppSelector(authModalSelector);

    const handleClose = () => {
        dispatch(setAuthModal(false));
        dispatch(setEmail(''));
    };

    return (
        <Modal onClose={handleClose} isOpen={isModal} size={{ base: 'xs', xl: 'sm' }} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius={16} data-test-id={dataTestIdModal}>
                <ModalCloseButton
                    data-test-id='close-button'
                    w={6}
                    h={6}
                    bg='white'
                    color='black'
                    border='2px solid black'
                    borderRadius='50%'
                />
                <ModalBody p={8}>
                    <Stack alignItems='center' gap={8}>
                        {SIGN_IN_ERROR_MODAL === dataTestIdModal && (
                            <LoginErrorModal onSubmit={onSubmit} />
                        )}
                        {SIGN_UP_SUCCESS_MODAL === dataTestIdModal && <LastStepModal />}
                        {EMAIL_VERIFICATION_FAILED_MODAL === dataTestIdModal && (
                            <EmailVerificationFailedModal />
                        )}
                        {/* <EmailModal /> */}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
