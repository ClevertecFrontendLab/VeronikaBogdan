export const SERVER_ERROR = 'serverError';
export const SEARCH_ERROR = 'searchError';

const ERROR_TOASTS = {
    [SERVER_ERROR]: {
        title: 'Ошибка сервера',
        description: 'Попробуйте немного позже',
    },
    [SEARCH_ERROR]: {
        title: 'Ошибка сервера',
        description: 'Попробуйте поискать снова попозже',
    },
};

const SUCCESS_TOASTS = {};

export const TOASTS = {
    ...ERROR_TOASTS,
    ...SUCCESS_TOASTS,
};
