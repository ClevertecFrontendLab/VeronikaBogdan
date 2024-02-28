import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '@redux/api';

import { CheckEmailData, InitialState } from './types';

export const postCheckEmail = createAsyncThunk(
    'check-email/postCheckEmail',
    async (email: CheckEmailData) => {
        try {
            const response = await instance.post('/auth/check-email', { email: email });
            return response;
        } catch (error) {
            return error.response;
        }
    },
);

const initialState: InitialState = {
    data: null,
    isLoading: false,
    isError: false,
    statusCode: 0,
    message: '',
    email: '',
};

const checkEmailSlice = createSlice({
    name: 'check-email',
    initialState,
    reducers: {
        setEmail: (state, { payload }) => {
            state.email = payload;
        },
        setStatusCode: (state, { payload }) => {
            state.statusCode = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postCheckEmail.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postCheckEmail.fulfilled, (state, { payload }) => {
                state.data = payload.data;
                state.statusCode = payload?.status || payload?.data?.statusCode;
                state.message = payload?.data?.message;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(postCheckEmail.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { setEmail, setStatusCode } = checkEmailSlice.actions;

export default checkEmailSlice.reducer;
