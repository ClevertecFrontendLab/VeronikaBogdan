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
    RESET_CREDENTIALS_MODAL,
    SEND_EMAIL_MODAL,
    SIGN_IN_ERROR_MODAL,
    SIGN_UP_SUCCESS_MODAL,
    VERIFICATION_CODE_MODAL,
} from '~/constants';
import { LoginForm } from '~/query/types/auth';
import { authModalSelector, resetState } from '~/store/auth-modal-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

import EmailModal from './email-modal';
import EmailVerificationFailedModal from './email-verification-failed-modal';
import LastStepModal from './last-step-modal';
import LoginErrorModal from './login-error-modal';
import ResetCredentialsModal from './reset-credentials-modal';
import VerificationCodeModal from './verification-code-modal';

type AuthModalProps = { onSubmit?: (data?: LoginForm) => void };

const AuthModal = ({ onSubmit }: AuthModalProps) => {
    const dispatch = useAppDispatch();

    const { isModal, dataTestIdModal } = useAppSelector(authModalSelector);

    const handleClose = () => dispatch(resetState());

    return (
        <Modal onClose={handleClose} isOpen={isModal} size={{ base: 'xs', xl: 'sm' }} isCentered>
            <ModalOverlay backdropFilter='blur(2px)' bg='blackAlpha.300' />
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
                        {SEND_EMAIL_MODAL === dataTestIdModal && <EmailModal />}
                        {VERIFICATION_CODE_MODAL === dataTestIdModal && <VerificationCodeModal />}
                        {RESET_CREDENTIALS_MODAL === dataTestIdModal && <ResetCredentialsModal />}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
