/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const loadersSlice = createSlice({
  name: 'loaders',
  initialState: {
    isLoaderVisible: false,
    isErrorLoaderVisible: false
  },
  reducers: {
    toggleLoader(state, action) {
        state.isLoaderVisible = action.payload;
    },
    toggleErrorLoader(state, action) {
        state.isErrorLoaderVisible = action.payload;
    }
  }
})

export const { toggleLoader, toggleErrorLoader } = loadersSlice.actions

export default loadersSlice.reducer
