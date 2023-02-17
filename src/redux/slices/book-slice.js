/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

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
        // book: mockBook,
        book: [],
        isLoading: false,
        isError: false,
        canUse: false
    },
    reducers: {
        getBookFetch: (state) => {
            state.isLoading = true;
        },
        getBookSuccess: (state, action) => {
            state.book = action.payload;
            state.isLoading = false;
            state.canUse = true;
        },
        getBookFailure: (state) => {
            state.book = [];
            state.isLoading = false;
            state.isError = true;
            state.canUse = false;
        },
        setIsErrorBook: (state, action) => {
            state.isError = action.payload;
        }
    }
})

export const {
    getBookFetch,
    getBookSuccess,
    getBookFailure,
    setIsErrorBook } = bookSlice.actions

export default bookSlice.reducer
