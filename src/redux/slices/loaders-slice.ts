import { createSlice } from '@reduxjs/toolkit'

export const loadersSlice = createSlice({
  name: 'loaders',
  initialState: {
    isLoaderVisible: false,
  },
  reducers: {
    toggleIsLoaderVisible(state, action) {
        state.isLoaderVisible = action.payload;
    },
  }
});

export const { reducer: loadersReducer, actions: loadersActions } = loadersSlice;
