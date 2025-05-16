export type SignUpParams = {
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
};

export type SignUpForm = SignUpParams & { confirmed: string };
