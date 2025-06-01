import {
    Button,
    Card,
    CardBody,
    Flex,
    Grid,
    GridItem,
    Image,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Stack,
    Text,
    Textarea,
    useOutsideClick,
    useToast as useChakraToast,
} from '@chakra-ui/react';
import { useMemo, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import { DEFAULT_VALUES } from '~/app/new-recipe-page/default-values';
import NewRecipeIngredients from '~/app/new-recipe-page/ingredients';
import NewRecipeSteps from '~/app/new-recipe-page/steps';
import EditPen from '~/assets/svg/edit-pen.svg';
import AuthModal from '~/components/auth-modal';
import EmptyImage from '~/components/empty-image';
import MultiSelect from '~/components/multi-select';
import { IMAGE_HOST, RECIPE_IMAGE_MODAL } from '~/constants';
import { ROUTES } from '~/constants/routes';
import {
    DRAFT_ERROR,
    DRAFT_SUCCESS,
    MEASURE_UNIT_ERROR,
    NEW_RECIPE_ERROR,
    PUBLISH_RECIPE_SUCCESS,
    TITLE_EXIST_ERROR,
    TOASTS,
} from '~/constants/toast-texts';
import { INPUT_MAX_LENGTH, RECIPE_DESCRIPTION_MAX_LENGTH, TIME_MAX } from '~/constants/validation';
import useToast from '~/hooks/use-error-toast';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useSaveRecipeImageMutation } from '~/query/services/file';
import {
    useGetMeasureUnitsQuery,
    useGetRecipeQuery,
    useSaveRecipeDraftMutation,
    useSaveRecipeMutation,
    useUpdateRecipeMutation,
} from '~/query/services/recipies';
import { Recipe } from '~/query/types/recipies';
import { authModalSelector, setAuthModal, setDataTestIdModal } from '~/store/auth-modal-slice';
import { fileSelector, setInputFileName, setRecipeFile } from '~/store/file-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { getCategoryById, getRootCategory } from '~/utils/current-paths';

const NewRecipePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { recipeId } = useParams();

    const toast = useChakraToast();

    const [isPublish, setPublishState] = useState(true);
    const { inputFileName, file } = useAppSelector(fileSelector);
    const { dataTestIdModal } = useAppSelector(authModalSelector);

    const { data: recipeCard } = useGetRecipeQuery(recipeId, { skip: !recipeId });
    const { data: categories } = useGetCategoriesQuery();
    const { isError: isMeasureError } = useGetMeasureUnitsQuery();

    const [uploadFile] = useSaveRecipeImageMutation();
    const [saveRecipe] = useSaveRecipeMutation();
    const [updateRecipe] = useUpdateRecipeMutation();
    const [saveRecipeDraft] = useSaveRecipeDraftMutation();

    const methods = useForm<Recipe>({
        mode: 'onSubmit',
        defaultValues: DEFAULT_VALUES,
        values: recipeId ? recipeCard : DEFAULT_VALUES,
    });
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        setError,
        clearErrors,
        reset,
        formState: { errors },
    } = methods;

    console.log(getValues());

    const formRef = useRef(null);

    const subcategories = useMemo(
        () =>
            categories?.uniqueSubcategories?.map((subcategory) => ({
                label: subcategory.title,
                value: subcategory._id,
            })) || [],
        [categories],
    );

    const onSubmit = (recipe: Recipe) => {
        const changedRecipe = {
            ...recipe,
            time: +recipe.time,
            portions: +recipe.portions,
            ingredients: recipe.ingredients.map((ingredient) => ({
                ...ingredient,
                count: +ingredient.count,
            })),
        };

        const getSuccessActions = (newRecipe) => {
            reset();

            toast({
                status: 'success',
                ...TOASTS[PUBLISH_RECIPE_SUCCESS],
            });

            navigate(
                `/${getRootCategory(categories?.all, newRecipe.categoriesIds[0])?.category}/${getCategoryById(categories?.all, newRecipe?.categoriesIds[0])?.category}/${newRecipe._id}`,
            );
        };

        const getErrorActions = (error) => {
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
                    ...TOASTS[NEW_RECIPE_ERROR],
                });
            }
        };

        if (getValues('image')) {
            if (recipeId) {
                updateRecipe(changedRecipe).unwrap().then(getSuccessActions).catch(getErrorActions);
            } else {
                saveRecipe(changedRecipe).unwrap().then(getSuccessActions).catch(getErrorActions);
            }
        } else {
            saveRecipeDraft(changedRecipe)
                .unwrap()
                .then(() => {
                    reset();

                    toast({
                        status: 'success',
                        ...TOASTS[DRAFT_SUCCESS],
                    });

                    navigate(ROUTES.main);
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
        }
    };

    const saveFile = (file: string) => {
        setValue(inputFileName, file, { shouldValidate: true });
        clearErrors('image');
    };

    const toggleUploadImageModal = () => {
        if (inputFileName === '') {
            dispatch(setInputFileName('image'));
        }
        dispatch(setAuthModal(true));
        dispatch(setDataTestIdModal(RECIPE_IMAGE_MODAL));
    };

    const toggleEditImageModal = () => {
        toggleUploadImageModal();
        dispatch(setRecipeFile(getValues('image')));
    };

    const uploadImage = (data: FormData) => {
        uploadFile(data)
            .unwrap()
            .then((event) => {
                dispatch(setRecipeFile(event.url));
            })

            .finally(() => {
                setValue('image', '', { shouldValidate: true });
            });
    };

    useToast({ isLoaded: isMeasureError, status: 'error', toastType: MEASURE_UNIT_ERROR });

    useOutsideClick({
        ref: formRef,
        handler: () => {
            if (
                JSON.stringify(DEFAULT_VALUES) !== JSON.stringify(getValues()) &&
                dataTestIdModal !== RECIPE_IMAGE_MODAL &&
                !file
            ) {
                console.log(
                    'modal exit',
                    JSON.stringify(DEFAULT_VALUES) === JSON.stringify(getValues()),
                );
                // dispatch(setAuthModal(true));
                // dispatch(setDataTestIdModal(RECIPE_PREVENTIVE_MODAL));
                // dispatch(setDraftRecipe(getValues()));
            }
        },
    });

    // console.log('isDraft', isPublish, errors, getValues());

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} data-test-id='recipe-form' ref={formRef}>
                <Stack
                    spacing={{ base: 4, xl: 10 }}
                    pb={{ base: '100px', xl: 8 }}
                    paddingTop={{ base: '80px', xl: '135px' }}
                    width={{ xl: '108%', '3xl': '100%' }}
                >
                    <Card
                        direction={{ base: 'column', md: 'row' }}
                        variant='page'
                        layerStyle='contentContainer'
                    >
                        {getValues('image') ? (
                            <Image
                                data-test-id='recipe-image-block-preview-image'
                                src={`${IMAGE_HOST}${getValues('image')}`}
                                borderRadius='lg'
                                h={{ base: '224px', md: '225px', xl: '411px' }}
                                w={{ base: '100%', md: '230px', xl: '353px', '3xl': '554px' }}
                                objectFit='cover'
                                onClick={toggleEditImageModal}
                            />
                        ) : (
                            <EmptyImage
                                dataTestIdBlock='recipe-image-block'
                                dataTestIdInput='recipe-image-block-input-file'
                                h={{ base: '224px', md: '225px', xl: '411px' }}
                                w={{ base: '100%', md: '230px', xl: '353px', '3xl': '554px' }}
                                isError={Boolean(errors.image)}
                                inputName='image'
                                inputOptions={{ required: isPublish }}
                                onClick={toggleUploadImageModal}
                                onChangeFile={uploadImage}
                            />
                        )}
                        <CardBody
                            pl={{ base: 0, md: 5, xl: 6 }}
                            pt={{ base: 4, md: 0 }}
                            pr={{ base: 0, '3xl': 28 }}
                        >
                            <Stack gap={{ base: 2, xl: 6 }}>
                                <Grid
                                    templateColumns={{
                                        base: '115px 63%',
                                        md: '1fr 1.1fr',
                                        xl: '1fr 1.7fr',
                                        '3xl': '1fr 1.2fr',
                                    }}
                                    gap={{ base: 2, md: 6 }}
                                    mb={{ xl: 2 }}
                                >
                                    <GridItem
                                        h='10'
                                        alignContent='center'
                                        textStyle='newRecipeName'
                                    >
                                        Выберите не менее 3-х тегов
                                    </GridItem>
                                    <GridItem h='10'>
                                        <MultiSelect
                                            placeholder='Выберите из списка...'
                                            options={subcategories}
                                            selectedItems={getValues('categoriesIds') || []}
                                            selectItems={(items) =>
                                                setValue('categoriesIds', items, {
                                                    shouldValidate: true,
                                                })
                                            }
                                            dataTestIdButton='recipe-categories'
                                            noWrapOptions
                                        />
                                    </GridItem>
                                </Grid>
                                <Input
                                    data-test-id='recipe-title'
                                    type='text'
                                    size='lg'
                                    variant={errors.title ? 'recipeError' : 'recipeGreen'}
                                    placeholder='Название рецепта'
                                    {...register('title', {
                                        required: true,
                                        maxLength: INPUT_MAX_LENGTH,
                                    })}
                                />
                                <Textarea
                                    data-test-id='recipe-description'
                                    placeholder='Краткое описание рецепта'
                                    size='recipe'
                                    variant={
                                        errors.description
                                            ? 'errorDescription'
                                            : 'recipeDescription'
                                    }
                                    {...register('description', {
                                        required: isPublish,
                                        maxLength: RECIPE_DESCRIPTION_MAX_LENGTH,
                                    })}
                                />
                                <Flex gap={{ base: 4, xl: 6 }}>
                                    <Text textStyle='newRecipeName' alignContent='center'>
                                        На сколько человек ваш рецепт?
                                    </Text>
                                    <NumberInput
                                        min={1}
                                        step={1}
                                        w='72px'
                                        variant={errors.portions ? 'recipeError' : ''}
                                    >
                                        <NumberInputField
                                            data-test-id='recipe-portions'
                                            placeholder='4'
                                            value={getValues('portions')}
                                            {...register('portions', {
                                                required: isPublish,
                                                min: 1,
                                            })}
                                        />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper data-test-id='increment-stepper' />
                                            <NumberDecrementStepper data-test-id='decrement-stepper' />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Flex>
                                <Flex gap={{ base: 4, xl: 6 }}>
                                    <Text textStyle='newRecipeName' alignContent='center'>
                                        Сколько времени готовить в минутах?
                                    </Text>
                                    <NumberInput
                                        min={1}
                                        step={1}
                                        w='72px'
                                        variant={errors.time ? 'recipeError' : ''}
                                    >
                                        <NumberInputField
                                            data-test-id='recipe-time'
                                            placeholder='30'
                                            {...register('time', {
                                                required: isPublish,
                                                max: TIME_MAX,
                                                min: 1,
                                            })}
                                        />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper data-test-id='increment-stepper' />
                                            <NumberDecrementStepper data-test-id='decrement-stepper' />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Stack spacing={{ base: 6, xl: 10 }} layerStyle='recipeContainer'>
                        <NewRecipeIngredients required={isPublish} />
                        <NewRecipeSteps required={isPublish} />
                        <Flex direction={{ base: 'column', md: 'row' }} gap={5} justify='center'>
                            <Button
                                variant='listCardOutline'
                                size='auth'
                                leftIcon={<Image mr={{ base: 2, xl: 0 }} src={EditPen} />}
                                data-test-id='recipe-save-draft-button'
                                type='submit'
                                onClick={() => {
                                    setPublishState(false);
                                }}
                            >
                                Сохранить черновик
                            </Button>
                            <Button
                                variant='listCardSolid'
                                size='auth'
                                data-test-id='recipe-publish-recipe-button'
                                type='submit'
                                onClick={() => {
                                    if (!getValues('image')) {
                                        setError('image', { type: 'required' });
                                    }

                                    setPublishState(true);
                                }}
                            >
                                Опубликовать рецепт
                            </Button>
                        </Flex>
                    </Stack>
                </Stack>
                <AuthModal saveFile={saveFile} removeFile={saveFile} />
            </form>
        </FormProvider>
    );
};

export default NewRecipePage;
