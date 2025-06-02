import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type RecipeState = typeof initialState;

const initialState = {
    draftRecipe: {},

    changedFormState: false,
    titleError: false,

    nextLocation: '',
};
export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setDraftRecipe(state, { payload }) {
            state.draftRecipe = payload;
        },
        setChangedFormState(state, { payload }) {
            state.changedFormState = payload;
        },
        setTitleError(state, { payload }) {
            state.titleError = payload;
        },
        setNextLocation(state, { payload }) {
            state.nextLocation = payload || '';
        },
    },
});
export const recipeSelector = (state: ApplicationState) => state.recipe;

export const { setDraftRecipe, setChangedFormState, setTitleError, setNextLocation } =
    recipeSlice.actions;
export default recipeSlice.reducer;
