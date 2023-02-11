/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const bookListSlice = createSlice({
  name: 'listView',
  initialState: {
    listView: true
  },
  reducers: {
    toggleListView(state, action) {
        state.listView = action.payload;
      }
  }
})

// Action creators are generated for each case reducer function
export const { toggleListView } = bookListSlice.actions

export default bookListSlice.reducer
