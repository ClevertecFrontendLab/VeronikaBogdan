import { JWT_TOKEN_NAME } from '~/constants';
import { apiSlice } from '~/query/create-api.ts';
import {
    AuthResponse,
    LoginForm,
    ResetPasswordForm,
    SendEmailForm,
    SignUpParams,
    VerifiedOtpCodeForm,
} from '~/query/types/auth';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        saveLogin: builder.mutation<AuthResponse, LoginForm>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                const { meta } = await queryFulfilled;

                const response = meta?.response as Response;

                const authAccessHeader = response.headers.get('Authentication-Access');

                localStorage.setItem(JWT_TOKEN_NAME, String(authAccessHeader));
            },
        }),
        saveSignup: builder.mutation<AuthResponse, SignUpParams>({
            query: (body) => ({
                url: '/auth/signup',
                method: 'POST',
                body,
            }),
        }),
        saveForgotPassword: builder.mutation<AuthResponse, SendEmailForm>({
            query: (body) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body,
            }),
        }),
        saveVerificationCode: builder.mutation<AuthResponse, VerifiedOtpCodeForm>({
            query: (body) => ({
                url: '/auth/verify-otp',
                method: 'POST',
                body,
            }),
        }),
        saveResetPassword: builder.mutation<AuthResponse, ResetPasswordForm>({
            query: (body) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const {
    useSaveLoginMutation,
    useSaveSignupMutation,
    useSaveForgotPasswordMutation,
    useSaveVerificationCodeMutation,
    useSaveResetPasswordMutation,
} = authApiSlice;
