/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const apiRegistrationSlice = createSlice({
  name: 'apiRegistration',
  initialState: {
    isLoadingRegistration: false,
    isFormRegistration: true,
    isRegistrationOk: false,
    isRegistrationError400: false,
    isRegistrationError: false,
    registrationData: null,
  },
  reducers: {
    setRegistrationData(state, action) {
        state.registrationData = action.payload;
    },
    startIsLoadingRegistration(state) {
        state.isLoadingRegistration = true;
    },
    toggleIsLoadingRegistration(state, action) {
        state.isLoadingRegistration = action.payload;
    },
    setIsFormRegistration(state) {
        state.isFormRegistration = true;
        state.isRegistrationOk = false;
        state.isRegistrationError400 = false;
        state.isRegistrationError = false;
    },
    setIsRegistrationOk(state) {
        state.isFormRegistration = false;
        state.isRegistrationOk = true;
    },
    setIsRegistrationError400(state) {
        state.isFormRegistration = false;
        state.isRegistrationError400 = true;
    },
    setIsRegistrationError(state) {
        state.isFormRegistration = false;
        state.isRegistrationError = true;
    },
  }
});

export const {
    setRegistrationData,
    startIsLoadingRegistration,
    toggleIsLoadingRegistration,
    setIsFormRegistration,
    setIsRegistrationOk,
    setIsRegistrationError400,
    setIsRegistrationError } = apiRegistrationSlice.actions;

export default apiRegistrationSlice.reducer;
