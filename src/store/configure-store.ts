import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/query/create-api';

import appReducer, { appSlice } from './app-slice';
import authModalReducer, { authModalSlice } from './auth-modal-slice';
import fileReducer, { fileSlice } from './file-slice';
import filtersReducer, { filtersSlice } from './filters-slice';
import menuReducer, { menuSlice } from './menu-slice';
import recipeReducer, { recipeSlice } from './recipe-slice';

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [authModalSlice.name]: authModalReducer,
    [fileSlice.name]: fileReducer,
    [filtersSlice.name]: filtersReducer,
    [menuSlice.name]: menuReducer,
    [recipeSlice.name]: recipeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
