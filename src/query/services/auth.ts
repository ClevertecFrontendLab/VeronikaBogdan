import { apiSlice } from '~/query/create-api.ts';
import { AuthResponse, LoginForm, SignUpParams } from '~/query/types/auth';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        saveLogin: builder.mutation<AuthResponse, LoginForm>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            transformErrorResponse: (res) => ({ data: res.data, status: 500 }),
        }),
        saveSignup: builder.mutation<AuthResponse, SignUpParams>({
            query: (body) => ({
                url: '/auth/signup',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useSaveLoginMutation, useSaveSignupMutation } = authApiSlice;
