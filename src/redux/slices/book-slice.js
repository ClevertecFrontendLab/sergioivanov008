/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        book: [],
        isLoading: false,
        isError: false,
        canUse: false,
        tempCategory: 'Бизнес'
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
        },
        setTempCategory: (state, action) => {
            state.tempCategory = action.payload;
        }
    }
})

export const {
    getBookFetch,
    getBookSuccess,
    getBookFailure,
    setIsErrorBook,
    setTempCategory } = bookSlice.actions

export default bookSlice.reducer
