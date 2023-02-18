/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
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
