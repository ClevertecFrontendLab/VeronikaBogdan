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
    RECIPE_IMAGE_MODAL,
    RECIPE_PREVENTIVE_MODAL,
    RESET_CREDENTIALS_MODAL,
    SEND_EMAIL_MODAL,
    SIGN_IN_ERROR_MODAL,
    SIGN_UP_SUCCESS_MODAL,
    VERIFICATION_CODE_MODAL,
} from '~/constants';
import { LoginForm } from '~/query/types/auth';
import { authModalSelector, resetState } from '~/store/auth-modal-slice';
import { fileSelector, setInputFileName, setRecipeFile } from '~/store/file-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setDraftRecipe } from '~/store/recipe-slice';

import ConfirmationExitModal from './confirmation-exit-modal';
import EmailModal from './email-modal';
import EmailVerificationFailedModal from './email-verification-failed-modal';
import LastStepModal from './last-step-modal';
import LoginErrorModal from './login-error-modal';
import ResetCredentialsModal from './reset-credentials-modal';
import UploadImageModal from './upload-image-modal';
import VerificationCodeModal from './verification-code-modal';

type AuthModalProps = {
    onSubmit?: (data?: LoginForm) => void;
    saveFile?: (file: string) => void;
    removeFile?: (file: string) => void;
};

const AuthModal = ({ onSubmit, saveFile, removeFile }: AuthModalProps) => {
    const dispatch = useAppDispatch();

    const { isModal, dataTestIdModal } = useAppSelector(authModalSelector);
    const { file } = useAppSelector(fileSelector);

    const handleClose = () => {
        dispatch(setInputFileName(''));
        dispatch(resetState());
        dispatch(setRecipeFile(''));
        dispatch(setDraftRecipe({}));
    };

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
                        {(RECIPE_IMAGE_MODAL === dataTestIdModal || file) && (
                            <UploadImageModal onSave={saveFile} onRemove={removeFile} />
                        )}
                        {RECIPE_PREVENTIVE_MODAL === dataTestIdModal && <ConfirmationExitModal />}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
