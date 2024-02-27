export interface LoginUserData {
    email: string;
    password: string;
}

export interface LoginFormUserData {
    email: string;
    password: string;
    remember: boolean | undefined;
}

export interface LoginState {
    accessToken: string;
    isLoading: boolean;
    isError: boolean;
}
