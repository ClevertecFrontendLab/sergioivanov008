/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const apiAuthSlice = createSlice({
  name: 'apiAuth',
  initialState: {
    isLoadingAuth: false,
    isFormAuth: true,
    isAuthError400: false,
    isAuthError: false,
    authData: null,
    isAuth: false,
  },
  reducers: {
    setAuthData(state, action) {
        state.authData = action.payload;
    },
    startIsLoadingAuth(state) {
        state.isLoadingAuth = true;
    },
    toggleIsLoadingAuth(state, action) {
        state.isLoadingAuth = action.payload;
    },
    setIsFormAuth(state) {
        state.isFormAuth = true;
        state.isAuthError400 = false;
        state.isAuthError = false;
    },
    setIsAuthError400(state) {
        state.isAuthError400 = true;
    },
    setIsAuthError(state) {
        state.isFormAuth = false;
        state.isAuthError = true;
    },
    setIsAuth(state, action) {
        state.isAuth = action.payload;
    },
  }
});

export const {
    setAuthData,
    startIsLoadingAuth,
    toggleIsLoadingAuth,
    setIsFormAuth,
    setIsAuthError400,
    setIsAuthError,
    setIsAuth } = apiAuthSlice.actions;

export default apiAuthSlice.reducer;
