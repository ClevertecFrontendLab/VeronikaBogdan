import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

import Picture from '~/assets/png/login-error.png';
import EditPen from '~/assets/svg/white-pen.svg';
import { setAuthModal, setDataTestIdModal } from '~/store/auth-modal-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { recipeSelector, setDraftRecipe } from '~/store/recipe-slice';

const ConfirmationExitModal = () => {
    const dispatch = useAppDispatch();
    const { draftRecipe } = useAppSelector(recipeSelector);

    const handleSave = () => {
        console.log('asdf', draftRecipe);
    };
    const handleExit = () => {
        dispatch(setDraftRecipe({}));
        dispatch(setAuthModal(false));
        dispatch(setDataTestIdModal(''));
    };

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
