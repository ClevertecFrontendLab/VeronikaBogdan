export type SignUpParams = {
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
};

export type SignUpForm = SignUpParams & { confirmed: string };

export type LoginForm = {
    login: string;
    password: string;
};

export type SuccessBodyResponse = {
    statusText: string;
    message: string;
};

export type ErrorBodyResponse = {
    message?: string;
    error: string | 'Bad Request';
    statusCode: number;
};

export type AuthResponse = Partial<SuccessBodyResponse> & Partial<ErrorBodyResponse>;
