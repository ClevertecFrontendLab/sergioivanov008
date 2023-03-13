/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    openCategory: true,
    openBurger: false,
    openSmallMenu: false,
    isActiveBooks: true
  },
  reducers: {
    toggleOpenCategory(state, action) {
        state.openCategory = action.payload;
    },
    toggleOpenBurger(state, action) {
        state.openBurger = action.payload;
    },
    toggleOpenSmallMenu(state, action) {
        state.openSmallMenu = action.payload;
    },
    toggleIsActiveBooks(state, action) {
        state.isActiveBooks = action.payload;
    }
  }
})

export const {
    toggleOpenCategory,
    toggleOpenBurger,
    toggleOpenSmallMenu,
    toggleIsActiveBooks } = menuSlice.actions

export default menuSlice.reducer
