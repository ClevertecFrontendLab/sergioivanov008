import { createSlice } from '@reduxjs/toolkit';
import { RegistrationData } from '../../types/types';

export type StateRegistrationData = {
    registrationData: RegistrationData,
};

export type ApiRegistrationState = {
    registrationData: null | RegistrationData,
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

