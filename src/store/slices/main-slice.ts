import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterCustomType, FilterItemType } from '~/components/types';

import { ApplicationState } from '../configure-store';

export type MainState = {
    isOpenBurger: boolean;
    isExcludeAllergens: boolean;
    selectedFilters: Record<FilterCustomType, FilterItemType[]>;
};

const initialState: MainState = {
    isOpenBurger: false,
    isExcludeAllergens: false,
    selectedFilters: {
        allergens: [],
        author: [],
        category: [],
        meat: [],
        garnir: [],
    },
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
        setSelectedFilters(
            state,
            action: PayloadAction<Record<FilterCustomType, FilterItemType[]>>,
        ) {
            state.selectedFilters = action.payload;
        },
    },
});

export const { reducer: mainReducer, actions: mainActions } = mainSlice;
export const mainSelector = (state: ApplicationState) => state.main;
