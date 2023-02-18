/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    openCategory: true,
    allBooksActive: true,
    openBurger: false,
    isActiveBooks: true
  },
  reducers: {
    toggleOpenCategory(state, action) {
        state.openCategory = action.payload;
    },
    toggleAllBooksActive(state, action) {
        state.allBooksActive = action.payload;
    },
    toggleOpenBurger(state, action) {
        state.openBurger = action.payload;
    },
    toggleIsActiveBooks(state, action) {
        state.isActiveBooks = action.payload;
    }
  }
})

export const {
    toggleOpenCategory,
    toggleAllBooksActive,
    toggleOpenBurger,
    toggleIsActiveBooks } = menuSlice.actions

export default menuSlice.reducer
