import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type MenuState = typeof initialState;

const initialState = {
    isBurgerMenu: false,
    category: '',
    subcategory: '',
};
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setBurgerMenuState(state) {
            state.isBurgerMenu = !state.isBurgerMenu;
        },

        setCategory(state, { payload }) {
            state.category = payload;
        },
        setSubcategory(state, { payload }) {
            state.subcategory = payload;
        },
    },
});
export const menuSelector = (state: ApplicationState) => state.menu;

export const { setBurgerMenuState, setCategory, setSubcategory } = menuSlice.actions;
export default menuSlice.reducer;
