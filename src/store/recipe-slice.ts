import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type RecipeState = typeof initialState;

const initialState = {
    draftRecipe: {},
};
export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setDraftRecipe(state, { payload }) {
            state.draftRecipe = payload;
        },
    },
});
export const recipeSelector = (state: ApplicationState) => state.recipe;

export const { setDraftRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
