import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from '../configure-store';

export type MainState = {
    isOpenBurger: boolean;
    isExcludeAllergens: boolean;
    selectedAllergens: string[];
};

const initialState: MainState = {
    isOpenBurger: false,
    isExcludeAllergens: false,
    selectedAllergens: [],
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
        setSelectedAllergens(state, action: PayloadAction<string[]>) {
            state.selectedAllergens = action.payload;
        },
    },
});

export const { reducer: mainReducer, actions: mainActions } = mainSlice;
export const mainSelector = (state: ApplicationState) => state.main;
