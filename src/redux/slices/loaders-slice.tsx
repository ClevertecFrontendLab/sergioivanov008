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

export const {
    toggleIsLoaderVisible,
} = loadersSlice.actions;

export default loadersSlice.reducer;

