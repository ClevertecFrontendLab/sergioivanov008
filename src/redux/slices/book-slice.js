import { createSlice } from '@reduxjs/toolkit'

const mockBookOld = {
    'common_name': 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    'common_author': 'Адитья Бхаргава, 2019',
    'common_order-btn': 'забронировать',
    'common_about': 'О книге',
    'common_full-description-1': 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?',
    'common_full-description-2': 'Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    'book-rating_name': 'рейтинг',
    'book-rating_score': 4.3,
    'book-detail-information': 'Подробная информация'
};

const mockBook = {
    id: 2,
    title: 'Построение бизнес-моделей: Настольная книга стратега и новатора',
    rating: 3,
    issueYear: '2019',
    description: 'Книга предлагает оригинальную концепцию анализа, построения и совершенствования бизнес-моделей, которой пользуются крупнейшие компании мира, включая Google, IBM, Ericsson. Авторы предлагают простой и понятный способ визуального представления основных факторов, влияющих на успех любой организации: потребительские сегменты, ценностные предложения, каналы сбыта, взаимоотношения с клиентами, потоки поступления доходов, ключевые ресурсы, ключевые виды деятельности, ключевые партнеры, структура издержек. Большой лист бумаги и блок стикеров — вот и все, что понадобится для освоения авторского метода создания бизнес-моделей. А еще креативность, острый ум и упорство членов команды, работающей над проектом.\nКнига адресована предпринимателям и руководителям, которые хотели бы создать новую или реорганизовать имеющуюся модель бизнеса.',
    publish: 'Алпина Паблишер',
    pages: '288',
    cover: 'Мягкая обложка',
    weight: '685',
    format: '60x90/8',
    ISBN: '978-0470-87641-1',
    producer: 'АО «Первая образцовая типография» ',
    authors: [
        'Александр Остервальдер'
    ],
    images: [
        // {
        //     url: '/uploads/10209755_0_Postroenie_biznes_modeley_Nastolnaya_kniga_stratega_i_novatora_Aleksandr_Ostervalder_Iv_Pine_931aabe20f.jpg'
        // }
    ],
    categories: [
        'Бизнес'
    ],
    comments: [
        {
            id: 18,
            rating: 3,
            text: '53',
            createdAt: '2023-01-26T18:28:10.039Z',
            user: {
                commentUserId: 14,
                firstName: 'qwerty',
                lastName: 'qwerty',
                avatarUrl: null
            }
        }
    ],
    booking: null,
    delivery: null,
    histories: null
};

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        // book: mockBookOld,
        book: mockBook,
        canUse: true
    },
    reducers: {}
})

// Action creators are generated for each case reducer function
export const { xxx } = bookSlice.actions

export default bookSlice.reducer
