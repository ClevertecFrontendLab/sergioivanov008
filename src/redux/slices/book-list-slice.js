/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const bookListSlice = createSlice({
  name: 'bookList',
  initialState: {
    listView: true,
    sortDescend: true
  },
  reducers: {
    toggleListView(state, action) {
        state.listView = action.payload;
    },
    setSortDescend(state, action) {
        state.sortDescend = action.payload;
    }
  }
})

export const { toggleListView, setSortDescend } = bookListSlice.actions

export default bookListSlice.reducer
