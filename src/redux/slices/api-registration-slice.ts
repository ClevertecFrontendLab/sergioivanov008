import { createSlice } from '@reduxjs/toolkit';
import { LoginRegistrationData } from '../../types/types';

export type StateRegistrationData = {
    registrationData: LoginRegistrationData,
};

export type ApiRegistrationState = {
    registrationData: null | LoginRegistrationData,
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

