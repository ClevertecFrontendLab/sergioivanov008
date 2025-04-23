import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from '../configure-store';

export type MainState = typeof initialState;

const initialState = {
    isOpenBurger: false,
    isExcludeAllergens: false,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsOpenBurger(state, action: PayloadAction<boolean>) {
            state.isOpenBurger = action.payload;
        },
        setIsExcludeAllergens(state, action: PayloadAction<boolean>) {
            state.isExcludeAllergens = action.payload;
        },
    },
});

export const { reducer: mainReducer, actions: mainActions } = mainSlice;
export const mainSelector = (state: ApplicationState) => state.main;
