import { createSlice } from '@reduxjs/toolkit';

import { LoginForm } from '~/query/types/auth';
import { ApplicationState } from '~/store/configure-store';

export type AuthModalState = typeof initialState;

const initialState = {
    isModal: false,
    dataTestIdModal: '',
    loginData: {} as LoginForm,
    email: '',
};
export const authModalSlice = createSlice({
    name: 'authModal',
    initialState,
    reducers: {
        setAuthModal(state, { payload }) {
            state.isModal = payload;
        },

        setDataTestIdModal(state, { payload }) {
            state.dataTestIdModal = payload;
        },

        setLoginData(state, { payload }) {
            state.loginData = payload || {};
        },
        setEmail(state, { payload }) {
            state.email = payload;
        },

        resetState(state) {
            state.isModal = initialState.isModal;
            state.dataTestIdModal = initialState.dataTestIdModal;
            state.email = initialState.email;
        },
    },
});
export const authModalSelector = (state: ApplicationState) => state.authModal;

export const { setAuthModal, setDataTestIdModal, setLoginData, setEmail, resetState } =
    authModalSlice.actions;
export default authModalSlice.reducer;
