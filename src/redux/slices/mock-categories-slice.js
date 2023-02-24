/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const mockCatgories = [
    {
        name: 'Бизнес',
        path: 'business',
        id: 1
    },
    {
        name: 'Психология',
        path: 'psychology',
        id: 2
    },
    {
        name: 'Родителям',
        path: 'parents',
        id: 3
    },
    {
        name: 'Нон-фикшн',
        path: 'non-fiction',
        id: 4
    },
    {
        name: 'Художественная литература',
        path: 'fiction',
        id: 5
    },
    {
        name: 'Программирование',
        path: 'programming',
        id: 6
    },
    {
        name: 'Хобби',
        path: 'hobby',
        id: 7
    },
    {
        name: 'Дизайн',
        path: 'design',
        id: 8
    },
    {
        name: 'Детские',
        path: 'childish',
        id: 9
    },
    {
        name: 'Другое',
        path: 'other',
        id: 10
    }
];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    // categories: [],
    categories: mockCatgories,
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
