import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type MenuState = typeof initialState;

const initialState = {
    isBurgerMenu: false as boolean | null,
};
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setBurgerMenuState(state, { payload }: PayloadAction<boolean | null>) {
            state.isBurgerMenu = payload;
        },
    },
});
export const menuSelector = (state: ApplicationState) => state.menu;

export const { setBurgerMenuState } = menuSlice.actions;
export default menuSlice.reducer;
