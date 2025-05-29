import { AspectRatio, Button, Heading, Image } from '@chakra-ui/react';

import EmptyImage from '~/components/empty-image';
import { IMAGE_HOST } from '~/constants';
import { resetState } from '~/store/auth-modal-slice';
import { fileSelector, setInputFileName, setRecipeFile } from '~/store/file-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

type UploadImageModalProps = { onSave?: (file: string) => void; onRemove?: (file: string) => void };

const UploadImageModal = ({ onSave, onRemove }: UploadImageModalProps) => {
    const dispatch = useAppDispatch();

    const { file, inputFileName } = useAppSelector(fileSelector);

    const handleHide = () => {
        dispatch(resetState());
        dispatch(setRecipeFile(''));
        dispatch(setInputFileName(''));
    };

    const saveFile = () => {
        if (onSave) {
            onSave(file);
            handleHide();
        }
    };

    const saveRemove = () => {
        if (onRemove) {
            onRemove('');
            handleHide();
        }
    };

    return (
        <>
            <Heading variant='errorHeading'>Изображение</Heading>
            <AspectRatio w='200px' ratio={4 / 4}>
                {file ? (
                    <Image
                        src={`${IMAGE_HOST}${file}`}
                        data-test-id='recipe-image-modal-preview-image'
                    />
                ) : (
                    <EmptyImage
                        dataTestIdBlock='recipe-image-modal-image-block'
                        w='full'
                        h='full'
                        inputName={inputFileName}
                        isModal
                    />
                )}
            </AspectRatio>
            {file && (
                <>
                    <Button variant='listCardSolid' size='auth' w='full' onClick={saveFile}>
                        Сохранить
                    </Button>
                    <Button
                        variant='transparentButton'
                        size='auth'
                        w='full'
                        mt='-24px'
                        onClick={saveRemove}
                    >
                        Удалить
                    </Button>
                </>
            )}
        </>
    );
};

export default UploadImageModal;
