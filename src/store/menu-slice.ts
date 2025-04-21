import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type MenuState = typeof initialState;

const initialState = {
    isBurgerMenu: false,
};
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setBurgerMenuState(state) {
            state.isBurgerMenu = !state.isBurgerMenu;
        },
    },
});
export const menuSelector = (state: ApplicationState) => state.menu;

export const { setBurgerMenuState } = menuSlice.actions;
export default menuSlice.reducer;
