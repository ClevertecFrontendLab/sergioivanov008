import { createSlice } from '@reduxjs/toolkit';
import { RegistrationData } from '../../types/types';

export type StateRegistrationData = {
    registrationData: RegistrationData,
};

export type ApiRegistrationState = {
    isLoadingRegistration: boolean,
    isRegistrationOk: boolean,
    isRegistrationError409: boolean,
    isRegistrationError: boolean,
    registrationData: null | RegistrationData,
};

const initialState: ApiRegistrationState = {
    isLoadingRegistration: false,
    isRegistrationOk: false,
    isRegistrationError409: false,
    isRegistrationError: false,
    registrationData: null,
};

export const apiRegistrationSlice = createSlice({
  name: 'apiRegistration',
  initialState,
  reducers: {
    setRegistrationData(state, action) {
        state.registrationData = action.payload;
    },
    startIsLoadingRegistration(state, action) {
        state.isLoadingRegistration = true;
        state.registrationData = action.payload;
    },
    toggleIsLoadingRegistration(state, action) {
        state.isLoadingRegistration = action.payload;
    },
    resetRegistration(state) {
        state.isRegistrationOk = false;
        state.isRegistrationError409 = false;
        state.isRegistrationError = false;
    },
    setIsRegistrationOk(state) {
        state.isRegistrationOk = true;
    },
    setIsRegistrationError409(state) {
        state.isRegistrationError409 = true;
    },
    setIsRegistrationError(state) {
        state.isRegistrationError = true;
    },
  }
});

export const { reducer: apiRegistrationReducer, actions: apiRegistrationActions } = apiRegistrationSlice;

