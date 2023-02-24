/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const bookListSlice = createSlice({
  name: 'bookList',
  initialState: {
    listView: true,
    searchQuery: '',
    sortDescend: true,
    actualBooks: []
  },
  reducers: {
    toggleListView(state, action) {
        state.listView = action.payload;
    },
    setSortDescend(state, action) {
        state.sortDescend = action.payload;
    },
    setSearchQuery(state, action) {
        state.searchQuery = action.payload;
    },
    setActualBooks(state, action) {
        state.actualBooks = action.payload;
    }
  }
});

export const {
    toggleListView,
    setSortDescend,
    setSearchQuery,
    setActualBooks } = bookListSlice.actions;

export default bookListSlice.reducer;
