import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './slices/aside-slice';

export const store = configureStore({
    reducer: {
        aside: asideReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
