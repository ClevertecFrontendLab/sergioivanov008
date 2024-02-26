import { createSlice } from '@reduxjs/toolkit';
import { ConfirmPassData, Nullable } from '../../types/types';

export type ApiConfirmPassState = {
    confirmPassData: Nullable<ConfirmPassData>,
    confirmInputValue: string,
    isErrorConfirmCode: boolean,
    canChangePassPage: boolean,
};

const initialState: ApiConfirmPassState = {
    confirmPassData: null,
    confirmInputValue: '',
    isErrorConfirmCode: false,
    canChangePassPage: false,
};

export const apiConfirmPassSlice = createSlice({
  name: 'apiConfirmPass',
  initialState,
  reducers: {
    setConfirmInputValue(state, action) {
        state.confirmInputValue = action.payload;
    },
    resetConfirmPassState(state) {
        state.confirmPassData = null;
        state.confirmInputValue = '';
    },
    startConfirmPass(state, action) {
        state.canChangePassPage = true;
        state.confirmPassData = action.payload;
    },
    setIsErrorConfirmCode(state, action) {
        state.isErrorConfirmCode = action.payload;
    },
  }
});

export const { reducer: apiConfirmPassReducer, actions: apiConfirmPassActions } = apiConfirmPassSlice;

