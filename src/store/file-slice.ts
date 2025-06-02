import { createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type FileState = typeof initialState;

const initialState = {
    file: '',
    inputFileName: '',
};
export const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setRecipeFile(state, { payload }) {
            state.file = payload;
        },
        setInputFileName(state, { payload }) {
            state.inputFileName = payload;
        },
    },
});
export const fileSelector = (state: ApplicationState) => state.file;

export const { setRecipeFile, setInputFileName } = fileSlice.actions;
export default fileSlice.reducer;
