import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '@redux/api';

import { ConfirmEmailData, InitialState } from './types';

export const postConfirmEmail = createAsyncThunk(
    'confirm-email/postConfirmEmail',
    async (confirmEmailData: ConfirmEmailData) => {
        try {
            const response = await instance.post('/auth/confirm-email', confirmEmailData);
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
    name: 'confirm-email',
    initialState,
    reducers: {
        setStatusCode: (state, { payload }) => {
            state.statusCode = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postConfirmEmail.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postConfirmEmail.fulfilled, (state, { payload }) => {
                state.statusCode = payload.status;
                state.isLoading = false;
                state.isError = false;
            });
    },
});

export const { setStatusCode } = checkEmailSlice.actions;

export default checkEmailSlice.reducer;
