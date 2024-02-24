import { createSlice } from '@reduxjs/toolkit';
import { ForgotPassData } from '../../types/types';

export type ApiForgotPassState = {
    forgotPassData: null | ForgotPassData,
};

const initialState: ApiForgotPassState = {
    forgotPassData: null,
};

export const apiForgotPassSlice = createSlice({
  name: 'apiForgotPass',
  initialState,
  reducers: {
    resetForgotPassData(state) {
        state.forgotPassData = null;
    },
    startForgotPass(state, action) {
        state.forgotPassData = action.payload;
    },
  }
});

export const { reducer: apiForgotPassReducer, actions: apiForgotPassActions } = apiForgotPassSlice;

