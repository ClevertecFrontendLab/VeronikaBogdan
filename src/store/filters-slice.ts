import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type FiltersState = typeof initialState;

const initialState = {
    searchText: '',
    searchTextInput: '',

    isAllergens: false,
    allergens: [] as string[],
    otherAllergen: '',

    filters: {
        categories: [] as string[],
        authors: [] as string[],
        meat: [] as string[],
        side: [] as string[],
        isAllergens: false,
        newAllergen: '',
        allergens: [] as string[],
    },
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

        setFilters(state, { payload }: PayloadAction<{ name: string; value: string[] | boolean }>) {
            const { name, value } = payload;

            state.filters[name] = value;
        },
        addNewAllergen(state) {
            state.filters.allergens.push(state.filters.newAllergen);
            state.filters.newAllergen = initialState.filters.newAllergen;
        },
        clearFilters(state) {
            state.filters = initialState.filters;
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

    setFilters,
    addNewAllergen,
    clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
