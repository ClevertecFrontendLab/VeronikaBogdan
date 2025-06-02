import { Button, Heading, Image, Stack, Text, useToast as useChakraToast } from '@chakra-ui/react';

// import { Navigate, useNavigate } from 'react-router';
import Picture from '~/assets/png/login-error.png';
import EditPen from '~/assets/svg/white-pen.svg';
// import { ROUTES } from '~/constants/routes';
import { DRAFT_ERROR, DRAFT_SUCCESS, TITLE_EXIST_ERROR, TOASTS } from '~/constants/toast-texts';
import { useSaveRecipeDraftMutation } from '~/query/services/recipies';
import { resetState, setAuthModal, setDataTestIdModal } from '~/store/auth-modal-slice';
import { setRecipeFile } from '~/store/file-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { recipeSelector, setDraftRecipe, setTitleError } from '~/store/recipe-slice';

type ConfirmationExitProps = {
    saveDraft?: (file: string) => void;
    exit?: (file: string) => void;
};

const ConfirmationExitModal = ({ saveDraft, exit }: ConfirmationExitProps) => {
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    const { draftRecipe, nextLocation } = useAppSelector(recipeSelector);

    const toast = useChakraToast();

    // const isChangedForm = useMemo(() => changedFormState, [changedFormState]);

    const [saveRecipeDraft] = useSaveRecipeDraftMutation();

    const handleHide = () => {
        dispatch(resetState());
        dispatch(setRecipeFile(''));
        // dispatch(setInputFileName(''));
        dispatch(setDataTestIdModal(''));
    };

    const handleSave = () => {
        // saveDraft();
        // console.log('asdf', draftRecipe);
        if (draftRecipe.title) {
            saveRecipeDraft(draftRecipe)
                .unwrap()
                .then(() => {
                    handleHide();
                    saveDraft();

                    toast({
                        status: 'success',
                        ...TOASTS[DRAFT_SUCCESS],
                    });

                    // return <Navigate to={ROUTES.main} />;
                })
                .catch((error) => {
                    toast.closeAll();
                    if (error.status === 409) {
                        toast({
                            status: 'error',
                            ...TOASTS[TITLE_EXIST_ERROR],
                        });
                        return;
                    }
                    if (Math.floor(error.status / 100) === 5) {
                        toast({
                            status: 'error',
                            ...TOASTS[DRAFT_ERROR],
                        });
                    }
                });
        } else {
            dispatch(setTitleError(true));
            handleHide();
        }
    };
    const handleExit = () => {
        dispatch(setDraftRecipe({}));
        dispatch(setAuthModal(false));
        dispatch(setDataTestIdModal(''));

        exit();

        // const location = blocker.location;
        // blocker.reset();

        // navigate(location?.pathname);
    };

    console.log('nextLocation', nextLocation);

    return (
        <>
            <Image src={Picture} w={{ base: '108px', xl: '208px' }} />
            <Stack gap={4}>
                <Heading variant='errorHeading'>Выйти без сохранения?</Heading>
                <Stack gap={0}>
                    <Text textStyle='errorDescription'>
                        Чтобы сохранить, нажмите кнопку сохранить черновик
                    </Text>
                </Stack>
            </Stack>
            <Stack gap={3}>
                <Button
                    type='submit'
                    variant='listCardSolid'
                    size='auth'
                    leftIcon={<Image mr={{ base: 2, xl: 0 }} src={EditPen} />}
                    // type='submit'
                    onClick={handleSave}
                >
                    Сохранить черновик
                </Button>
                <Button
                    variant='listCardOutline'
                    size='auth'
                    // type='submit'
                    onClick={handleExit}
                    // onClick={() => {
                    //     if (!getValues('image')) {
                    //         setError('image', { type: 'required' });
                    //     }

                    //     setPublishState(true);
                    // }}
                >
                    Выйти без сохранения
                </Button>
            </Stack>
        </>
    );
};

export default ConfirmationExitModal;
