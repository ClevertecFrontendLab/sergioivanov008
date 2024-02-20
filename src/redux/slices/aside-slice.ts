import { createSlice } from '@reduxjs/toolkit'

export const asideSlice = createSlice({
  name: 'acide',
  initialState: {
    isAsideCollapsed: false,
  },
  reducers: {
    toggleIsAsideCollapsed(state, action) {
        state.isAsideCollapsed = action.payload;
    },
  }
})

export const {
    toggleIsAsideCollapsed,
} = asideSlice.actions

export default asideSlice.reducer;

