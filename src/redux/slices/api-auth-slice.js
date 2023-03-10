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
        state.isFormAuth = false;
        state.isAuthError400 = true;
    },
    setIsAuthError(state) {
        state.isFormAuth = false;
        state.isAuthError = true;
    },
  }
});

export const {
    setAuthData,
    startIsLoadingAuth,
    toggleIsLoadingAuth,
    setIsFormAuth,
    setIsAuthError400,
    setIsAuthError } = apiAuthSlice.actions;

export default apiAuthSlice.reducer;
