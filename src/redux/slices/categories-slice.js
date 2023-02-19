/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    isError: false,
    canUse: false
  },
  reducers: {
    getCategoriesFetch: (state) => {
        state.isLoading = true;
    },
    getCategoriesSuccess: (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.canUse = true;
    },
    getCategoriesFailure: (state) => {
        state.categories = [];
        state.isLoading = false;
        state.isError = true;
        state.canUse = false;
    },
    setIsErrorCategories: (state, action) => {
        state.isError = action.payload;
    },
    setCanUseCategories: (state, action) => {
        state.canUse = action.payload;
    },
    deleteCategories: (state) => {
        state.categories = [];
    }
  }
})

export const {
    getCategoriesFetch,
    getCategoriesSuccess,
    getCategoriesFailure,
    setIsErrorCategories,
    setCanUseCategories,
    deleteCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
