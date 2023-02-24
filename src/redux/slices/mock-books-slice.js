/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const mockBooks = [
    {
        issueYear: '2019',
        rating: 3,
        title: 'Построение бизнес-моделей: Настольная книга стратега и новатора',
        authors: [
            'Александр Остервальдер'
            ],
        image: {
            url: '/uploads/10209755_0_Postroenie_biznes_modeley_Nastolnaya_kniga_stratega_i_novatora_Aleksandr_Ostervalder_Iv_Pine_931aabe20f.jpg'
            },
        // image: null,
        categories: [
            'Бизнес'
            ],
        id: 2,
        booking: null,
        delivery: null,
        histories: null
    },
    {
        issueYear: '2018',
        rating: null,
        title: 'Разработка ценностных предложений: Как создавать товары и услуги, которые захотят купить потребители',
        authors: [
            'Александр Остервальдер'
            ],
        image: {
            url: '/uploads/10442229_0_5d1c5827e4.jpg'
            },
        categories: [
            'Бизнес'
            ],
        id: 3,
        booking: {
            id: 130,
            order: true,
            dateOrder: '2023-01-24T13:31:42.192Z',
            customerId: 5,
            customerFirstName: 'Дарья',
            customerLastName: 'Бичан'
            },
        delivery: null,
        histories: [
                {
                id: 60,
                userId: 5
                }
            ]
    },
    {
        issueYear: '2019',
        rating: null,
        title: 'Хулиномика 3.0: хулиганская экономика. Еще толще. Еще длиннее',
        authors: [
        'Алексей Марков'
        ],
        image: {
        url: '/uploads/10849349_0_89b742cffa.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 4,
        booking: null,
        delivery: null,
        histories: [
        {
        id: 40,
        userId: 6
        }
        ]
    },
    {
        issueYear: '2020',
        rating: null,
        title: 'Жлобология. Откуда берутся деньги и почему не у меня',
        authors: [
        'Алексей Марков'
        ],
        image: {
        url: '/uploads/10827932_0_b1fc6336fa.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 5,
        booking: null,
        delivery: null,
        histories: [
        {
        id: 3,
        userId: 1
        }
        ]
    },
    {
        issueYear: '2018',
        rating: null,
        title: 'Разумный инвестор: Полное руководство по стоимостному инвестированию',
        authors: [
        'Бенджамин Грэм'
        ],
        image: {
        url: '/uploads/1027828_0_93fce05fab.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 6,
        booking: null,
        delivery: null,
        histories: null
    },
    {
        issueYear: '2018',
        rating: null,
        title: 'Мастер времени',
        authors: [
        'Брайан Трейси'
        ],
        image: {
        url: '/uploads/10689720_0_Master_vremeni_Brayan_Treysi_e841bace3e.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 7,
        booking: null,
        delivery: null,
        histories: null
    },
    {
        issueYear: '2019',
        rating: null,
        title: 'Дожим клиента: 28 способов продавать день в день',
        authors: [
        'Владимир Якуба'
        ],
        image: {
        url: '/uploads/e912cd09078d6995ed49cececff66be7_e52b9aa044.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 8,
        booking: null,
        delivery: null,
        histories: null
    },
    {
        issueYear: '2020',
        rating: null,
        title: 'Продажник на всю голову: Крутые стратегии профессионала',
        authors: [
        'Владимир Якуба'
        ],
        image: {
        url: '/uploads/10782569_0_3cdfa87016.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 9,
        booking: null,
        delivery: null,
        histories: null
    },
    {
        issueYear: '2020',
        rating: 3,
        title: 'Продажник идет в сеть. Как продавать через мессенджеры и соцсети',
        authors: [
        'Владмир Якуба'
        ],
        image: {
        url: '/uploads/10903761_0_dd519b2e4c.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 10,
        booking: null,
        delivery: null,
        histories: [
        {
        id: 9,
        userId: 2
        }
        ]
    },
    {
        issueYear: '2019',
        rating: 1.67,
        title: '101 способ раскрутки личного бренда. Как сделать себе имя',
        authors: [
        'Вячеслав Семенчук'
        ],
        image: {
        url: '/uploads/10859003_0_134ef8a55d.jpg'
        },
        categories: [
        'Бизнес'
        ],
        id: 11,
        booking: null,
        delivery: null,
        histories: [
        {
        id: 7,
        userId: 4
        },
        {
        id: 59,
        userId: 11
        }
        ]
    }
];

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    // books: [],
    books: mockBooks,
    isLoading: false,
    isError: false,
    canUse: false
  },
  reducers: {
    getBooksFetch: (state) => {
        state.isLoading = true;
    },
    getBooksSuccess: (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
        state.canUse = true;
    },
    getBooksFailure: (state) => {
        state.books = [];
        state.isLoading = false;
        state.isError = true;
        state.canUse = false;
    },
    setIsErrorBooks: (state, action) => {
        state.isError = action.payload;
    },
    setCanUseBooks: (state, action) => {
        state.canUse = action.payload;
    },
    deleteBooks: (state) => {
        state.books = [];
    }
  }
})

export const {
    getBooksFetch,
    getBooksSuccess,
    getBooksFailure,
    setIsErrorBooks,
    setCanUseBooks,
    deleteBooks } = booksSlice.actions

export default booksSlice.reducer
