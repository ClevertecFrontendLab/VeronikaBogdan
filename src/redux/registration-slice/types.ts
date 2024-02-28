export interface RegistrationUserData {
    email: string;
    password: string;
    confirm: string;
}

export interface RegistrationState {
    isLoading: boolean;
    isError: boolean;
    status: number;
    data: RegistrationState | null;
}
