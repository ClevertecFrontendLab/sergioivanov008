import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './slices/aside-slice';
import loadersReducer from './slices/loaders-slice';

export const store = configureStore({
    reducer: {
        aside: asideReducer,
        loaders: loadersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
