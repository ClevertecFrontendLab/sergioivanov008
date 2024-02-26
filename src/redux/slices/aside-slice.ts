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

export const { reducer: asideReducer, actions: asideActions } = asideSlice;
