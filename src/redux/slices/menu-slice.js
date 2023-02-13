/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    openCategory: true,
    allBooksActive: true,
    openBurger: false
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
    }
  }
})

export const {
    toggleOpenCategory,
    toggleAllBooksActive,
    toggleOpenBurger } = menuSlice.actions

export default menuSlice.reducer
