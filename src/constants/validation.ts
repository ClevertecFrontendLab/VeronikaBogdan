export const INPUT_MIN_LENGTH = 5;
export const INPUT_MAX_LENGTH = 50;
export const PASSWORD_MIN_LENGTH = 8;
export const SUBCATEGORIES_MAX = 3;
export const TIME_MAX = 10000;
export const RECIPE_DESCRIPTION_MAX_LENGTH = 500;
export const STEP_DESCRIPTION_MAX_LENGTH = 300;

export const FIRSTNAME_REQUIRED = 'Введите имя';
export const LASTNAME_REQUIRED = 'Введите фамилию';
export const EMAIL_REQUIRED = 'Введите e-mail';
export const LOGIN_REQUIRED = 'Введите логин';
export const PASSWORD_REQUIRED = 'Введите пароль';
export const MATCH_FORMAT_ERROR = 'Не соответствует формату';
export const CONFIRMED_REQUIRED = 'Повторите пароль';
export const PASSWORDS_MATCH_REQUIRED = 'Пароли должны совпадать';

export const validateByValueMessage = (value: number, message: string) => ({ value, message });

export const validateByMinLength = validateByValueMessage(INPUT_MIN_LENGTH, MATCH_FORMAT_ERROR);
export const validatePasswordByMinLength = validateByValueMessage(
    PASSWORD_MIN_LENGTH,
    MATCH_FORMAT_ERROR,
);
export const validateByMaxLength = validateByValueMessage(
    INPUT_MAX_LENGTH,
    `Максимальная длина ${INPUT_MAX_LENGTH} символов`,
);

export const validateByLetters = (username: string) => {
    const firstLetterValidation = /^[А-Я]/.test(username);
    const symbolsValidation = /^[А-я|-]+$/.test(username);

    if (!firstLetterValidation) return 'Должно начинаться с кириллицы А-Я';
    if (!symbolsValidation) return 'Только кириллица А-Я, и "-"';
};

export const hasEmail = (email: string) =>
    /^[@\w]+@[@\w]+\.[@\w]+$/.test(email) || 'Введите корректный e-mail';

export const hasLogin = (login: string) => /^[A-z0-9!@#$&_+-.]+$/.test(login) || MATCH_FORMAT_ERROR;

export const hasPassword = (password: string) => {
    const isCapitalLetter = /[A-Z]/.test(password);
    const isDigit = /[0-9]/.test(password);
    const isPattern = /^[A-z0-9!@#$&_+-.]+$/.test(password);

    const validation = isCapitalLetter && isDigit && isPattern;

    return validation || MATCH_FORMAT_ERROR;
};

export const hasConfirmedPassword = (confirmed: string, password: string) =>
    confirmed === password || PASSWORDS_MATCH_REQUIRED;
