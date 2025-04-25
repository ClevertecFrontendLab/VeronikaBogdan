import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type FiltersState = typeof initialState;

const initialState = {
    searchText: '',
    searchTextInput: '',
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
    },
});
export const filtersSelector = (state: ApplicationState) => state.filters;

export const { setSearchTextInput, setSearchText } = filtersSlice.actions;
export default filtersSlice.reducer;
