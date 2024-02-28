export type CheckEmailData = {
    email: string;
};

export type ConfirmEmailData = {
    email: string;
    code: string;
};

export type ChangePasswordData = {
    password: string;
    confirmPassword: string;
};

export type Message = {
    message: string;
};

export type ResponseData = {
    email: string;
    message: string;
};

export type ErrorState = {
    statusCode: number;
    error: string;
    message: string;
};

export type InitialState = {
    data: ResponseData | ErrorState | null;
    isLoading: boolean;
    isError: boolean;
    statusCode: number;
    message: string;
    email: string;
};
