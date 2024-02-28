import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '@redux/api';

import { ChangePasswordData, InitialState } from './types';

export const postChangePassword = createAsyncThunk(
    'change-password/postChangePassword',
    async (changePasswordData: ChangePasswordData) => {
        try {
            const response = await instance.post('/auth/change-password', changePasswordData);
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
    name: 'change-password',
    initialState,
    reducers: {
        setStatus: (state, { payload }) => {
            state.statusCode = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postChangePassword.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postChangePassword.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.statusCode = payload.statusCode;
                state.message = payload.message;
                state.isLoading = false;
                state.isError = false;
            });
    },
});

export const { setStatus } = checkEmailSlice.actions;

export default checkEmailSlice.reducer;
