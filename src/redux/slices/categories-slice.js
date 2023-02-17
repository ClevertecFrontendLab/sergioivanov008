/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// const mockCategories = [
//     {
//         'id': 'mcj1',
//         'category': 'books',
//         'categoryName': 'Все книги',
//         'categoryCount': null
//     },
//     {
//         'id': 'mcj2',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'categoryCount': 14
//     },
//     {
//         'id': 'mcj3',
//         'category': 'detective',
//         'categoryName': 'Детективы',
//         'categoryCount': 8
//     },
//     {
//         'id': 'mcj4',
//         'category': 'children',
//         'categoryName': 'Детские книги',
//         'categoryCount': 14
//     },
//     {
//         'id': 'mcj5',
//         'category': 'foreign',
//         'categoryName': 'Зарубежная литература',
//         'categoryCount': 2
//     },
//     {
//         'id': 'mcj6',
//         'category': 'history',
//         'categoryName': 'История',
//         'categoryCount': 5
//     },
//     {
//         'id': 'mcj7',
//         'category': 'classic',
//         'categoryName': 'Классическая литература',
//         'categoryCount': 12
//     },
//     {
//         'id': 'mcj8',
//         'category': 'psychology',
//         'categoryName': 'Книги по психологии',
//         'categoryCount': 11
//     },
//     {
//         'id': 'mcj9',
//         'category': 'computers',
//         'categoryName': 'Компьютерная литература',
//         'categoryCount': 54
//     },
//     {
//         'id': 'mcj10',
//         'category': 'culture',
//         'categoryName': 'Культура и искусство',
//         'categoryCount': 5
//     },
//     {
//         'id': 'mcj11',
//         'category': 'science',
//         'categoryName': 'Наука и образование',
//         'categoryCount': 2
//     },
//     {
//         'id': 'mcj12',
//         'category': 'publicistic',
//         'categoryName': 'Публицистическая литература',
//         'categoryCount': 0
//     },
//     {
//         'id': 'mcj13',
//         'category': 'references',
//         'categoryName': 'Справочники',
//         'categoryCount': 10
//     },
//     {
//         'id': 'mcj14',
//         'category': 'scifi',
//         'categoryName': 'Фантастика',
//         'categoryCount': 12
//     },
//     {
//         'id': 'mcj15',
//         'category': 'humor',
//         'categoryName': 'Юмористическая литература',
//         'categoryCount': 8
//     }
// ];

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
    // categories: mockCatgories,
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
