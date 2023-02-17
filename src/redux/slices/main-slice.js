/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    canUseCategoriesAndBooks: true,
  },
  reducers: {
    toggleCanUseCategoriesAndBooks(state, action) {
        state.canUseCategoriesAndBooks = action.payload;
    }
  }
})

export const { toggleCanUseCategoriesAndBooks } = mainSlice.actions

export default mainSlice.reducer
