export interface LoginUserData {
    email: string;
    password: string;
}

export interface LoginState {
    accessToken: string;
    isLoading: boolean;
    isError: boolean;
}
