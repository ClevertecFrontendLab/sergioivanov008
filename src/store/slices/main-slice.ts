import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterCustomType, FilterItemType, SelectedFiltersType } from '~/components/types';
import { EMPTY_SELECTED_FILTERS } from '~/constants';

import { ApplicationState } from '../configure-store';

export type MainState = {
    isOpenBurger: boolean;
    isExcludeAllergens: boolean;
    isCanFiltered: boolean;
    selectedFilters: SelectedFiltersType;
};

const initialState: MainState = {
    isOpenBurger: false,
    isExcludeAllergens: false,
    isCanFiltered: false,
    selectedFilters: EMPTY_SELECTED_FILTERS,
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
        setIsCanFiltered(state, action: PayloadAction<boolean>) {
            state.isCanFiltered = action.payload;
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
