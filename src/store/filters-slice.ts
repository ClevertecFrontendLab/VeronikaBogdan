import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type FiltersState = typeof initialState;

const initialState = {
    searchText: '',
    searchTextInput: '',

    isAllergens: false,
    allergens: [] as string[],
    otherAllergen: '',
};
export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchTextInput(state, { payload }) {
            state.searchTextInput = payload;
        },
        setSearchText(state) {
            state.searchText = state.searchTextInput;
        },

        toggleAllergens(state) {
            state.isAllergens = !state.isAllergens;

            if (!state.isAllergens) {
                state.allergens = initialState.allergens;
            }
        },
        setAllergens(state, { payload }) {
            state.allergens = payload;
        },
        setOtherAllergen(state, { payload }) {
            state.otherAllergen = payload;
        },
        addOtherAllergen(state) {
            state.allergens.push(state.otherAllergen);
            state.otherAllergen = initialState.otherAllergen;
        },
    },
});
export const filtersSelector = (state: ApplicationState) => state.filters;

export const {
    setSearchTextInput,
    setSearchText,

    toggleAllergens,
    setAllergens,
    setOtherAllergen,
    addOtherAllergen,
} = filtersSlice.actions;
export default filtersSlice.reducer;
