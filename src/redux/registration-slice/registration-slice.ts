import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '@redux/api';

import { RegistrationState, RegistrationUserData } from './types';

export const postRegistration = createAsyncThunk(
    'registration/postRegistration',
    async ({ email, password }: RegistrationUserData) => {
        try {
            const response = await instance.post('/auth/registration', {
                email: email,
                password: password,
            });

            return response.status;
        } catch (error) {
            return error.response.status;
        }
    },
);

const initialState: RegistrationState = {
    isLoading: false,
    isError: false,
    status: 0,
    data: null,
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationUserData: (state, { payload }) => {
            state.data = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postRegistration.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postRegistration.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.status = payload;
            })
            .addCase(postRegistration.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.status = payload;
            });
    },
});

export const { setRegistrationUserData } = registrationSlice.actions;

export default registrationSlice.reducer;
