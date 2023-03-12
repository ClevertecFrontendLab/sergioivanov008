/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const apiRecoveryPassSlice = createSlice({
  name: 'apiRecoveryPass',
  initialState: {
    isLoadingRecoveryPass: false,
    isFormRecoveryPass: true,
    isFormRecoveryPassOk: false,
    isFormRecoveryPassError: false,
    recoveryPassData: null,
  },
  reducers: {
    setRecoveryPassData(state, action) {
        state.recoveryPassData = action.payload;
    },
    startIsLoadingRecoveryPass(state) {
        state.isLoadingRecoveryPass = true;
    },
    toggleIsLoadingRecoveryPass(state, action) {
        state.isLoadingRecoveryPass = action.payload;
    },
    setIsFormRecoveryPass(state) {
        state.isFormRecoveryPass = true;
        state.isFormRecoveryPassOk = false;
        state.isFormRecoveryPass = false;
    },
    setIsFormRecoveryPasstOk(state) {
        state.isFormRecoveryPass = false;
        state.isFormRecoveryPassOk = true;
        state.isFormRecoveryPass = false;
    },
    setIsFormRecoveryPassError(state) {
        state.isFormRecoveryPass = false;
        state.isFormRecoveryPassOk = false;
        state.isFormRecoveryPass = true;
    },
  }
});

export const {
    setRecoveryPassData,
    startIsLoadingRecoveryPass,
    toggleIsLoadingRecoveryPass,
    setIsFormRecoveryPass,
    setIsFormRecoveryPasstOk,
    setIsFormRecoveryPassError } = apiRecoveryPassSlice.actions;

export default apiRecoveryPassSlice.reducer;
