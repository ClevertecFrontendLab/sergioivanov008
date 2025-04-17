import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/query/create-api';

import appReducer, { appSlice } from './app-slice';
import { mainReducer, mainSlice } from './slices/main-slice';
const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [mainSlice.name]: mainReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
