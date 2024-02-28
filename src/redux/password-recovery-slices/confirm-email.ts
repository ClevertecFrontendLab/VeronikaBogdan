import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '@redux/api';

import { ConfirmEmailData, InitialState } from './types';

export const postConfirmEmail = createAsyncThunk(
    'confirm-email/postConfirmEmail',
    async (confirmEmailData: ConfirmEmailData) => {
        try {
            const response = await instance.post('/auth/confirm-email', confirmEmailData);
            return response.data;
        } catch (error) {
            return error.response.data;
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
                state.data = payload;
                state.statusCode = payload.statusCode;
                state.message = payload.message;
                state.isLoading = false;
                state.isError = false;
            });
        // .addCase(postConfirmEmail.rejected, (state) => {
        //     state.isLoading = false;
        //     state.isError = true;
        // });
    },
});

export const { setEmail, setStatusCode } = checkEmailSlice.actions;

export default checkEmailSlice.reducer;
