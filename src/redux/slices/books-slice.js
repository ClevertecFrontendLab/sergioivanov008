/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// import sliderImg1 from '../../assets/swiper-images/slider01.png';
// import sliderImg2 from '../../assets/swiper-images/slider02.png';
// import sliderImg3 from '../../assets/swiper-images/slider03.png';
// import sliderImg4 from '../../assets/swiper-images/slider04.png';
// import sliderImg5 from '../../assets/swiper-images/slider05.png';

// const mockBooks = [
//     {
//         'id': 'mbj1',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Адитья Бхаргава',
//         'title': 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
//         'rating': 4.3,
//         'year': 2019,
//         'coverImages': [],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj2',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Патрик Нимейер, Дэниэл Леук',
//         'title': 'Программирование на JAVA',
//         'rating': 4.3,
//         'year': 2013,
//         'coverImages': [sliderImg1],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj3',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Джи Ким, Нейт Купер',
//         'title': 'Как создать сайт. Комикс-путеводитель по HTML, CSS и WordPress',
//         'rating': 4.3,
//         'year': 2019,
//         'coverImages': [sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj4',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Бен Фрейн',
//         'title': 'HTML5 и CSS3. Разработка сайтов для любых браузеров и устройств',
//         'rating': 4.3,
//         'year': 2014,
//         'coverImages': [],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj5',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Гэри Розенцвейг',
//         'title': 'Adobe Flash. Создание аркад, головоломок и других игр с помощью ActionScript',
//         'rating': 4.3,
//         'year': 2009,
//         'coverImages': [sliderImg1],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj6',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Гэри Розенцвейг',
//         'title': 'Грокаем алгоритмы. Иллюстрированное',
//         'rating': 4.3,
//         'year': 2013,
//         'coverImages': [sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj7',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Эстель Вейл',
//         'title': 'HTML5. Разработка приложений для мобильных устройств',
//         'rating': 4.3,
//         'year': 2015,
//         'coverImages': [],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj8',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Олег Поломошнов',
//         'title': 'Быстро и легко создаем, программируем и раскручиваем',
//         'rating': 4.3,
//         'year': 2011,
//         'coverImages': [sliderImg1],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj9',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Борис Пахомов',
//         'title': 'Грокаем алгоритмы. Иллюстрированное',
//         'rating': 4.3,
//         'year': 2014,
//         'coverImages': [sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     },
//     {
//         'id': 'mbj10',
//         'category': 'business',
//         'categoryName': 'Бизнес-книги',
//         'author': 'Адитья Бхаргава',
//         'title': 'Грокаем алгоритмы. Иллюстрированное пособие для',
//         'rating': 4.3,
//         'year': 2019,
//         'coverImages': [sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5],
//         'commonFullDescription1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
//         'commonFullDescription2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
//     }
// ];

const mockBooks = [
    {
        issueYear: '2019',
        rating: 3,
        title: 'Построение бизнес-моделей: Настольная книга стратега и новатора',
        authors: [
            'Александр Остервальдер'
            ],
        // image: {
        //     url: '/uploads/10209755_0_Postroenie_biznes_modeley_Nastolnaya_kniga_stratega_i_novatora_Aleksandr_Ostervalder_Iv_Pine_931aabe20f.jpg'
        //     },
        image: null,
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
        issueYear: "2020",
        rating: null,
        title: "Продажник на всю голову: Крутые стратегии профессионала",
        authors: [
        "Владимир Якуба"
        ],
        image: {
        url: "/uploads/10782569_0_3cdfa87016.jpg"
        },
        categories: [
        "Бизнес"
        ],
        id: 9,
        booking: null,
        delivery: null,
        histories: null
    },
    {
        issueYear: "2020",
        rating: 3,
        title: "Продажник идет в сеть. Как продавать через мессенджеры и соцсети",
        authors: [
        "Владмир Якуба"
        ],
        image: {
        url: "/uploads/10903761_0_dd519b2e4c.jpg"
        },
        categories: [
        "Бизнес"
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
        issueYear: "2019",
        rating: 1.67,
        title: "101 способ раскрутки личного бренда. Как сделать себе имя",
        authors: [
        "Вячеслав Семенчук"
        ],
        image: {
        url: "/uploads/10859003_0_134ef8a55d.jpg"
        },
        categories: [
        "Бизнес"
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
    books: mockBooks,
    // books: [],
    isLoading: false,
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
        state.canUse = false;
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
    setCanUseBooks,
    deleteBooks } = booksSlice.actions

export default booksSlice.reducer
