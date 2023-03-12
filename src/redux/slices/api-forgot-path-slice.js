/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const apiForgotPassSlice = createSlice({
  name: 'apiForgotPass',
  initialState: {
    isLoadingForgotPass: false,
    isFormForgotPass: true,
    isFormForgotOk: false,
    isFormRecoveryPass: false,
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
        state.isFormRecoveryPass = false;
    },
    setIsFormForgotOk(state) {
        state.isFormForgotPass = false;
        state.isFormForgotOk = true;
        state.isFormRecoveryPass = false;
    },
    setIsFormRecoveryPass(state) {
        state.isFormForgotPass = false;
        state.isFormForgotOk = false;
        state.isFormRecoveryPass = true;
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
    setIsFormForgotOk,
    setIsFormRecoveryPass,
    setIsForgotPassError } = apiForgotPassSlice.actions;

export default apiForgotPassSlice.reducer;
