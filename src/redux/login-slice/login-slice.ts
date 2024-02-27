import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '@redux/api';

import { LoginState, LoginUserData } from './types';

export const postLogin = createAsyncThunk(
    'accessToken/postLogin',
    async (loginUserData: LoginUserData) => {
        const response = await instance.post('/auth/login', loginUserData);

        localStorage.setItem('accessToken', response.data.accessToken);

        return response.data;
    },
);

const initialState: LoginState = {
    accessToken: '',
    isLoading: false,
    isError: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setError: (state, { payload }) => {
            state.isError = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postLogin.fulfilled, (state, { payload }) => {
                state.accessToken = payload?.accessToken;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(postLogin.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { setError } = loginSlice.actions;

export default loginSlice.reducer;
