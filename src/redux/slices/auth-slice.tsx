import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    toggleIsAuth(state, action) {
        state.isAuth = action.payload;
    },
  }
});

export const {
    toggleIsAuth,
} = authSlice.actions;

export default authSlice.reducer;

