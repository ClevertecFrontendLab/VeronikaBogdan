export const SERVER_ERROR = 'SERVER_ERROR';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const MEASURE_UNIT_ERROR = 'MEASURE_UNIT_ERROR';
export const INCORRECT_LOGIN_PASSWORD_ERROR = 'INCORRECT_LOGIN_PASSWORD_ERROR';
export const EMAIL_VERIFIED_ERROR = 'EMAIL_VERIFIED_ERROR';
export const VERIFICATION_CODE_ERROR = 'VERIFICATION_CODE_ERROR';

export const TITLE_EXIST_ERROR = 'TITLE_EXIST_ERROR';
export const NEW_RECIPE_ERROR = 'NEW_RECIPE_ERROR';
export const DRAFT_ERROR = 'DRAFT_ERROR';
export const RECIPE_REMOVE_ERROR = 'RECIPE_REMOVE_ERROR';

export const EMAIL_VERIFIED_SUCCESS = 'EMAIL_VERIFIED_SUCCESS';
export const RESTORE_CREDENTIALS_SUCCESS = 'RESTORE_CREDENTIALS_SUCCESS';

export const PUBLISH_RECIPE_SUCCESS = 'PUBLISH_RECIPE_SUCCESS';
export const DRAFT_SUCCESS = 'DRAFT_SUCCESS';
export const RECIPE_REMOVE_SUCCESS = 'REMOVE_SUCCESS';

const ERROR_TOASTS = {
    [SERVER_ERROR]: {
        title: 'Ошибка сервера',
        description: 'Попробуйте немного позже',
        dataTestId: 'server-error',
    },
    [SEARCH_ERROR]: {
        title: 'Ошибка сервера',
        description: 'Попробуйте поискать снова попозже',
    },
    [MEASURE_UNIT_ERROR]: {
        title: 'Ошибка получения единиц измерения',
        description: 'Обновите страницу или попробуйте позже',
    },
    [INCORRECT_LOGIN_PASSWORD_ERROR]: {
        title: 'Неверный логин или пароль',
        description: 'Попробуйте снова.',
        dataTestId: 'sign-in-error-credentials',
    },
    [EMAIL_VERIFIED_ERROR]: {
        title: 'E-mail не верифицирован',
        description: 'Проверьте почту и перейдите по ссылке.',
        dataTestId: 'sign-in-error-not-verified',
    },
    [VERIFICATION_CODE_ERROR]: {
        title: 'Такого e-mail нет',
        description: 'Попробуйте другой e-mail или проверьте правильность его написания',
        dataTestId: 'send-verification-code-not-exist',
    },
    [TITLE_EXIST_ERROR]: {
        title: 'Ошибка',
        description: 'Рецепт с таким названием уже существует',
    },
    [NEW_RECIPE_ERROR]: {
        title: 'Ошибка сервера',
        description: 'Попробуйте пока сохранить в черновик.',
    },
    [DRAFT_ERROR]: {
        title: 'Ошибка сервера',
        description: 'Не удалось сохранить черновик рецепта',
    },
    [RECIPE_REMOVE_ERROR]: {
        title: 'Ошибка сервера',
        description: 'Не удалось удалить рецепт',
    },
};

const SUCCESS_TOASTS = {
    [EMAIL_VERIFIED_SUCCESS]: {
        title: 'Верификация прошла успешно',
        dataTestId: 'sign-up-verified-ok',
    },
    [RESTORE_CREDENTIALS_SUCCESS]: {
        title: 'Восстановление данных успешно',
        dataTestId: 'restore-credentials-ok',
    },
    [PUBLISH_RECIPE_SUCCESS]: {
        title: 'Рецепт успешно опубликован',
    },
    [DRAFT_SUCCESS]: {
        title: 'Черновик успешно сохранен',
    },
    [RECIPE_REMOVE_SUCCESS]: {
        title: 'Рецепт успешно удален',
    },
};

export const TOASTS = {
    ...ERROR_TOASTS,
    ...SUCCESS_TOASTS,
};
