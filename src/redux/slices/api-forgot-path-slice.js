/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const apiForgotPassSlice = createSlice({
  name: 'apiForgotPass',
  initialState: {
    isLoadingForgotPass: false,
    isFormForgotPass: true,
    isFormForgotOk: false,
    isForgotPassError: false,
  },
  reducers: {
    startIsLoadingForgotPass(state) {
        state.isLoadingForgotPass = true;
    },
    toggleIsLoadingForgotPass(state, action) {
        state.isLoadingForgotPass = action.payload;
    },
    setIsFormForgotPass(state) {
        state.isFormForgotPass = true;
        state.isFormForgotOk = false;
    },
    setIsForgotPassOk(state) {
        state.isFormForgotPass = false;
        state.isFormForgotOk = true;
    },
    setIsForgotPassError(state) {
        state.isForgotPassError = true;
    },
  }
});

export const {
    startIsLoadingForgotPass,
    toggleIsLoadingForgotPass,
    setIsFormForgotPass,
    setIsForgotPassOk,
    setIsForgotPassError } = apiForgotPassSlice.actions;

export default apiForgotPassSlice.reducer;
