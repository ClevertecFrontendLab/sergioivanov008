import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
        {
            'id': 'mcj1',
            'category': 'books',
            'categoryName': 'Все книги',
            'categoryCount': null
        },
        {
            'id': 'mcj2',
            'category': 'business',
            'categoryName': 'Бизнес-книги',
            'categoryCount': 14
        },
        {
            'id': 'mcj3',
            'category': 'detective',
            'categoryName': 'Детективы',
            'categoryCount': 8
        },
        {
            'id': 'mcj4',
            'category': 'children',
            'categoryName': 'Детские книги',
            'categoryCount': 14
        },
        {
            'id': 'mcj5',
            'category': 'foreign',
            'categoryName': 'Зарубежная литература',
            'categoryCount': 2
        },
        {
            'id': 'mcj6',
            'category': 'history',
            'categoryName': 'История',
            'categoryCount': 5
        },
        {
            'id': 'mcj7',
            'category': 'classic',
            'categoryName': 'Классическая литература',
            'categoryCount': 12
        },
        {
            'id': 'mcj8',
            'category': 'psychology',
            'categoryName': 'Книги по психологии',
            'categoryCount': 11
        },
        {
            'id': 'mcj9',
            'category': 'computers',
            'categoryName': 'Компьютерная литература',
            'categoryCount': 54
        },
        {
            'id': 'mcj10',
            'category': 'culture',
            'categoryName': 'Культура и искусство',
            'categoryCount': 5
        },
        {
            'id': 'mcj11',
            'category': 'science',
            'categoryName': 'Наука и образование',
            'categoryCount': 2
        },
        {
            'id': 'mcj12',
            'category': 'publicistic',
            'categoryName': 'Публицистическая литература',
            'categoryCount': 0
        },
        {
            'id': 'mcj13',
            'category': 'references',
            'categoryName': 'Справочники',
            'categoryCount': 10
        },
        {
            'id': 'mcj14',
            'category': 'scifi',
            'categoryName': 'Фантастика',
            'categoryCount': 12
        },
        {
            'id': 'mcj15',
            'category': 'humor',
            'categoryName': 'Юмористическая литература',
            'categoryCount': 8
        }
    ]
  },
  reducers: {}
})

// Action creators are generated for each case reducer function
export const { xxx } = categoriesSlice.actions

export default categoriesSlice.reducer
