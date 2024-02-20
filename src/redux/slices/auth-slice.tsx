import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    email: '',
    isEmailValid: false,
    password: '',
    isPasswordValid: false,
    confirmPassword: '',
    isConfirmPasswordValid: false,
    rememberMe: true,
  },
  reducers: {
        toggleIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        resetRegData(state) {
            state.email = '';
            state.isEmailValid = false;
            state.password = '';
            state.isPasswordValid = false;
            state.confirmPassword = '';
            state.isConfirmPasswordValid = false;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setIsEmailValid(state, action) {
            state.isEmailValid = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setIsPasswordValid(state, action) {
            state.isPasswordValid = action.payload;
        },
        setConfirmPassword(state, action) {
            state.confirmPassword = action.payload;
        },
        setIsConfirmPasswordValid(state, action) {
            state.isConfirmPasswordValid = action.payload;
        },
        setRememberMe(state, action) {
            state.rememberMe = action.payload;
        },
    }
});

export const {
    toggleIsAuth,
    resetRegData,
    setEmail,
    setIsEmailValid,
    setPassword,
    setIsPasswordValid,
    setConfirmPassword,
    setIsConfirmPasswordValid,
    setRememberMe,
} = authSlice.actions;

export default authSlice.reducer;

