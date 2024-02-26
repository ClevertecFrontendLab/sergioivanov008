import { createSlice } from '@reduxjs/toolkit';
import { ForgotPassData, ForgotPassOkResponse, Nullable } from '../../types/types';

export type ApiForgotPassState = {
    forgotPassData: Nullable<ForgotPassData>,
    forgotPassOkResponse: Nullable<ForgotPassOkResponse>,
    canConfirmPage: boolean,
};

const initialState: ApiForgotPassState = {
    forgotPassData: null,
    forgotPassOkResponse: null,
    canConfirmPage: false,
};

export const apiForgotPassSlice = createSlice({
  name: 'apiForgotPass',
  initialState,
  reducers: {
    resetForgotPassData(state) {
        state.forgotPassData = null;
        state.forgotPassOkResponse = null;
    },
    startForgotPass(state, action) {
        state.forgotPassData = action.payload;
    },
    setForgotPassOkResponse(state, action) {
        state.forgotPassOkResponse = action.payload;
    },
    setCanConfirmPage(state, action) {
        state.canConfirmPage = action.payload;
    }
  }
});

export const { reducer: apiForgotPassReducer, actions: apiForgotPassActions } = apiForgotPassSlice;

