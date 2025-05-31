import { SmallAddIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    IconButton,
    Image,
    Stack,
    Tag,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { STEP } from '~/app/new-recipe-page/default-values';
import Trash from '~/assets/svg/trash.svg';
import EmptyImage from '~/components/empty-image';
import { IMAGE_HOST, RECIPE_IMAGE_MODAL } from '~/constants';
import { STEP_DESCRIPTION_MAX_LENGTH } from '~/constants/validation';
import { useSaveRecipeImageMutation } from '~/query/services/file';
import { setAuthModal, setDataTestIdModal } from '~/store/auth-modal-slice';
import { fileSelector, setInputFileName, setRecipeFile } from '~/store/file-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

type NewRecipeStepsProps = { required: boolean };

const NewRecipeSteps = ({ required }: NewRecipeStepsProps) => {
    const dispatch = useAppDispatch();
    const {
        register,
        getValues,
        setValue,
        formState: { errors },
    } = useFormContext();

    const { inputFileName } = useAppSelector(fileSelector);

    const [uploadFile] = useSaveRecipeImageMutation();

    const changeStepNumbers = (steps) =>
        steps?.map((step, stepIndex) => ({ ...step, stepNumber: stepIndex + 1 }));

    const handleAddStep = () => {
        getValues('steps').push(STEP);

        setValue('steps', changeStepNumbers(getValues('steps')), { shouldValidate: true });
    };

    const handleRemoveStep = (removedIndex: number) => {
        const changedIngredients = getValues('steps').filter(
            (_, index: number) => index !== removedIndex,
        );

        setValue('steps', changeStepNumbers(changedIngredients), { shouldValidate: true });
    };

    const toggleUploadImageModal = (index: number) => {
        if (inputFileName === '') {
            dispatch(setInputFileName(`steps.${index}.image`));
        }
        dispatch(setAuthModal(true));
        dispatch(setDataTestIdModal(RECIPE_IMAGE_MODAL));
    };

    const uploadImage = (data: FormData, index: number) => {
        uploadFile(data)
            .unwrap()
            .then((event) => {
                dispatch(setRecipeFile(event.url));
            })
            .finally(() => {
                setValue(`steps.${index}.image`, '', { shouldValidate: true });
            });
    };

    return (
        <Stack spacing={{ base: 3, md: 4 }}>
            <Text textStyle='newRecipeName'>Добавьте шаги приготовления</Text>
            {getValues('steps')?.map((step, index) => (
                <Card key={step.stepNumber} direction={{ base: 'column', md: 'row' }}>
                    {step?.image ? (
                        <Image
                            data-test-id={`recipe-steps-image-block-${index}-preview-image`}
                            src={`${IMAGE_HOST}${step?.image}`}
                            borderLeftRadius='lg'
                            w={{ base: '158px', md: '345px' }}
                            objectFit='cover'
                            onClick={() => toggleUploadImageModal(index)}
                        />
                    ) : (
                        <EmptyImage
                            dataTestIdBlock={`recipe-steps-image-block-${index}`}
                            dataTestIdInput={`recipe-steps-image-block-${index}-input-file`}
                            w={{ base: '100%', md: '345px' }}
                            h={{ base: '160px', md: '100%' }}
                            inputName={`steps.${index}.image`}
                            onClick={() => toggleUploadImageModal(index)}
                            onChangeFile={(data) => uploadImage(data, index)}
                        />
                    )}
                    <CardBody
                        px={{ base: 2, xl: 6 }}
                        pt={{ base: 2, xl: 5 }}
                        pb={{ base: 2, xl: 4 }}
                    >
                        <Flex justify='space-between'>
                            <Tag textStyle='text' mb={{ base: 3, xl: 4 }}>
                                Шаг {step.stepNumber}
                            </Tag>
                            {index > 0 && (
                                <IconButton
                                    aria-label='Remove step'
                                    bg='white'
                                    borderRadius='full'
                                    icon={<Image src={Trash} />}
                                    data-test-id={`recipe-steps-remove-button-${index}`}
                                    onClick={() => handleRemoveStep(index)}
                                />
                            )}
                        </Flex>
                        <Textarea
                            data-test-id={`recipe-steps-description-${index}`}
                            placeholder='Шаг'
                            size='recipe'
                            variant={
                                errors?.steps && errors?.steps[index]?.description
                                    ? 'errorDescription'
                                    : 'recipeDescription'
                            }
                            {...register(`steps.${index}.description`, {
                                required,
                                maxLength: STEP_DESCRIPTION_MAX_LENGTH,
                            })}
                        />
                    </CardBody>
                </Card>
            ))}
            <Flex justify='end'>
                <Button
                    variant='listCardOutline'
                    size='newStep'
                    rightIcon={
                        <Box bg='black' borderRadius='full' boxSize={4}>
                            <SmallAddIcon color='white' mt='-5px' />
                        </Box>
                    }
                    onClick={handleAddStep}
                >
                    Новый шаг
                </Button>
            </Flex>
        </Stack>
    );
};

export default NewRecipeSteps;
