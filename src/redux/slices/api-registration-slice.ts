import { createSlice } from '@reduxjs/toolkit';
import { LoginRegistrationData, Nullable } from '../../types/types';

export type ApiRegistrationState = {
    registrationData: Nullable<LoginRegistrationData>,
};

const initialState: ApiRegistrationState = {
    registrationData: null,
};

export const apiRegistrationSlice = createSlice({
  name: 'apiRegistration',
  initialState,
  reducers: {
    resetRegistrationData(state) {
        state.registrationData = null;
    },
    startRegistration(state, action) {
        state.registrationData = action.payload;
    },
  }
});

export const { reducer: apiRegistrationReducer, actions: apiRegistrationActions } = apiRegistrationSlice;

