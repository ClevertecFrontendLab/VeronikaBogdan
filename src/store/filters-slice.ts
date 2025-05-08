import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe } from '~/query/types/recipies';
import { ApplicationState } from '~/store/configure-store';

export type FiltersState = typeof initialState;

const initialState = {
    searchText: '',
    searchTextInput: '',

    isAllergens: false,
    allergens: [] as string[],
    otherAllergen: '',

    isFindRecipe: false,
    filters: {
        categories: [] as string[],
        authors: [] as string[],
        meat: [] as string[],
        side: [] as string[],
        isAllergens: false,
        newAllergen: '',
        allergens: [] as string[],
    },

    firstLoadedRecipes: [] as Recipe[],
    currentRecipes: [] as Recipe[],
    previousRecipes: [] as Recipe[],
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

        toggleFindRecipe(state, { payload }) {
            state.isFindRecipe = payload;

            if (payload) {
                state.allergens = Object.values(state.filters)
                    .filter((tag) => tag && tag !== true)
                    .flat();
            }
        },

        setRecipes(state, { payload }: PayloadAction<Recipe[]>) {
            if (state.firstLoadedRecipes.length === 0) {
                state.firstLoadedRecipes = payload;
            }

            state.previousRecipes = state.currentRecipes;
            state.currentRecipes = payload.length > 0 ? payload : state.firstLoadedRecipes;
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

    toggleFindRecipe,

    setRecipes,
} = filtersSlice.actions;
export default filtersSlice.reducer;
